import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { FlowDiagram } from "./flow-diagram";
import { cn } from "@/lib/cn";
import type { Block } from "@/content/types";

type Of<T extends Block["type"]> = Extract<Block, { type: T }>;
const body = "text-body text-text-2";

function Prose({ block }: { block: Of<"prose"> }) {
  return (
    <div className="max-w-copy space-y-4">
      {block.paragraphs.map((p, i) => (
        <p key={i} className={body}>
          {p}
        </p>
      ))}
      {block.callout && (
        <p className="rounded-card border border-border bg-bg-2 p-5 text-small text-text-1">
          {block.callout}
        </p>
      )}
    </div>
  );
}

function List({ block }: { block: Of<"list"> }) {
  return (
    <div className="max-w-copy">
      {block.intro && <p className={cn(body, "mb-4")}>{block.intro}</p>}
      <ul className="space-y-3">
        {block.items.map((item, i) => (
          <li key={i} className={cn("flex gap-3", body)}>
            <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Decisions({ block }: { block: Of<"decisions"> }) {
  return (
    <ol className="space-y-6">
      {block.items.map((d, i) => (
        <li key={i} className="rounded-card border border-border bg-bg-2 p-6 md:p-8">
          <p className="font-mono text-label text-accent-300">Decision 0{i + 1}</p>
          <h3 className="mt-2 text-h4">{d.title}</h3>
          <ul className="mt-5 space-y-2">
            {d.options.map((o, j) => (
              <li
                key={j}
                className={cn(
                  "flex items-start gap-3 rounded-chip border px-3 py-2 text-small",
                  j === d.chosen
                    ? "border-accent-500/40 bg-accent-500/10 text-text-1"
                    : "border-border-subtle text-text-3",
                )}
              >
                <span aria-hidden className="font-mono">
                  {j === d.chosen ? "✓" : "–"}
                </span>
                <span>
                  {o}
                  {j === d.chosen && <span className="sr-only"> (chosen)</span>}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-small text-text-2">
            <span className="font-mono text-label text-text-3 uppercase">Trade-off · </span>
            {d.tradeoff}
          </p>
        </li>
      ))}
    </ol>
  );
}

function Architecture({ block }: { block: Of<"architecture"> }) {
  return (
    <div>
      <p className={cn(body, "mb-8 max-w-copy")}>{block.summary}</p>
      <FlowDiagram columns={block.columns} />
    </div>
  );
}

function Gallery({ block }: { block: Of<"gallery"> }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {block.items.map((it) => (
        <figure key={it.src}>
          <div className="overflow-hidden rounded-card border border-border">
            <Image
              src={it.src}
              alt={it.alt}
              width={it.width}
              height={it.height}
              sizes="(min-width: 1024px) 400px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-2 text-small text-text-3">{it.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function Metrics({ block }: { block: Of<"metrics"> }) {
  return (
    <div>
      {block.intro && <p className={cn(body, "mb-6 max-w-copy")}>{block.intro}</p>}
      <div className="overflow-x-auto rounded-card border border-border">
        <table className="w-full text-left text-small">
          <caption className="sr-only">{block.title}</caption>
          <thead className="bg-bg-2 font-mono text-label text-text-3 uppercase">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium">
                Model
              </th>
              {block.columns.map((c) => (
                <th key={c} scope="col" className="px-4 py-3 text-right font-medium">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle">
            {block.rows.map((r) => (
              <tr key={r.label} className={cn(r.best && "bg-accent-500/10")}>
                <th scope="row" className="px-4 py-3 font-medium text-text-1">
                  {r.label}
                  {r.best && (
                    <span className="ml-2 font-mono text-label text-accent-300">BEST</span>
                  )}
                </th>
                {r.values.map((v, i) => (
                  <td key={i} className="px-4 py-3 text-right font-mono text-text-2">
                    {v ?? "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {block.note && <p className="mt-4 max-w-copy text-small text-text-3">{block.note}</p>}
    </div>
  );
}

function BlockBody({ block }: { block: Block }) {
  switch (block.type) {
    case "prose":
      return <Prose block={block} />;
    case "list":
      return <List block={block} />;
    case "decisions":
      return <Decisions block={block} />;
    case "architecture":
      return <Architecture block={block} />;
    case "gallery":
      return <Gallery block={block} />;
    case "metrics":
      return <Metrics block={block} />;
  }
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-20">
      {blocks.map((b) => (
        <section key={b.id} id={b.id} aria-labelledby={`${b.id}-title`}>
          <Reveal>
            <h2 id={`${b.id}-title`} className="mb-6 text-h2 text-balance">
              {b.title}
            </h2>
            <BlockBody block={b} />
          </Reveal>
        </section>
      ))}
    </div>
  );
}
