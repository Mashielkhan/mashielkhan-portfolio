import { Hero } from "@/components/sections/hero";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Approach } from "@/components/sections/approach";
import { Skills } from "@/components/sections/skills";
import { MoreProjects } from "@/components/sections/more-projects";
import { About } from "@/components/sections/about";
import { Now } from "@/components/sections/now";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
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
