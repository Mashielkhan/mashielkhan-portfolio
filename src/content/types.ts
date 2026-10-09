export type ProjectStatus =
  "shipped" | "live" | "in-development" | "in-design" | "planned" | "case-study";

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
  caseStudy?: boolean;
  links?: { demo?: string; code?: string; video?: string };
  media?: { src: string; alt: string; width: number; height: number; preview?: string };
  stats?: { value: string; label: string }[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
  usedIn?: string[]; // project slugs as proof
};

export type Principle = {
  title: string;
  text: string;
  evidence: string;
};

export type TimelineItem = {
  date: string;
  title: string;
  detail?: string;
};

export type Decision = {
  title: string;
  options: string[];
  chosen: number; // index into options
  tradeoff: string;
};

export type Block =
  | { type: "prose"; id: string; title: string; paragraphs: string[]; callout?: string }
  | { type: "list"; id: string; title: string; intro?: string; items: string[] }
  | { type: "decisions"; id: string; title: string; items: Decision[] }
  | {
      type: "architecture";
      id: string;
      title: string;
      summary: string;
      columns: { label: string; nodes: string[] }[];
    }
  | {
      type: "gallery";
      id: string;
      title: string;
      items: { src: string; alt: string; caption: string; width: number; height: number }[];
    }
  | {
      type: "metrics";
      id: string;
      title: string;
      intro?: string;
      columns: string[];
      rows: { label: string; values: (string | number | null)[]; best?: boolean }[];
      note?: string;
    };

export type CaseStudy = {
  slug: string; // must match a Project slug
  tagline: string;
  stats?: { value: number; decimals?: number; prefix?: string; suffix?: string; label: string }[];
  blocks: Block[];
};
