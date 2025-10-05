"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/theme-toggle";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

const navigation = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Animation variants
    const navVariants: Variants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.4 },
        },
    };

    const mobileMenuVariants: Variants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const mobileItemVariants: Variants = {
        closed: { x: -20, opacity: 0 },
        open: { x: 0, opacity: 1 },
    };

    const isActiveLink = (href: string) => {
        if (href === "/" && pathname === "/") return true;
        if (href !== "/" && pathname.startsWith(href)) return true;
        return false;
    };

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-white/95 dark:bg-royal-950/95 backdrop-blur-lg shadow-lg border-b border-royal-200/50 dark:border-royal-700/50"
                    : "bg-white/80 dark:bg-royal-950/80 backdrop-blur-md border-b border-royal-100 dark:border-royal-800"
            }`}
        >
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.div variants={itemVariants}>
                        <Link
                            href="/"
                            className="flex items-center space-x-2 group"
                        >
                            <motion.div
                                className="relative w-8 h-8 md:w-10 md:h-10"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image
                                    src="/images/logo.png"
                                    alt="Bechara El Maalouf Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <motion.div
                        variants={itemVariants}
                        className="hidden md:flex items-center gap-8"
                    >
                        {navigation.map((item) => (
                            <motion.div
                                key={item.name}
                                variants={itemVariants}
                                className="relative"
                                whileHover={{ y: -2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Link
                                    href={item.href}
                                    className={`text-sm font-medium transition-all duration-300 relative group ${
                                        isActiveLink(item.href)
                                            ? "text-gold-600 dark:text-gold-400"
                                            : "text-royal-700 dark:text-royal-200 hover:text-gold-600 dark:hover:text-gold-400"
                                    }`}
                                >
                                    {item.name}

                                    {/* Active indicator */}
                                    {isActiveLink(item.href) && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-500 rounded-full"
                                            initial={false}
                                            transition={{
                                                type: "spring",
                                                stiffness: 500,
                                                damping: 30,
                                            }}
                                        />
                                    )}

                                    {/* Hover indicator */}
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-500/50 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
                                        style={{
                                            display: isActiveLink(item.href)
                                                ? "none"
                                                : "block",
                                        }}
                                    />
                                </Link>
                            </motion.div>
                        ))}

                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ThemeToggle />
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Button
                                size="sm"
                                className="bg-gold-500 hover:bg-gold-600 text-royal-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                asChild
                            >
                                <Link href="/contact">
                                    <motion.div
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatDelay: 3,
                                        }}
                                    >
                                        <Calendar className="w-4 h-4 mr-2" />
                                    </motion.div>
                                    Book a Call
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Mobile menu button */}
                    <motion.div
                        variants={itemVariants}
                        className="flex md:hidden items-center gap-4"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ThemeToggle />
                        </motion.div>
                        <motion.button
                            type="button"
                            className="text-royal-700 dark:text-royal-200 p-2 rounded-lg hover:bg-royal-100 dark:hover:bg-royal-800 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="sr-only">Toggle menu</span>
                            <AnimatePresence mode="wait">
                                {mobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: 180 }}
                                        exit={{ rotate: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="h-6 w-6" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 180 }}
                                        animate={{ rotate: 0 }}
                                        exit={{ rotate: 180 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="h-6 w-6" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={mobileMenuVariants}
                            className="md:hidden overflow-hidden border-t border-royal-100 dark:border-royal-800"
                        >
                            <div className="py-4 space-y-2">
                                {navigation.map((item) => (
                                    <motion.div
                                        key={item.name}
                                        variants={mobileItemVariants}
                                        whileHover={{ x: 8 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                                                isActiveLink(item.href)
                                                    ? "text-gold-600 dark:text-gold-400 bg-gold-50 dark:bg-gold-950/20"
                                                    : "text-royal-700 dark:text-royal-200 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-royal-50 dark:hover:bg-royal-800/50"
                                            }`}
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    variants={mobileItemVariants}
                                    className="pt-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        className="bg-gold-500 hover:bg-gold-600 text-royal-900 font-semibold w-full shadow-lg hover:shadow-xl transition-all duration-300"
                                        asChild
                                    >
                                        <Link href="/contact">
                                            <motion.div
                                                animate={{
                                                    rotate: [0, 10, -10, 0],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    repeatDelay: 3,
                                                }}
                                            >
                                                <Calendar className="w-4 h-4 mr-2" />
                                            </motion.div>
                                            Book a Call
                                        </Link>
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
}
