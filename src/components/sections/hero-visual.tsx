"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion, useScroll, useTransform } from "motion/react";
import * as m from "motion/react-m";
import { HeroPoster } from "./hero-poster";
import { useMediaQuery } from "@/lib/use-media-query";
import { cn } from "@/lib/cn";

const HeroScene = dynamic(() => import("./hero-scene"), { ssr: false });

type NavigatorExt = Navigator & { connection?: { saveData?: boolean }; deviceMemory?: number };

export function HeroVisual() {
  const isDesktop = useMediaQuery("(min-width: 48rem)");
  const reduce = useReducedMotion();
  const [armed, setArmed] = useState(false); // eligible and past first paint
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  // Fallback policy: poster only on mobile, reduced motion, Save-Data, or low memory
  useEffect(() => {
    const nav = navigator as NavigatorExt;
    const lowEnd =
      nav.connection?.saveData || (nav.deviceMemory !== undefined && nav.deviceMemory < 4);
    if (!isDesktop || reduce || lowEnd) return;
    const id = window.setTimeout(() => setArmed(true), 400); // after LCP, not before
    return () => window.clearTimeout(id);
  }, [isDesktop, reduce]);

  const enabled = armed && isDesktop && !reduce && !failed;

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (v) => (isDesktop && !reduce ? v * 0.3 : 0));
  const opacity = useTransform(scrollY, [0, 700], [1, 0.25]);

  return (
    <m.div aria-hidden style={{ y, opacity }} className="pointer-events-none absolute inset-0">
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-(--dur-hero) ease-standard",
          ready && enabled && "opacity-0",
        )}
      >
        <HeroPoster />
      </div>

      {enabled && (
        <div
          className={cn(
            "absolute inset-y-0 right-0 w-full opacity-0 transition-opacity duration-(--dur-hero) ease-standard lg:w-[62%]",
            ready && "opacity-100",
          )}
        >
          <HeroScene
            onStatus={(s) => {
              if (s === "ready") setReady(true);
              else {
                setReady(false);
                setFailed(true);
              }
            }}
          />
        </div>
      )}
    </m.div>
  );
}
