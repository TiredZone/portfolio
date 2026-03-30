"use server";

import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const newsletterSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
});

export async function subscribeToNewsletter(formData: FormData) {
    const rawEmail = formData.get("email");

    const result = newsletterSchema.safeParse({ email: rawEmail });

    if (!result.success) {
        return {
            success: false,
            error: result.error.message,
        };
    }

    const { email } = result.data;

    try {
        const audienceId = process.env.RESEND_AUDIENCE_ID;

        if (!audienceId) {
            console.error("RESEND_AUDIENCE_ID is not configured");
            return {
                success: false,
                error: "Newsletter signup is temporarily unavailable. Please try again later.",
            };
        }

        await resend.contacts.create({
            email,
            audienceId,
            unsubscribed: false,
        });

        return {
            success: true,
            message: "Thanks for subscribing! You'll hear from me soon.",
        };
    } catch (error: unknown) {
        // Resend returns a specific error if the contact already exists
        if (
            error instanceof Error &&
            error.message?.includes("already exists")
        ) {
            return {
                success: true,
                message: "You're already subscribed! Thanks for your interest.",
            };
        }

        console.error("Newsletter subscription error:", error);
        return {
            success: false,
            error: "Something went wrong. Please try again later.",
        };
    }
}
