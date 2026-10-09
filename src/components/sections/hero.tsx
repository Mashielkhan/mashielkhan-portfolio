import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { StatusPill } from "@/components/ui/status-pill";
import { HeroPoster } from "./hero-poster";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export function Hero() {
  const featured = projects.filter((p) => p.tier === "featured");

  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid-lines" />
      <div aria-hidden className="absolute inset-0 -z-10 hero-glow" />
      <HeroPoster />

      <Container className="relative flex min-h-[min(calc(100svh-4rem),900px)] items-center py-20">
        <div className="relative z-10 max-w-2xl">
          <StatusPill>
            {site.availability.label} · {site.availability.from}
          </StatusPill>

          <p className="mt-8 font-mono text-label text-text-3 uppercase">
            {site.name} · {site.location}
          </p>

          {/* Deliberate 3-line break of site.tagline */}
          <h1 className="mt-5 text-display">
            <span className="block">Software Developer</span>
            <span className="block">
              Building{" "}
              <span className="bg-linear-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                AI-Powered Products
              </span>
            </span>
            <span className="block">for Real Businesses</span>
          </h1>

          <p className="mt-6 max-w-xl text-body-lg text-text-2">{site.description}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#work" size="lg">
              View my work <span aria-hidden>→</span>
            </Button>
            <Button href={site.resumeUrl} variant="secondary" size="lg">
              Download resume
            </Button>
          </div>

          <ul aria-label="Selected projects" className="mt-10 flex flex-wrap gap-2">
            {featured.map((p) => (
              <li key={p.slug}>
                <Chip>
                  {p.title === "Smart House Price Prediction System" ? "House Price ML" : p.title}
                </Chip>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
