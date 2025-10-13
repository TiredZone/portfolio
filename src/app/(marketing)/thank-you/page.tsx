import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { FloatingElements } from "@/components/common/floating-elements";
import {
    CheckCircle,
    Mail,
    ArrowRight,
    Home,
    Briefcase,
    Clock,
    User,
    MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = generateMetadata({
    title: "Thank You - Message Received",
    description:
        "Thank you for reaching out! I'll get back to you within 24 hours.",
    url: `${siteConfig.url}/thank-you`,
});

// Client component for reading URL parameters
function ThankYouContent() {
    // We'll detect if this is from Cal.com (has email/name params) or contact form
    if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const email = params.get("email");
        const name = params.get("name");
        const isCalBooking = email && name;

        return (
            <div className="min-h-screen overflow-hidden">
                {/* Hero Section */}
                <section className="relative py-20 lg:py-32 bg-gradient-to-br from-royal-900 via-royal-800 to-royal-700 dark:from-royal-950 dark:via-royal-900 dark:to-royal-800">
                    <FloatingElements density="light" colors="gold" />

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            {/* Success Icon */}
                            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500/20 backdrop-blur-sm rounded-full border-4 border-green-400 mb-6 animate-bounce">
                                <CheckCircle className="w-12 h-12 text-green-400" />
                            </div>

                            {/* Main Message */}
                            <div className="space-y-6">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
                                    {isCalBooking
                                        ? "Meeting Confirmed! 🎉"
                                        : "Message Received! ✅"}
                                </h1>

                                <p className="text-xl md:text-2xl text-royal-100 max-w-3xl mx-auto leading-relaxed">
                                    {isCalBooking ? (
                                        <>
                                            Thanks{" "}
                                            <span className="font-bold text-gold-300">
                                                {name}
                                            </span>
                                            ! Your meeting has been successfully
                                            booked. A confirmation email has
                                            been sent to{" "}
                                            <span className="font-bold text-gold-300">
                                                {email}
                                            </span>
                                            .
                                        </>
                                    ) : (
                                        "Thank you for reaching out! Your message has been successfully received and I'll get back to you within 24 hours."
                                    )}
                                </p>
                            </div>

                            {/* Info Cards */}
                            <div className="grid md:grid-cols-3 gap-6 mt-12">
                                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                                    <Clock className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                                    <h3 className="text-white font-semibold mb-2">
                                        {isCalBooking
                                            ? "Meeting Details"
                                            : "Response Time"}
                                    </h3>
                                    <p className="text-royal-100 text-sm">
                                        {isCalBooking
                                            ? "Check your email for meeting link & details"
                                            : "Usually within 24 hours on business days"}
                                    </p>
                                </div>

                                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                                    <Mail className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                                    <h3 className="text-white font-semibold mb-2">
                                        Check Your Email
                                    </h3>
                                    <p className="text-royal-100 text-sm">
                                        {isCalBooking
                                            ? "Calendar invite sent to your inbox"
                                            : "Confirmation sent to your email address"}
                                    </p>
                                </div>

                                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                                    <MessageSquare className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                                    <h3 className="text-white font-semibold mb-2">
                                        What&apos;s Next?
                                    </h3>
                                    <p className="text-royal-100 text-sm">
                                        {isCalBooking
                                            ? "I'll prepare for our discussion"
                                            : "I'll review your message and respond promptly"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What to Expect Section */}
                <section className="py-20 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-900 dark:text-white mb-12 text-center">
                                What Happens Next?
                            </h2>

                            <div className="space-y-8">
                                {isCalBooking ? (
                                    <>
                                        <div className="flex gap-4 items-start">
                                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-royal-600 to-royal-700 rounded-full flex items-center justify-center text-white font-bold">
                                                1
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-royal-900 dark:text-white mb-2">
                                                    Calendar Invite Sent
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400">
                                                    You&apos;ll receive a
                                                    calendar invite with the
                                                    meeting link, date, and
                                                    time. Add it to your
                                                    calendar so you don&apos;t
                                                    miss it!
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 items-start">
                                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-white font-bold">
                                                2
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-royal-900 dark:text-white mb-2">
                                                    Prepare for Our Discussion
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400">
                                                    Feel free to prepare any
                                                    questions, documents, or
                                                    ideas you&apos;d like to
                                                    discuss. The more context
                                                    you provide, the more
                                                    productive our meeting will
                                                    be.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 items-start">
                                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                                                3
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-royal-900 dark:text-white mb-2">
                                                    Join the Meeting
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400">
                                                    Click the meeting link from
                                                    your calendar invite at the
                                                    scheduled time. I&apos;ll be
                                                    ready to dive deep into your
                                                    project goals and
                                                    requirements.
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex gap-4 items-start">
                                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-royal-600 to-royal-700 rounded-full flex items-center justify-center text-white font-bold">
                                                1
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-royal-900 dark:text-white mb-2">
                                                    Message Review
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400">
                                                    I&apos;ll carefully review
                                                    your message and project
                                                    details to understand your
                                                    requirements and goals.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 items-start">
                                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-white font-bold">
                                                2
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-royal-900 dark:text-white mb-2">
                                                    Personalized Response
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400">
                                                    You&apos;ll receive a
                                                    detailed response within 24
                                                    hours (usually much sooner)
                                                    with answers to your
                                                    questions and next steps.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 items-start">
                                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                                                3
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-royal-900 dark:text-white mb-2">
                                                    Discovery Call
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400">
                                                    If your project is a good
                                                    fit, I&apos;ll suggest
                                                    scheduling a call to discuss
                                                    your needs in detail and
                                                    explore how I can help.
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-royal-50/30 dark:from-gray-800 dark:to-royal-900/20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-900 dark:text-white mb-6">
                                While You Wait...
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
                                Explore my work, read case studies, or learn
                                more about the services I offer
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-700 hover:to-royal-800 text-white font-semibold group px-8 py-4 text-lg shadow-xl shadow-royal-600/25"
                                    asChild
                                >
                                    <Link href="/work">
                                        <Briefcase className="mr-3 h-5 w-5" />
                                        View Case Studies
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>

                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-royal-600 dark:border-royal-400 text-royal-700 dark:text-royal-300 hover:bg-royal-50 dark:hover:bg-royal-900/20 px-8 py-4 text-lg group"
                                    asChild
                                >
                                    <Link href="/">
                                        <Home className="mr-2 h-5 w-5" />
                                        Back to Home
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </div>

                            {/* Additional Links */}
                            <div className="pt-12 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Need immediate assistance?
                                </p>
                                <div className="flex flex-wrap justify-center gap-6 text-sm">
                                    <a
                                        href="mailto:contact@becharaelmaalouf.dev"
                                        className="text-royal-600 dark:text-royal-400 hover:text-gold-600 dark:hover:text-gold-400 font-medium transition-colors"
                                    >
                                        <Mail className="inline w-4 h-4 mr-1" />
                                        contact@becharaelmaalouf.dev
                                    </a>
                                    <a
                                        href="tel:+96171898976"
                                        className="text-royal-600 dark:text-royal-400 hover:text-gold-600 dark:hover:text-gold-400 font-medium transition-colors"
                                    >
                                        <User className="inline w-4 h-4 mr-1" />
                                        +961 71 898 976
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    // Server-side fallback
    return (
        <div className="min-h-screen overflow-hidden">
            <section className="relative py-20 lg:py-32 bg-gradient-to-br from-royal-900 via-royal-800 to-royal-700 dark:from-royal-950 dark:via-royal-900 dark:to-royal-800">
                <FloatingElements density="light" colors="gold" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500/20 backdrop-blur-sm rounded-full border-4 border-green-400 mb-6 animate-bounce">
                            <CheckCircle className="w-12 h-12 text-green-400" />
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
                            Thank You! ✅
                        </h1>

                        <p className="text-xl md:text-2xl text-royal-100 max-w-3xl mx-auto leading-relaxed">
                            Your message has been received. I&apos;ll get back
                            to you soon!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default function ThankYouPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ThankYouContent />
        </Suspense>
    );
}
