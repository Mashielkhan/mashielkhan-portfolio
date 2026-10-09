"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type Filter = { value: string; label: string };

export function FilterableGrid({
  filters,
  children,
}: {
  filters: Filter[];
  children: React.ReactNode;
}) {
  const [active, setActive] = useState("all");

  return (
    <>
      <div role="group" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            aria-pressed={active === f.value}
            onClick={() => setActive(f.value)}
            className={cn(
              "h-9 rounded-full border px-4 text-small transition-colors duration-(--dur-fast)",
              active === f.value
                ? "border-border-strong bg-bg-4 text-text-1"
                : "border-border text-text-2 hover:border-border-strong hover:text-text-1",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div data-filter={active} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </>
  );
}
