"use client";

import { useEffect, useState } from "react";

export function HeaderShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("scroll-sentinel");
    if (!sentinel) return;
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting));
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div
        id="scroll-sentinel"
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 h-2 w-px"
      />
      <header
        data-scrolled={scrolled}
        className="sticky top-0 z-40 border-b border-transparent transition-colors duration-(--dur-fast) data-[scrolled=true]:border-border-subtle data-[scrolled=true]:bg-bg-0/70 data-[scrolled=true]:backdrop-blur-md"
      >
        {children}
      </header>
    </>
  );
}
