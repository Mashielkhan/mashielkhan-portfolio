
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();

const siteUrl = (
  configuredSiteUrl ||
  (vercelProductionUrl
    ? `https://${vercelProductionUrl}`
    : "http://localhost:3000")
).replace(/\/+$/, "");

export const site = {
  name: "Mashiel Khan",
  location: "Lahore, Pakistan",

  tagline: "Software Developer Building AI-Powered Products for Real Businesses",
  shortTagline: "AI, software, and business automation",

  description:
    "Computer Science student at UCP focused on building practical software solutions, AI-powered applications, and business systems. Current projects include TailorNex, a tailoring marketplace, a paper distribution ERP, and machine learning tools.",

  url: siteUrl,
  resumeUrl: "/resume.pdf",

  email: "mashielkhan2@gmail.com",

  socials: {
    github: "https://github.com/Mashielkhan",
    linkedin: "https://www.linkedin.com/in/mashiel-khan-ba7a46367/",
  },

  availability: {
    open: true,
    label: "Open to internships",
  },

  nav: [
    { label: "Work", href: "/#work" },
    { label: "Approach", href: "/#approach" },
    { label: "Skills", href: "/#skills" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],

  now: {
    building: ["TailorNex", "Paper ERP"],
    learning: ["Agentic AI workflows", "Cloud technologies"],
    updated: "Oct 2026",
  },

  interests: [
    "Artificial Intelligence",
    "Agentic AI",
    "Business Automation",
    "SaaS",
    "Cloud Technologies",
  ],
} as const;
