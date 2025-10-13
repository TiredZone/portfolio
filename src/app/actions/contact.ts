"use server";

import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.email("Invalid email address"),
    company: z.string().optional(),
    projectType: z.enum(
        ["shopify", "webapp", "automation", "consulting", "other"],
        "Please select a project type"
    ),
    budget: z.enum(
        ["<10k", "10-25k", "25-50k", "50k+"],
        "Please select a budget range"
    ),
    timeline: z.enum(
        ["asap", "1-2 months", "3-6 months", "6+ months"],
        "Please select a timeline"
    ),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function sendContactForm(data: z.infer<typeof contactSchema>) {
    try {
        const validatedData = contactSchema.parse(data);

        const projectTypeLabels = {
            shopify: "Shopify Development",
            webapp: "Web Application",
            automation: "Automation/Integration",
            consulting: "Technical Consulting",
            other: "Other",
        } as const;

        const fromAddress =
            process.env.FROM_EMAIL || "hello@updates.becharaelmaalouf.dev";

        const contactEmail =
            process.env.CONTACT_EMAIL || "contact@becharaelmaalouf.dev";

        const now = new Date();

        // Format timestamp in Beirut time
        const beirutTime = new Intl.DateTimeFormat("en-GB", {
            dateStyle: "medium",
            timeStyle: "short",
            timeZone: "Asia/Beirut",
        }).format(now);

        // Preheader for better inbox preview
        const preheader = `New ${projectTypeLabels[validatedData.projectType]} inquiry from ${validatedData.name}`;

        const html = `
      <!-- Preheader (hidden) -->
      <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
        ${preheader}
      </div>

      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4338ca; border-bottom: 2px solid #ffc23d; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>

        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #4338ca; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
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
          Sent from your portfolio contact form • ${beirutTime} (Asia/Beirut)
        </p>
      </div>
    `;

        const text = `New Contact Form Submission

Contact Information
- Name: ${validatedData.name}
- Email: ${validatedData.email}
- Company: ${validatedData.company || "Not provided"}

Project Details
- Project Type: ${projectTypeLabels[validatedData.projectType]}
- Budget: ${validatedData.budget}
- Timeline: ${validatedData.timeline}

Message
${validatedData.message}

Sent at ${beirutTime} (Asia/Beirut)
`;

        const result = await resend.emails.send({
            from: `Bechara - Portfolio <${fromAddress}>`,
            to: contactEmail,
            replyTo: validatedData.email,
            subject: `[Contact Form] ${projectTypeLabels[validatedData.projectType]} - ${validatedData.name}`,
            html,
            text,
            headers: {
                "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
                "List-Unsubscribe": `<mailto:${contactEmail}>`,
            },
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
