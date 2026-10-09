import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Chip } from "@/components/ui/chip";
import { Button } from "@/components/ui/button";
import { Arrow } from "@/components/ui/arrow";
import { CountUp } from "@/components/motion/count-up";
import { ProjectMedia } from "@/components/projects/project-media";
import { Blocks } from "./case-study-blocks";
import { CaseToc } from "./case-toc";
import { caseStudies } from "@/content/case-studies";
import { projects } from "@/content/projects";
import type { CaseStudy, Project } from "@/content/types";

export function CaseStudyView({ project, study }: { project: Project; study: CaseStudy }) {
  const i = caseStudies.findIndex((c) => c.slug === study.slug);
  const nextSlug = caseStudies[(i + 1) % caseStudies.length].slug;
  const next = projects.find((p) => p.slug === nextSlug);
  const toc = study.blocks.map((b) => ({ id: b.id, title: b.title }));

  const meta = [
    { label: "Role", value: project.role },
    project.team && { label: "Team", value: project.team },
    project.timeline && { label: "Timeline", value: project.timeline },
  ].filter(Boolean) as { label: string; value: string }[];

  const { demo, code, video } = project.links ?? {};

  return (
    <article className="py-12 lg:py-20">
      <Container>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-small text-text-3 transition-colors duration-(--dur-fast) hover:text-text-1"
        >
          ← All projects
        </Link>

        <header className="mt-8 max-w-3xl">
          <Badge status={project.status} />
          <h1 className="mt-4 text-h1 text-balance">{project.title}</h1>
          <p className="mt-4 text-body-lg text-text-2">{study.tagline}</p>
        </header>

        <dl className="mt-10 grid gap-6 border-y border-border-subtle py-6 sm:grid-cols-2 lg:grid-cols-4">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-label text-text-3 uppercase">{item.label}</dt>
              <dd className="mt-1 text-small text-text-1">{item.value}</dd>
            </div>
          ))}
          {project.stack.length > 0 && (
            <div>
              <dt className="font-mono text-label text-text-3 uppercase">Stack</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </dd>
            </div>
          )}
        </dl>

        {(demo || code || video) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {demo && (
              <Button href={demo} variant="secondary">
                Live demo ↗
              </Button>
            )}
            {code && (
              <Button href={code} variant="secondary">
                Source code ↗
              </Button>
            )}
            {video && (
              <Button href={video} variant="secondary">
                Video ↗
              </Button>
            )}
          </div>
        )}

        <div className="mt-10 aspect-[16/9] overflow-hidden rounded-frame border border-border">
          <ProjectMedia project={project} />
        </div>

        {study.stats && (
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {study.stats.map((s) => (
              <li key={s.label} className="rounded-card border border-border bg-bg-2 p-6">
                <p className="font-mono text-h1 text-text-1">
                  <CountUp to={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-small text-text-3">{s.label}</p>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Blocks blocks={study.blocks} />
          </div>
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <CaseToc items={toc} />
            </div>
          </aside>
        </div>

        {next && (
          <Link
            href={`/projects/${next.slug}`}
            className="group mt-24 block rounded-card border border-border bg-bg-2 p-8 transition-colors duration-(--dur-base) ease-standard hover:border-border-strong"
          >
            <p className="font-mono text-label text-text-3 uppercase">Next project</p>
            <p className="mt-2 text-h2">
              {next.title} <Arrow />
            </p>
          </Link>
        )}
      </Container>
    </article>
  );
}
