"use server";

import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    company: z.string().optional(),
    projectType: z.enum(
        ["shopify", "webapp", "automation", "consulting", "other"],
        "Please select a project type",
    ),
    budget: z.enum(["<10k", "10-25k", "25-50k", "50k+"], "Please select a budget range"),
    timeline: z.enum(["asap", "1-2 months", "3-6 months", "6+ months"], "Please select a timeline"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function sendContactForm(data: z.infer<typeof contactSchema>) {
    try {
        // Validate the data
        const validatedData = contactSchema.parse(data);

        // Map project type for better display
        const projectTypeLabels: Record<typeof validatedData.projectType, string> = {
            shopify: "Shopify Development",
            webapp: "Web Application",
            automation: "Automation/Integration",
            consulting: "Technical Consulting",
            other: "Other",
        };

        // Send email via Resend
        const result = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: process.env.CONTACT_EMAIL || "contact@becharaelmaalouf.dev",
            replyTo: validatedData.email,
            subject: `New Project Inquiry: ${projectTypeLabels[validatedData.projectType]} - ${validatedData.name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4338ca; border-bottom: 2px solid #ffc23d; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4338ca; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
            <p><strong>Company:</strong> ${validatedData.company || "Not provided"}</p>
          </div>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4338ca; margin-top: 0;">Project Details</h3>
            <p><strong>Project Type:</strong> ${projectTypeLabels[validatedData.projectType]}</p>
            <p><strong>Budget:</strong> ${validatedData.budget}</p>
            <p><strong>Timeline:</strong> ${validatedData.timeline}</p>
          </div>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4338ca; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${validatedData.message}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            This email was sent from your portfolio contact form at ${new Date().toLocaleString()}.
          </p>
        </div>
      `,
        });

        if (result.error) {
            throw new Error(result.error.message);
        }

        return {
            success: true,
            message: "Thank you! I'll be in touch within 24 hours.",
        };
    } catch (error) {
        console.error("Contact form error:", error);
        return {
            success: false,
            message:
                "Something went wrong. Please try emailing me directly at contact@becharaelmaalouf.dev",
        };
    }
}
