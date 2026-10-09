import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CopyEmail } from "@/components/ui/copy-email";
import { site } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";

export function Contact() {
  const link = "text-text-2 transition-colors duration-(--dur-fast) hover:text-text-1";

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-bg-1 section-y text-center">
      <Container size="copy">
        <Reveal>
          <p className="font-mono text-label text-text-3 uppercase">06 — Contact</p>

          <h2 id="contact-title" className="mt-3 text-h1 text-balance">
            Let&apos;s build something useful.
          </h2>

          <p className="mt-4 text-body-lg text-text-2">
            I&apos;m looking for a software or AI internship. If you&apos;re building products for
            real businesses, I&apos;d like to hear about it.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={`mailto:${site.email}`} size="lg">
              Email me
            </Button>

            <Button href={site.resumeUrl} variant="secondary" size="lg">
              Resume
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-small">
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              GitHub ↗
            </a>

            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              LinkedIn ↗
            </a>

            <CopyEmail email={site.email} />
          </div>

          <p className="mt-8 font-mono text-label text-text-3">
            Available from {site.availability.label} · Lahore, UTC+5
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
