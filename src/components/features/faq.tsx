"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        id: 1,
        question: "What is your typical project timeline?",
        answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex e-commerce platform could take 8-12 weeks. During our initial consultation, I'll provide a detailed timeline based on your specific requirements.",
        category: "Timeline",
    },
    {
        id: 2,
        question: "Do you work with clients internationally?",
        answer: "Yes! I work with clients globally and am comfortable with different time zones. Most communication happens through video calls, email, and project management tools. I've successfully delivered projects for clients in North America, Europe, and Asia.",
        category: "Availability",
    },
    {
        id: 3,
        question: "What technologies do you specialize in?",
        answer: "I specialize in modern web technologies including React, Next.js, Node.js, TypeScript, and various databases. For e-commerce, I'm a Shopify Plus expert with deep knowledge of Liquid, checkout extensions, and custom app development. I also work with cloud platforms like AWS and deployment tools.",
        category: "Technical",
    },
    {
        id: 4,
        question: "How do you handle project communication and updates?",
        answer: "I believe in transparent communication. You'll receive regular progress updates, have access to a project management dashboard, and can schedule weekly check-ins. I use tools like Slack, GitHub, and project boards to keep everything organized and visible.",
        category: "Process",
    },
    {
        id: 5,
        question:
            "What kind of support do you provide after project completion?",
        answer: "I provide 30 days of free bug fixes and support after project delivery. Beyond that, I offer monthly retainer packages for ongoing maintenance, updates, and feature additions. I also provide documentation and training so your team can manage basic updates.",
        category: "Support",
    },
    {
        id: 6,
        question: "Can you help with existing projects or only new ones?",
        answer: "I can definitely help with existing projects! Whether it's bug fixes, performance optimization, adding new features, or modernizing legacy code, I'm experienced in working with existing codebases. I'll first audit your current setup and provide recommendations.",
        category: "Scope",
    },
    {
        id: 7,
        question: "How do you ensure code quality and security?",
        answer: "I follow industry best practices including code reviews, automated testing, security audits, and performance monitoring. All code is written with scalability and maintainability in mind. I also implement proper authentication, data validation, and follow OWASP security guidelines.",
        category: "Quality",
    },
    {
        id: 8,
        question: "What is your payment structure?",
        answer: "For fixed-price projects, I typically require 50% upfront and 50% upon completion. For hourly work, I invoice weekly or bi-weekly. For longer projects, we can arrange milestone-based payments. All payments are secured through professional invoicing systems.",
        category: "Payment",
    },
];

export function FAQ() {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (id: number) => {
        setOpenItems((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
        >
            {faqs.map((faq, index) => (
                <motion.div
                    key={faq.id}
                    variants={itemVariants}
                    transition={{
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: index * 0.05,
                    }}
                    className="group"
                >
                    <motion.div
                        className="bg-gradient-to-br from-white to-royal-50/50 dark:from-gray-800 dark:to-gray-900/50 rounded-xl border border-royal-200/50 dark:border-royal-700/50 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                        whileHover={{
                            y: -2,
                            transition: { duration: 0.2 },
                        }}
                    >
                        {/* Question header */}
                        <motion.button
                            onClick={() => toggleItem(faq.id)}
                            className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-royal-50/50 dark:hover:bg-royal-900/20 transition-colors duration-200"
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-start gap-4 flex-1">
                                {/* Icon */}
                                <motion.div
                                    className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-royal-500 to-royal-600 dark:from-royal-400 dark:to-royal-500 flex items-center justify-center"
                                    animate={{
                                        rotate: openItems.includes(faq.id)
                                            ? 180
                                            : 0,
                                        scale: openItems.includes(faq.id)
                                            ? 1.1
                                            : 1,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <HelpCircle className="w-5 h-5 text-white" />
                                </motion.div>

                                {/* Question content */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs px-2 py-1 bg-gold-100 dark:bg-gold-900/20 text-gold-700 dark:text-gold-400 rounded-full">
                                            {faq.category}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-royal-900 dark:text-white group-hover:text-royal-700 dark:group-hover:text-royal-200 transition-colors duration-200">
                                        {faq.question}
                                    </h3>
                                </div>
                            </div>

                            {/* Toggle icon */}
                            <motion.div
                                className="flex-shrink-0 w-8 h-8 rounded-full bg-royal-100 dark:bg-royal-800 flex items-center justify-center"
                                animate={{
                                    backgroundColor: openItems.includes(faq.id)
                                        ? "rgb(59 130 246)" // blue-500 for better contrast
                                        : undefined,
                                }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <AnimatePresence mode="wait">
                                    {openItems.includes(faq.id) ? (
                                        <motion.div
                                            key="minus"
                                            initial={{
                                                rotate: -90,
                                                opacity: 0,
                                            }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Minus className="w-4 h-4 text-white" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="plus"
                                            initial={{
                                                rotate: -90,
                                                opacity: 0,
                                            }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Plus className="w-4 h-4 text-royal-700 dark:text-royal-200" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.button>

                        {/* Answer content */}
                        <AnimatePresence>
                            {openItems.includes(faq.id) && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: "auto",
                                        opacity: 1,
                                        transition: {
                                            height: {
                                                duration: 0.3,
                                                ease: "easeOut",
                                            },
                                            opacity: {
                                                duration: 0.2,
                                                delay: 0.1,
                                            },
                                        },
                                    }}
                                    exit={{
                                        height: 0,
                                        opacity: 0,
                                        transition: {
                                            height: {
                                                duration: 0.3,
                                                ease: "easeIn",
                                            },
                                            opacity: { duration: 0.2 },
                                        },
                                    }}
                                    className="overflow-hidden"
                                >
                                    <motion.div
                                        initial={{ y: -10 }}
                                        animate={{ y: 0 }}
                                        exit={{ y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="px-6 pb-6"
                                    >
                                        <div className="pl-14">
                                            <motion.div
                                                className="h-px bg-gradient-to-r from-royal-200 to-transparent dark:from-royal-700 mb-4"
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: 0.1,
                                                }}
                                            />
                                            <motion.p
                                                className="text-royal-700 dark:text-royal-300 leading-relaxed"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: 0.2,
                                                }}
                                            >
                                                {faq.answer}
                                            </motion.p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            ))}

            {/* Call to action */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center pt-8"
            >
                <motion.div
                    className="bg-gradient-to-r from-royal-50 to-gold-50 dark:from-royal-900/20 dark:to-gold-900/20 rounded-xl p-6 border border-royal-200/50 dark:border-royal-700/50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <p className="text-royal-700 dark:text-royal-300 mb-4">
                        Still have questions? I&apos;d love to discuss your
                        project in detail.
                    </p>
                    <motion.a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-gold-600 dark:text-gold-400 font-semibold hover:text-gold-700 dark:hover:text-gold-300 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get in touch
                        <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </motion.a>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
