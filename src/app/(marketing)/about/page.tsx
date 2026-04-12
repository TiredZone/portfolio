import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { SkillsGrid } from "@/components/features/skills-grid";
import { Timeline } from "@/components/features/timeline";
import { siteConfig } from "@/lib/config";
import { ResumeDownloadButton } from "@/components/common/resume-download-button";
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Github,
    Code,
    Trophy,
    Users,
    Clock,
    ArrowRight,
    Star,
    Globe,
    Award,
    Briefcase,
    BarChart3,
    TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FloatingElements } from "@/components/common/floating-elements";

export const metadata: Metadata = generateMetadata({
    title: "About Bechara El Maalouf — From Web3 to $500K+ in CRO Revenue",
    description:
        "From building decentralized exchanges to generating $500K+ in CRO revenue for Shopify stores. The story of how I became a CRO specialist.",
    url: `${siteConfig.url}/about`,
});

export default function AboutPage() {
    const achievements = [
        {
            icon: Trophy,
            value: "$500K+",
            label: "Revenue Generated",
            description: "Through CRO optimization",
            color: "text-gold-600 dark:text-gold-400",
            bgColor: "bg-gold-100 dark:bg-gold-900/20",
            borderColor: "border-gold-200 dark:border-gold-700",
        },
        {
            icon: Code,
            value: "8+",
            label: "DTC Brands Optimized",
            description: "Across Shopify stores",
            color: "text-royal-600 dark:text-royal-400",
            bgColor: "bg-royal-100 dark:bg-royal-900/20",
            borderColor: "border-royal-200 dark:border-royal-700",
        },
        {
            icon: Users,
            value: "90+",
            label: "A/B Tests Executed",
            description: "Hypothesis-driven testing",
            color: "text-green-600 dark:text-green-400",
            bgColor: "bg-green-100 dark:bg-green-900/20",
            borderColor: "border-green-200 dark:border-green-700",
        },
        {
            icon: Clock,
            value: "3+",
            label: "Years of CRO",
            description: "At a performance marketing agency",
            color: "text-blue-600 dark:text-blue-400",
            bgColor: "bg-blue-100 dark:bg-blue-900/20",
            borderColor: "border-blue-200 dark:border-blue-700",
        },
    ];

    const coreValues = [
        {
            icon: BarChart3,
            title: "Data Over Opinions",
            description:
                "I don't guess. Every change starts with analytics, heatmaps, and user behavior data. If I can't measure it, I don't ship it.",
            color: "text-gold-600 dark:text-gold-400",
            bgColor: "bg-gold-50 dark:bg-gold-900/10",
        },
        {
            icon: Code,
            title: "Implementation, Not Recommendations",
            description:
                "Most CRO consultants hand you a PDF. I'm also a Shopify developer — I implement changes directly in your theme. No translation layer, no lost-in-handoff.",
            color: "text-royal-600 dark:text-royal-400",
            bgColor: "bg-royal-50 dark:bg-royal-900/10",
        },
        {
            icon: TrendingUp,
            title: "Revenue Is the Only Metric",
            description:
                "Conversion rate is a means, not an end. I optimize for revenue. Sometimes that means increasing AOV, not just CVR.",
            color: "text-green-600 dark:text-green-400",
            bgColor: "bg-green-50 dark:bg-green-900/10",
        },
    ];

    return (
        <div className="min-h-screen overflow-hidden">
            {/* Enhanced Hero Section */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-br from-royal-900 via-royal-800 to-royal-700 dark:from-royal-950 dark:via-royal-900 dark:to-royal-800">
                <FloatingElements density="light" colors="mixed" />

                {/* Animated background orbs */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-royal-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
                    <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gold-300/10 rounded-full blur-2xl animate-pulse delay-500" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* Left Column - Text Content */}
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-gold-400 text-sm font-medium">
                                        <Star className="w-4 h-4" />
                                        Shopify CRO Specialist
                                    </div>

                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
                                        From Web3 to
                                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500">
                                            $500K+ in CRO
                                        </span>
                                        Revenue.
                                    </h1>

                                    <p className="text-lg sm:text-xl md:text-2xl text-royal-100 leading-relaxed max-w-2xl">
                                        I spent 3+ years running CRO for 7-to-9
                                        figure Shopify stores at a performance
                                        marketing agency — real A/B tests, real
                                        revenue lifts, real implementation inside
                                        Shopify themes. Here&apos;s how I got here
                                        and where I&apos;m going.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "Shopify & CRO",
                                        "A/B Testing & Analytics",
                                        "Automation & ETL",
                                        "Full-Stack Development",
                                    ].map((tech) => (
                                        <div
                                            key={tech}
                                            className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/15 transition-colors"
                                        >
                                            <span className="text-white font-medium">
                                                {tech}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-royal-900 font-semibold group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-xl shadow-gold-400/25 hover:shadow-gold-400/40 transition-all duration-300"
                                        asChild
                                    >
                                        <Link href="/contact#booking">
                                            <Mail className="mr-3 h-5 w-5" />
                                            Let&apos;s Work Together
                                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                    <ResumeDownloadButton className="border-2 border-white/40 bg-white/5 text-white hover:bg-white/15 hover:border-white/60 backdrop-blur-md shadow-lg shadow-black/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group" />
                                </div>
                            </div>

                            {/* Right Column - Achievement Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {achievements.map((achievement) => (
                                    <div
                                        key={achievement.label}
                                        className="group relative p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div
                                            className={`relative inline-flex p-3 rounded-xl ${achievement.bgColor} mb-4 group-hover:scale-110 transition-transform`}
                                        >
                                            <achievement.icon
                                                className={`w-6 h-6 ${achievement.color}`}
                                            />
                                        </div>
                                        <div className="relative">
                                            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-gold-300 transition-colors">
                                                {achievement.value}
                                            </div>
                                            <div className="text-royal-100 font-medium mb-2 text-sm sm:text-base">
                                                {achievement.label}
                                            </div>
                                            <div className="text-xs sm:text-sm text-royal-200">
                                                {achievement.description}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Story Section */}
            <section className="py-20 bg-white dark:bg-gray-900 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                            {/* Left - Image/Visual */}
                            <div className="lg:col-span-1">
                                <div className="relative">
                                    <div className="aspect-square bg-gradient-to-br from-royal-500 to-gold-500 rounded-2xl p-1">
                                        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-xl flex items-center justify-center">
                                            <div className="text-center space-y-4">
                                                <div className="w-24 h-24 bg-gradient-to-br from-royal-500 to-gold-500 rounded-full mx-auto flex items-center justify-center">
                                                    <Code className="w-12 h-12 text-white" />
                                                </div>
                                                <div className="space-y-2">
                                                    <h3 className="font-bold text-royal-900 dark:text-white">
                                                        Full-Stack Expert
                                                    </h3>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        End-to-end solutions
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating badges */}
                                    <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full text-sm font-semibold shadow-lg shadow-gold-500/25 border-2 border-gold-300">
                                        🏆 Top Performer
                                    </div>
                                    <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-to-r from-royal-500 to-royal-600 text-white rounded-full text-sm font-semibold shadow-lg shadow-royal-500/25 border-2 border-royal-300">
                                        🌍 Global Remote
                                    </div>
                                </div>
                            </div>

                            {/* Right - Content */}
                            <div className="lg:col-span-2 space-y-8">
                                <div className="space-y-6">
                                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-900 dark:text-white">
                                        My Journey
                                    </h2>

                                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                            I started in Web3 — building
                                            decentralized exchanges, SDKs, and
                                            NFT platforms at Orcania. It was
                                            technically fascinating but
                                            disconnected from real business
                                            impact.
                                        </p>

                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                            Then I joined BAD Marketing as a CRO
                                            Web Developer, and everything
                                            changed. For the first time, I could
                                            measure the exact revenue impact of
                                            my code. A layout change I made based
                                            on heatmap data? 77% homepage
                                            conversion lift. A full-site CRO
                                            overhaul for a luxury brand? 167%
                                            conversion rate increase with half
                                            the ad spend. Over 3 years, the CRO
                                            work I led generated over $500K in
                                            measurable revenue across 8+ DTC
                                            brands.
                                        </p>

                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                            Now I combine that CRO methodology
                                            with Shopify development skills most
                                            CRO consultants don&apos;t have. I
                                            don&apos;t hand you a PDF of
                                            recommendations. I find what&apos;s
                                            broken, build the fix in your Liquid
                                            theme, test it, and prove it worked.
                                        </p>

                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                            I also build high-converting funnels
                                            and advertorials at CROEvolution for
                                            7-to-9 figure DTC brands — custom
                                            Shopify templates optimized for cold
                                            traffic that lower customer
                                            acquisition costs. And I&apos;m
                                            building CROHound, a CRO agency
                                            focused exclusively on Shopify
                                            stores.
                                        </p>

                                        <div className="bg-gradient-to-r from-gold-50 to-royal-50 dark:from-gold-900/10 dark:to-royal-900/10 p-6 rounded-xl border border-gold-200 dark:border-gold-700">
                                            <p className="text-gray-800 dark:text-gray-200 font-medium">
                                                <Award className="inline w-5 h-5 text-gold-600 mr-2" />
                                                <span className="text-gold-600 dark:text-gold-400 font-bold">
                                                    32% revenue increase for a
                                                    7-figure Shopify store — in
                                                    15 days
                                                </span>
                                                <br />
                                                <span className="text-royal-600 dark:text-royal-400 font-bold">
                                                    167% conversion rate lift for
                                                    a luxury home brand — with
                                                    half the ad spend
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* What I Ship */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-royal-900 dark:text-white">
                                        What I Ship
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            {
                                                area: "Shopify & CRO",
                                                detail: "Theme builds, A/B tests, checkout optimization — drove 32% revenue increases for 7-figure stores",
                                            },
                                            {
                                                area: "Automation & ETL",
                                                detail: "n8n workflows, data pipelines, lead processing — 50K+ leads/month automated",
                                            },
                                            {
                                                area: "Full-Stack Web",
                                                detail: "React/Next.js apps, Node.js APIs, TypeScript — production-grade systems",
                                            },
                                            {
                                                area: "DevOps & Monitoring",
                                                detail: "Docker, CI/CD, BigQuery dashboards — 75% faster deployments",
                                            },
                                        ].map((item) => (
                                            <div
                                                key={item.area}
                                                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
                                            >
                                                <h4 className="font-bold text-royal-900 dark:text-white mb-1">
                                                    {item.area}
                                                </h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {item.detail}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-royal-50/30 dark:from-gray-800 dark:to-royal-900/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-900 dark:text-white mb-6">
                                Core Values
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                The principles that guide every project and
                                drive exceptional results
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {coreValues.map((value) => (
                                <div
                                    key={value.title}
                                    className="group text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                                >
                                    <div
                                        className={`inline-flex p-4 rounded-2xl ${value.bgColor} mb-6 group-hover:scale-110 transition-transform`}
                                    >
                                        <value.icon
                                            className={`w-8 h-8 ${value.color}`}
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-royal-900 dark:text-white mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Grid */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-900 dark:text-white mb-6">
                            Technical Expertise
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            From foundational web technologies to cutting-edge
                            cloud and AI solutions
                        </p>
                    </div>
                    <SkillsGrid />
                </div>
            </section>

            {/* Professional Journey */}
            <Timeline />

            {/* Education & Languages */}
            <section className="py-20 bg-gradient-to-br from-royal-50 to-gold-50/30 dark:from-gray-900 dark:to-royal-900/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Education */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-serif font-bold text-royal-900 dark:text-white">
                                Education
                            </h2>
                            <div className="group p-8 bg-white dark:bg-gray-800 rounded-2xl border border-royal-100 dark:border-royal-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-royal-100 dark:bg-royal-900/20 rounded-xl">
                                        <Globe className="w-6 h-6 text-royal-600 dark:text-royal-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-royal-900 dark:text-white mb-2">
                                            Notre Dame University-Louaize
                                        </h3>
                                        <p className="text-gold-600 dark:text-gold-400 font-medium mb-2">
                                            B.S. Computer Science
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                                            Graduated 2025
                                        </p>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            Comprehensive computer science
                                            education covering algorithms, data
                                            structures, software engineering,
                                            web technologies, databases, mobile
                                            development, AI/ML fundamentals, and
                                            advanced programming concepts.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-serif font-bold text-royal-900 dark:text-white">
                                Languages
                            </h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        lang: "English",
                                        level: "Fluent",
                                        code: "US",
                                        color: "from-blue-500 to-red-500",
                                    },
                                    {
                                        lang: "French",
                                        level: "Fluent",
                                        code: "FR",
                                        color: "from-blue-600 to-red-600",
                                    },
                                    {
                                        lang: "Arabic",
                                        level: "Native",
                                        code: "LB",
                                        color: "from-red-600 to-green-600",
                                    },
                                    {
                                        lang: "Spanish",
                                        level: "Conversational",
                                        code: "ES",
                                        color: "from-red-500 to-yellow-500",
                                    },
                                ].map((language) => (
                                    <div
                                        key={language.lang}
                                        className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-royal-100 dark:border-royal-800 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${language.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}
                                                >
                                                    {language.code}
                                                </div>
                                                <span className="font-semibold text-royal-900 dark:text-white">
                                                    {language.lang}
                                                </span>
                                            </div>
                                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                                                {language.level}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-20 bg-gradient-to-br from-royal-900 via-royal-800 to-royal-700 dark:from-royal-950 dark:via-royal-900 dark:to-royal-800 relative">
                <FloatingElements density="light" colors="gold" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                                Let&apos;s Find the Revenue You&apos;re
                                Leaving on the Table
                            </h2>
                            <p className="text-xl text-royal-100 max-w-2xl mx-auto">
                                Whether you need CRO optimization, automation
                                pipelines, or a Shopify overhaul — I work with
                                global teams across 4 languages to ship results
                                that move the needle.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-royal-900 font-semibold group px-8 py-4 text-lg shadow-xl shadow-gold-400/25"
                                asChild
                            >
                                <Link href="/contact?service=cro_audit#contact-form">
                                    <Briefcase className="mr-3 h-5 w-5" />
                                    Start a CRO Project
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <ResumeDownloadButton className="border-2 border-white/40 bg-white/5 text-white hover:bg-white/15 hover:border-white/60 backdrop-blur-md shadow-lg shadow-black/10 px-8 py-4 text-lg group" />
                        </div>

                        {/* Contact Info */}
                        <div className="pt-8 border-t border-white/20">
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center text-royal-100 text-sm sm:text-base">
                                <a
                                    href={`mailto:${siteConfig.author.email}`}
                                    className="flex items-center gap-3 hover:text-gold-400 transition-colors group"
                                >
                                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    {siteConfig.author.email}
                                </a>
                                <a
                                    href={`tel:${siteConfig.author.phone}`}
                                    className="flex items-center gap-3 hover:text-gold-400 transition-colors group"
                                >
                                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    {siteConfig.author.phone}
                                </a>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5" />
                                    {siteConfig.author.location}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4 sm:gap-6 justify-center mt-6 sm:mt-8">
                                <a
                                    href={siteConfig.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-gold-400 transition-all duration-300 hover:scale-110"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a
                                    href={siteConfig.social.tiredZone}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-gold-400 transition-all duration-300 hover:scale-110"
                                >
                                    <Github className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
