"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const pricingPlans = [
    {
        name: "Consultation",
        price: "Free",
        period: "30-min call",
        description:
            "Perfect for discussing your project needs and getting expert guidance",
        features: [
            "Project requirements analysis",
            "Technical consultation",
            "Solution architecture advice",
            "Timeline and budget estimation",
            "Technology recommendations",
        ],
        buttonText: "Schedule Call",
        buttonVariant: "outline" as const,
        popular: false,
        icon: Shield,
        gradient: "from-blue-500 to-cyan-500",
        borderColor: "border-blue-200 dark:border-blue-800",
        hoverGlow: "hover:shadow-blue-500/25",
    },
    {
        name: "Development",
        price: "$75",
        period: "per hour",
        description:
            "Flexible hourly development for projects of any size and complexity",
        features: [
            "Full-stack development",
            "Modern web technologies",
            "Responsive design",
            "Performance optimization",
            "Code reviews & testing",
            "Deployment & DevOps",
            "Ongoing support",
        ],
        buttonText: "Get Started",
        buttonVariant: "default" as const,
        popular: true,
        icon: Zap,
        gradient: "from-gold-500 to-orange-500",
        borderColor: "border-gold-300 dark:border-gold-700",
        hoverGlow: "hover:shadow-gold-500/25",
    },
    {
        name: "Project Package",
        price: "Custom",
        period: "fixed price",
        description:
            "Complete project delivery with fixed pricing and guaranteed timeline",
        features: [
            "Detailed project scope",
            "Fixed price guarantee",
            "Timeline commitment",
            "Regular progress updates",
            "Quality assurance",
            "Post-launch support",
            "Documentation included",
        ],
        buttonText: "Discuss Project",
        buttonVariant: "outline" as const,
        popular: false,
        icon: Star,
        gradient: "from-purple-500 to-pink-500",
        borderColor: "border-purple-200 dark:border-purple-800",
        hoverGlow: "hover:shadow-purple-500/25",
    },
];

export function PricingTable() {
    const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

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

    const featureVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
        },
    };

    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {pricingPlans.map((plan, index) => (
                <motion.div
                    key={plan.name}
                    variants={cardVariants}
                    transition={{
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: index * 0.1,
                    }}
                    className="relative group"
                    onMouseEnter={() => setHoveredPlan(index)}
                    onMouseLeave={() => setHoveredPlan(null)}
                >
                    {/* Popular badge */}
                    {plan.popular && (
                        <motion.div
                            className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 0.5 + index * 0.1,
                                duration: 0.3,
                            }}
                        >
                            <div className="bg-gradient-to-r from-gold-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                                Most Popular
                            </div>
                        </motion.div>
                    )}

                    {/* Animated background glow */}
                    <motion.div
                        className={`absolute inset-0 rounded-2xl opacity-0 ${plan.hoverGlow} blur-xl transition-opacity duration-500`}
                        animate={{
                            opacity: hoveredPlan === index ? 0.4 : 0,
                            scale: hoveredPlan === index ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Card content */}
                    <motion.div
                        className={`relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border-2 ${plan.borderColor} shadow-lg transition-all duration-300 h-full flex flex-col ${
                            plan.popular
                                ? "ring-2 ring-gold-500/20 dark:ring-gold-400/20"
                                : ""
                        }`}
                        whileHover={{
                            y: -8,
                            transition: { duration: 0.3 },
                        }}
                    >
                        {/* Floating particles */}
                        <div className="absolute top-4 right-4 opacity-10">
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute w-2 h-2 bg-gradient-to-r ${plan.gradient} rounded-full`}
                                    animate={{
                                        x: [0, 15, 0],
                                        y: [0, -20, 0],
                                        opacity: [0.3, 0.7, 0.3],
                                    }}
                                    transition={{
                                        duration: 3 + i * 0.5,
                                        repeat: Infinity,
                                        delay: i * 0.7,
                                    }}
                                    style={{
                                        top: `${i * 12}px`,
                                        right: `${i * 8}px`,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Header */}
                        <div className="text-center mb-6">
                            <motion.div
                                className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${plan.gradient} text-white mb-4 shadow-lg`}
                                animate={{
                                    rotateY: hoveredPlan === index ? 180 : 0,
                                    scale: hoveredPlan === index ? 1.1 : 1,
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <plan.icon className="w-8 h-8" />
                            </motion.div>

                            <h3 className="text-2xl font-bold text-royal-900 dark:text-white mb-2">
                                {plan.name}
                            </h3>

                            <div className="mb-3">
                                <span className="text-4xl font-bold text-royal-900 dark:text-white">
                                    {plan.price}
                                </span>
                                <span className="text-royal-600 dark:text-royal-400 ml-2">
                                    {plan.period}
                                </span>
                            </div>

                            <p className="text-royal-700 dark:text-royal-300 text-sm">
                                {plan.description}
                            </p>
                        </div>

                        {/* Features */}
                        <motion.div
                            className="flex-grow"
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.3 + index * 0.1,
                                    },
                                },
                            }}
                        >
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature) => (
                                    <motion.li
                                        key={feature}
                                        variants={featureVariants}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeOut",
                                        }}
                                        className="flex items-start gap-3 group/feature"
                                    >
                                        <motion.div
                                            className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5"
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: 360,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Check className="w-3 h-3 text-white" />
                                        </motion.div>
                                        <span className="text-royal-700 dark:text-royal-300 text-sm group-hover/feature:text-royal-900 dark:group-hover/feature:text-white transition-colors duration-200">
                                            {feature}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                        >
                            <Button
                                variant={plan.buttonVariant}
                                size="lg"
                                className={`w-full group/btn ${
                                    plan.popular
                                        ? "bg-gradient-to-r from-gold-500 to-orange-500 hover:from-gold-600 hover:to-orange-600 text-white border-0"
                                        : ""
                                }`}
                                asChild
                            >
                                <Link href="/contact">
                                    {plan.buttonText}
                                    <motion.div
                                        className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200"
                                        whileHover={{ x: 3 }}
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.div>
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    );
}
