"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { HeroPoster } from "./hero-poster";
import { cn } from "@/lib/cn";

const HeroScene = dynamic(() => import("./hero-scene"), { ssr: false });

type NavigatorExt = Navigator & {
  connection?: { saveData?: boolean };
};

/** One persistent visual surface shared by all homepage sections and project routes. */
export function HeroVisual() {
  const [armed, setArmed] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const nav = navigator as NavigatorExt;
    if (nav.connection?.saveData) return;
    const id = window.setTimeout(() => setArmed(true), 150);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className={cn(
        "absolute inset-0 transition-opacity duration-(--dur-hero)",
        ready && !failed ? "opacity-0" : "opacity-100",
      )}>
        <HeroPoster />
      </div>
      {armed && !failed && (
        <div className={cn(
          "absolute inset-0 transition-opacity duration-(--dur-hero)",
          ready ? "opacity-100" : "opacity-0",
        )}>
          <HeroScene onStatus={(status) => {
            if (status === "ready") setReady(true);
            else { setReady(false); setFailed(true); }
          }} />
        </div>
      )}
    </div>
  );
}
