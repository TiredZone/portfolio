import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { CalEmbed } from "@/components/features/cal-embed";
import { Mail, Phone, MapPin, Clock, Linkedin, Github } from "lucide-react";
import { ContactForm } from "@/components/features/contact-form";
import { FloatingElements } from "@/components/common/floating-elements";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FAQ } from "@/components/features/faq";

export const metadata: Metadata = generateMetadata({
    title: "Contact - Let's Work Together",
    description:
        "Get in touch with Bechara El Maalouf for your next web development project. Book a free consultation or send a message to discuss Shopify, web apps, or automation needs.",
    url: `${siteConfig.url}/contact`,
});

export default function ContactPage() {
    return (
        <>
            <FloatingElements />

            {/* Hero */}
            <Section className="min-h-[50vh] flex items-center relative bg-gradient-to-br from-royal-50 via-white to-gold-50 dark:from-royal-900 dark:via-gray-900 dark:to-black">
                <Container>
                    <div className="max-w-5xl mx-auto text-center space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-royal-900 via-royal-700 to-gold-600 dark:from-white dark:via-royal-100 dark:to-gold-400 bg-clip-text text-transparent leading-tight">
                                Let&apos;s Work Together
                            </h1>
                            <p className="text-xl md:text-2xl text-royal-700 dark:text-royal-200 max-w-3xl mx-auto leading-relaxed">
                                Have a project in mind? I&apos;d love to hear
                                about it.
                                <span className="block mt-2 text-lg opacity-90">
                                    Book a call or send a message and I&apos;ll
                                    get back to you within 24 hours.
                                </span>
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Contact Methods */}
            <Section className="bg-white dark:bg-gray-900">
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
                        <a
                            href={`mailto:${siteConfig.author.email}`}
                            className="group flex flex-col items-center p-8 bg-gradient-to-br from-royal-50 to-gold-50/30 dark:from-royal-900/20 dark:to-gold-900/10 rounded-2xl border border-royal-200/50 dark:border-royal-800/50 hover:border-gold-300 dark:hover:border-gold-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="p-4 bg-gradient-to-r from-royal-500 to-royal-600 dark:from-royal-400 dark:to-royal-500 rounded-xl mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                                <Mail className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="font-bold text-royal-900 dark:text-white mb-2 text-lg">
                                Email
                            </h3>
                            <p className="text-sm text-royal-700 dark:text-royal-300 text-center leading-relaxed">
                                {siteConfig.author.email}
                            </p>
                        </a>

                        <a
                            href={`tel:${siteConfig.author.phone}`}
                            className="group flex flex-col items-center p-8 bg-gradient-to-br from-royal-50 to-gold-50/30 dark:from-royal-900/20 dark:to-gold-900/10 rounded-2xl border border-royal-200/50 dark:border-royal-800/50 hover:border-gold-300 dark:hover:border-gold-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="p-4 bg-gradient-to-r from-gold-500 to-gold-600 dark:from-gold-400 dark:to-gold-500 rounded-xl mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                                <Phone className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="font-bold text-royal-900 dark:text-white mb-2 text-lg">
                                Phone
                            </h3>
                            <p className="text-sm text-royal-700 dark:text-royal-300 text-center leading-relaxed">
                                {siteConfig.author.phone}
                            </p>
                        </a>

                        <div className="group flex flex-col items-center p-8 bg-gradient-to-br from-royal-50 to-gold-50/30 dark:from-royal-900/20 dark:to-gold-900/10 rounded-2xl border border-royal-200/50 dark:border-royal-800/50 hover:border-gold-300 dark:hover:border-gold-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="p-4 bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500 rounded-xl mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                                <MapPin className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="font-bold text-royal-900 dark:text-white mb-2 text-lg">
                                Location
                            </h3>
                            <p className="text-sm text-royal-700 dark:text-royal-300 text-center leading-relaxed">
                                {siteConfig.author.location}
                            </p>
                        </div>

                        <div className="group flex flex-col items-center p-8 bg-gradient-to-br from-royal-50 to-gold-50/30 dark:from-royal-900/20 dark:to-gold-900/10 rounded-2xl border border-royal-200/50 dark:border-royal-800/50 hover:border-gold-300 dark:hover:border-gold-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 rounded-xl mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                                <Clock className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="font-bold text-royal-900 dark:text-white mb-2 text-lg">
                                Timezone
                            </h3>
                            <p className="text-sm text-royal-700 dark:text-royal-300 text-center leading-relaxed">
                                {siteConfig.author.timezone}
                            </p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6 justify-center mb-16">
                        <a
                            href={siteConfig.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-5 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-7 h-7" />
                        </a>
                        <a
                            href={siteConfig.social.tiredZone}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-5 rounded-2xl bg-gradient-to-r from-gray-700 to-gray-800 dark:from-gray-600 dark:to-gray-700 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                            aria-label="GitHub"
                        >
                            <Github className="w-7 h-7" />
                        </a>
                    </div>
                </Container>
            </Section>

            {/* Booking Calendar */}
            <Section className="bg-gradient-to-br from-royal-50/30 to-gold-50/30 dark:from-royal-900/20 dark:to-black/20">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-royal-900 dark:text-white mb-6">
                                Book a Free Consultation
                            </h2>
                            <p className="text-lg md:text-xl text-royal-700 dark:text-royal-300 max-w-2xl mx-auto leading-relaxed">
                                Schedule a 30-minute call to discuss your
                                project, goals, and how I can help you achieve
                                them.
                            </p>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <CalEmbed />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Contact Form */}
            <Section className="bg-white dark:bg-gray-900">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-royal-900 dark:text-white mb-6">
                                Or Send a Message
                            </h2>
                            <p className="text-lg md:text-xl text-royal-700 dark:text-royal-300 max-w-2xl mx-auto leading-relaxed">
                                Prefer to email? Fill out the form below and
                                I&apos;ll get back to you within 24 hours.
                            </p>
                        </div>
                        <ContactForm />
                    </div>
                </Container>
            </Section>

            {/* FAQ */}
            <Section className="bg-gradient-to-br from-royal-50/30 to-gold-50/30 dark:from-royal-900/20 dark:to-black/20">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-royal-900 dark:text-white mb-6">
                                Common Questions
                            </h2>
                            <p className="text-lg md:text-xl text-royal-700 dark:text-royal-300 max-w-2xl mx-auto leading-relaxed">
                                Get answers to frequently asked questions about
                                my process, pricing, and services.
                            </p>
                        </div>
                        <FAQ />
                    </div>
                </Container>
            </Section>
        </>
    );
}
