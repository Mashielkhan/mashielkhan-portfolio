"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { dur, ease, reveal } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  as?: "div" | "li";
  index?: number; // stagger position (capped)
  className?: string;
  spotlight?: boolean; // adds the cursor-glow effect
};

export function Reveal({ children, as = "div", index = 0, className, spotlight }: RevealProps) {
  const props = {
    "data-reveal": true,
    ...(spotlight && { "data-spotlight": "" }),
    className: cn(spotlight && "spotlight", className),
    initial: { opacity: 0, y: reveal.distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: dur.slow,
      ease: ease.out,
      delay: Math.min(index, reveal.maxStagger) * reveal.stagger,
    },
  };

  return as === "li" ? <m.li {...props}>{children}</m.li> : <m.div {...props}>{children}</m.div>;
}
