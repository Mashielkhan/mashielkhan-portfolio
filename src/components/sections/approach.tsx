import { Section } from "@/components/ui/section";
import { principles } from "@/content/principles";
import { Reveal } from "@/components/motion/reveal";

const spans = ["md:col-span-5", "md:col-span-7", "md:col-span-7", "md:col-span-5"];

export function Approach() {
  return (
    <Section
      id="approach"
      eyebrow="02 — Approach"
      title="I start with the business, then pick the technology."
    >
      <ul className="grid gap-6 md:grid-cols-12">
        {principles.map((p, i) => (
          <Reveal
            key={p.title}
            as="li"
            index={i}
            spotlight
            className={`${spans[i]} flex flex-col rounded-card border border-border bg-bg-2 p-6 md:p-8`}
          >
            <span className="font-mono text-label text-accent-300">0{i + 1}</span>

            <h3 className="mt-4 text-h4 text-balance">{p.title}</h3>

            <p className="mt-3 text-small text-text-2">{p.text}</p>

            <p className="[margin-top:1.5rem] mt-auto border-t border-border-subtle pt-4 font-mono text-label text-text-3 uppercase">
              Evidence · {p.evidence}
            </p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
