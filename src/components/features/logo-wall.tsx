"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const clients = [
    { name: "BAD Marketing", logo: "/images/clients/bad-marketing.png" },
    { name: "Kalyxi", logo: "/images/clients/kalyxi.png" },
    { name: "Casa Di Lumo", logo: "/images/clients/casa-di-lumo.png" },
    { name: "ClariGenZ", logo: "/images/clients/clarigenz.png" },
    { name: "Orcania", logo: "/images/clients/orcania.png" },
    { name: "BitNaft", logo: "/images/clients/bitnaft.png" },
    { name: "Sunday Golf", logo: "/images/clients/sunday-golf.png" },
    { name: "BetterBrand", logo: "/images/clients/betterbrand.png" },
    { name: "Genex Formulas", logo: "/images/clients/genex-formulas.png" },
    { name: "Lane 201", logo: "/images/clients/lane-201.png" },
];

// Duplicate array for seamless infinite scroll
const duplicatedClients = [...clients, ...clients];

// LogoWall component - Infinite scrolling marquee of client logos
export function LogoWall() {
    const prefersReducedMotion = useReducedMotion();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Faster on mobile (20s), normal on desktop (40s)
    const animationDuration = isMobile ? 20 : 40;

    return (
        <div className="w-full relative overflow-hidden py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="container mx-auto px-4">
                {/* Section Header - Clean & Bold */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-900 dark:text-white mb-4">
                        Trusted by{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-600 to-gold-600 dark:from-royal-400 dark:to-gold-400">
                            Growing Brands
                        </span>
                    </h2>
                    <p className="text-royal-600 dark:text-royal-400 text-base md:text-lg max-w-2xl mx-auto">
                        Partnering with innovative companies across e-commerce,
                        Web3, and automation
                    </p>
                </motion.div>
            </div>

            {/* Infinite Marquee - No container constraints */}
            <div className="relative">
                {/* Fade overlays - stronger */}
                <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-gray-50 dark:from-gray-900 via-gray-50/80 dark:via-gray-900/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-gray-50 dark:from-gray-900 via-gray-50/80 dark:via-gray-900/80 to-transparent z-10 pointer-events-none" />

                {/* Scrolling logos - responsive speed */}
                <motion.div
                    className="flex items-center py-12"
                    style={{ gap: "clamp(48px, 6vw, 64px)" }}
                    animate={
                        prefersReducedMotion
                            ? {}
                            : {
                                  x: [0, "-50%"],
                              }
                    }
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: animationDuration,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedClients.map((client, index) => (
                        <div
                            key={`${client.name}-${index}`}
                            className="flex-shrink-0 flex items-center justify-center px-4"
                            style={{
                                width: "200px",
                                height: "100px",
                                minWidth: "200px",
                            }}
                        >
                            <Image
                                src={client.logo}
                                alt={`${client.name} logo`}
                                width={200}
                                height={100}
                                className="object-contain w-full h-full opacity-80 transition-opacity duration-300"
                                style={{
                                    filter: "none",
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                }}
                                priority={index < 10}
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = "none";
                                    if (target.parentElement) {
                                        const textFallback =
                                            document.createElement("div");
                                        textFallback.className =
                                            "text-royal-900 dark:text-white font-bold text-lg text-center w-full";
                                        textFallback.textContent = client.name;
                                        target.parentElement.appendChild(
                                            textFallback
                                        );
                                    }
                                }}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom text */}
            <motion.div
                className="container mx-auto px-4 text-center mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <p className="text-royal-700 dark:text-royal-300 text-sm md:text-base font-medium">
                    And many more businesses across{" "}
                    <span className="font-bold text-royal-900 dark:text-white">
                        DTC e-commerce
                    </span>
                    ,{" "}
                    <span className="font-bold text-royal-900 dark:text-white">
                        SaaS
                    </span>
                    , and{" "}
                    <span className="font-bold text-royal-900 dark:text-white">
                        Web3
                    </span>{" "}
                    ecosystems
                </p>
            </motion.div>
        </div>
    );
}
