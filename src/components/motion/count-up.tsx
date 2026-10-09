"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { ease } from "@/lib/motion";

const format = (v: number, d: number, p: string, s: string) => `${p}${v.toFixed(d)}${s}`;

type CountUpProps = { to: number; decimals?: number; prefix?: string; suffix?: string };

export function CountUp({ to, decimals = 0, prefix = "", suffix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!inView || reduce || !el) return;
    const controls = animate(0, to, {
      duration: 0.9,
      ease: ease.out,
      onUpdate: (v) => {
        el.textContent = format(v, decimals, prefix, suffix);
      },
    });
    return () => controls.stop();
  }, [inView, reduce, to, decimals, prefix, suffix]);

  return <span ref={ref}>{format(to, decimals, prefix, suffix)}</span>;
}
