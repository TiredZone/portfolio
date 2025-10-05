"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Marketing Director",
        company: "BAD Marketing",
        rating: 5,
        content:
            "Working with this developer transformed our Shopify store completely. The 32% revenue increase speaks for itself. The attention to detail and technical expertise exceeded our expectations.",
        avatar: "SJ",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        id: 2,
        name: "Mike Chen",
        role: "CTO",
        company: "Kalyxl",
        rating: 5,
        content:
            "The lead automation system they built processes over 50k leads monthly with 99.9% uptime. The integration with our existing tools was seamless and the performance is incredible.",
        avatar: "MC",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Founder",
        company: "Sunday Golf",
        rating: 5,
        content:
            "The theme migration was flawless. They maintained all our customizations while improving performance by 40%. Our customers love the new experience and our sales have increased significantly.",
        avatar: "ER",
        gradient: "from-green-500 to-teal-500",
    },
    {
        id: 4,
        name: "David Thompson",
        role: "E-commerce Manager",
        company: "TechFlow Solutions",
        rating: 5,
        content:
            "Outstanding work on our checkout optimization. The custom extensions reduced cart abandonment by 25% and the implementation was completed ahead of schedule.",
        avatar: "DT",
        gradient: "from-orange-500 to-red-500",
    },
    {
        id: 5,
        name: "Lisa Park",
        role: "Operations Director",
        company: "Growth Labs",
        rating: 5,
        content:
            "The automation workflows they created saved us 85% of manual work. The system is robust, scalable, and has completely transformed how we operate our business.",
        avatar: "LP",
        gradient: "from-indigo-500 to-purple-500",
    },
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handlePrevious = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
        setIsAutoPlaying(false);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    return (
        <div className="relative max-w-4xl mx-auto">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-royal-500/10 to-gold-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute -bottom-20 -right-20 w-32 h-32 bg-gradient-to-r from-gold-500/10 to-royal-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, -20, 0],
                        y: [0, 15, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />
            </div>

            {/* Main testimonial display */}
            <div className="relative bg-gradient-to-br from-white to-royal-50/50 dark:from-gray-800 dark:to-gray-900/50 rounded-2xl p-8 md:p-12 shadow-xl border border-royal-200/50 dark:border-royal-700/50 backdrop-blur-sm">
                <motion.div
                    className="absolute top-8 left-8 text-gold-400/20 dark:text-gold-500/20"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Quote className="w-16 h-16" />
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -30, scale: 0.95 }}
                        transition={{
                            duration: 0.5,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="relative z-10"
                    >
                        {/* Rating stars */}
                        <div className="flex justify-center mb-6">
                            <div className="flex gap-1">
                                {[
                                    ...Array(testimonials[currentIndex].rating),
                                ].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            delay: i * 0.1,
                                            duration: 0.3,
                                            ease: "backOut",
                                        }}
                                    >
                                        <Star className="w-5 h-5 fill-gold-400 text-gold-400" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Testimonial content */}
                        <blockquote className="text-lg md:text-xl text-royal-700 dark:text-royal-200 text-center mb-8 font-medium leading-relaxed">
                            &ldquo;{testimonials[currentIndex].content}&rdquo;
                        </blockquote>

                        {/* Author info */}
                        <div className="flex flex-col items-center">
                            <motion.div
                                className={`w-16 h-16 rounded-full bg-gradient-to-r ${testimonials[currentIndex].gradient} flex items-center justify-center text-white font-bold text-lg mb-4 shadow-lg`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {testimonials[currentIndex].avatar}
                            </motion.div>
                            <h4 className="text-xl font-bold text-royal-900 dark:text-white mb-1">
                                {testimonials[currentIndex].name}
                            </h4>
                            <p className="text-royal-600 dark:text-royal-300 text-center">
                                {testimonials[currentIndex].role}
                                <span className="block text-gold-600 dark:text-gold-400 font-semibold">
                                    {testimonials[currentIndex].company}
                                </span>
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation controls */}
                <div className="flex items-center justify-between mt-8">
                    <motion.button
                        onClick={handlePrevious}
                        className="p-3 rounded-full bg-royal-100 dark:bg-royal-800 text-royal-600 dark:text-royal-300 hover:bg-royal-200 dark:hover:bg-royal-700 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </motion.button>

                    {/* Dots indicator */}
                    <div className="flex gap-2">
                        {testimonials.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? "bg-gold-500 scale-125"
                                        : "bg-royal-300 dark:bg-royal-600 hover:bg-royal-400 dark:hover:bg-royal-500"
                                }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ scale: 0.8 }}
                                animate={{
                                    scale: index === currentIndex ? 1.25 : 1,
                                    backgroundColor:
                                        index === currentIndex
                                            ? "#F59E0B"
                                            : undefined,
                                }}
                                transition={{ duration: 0.2 }}
                            />
                        ))}
                    </div>

                    <motion.button
                        onClick={handleNext}
                        className="p-3 rounded-full bg-royal-100 dark:bg-royal-800 text-royal-600 dark:text-royal-300 hover:bg-royal-200 dark:hover:bg-royal-700 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>

            {/* Auto-play indicator */}
            <div className="flex justify-center mt-6">
                <motion.button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className={`text-sm px-4 py-2 rounded-full transition-colors duration-200 ${
                        isAutoPlaying
                            ? "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isAutoPlaying ? "Auto-playing" : "Paused"}
                </motion.button>
            </div>
        </div>
    );
}
