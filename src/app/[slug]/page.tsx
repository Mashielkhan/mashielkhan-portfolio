
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/case-study/case-study-view";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export const dynamicParams = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  const canonical = `/${slug}`;

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${slug}`
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: `${project.title} | ${site.name}`,
      description: project.summary,
      url: `/projects/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const project = projects.find((p) => p.slug === slug);

  if (!study || !project) notFound();

  return <CaseStudyView project={project} study={study} />;
}
