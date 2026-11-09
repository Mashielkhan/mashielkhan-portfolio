"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { fadeInUp, viewportOnce, createStaggerItem, ease } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  as?: "div" | "li";
  index?: number; // stagger position (capped)
  className?: string;
  spotlight?: boolean; // adds the cursor-glow effect
  variant?: "default" | "fast"; // animation speed variant
};

export function Reveal({
  children,
  as = "div",
  index = 0,
  className,
  spotlight,
  variant = "default",
}: RevealProps) {
  const variantConfig = variant === "fast" ? { duration: 0.24, ease: ease.outExpo } : {};

  const props = {
    "data-reveal": true,
    ...(spotlight && { "data-spotlight": "" }),
    className: cn(spotlight && "spotlight", className),
    initial: fadeInUp.initial,
    whileInView: fadeInUp.animate,
    viewport: viewportOnce,
    transition: {
      ...fadeInUp.transition,
      ...variantConfig,
      delay: createStaggerItem(index).transition.delay,
    },
  };

  return as === "li" ? <m.li {...props}>{children}</m.li> : <m.div {...props}>{children}</m.div>;
}
