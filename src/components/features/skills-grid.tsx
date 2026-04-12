"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Database,
    ShoppingCart,
    Bot,
} from "lucide-react";

const skills = [
    {
        category: "CRO & Revenue Optimization",
        icon: ShoppingCart,
        color: "text-emerald-600 dark:text-emerald-400",
        bgColor: "bg-emerald-100 dark:bg-emerald-900/20",
        borderColor: "border-emerald-200 dark:border-emerald-700",
        glowColor: "shadow-emerald-500/20",
        skills: [
            "Conversion Rate Optimization",
            "A/B Testing & Experimentation",
            "GA4 & GTM",
            "Microsoft Clarity",
            "Core Web Vitals",
            "Heatmap Analysis",
            "Revenue Attribution",
            "Funnel Analysis",
            "Landing Page Optimization",
        ],
    },
    {
        category: "Shopify & E-Commerce",
        icon: ShoppingCart,
        color: "text-green-600 dark:text-green-400",
        bgColor: "bg-green-100 dark:bg-green-900/20",
        borderColor: "border-green-200 dark:border-green-700",
        glowColor: "shadow-green-500/20",
        skills: [
            "Shopify Plus",
            "Liquid Template Engine",
            "Dawn 2.0",
            "Custom Sections & Blocks",
            "Checkout Extensibility",
            "Theme Development",
            "Performance Optimization",
            "Shopify Admin API",
        ],
    },
    {
        category: "Automation & Data Pipelines",
        icon: Bot,
        color: "text-purple-600 dark:text-purple-400",
        bgColor: "bg-purple-100 dark:bg-purple-900/20",
        borderColor: "border-purple-200 dark:border-purple-700",
        glowColor: "shadow-purple-500/20",
        skills: [
            "n8n Visual Workflows",
            "ETL Pipeline Architecture",
            "Lead Processing & Scoring",
            "API Orchestration",
            "Data Validation",
            "AI/LLM Integrations",
            "Production Monitoring",
            "BigQuery",
        ],
    },
    {
        category: "Frontend Development",
        icon: Code2,
        color: "text-royal-600 dark:text-royal-400",
        bgColor: "bg-royal-100 dark:bg-royal-900/20",
        borderColor: "border-royal-200 dark:border-royal-700",
        glowColor: "shadow-royal-500/20",
        skills: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "HTML/CSS",
            "JavaScript",
        ],
    },
    {
        category: "Backend & Infrastructure",
        icon: Database,
        color: "text-gold-600 dark:text-gold-400",
        bgColor: "bg-gold-100 dark:bg-gold-900/20",
        borderColor: "border-gold-200 dark:border-gold-700",
        glowColor: "shadow-gold-500/20",
        skills: [
            "Node.js/Express",
            "Python",
            "REST & GraphQL APIs",
            "Docker",
            "Google Cloud Run",
            "CI/CD",
            "PostgreSQL",
            "Redis",
        ],
    },
];

export function SkillsGrid() {
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
        },
    };

    const skillTagVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
        },
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skillGroup, index) => (
                <motion.div
                    key={skillGroup.category}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: index * 0.1,
                    }}
                    className="group relative"
                >
                    {/* Card content */}
                    <div
                        className={`relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border ${skillGroup.borderColor} shadow-lg hover:shadow-xl transition-all duration-150 hover:-translate-y-1 overflow-hidden h-full flex flex-col`}
                    >
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className={`p-3 rounded-lg ${skillGroup.bgColor}`}
                            >
                                <skillGroup.icon
                                    className={`w-6 h-6 ${skillGroup.color}`}
                                />
                            </div>
                            <h3 className="text-xl font-bold text-royal-900 dark:text-white">
                                {skillGroup.category}
                            </h3>
                        </div>

                        {/* Skills tags with staggered animation - UNIFORM DESIGN */}
                        <motion.div
                            className="flex flex-wrap gap-2 flex-grow"
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.2 + index * 0.1,
                                    },
                                },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {skillGroup.skills.map((skill) => (
                                <motion.span
                                    key={skill}
                                    variants={skillTagVariants}
                                    transition={{
                                        duration: 0.3,
                                        ease: [0.68, -0.55, 0.265, 1.55],
                                    }}
                                    className={`px-4 py-2 text-sm font-medium whitespace-nowrap
                                        bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900
                                        border-2 ${skillGroup.borderColor}
                                        ${skillGroup.color}
                                        rounded-lg
                                        transition-shadow duration-150 cursor-default
                                        inline-flex items-center justify-center
                                        min-h-[36px]
                                    `}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* Animated progress bar */}
                        <motion.div
                            className={`mt-4 h-1 ${skillGroup.bgColor} rounded-full overflow-hidden`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + index * 0.15 }}
                        >
                            <motion.div
                                className={`h-full rounded-full ${
                                    skillGroup.category ===
                                    "Frontend Development"
                                        ? "bg-gradient-to-r from-royal-600 to-royal-400"
                                        : skillGroup.category ===
                                            "Backend & Infrastructure"
                                          ? "bg-gradient-to-r from-gold-600 to-gold-400"
                                          : skillGroup.category ===
                                              "Shopify & E-Commerce"
                                            ? "bg-gradient-to-r from-green-600 to-green-400"
                                            : skillGroup.category ===
                                                "Automation & Data Pipelines"
                                              ? "bg-gradient-to-r from-purple-600 to-purple-400"
                                              : "bg-gradient-to-r from-emerald-600 to-emerald-400"
                                }`}
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1.2,
                                    delay: 0.8 + index * 0.2,
                                    ease: "easeOut",
                                }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
