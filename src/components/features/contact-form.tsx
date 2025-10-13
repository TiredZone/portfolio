"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { sendContactForm } from "@/app/actions/contact";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";

type FormData = {
    name: string;
    email: string;
    company?: string;
    projectType: "shopify" | "webapp" | "automation" | "consulting" | "other";
    budget: "<10k" | "10-25k" | "25-50k" | "50k+";
    timeline: "asap" | "1-2 months" | "3-6 months" | "6+ months";
    message: string;
};

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);

        try {
            const result = await sendContactForm(data);

            if (result.success) {
                toast.success(result.message);
                reset();

                // Redirect to thank-you page after short delay
                setTimeout(() => {
                    window.location.href = "/thank-you";
                }, 1000);
            } else {
                toast.error(result.message);
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error("Contact form error:", error);
            toast.error(
                "Something went wrong. Please try emailing me directly."
            );
            setIsSubmitting(false);
        }
    };

    return (
        <Card className="p-8 border-royal-100 dark:border-royal-800">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                        <Label htmlFor="name" className="mb-2 block">
                            Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="name"
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 2,
                                    message:
                                        "Name must be at least 2 characters",
                                },
                            })}
                            placeholder="John Doe"
                            className={
                                errors.name
                                    ? "border-red-500 dark:border-red-500"
                                    : ""
                            }
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <Label htmlFor="email" className="mb-2 block">
                            Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                },
                            })}
                            placeholder="john@example.com"
                            className={
                                errors.email
                                    ? "border-red-500 dark:border-red-500"
                                    : ""
                            }
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Company */}
                <div>
                    <Label htmlFor="company" className="mb-2 block">
                        Company (Optional)
                    </Label>
                    <Input
                        id="company"
                        {...register("company")}
                        placeholder="Acme Inc."
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Project Type */}
                    <div>
                        <Label htmlFor="projectType" className="mb-2 block">
                            Project Type <span className="text-red-500">*</span>
                        </Label>
                        <select
                            id="projectType"
                            {...register("projectType", {
                                required: "Please select a project type",
                            })}
                            className={`w-full h-10 px-3 rounded-md border bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer hover:border-royal-300 dark:hover:border-royal-600 transition-colors ${
                                errors.projectType
                                    ? "border-red-500 dark:border-red-500"
                                    : "border-input"
                            }`}
                        >
                            <option value="">Select a type</option>
                            <option value="shopify">Shopify Development</option>
                            <option value="webapp">Web Application</option>
                            <option value="automation">
                                Automation/Integration
                            </option>
                            <option value="consulting">
                                Technical Consulting
                            </option>
                            <option value="other">Other</option>
                        </select>
                        {errors.projectType && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.projectType.message}
                            </p>
                        )}
                    </div>

                    {/* Budget */}
                    <div>
                        <Label htmlFor="budget" className="mb-2 block">
                            Budget <span className="text-red-500">*</span>
                        </Label>
                        <select
                            id="budget"
                            {...register("budget", {
                                required: "Please select a budget range",
                            })}
                            className={`w-full h-10 px-3 rounded-md border bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer hover:border-royal-300 dark:hover:border-royal-600 transition-colors ${
                                errors.budget
                                    ? "border-red-500 dark:border-red-500"
                                    : "border-input"
                            }`}
                        >
                            <option value="">Select a range</option>
                            <option value="<10k">&lt; $10,000</option>
                            <option value="10-25k">$10,000 - $25,000</option>
                            <option value="25-50k">$25,000 - $50,000</option>
                            <option value="50k+">$50,000+</option>
                        </select>
                        {errors.budget && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.budget.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Timeline */}
                <div>
                    <Label htmlFor="timeline" className="mb-2 block">
                        Timeline <span className="text-red-500">*</span>
                    </Label>
                    <select
                        id="timeline"
                        {...register("timeline", {
                            required: "Please select a timeline",
                        })}
                        className={`w-full h-10 px-3 rounded-md border bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer hover:border-royal-300 dark:hover:border-royal-600 transition-colors ${
                            errors.timeline
                                ? "border-red-500 dark:border-red-500"
                                : "border-input"
                        }`}
                    >
                        <option value="">Select a timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-2 months">1-2 Months</option>
                        <option value="3-6 months">3-6 Months</option>
                        <option value="6+ months">6+ Months</option>
                    </select>
                    {errors.timeline && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.timeline.message}
                        </p>
                    )}
                </div>

                {/* Message */}
                <div>
                    <Label htmlFor="message" className="mb-2 block">
                        Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                        id="message"
                        {...register("message", {
                            required: "Message is required",
                            minLength: {
                                value: 10,
                                message:
                                    "Message must be at least 10 characters",
                            },
                        })}
                        placeholder="Tell me about your project, goals, and any specific requirements..."
                        rows={6}
                        className={
                            errors.message
                                ? "border-red-500 dark:border-red-500"
                                : ""
                        }
                    />
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.message.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-royal-700 hover:bg-royal-800 text-white cursor-pointer disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.02]"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                        </>
                    )}
                </Button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    By submitting this form, you agree to be contacted about
                    your inquiry. I typically respond within 24 hours.
                </p>
            </form>
        </Card>
    );
}
