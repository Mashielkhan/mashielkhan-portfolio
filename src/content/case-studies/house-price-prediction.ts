import type { CaseStudy } from "../types";

export const housePricePrediction: CaseStudy = {
    slug: "house-price-prediction",
    tagline:
        "A notebook-based machine learning experiment for estimating house prices using regression.",
    stats: [
        { value: 85.13, decimals: 2, suffix: "%", label: "RANSAC test-split R²" },
    ],
    blocks: [
        {
            type: "prose",
            id: "overview",
            title: "What it does",
            paragraphs: [
                "The notebook explores property data, applies preprocessing, trains regression models, and evaluates predictions against held-out test data.",
                "The implemented regression approaches include Linear Regression and RANSAC. The reported final evaluation output corresponds to RANSAC.",
            ],
        },
        {
            type: "architecture",
            id: "pipeline",
            title: "Pipeline",
            summary: "From property data to regression evaluation.",
            columns: [
                { label: "Data", nodes: ["Property dataset"] },
                { label: "Preparation", nodes: ["Data preprocessing", "Feature encoding"] },
                { label: "Models", nodes: ["Linear Regression", "RANSAC"] },
                { label: "Evaluation", nodes: ["R²", "MAE", "RMSE"] },
            ],
        },
        {
            type: "prose",
            id: "results",
            title: "Evaluation",
            paragraphs: [
                "On the notebook's held-out test split, the recorded RANSAC evaluation reports R² 0.8513, MAE 72,445.92, and RMSE 89,328.64.",
                "A cross-validated comparison against a simple baseline is a planned improvement. These results should not be interpreted as proof of performance on other property datasets.",
            ],
        },
        {
            type: "list",
            id: "limitations",
            title: "Limitations and next steps",
            items: [
                "The public repository currently contains the notebook rather than a standalone prediction application.",
                "A documented baseline comparison and cross-validation would strengthen the evaluation.",
                "Predictions are estimates and should not be treated as professional property valuations.",
            ],
        },
    ],
};