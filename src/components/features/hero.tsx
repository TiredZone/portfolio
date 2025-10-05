"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Sparkles, Code, Zap } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) * 0.01,
                y: (e.clientY - window.innerHeight / 2) * 0.01,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <motion.section
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ y, opacity, scale }}
        >
            {/* Dynamic background with parallax */}
            <div className="absolute inset-0">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-royal-900 via-royal-800 to-royal-700 dark:from-royal-950 dark:via-royal-900 dark:to-royal-800" />

                {/* Animated mesh gradient */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 via-transparent to-royal-400/20 animate-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-300/10 to-transparent animate-pulse delay-1000" />
                </div>

                {/* Floating orbs with mouse interaction */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/30 rounded-full blur-3xl"
                    animate={{
                        x: mousePosition.x * 20,
                        y: mousePosition.y * 20,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        x: { type: "spring", stiffness: 100, damping: 30 },
                        y: { type: "spring", stiffness: 100, damping: 30 },
                        scale: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-royal-400/20 rounded-full blur-3xl"
                    animate={{
                        x: mousePosition.x * -15,
                        y: mousePosition.y * -15,
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        x: { type: "spring", stiffness: 100, damping: 30 },
                        y: { type: "spring", stiffness: 100, damping: 30 },
                        scale: {
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        },
                    }}
                />
                <motion.div
                    className="absolute top-1/2 right-1/3 w-64 h-64 bg-gold-300/15 rounded-full blur-2xl"
                    animate={{
                        x: mousePosition.x * 10,
                        y: mousePosition.y * 25,
                        rotate: 360,
                    }}
                    transition={{
                        x: { type: "spring", stiffness: 50, damping: 30 },
                        y: { type: "spring", stiffness: 50, damping: 30 },
                        rotate: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        },
                    }}
                />

                {/* Floating particles */}
                <div className="absolute inset-0">
                    {[
                        { left: 10, top: 20, delay: 0 },
                        { left: 85, top: 15, delay: 0.5 },
                        { left: 25, top: 80, delay: 1 },
                        { left: 70, top: 75, delay: 1.5 },
                        { left: 45, top: 45, delay: 2 },
                        { left: 90, top: 60, delay: 0.3 },
                        { left: 15, top: 65, delay: 1.2 },
                        { left: 60, top: 25, delay: 0.8 },
                        { left: 35, top: 35, delay: 1.8 },
                        { left: 80, top: 85, delay: 0.6 },
                        { left: 5, top: 50, delay: 1.4 },
                        { left: 95, top: 40, delay: 0.9 },
                        { left: 50, top: 70, delay: 1.6 },
                        { left: 20, top: 10, delay: 0.4 },
                        { left: 75, top: 30, delay: 1.1 },
                        { left: 40, top: 90, delay: 0.7 },
                        { left: 65, top: 55, delay: 1.3 },
                        { left: 30, top: 25, delay: 1.7 },
                        { left: 85, top: 80, delay: 1.9 },
                        { left: 55, top: 5, delay: 0.2 },
                    ].map((particle, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-gold-400/60 rounded-full"
                            style={{
                                left: `${particle.left}%`,
                                top: `${particle.top}%`,
                            }}
                            animate={{
                                y: [-20, -40, -20],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                            }}
                            transition={{
                                duration: 3 + (i % 3),
                                repeat: Infinity,
                                delay: particle.delay,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                {/* Badge with icon animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-6 py-3 mb-8 text-sm font-medium text-gold-400 bg-gold-400/10 rounded-full border border-gold-400/20 backdrop-blur-sm"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <Sparkles className="w-4 h-4" />
                    </motion.div>
                    <span>
                        Full-Stack Developer • React/Node.js • Shopify Expert
                    </span>
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Zap className="w-4 h-4" />
                    </motion.div>
                </motion.div>

                {/* Main heading with stagger animation */}
                <div className="mb-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-4 leading-none"
                    >
                        <motion.span
                            className="inline-block"
                            whileHover={{ scale: 1.05, color: "#F59E0B" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Bechara
                        </motion.span>
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 leading-none"
                    >
                        El Maalouf
                    </motion.h2>
                </div>

                {/* Subtitle with typewriter effect */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mb-12 max-w-4xl mx-auto"
                >
                    <p className="text-xl md:text-2xl lg:text-3xl text-royal-100 leading-relaxed font-light">
                        Building{" "}
                        <motion.span
                            className="text-gold-400 font-semibold"
                            animate={{ opacity: [1, 0.7, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            high-performance
                        </motion.span>{" "}
                        web applications and ecommerce experiences.
                    </p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-lg md:text-xl text-royal-200 mt-4"
                    >
                        Delivered{" "}
                        <span className="text-gold-400 font-bold">
                            32% revenue increase
                        </span>{" "}
                        for $2M/mo brands through optimization and automation.
                    </motion.p>
                </motion.div>

                {/* CTA Buttons with enhanced animations */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-royal-900 font-semibold group px-8 py-4 text-lg shadow-xl shadow-gold-400/25"
                            asChild
                        >
                            <Link href="/contact">
                                <Calendar className="mr-3 h-5 w-5" />
                                Book a Strategy Call
                                <motion.div
                                    className="ml-3"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                    }}
                                >
                                    <ArrowRight className="h-5 w-5" />
                                </motion.div>
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg group"
                            asChild
                        >
                            <Link href="/work">
                                <Code className="mr-3 h-5 w-5" />
                                View Case Studies
                                <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Subtle scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="cursor-pointer group"
                        onClick={() => {
                            window.scrollTo({
                                top: window.innerHeight,
                                behavior: "smooth",
                            });
                        }}
                    >
                        <motion.div
                            className="w-6 h-10 border border-white/30 rounded-full flex items-start justify-center pt-2 group-hover:border-gold-400/50 transition-colors"
                            whileHover={{ scale: 1.1 }}
                        >
                            <motion.div
                                className="w-1 h-2 bg-white/60 rounded-full group-hover:bg-gold-400 transition-colors"
                                animate={{
                                    y: [0, 16, 0],
                                    opacity: [1, 0.3, 1],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
