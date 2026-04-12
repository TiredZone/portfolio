import type { Metadata } from "next";
import { getAllCaseStudies } from "@/lib/mdx";
import { AnimatedHomepage } from "@/components/features/animated-homepage";

export const metadata: Metadata = {
    title: "Bechara El Maalouf — Shopify CRO Specialist | I Turn Traffic Into Revenue",
    description:
        "Shopify CRO Specialist. 3+ years optimizing 7-to-9 figure Shopify stores. $500K+ in documented CRO revenue. Book a free audit.",
};

export default async function HomePage() {
    // Get all case studies server-side
    const allCaseStudies = await getAllCaseStudies();

    // Get featured case studies
    const featuredCaseStudies = allCaseStudies
        .filter((study) => study.frontmatter.featured)
        .sort(
            (a, b) =>
                new Date(b.frontmatter.publishedAt).getTime() -
                new Date(a.frontmatter.publishedAt).getTime()
        )
        .slice(0, 3);

    return <AnimatedHomepage featuredCaseStudies={featuredCaseStudies} />;
}
