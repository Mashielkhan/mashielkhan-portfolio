"use client";

import { useEffect } from "react";

// Module-level flag: false on first load (protects LCP), true for every later navigation
let hasMounted = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const animate = hasMounted;

  useEffect(() => {
    hasMounted = true;
  }, []);

  return <div className={animate ? "animate-page-in" : undefined}>{children}</div>;
}
