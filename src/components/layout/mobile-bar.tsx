"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";


export function MobileBar() {
  const [pastHero, setPastHero] = useState(false);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const ends = [
      document.getElementById("contact"),
      document.getElementById("site-footer"),
    ].filter((el): el is HTMLElement => !!el);

    const heroIo = new IntersectionObserver(([e]) =>
      setPastHero(!e.isIntersecting),
    );
    heroIo.observe(hero);

    const visible = new Set<Element>();
    const endIo = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      }
      setAtEnd(visible.size > 0);
    });

    ends.forEach((el) => endIo.observe(el));

    return () => {
      heroIo.disconnect();
      endIo.disconnect();
    };
  }, []);

  const show = pastHero && !atEnd;

  return (
    <div
      aria-hidden={!show}
      inert={!show}
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-border bg-bg-0/80 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden",
        "transition-transform duration-(--dur-base) ease-out-expo",
        show ? "translate-y-0" : "translate-y-full",
      )}
    >
      <nav aria-label="Quick actions" className="grid grid-cols-3 gap-2 p-2">
        <Button asChild>
          <Link href="#work">Work</Link>
        </Button>

        <Button asChild variant="ghost" size="lg">
          <a href={site.resumeUrl} target="_blank" rel="noreferrer">
            Resume
          </a>
        </Button>

        <Button asChild variant="ghost" size="lg">
          <Link href="#contact">Contact</Link>
        </Button>
      </nav>
    </div>
  );
}