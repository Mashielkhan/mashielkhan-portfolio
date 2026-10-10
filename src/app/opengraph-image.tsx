import { renderOg } from "@/lib/og";
import { site } from "@/content/site";

export const alt = `${site.name} | ${site.shortTagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return renderOg({
        eyebrow: `${site.name} · ${site.location}`,
        title: site.tagline,
        subtitle: "Computer Science · University of Central Punjab",
    });
}