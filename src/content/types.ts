export type ProjectStatus =
    | "shipped"
    | "live"
    | "in-development"
    | "in-design"
    | "planned"
    | "case-study";

export type Project = {
    slug: string;
    title: string;
    summary: string;
    impact?: string; // only real, verifiable outcomes
    status: ProjectStatus;
    tier: "featured" | "more" | "archive";
    kind: "ai-ml" | "web" | "mobile" | "business-systems" | "game";
    stack: string[];
    role: string;
    team?: string;
    timeline?: string;
    links?: { demo?: string; code?: string; video?: string };
    media?: { src: string; alt: string; width: number; height: number };
    stats?: { value: string; label: string }[];
};

export type SkillGroup = {
    title: string;
    skills: string[];
    usedIn?: string[]; // project slugs as proof
};