import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { FloatingElements } from "@/components/common/floating-elements";
import {
    ShoppingCart,
    Code2,
    Zap,
    MessageSquare,
    ArrowRight,
    Check,
    Sparkles,
    Star,
    Trophy,
    Users,
    Target,
    Globe,
    BarChart3,
    Clock,
    CheckCircle,
    Lightbulb,
    Rocket,
    Shield,
    Heart,
    TrendingUp,
    Award,
    Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = generateMetadata({
    title: "Services",
    description:
        "Professional web development services: Shopify Plus development, custom web applications, automation & integrations, and technical consulting. Delivering measurable results for growing businesses.",
    url: `${siteConfig.url}/services`,
});

const services = [
    {
        title: "Shopify Plus Development",
        icon: ShoppingCart,
        description:
            "Expert Shopify Plus development with a focus on performance, conversions, and scalability for high-revenue brands.",
        features: [
            "Custom theme development & Dawn 2.0 optimization",
            "Checkout extensibility & custom apps",
            "Performance optimization (Core Web Vitals)",
            "Custom Liquid sections & functionality",
            "Theme migration & modernization",
            "Conversion rate optimization",
        ],
        results: "32% avg. revenue increase",
        price: "From $5k",
        color: "from-green-500 to-emerald-600",
        bgColor: "bg-green-50 dark:bg-green-900/10",
        iconColor: "text-green-600 dark:text-green-400",
    },
    {
        title: "Custom Web Applications",
        icon: Code2,
        description:
            "Full-stack web applications built with modern technologies for performance, scalability, and exceptional user experience.",
        features: [
            "React/Next.js frontend development",
            "Node.js backend & APIs",
            "Database design & optimization",
            "Authentication & authorization",
            "Third-party integrations",
            "Performance & SEO optimization",
        ],
        results: "Sub-2s load times",
        price: "From $10k",
        color: "from-blue-500 to-cyan-600",
        bgColor: "bg-blue-50 dark:bg-blue-900/10",
        iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
        title: "Automation & Integrations",
        icon: Zap,
        description:
            "Intelligent automation systems that eliminate manual work, process data at scale, and connect your tools seamlessly.",
        features: [
            "ETL pipelines & data processing",
            "Email/SMS automation workflows",
            "API integrations (ZeroBounce, SmartLead, etc.)",
            "Lead scoring & segmentation",
            "Event tracking & analytics setup",
            "Monitoring & alerting systems",
        ],
        results: "85% manual work reduction",
        price: "From $3k",
        color: "from-purple-500 to-violet-600",
        bgColor: "bg-purple-50 dark:bg-purple-900/10",
        iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
        title: "Technical Consulting",
        icon: MessageSquare,
        description:
            "Strategic technical guidance to help you make the right decisions for your product, architecture, and technology stack.",
        features: [
            "Architecture & technology selection",
            "Performance audits & optimization",
            "Code reviews & best practices",
            "Team mentoring & training",
            "Technical due diligence",
            "Scalability planning",
        ],
        results: "Expert guidance",
        price: "Hourly/Project",
        color: "from-orange-500 to-red-600",
        bgColor: "bg-orange-50 dark:bg-orange-900/10",
        iconColor: "text-orange-600 dark:text-orange-400",
    },
];

const achievements = [
    {
        icon: Trophy,
        value: "32%",
        label: "Revenue Boost",
        description: "Average client increase",
        color: "text-gold-600 dark:text-gold-400",
        bgColor: "bg-gold-100 dark:bg-gold-900/20",
    },
    {
        icon: TrendingUp,
        value: "50K+",
        label: "Leads Automated",
        description: "Monthly processing",
        color: "text-blue-600 dark:text-blue-400",
        bgColor: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
        icon: BarChart3,
        value: "$5M+",
        label: "Revenue Managed",
        description: "Client portfolios",
        color: "text-green-600 dark:text-green-400",
        bgColor: "bg-green-100 dark:bg-green-900/20",
    },
    {
        icon: Clock,
        value: "2s",
        label: "Load Times",
        description: "Performance target",
        color: "text-purple-600 dark:text-purple-400",
        bgColor: "bg-purple-100 dark:bg-purple-900/20",
    },
];

const process = [
    {
        step: "1",
        title: "Discovery Call",
        description:
            "We discuss your goals, challenges, and requirements to understand the full scope of your project.",
        icon: Lightbulb,
        color: "from-blue-500 to-cyan-500",
    },
    {
        step: "2",
        title: "Proposal & Planning",
        description:
            "I provide a detailed proposal with timeline, milestones, and technical approach tailored to your needs.",
        icon: Target,
        color: "from-green-500 to-emerald-500",
    },
    {
        step: "3",
        title: "Development & Iteration",
        description:
            "Regular updates and check-ins ensure we're aligned throughout development with room for feedback.",
        icon: Rocket,
        color: "from-purple-500 to-violet-500",
    },
    {
        step: "4",
        title: "Testing & Launch",
        description:
            "Thorough testing, performance optimization, and a smooth launch with post-launch support.",
        icon: CheckCircle,
        color: "from-orange-500 to-red-500",
    },
    {
        step: "5",
        title: "Ongoing Support",
        description:
            "Continued maintenance, updates, and optimization to ensure long-term success.",
        icon: Shield,
        color: "from-royal-500 to-gold-500",
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
                                Professional Development Services
                            </div>

                            {/* Main Heading */}
                            <div className="space-y-6">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
                                    Expert
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500">
                                        Development
                                    </span>
                                    Services
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-royal-100 leading-relaxed max-w-4xl mx-auto">
                                    From Shopify Plus optimization to custom web
                                    applications and intelligent automation — I
                                    deliver solutions that drive measurable
                                    business growth and operational excellence.
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
                                    className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-gold-400 dark:hover:border-gold-500 transition-all duration-500 hover:shadow-xl cursor-pointer"
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
                                    <div className="p-8">
                                        {/* Features List */}
                                        <div className="mb-6">
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
                                            className="w-full bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-700 hover:to-royal-800 text-white group/btn"
                                            asChild
                                        >
                                            <Link href="/contact">
                                                <MessageSquare className="w-4 h-4 mr-2" />
                                                Discuss This Service
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="text-center mt-16">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-700 hover:to-royal-800 text-white font-semibold group px-8 py-4 text-lg shadow-xl shadow-royal-600/25"
                                asChild
                            >
                                <Link href="/contact">
                                    <Briefcase className="mr-3 h-5 w-5" />
                                    Get a Custom Quote
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section - Premium Timeline */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-royal-50/30 dark:from-gray-800 dark:to-royal-900/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-900 dark:text-white mb-6">
                                Our Collaborative Process
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                A transparent, milestone-driven approach that
                                keeps you informed and involved throughout your
                                project
                            </p>
                        </div>

                        {/* Premium Vertical Timeline */}
                        <div className="relative flex flex-col items-center gap-0 px-2">
                            {/* Timeline vertical line */}
                            <div
                                className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-royal-300 via-gold-300 to-royal-300 opacity-40 z-0"
                                style={{ transform: "translateX(-50%)" }}
                            />
                            {process.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="relative z-10 flex flex-col items-center text-center w-full max-w-md mb-12 last:mb-0"
                                >
                                    {/* Step Circle */}
                                    <div
                                        className={`flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${item.color} shadow-xl border-4 border-white dark:border-gray-900 mb-4 relative`}
                                    >
                                        <span className="absolute -top-2 -right-2 bg-white dark:bg-gray-900 text-royal-700 dark:text-gold-400 text-xs font-bold px-2 py-0.5 rounded-full border border-gold-300 shadow">
                                            {item.step}
                                        </span>
                                        <item.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-royal-900 dark:text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm max-w-xs mb-2">
                                        {item.description}
                                    </p>
                                    {/* Connector Line */}
                                    {idx < process.length - 1 && (
                                        <div className="flex flex-col items-center">
                                            <div className="w-1 h-12 bg-gradient-to-b from-gold-300 to-royal-300 opacity-70" />
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="my-2"
                                            >
                                                <path
                                                    d="M12 0v20"
                                                    stroke="#FFD700"
                                                    strokeWidth="2"
                                                    strokeDasharray="4 4"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="22"
                                                    r="2"
                                                    fill="#FFD700"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Process Benefits */}
                        <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
                            <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                                <Clock className="w-8 h-8 text-royal-600 dark:text-royal-400 mx-auto mb-3" />
                                <h4 className="font-bold text-royal-900 dark:text-white mb-2">
                                    Weekly Updates
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Regular progress reports and milestone
                                    reviews
                                </p>
                            </div>
                            <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                                <Shield className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                                <h4 className="font-bold text-royal-900 dark:text-white mb-2">
                                    Quality Assurance
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Comprehensive testing at every stage
                                </p>
                            </div>
                            <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                                <Users className="w-8 h-8 text-gold-600 dark:text-gold-400 mx-auto mb-3" />
                                <h4 className="font-bold text-royal-900 dark:text-white mb-2">
                                    Direct Access
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Direct communication with me, no middlemen
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                                <Link href="/contact">
                                    <Users className="mr-3 h-5 w-5" />
                                    Schedule a Call
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg group"
                                asChild
                            >
                                <Link href="/work">
                                    <Globe className="mr-2 h-5 w-5" />
                                    View Case Studies
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
