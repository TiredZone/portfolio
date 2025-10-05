import type { Metadata } from "next";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/mdx";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/common/badge";
import { ArrowRight, Calendar, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
    title: "Work – Case Studies & Portfolio",
    description:
        "Explore my portfolio of successful projects including Shopify Plus optimizations, web applications, and automation solutions.",
};

export default function WorkPage() {
    const caseStudies = getAllCaseStudies();

    return (
        <>
            <Section className="bg-gradient-to-br from-royal-700 to-royal-900 dark:from-royal-900 dark:to-black text-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center py-12">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                            Case Studies & Portfolio
                        </h1>
                        <p className="text-xl text-royal-100 mb-8">
                            Real projects, real results. See how I help
                            businesses grow through strategic development and
                            optimization.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                                <TrendingUp className="w-4 h-4" />
                                <span>32% Revenue Increase</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                                <TrendingUp className="w-4 h-4" />
                                <span>50k+ Leads Automated</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                                <TrendingUp className="w-4 h-4" />
                                <span>$5M+ Revenue Managed</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    {caseStudies.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-royal-700 dark:text-royal-300">
                                No case studies available yet. Check back soon!
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {caseStudies.map((study) => (
                                <Link
                                    key={study.slug}
                                    href={`/work/${study.slug}`}
                                    className="group bg-white dark:bg-royal-900/20 rounded-xl overflow-hidden border border-royal-200 dark:border-royal-800 hover:border-gold-500 dark:hover:border-gold-500 transition-all hover:shadow-xl"
                                >
                                    <div className="p-8">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <div className="text-sm font-semibold text-gold-600 dark:text-gold-400 mb-2">
                                                    {study.frontmatter.client}
                                                </div>
                                                <h2 className="text-2xl font-bold text-royal-900 dark:text-white mb-2 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                                                    {study.frontmatter.title}
                                                </h2>
                                            </div>
                                            {study.frontmatter.featured && (
                                                <Badge variant="gold">
                                                    Featured
                                                </Badge>
                                            )}
                                        </div>

                                        {/* Description */}
                                        <p className="text-royal-700 dark:text-royal-300 mb-6">
                                            {study.frontmatter.description}
                                        </p>

                                        {/* Meta Info */}
                                        <div className="flex flex-wrap gap-4 mb-6 text-sm text-royal-600 dark:text-royal-400">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>
                                                    {study.frontmatter.duration}
                                                </span>
                                            </div>
                                            <div>
                                                <span className="font-medium">
                                                    Role:
                                                </span>{" "}
                                                {study.frontmatter.role}
                                            </div>
                                        </div>

                                        {/* Metrics */}
                                        {study.frontmatter.metrics &&
                                            study.frontmatter.metrics.length >
                                                0 && (
                                                <div className="grid grid-cols-2 gap-4 mb-6">
                                                    {study.frontmatter.metrics
                                                        .slice(0, 4)
                                                        .map((metric, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="bg-royal-50 dark:bg-royal-800/20 rounded-lg p-4"
                                                            >
                                                                <div className="text-sm text-royal-600 dark:text-royal-400 mb-1">
                                                                    {
                                                                        metric.label
                                                                    }
                                                                </div>
                                                                <div className="text-xl font-bold text-royal-900 dark:text-white">
                                                                    {
                                                                        metric.value
                                                                    }
                                                                </div>
                                                            </div>
                                                        ))}
                                                </div>
                                            )}

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {study.frontmatter.tech
                                                .slice(0, 5)
                                                .map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="text-xs px-3 py-1 bg-royal-100 dark:bg-royal-800 text-royal-700 dark:text-royal-300 rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            {study.frontmatter.tech.length >
                                                5 && (
                                                <span className="text-xs px-3 py-1 text-royal-600 dark:text-royal-400">
                                                    +
                                                    {study.frontmatter.tech
                                                        .length - 5}{" "}
                                                    more
                                                </span>
                                            )}
                                        </div>

                                        {/* CTA */}
                                        <div className="flex items-center text-sm font-semibold text-gold-600 dark:text-gold-400 group-hover:gap-2 transition-all">
                                            Read Case Study
                                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </Container>
            </Section>
        </>
    );
}
