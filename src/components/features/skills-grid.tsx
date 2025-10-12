"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Database,
    ShoppingCart,
    GitBranch,
    Cloud,
    Bot,
    Hexagon,
} from "lucide-react";

const skills = [
    {
        category: "CRO & Analytics",
        icon: ShoppingCart,
        color: "text-emerald-600 dark:text-emerald-400",
        bgColor: "bg-emerald-100 dark:bg-emerald-900/20",
        borderColor: "border-emerald-200 dark:border-emerald-700",
        glowColor: "shadow-emerald-500/20",
        skills: [
            "Conversion Rate Optimization",
            "A/B Testing & Experimentation",
            "GA4 & GTM Implementation",
            "Microsoft Clarity",
            "Core Web Vitals Optimization",
            "Funnel Analysis",
            "Revenue Attribution",
            "User Behavior Analytics",
            "E-commerce Performance",
        ],
    },
    {
        category: "Enterprise Automation",
        icon: Bot,
        color: "text-purple-600 dark:text-purple-400",
        bgColor: "bg-purple-100 dark:bg-purple-900/20",
        borderColor: "border-purple-200 dark:border-purple-700",
        glowColor: "shadow-purple-500/20",
        skills: [
            "n8n Visual Workflows",
            "ETL Pipeline Architecture",
            "Multi-stage Lead Processing",
            "API Orchestration",
            "Data Validation & Quality",
            "Error Recovery Systems",
            "Production Monitoring",
            "Process Optimization",
        ],
    },
    {
        category: "Ecommerce Platforms",
        icon: ShoppingCart,
        color: "text-green-600 dark:text-green-400",
        bgColor: "bg-green-100 dark:bg-green-900/20",
        borderColor: "border-green-200 dark:border-green-700",
        glowColor: "shadow-green-500/20",
        skills: [
            "Shopify Plus",
            "Liquid Template Engine",
            "Shopify Admin API",
            "Custom Sections & Blocks",
            "Checkout Extensibility",
            "Theme Development",
            "Performance Optimization",
            "Revenue Tracking",
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
            "JavaScript",
            "Angular",
            "HTML/CSS",
            "Tailwind CSS",
            "Framer Motion",
            "Redux",
        ],
    },
    {
        category: "Backend & APIs",
        icon: Database,
        color: "text-gold-600 dark:text-gold-400",
        bgColor: "bg-gold-100 dark:bg-gold-900/20",
        borderColor: "border-gold-200 dark:border-gold-700",
        glowColor: "shadow-gold-500/20",
        skills: [
            "Node.js/Express",
            ".NET Core/C#",
            "Python",
            "REST APIs",
            "GraphQL",
            "RabbitMQ",
            "Redis Caching",
            "Microservices",
            "WebSocket APIs",
        ],
    },
    {
        category: "Data & Analytics",
        icon: Database,
        color: "text-blue-600 dark:text-blue-400",
        bgColor: "bg-blue-100 dark:bg-blue-900/20",
        borderColor: "border-blue-200 dark:border-blue-700",
        glowColor: "shadow-blue-500/20",
        skills: [
            "BigQuery",
            "Google Sheets API",
            "MongoDB",
            "MS SQL Server",
            "PostgreSQL",
            "Data Transformation",
            "ETL Pipelines",
            "Business Intelligence",
        ],
    },
    {
        category: "DevOps & Cloud",
        icon: Cloud,
        color: "text-cyan-600 dark:text-cyan-400",
        bgColor: "bg-cyan-100 dark:bg-cyan-900/20",
        borderColor: "border-cyan-200 dark:border-cyan-700",
        glowColor: "shadow-cyan-500/20",
        skills: [
            "Docker & Containerization",
            "Google Cloud Run",
            "GitHub Actions CI/CD",
            "Kubernetes",
            "Production Monitoring",
            "Error Tracking",
            "Automated Deployments",
            "Infrastructure as Code",
        ],
    },
    {
        category: "Blockchain & Web3",
        icon: Hexagon,
        color: "text-indigo-600 dark:text-indigo-400",
        bgColor: "bg-indigo-100 dark:bg-indigo-900/20",
        borderColor: "border-indigo-200 dark:border-indigo-700",
        glowColor: "shadow-indigo-500/20",
        skills: [
            "Web3.js SDK Development",
            "Multi-chain Architecture",
            "Smart Contract Integration",
            "Wallet Connect Integration",
            "Decentralized Exchange (DEX)",
            "NFT Platform Development",
            "WalletConnect Protocol",
            "MetaMask Integration",
            "Redux Web3 State Management",
            "Ethereum & Layer 2 Networks",
        ],
    },
    {
        category: "Business Integrations",
        icon: GitBranch,
        color: "text-orange-600 dark:text-orange-400",
        bgColor: "bg-orange-100 dark:bg-orange-900/20",
        borderColor: "border-orange-200 dark:border-orange-700",
        glowColor: "shadow-orange-500/20",
        skills: [
            "Klaviyo API",
            "ZeroBounce & MillionVerifier",
            "Smartlead Integration",
            "ClickUp API",
            "Slack API",
            "Fathom Analytics",
            "SerpAPI",
            "OpenAI API",
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
                    {/* Animated background glow */}
                    <motion.div
                        className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${skillGroup.glowColor} blur-xl`}
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Card content */}
                    <motion.div
                        className={`relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border ${skillGroup.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col`}
                        whileHover={{
                            y: -8,
                            rotateY: 2,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Floating particles */}
                        <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute w-2 h-2 ${skillGroup.bgColor} rounded-full`}
                                    animate={{
                                        x: [0, 10, 0],
                                        y: [0, -15, 0],
                                        opacity: [0.3, 0.7, 0.3],
                                    }}
                                    transition={{
                                        duration: 3 + i,
                                        repeat: Infinity,
                                        delay: i * 0.5,
                                    }}
                                    style={{
                                        top: `${20 + i * 15}%`,
                                        right: `${15 + i * 10}%`,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Header with animated icon */}
                        <div className="flex items-center gap-3 mb-6">
                            <motion.div
                                className={`p-3 rounded-lg ${skillGroup.bgColor} group-hover:scale-110 transition-transform duration-300`}
                                animate={{
                                    y: [0, -10, 0],
                                    rotateY: [0, 5, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                whileHover={{
                                    rotateZ: 5,
                                }}
                            >
                                <skillGroup.icon
                                    className={`w-6 h-6 ${skillGroup.color}`}
                                />
                            </motion.div>
                            <motion.h3
                                className="text-xl font-bold text-royal-900 dark:text-white group-hover:text-royal-700 dark:group-hover:text-royal-300 transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                            >
                                {skillGroup.category}
                            </motion.h3>
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
                                    className={`group/tag px-4 py-2 text-sm font-medium whitespace-nowrap
                                        bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900
                                        border-2 ${skillGroup.borderColor}
                                        ${skillGroup.color}
                                        rounded-lg
                                        hover:shadow-lg hover:shadow-${skillGroup.glowColor}
                                        hover:scale-105 hover:-translate-y-1
                                        transition-all duration-300 cursor-default
                                        inline-flex items-center justify-center
                                        min-h-[36px]
                                    `}
                                    whileHover={{
                                        scale: 1.08,
                                        y: -3,
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="relative z-10">
                                        {skill}
                                    </span>
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
                                            "Backend & APIs"
                                          ? "bg-gradient-to-r from-gold-600 to-gold-400"
                                          : skillGroup.category ===
                                              "Mobile Development"
                                            ? "bg-gradient-to-r from-cyan-600 to-cyan-400"
                                            : skillGroup.category ===
                                                "Ecommerce & CMS"
                                              ? "bg-gradient-to-r from-green-600 to-green-400"
                                              : skillGroup.category ===
                                                  "DevOps & Cloud"
                                                ? "bg-gradient-to-r from-blue-600 to-blue-400"
                                                : skillGroup.category ===
                                                    "AI & Automation"
                                                  ? "bg-gradient-to-r from-purple-600 to-purple-400"
                                                  : skillGroup.category ===
                                                      "Blockchain & Web3"
                                                    ? "bg-gradient-to-r from-indigo-600 to-indigo-400"
                                                    : "bg-gradient-to-r from-orange-600 to-orange-400"
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
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}
