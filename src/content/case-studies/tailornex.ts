import type { CaseStudy } from "../types";

export const tailornex: CaseStudy = {
  slug: "tailornex",
  tagline:
    "An AI-assisted marketplace connecting customers with tailors, built as a final-year project for Pakistan's tailoring sector.",
  stats: [
    { value: 4, label: "Core features in scope" },
    { value: 30, suffix: " weeks", label: "Planned build timeline" },
  ],
  blocks: [
    {
      type: "prose",
      id: "problem",
      title: "The problem",
      paragraphs: [
        "Traditional tailoring businesses rely on manual processes and fragmented communication.",
        "TailorNex is designed to bring this into one marketplace: customers can generate design ideas, submit structured measurements, receive bids from tailors, and follow an order through milestones.",
      ],
    },
    {
      type: "prose",
      id: "status",
      title: "Status",
      paragraphs: [
        "TailorNex is in active development as a final-year project with a 30-week timeline. The four core features below are scoped for this build, and this page does not claim any of them as complete. Stable Diffusion fine-tuning and escrow payments are planned for a second phase and are not implemented.",
      ],
    },
    {
      type: "list",
      id: "scope",
      title: "Scope",
      intro: "A 30-week final-year build, so scope was set deliberately.",
      items: [
        "In scope: AI design generation using Stable Diffusion",
        "In scope: structured measurement input",
        "In scope: a bidding marketplace between customers and tailors",
        "In scope: milestone tracking for orders",
        "Planned for a second phase: Stable Diffusion fine-tuning",
        "Planned for a second phase: escrow payments",
      ],
    },
    {
      type: "list",
      id: "contribution",
      title: "My contribution",
      intro:
        "Built by a team of three as a final-year project. My roles across the project: product design, system analysis, and development.",
      items: [
        "Product design: shaping how customers and tailors interact through the app",
        "System analysis: taking part in scoping the requirements for a 30-week build, including deferring fine-tuning and escrow payments",
        "Development: building features as part of a three-person team",
      ],
    },
    {
      type: "decisions",
      id: "decisions",
      title: "Key decisions",
      items: [
        {
          title: "Scope the project for a build that can be finished and defended",
          options: [
            "Ship everything, including Stable Diffusion fine-tuning and escrow payments",
            "Defer fine-tuning and escrow to a second phase",
          ],
          chosen: 1,
          tradeoff:
            "Less AI novelty in the first version, but a smaller surface to finish, test, and defend within the timeline.",
        },
      ],
    },
    {
      type: "architecture",
      id: "architecture",
      title: "Architecture",
      summary:
        "The planned technology stack, grouped by layer. It will be updated as the build progresses.",
      columns: [
        { label: "Client", nodes: ["Flutter mobile app"] },
        { label: "API", nodes: ["FastAPI"] },
        { label: "Data & infrastructure", nodes: ["DynamoDB", "AWS Lambda", "AWS S3"] },
        {
          label: "AI & payments",
          nodes: ["Stable Diffusion (design generation)", "JazzCash / EasyPaisa"],
        },
      ],
    },
    {
      type: "prose",
      id: "next",
      title: "What's next",
      paragraphs: [
        "Development continues over the planned 30-week timeline. Stable Diffusion fine-tuning and escrow payments are planned for a second phase.",
        "This page will be updated with screens, architecture details, and outcomes as features are completed.",
      ],
    },
  ],
};
