import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { CalEmbed } from "@/components/features/cal-embed";
import { Mail, Phone, MapPin, Clock, Linkedin, Github } from "lucide-react";
import { ContactForm } from "@/components/features/contact-form";

export const metadata: Metadata = generateMetadata({
    title: "Contact",
    description:
        "Get in touch with Bechara El Maalouf for your next web development project. Book a free consultation or send a message to discuss Shopify, web apps, or automation needs.",
    url: `${siteConfig.url}/contact`,
});

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-20 bg-gradient-to-br from-royal-900 via-royal-800 to-royal-700 dark:from-royal-950 dark:via-royal-900 dark:to-royal-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
                            Let&apos;s Work Together
                        </h1>
                        <p className="text-xl text-royal-100 leading-relaxed">
                            Have a project in mind? I&apos;d love to hear about
                            it. Book a call or send a message and I&apos;ll get
                            back to you within 24 hours.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
                        <a
                            href={`mailto:${siteConfig.author.email}`}
                            className="flex flex-col items-center p-6 bg-royal-50 dark:bg-royal-900/20 rounded-lg border border-royal-100 dark:border-royal-800 hover:shadow-lg transition-shadow group"
                        >
                            <div className="p-3 bg-royal-100 dark:bg-royal-900/40 rounded-full mb-4 group-hover:bg-royal-200 dark:group-hover:bg-royal-900/60 transition-colors">
                                <Mail className="w-6 h-6 text-royal-700 dark:text-royal-400" />
                            </div>
                            <h3 className="font-semibold text-royal-900 dark:text-white mb-1">
                                Email
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                                {siteConfig.author.email}
                            </p>
                        </a>

                        <a
                            href={`tel:${siteConfig.author.phone}`}
                            className="flex flex-col items-center p-6 bg-royal-50 dark:bg-royal-900/20 rounded-lg border border-royal-100 dark:border-royal-800 hover:shadow-lg transition-shadow group"
                        >
                            <div className="p-3 bg-royal-100 dark:bg-royal-900/40 rounded-full mb-4 group-hover:bg-royal-200 dark:group-hover:bg-royal-900/60 transition-colors">
                                <Phone className="w-6 h-6 text-royal-700 dark:text-royal-400" />
                            </div>
                            <h3 className="font-semibold text-royal-900 dark:text-white mb-1">
                                Phone
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                                {siteConfig.author.phone}
                            </p>
                        </a>

                        <div className="flex flex-col items-center p-6 bg-royal-50 dark:bg-royal-900/20 rounded-lg border border-royal-100 dark:border-royal-800">
                            <div className="p-3 bg-royal-100 dark:bg-royal-900/40 rounded-full mb-4">
                                <MapPin className="w-6 h-6 text-royal-700 dark:text-royal-400" />
                            </div>
                            <h3 className="font-semibold text-royal-900 dark:text-white mb-1">
                                Location
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                                {siteConfig.author.location}
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-royal-50 dark:bg-royal-900/20 rounded-lg border border-royal-100 dark:border-royal-800">
                            <div className="p-3 bg-royal-100 dark:bg-royal-900/40 rounded-full mb-4">
                                <Clock className="w-6 h-6 text-royal-700 dark:text-royal-400" />
                            </div>
                            <h3 className="font-semibold text-royal-900 dark:text-white mb-1">
                                Timezone
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                                {siteConfig.author.timezone}
                            </p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 justify-center mb-16">
                        <a
                            href={siteConfig.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full bg-royal-100 dark:bg-royal-900/20 text-royal-700 dark:text-royal-400 hover:bg-royal-200 dark:hover:bg-royal-900/40 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href={siteConfig.social.tiredZone}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full bg-royal-100 dark:bg-royal-900/20 text-royal-700 dark:text-royal-400 hover:bg-royal-200 dark:hover:bg-royal-900/40 transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Booking Calendar */}
            <section className="py-16 bg-gradient-to-br from-royal-50 to-white dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-serif font-bold text-royal-900 dark:text-white mb-4">
                                Book a Free Consultation
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400">
                                Schedule a 30-minute call to discuss your
                                project, goals, and how I can help.
                            </p>
                        </div>
                        <CalEmbed />
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-serif font-bold text-royal-900 dark:text-white mb-4">
                                Or Send a Message
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400">
                                Prefer to email? Fill out the form below and
                                I&apos;ll get back to you within 24 hours.
                            </p>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-gradient-to-br from-royal-50 to-white dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-serif font-bold text-royal-900 dark:text-white mb-12 text-center">
                            Common Questions
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-royal-100 dark:border-royal-800">
                                <h3 className="text-xl font-bold text-royal-900 dark:text-white mb-2">
                                    What&apos;s your typical project timeline?
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Most projects range from 2-8 weeks depending
                                    on scope and complexity. Shopify
                                    optimizations can be completed in 1-2 weeks,
                                    while full web applications typically take
                                    4-8 weeks. I&apos;ll provide a detailed
                                    timeline in the proposal.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-royal-100 dark:border-royal-800">
                                <h3 className="text-xl font-bold text-royal-900 dark:text-white mb-2">
                                    Do you work with startups or only
                                    established businesses?
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    I work with both! Whether you&apos;re a
                                    startup building your MVP or an established
                                    brand scaling to 7+ figures, I can help. My
                                    approach adapts to your stage and goals.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-royal-100 dark:border-royal-800">
                                <h3 className="text-xl font-bold text-royal-900 dark:text-white mb-2">
                                    What&apos;s your pricing structure?
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    I offer both project-based pricing and
                                    hourly rates depending on the engagement.
                                    Project pricing is typically preferred for
                                    defined scopes. I&apos;ll provide a detailed
                                    quote after our initial consultation.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-royal-100 dark:border-royal-800">
                                <h3 className="text-xl font-bold text-royal-900 dark:text-white mb-2">
                                    Do you provide ongoing support?
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Yes! I offer post-launch support and
                                    maintenance packages. Many clients work with
                                    me long-term for ongoing optimization,
                                    features, and support. We can discuss
                                    retainer options that fit your needs.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-royal-100 dark:border-royal-800">
                                <h3 className="text-xl font-bold text-royal-900 dark:text-white mb-2">
                                    What makes you different from other
                                    developers?
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    I focus on measurable business results, not
                                    just code quality. Every project is
                                    optimized for performance, conversions, and
                                    ROI from day one. Plus, I bring deep
                                    expertise in both Shopify Plus and custom
                                    web applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
