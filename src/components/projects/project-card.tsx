"use client";

import Link from "next/link";
import * as m from "motion/react-m";
import { Badge } from "@/components/ui/badge";
import { Chip } from "@/components/ui/chip";
import { Arrow } from "@/components/ui/arrow";
import { ProjectMedia } from "./project-media";
import { cn } from "@/lib/cn";
import type { Project } from "@/content/types";
import { useMotionValue, useMotionTemplate, useSpring } from "motion/react";

export function ProjectCard({
  project,
  lead = false,
}: {
  project: Project;
  lead?: boolean;
}) {
  const {
    slug,
    title,
    summary,
    impact,
    status,
    stack,
    role,
    team,
    links,
    caseStudy,
  } = project;

  // Refined 3D tilt and spotlight using mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spotlight position relative to container
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  const rotateX = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  });
  const rotateY = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const spotlightGradient = useMotionTemplate`radial-gradient(600px circle at ${spotlightX}px ${spotlightY}px, var(--color-accent-500-alpha, rgba(99, 102, 241, 0.08)), transparent 80%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    // Tilt values
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    mouseX.set(x);
    mouseY.set(-y);

    // Spotlight values
    spotlightX.set(e.clientX - left);
    spotlightY.set(e.clientY - top);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative h-full overflow-hidden rounded-card border border-border bg-bg-2",
        "transition-[border-color] duration-(--dur-base) ease-standard hover:border-border-strong",
        lead && "lg:col-span-12",
      )}
      style={{ perspective: 1200 }}
    >
      {/* Animated Spotlight Background */}
      <m.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlightGradient }}
      />

      <m.div
        className="relative z-10 flex h-full flex-col"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className={cn(
            "relative aspect-[16/10] overflow-hidden border-b border-border-subtle",
            lead &&
              "lg:col-span-12 lg:aspect-auto lg:min-h-[22rem] lg:border-b-0",
          )}
          style={{ transform: "translateZ(20px)" }}
        >
          <ProjectMedia project={project} />
          <Badge
            status={status}
            className="absolute top-4 right-4 backdrop-blur-sm"
          />
        </div>

        <div
          className={cn(
            "flex flex-1 flex-col p-6",
            lead && "lg:col-span-5 lg:justify-center lg:p-10",
          )}
          style={{ transform: "translateZ(30px)" }}
        >
          <header>
            <h3 className={cn("text-h3", lead && "lg:text-h2")}>
              {caseStudy ? (
                <Link
                  href={`/projects/${slug}`}
                  className="after:absolute after:inset-0 focus-visible:outline-none"
                >
                  {title}
                </Link>
              ) : (
                title
              )}
            </h3>
            <p className="mt-3 text-small text-text-2">{summary}</p>
          </header>

          {impact && (
            <p className="mt-3 font-mono text-label text-accent-300">
              {impact}
            </p>
          )}

          <p className="mt-4 text-small text-text-3">
            <span className="text-text-2 font-medium">Role</span> · {role}
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

          <footer className="mt-auto pt-6">
            <div className="relative z-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-small">
              {caseStudy ? (
                <Link
                  href={`/projects/${slug}`}
                  className="text-text-1 font-medium hover:text-accent-400 transition-colors flex items-center gap-1"
                >
                  View Case Study <Arrow />
                </Link>
              ) : (
                <span className="text-text-3 italic">Case study coming soon</span>
              )}

              <div className="flex items-center gap-4 ml-auto">
                {links?.demo && (
                  <a
                    href={links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title}: live demo (opens in a new tab)`}
                    className="text-text-2 hover:text-text-1 underline-offset-4 hover:underline"
                  >
                    Demo ↗
                  </a>
                )}

                {links?.code && (
                  <a
                    href={links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title}: source code (opens in a new tab)`}
                    className="text-text-2 hover:text-text-1 underline-offset-4 hover:underline"
                  >
                    Code ↗
                  </a>
                )}
              </div>
            </div>
          </footer>
        </div>
      </m.div>
    </article>
  );
}
