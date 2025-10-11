"use client";

import { motion } from "framer-motion";
import { Calendar, Building2, Award, Zap } from "lucide-react";

const experiences = [
    {
        year: "Oct 2024 - Present",
        title: "Automation Engineer",
        company: "Kalyxi (Part-time)",
        description:
            "Built n8n automation workflows for content generation, lead processing, and sales call analysis, reducing manual work by 75%.",
        icon: Zap,
        metrics: ["3 core workflows", "75% work reduction"],
    },
    {
        year: "Nov 2024 - Feb 2025",
        title: "Shopify Developer",
        company: "Sunday Golf",
        description:
            "Led Dawn 2.0 theme migration implementing bundle builder and mega menu while maintaining sub-2.5s load times.",
        icon: Building2,
        metrics: ["<2.5s load time", "18% conversion increase"],
    },
    {
        year: "Sep 2025 - Present",
        title: "Advanced Systems & Operations Developer",
        company: "BAD Marketing (Remote)",
        description:
            "Promoted to build enterprise automation systems: modular ETL platforms, multi-stage lead pipelines, and production-grade monitoring. Lead the 'glue' that powers operations at scale.",
        icon: Award,
        metrics: ["300+ line monolith → modular", "15+ production pipelines"],
    },
    {
        year: "Sep 2022 - Sep 2025",
        title: "CRO Web Developer",
        company: "BAD Marketing (Remote)",
        description:
            "Generated $500K+ revenue through conversion optimization across 8+ DTC brands. ClariGenZ (+52%), BetterBrand (+22%), Genex (9.31% CR), Casa Di Lumo (+386% vs ReConvert).",
        icon: Award,
        metrics: ["$500K+ revenue generated", "8+ brands optimized"],
    },
    {
        year: "Jan 2022 - Dec 2022",
        title: "Lead Web3 Developer",
        company: "Orcania (Remote)",
        description:
            "Architected Celeste-JS SDK powering 5+ DApps, built multi-chain DEX supporting Ethereum/Boba networks, and developed BitNaft NFT analytics platform. Led complete Web3 infrastructure ecosystem.",
        icon: Calendar,
        metrics: [
            "Celeste-JS SDK",
            "Multi-chain DEX",
            "NFT platform",
            "5+ DApps powered",
        ],
    },
];

export function Timeline() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-royal-50 dark:from-gray-900 dark:to-royal-950/20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-serif font-bold text-royal-900 dark:text-white mb-4">
                        Professional Journey
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        From Web3 to Shopify Plus: Building scalable solutions
                        that drive revenue
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-gold-400 to-royal-700" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -50 : 50,
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative flex items-center mb-12 ${
                                index % 2 === 0
                                    ? "md:flex-row"
                                    : "md:flex-row-reverse"
                            }`}
                        >
                            {/* Icon */}
                            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white dark:bg-gray-800 rounded-full border-4 border-gold-400 flex items-center justify-center z-10">
                                <exp.icon className="w-6 h-6 text-royal-700 dark:text-gold-400" />
                            </div>

                            {/* Content */}
                            <div
                                className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                            >
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-royal-100 dark:border-royal-800">
                                    <span className="text-sm font-semibold text-gold-600 dark:text-gold-400">
                                        {exp.year}
                                    </span>
                                    <h3 className="text-xl font-bold text-royal-900 dark:text-white mt-2">
                                        {exp.title}
                                    </h3>
                                    <p className="text-royal-700 dark:text-royal-300 font-medium">
                                        {exp.company}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400 mt-3">
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {exp.metrics.map((metric, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-3 py-1 bg-gold-100 dark:bg-gold-900/20 text-gold-700 dark:text-gold-400 rounded-full"
                                            >
                                                {metric}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
