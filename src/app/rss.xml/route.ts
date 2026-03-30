import { NextResponse } from "next/server";
import { getAllBlogPosts } from "@/lib/mdx";
import { siteConfig } from "@/lib/config";

export async function GET() {
    const baseUrl = siteConfig.url;
    const blogPosts = getAllBlogPosts();

    const items = blogPosts
        .map(
            (post) => `    <item>
      <title>${escapeXml(post.frontmatter.title)}</title>
      <description>${escapeXml(post.frontmatter.description)}</description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <pubDate>${new Date(post.frontmatter.publishedAt).toUTCString()}</pubDate>
    </item>`
        )
        .join("\n");

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${siteConfig.name} - Blog</title>
    <description>Technical articles and insights about web development, Shopify, and automation</description>
    <link>${baseUrl}</link>
    <language>en-us</language>
    <category>Technology</category>
${items}
  </channel>
</rss>`;

    return new NextResponse(rss, {
        headers: {
            "Content-Type": "application/rss+xml",
        },
    });
}

function escapeXml(text: string): string {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}
