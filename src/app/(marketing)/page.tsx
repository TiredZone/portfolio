import { getAllCaseStudies } from "@/lib/mdx";
import { AnimatedHomepage } from "@/components/features/animated-homepage";

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
