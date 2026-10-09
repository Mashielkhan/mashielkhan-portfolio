import { cn } from "@/lib/cn";
import type { ProjectStatus } from "@/content/types";

const config: Record<ProjectStatus, { label: string; className: string }> = {
  shipped: { label: "Shipped", className: "text-success bg-success/10 border-success/20" },
  live: { label: "Live demo", className: "text-success bg-success/10 border-success/20" },
  "in-development": {
    label: "In development",
    className: "text-warning bg-warning/10 border-warning/20",
  },
  "in-design": { label: "In design", className: "text-warning bg-warning/10 border-warning/20" },
  planned: { label: "Planned", className: "text-planned bg-planned/10 border-planned/20" },
  "case-study": {
    label: "Case study",
    className: "text-accent-300 bg-accent-500/10 border-accent-500/20",
  },
};

export function Badge({ status, className }: { status: ProjectStatus; className?: string }) {
  const { label, className: tone } = config[status];
  return (
    <span
      className={cn(
        "inline-flex h-[22px] items-center rounded-full border px-2.5 font-mono text-label uppercase",
        tone,
        className,
      )}
    >
      {label}
    </span>
  );
}
