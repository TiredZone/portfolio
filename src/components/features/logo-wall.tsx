"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
    { name: "BAD Marketing", logo: "/images/clients/bad-marketing.png" },
    { name: "Kalyxi", logo: "/images/clients/kalyxi.png" },
    { name: "Casa Di Lumo", logo: "/images/clients/casa-di-lumo.png" },
    { name: "ClariGenZ", logo: "/images/clients/clarigenz.png" },
    { name: "Orcania", logo: "/images/clients/orcania.png" },
    { name: "BitNaft", logo: "/images/clients/bitnaft.png" },
    { name: "Sunday Golf", logo: "/images/clients/sunday-golf.png" },
];

// LogoWall component - Display client logos with elegant animation
export function LogoWall() {
    return (
        <div className="w-full relative overflow-hidden">
            {/* Animated background gradients */}
            <motion.div
                className="absolute top-0 left-1/4 w-96 h-96 bg-royal-500/5 dark:bg-royal-500/10 rounded-full blur-3xl"
                animate={{
                    y: [0, 30, 0],
                    x: [0, 20, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/5 dark:bg-gold-500/10 rounded-full blur-3xl"
                animate={{
                    y: [0, -30, 0],
                    x: [0, -20, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative z-10">
                {/* Section Header with decorative elements */}
                <motion.div
                    className="text-center mb-12 relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Decorative line */}
                    <motion.div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-royal-900 dark:text-white mb-4 mt-6">
                        Trusted by{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-600 to-gold-600 dark:from-royal-400 dark:to-gold-400">
                            Growing Brands
                        </span>
                    </h2>
                    <p className="text-royal-600 dark:text-royal-400 max-w-2xl mx-auto text-sm md:text-base">
                        Proud to partner with innovative companies across
                        e-commerce, Web3, and automation
                    </p>
                </motion.div>

                {/* Logo Grid with proper containment */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center max-w-6xl mx-auto">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                            }}
                            className="group relative w-full"
                        >
                            {/* Glow effect on hover */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-royal-500/0 via-gold-500/20 to-royal-500/0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                initial={{ scale: 0.8 }}
                                whileHover={{ scale: 1.2 }}
                            />

                            {/* Logo container with fixed aspect ratio */}
                            <div className="relative bg-white dark:bg-gray-800/50 dark:backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:border-gold-300 dark:group-hover:border-gold-600 aspect-[3/2] flex items-center justify-center overflow-hidden">
                                {/* Shimmer effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.6 }}
                                />

                                <div className="relative w-full h-full flex items-center justify-center p-2">
                                    <Image
                                        src={client.logo}
                                        alt={`${client.name} logo`}
                                        width={200}
                                        height={80}
                                        className="object-contain max-w-full max-h-full grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                                        onError={(e) => {
                                            // Fallback to text if image fails
                                            const target =
                                                e.target as HTMLImageElement;
                                            target.style.display = "none";
                                            if (target.parentElement) {
                                                const textFallback =
                                                    document.createElement(
                                                        "div"
                                                    );
                                                textFallback.className =
                                                    "text-royal-900 dark:text-white font-bold text-base md:text-lg text-center px-2";
                                                textFallback.textContent =
                                                    client.name;
                                                target.parentElement.appendChild(
                                                    textFallback
                                                );
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Tooltip */}
                            <motion.div
                                className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-royal-900 dark:bg-white text-white dark:text-royal-900 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-50"
                                initial={{ y: -5 }}
                                whileHover={{ y: 0 }}
                            >
                                {client.name}
                                {/* Arrow */}
                                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-royal-900 dark:bg-white rotate-45" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats or CTA with decorative elements */}
                <motion.div
                    className="text-center mt-20 md:mt-24 relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    {/* Decorative dots */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <motion.div
                            className="w-2 h-2 rounded-full bg-gold-500"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.div
                            className="w-2 h-2 rounded-full bg-royal-500"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 0.3,
                            }}
                        />
                        <motion.div
                            className="w-2 h-2 rounded-full bg-gold-500"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 0.6,
                            }}
                        />
                    </div>

                    <p className="text-royal-600 dark:text-royal-400 text-sm md:text-base max-w-2xl mx-auto">
                        And many more businesses across{" "}
                        <span className="font-semibold text-royal-700 dark:text-royal-300">
                            DTC e-commerce
                        </span>
                        ,{" "}
                        <span className="font-semibold text-royal-700 dark:text-royal-300">
                            SaaS
                        </span>
                        , and{" "}
                        <span className="font-semibold text-royal-700 dark:text-royal-300">
                            Web3
                        </span>{" "}
                        ecosystems
                    </p>

                    {/* Bottom decorative line */}
                    <motion.div
                        className="mx-auto mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 128 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1 }}
                    />
                </motion.div>
            </div>
        </div>
    );
}
