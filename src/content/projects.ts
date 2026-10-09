import type { Project } from "./types";
import { caseStudySlugs } from "./case-studies";

const baseProjects: Project[] = [
  {
    slug: "tailornex",
    title: "TailorNex",
    summary:
      "AI-assisted marketplace connecting customers and tailors through design generation, structured measurements, bidding, and milestone tracking.",
    status: "in-development",
    tier: "featured",
    kind: "mobile",
    stack: ["Flutter", "FastAPI", "DynamoDB", "AWS Lambda", "AWS S3"],
    role: "Product Designer, System Analyst, Developer",
    team: "Final-year project, team of three",
    timeline: "2026 – present",
  },
  {
    slug: "paper-erp",
    title: "Paper ERP",
    summary:
      "Workflow-first ERP design for a real paper distribution business, currently in the design stage.",
    status: "in-design",
    tier: "featured",
    kind: "business-systems",
    stack: [],
    role: "System design",
    // No metrics until it's running.
  },
  {
    slug: "house-price-prediction",
    title: "Smart House Price Prediction System",
    summary:
      "Machine learning system for property price estimation with preprocessing, an interactive dashboard, and real-time prediction.",
    impact: "Reported R² of approximately 85%",
    status: "shipped",
    tier: "featured",
    kind: "ai-ml",
    stack: ["Python", "Scikit-Learn", "Streamlit"],
    role: "ML Engineer and Developer",
  },
  {
    slug: "tailornex-ai-assistant",
    title: "TailorNex AI Assistant",
    summary: "Planned AI assistant for the TailorNex domain.",
    status: "planned",
    tier: "more",
    kind: "ai-ml",
    stack: [],
    role: "Designer and developer",
  },
  {
    slug: "appvision-react",
    title: "AppVision React",
    summary:
      "Modern React and Vite web application focused on performance, responsive UI, and component architecture.",
    status: "shipped",
    tier: "more",
    kind: "web",
    stack: ["React", "Vite"],
    role: "Frontend Developer",
  },
  {
    slug: "neon-trail",
    title: "Neon Trail",
    summary: "Browser-based game with 6 levels, power-ups, and progressive difficulty.",
    status: "shipped",
    tier: "more",
    kind: "game",
    stack: ["HTML", "CSS", "JavaScript", "Canvas API"],
    role: "Game Developer",
  },
  {
    slug: "hospital-management",
    title: "Hospital Management System",
    summary: "Patient records, appointment tracking, administrative workflows.",
    status: "shipped",
    tier: "archive",
    kind: "business-systems",
    stack: [],
    role: "Developer",
  },
  {
    slug: "library-management",
    title: "Library Management System",
    summary: "Book management, borrowing system, record tracking.",
    status: "shipped",
    tier: "archive",
    kind: "business-systems",
    stack: [],
    role: "Developer",
  },
  {
    slug: "shoes-ecommerce",
    title: "Shoes E-Commerce Website",
    summary: "Responsive shopping site with product catalog and product pages.",
    status: "shipped",
    tier: "archive",
    kind: "web",
    stack: ["HTML", "CSS"],
    role: "Developer",
  },
];

export const projects: Project[] = baseProjects.map((p) => ({
  ...p,
  caseStudy: caseStudySlugs.has(p.slug),
}));
