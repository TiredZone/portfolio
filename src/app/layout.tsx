// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_SITE_URL ?? "https://becharaelmaalouf.dev"
    ),
    title: {
        default: "Bechara El Maalouf – Senior Web Architect",
        template: "%s · Bechara El Maalouf",
    },
    description:
        "Crafting premium digital experiences that drive results. Specialized in scalable architectures and conversion optimization.",
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            {
                url: "/favicon/favicon.ico",
                sizes: "32x32",
                type: "image/x-icon",
            },
        ],
        apple: [
            {
                url: "/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
        shortcut: "/favicon.ico",
    },
    openGraph: {
        type: "website",
        url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://becharaelmaalouf.dev",
        siteName: "Bechara El Maalouf",
        title: "Bechara El Maalouf – Senior Web Architect",
        description:
            "Crafting premium digital experiences that drive results. Specialized in scalable architectures and conversion optimization.",
        images: [{ url: "/images/og/cover.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        site: "@becharaelm",
        creator: "@becharaelm",
        title: "Bechara El Maalouf – Senior Web Architect",
        description:
            "Crafting premium digital experiences that drive results. Specialized in scalable architectures and conversion optimization.",
        images: ["/images/og/cover.jpg"],
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#1e1b4b" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={[
                    geistSans.variable,
                    geistMono.variable,
                    playfair.variable, // gives you font-serif via --font-playfair
                    "antialiased",
                ].join(" ")}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    {children}
                </ThemeProvider>
                <SpeedInsights />

                {/* GA4 (optional) */}
                {process.env.NEXT_PUBLIC_GA4_ID && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
                            strategy="afterInteractive"
                        />
                        <Script id="ga4" strategy="afterInteractive">
                            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}', { send_page_view: true });
              `}
                        </Script>
                    </>
                )}

                {/* Cloudflare Web Analytics (optional) */}
                {process.env.NEXT_PUBLIC_CF_ANALYTICS && (
                    <Script
                        defer
                        src="https://static.cloudflareinsights.com/beacon.min.js"
                        data-cf-beacon={JSON.stringify({
                            token: process.env.NEXT_PUBLIC_CF_ANALYTICS,
                        })}
                    />
                )}
            </body>
        </html>
    );
}
