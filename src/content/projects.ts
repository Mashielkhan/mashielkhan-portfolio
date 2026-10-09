import type { Project } from "./types";
import { caseStudySlugs } from "./case-studies";

const baseProjects: Project[] = [
  {
    slug: "tailornex",
    title: "TailorNex",
    summary:
      "A tailoring marketplace designed to connect customers with tailors through custom design exploration, guided measurements, bidding, and order progress tracking.",
    status: "in-development",
    tier: "featured",
    kind: "mobile",
    stack: ["Flutter", "FastAPI", "DynamoDB", "AWS Lambda", "AWS S3"],
    role: "Product Designer, System Analyst, Developer",
    team: "Final-year project, team of three",
    timeline: "2026 – present",
  },
  {
    slug: "neon-trail",
    title: "Neon Trail",
    summary:
      "A browser-based arcade game featuring six unlockable levels, increasing difficulty, hazards, power-ups, and combo-based scoring, built with HTML, CSS, and Canvas.",
    status: "shipped",
    tier: "featured",
    kind: "game",
    stack: ["HTML", "CSS", "JavaScript", "Canvas API"],
    role: "Game Developer",
    links: {
      code: "https://github.com/Mashielkhan/neon-trail-game",
    },
  },
  {
    slug: "house-price-prediction",
    title: "Smart House Price Prediction System",
    summary:
      "A machine learning project for estimating property prices, combining data preprocessing, model experimentation, and an interactive Streamlit prediction interface.",
    impact: "Reported model R² of approximately 85%",
    status: "shipped",
    tier: "featured",
    kind: "ai-ml",
    stack: ["Python", "Scikit-Learn", "Streamlit"],
    role: "ML Engineer and Developer",
    links: {
      code: "https://github.com/Mashielkhan/HousePrice-Prediction",
    },
  },
  {
    slug: "task-management",
    title: "Task Management Application",
    summary:
      "A task management application designed to organize work with task details, priority levels, due dates, progress tracking, completion controls, and authentication.",
    status: "shipped",
    tier: "more",
    kind: "web",
    stack: [],
    role: "Developer",
    links: {
      code: "https://github.com/Mashielkhan/Task-Management",
    },
  },
  {
    slug: "appvision-react",
    title: "AppVision React",
    summary:
      "A React and Vite web application project focused on building a modern frontend with reusable components and a responsive user interface.",
    status: "shipped",
    tier: "more",
    kind: "web",
    stack: ["React", "Vite", "TypeScript"],
    role: "Frontend Developer",
    links: {
      code: "https://github.com/Mashielkhan/appvision-react",
    },
  },
  {
    slug: "paper-erp",
    title: "Paper ERP",
    summary:
      "A workflow-focused ERP concept for a paper distribution business, planned around customer and supplier records, stock tracking, ledgers, and invoice generation.",
    status: "in-design",
    tier: "more",
    kind: "business-systems",
    stack: [],
    role: "System Designer",
  },
  {
    slug: "hospital-management",
    title: "Hospital Management System",
    summary:
      "A management system project focused on organizing patient records, appointment information, and administrative workflows.",
    status: "shipped",
    tier: "archive",
    kind: "business-systems",
    stack: [],
    role: "Developer",
  },
  {
    slug: "library-management",
    title: "Library Management System",
    summary:
      "A library management project for maintaining book records, tracking borrowing activity, and organizing library information.",
    status: "shipped",
    tier: "archive",
    kind: "business-systems",
    stack: [],
    role: "Developer",
  },
  {
    slug: "shoes-ecommerce",
    title: "Shoes E-Commerce Website",
    summary:
      "A responsive e-commerce website project featuring a shoe product catalogue and individual product pages.",
    status: "shipped",
    tier: "archive",
    kind: "web",
    stack: ["HTML", "CSS"],
    role: "Developer",
  },
];

export const projects: Project[] = baseProjects.map((project) => ({
  ...project,
  caseStudy: caseStudySlugs.has(project.slug),
}));
