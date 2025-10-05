import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/common/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { NewsletterSignup } from "@/components/features/newsletter-signup";

// Temporary type definitions until contentlayer import is fixed
interface BlogPost {
    title: string;
    description: string;
    slug: string;
    url: string;
    publishedAt: string;
    tags: string[];
    readingTime: number;
}

// Temporary empty array until contentlayer import is fixed
const allBlogPosts: BlogPost[] = [];

export const metadata: Metadata = {
    title: "Blog – Technical Articles & Insights",
    description:
        "Articles about web development, Shopify optimization, automation, and modern web technologies.",
};

interface PostsByYear {
    [year: number]: typeof allBlogPosts;
}

export default function BlogPage() {
    const posts = allBlogPosts.sort(
        (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
    );

    // Group posts by year
    const postsByYear = posts.reduce((acc: PostsByYear, post) => {
        const year = new Date(post.publishedAt).getFullYear();
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(post);
        return acc;
    }, {} as PostsByYear);

    const years = Object.keys(postsByYear)
        .map(Number)
        .sort((a, b) => b - a);

    return (
        <>
            {/* Hero Section */}
            <Section className="pt-32 md:pt-40">
                <Container>
                    <div className="max-w-3xl">
                        <Badge variant="royal" className="mb-6">
                            Blog
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            Technical Articles & Insights
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Exploring web development, Shopify optimization,
                            automation, and modern technologies.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* Blog Posts by Year */}
            <Section>
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
                        <div className="max-w-4xl mx-auto">
                            {years.map((year) => (
                                <div key={year} className="mb-12">
                                    <h2 className="text-2xl font-bold text-royal-900 dark:text-white mb-6 pb-3 border-b border-royal-200 dark:border-royal-800">
                                        {year}
                                    </h2>
                                    <div className="space-y-8">
                                        {postsByYear[Number(year)].map(
                                            (post) => (
                                                <Link
                                                    key={post.slug}
                                                    href={post.url}
                                                    className="group block bg-white dark:bg-royal-900/20 rounded-lg p-6 border border-royal-200 dark:border-royal-800 hover:border-gold-500 dark:hover:border-gold-500 transition-all hover:shadow-lg"
                                                >
                                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                                        <div className="flex-1">
                                                            <h3 className="text-2xl font-bold text-royal-900 dark:text-white mb-2 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                                                                {post.title}
                                                            </h3>
                                                            <p className="text-royal-700 dark:text-royal-300 mb-4">
                                                                {
                                                                    post.description
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap items-center gap-4 text-sm text-royal-600 dark:text-royal-400">
                                                        <div className="flex items-center gap-1">
                                                            <Calendar className="w-4 h-4" />
                                                            <time
                                                                dateTime={
                                                                    post.publishedAt
                                                                }
                                                            >
                                                                {new Date(
                                                                    post.publishedAt
                                                                ).toLocaleDateString(
                                                                    "en-US",
                                                                    {
                                                                        year: "numeric",
                                                                        month: "long",
                                                                        day: "numeric",
                                                                    }
                                                                )}
                                                            </time>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Clock className="w-4 h-4" />
                                                            <span>
                                                                {
                                                                    post.readingTime
                                                                }{" "}
                                                                min read
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {post.tags &&
                                                        post.tags.length >
                                                            0 && (
                                                            <div className="flex flex-wrap gap-2 mt-4">
                                                                {post.tags.map(
                                                                    (tag) => (
                                                                        <Badge
                                                                            key={
                                                                                tag
                                                                            }
                                                                            variant="default"
                                                                        >
                                                                            {
                                                                                tag
                                                                            }
                                                                        </Badge>
                                                                    )
                                                                )}
                                                            </div>
                                                        )}

                                                    <div className="flex items-center text-sm font-semibold text-gold-600 dark:text-gold-400 mt-4 group-hover:gap-2 transition-all">
                                                        Read Article
                                                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </Link>
                                            )
                                        )}
                                    </div>
                                </div>
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
