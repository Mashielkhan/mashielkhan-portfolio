export const site = {
  name: "Mashiel Khan",
  location: "Lahore, Pakistan",
  tagline: "Software Developer Building AI-Powered Products for Real Businesses",
  shortTagline: "AI products for real businesses",
  description:
    "CS student at UCP. I take products from discovery to deployed system: a tailoring marketplace, a paper-distribution ERP, and ML tools.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  resumeUrl: "/resume.pdf",
  email: "TODO@example.com", // TODO: replace
  socials: {
    github: "https://github.com/TODO", // TODO
    linkedin: "https://www.linkedin.com/in/TODO", // TODO
  },
  availability: { open: true, label: "Open to internships", from: "TODO" }, // TODO: your window
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
  interests: ["Artificial Intelligence", "Agentic AI", "Business automation", "SaaS", "Cloud"],
} as const;
