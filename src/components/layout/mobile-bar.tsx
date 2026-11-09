"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import * as m from "motion/react-m";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";
import { ease, dur } from "@/lib/motion";

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
    <m.div
      aria-hidden={!show}
      initial={false}
      animate={{ y: show ? 0 : "100%" }}
      transition={{ duration: dur.base, ease: ease.out }}
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-border bg-bg-0/80 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden",
      )}
    >
      <nav aria-label="Quick actions" className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2">
        <m.div whileTap={{ scale: 0.95 }}>
          <Button asChild className="w-full">
            <Link href="#work">Work</Link>
          </Button>
        </m.div>

        <m.div whileTap={{ scale: 0.95 }}>
          <Button asChild variant="ghost" size="lg" className="w-full">
            <a href={site.resumeUrl} target="_blank" rel="noreferrer">
              Resume
            </a>
          </Button>
        </m.div>

        <m.div whileTap={{ scale: 0.95 }}>
          <Button asChild variant="ghost" size="lg" className="w-full">
            <Link href="#contact">Contact</Link>
          </Button>
        </m.div>

        <m.div whileTap={{ scale: 0.95 }}>
          <Button asChild variant="ghost" size="lg" className="w-full">
            <a href="mailto:${site.email}" target="_blank" rel="noreferrer">
              Contact Me
            </a>
          </Button>
        </m.div>
      </nav>
    </m.div>
  );
}
