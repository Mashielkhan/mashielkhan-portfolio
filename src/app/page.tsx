import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Chip } from "@/components/ui/chip";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export default function HomePage() {
  const featured = projects.filter((p) => p.tier === "featured");

  return (
    <>
      <section className="section-y">
        <Container>
          <p className="font-mono text-label uppercase text-text-3">
            {site.name} · {site.location}
          </p>
          <h1 className="mt-6 max-w-4xl text-display text-balance">{site.tagline}</h1>
          <p className="mt-6 max-w-xl text-body-lg text-text-2">{site.description}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="#work" size="lg">View my work</Button>
            <Button href={site.resumeUrl} variant="secondary" size="lg">Download resume</Button>
          </div>
        </Container>
      </section>

      <Section id="work" eyebrow="01 — Selected work" title="Products built for real problems." tone="alt">
        <ul className="grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <li key={p.slug} className="rounded-card border border-border bg-bg-2 p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-h3">{p.title}</h3>
                <Badge status={p.status} />
              </div>
              <p className="mt-3 text-small text-text-2">{p.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (<Chip key={s}>{s}</Chip>))}
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}