import type { Metadata } from "next";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/mdx";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { FloatingElements } from "@/components/common/floating-elements";
import {
    ArrowRight,
    Calendar,
    Star,
    Trophy,
    Users,
    Zap,
    Target,
    Globe,
    BarChart3,
    Clock,
    CheckCircle,
    ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Work - Case Studies & Portfolio Projects",
    description:
        "Explore my portfolio of successful projects including Shopify Plus optimizations, web applications, and automation solutions that drove real business results.",
};

export default function WorkPage() {
    const caseStudies = getAllCaseStudies();

    const achievements = [
        {
            icon: Trophy,
            value: "32%",
            label: "Revenue Increase",
            description: "Average boost for clients",
            color: "text-gold-600 dark:text-gold-400",
            bgColor: "bg-gold-100 dark:bg-gold-900/20",
        },
        {
            icon: Users,
            value: "50K+",
            label: "Leads Automated",
            description: "Monthly processing volume",
            color: "text-blue-600 dark:text-blue-400",
            bgColor: "bg-blue-100 dark:bg-blue-900/20",
        },
        {
            icon: BarChart3,
            value: "$5M+",
            label: "Revenue Managed",
            description: "Across client portfolios",
            color: "text-green-600 dark:text-green-400",
            bgColor: "bg-green-100 dark:bg-green-900/20",
        },
        {
            icon: Globe,
            value: "25+",
            label: "Technologies",
            description: "Modern tech stack",
            color: "text-royal-600 dark:text-royal-400",
            bgColor: "bg-royal-100 dark:bg-royal-900/20",
        },
    ];

    const features = [
        {
            icon: Zap,
            title: "Performance Optimization",
            description: "Core Web Vitals improvements and speed enhancements",
        },
        {
            icon: Target,
            title: "Results-Driven Solutions",
            description:
                "Every project focused on measurable business outcomes",
        },
        {
            icon: CheckCircle,
            title: "Full-Stack Expertise",
            description: "End-to-end development from concept to deployment",
        },
    ];

    return (
        <div className="min-h-screen overflow-hidden">
            {/* Enhanced Hero Section */}
            <section className="relative py-20 lg:py-32 bg-gradient-to-br from-royal-900 via-royal-800 to-royal-700 dark:from-royal-950 dark:via-royal-900 dark:to-royal-800">
                <FloatingElements density="light" colors="mixed" />

                {/* Animated background orbs */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/15 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gold-300/10 rounded-full blur-2xl animate-pulse delay-500" />
                </div>

                <Container>
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="text-center space-y-8">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-gold-400 text-sm font-medium">
                                <Star className="w-4 h-4" />
                                Portfolio & Case Studies
                            </div>

                            {/* Main Heading */}
                            <div className="space-y-6">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
                                    Proven
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500">
                                        Results
                                    </span>
                                    & Impact
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-royal-100 leading-relaxed max-w-4xl mx-auto">
                                    Real projects, measurable outcomes. Explore
                                    how I transform complex technical challenges
                                    into solutions that drive significant
                                    business growth and operational efficiency.
                                </p>
                            </div>

                            {/* Achievement Grid */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
                                {achievements.map((achievement) => (
                                    <div
                                        key={achievement.label}
                                        className="group relative p-4 lg:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div
                                            className={`relative inline-flex p-2 lg:p-3 rounded-xl ${achievement.bgColor} mb-3 lg:mb-4 group-hover:scale-110 transition-transform`}
                                        >
                                            <achievement.icon
                                                className={`w-5 h-5 lg:w-6 lg:h-6 ${achievement.color}`}
                                            />
                                        </div>
                                        <div className="relative">
                                            <div className="text-xl lg:text-2xl font-bold text-white mb-1 group-hover:text-gold-300 transition-colors">
                                                {achievement.value}
                                            </div>
                                            <div className="text-royal-100 font-medium mb-1 text-xs lg:text-sm">
                                                {achievement.label}
                                            </div>
                                            <div className="text-xs text-royal-200">
                                                {achievement.description}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Features */}
                            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
                                {features.map((feature) => (
                                    <div
                                        key={feature.title}
                                        className="flex items-center gap-3 text-left"
                                    >
                                        <div className="p-2 bg-white/10 rounded-lg">
                                            <feature.icon className="w-5 h-5 text-gold-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white text-sm">
                                                {feature.title}
                                            </h3>
                                            <p className="text-xs text-royal-200">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Case Studies Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <Container>
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-900 dark:text-white mb-6">
                                Featured Case Studies
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                In-depth looks at how I solve complex business
                                challenges through strategic development and
                                optimization
                            </p>
                        </div>

                        {/* Case Studies Grid */}
                        {caseStudies.length === 0 ? (
                            <div className="text-center py-20">
                                <div className="max-w-md mx-auto">
                                    <div className="p-6 bg-gradient-to-br from-royal-50 to-gold-50 dark:from-royal-900/20 dark:to-gold-900/20 rounded-2xl border border-royal-200 dark:border-royal-700">
                                        <Clock className="w-12 h-12 text-royal-600 dark:text-royal-400 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-royal-900 dark:text-white mb-2">
                                            Case Studies Coming Soon
                                        </h3>
                                        <p className="text-royal-700 dark:text-royal-300">
                                            I&apos;m currently documenting
                                            detailed case studies of my recent
                                            projects. Check back soon for
                                            in-depth analyses!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {caseStudies.map((study, index) => (
                                    <Link
                                        key={study.slug}
                                        href={`/work/${study.slug}`}
                                        className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gold-500 dark:hover:border-gold-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                                    >
                                        {/* Featured Badge */}
                                        {study.frontmatter.featured && (
                                            <div className="absolute top-4 right-4 z-10">
                                                <div className="px-3 py-1 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full text-xs font-semibold shadow-lg">
                                                    ⭐ Featured
                                                </div>
                                            </div>
                                        )}

                                        <div className="relative p-8">
                                            {/* Header */}
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <div className="text-sm font-semibold text-gold-600 dark:text-gold-400">
                                                            {
                                                                study
                                                                    .frontmatter
                                                                    .client
                                                            }
                                                        </div>
                                                        {index === 0 && (
                                                            <div className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded text-xs font-medium">
                                                                Latest
                                                            </div>
                                                        )}
                                                    </div>
                                                    <h2 className="text-2xl lg:text-3xl font-bold text-royal-900 dark:text-white mb-3 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors leading-tight">
                                                        {
                                                            study.frontmatter
                                                                .title
                                                        }
                                                    </h2>
                                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                        {
                                                            study.frontmatter
                                                                .description
                                                        }
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Metrics Grid */}
                                            {study.frontmatter.metrics &&
                                                study.frontmatter.metrics
                                                    .length > 0 && (
                                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                                        {study.frontmatter.metrics
                                                            .slice(0, 4)
                                                            .map(
                                                                (
                                                                    metric,
                                                                    idx
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            idx
                                                                        }
                                                                        className="group/metric p-4 bg-gradient-to-br from-gray-50 to-royal-50/30 dark:from-gray-800 dark:to-royal-900/20 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gold-300 dark:hover:border-gold-600 transition-all"
                                                                    >
                                                                        <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 uppercase tracking-wide">
                                                                            {
                                                                                metric.label
                                                                            }
                                                                        </div>
                                                                        <div className="text-xl lg:text-2xl font-bold text-royal-900 dark:text-white group-hover/metric:text-gold-600 dark:group-hover/metric:text-gold-400 transition-colors">
                                                                            {
                                                                                metric.value
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                )
                                                            )}
                                                    </div>
                                                )}

                                            {/* Meta Info */}
                                            <div className="flex flex-wrap gap-4 mb-6 text-sm">
                                                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>
                                                        {
                                                            study.frontmatter
                                                                .duration
                                                        }
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                    <Users className="w-4 h-4" />
                                                    <span>
                                                        {study.frontmatter.role}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {study.frontmatter.tech &&
                                                    study.frontmatter.tech
                                                        .slice(0, 4)
                                                        .map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className="text-xs px-3 py-1 bg-royal-100 dark:bg-royal-800/50 text-royal-700 dark:text-royal-300 rounded-full font-medium hover:bg-royal-200 dark:hover:bg-royal-700 transition-colors"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                {study.frontmatter.tech &&
                                                    study.frontmatter.tech
                                                        .length > 4 && (
                                                        <span className="text-xs px-3 py-1 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-full">
                                                            +
                                                            {study.frontmatter
                                                                .tech.length -
                                                                4}{" "}
                                                            more
                                                        </span>
                                                    )}
                                            </div>

                                            {/* Enhanced CTA */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center text-sm font-semibold text-gold-600 dark:text-gold-400 group-hover:gap-2 transition-all">
                                                    <span>
                                                        Read Full Case Study
                                                    </span>
                                                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gold-500 transition-colors" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* CTA Section */}
                        <div className="text-center mt-20">
                            <div className="max-w-3xl mx-auto p-8 lg:p-12 bg-gradient-to-br from-royal-50 to-gold-50/30 dark:from-gray-800 dark:to-royal-900/20 rounded-2xl border border-royal-200 dark:border-royal-700">
                                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-royal-900 dark:text-white mb-4">
                                    Ready to Start Your Next Project?
                                </h3>
                                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                                    Let&apos;s discuss how I can help you
                                    achieve similar results for your business.
                                    From concept to deployment, I&apos;ll ensure
                                    your project exceeds expectations.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-700 hover:to-royal-800 text-white font-semibold group px-8 py-4 text-lg shadow-xl shadow-royal-600/25"
                                        asChild
                                    >
                                        <Link href="/contact">
                                            Start a Project
                                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="group shadow-lg hover:shadow-xl px-8 py-4 text-lg"
                                        asChild
                                    >
                                        <Link href="/about">
                                            <Users className="mr-2 h-5 w-5" />
                                            Learn More About Me
                                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
