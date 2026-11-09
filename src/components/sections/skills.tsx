import { Section } from "@/components/ui/section";
import { Chip } from "@/components/ui/chip";
import { skillGroups } from "@/content/skills";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { FloatingIcon } from "@/components/ui/floating-icon";

export function Skills() {
  const titleOf = (slug: string) => projects.find((p) => p.slug === slug)?.title ?? slug;

  return (
    <Section
      id="skills"
      eyebrow="03 — Skills"
      title="What I use, and where I've used it."
      tone="alt"
      className="relative"
    >
      {/* Floating Icons Background */}
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
        <FloatingIcon className="absolute top-10 left-[10%]" delay={0.1} yDuration={6} rotateDuration={11}>🐍</FloatingIcon>
        <FloatingIcon className="absolute top-20 right-[15%]" delay={0.2} yDuration={7} rotateDuration={12}>⚛️</FloatingIcon>
        <FloatingIcon className="absolute bottom-20 left-[20%]" delay={0.3} yDuration={8} rotateDuration={13}>🌐</FloatingIcon>
        <FloatingIcon className="absolute top-40 left-[40%]" delay={0.4} yDuration={6.5} rotateDuration={11.5}>⚡</FloatingIcon>
        <FloatingIcon className="absolute bottom-40 right-[25%]" delay={0.5} yDuration={7.5} rotateDuration={12.5}>🟦</FloatingIcon>
        <FloatingIcon className="absolute top-60 right-[10%]" delay={0.6} yDuration={6.2} rotateDuration={10.8}>☁️</FloatingIcon>
        <FloatingIcon className="absolute bottom-10 left-[5%]" delay={0.7} yDuration={8.5} rotateDuration={14}>🔧</FloatingIcon>
      </div>

      <ul className="grid gap-6 md:grid-cols-2 relative z-10">
        {skillGroups.map((g, i) => (
          <Reveal
            key={g.title}
            as="li"
            index={i}
            spotlight
            className="rounded-card border border-border bg-bg-2 p-6 md:p-8"
          >
            <h3 className="text-h4">{g.title}</h3>

            {g.description && (
              <p className="mt-2 text-body text-text-2">
                {g.description}
              </p>
            )}

            <ul className="mt-5 flex flex-wrap gap-2">
              {g.skills.map((s, i) => (
                <li key={s}>
                  <Reveal index={i}>
                    <Chip>{s}</Chip>
                  </Reveal>
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
        {site.now.learning.map((l, i) => (
          <Reveal index={i} key={l}>
            <Chip>{l}</Chip>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
