import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { SkillsGrid } from "@/components/features/skills-grid";
import { Timeline } from "@/components/features/timeline";
import { siteConfig } from "@/lib/config";
import { Mail, Phone, MapPin, Download, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = generateMetadata({
    title: "About",
    description:
        "Full-Stack Developer from Lebanon specializing in React, Node.js, and Shopify Plus. Learn about my background, experience, and approach to building exceptional web applications.",
    url: `${siteConfig.url}/about`,
});

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-royal-900 via-royal-800 to-royal-700 dark:from-royal-950 dark:via-royal-900 dark:to-royal-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
                            About Me
                        </h1>
                        <p className="text-xl text-royal-100 leading-relaxed">
                            I&apos;m a Full-Stack Developer based in Lebanon
                            with a passion for building high-performance web
                            applications and ecommerce experiences that drive
                            real business results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="text-3xl font-serif font-bold text-royal-900 dark:text-white mb-6">
                                Who I Am
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                I&apos;m Bechara El Maalouf, a Full-Stack
                                Developer with expertise in React, Node.js,
                                TypeScript, and Shopify Plus. Currently pursuing
                                a B.S. in Computer Science at Notre Dame
                                University-Louaize (graduating 2025), I combine
                                academic knowledge with hands-on experience
                                delivering scalable solutions for brands
                                processing millions in monthly revenue.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                My work has helped ecommerce brands achieve{" "}
                                <strong>32% revenue increases</strong> through
                                performance optimization, built automation
                                systems processing{" "}
                                <strong>50,000+ leads monthly</strong>, and
                                developed NFT platforms managing{" "}
                                <strong>$2M+ in assets</strong>.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                I specialize in turning complex technical
                                challenges into elegant, performant solutions
                                that directly impact the bottom line. Whether
                                it&apos;s optimizing Core Web Vitals, building
                                custom Shopify sections, or creating
                                sophisticated automation pipelines, I focus on
                                delivering measurable results.
                            </p>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-royal-700 dark:text-royal-400 mb-2">
                                    4+
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Years Experience
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-royal-700 dark:text-royal-400 mb-2">
                                    15+
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Projects Delivered
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-royal-700 dark:text-royal-400 mb-2">
                                    $5M+
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Revenue Managed
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-royal-700 dark:text-royal-400 mb-2">
                                    100%
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Remote
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Journey */}
            <Timeline />

            {/* Skills */}
            <SkillsGrid />

            {/* Education & Languages */}
            <section className="py-16 bg-gradient-to-br from-royal-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                        {/* Education */}
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-royal-900 dark:text-white mb-6">
                                Education
                            </h2>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-royal-100 dark:border-royal-800 shadow-lg">
                                <h3 className="text-xl font-bold text-royal-900 dark:text-white">
                                    Notre Dame University-Louaize
                                </h3>
                                <p className="text-gold-600 dark:text-gold-400 font-medium mt-1">
                                    B.S. Computer Science
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">
                                    2019 - 2025
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mt-4">
                                    Comprehensive computer science education
                                    covering algorithms, data structures,
                                    software engineering, and web technologies.
                                </p>
                            </div>
                        </div>

                        {/* Languages */}
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-royal-900 dark:text-white mb-6">
                                Languages
                            </h2>
                            <div className="space-y-4">
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-royal-100 dark:border-royal-800">
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-royal-900 dark:text-white">
                                            English
                                        </span>
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            Fluent
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-royal-100 dark:border-royal-800">
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-royal-900 dark:text-white">
                                            French
                                        </span>
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            Fluent
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-royal-100 dark:border-royal-800">
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-royal-900 dark:text-white">
                                            Arabic
                                        </span>
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            Native
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-royal-100 dark:border-royal-800">
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-royal-900 dark:text-white">
                                            Spanish
                                        </span>
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            Conversational
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-serif font-bold text-royal-900 dark:text-white mb-6">
                            Let&apos;s Work Together
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                            I&apos;m always interested in hearing about new
                            projects and opportunities. Whether you need a
                            Shopify expert, full-stack developer, or automation
                            specialist, let&apos;s talk.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Button
                                size="lg"
                                className="bg-royal-700 hover:bg-royal-800 text-white"
                                asChild
                            >
                                <Link href="/contact">Get in Touch</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-royal-700 text-royal-700 hover:bg-royal-50 dark:border-royal-400 dark:text-royal-400 dark:hover:bg-royal-900/20"
                                asChild
                            >
                                <a
                                    href="/bechara-el-maalouf-resume.pdf"
                                    download
                                >
                                    <Download className="w-4 h-4 mr-2" />
                                    Download Resume
                                </a>
                            </Button>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-600 dark:text-gray-400">
                            <a
                                href={`mailto:${siteConfig.author.email}`}
                                className="flex items-center gap-2 hover:text-royal-700 dark:hover:text-royal-400 transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                {siteConfig.author.email}
                            </a>
                            <a
                                href={`tel:${siteConfig.author.phone}`}
                                className="flex items-center gap-2 hover:text-royal-700 dark:hover:text-royal-400 transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                {siteConfig.author.phone}
                            </a>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {siteConfig.author.location}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 justify-center mt-6">
                            <a
                                href={siteConfig.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-royal-100 dark:bg-royal-900/20 text-royal-700 dark:text-royal-400 hover:bg-royal-200 dark:hover:bg-royal-900/40 transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href={siteConfig.social.tiredZone}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-royal-100 dark:bg-royal-900/20 text-royal-700 dark:text-royal-400 hover:bg-royal-200 dark:hover:bg-royal-900/40 transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
