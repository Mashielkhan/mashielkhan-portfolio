import { renderOg } from "@/lib/og";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export const alt = "Project case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
    return caseStudies.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    const study = getCaseStudy(slug);

    return renderOg({
        eyebrow: `${site.name} · Case study`,
        title: project?.title ?? "Case study",
        subtitle: study?.tagline,
    });
}