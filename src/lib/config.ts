export const siteConfig = {
    name: "Bechara El Maalouf",
    title: "Bechara El Maalouf - Full-Stack Developer | React, Node.js, Shopify Expert",
    description:
        "Full-Stack Developer specializing in React, Node.js, and Shopify Plus. Delivered 32% revenue increase for $2M/mo ecommerce brands through performance optimization and automation.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://becharaelmaalouf.dev",
    links: {
        email: "contact@becharaelmaalouf.dev",
        linkedin: "https://www.linkedin.com/in/bechara-el-maalouf-920645200/",
        github: "https://github.com/becharaelm",
        twitter: "https://twitter.com/becharaelm",
        cal: "https://cal.com/becharaelmaalouf",
    },
    author: {
        name: "Bechara El Maalouf",
        email: "contact@becharaelmaalouf.dev",
        location: "Zouk Mosbeh, Lebanon",
        phone: "+961 71 998 976",
        timezone: "Asia/Beirut",
    },
    social: {
        tiredZone: "https://github.com/TiredZone",
        linkedin: "https://www.linkedin.com/in/bechara-el-maalouf-920645200/",
    },
};

export type SiteConfig = typeof siteConfig;
