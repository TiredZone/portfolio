"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Database,
    ShoppingCart,
    Zap,
    GitBranch,
    Cloud,
} from "lucide-react";

const skills = [
    {
        category: "Frontend",
        icon: Code2,
        color: "text-royal-600 dark:text-royal-400",
        bgColor: "bg-royal-100 dark:bg-royal-900/20",
        borderColor: "border-royal-200 dark:border-royal-700",
        glowColor: "shadow-royal-500/20",
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "Redux",
            "Framer Motion",
        ],
    },
    {
        category: "Backend",
        icon: Database,
        color: "text-gold-600 dark:text-gold-400",
        bgColor: "bg-gold-100 dark:bg-gold-900/20",
        borderColor: "border-gold-200 dark:border-gold-700",
        glowColor: "shadow-gold-500/20",
        skills: [
            "Node.js",
            "Express",
            ".NET Core",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "REST APIs",
            "GraphQL",
        ],
    },
    {
        category: "Ecommerce",
        icon: ShoppingCart,
        color: "text-green-600 dark:text-green-400",
        bgColor: "bg-green-100 dark:bg-green-900/20",
        borderColor: "border-green-200 dark:border-green-700",
        glowColor: "shadow-green-500/20",
        skills: [
            "Shopify Plus",
            "Liquid",
            "Checkout Extensibility",
            "Metafields",
            "Dawn Theme 2.0",
            "Custom Apps",
        ],
    },
    {
        category: "DevOps & Cloud",
        icon: Cloud,
        color: "text-blue-600 dark:text-blue-400",
        bgColor: "bg-blue-100 dark:bg-blue-900/20",
        borderColor: "border-blue-200 dark:border-blue-700",
        glowColor: "shadow-blue-500/20",
        skills: [
            "AWS",
            "Docker",
            "GitHub Actions",
            "Vercel",
            "CI/CD",
            "Monitoring",
        ],
    },
    {
        category: "Automation",
        icon: Zap,
        color: "text-purple-600 dark:text-purple-400",
        bgColor: "bg-purple-100 dark:bg-purple-900/20",
        borderColor: "border-purple-200 dark:border-purple-700",
        glowColor: "shadow-purple-500/20",
        skills: [
            "ETL Pipelines",
            "ZeroBounce",
            "SmartLead",
            "GA4 Integration",
            "Email/SMS Automation",
        ],
    },
    {
        category: "Tools & Practices",
        icon: GitBranch,
        color: "text-orange-600 dark:text-orange-400",
        bgColor: "bg-orange-100 dark:bg-orange-900/20",
        borderColor: "border-orange-200 dark:border-orange-700",
        glowColor: "shadow-orange-500/20",
        skills: [
            "Git",
            "Unit Testing",
            "A/B Testing",
            "Performance Optimization",
            "SEO",
            "Monitoring",
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

                        {/* Skills tags with staggered animation */}
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
                                    className="group/tag px-3 py-1 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:border-royal-400 dark:hover:border-royal-500 hover:text-royal-700 dark:hover:text-royal-300 hover:bg-royal-50 dark:hover:bg-royal-900/20 transition-all duration-200 cursor-default inline-flex items-center"
                                    whileHover={{
                                        scale: 1.1,
                                        y: -2,
                                    }}
                                    whileTap={{ scale: 0.95 }}
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
                            transition={{ delay: 0.5 + index * 0.1 }}
                        >
                            <motion.div
                                className={`h-full bg-gradient-to-r ${skillGroup.color.replace("text-", "from-").replace(" dark:text-", " to-")} rounded-full`}
                                initial={{ width: 0 }}
                                whileInView={{ width: "85%" }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1.5,
                                    delay: 0.7 + index * 0.1,
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
