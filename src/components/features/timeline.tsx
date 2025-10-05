"use client";

import { motion } from "framer-motion";
import { Calendar, Building2, Award, Zap } from "lucide-react";

const experiences = [
    {
        year: "May 2025 - Present",
        title: "AI & Automation Engineer",
        company: "Kalyxl (Part-time)",
        description:
            "Built lead pipeline processing 50k+ monthly leads via ZeroBounce/SmartLead integration, reducing manual work by 85%.",
        icon: Zap,
        metrics: ["50k+ leads/month", "85% work reduction"],
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
        year: "Sep 2022 - Present",
        title: "Full-Stack Developer",
        company: "BAD Marketing (Remote)",
        description:
            "Increased Shopify Plus store revenue by 32% in 2 weeks through Core Web Vitals optimization and custom Liquid sections for $1.4-2M/mo brands.",
        icon: Award,
        metrics: ["32% revenue increase", "5-day attribution system"],
    },
    {
        year: "Feb 2022 - Sep 2022",
        title: "Web3 Developer",
        company: "Orcania (Remote)",
        description:
            "Developed NFT staking platform handling $2M+ assets using React/Next.js and ethers.js, serving 5,000+ users.",
        icon: Calendar,
        metrics: ["$2M+ managed", "5k+ users"],
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
