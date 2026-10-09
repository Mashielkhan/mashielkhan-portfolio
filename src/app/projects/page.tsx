import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { FilterableGrid } from "@/components/projects/filterable-grid";
import { ProjectRow } from "@/components/sections/more-projects";
import { projects } from "@/content/projects";
import type { Project } from "@/content/types";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Products and systems built for real businesses: AI, mobile, web, and business software.",
};

const labels: Record<Project["kind"], string> = {
  "ai-ml": "AI / ML",
  web: "Web",
  mobile: "Mobile",
  "business-systems": "Business systems",
  game: "Games",
};

export default function ProjectsPage() {
  const cards = projects.filter((p) => p.tier !== "archive");
  const archive = projects.filter((p) => p.tier === "archive");
  const kinds = [...new Set(cards.map((p) => p.kind))];
  const filters = [
    { value: "all", label: "All" },
    ...kinds.map((k) => ({ value: k, label: labels[k] })),
  ];

  return (
    <section className="py-12 lg:py-20">
      <Container>
        <h1 className="text-h1 text-balance">Projects</h1>
        <p className="mt-4 max-w-xl text-body-lg text-text-2">
          Products and systems I&apos;ve built, designed, or am building for real businesses.
        </p>

        <div className="mt-12">
          <FilterableGrid filters={filters}>
            {cards.map((p) => (
              <div key={p.slug} data-kind={p.kind}>
                <Reveal className="h-full">
                  <ProjectCard project={p} />
                </Reveal>
              </div>
            ))}
          </FilterableGrid>
        </div>

        {archive.length > 0 && (
          <>
            <h2 className="mt-20 mb-6 font-mono text-label text-text-3 uppercase">
              Archive · academic projects
            </h2>
            <ul className="divide-y divide-border-subtle border-y border-border-subtle">
              {archive.map((p) => (
                <ProjectRow key={p.slug} project={p} />
              ))}
            </ul>
          </>
        )}
      </Container>
    </section>
  );
}
