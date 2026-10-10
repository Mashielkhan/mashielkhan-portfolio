import { renderOg } from "@/lib/og";
import { site } from "@/content/site";

export const alt = `Projects | ${site.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return renderOg({
        eyebrow: site.name,
        title: "Products and systems built for real businesses",
        subtitle: "AI · Mobile · Web · Business software",
    });
}