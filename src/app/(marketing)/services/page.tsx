import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import {
    ShoppingCart,
    Code2,
    Zap,
    MessageSquare,
    ArrowRight,
    Check,
    Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
    },
];

const process = [
    {
        step: "1",
        title: "Discovery Call",
        description:
            "We discuss your goals, challenges, and requirements to understand the full scope of your project.",
    },
    {
        step: "2",
        title: "Proposal & Planning",
        description:
            "I provide a detailed proposal with timeline, milestones, and technical approach tailored to your needs.",
    },
    {
        step: "3",
        title: "Development & Iteration",
        description:
            "Regular updates and check-ins ensure we're aligned throughout development with room for feedback.",
    },
    {
        step: "4",
        title: "Testing & Launch",
        description:
            "Thorough testing, performance optimization, and a smooth launch with post-launch support.",
    },
    {
        step: "5",
        title: "Ongoing Support",
        description:
            "Continued maintenance, updates, and optimization to ensure long-term success.",
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-20 bg-gradient-to-br from-royal-900 via-royal-800 to-royal-700 dark:from-royal-950 dark:via-royal-900 dark:to-royal-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-gold-400 bg-gold-400/10 rounded-full border border-gold-400/20">
                            <Sparkles className="w-4 h-4" />
                            Professional Development Services
                        </div>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
                            Services
                        </h1>
                        <p className="text-xl text-royal-100 leading-relaxed">
                            From Shopify Plus optimization to custom web
                            applications and automation, I help businesses build
                            and scale exceptional digital experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                className="p-8 hover:shadow-xl transition-shadow border-royal-100 dark:border-royal-800"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 bg-royal-100 dark:bg-royal-900/20 rounded-lg">
                                        <service.icon className="w-6 h-6 text-royal-700 dark:text-royal-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-royal-900 dark:text-white mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-2"
                                        >
                                            <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center justify-between pt-6 border-t border-royal-100 dark:border-royal-800">
                                    <div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            Typical Results
                                        </div>
                                        <div className="font-bold text-royal-700 dark:text-royal-400">
                                            {service.results}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            Starting at
                                        </div>
                                        <div className="text-2xl font-bold text-royal-900 dark:text-white">
                                            {service.price}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button
                            size="lg"
                            className="bg-royal-700 hover:bg-royal-800 text-white"
                            asChild
                        >
                            <Link href="/contact">
                                Get a Custom Quote
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-gradient-to-br from-royal-50 to-white dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-royal-900 dark:text-white mb-4">
                            How We Work Together
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            A proven process that ensures quality results and
                            clear communication every step of the way.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto relative">
                        {/* Vertical line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-royal-400 to-gold-400 hidden md:block" />

                        <div className="space-y-12">
                            {process.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative flex gap-6"
                                >
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-royal-600 to-royal-700 dark:from-royal-700 dark:to-royal-800 flex items-center justify-center text-white font-bold text-xl border-4 border-white dark:border-gray-900 shadow-lg z-10">
                                        {item.step}
                                    </div>
                                    <div className="flex-1 pb-8">
                                        <h3 className="text-2xl font-bold text-royal-900 dark:text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Me */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-serif font-bold text-royal-900 dark:text-white mb-12 text-center">
                            Why Work With Me
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-5xl font-bold text-royal-700 dark:text-royal-400 mb-4">
                                    ⚡
                                </div>
                                <h3 className="text-xl font-bold text-royal-900 dark:text-white mb-2">
                                    Performance First
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Every project optimized for speed, SEO, and
                                    conversions from day one.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="text-5xl font-bold text-royal-700 dark:text-royal-400 mb-4">
                                    💰
                                </div>
                                <h3 className="text-xl font-bold text-royal-900 dark:text-white mb-2">
                                    ROI Focused
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    I measure success by your revenue and
                                    business metrics, not just code quality.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="text-5xl font-bold text-royal-700 dark:text-royal-400 mb-4">
                                    🤝
                                </div>
                                <h3 className="text-xl font-bold text-royal-900 dark:text-white mb-2">
                                    True Partnership
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Clear communication, regular updates, and
                                    ongoing support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-royal-900 via-royal-800 to-royal-700 dark:from-royal-950 dark:via-royal-900 dark:to-royal-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-serif font-bold text-white mb-6">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl text-royal-100 mb-8">
                            Let&apos;s discuss your goals and how I can help you
                            achieve them. Book a free 30-minute consultation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-gold-400 hover:bg-gold-500 text-royal-900 font-semibold"
                                asChild
                            >
                                <Link href="/contact">
                                    Schedule a Call
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white/10"
                                asChild
                            >
                                <Link href="/work">View Case Studies</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
