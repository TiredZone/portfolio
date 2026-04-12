"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    Lightbulb,
    Target,
    Rocket,
    CheckCircle,
    Shield,
    Clock,
    Users,
    ArrowRight,
} from "lucide-react";

const steps = [
    {
        step: 1,
        title: "Free CRO Audit",
        description:
            "I review your store live, identify the biggest conversion killers, and give you 3 actionable wins. If we're a fit, I'll propose next steps.",
        icon: Lightbulb,
        accent: "#3b82f6",
    },
    {
        step: 2,
        title: "Proposal & Planning",
        description:
            "I provide a detailed proposal with timeline, milestones, and technical approach tailored to your needs.",
        icon: Target,
        accent: "#10b981",
    },
    {
        step: 3,
        title: "Development & Iteration",
        description:
            "Regular updates and check-ins ensure alignment throughout development with room for feedback.",
        icon: Rocket,
        accent: "#8b5cf6",
    },
    {
        step: 4,
        title: "Testing & Launch",
        description:
            "Thorough testing, performance optimization, and a smooth launch with post-launch support.",
        icon: CheckCircle,
        accent: "#f59e0b",
    },
    {
        step: 5,
        title: "Ongoing Support",
        description:
            "Continued maintenance, updates, and optimization to ensure long-term success.",
        icon: Shield,
        accent: "#6366f1",
    },
];

const benefits = [
    {
        icon: Clock,
        title: "Weekly Updates",
        description: "Regular progress reports and milestone reviews",
        color: "text-royal-600 dark:text-royal-400",
    },
    {
        icon: Shield,
        title: "Quality Assurance",
        description: "Comprehensive testing at every stage",
        color: "text-green-600 dark:text-green-400",
    },
    {
        icon: Users,
        title: "Direct Access",
        description: "Direct communication with me, no middlemen",
        color: "text-gold-600 dark:text-gold-400",
    },
];

export function ProcessTimeline() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50/50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900/50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto" ref={sectionRef}>
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-royal-500 dark:text-royal-400 mb-3">
                            The Process
                        </p>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-900 dark:text-white mb-5">
                            How I Work
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            A transparent, milestone-driven approach that keeps
                            you informed and involved throughout your project
                        </p>
                    </motion.div>

                    {/* ── Desktop: Horizontal flow with connected nodes ── */}
                    <div className="hidden lg:block mb-16">
                        {/* Top row: nodes + connectors */}
                        <div className="flex items-center justify-between mb-10 px-4">
                            {steps.map((item, idx) => (
                                <div key={idx} className="contents">
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={
                                            isInView
                                                ? { scale: 1, opacity: 1 }
                                                : {}
                                        }
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: idx * 0.1,
                                        }}
                                        className="relative flex flex-col items-center"
                                    >
                                        {/* Glow */}
                                        <div
                                            className="absolute w-16 h-16 rounded-full blur-xl opacity-25"
                                            style={{
                                                background: item.accent,
                                            }}
                                        />
                                        {/* Circle */}
                                        <div
                                            className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-[3px] border-white dark:border-gray-800"
                                            style={{
                                                background: item.accent,
                                            }}
                                        >
                                            <item.icon className="w-6 h-6 text-white" />
                                        </div>
                                    </motion.div>

                                    {/* Connector arrow */}
                                    {idx < steps.length - 1 && (
                                        <motion.div
                                            initial={{
                                                scaleX: 0,
                                                opacity: 0,
                                            }}
                                            animate={
                                                isInView
                                                    ? {
                                                          scaleX: 1,
                                                          opacity: 1,
                                                      }
                                                    : {}
                                            }
                                            transition={{
                                                duration: 0.4,
                                                delay: idx * 0.1 + 0.15,
                                            }}
                                            className="flex-1 flex items-center justify-center origin-left mx-2"
                                        >
                                            <div className="w-full h-[2px] bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-700 relative">
                                                <ArrowRight className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 dark:text-gray-600" />
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Bottom row: content cards aligned under each node */}
                        <div className="grid grid-cols-5 gap-4">
                            {steps.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={
                                        isInView
                                            ? { opacity: 1, y: 0 }
                                            : {}
                                    }
                                    transition={{
                                        duration: 0.45,
                                        delay: idx * 0.1 + 0.2,
                                    }}
                                    className="group text-center"
                                >
                                    <div className="relative p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                                        {/* Step number */}
                                        <span
                                            className="text-[64px] font-serif font-bold leading-none absolute -top-3 right-3 opacity-[0.06] dark:opacity-[0.08] select-none pointer-events-none"
                                            style={{ color: item.accent }}
                                        >
                                            {item.step}
                                        </span>
                                        <h3 className="text-base font-bold text-royal-900 dark:text-white mb-2 relative z-10">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed relative z-10">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* ── Tablet: 2-column + last centered ── */}
                    <div className="hidden md:grid lg:hidden grid-cols-2 gap-5 mb-16">
                        {steps.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.4,
                                    delay: idx * 0.08,
                                }}
                                className={
                                    idx === steps.length - 1
                                        ? "col-span-2 max-w-sm mx-auto w-full"
                                        : ""
                                }
                            >
                                <StepCard item={item} />
                            </motion.div>
                        ))}
                    </div>

                    {/* ── Mobile: Clean vertical list ── */}
                    <div className="md:hidden space-y-4 mb-16">
                        {steps.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{
                                    duration: 0.35,
                                    delay: idx * 0.07,
                                }}
                            >
                                <StepCard item={item} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Benefits */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5 }}
                        className="grid md:grid-cols-3 gap-5"
                    >
                        {benefits.map((item, idx) => (
                            <div
                                key={idx}
                                className="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 text-center hover:shadow-md hover:border-royal-200 dark:hover:border-royal-700 transition-all duration-300"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-800 mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <item.icon
                                        className={`w-6 h-6 ${item.color}`}
                                    />
                                </div>
                                <h4 className="font-bold text-royal-900 dark:text-white mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function StepCard({ item }: { item: (typeof steps)[number] }) {
    return (
        <div className="group flex items-start gap-4 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            {/* Icon circle */}
            <div
                className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center shadow-sm"
                style={{ background: item.accent }}
            >
                <item.icon className="w-5 h-5 text-white" />
            </div>
            {/* Text */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                    <span
                        className="text-xs font-bold opacity-50"
                        style={{ color: item.accent }}
                    >
                        {String(item.step).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-bold text-royal-900 dark:text-white">
                        {item.title}
                    </h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.description}
                </p>
            </div>
        </div>
    );
}
