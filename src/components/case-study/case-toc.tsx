"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type Item = { id: string; title: string };

export function CaseToc({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  const list = (
    <ol className="space-y-1 text-small">
      {items.map((i) => (
        <li key={i.id}>
          <a
            href={`#${i.id}`}
            aria-current={active === i.id ? "location" : undefined}
            className={cn(
              "block border-l py-1.5 pl-4 transition-colors duration-(--dur-fast)",
              active === i.id
                ? "border-accent-500 text-text-1"
                : "border-border-subtle text-text-3 hover:text-text-1",
            )}
          >
            {i.title}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <details className="rounded-card border border-border bg-bg-2 p-4 lg:hidden">
        <summary className="cursor-pointer font-mono text-label text-text-3 uppercase">
          On this page
        </summary>
        <div className="mt-4">{list}</div>
      </details>
      <nav aria-label="On this page" className="hidden lg:block">
        <p className="mb-3 font-mono text-label text-text-3 uppercase">On this page</p>
        {list}
      </nav>
    </>
  );
}
