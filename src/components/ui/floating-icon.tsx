"use client";

import * as m from "motion/react-m";
import { dur, ease } from "@/lib/motion";

export function FloatingIcon({
  children,
  className,
  delay = 0,
  yDuration = 7,
  rotateDuration = 12,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yDuration?: number;
  rotateDuration?: number;
}) {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        opacity: { duration: dur.base, delay },
        scale: { duration: dur.base, delay, ease: ease.out }
      }}
      className={className}
    >
      <m.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          y: { duration: yDuration, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: rotateDuration, repeat: Infinity, ease: "easeInOut" },
        }}
        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-bg-2 p-2 shadow-lg transition-colors hover:border-accent-500 hover:bg-bg-3"
      >
        {children}
      </m.div>
    </m.div>
  );
}
