"use client";

import { useRef } from "react";
import { useInView, useReducedMotion, useScroll } from "motion/react";
import * as m from "motion/react-m";
import { cn } from "@/lib/cn";
import type { TimelineItem } from "@/content/types";

function Item({ item }: { item: TimelineItem }) {
  const ref = useRef<HTMLLIElement>(null);
  const reached = useInView(ref, { margin: "0px 0px -50% 0px", once: true });

  return (
    <li ref={ref} className="relative pb-10 pl-8 last:pb-0">
      <span
        aria-hidden
        className={cn(
          "absolute top-1.5 -left-[5px] size-2.5 rounded-full border border-accent-500 bg-bg-1",
          "transition-colors duration-(--dur-base)",
          reached && "bg-accent-500",
        )}
      />
      <p className="font-mono text-label text-text-3 uppercase">{item.date}</p>
      <h3 className="mt-1 text-h4">{item.title}</h3>
      {item.detail && <p className="mt-1 text-small text-text-2">{item.detail}</p>}
    </li>
  );
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });

  return (
    <div className="relative ml-2">
      <div aria-hidden className="absolute inset-y-0 left-0 w-px bg-border-subtle" />
      <m.div
        aria-hidden
        style={{ scaleY: reduce ? 1 : scrollYProgress }}
        className="absolute inset-y-0 left-0 w-px origin-top bg-accent-500"
      />
      <ol ref={ref}>
        {items.map((item) => (
          <Item key={item.title} item={item} />
        ))}
      </ol>
    </div>
  );
}
