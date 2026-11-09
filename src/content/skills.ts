import type { SkillGroup } from "./types";

// Define skill groups with clear, professional categories and descriptions
// Each group includes skills, descriptions, and projects where they are used

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & Machine Learning",
    description: "Developing and deploying AI/ML models for real-world applications.",
    skills: [
      "Python",
      "Machine Learning",
      "Scikit-Learn",
      "Data Analysis",
      "Streamlit",
      "Stable Diffusion",
      "NLP",
      "pgvector"
    ],
    usedIn: ["house-price-prediction", "talentlens-ai"],
  },
  {
    title: "Backend Development",
    description: "Building scalable and efficient backend systems.",
    skills: [
      "FastAPI",
      "DynamoDB",
      "AWS Lambda",
      "AWS S3",
      "SQL",
      ".NET 8",
      "C#",
      "Entity Framework Core",
      "PostgreSQL"
    ],
    usedIn: ["tailornex", "talentlens-ai", "library-mcp-server"],
  },
  {
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
    usedIn: ["appvision-react", "talentlens-ai", "studdybuddy-ai"],
  },
  {
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications.",
    skills: [
      "Flutter",
      "Dart",
      "React Native",
      "Expo"
    ],
    usedIn: ["tailornex", "studdybuddy-ai", "contentforge"],
  },
  {
    title: "Cloud & DevOps",
    description: "Deploying and managing cloud-based solutions.",
    skills: [
      "AWS Cloud",
      "Firebase",
      "Git",
      "GitHub",
    ],
    usedIn: ["tailornex", "house-price-prediction"],
  },
  {
    title: "Programming Languages",
    description: "Core programming languages used across projects.",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "C++",
      "Java",
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Additional tools and platforms for development and collaboration.",
    skills: [
      "Jupyter",
      "WSL",
      "Vite",
    ],
  },
];
