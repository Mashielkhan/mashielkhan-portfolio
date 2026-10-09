import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Arrow } from "@/components/ui/arrow";
import { Chip } from "@/components/ui/chip";
import { StatusPill } from "@/components/ui/status-pill";
import { HeroVisual } from "./hero-visual";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

const rise = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  const featured = projects.filter((p) => p.tier === "featured");

  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid-lines" />
      <div aria-hidden className="absolute inset-0 -z-10 hero-glow" />
      <HeroVisual />

      <Container className="relative flex min-h-[min(calc(100svh-4rem),900px)] items-center py-20">
        <div className="relative z-10 max-w-2xl">
          <div className="animate-rise-in" style={rise(0)}>
            <StatusPill>
              {site.availability.label}
            </StatusPill>
          </div>

          <p
            className="mt-8 animate-rise-in font-mono text-label text-text-3 uppercase"
            style={rise(60)}
          >
            {site.name} · {site.location}
          </p>

          <h1 className="mt-5 text-display">
            <span className="block animate-rise-in" style={rise(120)}>
              Software Developer
            </span>
            <span className="block animate-rise-in" style={rise(200)}>
              Building{" "}
              <span className="bg-linear-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                AI-Powered Products
              </span>
            </span>
            <span className="block animate-rise-in" style={rise(280)}>
              for Real Businesses
            </span>
          </h1>

          <p className="mt-6 max-w-xl animate-rise-in text-body-lg text-text-2" style={rise(360)}>
            {site.description}
          </p>

          <div className="mt-10 flex animate-rise-in flex-col gap-3 sm:flex-row" style={rise(440)}>
            <Button href="#work" size="lg">
              View my work <Arrow />
            </Button>
            <Button href={site.resumeUrl} variant="secondary" size="lg">
              Download resume
            </Button>
          </div>

          <ul
            aria-label="Selected projects"
            className="mt-10 flex animate-rise-in flex-wrap gap-2"
            style={rise(520)}
          >
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
