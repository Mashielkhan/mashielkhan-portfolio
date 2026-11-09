import type { Easing } from "motion/react";

export const ease = {
  out: [0.16, 1, 0.3, 1] as Easing,
  standard: [0.2, 0, 0, 1] as Easing,
  soft: [0.65, 0, 0.35, 1] as Easing,
  outExpo: [0.16, 1, 0.3, 1] as Easing,
} as const;

// seconds (motion's unit)
export const dur = { instant: 0.1, fast: 0.16, base: 0.24, slow: 0.4, hero: 0.7 } as const;

export const reveal = { distance: 16, stagger: 0.06, maxStagger: 5 } as const;

/**
 * Shared animation variants for consistent, premium motion across the portfolio.
 * All variants respect prefers-reduced-motion via the MotionProvider (reducedMotion="user").
 */

// Entrance variants - fade + translateY
export const fadeInUp = {
  initial: { opacity: 0, y: reveal.distance },
  animate: { opacity: 1, y: 0 },
  transition: { duration: dur.slow, ease: ease.outExpo },
};

export const fadeInUpFast = {
  initial: { opacity: 0, y: reveal.distance },
  animate: { opacity: 1, y: 0 },
  transition: { duration: dur.base, ease: ease.outExpo },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: dur.base, ease: ease.standard },
};

export const fadeInSlow = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: dur.hero, ease: ease.outExpo },
};

// Stagger container for orchestrating children
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: reveal.stagger,
      delayChildren: 0,
    },
  },
};

export const staggerContainerDelayed = (delay: number) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: reveal.stagger,
      delayChildren: delay,
    },
  },
});

// Interactive variants - spring-based for tactile feel
export const hoverLift = {
  y: -4,
  transition: { duration: dur.fast, ease: ease.out },
};

export const hoverLiftCard = {
  y: -8,
  transition: { duration: dur.base, ease: ease.outExpo },
};

export const tapScale = {
  scale: 0.97,
  transition: { duration: dur.instant, ease: ease.standard },
};

export const focusRing = {
  boxShadow: "0 0 0 3px var(--color-accent-500)",
  transition: { duration: dur.fast, ease: ease.standard },
};

// Slide variants for mobile menu, bars, etc.
export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: dur.base, ease: ease.outExpo },
};

export const slideDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: dur.base, ease: ease.outExpo },
};

export const slideInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
  transition: { duration: dur.base, ease: ease.outExpo },
};

// Scale variants for buttons, chips, cards
export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: dur.base, ease: ease.outExpo },
};

export const hoverScale = {
  scale: 1.02,
  transition: { duration: dur.fast, ease: ease.out },
};

// Viewport options for scroll-triggered animations
export const viewportOnce = { once: true, amount: 0.2 };
export const viewportOnceSmall = { once: true, amount: 0.1 };

// Utility to create staggered child variants
export const createStaggerItem = (index: number, maxStagger = reveal.maxStagger) => ({
  transition: {
    delay: Math.min(index, maxStagger) * reveal.stagger,
  },
});

// Reduced-motion safe spring config
export const springGentle = { type: "spring", stiffness: 300, damping: 30 };
export const springSnappy = { type: "spring", stiffness: 400, damping: 25 };