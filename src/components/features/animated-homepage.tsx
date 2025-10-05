"use client";

import { Hero } from "@/components/features/hero";
import { LogoWall } from "@/components/features/logo-wall";
import { SkillsGrid } from "@/components/features/skills-grid";
import { Testimonials } from "@/components/features/testimonials";
import { PricingTable } from "@/components/features/pricing-table";
import { FAQ } from "@/components/features/faq";
import { NewsletterSignup } from "@/components/features/newsletter-signup";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
    FloatingElements,
    GradientOrb,
} from "@/components/common/floating-elements";
import { ArrowRight, Award, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import { type CaseStudy } from "@/lib/mdx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedHomepageProps {
    featuredCaseStudies: CaseStudy[];
}

export function AnimatedHomepage({
    featuredCaseStudies,
}: AnimatedHomepageProps) {
    // Animation refs
    const resultsRef = useRef(null);
    const featuredRef = useRef(null);
    const skillsRef = useRef(null);
    const testimonialsRef = useRef(null);
    const pricingRef = useRef(null);
    const faqRef = useRef(null);
    const ctaRef = useRef(null);

    // Animation states
    const resultsInView = useInView(resultsRef, { once: true });
    const featuredInView = useInView(featuredRef, { once: true });
    const skillsInView = useInView(skillsRef, { once: true });
    const testimonialsInView = useInView(testimonialsRef, { once: true });
    const pricingInView = useInView(pricingRef, { once: true });
    const faqInView = useInView(faqRef, { once: true });
    const ctaInView = useInView(ctaRef, { once: true });

    // Animation variants
    const fadeInUp = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const slideInLeft = {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
    };

    const slideInRight = {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
    };

    const scaleIn = {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.6, ease: "easeOut" },
    };

    return (
        <>
            {/* Hero Section */}
            <Hero />

            {/* Animated Transition Section */}
            <Section className="bg-gradient-to-b from-royal-900 via-royal-800 to-royal-50 dark:to-royal-950/20 py-20">
                <Container>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="text-center"
                    >
                        {/* Animated Stats Bar */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.3 }}
                            className="grid grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
                        >
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                <motion.div
                                    className="text-4xl md:text-5xl font-bold text-gold-400 mb-2"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.7,
                                        type: "spring",
                                        stiffness: 200,
                                    }}
                                >
                                    50+
                                </motion.div>
                                <div className="text-royal-200 text-sm uppercase tracking-wide">
                                    Projects Delivered
                                </div>
                            </motion.div>

                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 }}
                            >
                                <motion.div
                                    className="text-4xl md:text-5xl font-bold text-gold-400 mb-2"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.9,
                                        type: "spring",
                                        stiffness: 200,
                                    }}
                                >
                                    95%
                                </motion.div>
                                <div className="text-royal-200 text-sm uppercase tracking-wide">
                                    Client Satisfaction
                                </div>
                            </motion.div>

                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.9 }}
                            >
                                <motion.div
                                    className="text-4xl md:text-5xl font-bold text-gold-400 mb-2"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 1.1,
                                        type: "spring",
                                        stiffness: 200,
                                    }}
                                >
                                    24/7
                                </motion.div>
                                <div className="text-royal-200 text-sm uppercase tracking-wide">
                                    Support Available
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Floating Elements */}
                        <div className="relative">
                            {[
                                { left: 20, top: 45 },
                                { left: 35, top: 65 },
                                { left: 50, top: 40 },
                                { left: 65, top: 60 },
                                { left: 80, top: 35 },
                                { left: 95, top: 55 },
                            ].map((position, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-gold-400/20 rounded-full"
                                    style={{
                                        left: `${position.left}%`,
                                        top: `${position.top}%`,
                                    }}
                                    animate={{
                                        y: [0, -20, 0],
                                        opacity: [0.2, 0.8, 0.2],
                                        scale: [1, 1.5, 1],
                                    }}
                                    transition={{
                                        duration: 3 + i * 0.5,
                                        repeat: Infinity,
                                        delay: i * 0.3,
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* Client Logos */}
            <Section className="bg-royal-50 dark:bg-royal-950/20">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <LogoWall />
                    </motion.div>
                </Container>
            </Section>

            {/* Results Showcase */}
            <motion.div
                ref={resultsRef}
                initial="initial"
                animate={resultsInView ? "animate" : "initial"}
                variants={staggerContainer}
            >
                <Section>
                    <Container>
                        <motion.div
                            className="text-center mb-12"
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-900 dark:text-white mb-4">
                                Proven Results That Speak for Themselves
                            </h2>
                            <p className="text-lg text-royal-700 dark:text-royal-300 max-w-2xl mx-auto">
                                Delivering measurable impact for clients ranging
                                from startups to $2M/month brands
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                            variants={staggerContainer}
                        >
                            <motion.div
                                className="text-center p-8 rounded-lg bg-gradient-to-br from-gold-50 to-royal-50 dark:from-gold-950/20 dark:to-royal-950/20 border border-gold-200 dark:border-gold-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
                                variants={scaleIn}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500 text-royal-900 mb-4">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <div className="text-4xl font-bold text-royal-900 dark:text-white mb-2">
                                    32%
                                </div>
                                <div className="text-sm text-royal-700 dark:text-royal-300">
                                    Revenue Increase
                                </div>
                                <div className="text-xs text-royal-600 dark:text-royal-400 mt-1">
                                    BAD Marketing
                                </div>
                            </motion.div>

                            <motion.div
                                className="text-center p-8 rounded-lg bg-gradient-to-br from-royal-50 to-gold-50 dark:from-royal-950/20 dark:to-gold-950/20 border border-royal-200 dark:border-royal-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
                                variants={scaleIn}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-royal-600 text-white mb-4">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div className="text-4xl font-bold text-royal-900 dark:text-white mb-2">
                                    50k+
                                </div>
                                <div className="text-sm text-royal-700 dark:text-royal-300">
                                    Leads Automated
                                </div>
                                <div className="text-xs text-royal-600 dark:text-royal-400 mt-1">
                                    Monthly at Kalyxl
                                </div>
                            </motion.div>

                            <motion.div
                                className="text-center p-8 rounded-lg bg-gradient-to-br from-gold-50 to-royal-50 dark:from-gold-950/20 dark:to-royal-950/20 border border-gold-200 dark:border-gold-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
                                variants={scaleIn}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500 text-royal-900 mb-4">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div className="text-4xl font-bold text-royal-900 dark:text-white mb-2">
                                    85%
                                </div>
                                <div className="text-sm text-royal-700 dark:text-royal-300">
                                    Work Reduction
                                </div>
                                <div className="text-xs text-royal-600 dark:text-royal-400 mt-1">
                                    Through Automation
                                </div>
                            </motion.div>
                        </motion.div>
                    </Container>
                </Section>
            </motion.div>

            {/* Featured Case Studies */}
            {featuredCaseStudies.length > 0 && (
                <motion.div
                    ref={featuredRef}
                    initial="initial"
                    animate={featuredInView ? "animate" : "initial"}
                    variants={staggerContainer}
                >
                    <Section className="bg-white dark:bg-royal-950">
                        <Container>
                            <motion.div
                                className="text-center mb-12"
                                variants={fadeInUp}
                            >
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-900 dark:text-white mb-4">
                                    Featured Work
                                </h2>
                                <p className="text-lg text-royal-700 dark:text-royal-300 max-w-2xl mx-auto">
                                    Real projects, real results. See how I help
                                    businesses grow through strategic
                                    development.
                                </p>
                            </motion.div>

                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
                                variants={staggerContainer}
                            >
                                {featuredCaseStudies.map((study, index) => (
                                    <motion.div
                                        key={study.slug}
                                        variants={
                                            index % 2 === 0
                                                ? slideInLeft
                                                : slideInRight
                                        }
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        className="group"
                                    >
                                        <Link
                                            href={`/work/${study.slug}`}
                                            className="block bg-royal-50 dark:bg-royal-900/20 rounded-lg overflow-hidden border border-royal-200 dark:border-royal-800 hover:border-gold-500 dark:hover:border-gold-500 transition-all hover:shadow-xl"
                                        >
                                            <div className="p-6">
                                                <div className="text-sm font-semibold text-gold-600 dark:text-gold-400 mb-2">
                                                    {study.frontmatter.client}
                                                </div>
                                                <h3 className="text-xl font-bold text-royal-900 dark:text-white mb-3 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                                                    {study.frontmatter.title}
                                                </h3>
                                                <p className="text-sm text-royal-700 dark:text-royal-300 mb-4">
                                                    {
                                                        study.frontmatter
                                                            .description
                                                    }
                                                </p>

                                                {study.frontmatter.metrics &&
                                                    study.frontmatter.metrics
                                                        .length > 0 && (
                                                        <div className="flex flex-wrap gap-2 mb-4">
                                                            {study.frontmatter.metrics
                                                                .slice(0, 2)
                                                                .map(
                                                                    (
                                                                        metric,
                                                                        idx
                                                                    ) => (
                                                                        <div
                                                                            key={
                                                                                idx
                                                                            }
                                                                            className="text-xs px-3 py-1 bg-gold-100 dark:bg-gold-900/20 text-gold-700 dark:text-gold-400 rounded-full"
                                                                        >
                                                                            {
                                                                                metric.value
                                                                            }
                                                                        </div>
                                                                    )
                                                                )}
                                                        </div>
                                                    )}

                                                <div className="flex items-center text-sm font-medium text-gold-600 dark:text-gold-400 group-hover:gap-2 transition-all">
                                                    View Case Study
                                                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div
                                className="text-center"
                                variants={fadeInUp}
                            >
                                <Button variant="outline" size="lg" asChild>
                                    <Link href="/work">
                                        View All Projects
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </motion.div>
                        </Container>
                    </Section>
                </motion.div>
            )}

            {/* Skills Grid */}
            <motion.div
                ref={skillsRef}
                initial="initial"
                animate={skillsInView ? "animate" : "initial"}
                variants={staggerContainer}
            >
                <Section className="bg-royal-50 dark:bg-royal-950/20 relative overflow-hidden">
                    <FloatingElements density="light" colors="royal" />
                    <GradientOrb
                        size="large"
                        position="top-right"
                        colors="royal-to-blue"
                        className="opacity-50"
                    />
                    <Container>
                        <motion.div
                            className="text-center mb-12"
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-900 dark:text-white mb-4">
                                Technical Expertise
                            </h2>
                            <p className="text-lg text-royal-700 dark:text-royal-300 max-w-2xl mx-auto">
                                Full-stack proficiency across modern web
                                technologies and platforms
                            </p>
                        </motion.div>
                        <motion.div variants={scaleIn}>
                            <SkillsGrid />
                        </motion.div>
                    </Container>
                </Section>
            </motion.div>

            {/* Testimonials */}
            <motion.div
                ref={testimonialsRef}
                initial="initial"
                animate={testimonialsInView ? "animate" : "initial"}
                variants={staggerContainer}
            >
                <Section className="relative overflow-hidden">
                    <FloatingElements density="medium" colors="mixed" />
                    <GradientOrb
                        size="medium"
                        position="bottom-left"
                        colors="gold-to-orange"
                        className="opacity-40"
                    />
                    <Container>
                        <motion.div
                            className="text-center mb-12"
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-900 dark:text-white mb-4">
                                What Clients Say
                            </h2>
                            <p className="text-lg text-royal-700 dark:text-royal-300 max-w-2xl mx-auto">
                                Trusted by businesses that value quality,
                                reliability, and results
                            </p>
                        </motion.div>
                        <motion.div variants={slideInLeft}>
                            <Testimonials />
                        </motion.div>
                    </Container>
                </Section>
            </motion.div>

            {/* Pricing */}
            <motion.div
                ref={pricingRef}
                initial="initial"
                animate={pricingInView ? "animate" : "initial"}
                variants={staggerContainer}
            >
                <Section className="bg-royal-50 dark:bg-royal-950/20 relative overflow-hidden">
                    <FloatingElements density="light" colors="gold" />
                    <GradientOrb
                        size="xl"
                        position="center"
                        colors="royal-to-gold"
                        className="opacity-30"
                    />
                    <Container>
                        <motion.div
                            className="text-center mb-12"
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-900 dark:text-white mb-4">
                                Service Packages
                            </h2>
                            <p className="text-lg text-royal-700 dark:text-royal-300 max-w-2xl mx-auto">
                                Transparent pricing for every project size and
                                budget
                            </p>
                        </motion.div>
                        <motion.div variants={scaleIn}>
                            <PricingTable />
                        </motion.div>
                    </Container>
                </Section>
            </motion.div>

            {/* FAQ */}
            <motion.div
                ref={faqRef}
                initial="initial"
                animate={faqInView ? "animate" : "initial"}
                variants={staggerContainer}
            >
                <Section className="relative overflow-hidden">
                    <FloatingElements density="light" colors="royal" />
                    <Container>
                        <motion.div
                            className="text-center mb-12"
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-900 dark:text-white mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-lg text-royal-700 dark:text-royal-300 max-w-2xl mx-auto">
                                Everything you need to know about working
                                together
                            </p>
                        </motion.div>
                        <motion.div
                            className="max-w-3xl mx-auto"
                            variants={slideInRight}
                        >
                            <FAQ />
                        </motion.div>
                    </Container>
                </Section>
            </motion.div>

            {/* Newsletter CTA */}
            <Section className="bg-gradient-to-br from-royal-700 to-royal-900 dark:from-royal-900 dark:to-black text-white">
                <Container>
                    <motion.div
                        className="max-w-3xl mx-auto text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <NewsletterSignup />
                    </motion.div>
                </Container>
            </Section>

            {/* Final CTA */}
            <motion.div
                ref={ctaRef}
                initial="initial"
                animate={ctaInView ? "animate" : "initial"}
                variants={staggerContainer}
            >
                <Section className="relative overflow-hidden">
                    <FloatingElements density="medium" colors="mixed" />
                    <GradientOrb
                        size="large"
                        position="top-left"
                        colors="royal-to-gold"
                        className="opacity-40"
                    />
                    <GradientOrb
                        size="medium"
                        position="bottom-right"
                        colors="gold-to-orange"
                        className="opacity-30"
                    />
                    <Container>
                        <motion.div
                            className="bg-gradient-to-br from-gold-50 to-royal-50 dark:from-gold-950/20 dark:to-royal-950/20 rounded-2xl p-8 md:p-12 text-center border border-gold-200 dark:border-gold-800 shadow-2xl relative overflow-hidden"
                            variants={scaleIn}
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            {/* Animated shine effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                animate={{
                                    x: ["-100%", "100%"],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatDelay: 5,
                                    ease: "easeInOut",
                                }}
                            />

                            <motion.h2
                                className="text-3xl md:text-4xl font-serif font-bold text-royal-900 dark:text-white mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                Ready to Build Something Amazing?
                            </motion.h2>
                            <motion.p
                                className="text-lg text-royal-700 dark:text-royal-300 mb-8 max-w-2xl mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                Let&apos;s discuss your project and how I can
                                help you achieve your goals. Book a free
                                30-minute strategy call.
                            </motion.p>
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                variants={staggerContainer}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    variants={slideInLeft}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white hover:text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group border-0"
                                        asChild
                                    >
                                        <Link href="/contact">
                                            Schedule a Call
                                            <motion.div
                                                className="ml-2"
                                                animate={{ x: [0, 3, 0] }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                <ArrowRight className="w-4 h-4" />
                                            </motion.div>
                                        </Link>
                                    </Button>
                                </motion.div>
                                <motion.div
                                    variants={slideInRight}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="bg-white dark:bg-gray-800 hover:bg-royal-50 dark:hover:bg-royal-900/40 border-royal-300 dark:border-royal-600 hover:border-royal-400 dark:hover:border-royal-500 text-royal-700 dark:text-royal-300 hover:text-royal-800 dark:hover:text-royal-200 transition-all duration-300"
                                        asChild
                                    >
                                        <Link href="/services">
                                            View Services
                                        </Link>
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </Container>
                </Section>
            </motion.div>
        </>
    );
}
