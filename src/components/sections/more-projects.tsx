import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Chip } from "@/components/ui/chip";
import { projects } from "@/content/projects";
import type { Project } from "@/content/types";
import { Reveal } from "@/components/motion/reveal";

export function ProjectRow({ project, index = 0 }: { project: Project; index?: number }) {
  const href = project.links?.demo ?? project.links?.code;

  const body = (
    <>
      <div className="min-w-0 flex-1">
        <h3 className="text-h4">{project.title}</h3>
        <p className="mt-1 text-small text-text-2">{project.summary}</p>
      </div>

      {project.stack.length > 0 && (
        <ul className="hidden flex-wrap gap-2 lg:flex lg:max-w-[18rem] lg:justify-end">
          {project.stack.map((s) => (
            <li key={s}>
              <Chip>{s}</Chip>
            </li>
          ))}
        </ul>
      )}

      <div className="flex items-center gap-3">
        <Badge status={project.status} />
        {href && (
          <span aria-hidden className="text-text-3">
            ↗
          </span>
        )}
      </div>
    </>
  );

  const layout = "flex flex-col gap-3 py-5 md:flex-row md:items-center md:justify-between md:gap-8";

  return (
    <Reveal as="li" index={index}>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${layout} -mx - 4 - card px - 4 - colors duration - (--dur - fast) hover: bg - bg - 2 rounded transition`}
        >
          {body}
        </a>
      ) : (
        <div className={layout}>{body}</div>
      )}
    </Reveal>
  );
}

export function MoreProjects() {
  const more = projects.filter((p) => p.tier === "more");
  const archive = projects.filter((p) => p.tier === "archive");

  return (
    <Section id="more" eyebrow="04 — More" title="More projects, and what's next.">
      <ul className="divide-y divide-border-subtle border-y border-border-subtle">
        {more.map((p, i) => (
          <ProjectRow key={p.slug} project={p} index={i} />
        ))}
      </ul>

      {archive.length > 0 && (
        <details className="group mt-8">
          <summary className="flex cursor-pointer list-none items-center justify-between rounded-card py-3 font-mono text-label text-text-3 uppercase hover:text-text-1 [&::-webkit-details-marker]:hidden">
            <span>Archive · {archive.length} academic projects</span>
            <span aria-hidden className="group-open:hidden">
              +
            </span>
            <span aria-hidden className="hidden group-open:inline">
              −
            </span>
          </summary>

          <ul className="divide-y divide-border-subtle border-y border-border-subtle">
            {archive.map((p, i) => (
              <ProjectRow key={p.slug} project={p} index={i} />
            ))}
          </ul>
        </details>
      )}
    </Section>
  );
}
