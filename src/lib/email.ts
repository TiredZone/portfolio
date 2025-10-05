// Email utilities - Resend configuration and templates
export const emailConfig = {
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL || "contact@becharaelmaalouf.dev",
};
