import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & Data",
    skills: [
      "Python",
      "Machine Learning",
      "Scikit-Learn",
      "Data Analysis",
      "Streamlit",
      "Stable Diffusion",
    ],
    usedIn: ["house-price-prediction", "tailornex"],
  },
  {
    title: "Backend & Cloud",
    skills: ["FastAPI", "DynamoDB", "AWS Lambda", "AWS S3", "SQL"],
    usedIn: ["tailornex"],
  },
  {
    title: "Frontend & Mobile",
    skills: ["React", "Vite", "HTML", "CSS", "Flutter"],
    usedIn: ["appvision-react", "tailornex"],
  },
  {
    title: "Languages & Tools",
    skills: [
      "Python",
      "C++",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Flutter",
      "Firebase",
      "AWS Cloud",
      "Git",
      "GitHub",
      "Jupyter",
      "WSL",
    ],
  },
];
