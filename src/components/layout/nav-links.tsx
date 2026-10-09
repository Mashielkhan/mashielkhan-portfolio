"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type Item = { label: string; href: string };

export function NavLinks({ items }: { items: readonly Item[] }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = ["hero", ...items.map((i) => i.href.replace("/#", ""))];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id === "hero" ? "" : e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
      {items.map((item) => {
        const isActive = item.href.endsWith(`#${active}`) && active !== "";
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "location" : undefined}
            className={cn(
              "relative text-small text-text-2 transition-colors duration-(--dur-fast) hover:text-text-1",
              "after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-text-1",
              "after:transition-transform after:duration-(--dur-fast) after:ease-standard hover:after:scale-x-100",
              isActive && "text-text-1 after:scale-x-100",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
