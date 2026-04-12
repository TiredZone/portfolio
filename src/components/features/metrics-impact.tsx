"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const metrics = [
    {
        value: 32,
        suffix: "%",
        descriptor: "Revenue increase in 15 days",
        tag: "7-Figure E-Commerce",
    },
    {
        value: 167,
        suffix: "%",
        descriptor: "Conversion rate lift with half the ad spend",
        tag: "Luxury Home Brand",
    },
    {
        value: 77,
        suffix: "%",
        descriptor: "Homepage conversion lift from a single layout change",
        tag: "Pet Products",
    },
    {
        value: 94,
        suffix: "%",
        descriptor: "YoY revenue growth",
        tag: "Home & Lifestyle",
    },
];

function CountUp({
    target,
    duration = 1.8,
    started,
}: {
    target: number;
    duration?: number;
    started: boolean;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!started) return;

        let startTime: number | null = null;
        let rafId: number;

        function animate(timestamp: number) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));

            if (progress < 1) {
                rafId = requestAnimationFrame(animate);
            }
        }

        rafId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafId);
    }, [started, target, duration]);

    return <>{count}</>;
}

export function MetricsImpact() {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, {
        once: true,
        margin: "0px 0px -80px 0px",
    });

    return (
        <section
            ref={sectionRef}
            className="pt-10 md:pt-14 pb-20 md:pb-28 bg-white dark:bg-royal-950/40 relative overflow-hidden"
        >
            {/* Subtle background texture */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-royal-50/50 via-transparent to-transparent dark:from-royal-900/20 dark:via-transparent" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-900 dark:text-white mb-4">
                        Proven Impact
                    </h2>
                    <p className="text-lg text-royal-700 dark:text-royal-300 max-w-2xl mx-auto">
                        Real results from 3+ years of CRO and development work
                    </p>
                </motion.div>

                {/* Metrics grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.tag}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.5,
                                delay: 0.15 * index,
                                ease: "easeOut",
                            }}
                        >
                            <div className="group relative h-full rounded-xl border border-royal-200/60 dark:border-royal-800/60 bg-gradient-to-br from-white to-royal-50/40 dark:from-royal-900/30 dark:to-royal-950/50 p-8 transition-all duration-300 hover:border-gold-400/50 dark:hover:border-gold-600/40 hover:shadow-lg hover:shadow-gold-500/5">
                                {/* Accent line */}
                                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Metric number */}
                                <div className="text-5xl md:text-6xl font-bold tracking-tight mb-3">
                                    <span className="bg-gradient-to-br from-gold-500 via-gold-600 to-royal-700 dark:from-gold-400 dark:via-gold-500 dark:to-royal-400 bg-clip-text text-transparent">
                                        <CountUp
                                            target={metric.value}
                                            started={inView}
                                            duration={1.8 + index * 0.2}
                                        />
                                        {metric.suffix}
                                    </span>
                                </div>

                                {/* Descriptor */}
                                <p className="text-sm md:text-base text-royal-800 dark:text-royal-200 leading-relaxed mb-4">
                                    {metric.descriptor}
                                </p>

                                {/* Tag */}
                                <span className="inline-block text-xs font-medium tracking-wide uppercase text-royal-500 dark:text-royal-400 bg-royal-100/60 dark:bg-royal-800/30 px-3 py-1 rounded-full">
                                    {metric.tag}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer note */}
                <motion.p
                    className="text-center text-xs text-royal-500 dark:text-royal-500 mt-12 max-w-lg mx-auto"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    Results from work at a performance marketing agency. Client
                    names anonymized per confidentiality agreements.
                </motion.p>
            </div>
        </section>
    );
}
