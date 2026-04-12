export const siteConfig = {
    name: "Bechara El Maalouf",
    title: "Bechara El Maalouf - Shopify CRO Specialist",
    description:
        "Shopify CRO Specialist. 3+ years optimizing 7-to-9 figure Shopify stores. $500K+ in documented CRO revenue across 8+ DTC brands.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://becharaelmaalouf.dev",
    links: {
        email: "contact@becharaelmaalouf.dev",
        linkedin: "https://www.linkedin.com/in/bechara-el-maalouf-920645200/",
        github: "https://github.com/TiredZone",
        twitter: "https://twitter.com/becharaelm",
        cal: "https://cal.com/becharaelmaalouf",
    },
    author: {
        name: "Bechara El Maalouf",
        email: "contact@becharaelmaalouf.dev",
        location: "Zouk Mosbeh, Lebanon",
        phone: "+961 71 898 976",
        timezone: "Asia/Beirut",
    },
    social: {
        tiredZone: "https://github.com/TiredZone",
        linkedin: "https://www.linkedin.com/in/bechara-el-maalouf-920645200/",
    },
};

export type SiteConfig = typeof siteConfig;
