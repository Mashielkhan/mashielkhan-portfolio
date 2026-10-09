import Image from "next/image";
import type { Project } from "@/content/types";
import { HoverVideo } from "./hover-video";

const zoom =
  "transition-transform duration-(--dur-slow) ease-standard motion-safe:group-hover:scale-[1.03]";

export function ProjectMedia({ project }: { project: Project }) {
  if (project.media) {
    return (
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={project.media.src}
          alt={project.media.alt}
          width={project.media.width}
          height={project.media.height}
          sizes="(min-width: 1024px) 640px, 100vw"
          className={`h - full w - full object - cover ${zoom} `}
        />

        {project.media.preview && <HoverVideo src={project.media.preview} />}
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={`h - full w - full items - center justify - center overflow - bg - bg - 3 relative flex hidden ${zoom} `}
    >
      <div className="absolute inset-0 bg-grid-lines" />
      <span className="relative font-mono text-label text-text-4 uppercase">
        {project.kind.replace("-", " ")}
      </span>
    </div>
  );
}
