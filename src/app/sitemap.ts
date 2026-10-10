import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { caseStudies } from "@/content/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    return [
        { url: site.url, lastModified: now, priority: 1 },
        { url: `${site.url}/projects`, lastModified: now, priority: 0.8 },
        ...caseStudies.map((c) => ({
            url: `${site.url}/projects/${c.slug}`,
            lastModified: now,
            priority: 0.7,
        })),
    ];
}