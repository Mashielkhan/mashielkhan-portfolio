import { Container } from "@/components/ui/container";
import { Chip } from "@/components/ui/chip";
import { site } from "@/content/site";
import { timeline } from "@/content/timeline";
import { Timeline } from "./timeline";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-bg-1 section-y"
    >
      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-label text-text-3 uppercase">
            05 — About
          </p>

          <h2 id="about-title" className="mt-3 text-h2 text-balance">
            I build software around how businesses actually work.
          </h2>

          <div className="mt-6 space-y-4 text-body text-text-2">
            <p>
              I&apos;m a Computer Science student at the University of Central
              Punjab in Lahore. What pulls me in is the gap between how
              businesses run today and how software could run them: manual
              processes, scattered communication, spreadsheets doing the job
              of systems.
            </p>

            <p>
              I work across the stack, from Flutter apps and React frontends to
              machine learning models, and I&apos;m going deeper on AI agents
              and business automation.
            </p>
          </div>

          <ul aria-label="Interests" className="mt-8 flex flex-wrap gap-2">
            {site.interests.map((i) => (
              <li key={i}>
                <Chip>{i}</Chip>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <Timeline items={timeline} />
        </div>
      </Container>
    </section>
  );
}
