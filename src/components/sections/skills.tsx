import { Section } from "@/components/ui/section";
import { Chip } from "@/components/ui/chip";
import { skillGroups } from "@/content/skills";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";

export function Skills() {
  const titleOf = (slug: string) => projects.find((p) => p.slug === slug)?.title ?? slug;

  return (
    <Section
      id="skills"
      eyebrow="03 — Skills"
      title="What I use, and where I've used it."
      tone="alt"
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal
            key={g.title}
            as="li"
            index={i}
            spotlight
            className="rounded-card border border-border bg-bg-2 p-6 md:p-8"
          >
            <h3 className="text-h4">{g.title}</h3>

            <ul className="mt-5 flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <li key={s}>
                  <Chip>{s}</Chip>
                </li>
              ))}
            </ul>

            {g.usedIn && (
              <p className="mt-5 border-t border-border-subtle pt-4 text-small text-text-3">
                Used in <span className="text-text-2">{g.usedIn.map(titleOf).join(" · ")}</span>
              </p>
            )}
          </Reveal>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-2 text-small text-text-3">
        <span>Learning now:</span>
        {site.now.learning.map((l) => (
          <Chip key={l}>{l}</Chip>
        ))}
      </div>
    </Section>
  );
}
