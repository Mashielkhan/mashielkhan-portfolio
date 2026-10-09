import { cn } from "@/lib/cn";

type Column = { label: string; nodes: string[] };

export function FlowDiagram({ columns }: { columns: Column[] }) {
  return (
    <ol
      aria-label="System flow"
      className="grid gap-8 lg:[grid-template-columns:var(--cols)] lg:gap-6"
      style={{ "--cols": `repeat(${columns.length}, minmax(0, 1fr))` } as React.CSSProperties}
    >
      {columns.map((col, i) => (
        <li
          key={col.label}
          className={cn(
            "relative rounded-card border border-border bg-bg-2 p-4",
            i < columns.length - 1 &&
              "after:absolute after:-bottom-6 after:left-1/2 after:-translate-x-1/2 after:font-mono after:text-text-3 after:content-['↓'] lg:after:top-1/2 lg:after:-right-[18px] lg:after:bottom-auto lg:after:left-auto lg:after:translate-x-0 lg:after:-translate-y-1/2 lg:after:content-['→']",
          )}
        >
          <p className="font-mono text-label text-text-3 uppercase">{col.label}</p>
          <ul className="mt-3 space-y-2">
            {col.nodes.map((n) => (
              <li
                key={n}
                className="rounded-chip border border-border-subtle bg-bg-3 px-3 py-2 text-small text-text-1"
              >
                {n}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
