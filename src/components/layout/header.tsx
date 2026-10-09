import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HeaderShell } from "./header-shell";
import { NavLinks } from "./nav-links";
import { MobileMenu } from "./mobile-menu";
import { site } from "@/content/site";

export function Header() {
  return (
    <HeaderShell>
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={`${site.name}, home`}
          className="flex h-9 w-9 items-center justify-center rounded-chip border border-border font-mono text-small font-medium"
        >
          MK
        </Link>
        <NavLinks items={site.nav} />
        <div className="flex items-center gap-3">
          <Button href={site.resumeUrl} variant="secondary" className="hidden md:inline-flex">
            Resume
          </Button>
          <MobileMenu />
        </div>
      </Container>
    </HeaderShell>
  );
}
