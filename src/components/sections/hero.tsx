"use client";

import * as m from "motion/react-m";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Arrow } from "@/components/ui/arrow";
import { Chip } from "@/components/ui/chip";
import { StatusPill } from "@/components/ui/status-pill";
import { HeroVisual } from "./hero-visual";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import Link from "next/link";
import { staggerContainer, fadeInUp, fadeInUpFast, createStaggerItem } from "@/lib/motion";

export function Hero() {
  const featured = projects.filter((p) => p.tier === "featured");

  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid-lines" />
      <div aria-hidden className="absolute inset-0 -z-10 hero-glow" />
      <HeroVisual />

      <Container className="relative flex min-h-[min(calc(100svh-4rem),900px)] items-center py-20">
        <m.div
          className="relative z-10 max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <m.div
            variants={fadeInUp}
            {...createStaggerItem(0)}
          >
            <StatusPill>{site.availability.label}</StatusPill>
          </m.div>

          <m.p
            className="mt-8 font-mono text-label text-text-3 uppercase"
            variants={fadeInUp}
            {...createStaggerItem(1)}
          >
            {site.name} · {site.location}
          </m.p>

          <m.h1 className="mt-5 text-display" variants={staggerContainer}>
            <m.span className="block" variants={fadeInUp} {...createStaggerItem(0)}>
              Software Developer
            </m.span>
            <m.span className="block" variants={fadeInUp} {...createStaggerItem(1)}>
              Building{" "}
              <span className="bg-linear-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                AI-Powered Products
              </span>
            </m.span>
            <m.span className="block" variants={fadeInUp} {...createStaggerItem(2)}>
              for Real Businesses
            </m.span>
          </m.h1>

          <m.p
            className="mt-6 max-w-xl text-body-lg text-text-2"
            variants={fadeInUp}
            {...createStaggerItem(3)}
          >
            {site.description}
          </m.p>

          <m.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            variants={staggerContainer}
            {...createStaggerItem(4)}
          >
            <m.div variants={fadeInUpFast} {...createStaggerItem(0)} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button asChild size="lg">
                <Link href="#work">View my work <Arrow /></Link>
              </Button>
            </m.div>

            <m.div variants={fadeInUpFast} {...createStaggerItem(1)} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button asChild variant="secondary" size="lg">
                <Link href={site.resumeUrl} target="_blank" rel="noreferrer">
                  Download resume
                </Link>
              </Button>
            </m.div>
          </m.div>

          <m.ul
            aria-label="Selected projects"
            className="mt-10 flex flex-wrap gap-2"
            variants={staggerContainer}
            {...createStaggerItem(5)}
          >
            {featured.map((p, i) => (
              <m.li key={p.slug} variants={fadeInUpFast} {...createStaggerItem(i)}>
                <Chip>{p.title === "Smart House Price Prediction System" ? "House Price ML" : p.title}</Chip>
              </m.li>
            ))}
          </m.ul>
        </m.div>
      </Container>
    </section>
  );
}
