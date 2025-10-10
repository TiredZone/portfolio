import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/common/badge";
import { Clock, ArrowRight } from "lucide-react";
import { NewsletterSignup } from "@/components/features/newsletter-signup";
import { getAllBlogPosts } from "@/lib/mdx";
import { FloatingElements } from "@/components/common/floating-elements";

export const metadata: Metadata = {
    title: "Blog - Technical Articles & Web Development Insights",
    description:
        "Articles about web development, Shopify optimization, automation, and modern web technologies.",
};

export default function BlogPage() {
    const allBlogPosts = getAllBlogPosts();

    // Transform MDX posts to the format expected by the component
    const posts = allBlogPosts.map((post) => ({
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        slug: post.slug,
        url: `/blog/${post.slug}`,
        publishedAt: post.frontmatter.publishedAt,
        tags: post.frontmatter.tags || [],
        readingTime: post.frontmatter.readingTime || 5,
    }));

    return (
        <>
            <FloatingElements />

            {/* Hero Section */}
            <Section className="min-h-[30vh] flex items-center relative bg-gradient-to-br from-royal-50 via-white to-gold-50 dark:from-royal-900 dark:via-gray-900 dark:to-black">
                <Container>
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-royal-900 via-royal-700 to-gold-600 dark:from-white dark:via-royal-100 dark:to-gold-400 bg-clip-text text-transparent leading-tight">
                            Blog
                        </h1>
                        <p className="text-xl md:text-2xl text-royal-700 dark:text-royal-200 max-w-2xl mx-auto leading-relaxed">
                            Insights on web development, Shopify optimization,
                            and building successful digital experiences
                        </p>
                    </div>
                </Container>
            </Section>

            {/* Blog Posts Grid */}
            <Section className="bg-white dark:bg-gray-900">
                <Container>
                    {posts.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-royal-700 dark:text-royal-300 mb-6">
                                No blog posts yet. Check back soon for articles
                                about web development, Shopify optimization, and
                                more!
                            </p>
                            <div className="max-w-md mx-auto">
                                <NewsletterSignup />
                            </div>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={post.url}
                                    className="group block bg-white dark:bg-royal-900/20 rounded-2xl p-6 border border-royal-200 dark:border-royal-800 hover:border-gold-500 dark:hover:border-gold-500 transition-all hover:shadow-xl relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-300 via-gold-200 to-royal-200 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="flex flex-col gap-2 mb-3">
                                        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">
                                            {new Date(
                                                post.publishedAt
                                            ).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "2-digit",
                                            })}
                                        </span>
                                        <h3 className="text-xl font-bold text-royal-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-royal-700 dark:text-royal-300 text-sm mb-2">
                                            {post.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3 text-xs text-royal-600 dark:text-royal-400 mb-2">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            <span>{post.readingTime} min</span>
                                        </div>
                                        {post.tags && post.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-1">
                                                {post.tags.map(
                                                    (tag: string) => (
                                                        <Badge
                                                            key={tag}
                                                            variant="default"
                                                        >
                                                            {tag}
                                                        </Badge>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center text-xs font-semibold text-gold-600 dark:text-gold-400 mt-2 group-hover:gap-2 transition-all">
                                        Read Article
                                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </Container>
            </Section>

            {posts.length > 0 && (
                <Section className="bg-gradient-to-br from-royal-700 to-royal-900 dark:from-royal-900 dark:to-black text-white">
                    <Container>
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-4">
                                Never Miss an Update
                            </h2>
                            <p className="text-royal-100 mb-6">
                                Get notified when I publish new articles about
                                web development, Shopify, and automation.
                            </p>
                            <NewsletterSignup />
                        </div>
                    </Container>
                </Section>
            )}
        </>
    );
}
