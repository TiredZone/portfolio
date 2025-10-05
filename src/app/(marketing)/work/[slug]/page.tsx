import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/lib/mdx";
import { CaseStudyHero } from "@/components/features/case-study-hero";
import MDXContent from "@/components/mdx/mdx-remote-content";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";

interface CaseStudyPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllCaseStudySlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({
    params,
}: CaseStudyPageProps): Promise<Metadata> {
    const { slug } = await params;
    const study = getCaseStudyBySlug(slug);

    if (!study) {
        return {
            title: "Case Study Not Found",
        };
    }

    return {
        title: `${study.frontmatter.title} – Case Study`,
        description: study.frontmatter.description,
        openGraph: {
            title: study.frontmatter.title,
            description: study.frontmatter.description,
            type: "article",
            publishedTime: study.frontmatter.publishedAt,
        },
    };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
    const { slug } = await params;
    const study = getCaseStudyBySlug(slug);

    if (!study) {
        notFound();
    }

    const { frontmatter, content } = study;

    return (
        <>
            {/* Hero Section */}
            <CaseStudyHero
                title={frontmatter.title}
                description={frontmatter.description}
                client={frontmatter.client}
                duration={frontmatter.duration}
                role={frontmatter.role}
                tech={frontmatter.tech}
                image={frontmatter.image}
                metrics={frontmatter.metrics}
            />

            {/* Content Section */}
            <Section>
                <Container>
                    <div className="max-w-4xl mx-auto">
                        {/* Back Button */}
                        <div className="mb-8">
                            <Button variant="ghost" asChild>
                                <Link href="/work">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Portfolio
                                </Link>
                            </Button>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-royal-200 dark:border-royal-800 text-sm text-royal-600 dark:text-royal-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>
                                    Published{" "}
                                    {new Date(
                                        frontmatter.publishedAt
                                    ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{frontmatter.duration}</span>
                            </div>
                        </div>

                        {/* MDX Content */}
                        <article className="prose prose-lg prose-royal dark:prose-invert max-w-none">
                            <MDXContent content={content} />
                        </article>

                        {/* Tech Stack */}
                        <div className="mt-12 pt-8 border-t border-royal-200 dark:border-royal-800">
                            <h3 className="text-xl font-bold text-royal-900 dark:text-white mb-4">
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {frontmatter.tech.map((tech: string) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-royal-100 dark:bg-royal-800 text-royal-700 dark:text-royal-300 rounded-lg text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-12 p-8 bg-gradient-to-br from-gold-50 to-royal-50 dark:from-gold-950/20 dark:to-royal-950/20 rounded-xl text-center border border-gold-200 dark:border-gold-800">
                            <h3 className="text-2xl font-bold text-royal-900 dark:text-white mb-3">
                                Want Similar Results?
                            </h3>
                            <p className="text-royal-700 dark:text-royal-300 mb-6 max-w-2xl mx-auto">
                                Let&apos;s discuss how I can help your business
                                achieve growth through strategic development.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-gold-500 hover:bg-gold-600 text-royal-900 font-semibold"
                                    asChild
                                >
                                    <Link href="/contact">Schedule a Call</Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="/work">View More Projects</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
