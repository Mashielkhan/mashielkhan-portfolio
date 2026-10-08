import type { Project } from "./types";

export const projects: Project[] = [
    {
        slug: "tailornex",
        title: "TailorNex",
        summary:
            "Digital tailoring marketplace connecting customers and tailors through profiles, measurements, order tracking, and digital workflows.",
        status: "in-development", // switch to "live" once a deployed build exists
        tier: "featured",
        kind: "mobile",
        stack: ["Flutter", "Firebase"],
        role: "Product Designer, System Analyst, Developer",
        team: "Final-year project (team)",
        // TODO: add your specific contributions in Phase 4
    },
    {
        slug: "paper-erp",
        title: "Paper ERP",
        summary:
            "Workflow-first ERP design for a real paper distribution business, replacing manual processes with a structured system.",
        status: "in-design",
        tier: "featured",
        kind: "business-systems",
        stack: [], // TODO: planned stack
        role: "TODO: confirm role",
        // No metrics until it's running.
    },
    {
        slug: "house-price-prediction",
        title: "Smart House Price Prediction System",
        summary:
            "Machine learning system for property price estimation with preprocessing, an interactive dashboard, and real-time prediction.",
        impact: "≈85% R² score (to be backed by baseline, MAE/RMSE and cross-validation in Phase 4)",
        status: "shipped", // TODO: "live" once deployed
        tier: "featured",
        kind: "ai-ml",
        stack: ["Python", "Scikit-Learn", "Streamlit"],
        role: "ML Engineer and Developer",
    },
    {
        slug: "tailornex-ai-assistant",
        title: "TailorNex AI Assistant",
        summary: "Planned LLM-powered assistant for the TailorNex domain.",
        status: "planned",
        tier: "more",
        kind: "ai-ml",
        stack: [], // TODO: decide when architecture is defined
        role: "TODO",
    },
    {
        slug: "appvision-react",
        title: "AppVision React",
        summary: "Modern React and Vite web application focused on performance, responsive UI, and component architecture.",
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
    { slug: "hospital-management", title: "Hospital Management System", summary: "Patient records, appointment tracking, administrative workflows.", status: "shipped", tier: "archive", kind: "business-systems", stack: [], role: "Developer" },
    { slug: "library-management", title: "Library Management System", summary: "Book management, borrowing system, record tracking.", status: "shipped", tier: "archive", kind: "business-systems", stack: [], role: "Developer" },
    { slug: "shoes-ecommerce", title: "Shoes E-Commerce Website", summary: "Responsive shopping site with product catalog and product pages.", status: "shipped", tier: "archive", kind: "web", stack: ["HTML", "CSS"], role: "Developer" },
];