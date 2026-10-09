"use client";

import { useEffect } from "react";

export function SpotlightProvider() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    let raf = 0;
    let target: HTMLElement | null = null;
    let x = 0;
    let y = 0;

    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-spotlight]");

      if (!el) return;

      target = el;
      x = e.clientX;
      y = e.clientY;

      if (raf) return;

      raf = requestAnimationFrame(() => {
        raf = 0;
        if (!target) return;

        const r = target.getBoundingClientRect();
        target.style.setProperty("--mx", `${x - r.left}px`);
        target.style.setProperty("--my", `${y - r.top}px`);
      });
    };

    document.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      document.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
