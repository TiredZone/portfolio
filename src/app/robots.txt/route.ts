import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/config";

export async function GET() {
    const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteConfig.url}/sitemap.xml`;

    return new NextResponse(robotsTxt, {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}
