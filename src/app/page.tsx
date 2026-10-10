import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Approach } from "@/components/sections/approach";
import { Skills } from "@/components/sections/skills";
import { MoreProjects } from "@/components/sections/more-projects";
import { About } from "@/components/sections/about";
import { Now } from "@/components/sections/now";
import { Contact } from "@/components/sections/contact";
import { site } from "@/content/site";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.name,
  url: site.url,
  jobTitle: "Computer Science student and software developer",
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "University of Central Punjab",
  },
  sameAs: [site.socials.github, site.socials.linkedin],
  knowsAbout: [
    "Software development",
    "Machine learning",
    "Flutter",
    "Business automation",
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={person} />

      <Hero />
      <FeaturedWork />
      <Approach />
      <Skills />
      <MoreProjects />
      <About />
      <Now />
      <Contact />
    </>
  );
}
