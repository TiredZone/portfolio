import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { FloatingElements } from "@/components/common/floating-elements";
import { PricingTableSegmented } from "@/components/features/pricing-table-segmented";
import { ProcessTimeline } from "@/components/features/process-timeline";
import {
    ShoppingCart,
    Code2,
    Zap,
    MessageSquare,
    ArrowRight,
    Check,
    Sparkles,
    Users,
    Globe,
    BarChart3,
    Clock,
    Heart,
    TrendingUp,
    Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = generateMetadata({
    title: "Shopify CRO & Development Services — Transparent Pricing",
    description:
        "CRO audits, Shopify optimization, automation, and consulting. Transparent pricing. Every engagement measured by revenue generated.",
    url: `${siteConfig.url}/services`,
});

const services = [
    {
        title: "CRO & Conversion Optimization",
        icon: TrendingUp,
        serviceParam: "cro_audit",
        description:
            "I audit your Shopify store, identify where you're losing revenue, and implement data-backed changes that increase conversions. Research, implementation, testing, and proof — end to end.",
        features: [
            "Heuristic CRO audit",
            "Heatmap & session recording setup",
            "Analytics & funnel analysis",
            "Prioritized conversion roadmap",
            "Shopify theme implementation",
            "A/B testing (traffic permitting)",
            "Before/after results report",
        ],
        results: "+10\u201330% CVR, 32% revenue increase",
        price: "From $2.5k",
        color: "from-gold-500 to-orange-600",
        bgColor: "bg-gold-50 dark:bg-gold-900/10",
        iconColor: "text-gold-600 dark:text-gold-400",
        whoFor: "Shopify stores doing $50K+/mo that have traffic but aren\u2019t converting.",
    },
    {
        title: "Shopify Development",
        icon: ShoppingCart,
        serviceParam: "shopify",
        description:
            "Professional Shopify development from store launches to Plus enterprise customizations—optimized for performance and conversions.",
        features: [
            "Store launches & theme migrations",
            "Custom theme development & Dawn 2.0 optimization",
            "Checkout extensibility & custom apps (Plus)",
            "Performance optimization (Core Web Vitals)",
            "Custom Liquid sections & functionality",
            "Conversion rate optimization",
        ],
        results: "-30–60% LCP, +10–30% CVR",
        price: "From $1.8k",
        color: "from-green-500 to-emerald-600",
        bgColor: "bg-green-50 dark:bg-green-900/10",
        iconColor: "text-green-600 dark:text-green-400",
        whoFor: "Brands launching on Shopify, migrating themes, or needing custom Liquid development.",
    },
    {
        title: "Custom Web Applications",
        icon: Code2,
        serviceParam: "webapp",
        description:
            "Full-stack web applications from MVP to enterprise—built with modern technologies for performance, scalability, and exceptional UX.",
        features: [
            "MVP builds (auth, CRUD, payments)",
            "React/Next.js frontend development",
            "Node.js backend & APIs",
            "Database design & optimization",
            "Authentication & authorization",
            "Third-party integrations",
            "Performance & SEO optimization",
        ],
        results: "Sub-2s load, 99.9% uptime targets",
        price: "From $4k",
        color: "from-blue-500 to-cyan-600",
        bgColor: "bg-blue-50 dark:bg-blue-900/10",
        iconColor: "text-blue-600 dark:text-blue-400",
        whoFor: "Startups and businesses needing custom web applications from MVP to enterprise.",
    },
    {
        title: "Automation & Integrations",
        icon: Zap,
        serviceParam: "automation",
        description:
            "Intelligent automation from simple workflows to AI-powered systems—eliminate manual work, process data at scale, and connect your tools seamlessly.",
        features: [
            "Simple 1-2 workflow starters",
            "n8n visual workflow automation",
            "Custom TypeScript automation (Mastra AI)",
            "API integrations (ZeroBounce, OpenAI, etc.)",
            "Data processing pipelines",
            "Lead scoring & segmentation systems",
            "LLM/AI integrations for advanced workflows",
            "Monitoring & error handling",
        ],
        results: "75% manual work reduction",
        price: "From $1.5k",
        color: "from-purple-500 to-violet-600",
        bgColor: "bg-purple-50 dark:bg-purple-900/10",
        iconColor: "text-purple-600 dark:text-purple-400",
        whoFor: "Teams drowning in manual data work, lead processing, or disconnected tools.",
    },
    {
        title: "Technical Consulting",
        icon: MessageSquare,
        serviceParam: "consulting",
        description:
            "Strategic technical guidance with hourly consulting or fixed-price audits—make the right decisions for your product, architecture, and technology stack.",
        features: [
            "$100/hr (retainer discounts available)",
            "Fixed mini-audits from $400–$600",
            "Architecture & technology selection",
            "Performance audits & optimization",
            "Code reviews & best practices",
            "Team mentoring & training",
            "Technical due diligence",
            "Scalability planning",
        ],
        results: "Actionable recommendations",
        price: "$100/hr or Fixed",
        color: "from-orange-500 to-red-600",
        bgColor: "bg-orange-50 dark:bg-orange-900/10",
        iconColor: "text-orange-600 dark:text-orange-400",
        whoFor: "Founders or teams needing expert guidance before committing to a build.",
    },
];

const achievements = [
    {
        icon: TrendingUp,
        value: "+10–30%",
        label: "CVR Improvements",
        description: "Measured conversions",
        color: "text-gold-600 dark:text-gold-400",
        bgColor: "bg-gold-100 dark:bg-gold-900/20",
    },
    {
        icon: Zap,
        value: "75%",
        label: "Work Reduction",
        description: "Automation ROI",
        color: "text-blue-600 dark:text-blue-400",
        bgColor: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
        icon: BarChart3,
        value: "$500K+",
        label: "CRO Revenue Generated",
        description: "Across 8+ DTC brands",
        color: "text-green-600 dark:text-green-400",
        bgColor: "bg-green-100 dark:bg-green-900/20",
    },
    {
        icon: Clock,
        value: "90+",
        label: "A/B Tests Executed",
        description: "Hypothesis-driven testing",
        color: "text-purple-600 dark:text-purple-400",
        bgColor: "bg-purple-100 dark:bg-purple-900/20",
    },
];


const whyChooseMe = [
    {
        icon: Zap,
        title: "Performance First",
        description:
            "Every project optimized for speed, SEO, and conversions from day one.",
        color: "text-yellow-600 dark:text-yellow-400",
        bgColor: "bg-yellow-50 dark:bg-yellow-900/10",
    },
    {
        icon: Award,
        title: "ROI Focused",
        description:
            "I measure success by your revenue and business metrics, not just code quality.",
        color: "text-green-600 dark:text-green-400",
        bgColor: "bg-green-50 dark:bg-green-900/10",
    },
    {
        icon: Heart,
        title: "True Partnership",
        description:
            "Clear communication, regular updates, and ongoing support for long-term success.",
        color: "text-red-600 dark:text-red-400",
        bgColor: "bg-red-50 dark:bg-red-900/10",
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen overflow-hidden">
            {/* Enhanced Hero Section */}
            <section className="relative py-20 lg:py-32 bg-gradient-to-br from-royal-900 via-royal-800 to-royal-700 dark:from-royal-950 dark:via-royal-900 dark:to-royal-800">
                <FloatingElements density="light" colors="mixed" />

                {/* Animated background orbs */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/15 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-300/10 rounded-full blur-2xl animate-pulse delay-500" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center space-y-8">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-gold-400 text-sm font-medium">
                                <Sparkles className="w-4 h-4" />
                                CRO & Shopify Development Services
                            </div>

                            {/* Main Heading */}
                            <div className="space-y-6">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
                                    Development That
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500">
                                        Pays for
                                    </span>
                                    Itself
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-royal-100 leading-relaxed max-w-4xl mx-auto">
                                    Shopify CRO, theme development, and automation — priced transparently and measured by
                                    the revenue they generate, not the hours they take.
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
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Services Grid */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-900 dark:text-white mb-6">
                                Services & Solutions
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                Comprehensive development services designed to
                                accelerate your business growth and streamline
                                operations
                            </p>
                        </div>

                        {/* Services Grid */}
                        <div className="grid lg:grid-cols-2 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-gold-400 dark:hover:border-gold-500 transition-all duration-500 hover:shadow-xl cursor-pointer flex flex-col"
                                >
                                    {/* Service Header */}
                                    <div
                                        className={`relative p-8 bg-gradient-to-br ${service.color} text-white`}
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <div
                                                className={`p-3 ${service.bgColor} rounded-2xl`}
                                            >
                                                <service.icon
                                                    className={`w-8 h-8 ${service.iconColor}`}
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold mb-2">
                                                    {service.title}
                                                </h3>
                                                <p className="text-white/90 text-sm">
                                                    {service.description}
                                                </p>
                                                {service.whoFor && (
                                                    <p className="text-sm text-white/80 font-medium mt-2">
                                                        <span className="text-gold-300 font-semibold">Who it&apos;s for:</span>{" "}
                                                        {service.whoFor}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Results & Pricing in Header */}
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                                                <span className="font-medium">
                                                    Typical Results:{" "}
                                                </span>
                                                <span className="font-bold">
                                                    {service.results}
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-white/80 text-xs">
                                                    Starting at
                                                </div>
                                                <div className="text-xl font-bold">
                                                    {service.price}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Service Content */}
                                    <div className="p-8 flex flex-col flex-1">
                                        {/* Features List */}
                                        <div className="mb-6 flex-1">
                                            <h4 className="text-lg font-semibold text-royal-900 dark:text-white mb-4">
                                                What&apos;s Included:
                                            </h4>
                                            <ul className="space-y-3">
                                                {service.features.map(
                                                    (feature, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-start gap-3"
                                                        >
                                                            <div className="p-1 bg-green-100 dark:bg-green-900/20 rounded-full mt-1 flex-shrink-0">
                                                                <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                                                            </div>
                                                            <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                                                {feature}
                                                            </span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>

                                        {/* CTA Button */}
                                        <Button
                                            className="w-full mt-auto bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-700 hover:to-royal-800 text-white group/btn"
                                            asChild
                                        >
                                            <Link href={`/contact?service=${service.serviceParam}&tier=${encodeURIComponent(service.title)}&scrollTo=form`}>
                                                <MessageSquare className="w-4 h-4 mr-2" />
                                                Discuss This Service
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Pricing Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-royal-50/30 dark:from-gray-900 dark:to-royal-950/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-royal-100 dark:bg-royal-900/30 rounded-full text-royal-700 dark:text-royal-300 text-sm font-medium mb-6">
                                <BarChart3 className="w-4 h-4" />
                                Transparent Pricing
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-900 dark:text-white mb-6">
                                Investment & Packages
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                Clear, honest pricing with regional options.
                                Choose the package that fits your needs and
                                budget—no hidden fees, no surprises.
                            </p>
                        </div>

                        <PricingTableSegmented />
                    </div>
                </div>
            </section>

            {/* Process Section - Premium Timeline */}
            <ProcessTimeline />

            {/* Enhanced Why Choose Me Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-900 dark:text-white mb-4">
                                Service Excellence Guarantees
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                What you can expect when working with me on your
                                project
                            </p>
                        </div>

                        {/* Service Benefits */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {whyChooseMe.map((item, index) => (
                                <div
                                    key={index}
                                    className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gold-400 dark:hover:border-gold-500 transition-all duration-300 hover:shadow-lg"
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className={`p-3 ${item.bgColor} rounded-xl flex-shrink-0`}
                                        >
                                            <item.icon
                                                className={`w-6 h-6 ${item.color}`}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-royal-900 dark:text-white mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="py-20 bg-gradient-to-br from-royal-900 via-royal-800 to-royal-700 dark:from-royal-950 dark:via-royal-900 dark:to-royal-800 relative">
                <FloatingElements density="light" colors="gold" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                                Ready to Start Your Project?
                            </h2>
                            <p className="text-xl text-royal-100 max-w-2xl mx-auto">
                                Let&apos;s discuss your goals and how I can help
                                you achieve them. Book a free 30-minute
                                consultation to explore the possibilities.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-royal-900 font-semibold group px-8 py-4 text-lg shadow-xl shadow-gold-400/25"
                                asChild
                            >
                                <Link href="/contact?scrollTo=booking">
                                    <Users className="mr-3 h-5 w-5" />
                                    Book Your Free Audit
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white/40 bg-white/5 text-white hover:bg-white/15 hover:border-white/60 backdrop-blur-md shadow-lg shadow-black/10 px-8 py-4 text-lg group"
                                asChild
                            >
                                <Link href="/work">
                                    <Globe className="mr-2 h-5 w-5" />
                                    View Case Studies
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
