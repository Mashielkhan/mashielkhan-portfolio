"use client";

import * as m from "motion/react-m";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { dur, ease } from "@/lib/motion";

type Item = { label: string; href: string };

export function NavLinks({ items }: { items: readonly Item[] }) {
  const [active, setActive] = useState("");
  const itemRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

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

  const activeItem = active ? items.find((i) => i.href.endsWith(`#${active}`)) : null;
        const [activeRef, setActiveRef] = useState<HTMLElement | null>(null);

      useEffect(() => {
        if (activeItem) {
          const ref = itemRefs.current.get(activeItem.href);
          if (ref) {
            setActiveRef(ref);
          }
        } else {
          setActiveRef(null);
        }
      }, [activeItem]);

      return (
        <nav aria-label="Primary" className="relative hidden items-center gap-8 md:flex">
          {/* Animated active indicator */}
          <m.span
            className="absolute left-0 bottom-0 h-px bg-text-1 pointer-events-none"
            style={{ width: activeRef?.offsetWidth ?? 0, transform: activeRef ? `translateX(${activeRef.offsetLeft}px)` : "translateX(0px)" }}
            initial={false}
            animate={{ width: activeRef?.offsetWidth ?? 0, transform: activeRef ? `translateX(${activeRef.offsetLeft}px)` : "translateX(0px)" }}
            transition={{ duration: dur.base, ease: ease.outExpo }}
          />

          {items.map((item) => {
            const isActive = item.href.endsWith(`#${active}`) && active !== "";
            return (
              <Link
                key={item.href}
                ref={(el) => {
                  if (el) itemRefs.current.set(item.href, el);
                  else itemRefs.current.delete(item.href);
                }}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "relative z-10 text-small text-text-2 transition-colors duration-(--dur-fast) hover:text-text-1",
                  isActive && "text-text-1",
                )}
              >
                {item.label}
              </Link>
            );
          })}
    </nav>
  );
}
