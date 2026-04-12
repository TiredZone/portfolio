import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const footerLinks = {
    navigation: [
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Work", href: "/work" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ],
    services: [
        { name: "Shopify Development", href: "/contact" },
        { name: "Web Applications", href: "/contact" },
        { name: "Automation & Integrations", href: "/contact" },
        { name: "Technical Consulting", href: "/contact" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-royal-950 dark:bg-black text-royal-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center md:text-left">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <div className="flex items-center justify-center md:justify-start space-x-3 group">
                                <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-110">
                                    <Image
                                        src="/images/logo_transparent.png"
                                        alt="Bechara El Maalouf - Shopify CRO Specialist"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </Link>
                        <p className="text-royal-300 text-sm mb-6 max-w-xs mx-auto md:mx-0">
                            Shopify CRO specialist. I find where your store
                            leaks revenue, fix it, and prove it worked.
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <a
                                href="https://github.com/TiredZone"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-royal-300 hover:text-gold-400 transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/bechara-el-maalouf-920645200/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-royal-300 hover:text-gold-400 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:contact@becharaelmaalouf.dev"
                                className="text-royal-300 hover:text-gold-400 transition-colors"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Navigation
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-royal-300 hover:text-gold-400 text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-royal-300 hover:text-gold-400 text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Get in Touch
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center md:items-start justify-center md:justify-start gap-2 text-royal-300 text-sm">
                                <Mail className="w-4 h-4 flex-shrink-0" />
                                <a
                                    href="mailto:contact@becharaelmaalouf.dev"
                                    className="hover:text-gold-400 transition-colors"
                                >
                                    contact@becharaelmaalouf.dev
                                </a>
                            </li>
                            <li className="flex items-center md:items-start justify-center md:justify-start gap-2 text-royal-300 text-sm">
                                <Phone className="w-4 h-4 flex-shrink-0" />
                                <a
                                    href="tel:+96171998976"
                                    className="hover:text-gold-400 transition-colors"
                                >
                                    +961 71 898 976
                                </a>
                            </li>
                            <li className="flex items-center md:items-start justify-center md:justify-start gap-2 text-royal-300 text-sm">
                                <MapPin className="w-4 h-4 flex-shrink-0" />
                                <span>Zouk Mosbeh, Lebanon</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-royal-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                        <p className="text-royal-400 text-sm">
                            © {new Date().getFullYear()} Bechara El Maalouf.
                            All rights reserved.
                        </p>
                        <p className="text-royal-500 text-xs">
                            Built with Next.js, TypeScript, and Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
