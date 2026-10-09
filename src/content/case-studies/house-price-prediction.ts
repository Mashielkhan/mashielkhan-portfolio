import type { CaseStudy } from "../types";

export const housePricePrediction: CaseStudy = {
  slug: "house-price-prediction",
  tagline:
    "A machine learning system that estimates property prices, with an interactive dashboard.",
  stats: [{ value: 85, prefix: "≈", suffix: "%", label: "Reported R² score" }],
  blocks: [
    {
      type: "prose",
      id: "overview",
      title: "What it does",
      paragraphs: [
        "The system covers data preprocessing, predictive analytics, an interactive dashboard, and real-time prediction.",
        "It uses three regression approaches, Linear Regression, KNN, and RANSAC, and is built with Python, Scikit-Learn, and Streamlit.",
      ],
    },
    {
      type: "architecture",
      id: "pipeline",
      title: "Pipeline",
      summary: "From raw data to a live prediction.",
      columns: [
        { label: "Data", nodes: ["Raw property data"] },
        { label: "Preparation", nodes: ["Data preprocessing"] },
        { label: "Models", nodes: ["Linear Regression", "KNN", "RANSAC"] },
        { label: "App", nodes: ["Streamlit dashboard", "Real-time prediction"] },
      ],
    },
    {
      type: "prose",
      id: "results",
      title: "Evaluation",
      paragraphs: [
        "The project reports an R² score of approximately 85%.",
        "A fuller evaluation write-up is planned, covering the validation setup, a per-model comparison against a simple baseline, and an error analysis.",
      ],
    },
    {
      type: "list",
      id: "limitations",
      title: "Limitations",
      items: [
        "Only a single overall score is reported so far; per-model and baseline comparisons are not yet documented.",
        "Predictions reflect the data the models were trained on, so they should be read as estimates rather than valuations.",
      ],
    },
  ],
};
