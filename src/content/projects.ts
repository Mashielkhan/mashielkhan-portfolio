import type { Project } from "./types";
import { caseStudySlugs } from "./case-studies";

const baseProjects: Project[] = [
  {
    slug: "ally-assistive-language",
    title: "A.L.L.Y Assistive Language",
    summary:
      "An assistive technology tool designed to provide real-time language support, aiming to break communication barriers.",
    status: "shipped",
    tier: "more",
    kind: "web",
    stack: ["JavaScript"],
    role: "Developer",
    links: {
      code: "https://github.com/Mashielkhan/A.L.L.Y-Assistive-Language-Life-support-for-You",
    },
  },
  {
    slug: "electron-ai-engine",
    title: "Electron AI Engine",
    summary:
      "A desktop-based AI integration engine built with Electron, allowing for local AI processing and workflow automation.",
    status: "shipped",
    tier: "more",
    kind: "web",
    stack: ["Python", "Electron"],
    role: "Developer",
    links: {
      code: "https://github.com/Mashielkhan/electron-ai-engine-hack",
    },
  },
  {
    slug: "mapify",
    title: "Mapify",
    summary:
          "A mapping application focused on visualization and location-based data services.",
      status: "shipped",
    tier: "more",
    kind: "web",
    stack: ["JavaScript"],
    role: "Developer",
    links: {
      code: "https://github.com/Mashielkhan/Mapify",
    },
  },
  {
    slug: "knitkraft",
    title: "KnitKraft",
    summary:
          "A creative platform concept exploring pattern design and crafting workflows.",
      status: "shipped",
    tier: "more",
    kind: "web",
    stack: ["EJS"],
    role: "Developer",
    links: {
      code: "https://github.com/Mashielkhan/KnitKraft",
    },
  },
  {
    slug: "note-vec",
    title: "NoteVec",
    summary:
          "A note-taking application experimenting with vector-based storage for efficient retrieval and semantic search.",
      status: "shipped",
    tier: "more",
    kind: "web",
    stack: ["TypeScript"],
    role: "Developer",
    links: {
      code: "https://github.com/Mashielkhan/note-vec",
    },
  },
  {
    slug: "library-mcp-server",
    title: "Library MCP Server",
    summary:
      "A high-performance library management system built with .NET 8, utilizing the Model Context Protocol (MCP) for AI client integration.",
    status: "shipped",
    tier: "featured",
    kind: "business-systems",
    stack: [".NET 8", "C#", "Entity Framework Core", "SQL Server", "MCP"],
    role: "Backend Engineer",
    links: {
      code: "https://github.com/Mashielkhan/library-mcp-server",
    },
  },
  {
    slug: "talentlens-ai",
    title: "TalentLens AI",
    summary:
      "A privacy-conscious resume analyzer and job matcher, leveraging explainable NLP scoring to improve hiring outcomes.",
    impact: "Provides explainable AI scoring for job applicants",
    status: "shipped",
    tier: "featured",
    kind: "ai-ml",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "NLP"],
    role: "Fullstack ML Engineer",
    links: {
      code: "https://github.com/Mashielkhan/talentlens-ai",
    },
  },
  {
    slug: "studdybuddy-ai",
    title: "StuddyBuddy.AI",
    summary:
          "An AI-powered study assistant application designed to enhance learning efficiency through interactive, intelligent feedback.",
      status: "shipped",
    tier: "featured",
    kind: "ai-ml",
    stack: ["TypeScript"],
    role: "Developer",
    links: {
      code: "https://github.com/Mashielkhan/StuddyBuddy.AI",
    },
  },
  {
    slug: "contentforge",
    title: "ContentForge",
    summary:
      "An AI content suite mobile application designed to streamline content creation workflows.",
    status: "in-development",
    tier: "more",
    kind: "mobile",
    stack: ["TypeScript"],
    role: "Developer",
    links: {
      code: "https://github.com/Mashielkhan/contentforge",
    },
  },
  {
    slug: "tailornex",
    title: "TailorNex",
    summary:
      "A full-stack mobile application designed to connect customers with tailors through a seamless experience of custom design exploration, guided measurements, bidding, and real-time order progress tracking. TailorNex leverages Flutter for cross-platform mobile development and FastAPI for backend services, ensuring scalability and performance.",
    impact: "In development with a focus on user experience and scalability",
    status: "in-development",
    tier: "featured",
    kind: "mobile",
    stack: ["Flutter", "FastAPI", "DynamoDB", "AWS Lambda", "AWS S3"],
    role: "Product Designer, System Analyst, Developer",
    team: "Final-year project, team of three",
    timeline: "2026 – present",
    links: {
      code: "https://github.com/Mashielkhan/tailornex-mobile",
    },
  },
  {
    slug: "neon-trail",
    title: "Neon Trail",
    summary:
      "A browser-based arcade game featuring six unlockable levels, increasing difficulty, hazards, power-ups, and combo-based scoring. Built with HTML, CSS, and the Canvas API, Neon Trail offers a visually engaging and interactive gaming experience.",
    impact: "Completed and available for public play",
    status: "shipped",
    tier: "more",
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
      "A machine learning project for estimating property prices using data preprocessing, model experimentation, and an interactive Streamlit prediction interface. The system achieved an R² score of approximately 85%, demonstrating high accuracy in predicting house prices.",
    impact: "Reported model R² of approximately 85%",
    status: "shipped",
    tier: "more",
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
      "A task management application designed to organize work with task details, priority levels, due dates, progress tracking, completion controls, and authentication. Built with modern web technologies, this application provides a seamless experience for managing tasks efficiently.",
    impact: "Completed and deployed for personal use",
    status: "shipped",
    tier: "more",
    kind: "web",
    stack: ["React", "Next.js", "TypeScript"],
    role: "Developer",
    links: {
      code: "https://github.com/Mashielkhan/Task-Management",
    },
  },
  {
    slug: "appvision-react",
    title: "AppVision React",
    summary:
      "A React and Vite web application project focused on building a modern frontend with reusable components and a responsive user interface. This project demonstrates expertise in frontend development using TypeScript and modern tooling.",
    impact: "Completed and deployed as a personal portfolio piece",
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
      "A workflow-focused ERP concept for a paper distribution business, planned around customer and supplier records, stock tracking, ledgers, and invoice generation. This project focuses on designing scalable business systems for real-world applications.",
    impact: "In design phase with a focus on scalability and efficiency",
    status: "in-design",
    tier: "more",
    kind: "business-systems",
    stack: ["Next.js", "TypeScript", "AWS"],
    role: "System Designer",
    links: {
      code: "https://github.com/Mashielkhan/paper-erp",
    },
  },
  {
    slug: "hospital-management",
    title: "Hospital Management System",
    summary:
      "A management system project focused on organizing patient records, appointment information, and administrative workflows. This project demonstrates experience in building systems for healthcare applications.",
    impact: "Completed and deployed for testing purposes",
    status: "shipped",
    tier: "archive",
    kind: "business-systems",
    stack: ["React", "Next.js", "TypeScript"],
    role: "Developer",
  },
  {
    slug: "library-management",
    title: "Library Management System",
    summary:
      "A library management project for maintaining book records, tracking borrowing activity, and organizing library information. This project demonstrates experience in building systems for educational and public institutions.",
    impact: "Completed and deployed for testing purposes",
    status: "shipped",
    tier: "archive",
    kind: "business-systems",
    stack: ["React", "Next.js", "TypeScript"],
    role: "Developer",
  },
  {
    slug: "shoes-ecommerce",
    title: "Shoes E-Commerce Website",
    summary:
      "A responsive e-commerce website project featuring a shoe product catalogue and individual product pages. This project demonstrates expertise in building responsive and visually appealing web applications.",
    impact: "Completed and deployed for testing purposes",
    status: "shipped",
    tier: "archive",
    kind: "web",
    stack: ["HTML", "CSS", "JavaScript"],
    role: "Developer",
  },
];

export const projects: Project[] = baseProjects.map((project) => ({
  ...project,
  caseStudy: caseStudySlugs.has(project.slug),
}));
