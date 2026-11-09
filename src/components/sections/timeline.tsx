"use client";

import { useRef } from "react";
import { useInView, useScroll, useTransform, m } from "motion/react";
import { cn } from "@/lib/cn";
import type { TimelineItem } from "@/content/types";
import { Reveal } from "@/components/motion/reveal";

function Item({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reached = useInView(ref, {
    margin: "0px 0px -50% 0px",
    once: true,
  });

  return (
    <Reveal as="li" index={index} className="relative pb-10 pl-8 last:pb-0">
      <div ref={ref} className="absolute inset-0 pointer-events-none" />
      <span
        aria-hidden
        className={cn(
          "absolute top-1.5 -left-[5px] z-10 size-2.5 rounded-full border border-accent-500 bg-bg-1",
          "transition-colors duration-(--dur-base)",
          reached && "bg-accent-500",
        )}
      />
      <p className="font-mono text-label text-text-3 uppercase">
        {item.date}
      </p>
      <h3 className="mt-1 text-h4">{item.title}</h3>
      {item.detail && (
        <p className="mt-1 text-small text-text-2">{item.detail}</p>
      )}
    </Reveal>
  );
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end center"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative ml-2">
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-px bg-border-subtle"
      />
      <m.div
        aria-hidden
        style={{ height }}
        className="absolute top-0 left-0 w-px bg-accent-500"
      />
      <ol>
        {items.map((item, i) => (
          <Item key={item.title} item={item} index={i} />
        ))}
      </ol>
    </div>
  );
}
