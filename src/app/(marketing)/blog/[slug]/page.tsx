import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogPostSlugs } from "@/lib/mdx";
import MDXContent from "@/components/mdx/mdx-remote-content";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/common/badge";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllBlogPostSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({
    params,
}: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        return {
            title: "Blog Post Not Found",
        };
    }

    return {
        title: `${post.frontmatter.title} – Blog`,
        description: post.frontmatter.description,
        openGraph: {
            title: post.frontmatter.title,
            description: post.frontmatter.description,
            type: "article",
            publishedTime: post.frontmatter.publishedAt,
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const { frontmatter, content } = post;

    return (
        <>
            <Section className="bg-gradient-to-br from-royal-700 to-royal-900 dark:from-royal-900 dark:to-black text-white">
                <Container>
                    <div className="max-w-3xl mx-auto py-12">
                        {/* Back Button */}
                        <div className="mb-8">
                            <Button
                                variant="ghost"
                                className="text-white hover:text-gold-400"
                                asChild
                            >
                                <Link href="/blog">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Blog
                                </Link>
                            </Button>
                        </div>

                        {/* Tags */}
                        {frontmatter.tags && frontmatter.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6">
                                {frontmatter.tags.map((tag) => (
                                    <Badge key={tag} variant="default">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        )}

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            {frontmatter.title}
                        </h1>

                        {/* Description */}
                        <p className="text-xl text-royal-100 mb-8">
                            {frontmatter.description}
                        </p>

                        {/* Meta */}
                        <div className="flex flex-wrap gap-6 text-sm text-royal-200">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <time dateTime={frontmatter.publishedAt}>
                                    {new Date(
                                        frontmatter.publishedAt
                                    ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </time>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <article className="max-w-3xl mx-auto">
                        {/* MDX Content */}
                        <div className="prose prose-lg prose-royal dark:prose-invert max-w-none">
                            <MDXContent content={content} />
                        </div>

                        {/* Author Bio */}
                        <div className="mt-12 pt-8 border-t border-royal-200 dark:border-royal-800">
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-royal-600 flex items-center justify-center text-white text-2xl font-bold">
                                    B
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-royal-900 dark:text-white mb-2">
                                        Bechara El Maalouf
                                    </h3>
                                    <p className="text-royal-700 dark:text-royal-300 mb-3">
                                        Full-Stack Developer specializing in
                                        Shopify Plus, React, Node.js, and
                                        automation solutions. Helping businesses
                                        grow through strategic development.
                                    </p>
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href="/about">Learn More</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-12 p-8 bg-gradient-to-br from-gold-50 to-royal-50 dark:from-gold-950/20 dark:to-royal-950/20 rounded-xl text-center border border-gold-200 dark:border-gold-800">
                            <h3 className="text-2xl font-bold text-royal-900 dark:text-white mb-3">
                                Need Help With Your Project?
                            </h3>
                            <p className="text-royal-700 dark:text-royal-300 mb-6 max-w-2xl mx-auto">
                                Let&apos;s discuss how I can help you achieve
                                your goals through strategic development and
                                optimization.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-gold-500 hover:bg-gold-600 text-royal-900 font-semibold"
                                    asChild
                                >
                                    <Link href="/contact">Get in Touch</Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="/services">View Services</Link>
                                </Button>
                            </div>
                        </div>
                    </article>
                </Container>
            </Section>
        </>
    );
}
