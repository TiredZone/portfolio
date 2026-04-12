"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        id: 1,
        question: "What kind of results can I expect?",
        answer: "Every store is different, but across 3+ years of CRO work for 7-to-9 figure Shopify stores, I've delivered results ranging from 32% revenue increases to 167% conversion rate lifts. I'll give you an honest assessment of what's realistic for your store during our free audit call.",
        category: "Results",
    },
    {
        id: 2,
        question: "What size store do you work with?",
        answer: "I work best with Shopify stores doing $50K+/month in revenue with consistent traffic. At that level, even small conversion improvements translate to meaningful revenue gains. For stores with 10,000+ monthly sessions, I add formal A/B testing to validate changes with statistical confidence.",
        category: "Fit",
    },
    {
        id: 3,
        question: "Do you work with international clients?",
        answer: "Yes. I'm based in Lebanon (GMT+3) but work primarily with US and global clients. I'm fluent in English, French, Arabic, and Spanish. Most communication happens async via Slack/Loom with weekly live check-ins.",
        category: "Availability",
    },
    {
        id: 4,
        question: "What's your process?",
        answer: "Discovery call → CRO audit (heatmaps, analytics, heuristic review) → Prioritized roadmap → Implementation in your Shopify theme → Testing → Results reporting. I don't hand you a PDF and disappear — I find what's broken, build the fix, test it, and prove it worked.",
        category: "Process",
    },
    {
        id: 5,
        question: "Do you also do Shopify development?",
        answer: "Yes. Unlike most CRO consultants who give you recommendations and leave, I'm also a Shopify developer. I implement changes directly in your Liquid theme — no need to hire a separate dev to execute on CRO recommendations.",
        category: "Technical",
    },
    {
        id: 6,
        question: "What tools do you use?",
        answer: "Google Analytics 4, Microsoft Clarity (heatmaps & session recordings), Google Tag Manager, Shopify analytics, and A/B testing platforms appropriate for your traffic level. Most tools are free or low-cost.",
        category: "Technical",
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
        answer: "For sprints: 50% upfront, 50% on completion. For retainers: monthly billing with 30-day cancellation after the initial 3-month commitment. All prices in USD.",
        category: "Payment",
    },
];

export function FAQ() {
    const [openItem, setOpenItem] = useState<number | null>(null);

    const toggleItem = (id: number) => {
        setOpenItem((prev) => (prev === id ? null : id));
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
                    <div
                        className="bg-gradient-to-br from-white to-royal-50/50 dark:from-gray-800 dark:to-gray-900/50 rounded-xl border border-royal-200/50 dark:border-royal-700/50 shadow-sm hover:shadow-md transition-shadow duration-150 overflow-hidden"
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
                                        rotate: openItem === faq.id
                                            ? 180
                                            : 0,
                                        scale: openItem === faq.id
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
                                    backgroundColor: openItem === faq.id
                                        ? "rgb(59 130 246)" // blue-500 for better contrast
                                        : undefined,
                                }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <AnimatePresence mode="wait">
                                    {openItem === faq.id ? (
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
                            {openItem === faq.id && (
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
                    </div>
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
                        href="/contact?scrollTo=booking"
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
