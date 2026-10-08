export const site = {
    name: "Mashiel Khan",
    location: "Lahore, Pakistan",
    tagline: "Software Developer Building AI-Powered Products for Real Businesses",
    shortTagline: "AI products for real businesses",
    description:
        "CS student at UCP. I take products from discovery to deployed system: a tailoring marketplace, a paper-distribution ERP, and ML tools.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    resumeUrl: "/resume.pdf",
    email: "TODO@example.com", // TODO: replace
    socials: {
        github: "https://github.com/TODO", // TODO
        linkedin: "https://www.linkedin.com/in/TODO", // TODO
    },
    availability: { open: true, label: "Open to internships", from: "TODO" }, // TODO: your window
    nav: [
        { label: "Work", href: "/#work" },
        { label: "About", href: "/#about" },
        { label: "Skills", href: "/#skills" },
        { label: "Contact", href: "/#contact" },
    ],
} as const;