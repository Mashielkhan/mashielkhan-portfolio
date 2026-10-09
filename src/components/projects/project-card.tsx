import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Chip } from "@/components/ui/chip";
import { ProjectMedia } from "./project-media";
import { cn } from "@/lib/cn";
import type { Project } from "@/content/types";

export function ProjectCard({ project, lead = false }: { project: Project; lead?: boolean }) {
  const { slug, title, summary, impact, status, stack, role, team, links, caseStudy } = project;

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-card border border-border bg-bg-2",
        "transition-colors duration-(--dur-base) ease-standard hover:border-border-strong",
        lead && "lg:grid lg:grid-cols-12",
      )}
    >
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden border-b border-border-subtle",
          lead && "lg:col-span-7 lg:aspect-auto lg:min-h-[22rem] lg:border-r lg:border-b-0",
        )}
      >
        <ProjectMedia project={project} />
        <Badge status={status} className="absolute top-4 right-4 backdrop-blur-sm" />
      </div>

      <div className={cn("flex flex-col p-6", lead && "lg:col-span-5 lg:justify-center lg:p-10")}>
        <h3 className={cn("text-h3", lead && "lg:text-h2")}>
          {caseStudy ? (
            <Link href={`/projects/${slug}`} className="after:absolute after:inset-0">
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>

        <p className="mt-3 text-small text-text-2">{summary}</p>

        {impact && <p className="mt-3 font-mono text-label text-accent-300">{impact}</p>}

        <p className="mt-4 text-small text-text-3">
          <span className="text-text-2">Role</span> · {role}
          {team && <> · {team}</>}
        </p>

        {stack.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {stack.map((s) => (
              <li key={s}>
                <Chip>{s}</Chip>
              </li>
            ))}
          </ul>
        )}

        <div className="relative z-10 mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-small">
          {caseStudy ? (
            <span className="text-text-1">Case study →</span>
          ) : (
            <span className="text-text-3">Case study coming soon</span>
          )}
          {links?.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-2 hover:text-text-1"
            >
              Demo ↗
            </a>
          )}
          {links?.code && (
            <a
              href={links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-2 hover:text-text-1"
            >
              Code ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
