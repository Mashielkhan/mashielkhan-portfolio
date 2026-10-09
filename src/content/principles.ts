import type { Principle } from "./types";

// TODO: rewrite each with a real decision you made, then link it to the case study in Phase 4.
export const principles: Principle[] = [
  {
    title: "Start with the people who live with the problem",
    text: "Features come second. For TailorNex, the starting point is how tailors and customers actually work together today.",
    evidence: "TailorNex",
  },
  {
    title: "Model the workflow before the screens",
    text: "Software should mirror how a business really runs. I map the real process first, then design the system around it.",
    evidence: "Paper ERP",
  },
  {
    title: "Measure against a baseline",
    text: "A score means little alone. I compare models against a simple baseline before claiming an improvement.",
    evidence: "Smart House Price Prediction",
  },
  {
    title: "Ship, then improve",
    text: "Working software teaches faster than plans. I build small, put it in front of people, and iterate.",
    evidence: "AppVision React · Neon Trail",
  },
];
