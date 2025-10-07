"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface FloatingElementsProps {
    className?: string;
    density?: "light" | "medium" | "heavy";
    colors?: "royal" | "gold" | "mixed";
}

// Seeded random function for consistent server/client rendering
function seededRandom(seed: number) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

export function FloatingElements({
    className = "",
    density = "medium",
    colors = "mixed",
}: FloatingElementsProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const elementCount = {
        light: 8,
        medium: 12,
        heavy: 20,
    };

    const colorVariants = {
        royal: ["bg-royal-500/10", "bg-royal-400/8", "bg-royal-600/12"],
        gold: ["bg-gold-500/10", "bg-gold-400/8", "bg-gold-600/12"],
        mixed: [
            "bg-royal-500/10",
            "bg-gold-500/8",
            "bg-royal-400/12",
            "bg-gold-400/10",
            "bg-royal-600/8",
            "bg-gold-600/10",
        ],
    };

    const shapes = [
        { size: "w-2 h-2", borderRadius: "rounded-full" },
        { size: "w-3 h-3", borderRadius: "rounded-full" },
        { size: "w-4 h-4", borderRadius: "rounded-full" },
        { size: "w-2 h-8", borderRadius: "rounded-full" },
        { size: "w-6 h-1", borderRadius: "rounded-full" },
        { size: "w-3 h-3", borderRadius: "rounded-sm rotate-45" },
    ];

    // Generate elements with seeded random for consistency
    const elements = Array.from({ length: elementCount[density] }, (_, i) => {
        const seed = i * 1000; // Use index as seed for consistency
        const randomColor =
            colorVariants[colors][i % colorVariants[colors].length];
        const randomShape = shapes[i % shapes.length];
        const randomX = seededRandom(seed + 1) * 100;
        const randomY = seededRandom(seed + 2) * 100;
        const randomDelay = seededRandom(seed + 3) * 20;
        const randomDuration = 15 + seededRandom(seed + 4) * 25;

        return {
            id: i,
            color: randomColor,
            shape: randomShape,
            x: randomX,
            y: randomY,
            delay: randomDelay,
            duration: randomDuration,
        };
    });

    // Don't render animations until mounted to prevent hydration mismatch
    if (!mounted) {
        return (
            <div
                className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
            />
        );
    }

    return (
        <div
            className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
        >
            {elements.map((element) => (
                <motion.div
                    key={element.id}
                    className={`absolute ${element.color} ${element.shape.size} ${element.shape.borderRadius}`}
                    style={{
                        left: `${element.x}%`,
                        top: `${element.y}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 15, -10, 0],
                        opacity: [0.2, 0.8, 0.3, 0.2],
                        scale: [1, 1.3, 0.8, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: element.duration,
                        repeat: Infinity,
                        delay: element.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

export function GradientOrb({
    size = "large",
    position = "top-left",
    colors = "royal-to-gold",
    className = "",
    animated = true,
}: {
    size?: "small" | "medium" | "large" | "xl";
    position?:
        | "top-left"
        | "top-right"
        | "bottom-left"
        | "bottom-right"
        | "center";
    colors?:
        | "royal-to-gold"
        | "gold-to-royal"
        | "royal-to-blue"
        | "gold-to-orange";
    className?: string;
    animated?: boolean;
}) {
    const sizeClasses = {
        small: "w-32 h-32",
        medium: "w-48 h-48",
        large: "w-64 h-64",
        xl: "w-96 h-96",
    };

    const positionClasses = {
        "top-left": "-top-16 -left-16",
        "top-right": "-top-16 -right-16",
        "bottom-left": "-bottom-16 -left-16",
        "bottom-right": "-bottom-16 -right-16",
        center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    };

    const colorClasses = {
        "royal-to-gold": "from-royal-500/20 via-royal-400/10 to-gold-500/20",
        "gold-to-royal": "from-gold-500/20 via-gold-400/10 to-royal-500/20",
        "royal-to-blue": "from-royal-500/20 via-blue-400/10 to-blue-500/20",
        "gold-to-orange": "from-gold-500/20 via-orange-400/10 to-orange-500/20",
    };

    return (
        <motion.div
            className={`absolute ${sizeClasses[size]} ${positionClasses[position]} bg-gradient-radial ${colorClasses[colors]} rounded-full blur-3xl ${className}`}
            animate={
                animated
                    ? {
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                          x: [0, 20, 0],
                          y: [0, -15, 0],
                      }
                    : {}
            }
            transition={
                animated
                    ? {
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                      }
                    : {}
            }
        />
    );
}
