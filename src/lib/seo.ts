import { siteConfig } from "./config";

export const defaultSEO = {
    title: siteConfig.title,
    description: siteConfig.description,
    canonical: siteConfig.url,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: siteConfig.title,
        description: siteConfig.description,
        images: [
            {
                url: `${siteConfig.url}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: siteConfig.title,
            },
        ],
    },
    twitter: {
        handle: "@becharaelm",
        site: "@becharaelm",
        cardType: "summary_large_image",
    },
    additionalMetaTags: [
        {
            name: "author",
            content: siteConfig.author.name,
        },
        {
            name: "theme-color",
            content: "#4338ca",
        },
        {
            name: "keywords",
            content:
                "Bechara El Maalouf, Full-Stack Developer, React, Node.js, .NET Core, Python, TypeScript, JavaScript, Angular, React Native, Flutter, Mobile Development, Shopify Plus, Shopify Developer, WordPress, Web Development, Ecommerce, Performance Optimization, Automation, AI Automation, DevOps, Docker, Kubernetes, CI/CD, GitHub Actions, MongoDB, MS SQL Server, PostgreSQL, Web3, Blockchain, ethers.js, Lebanon Developer, Remote Developer, Cloud Development, RESTful APIs, GraphQL",
        },
    ],
    additionalLinkTags: [
        {
            rel: "icon",
            href: "/favicon.ico",
        },
        {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
            sizes: "180x180",
        },
        {
            rel: "manifest",
            href: "/site.webmanifest",
        },
    ],
};

export const generateMetadata = ({
    title,
    description,
    image,
    url,
    noIndex = false,
}: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    noIndex?: boolean;
}) => {
    const metadata: Record<string, unknown> = {
        title: title || siteConfig.title,
        description: description || siteConfig.description,
        openGraph: {
            title: title || siteConfig.title,
            description: description || siteConfig.description,
            url: url || siteConfig.url,
            siteName: siteConfig.author.name,
            images: [
                {
                    url: image || `${siteConfig.url}/og-image.jpg`,
                    width: 1200,
                    height: 630,
                    alt: title || siteConfig.title,
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: title || siteConfig.title,
            description: description || siteConfig.description,
            images: [image || `${siteConfig.url}/og-image.jpg`],
            creator: "@becharaelm",
        },
    };

    if (noIndex) {
        metadata.robots = {
            index: false,
            follow: false,
        };
    }

    return metadata;
};

export const generateJsonLd = (type: string, data: Record<string, unknown>) => {
    const baseSchema = {
        "@context": "https://schema.org",
        "@type": type,
        ...data,
    };

    return JSON.stringify(baseSchema);
};

// Person Schema for About/Home pages
export const personSchema = generateJsonLd("Person", {
    name: siteConfig.author.name,
    email: siteConfig.author.email,
    url: siteConfig.url,
    jobTitle: "Full-Stack Developer",
    description: siteConfig.description,
    address: {
        "@type": "PostalAddress",
        addressLocality: "Zouk Mosbeh",
        addressCountry: "LB",
    },
    sameAs: [siteConfig.social.linkedin, siteConfig.social.tiredZone],
    knowsAbout: [
        "React",
        "Node.js",
        ".NET Core",
        "Python",
        "TypeScript",
        "JavaScript",
        "Angular",
        "React Native",
        "Flutter",
        "Mobile Development",
        "Shopify Plus",
        "WordPress",
        "Web Development",
        "Performance Optimization",
        "DevOps",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Automation",
        "AI Automation",
        "MongoDB",
        "MS SQL Server",
        "PostgreSQL",
        "Web3",
        "Blockchain",
        "Cloud Development",
        "RESTful APIs",
        "GraphQL",
    ],
});

// Organization Schema
export const organizationSchema = generateJsonLd("Organization", {
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [siteConfig.social.linkedin, siteConfig.social.tiredZone],
    contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.author.email,
        contactType: "Professional Services",
    },
});
