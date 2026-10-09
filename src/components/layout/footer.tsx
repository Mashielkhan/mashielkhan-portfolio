import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer id="site-footer" className="border-t border-border-subtle py-10">
      <Container className="flex flex-col gap-3 text-small text-text-3 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name} · Built with Next.js and Tailwind
        </p>
        <div className="flex gap-6">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-1"
          >
            Source ↗
          </a>
          <a href="#main" className="hover:text-text-1">
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
