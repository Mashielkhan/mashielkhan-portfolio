import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & Data",
    skills: ["Python", "Machine Learning", "Scikit-Learn", "Data Analysis", "Streamlit"],
    usedIn: ["house-price-prediction"],
  },
  { title: "Backend & Data", skills: ["Firebase", "SQL"], usedIn: ["tailornex", "paper-erp"] },
  {
    title: "Frontend & Mobile",
    skills: ["React", "Vite", "HTML", "CSS", "Flutter"],
    usedIn: ["appvision-react", "tailornex"],
  },
  {
    title: "Languages & Tools",
    skills: ["Python", "C++", "Java", "JavaScript", "Git", "GitHub", "Jupyter", "WSL"],
  },
];
