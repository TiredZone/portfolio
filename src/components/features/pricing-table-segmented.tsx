"use client";

import { motion } from "framer-motion";
import {
    Check,
    Star,
    Zap,
    Shield,
    ArrowRight,
    Globe,
    MapPin,
    Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

type Region = "global" | "mena";

interface PricingTier {
    name: string;
    globalPrice: string;
    menaPrice: string;
    description: string;
    scope: string[];
    deliverables: string[];
    timeline?: string;
}

const shopifyTiers: PricingTier[] = [
    {
        name: "Launch",
        globalPrice: "from $3,000",
        menaPrice: "from $1,800–$2,500",
        description:
            "Perfect for new stores or theme migrations with essential features",
        scope: [
            "Theme build or migration",
            "5–7 core pages setup",
            "Up to 50 products",
            "Mobile optimization",
            "Basic SEO configuration",
        ],
        deliverables: [
            "Custom theme configuration",
            "Responsive design",
            "Performance optimization",
            "2 rounds of revisions",
            "14-day post-launch support",
        ],
        timeline: "2–3 weeks",
    },
    {
        name: "Scale",
        globalPrice: "from $5,000",
        menaPrice: "from $3,500–$4,500",
        description:
            "Advanced features, custom sections, and conversion optimization",
        scope: [
            "Custom Liquid sections",
            "CRO optimizations",
            "Performance tuning (Core Web Vitals)",
            "App integrations (2–3)",
            "Advanced cart/checkout features",
        ],
        deliverables: [
            "Custom functionality",
            "A/B testing setup",
            "Analytics integration",
            "3 rounds of revisions",
            "30-day post-launch support",
        ],
        timeline: "3–5 weeks",
    },
    {
        name: "Plus / Enterprise",
        globalPrice: "$8,000–$20,000+",
        menaPrice: "$6,000–$12,000+",
        description:
            "Shopify Plus customizations, checkout extensibility, and enterprise features",
        scope: [
            "Checkout extensibility",
            "Custom Shopify apps",
            "Scripts & automation",
            "Advanced integrations (ERP, PIM, etc.)",
            "Multi-store/market setup",
        ],
        deliverables: [
            "Enterprise-grade architecture",
            "Headless commerce (if needed)",
            "Custom admin tools",
            "Unlimited revisions",
            "60-day post-launch support",
        ],
        timeline: "6–12 weeks",
    },
];

const automationTiers: PricingTier[] = [
    {
        name: "Starter",
        globalPrice: "from $1,500",
        menaPrice: "from $1,500",
        description:
            "Essential automation for small teams and simple workflows",
        scope: [
            "1–2 workflows",
            "Basic authentication",
            "Error logging",
            "Simple data transformations",
            "Email notifications",
        ],
        deliverables: [
            "n8n workflow setup",
            "Documentation",
            "Testing & validation",
            "1 week of adjustments",
        ],
        timeline: "1–2 weeks",
    },
    {
        name: "Growth",
        globalPrice: "from $3,000",
        menaPrice: "from $3,000",
        description:
            "Multi-workflow automation with data syncs and business logic",
        scope: [
            "3–6 workflows",
            "Data synchronization",
            "Custom business logic",
            "Dashboard/reporting",
            "Webhook integrations",
        ],
        deliverables: [
            "Advanced n8n or custom TypeScript",
            "API integrations",
            "Monitoring setup",
            "Full documentation",
            "2 weeks of support",
        ],
        timeline: "2–4 weeks",
    },
    {
        name: "Advanced",
        globalPrice: "from $6,000+",
        menaPrice: "from $6,000+",
        description: "LLM-powered automation, complex ETL, and AI workflows",
        scope: [
            "Complex workflow orchestration",
            "LLM/AI integrations (OpenAI, Claude)",
            "Advanced ETL pipelines",
            "Real-time alerts & monitoring",
            "Quality assurance systems",
        ],
        deliverables: [
            "Custom Mastra AI implementation",
            "Scalable architecture",
            "Performance optimization",
            "Comprehensive testing",
            "30-day support & maintenance",
        ],
        timeline: "4–8 weeks",
    },
];

const webAppTiers: PricingTier[] = [
    {
        name: "MVP",
        globalPrice: "from $6,000–$8,000",
        menaPrice: "from $4,000–$6,000",
        description: "Launch-ready web app with core features and deployment",
        scope: [
            "User authentication",
            "CRUD operations",
            "Single payment integration",
            "Responsive UI",
            "Database design",
        ],
        deliverables: [
            "Next.js or React app",
            "API development",
            "Database setup",
            "Deployment & CI/CD",
            "14-day warranty",
        ],
        timeline: "4–6 weeks",
    },
    {
        name: "Full Build",
        globalPrice: "from $10,000",
        menaPrice: "from $7,000–$9,000",
        description:
            "Production-ready application with advanced features and integrations",
        scope: [
            "Multi-role authentication",
            "Complex business logic",
            "Third-party integrations (3+)",
            "Performance & SEO optimization",
            "Admin dashboard",
        ],
        deliverables: [
            "Full-stack application",
            "Scalable architecture",
            "Security hardening",
            "Analytics & monitoring",
            "30-day warranty & support",
        ],
        timeline: "8–12 weeks",
    },
];

const consultingServices = [
    {
        type: "Hourly Consultation",
        price: "$75/hour",
        description: "Technical guidance and strategic advice",
        note: "Retainer discounts: 20h/mo → $68/hr | 40h/mo → $64/hr",
    },
    {
        type: "Performance Audit",
        price: "$600",
        description:
            "Comprehensive performance analysis with Core Web Vitals optimization plan",
    },
    {
        type: "Checkout UX Audit",
        price: "$500",
        description:
            "Conversion-focused checkout flow review with actionable recommendations",
    },
    {
        type: "Automation Readiness",
        price: "$400",
        description:
            "Assessment of automation opportunities and ROI estimation",
    },
];

export function PricingTableSegmented() {
    const [region, setRegion] = useState<Region>("global");
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    const getPrice = (tier: PricingTier) => {
        return region === "global" ? tier.globalPrice : tier.menaPrice;
    };

    return (
        <div className="w-full">
            {/* Region Toggle */}
            <motion.div
                className="flex flex-col items-center gap-4 mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-2 text-royal-600 dark:text-royal-400 text-sm">
                    <Info className="w-4 h-4" />
                    <span>Select your region for tailored pricing</span>
                </div>

                <div className="inline-flex items-center gap-0 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-full shadow-inner border border-gray-200 dark:border-gray-700">
                    <button
                        onClick={() => setRegion("global")}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                            region === "global"
                                ? "bg-gradient-to-r from-royal-600 to-royal-700 text-white shadow-lg"
                                : "text-gray-600 dark:text-gray-400 hover:text-royal-700 dark:hover:text-royal-300"
                        }`}
                    >
                        <Globe className="w-4 h-4" />
                        Global
                    </button>
                    <button
                        onClick={() => setRegion("mena")}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                            region === "mena"
                                ? "bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-lg"
                                : "text-gray-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400"
                        }`}
                    >
                        <MapPin className="w-4 h-4" />
                        Lebanon & MENA
                    </button>
                </div>

                {region === "mena" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gold-50 dark:bg-gold-900/20 border border-gold-200 dark:border-gold-800 rounded-full text-sm text-gold-700 dark:text-gold-400 font-medium"
                    >
                        <Star className="w-4 h-4" />
                        Regional Partner Pricing – Up to 30% off
                    </motion.div>
                )}
            </motion.div>

            {/* Shopify Development */}
            <section className="mb-16">
                <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-royal-900 dark:text-white mb-3">
                        Shopify Development
                    </h3>
                    <p className="text-royal-600 dark:text-royal-400 max-w-2xl mx-auto">
                        From store launches to enterprise Plus customizations
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {shopifyTiers.map((tier, index) => (
                        <TierCard
                            key={tier.name}
                            tier={tier}
                            price={getPrice(tier)}
                            index={index}
                            hoveredCard={hoveredCard}
                            setHoveredCard={setHoveredCard}
                            gradient="from-green-500 to-emerald-600"
                        />
                    ))}
                </div>
            </section>

            {/* Automation & Integrations */}
            <section className="mb-16">
                <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-royal-900 dark:text-white mb-3">
                        Automation & Integrations
                    </h3>
                    <p className="text-royal-600 dark:text-royal-400 max-w-2xl mx-auto">
                        n8n workflows, API integrations, and AI-powered
                        automation
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {automationTiers.map((tier, index) => (
                        <TierCard
                            key={tier.name}
                            tier={tier}
                            price={getPrice(tier)}
                            index={index}
                            hoveredCard={hoveredCard}
                            setHoveredCard={setHoveredCard}
                            gradient="from-purple-500 to-violet-600"
                        />
                    ))}
                </div>
            </section>

            {/* Custom Web Applications */}
            <section className="mb-16">
                <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-royal-900 dark:text-white mb-3">
                        Custom Web Applications
                    </h3>
                    <p className="text-royal-600 dark:text-royal-400 max-w-2xl mx-auto">
                        Full-stack web apps with modern technologies
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {webAppTiers.map((tier, index) => (
                        <TierCard
                            key={tier.name}
                            tier={tier}
                            price={getPrice(tier)}
                            index={index}
                            hoveredCard={hoveredCard}
                            setHoveredCard={setHoveredCard}
                            gradient="from-blue-500 to-cyan-600"
                        />
                    ))}
                </div>
            </section>

            {/* Technical Consulting */}
            <section className="mb-16">
                <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-royal-900 dark:text-white mb-3">
                        Technical Consulting
                    </h3>
                    <p className="text-royal-600 dark:text-royal-400 max-w-2xl mx-auto">
                        Expert guidance and fixed-price audits
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {consultingServices.map((service, index) => (
                        <motion.div
                            key={service.type}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="text-lg font-bold text-royal-900 dark:text-white mb-2">
                                {service.type}
                            </div>
                            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-3">
                                {service.price}
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                {service.description}
                            </p>
                            {service.note && (
                                <p className="text-xs text-gold-600 dark:text-gold-400 font-medium">
                                    {service.note}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Guarantees & Process */}
            <section className="mt-16 p-8 bg-gradient-to-br from-royal-50 to-gold-50 dark:from-royal-900/20 dark:to-gold-900/10 rounded-2xl border border-royal-200 dark:border-royal-800">
                <div className="max-w-4xl mx-auto">
                    <h4 className="text-xl font-bold text-royal-900 dark:text-white mb-6 text-center">
                        What&apos;s Included in Every Project
                    </h4>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="inline-flex p-3 bg-green-100 dark:bg-green-900/20 rounded-xl mb-3">
                                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <h5 className="font-semibold text-royal-900 dark:text-white mb-2">
                                Milestone Billing
                            </h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                40/40/20 or 50/30/20 payment structure with
                                clear deliverables
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900/20 rounded-xl mb-3">
                                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h5 className="font-semibold text-royal-900 dark:text-white mb-2">
                                Weekly Updates
                            </h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Regular progress reports and milestone reviews
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex p-3 bg-gold-100 dark:bg-gold-900/20 rounded-xl mb-3">
                                <Star className="w-6 h-6 text-gold-600 dark:text-gold-400" />
                            </div>
                            <h5 className="font-semibold text-royal-900 dark:text-white mb-2">
                                Post-Launch Support
                            </h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                14–60 days warranty depending on project tier
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="text-center mt-12">
                <Button
                    size="lg"
                    className="bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-700 hover:to-royal-800 text-white font-semibold group px-8 py-4 text-lg shadow-xl shadow-royal-600/25"
                    asChild
                >
                    <Link href="/contact">
                        Get a Custom Quote
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}

// Tier Card Component
interface TierCardProps {
    tier: PricingTier;
    price: string;
    index: number;
    hoveredCard: string | null;
    setHoveredCard: (id: string | null) => void;
    gradient: string;
}

function TierCard({
    tier,
    price,
    index,
    hoveredCard,
    setHoveredCard,
    gradient,
}: TierCardProps) {
    const cardId = tier.name;
    const isHovered = hoveredCard === cardId;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHoveredCard(cardId)}
            onMouseLeave={() => setHoveredCard(null)}
            className="relative group"
        >
            {/* Glow effect */}
            <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 blur-xl rounded-2xl transition-opacity duration-300`}
                animate={{ opacity: isHovered ? 0.15 : 0 }}
            />

            <div className="relative bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-gold-300 dark:hover:border-gold-600 transition-all duration-300 p-6 h-full flex flex-col">
                {/* Header */}
                <div className="mb-6">
                    <h4 className="text-xl font-bold text-royal-900 dark:text-white mb-2">
                        {tier.name}
                    </h4>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-royal-600 to-gold-600 dark:from-royal-400 dark:to-gold-400 mb-2">
                        {price}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {tier.description}
                    </p>
                    {tier.timeline && (
                        <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-full text-xs text-blue-600 dark:text-blue-400">
                            <Zap className="w-3 h-3" />
                            {tier.timeline}
                        </div>
                    )}
                </div>

                {/* Scope */}
                <div className="mb-4">
                    <div className="text-sm font-semibold text-royal-900 dark:text-white mb-2">
                        Scope:
                    </div>
                    <ul className="space-y-2">
                        {tier.scope.map((item) => (
                            <li
                                key={item}
                                className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                            >
                                <Check className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Deliverables */}
                <div className="flex-grow">
                    <div className="text-sm font-semibold text-royal-900 dark:text-white mb-2">
                        Deliverables:
                    </div>
                    <ul className="space-y-2">
                        {tier.deliverables.map((item) => (
                            <li
                                key={item}
                                className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                            >
                                <Star className="w-4 h-4 text-gold-600 dark:text-gold-400 flex-shrink-0 mt-0.5" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Button
                        variant="outline"
                        className="w-full group/btn"
                        asChild
                    >
                        <Link href="/contact">
                            Discuss {tier.name}
                            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
