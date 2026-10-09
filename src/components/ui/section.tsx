import { Container } from "./container";
import { cn } from "@/lib/cn";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  tone?: "base" | "alt";
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, tone = "base", className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("section-y", tone === "alt" && "bg-bg-1", className)}
    >
      <Container>
        <header className="mb-12 max-w-3xl">
          <p className="font-mono text-label text-text-3 uppercase">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-3 text-h2 text-balance">
            {title}
          </h2>
        </header>
        {children}
      </Container>
    </section>
  );
}
