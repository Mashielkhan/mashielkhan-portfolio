import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/content/projects";

export function FeaturedWork() {
  const [lead, ...rest] = projects.filter((p) => p.tier === "featured");
  if (!lead) return null;

  return (
    <Section
      id="work"
      eyebrow="01 — Selected work"
      title="Products built for real problems."
      tone="alt"
    >
      <div className="grid gap-6">
        <ProjectCard project={lead} lead />
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </Section>
  );
}
