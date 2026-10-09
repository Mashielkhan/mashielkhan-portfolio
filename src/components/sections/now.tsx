import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

export function Now() {
  const { building, learning, updated } = site.now;

  return (
    <section aria-labelledby="now-title" className="border-y border-border-subtle py-10">
      <Container className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-12">
        <h2 id="now-title" className="font-mono text-label text-text-3 uppercase">
          Now
        </h2>
        <dl className="grid flex-1 gap-4 text-small sm:grid-cols-2">
          <div>
            <dt className="text-text-3">Building</dt>
            <dd className="mt-1 text-text-1">{building.join(" · ")}</dd>
          </div>
          <div>
            <dt className="text-text-3">Learning</dt>
            <dd className="mt-1 text-text-1">{learning.join(" · ")}</dd>
          </div>
        </dl>
        <p className="font-mono text-label text-text-3">Updated {updated}</p>
      </Container>
    </section>
  );
}
