import { NextResponse } from "next/server";

export async function GET() {
    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Bechara El Maalouf - Blog</title>
    <description>Technical articles and insights about web development, Shopify, and automation</description>
    <link>https://becharaelmaalouf.com</link>
    <language>en-us</language>
    <category>Technology</category>
    <image>
      <url>https://becharaelmaalouf.com/images/og/og-image.png</url>
      <title>Bechara El Maalouf - Blog</title>
      <link>https://becharaelmaalouf.com</link>
    </image>
  </channel>
</rss>`;

    return new NextResponse(rss, {
        headers: {
            "Content-Type": "application/rss+xml",
        },
    });
}
