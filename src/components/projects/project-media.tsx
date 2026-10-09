import Image from "next/image";
import type { Project } from "@/content/types";

export function ProjectMedia({ project }: { project: Project }) {
  if (project.media) {
    return (
      <Image
        src={project.media.src}
        alt={project.media.alt}
        width={project.media.width}
        height={project.media.height}
        sizes="(min-width: 1024px) 640px, 100vw"
        className="h-full w-full object-cover"
      />
    );
  }

  // Designed placeholder: no fake UI
  return (
    <div aria-hidden className="relative flex h-full w-full items-center justify-center bg-bg-3">
      <div className="absolute inset-0 bg-grid-lines" />
      <span className="relative font-mono text-label text-text-4 uppercase">
        {project.kind.replace("-", " ")}
      </span>
    </div>
  );
}
