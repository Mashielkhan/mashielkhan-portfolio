import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-bg-0/60 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={`${site.name}, home`}
          className="flex h-9 w-9 items-center justify-center rounded-chip border border-border font-mono text-small font-medium"
        >
          MK
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-small text-text-2 transition-colors duration-(--dur-fast) hover:text-text-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href={site.resumeUrl} variant="secondary" className="hidden md:inline-flex">
            Resume
          </Button>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
