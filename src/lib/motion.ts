type Bezier = [number, number, number, number];

export const ease: Record<"out" | "standard" | "soft", Bezier> = {
  out: [0.16, 1, 0.3, 1],
  standard: [0.2, 0, 0, 1],
  soft: [0.65, 0, 0.35, 1],
};

// seconds (motion's unit)
export const dur = { instant: 0.1, fast: 0.16, base: 0.24, slow: 0.4, hero: 0.7 } as const;

export const reveal = { distance: 16, stagger: 0.06, maxStagger: 5 } as const;
