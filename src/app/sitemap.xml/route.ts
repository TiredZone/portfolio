import { NextResponse } from "next/server";
import { getAllCaseStudies, getAllBlogPosts } from "@/lib/mdx";
import { siteConfig } from "@/lib/config";

export async function GET() {
    const baseUrl = siteConfig.url;

    const staticPages = [
        { loc: "", changefreq: "yearly", priority: "1.0" },
        { loc: "/about", changefreq: "monthly", priority: "0.8" },
        { loc: "/services", changefreq: "monthly", priority: "0.8" },
        { loc: "/work", changefreq: "weekly", priority: "0.7" },
        { loc: "/blog", changefreq: "weekly", priority: "0.7" },
        { loc: "/contact", changefreq: "monthly", priority: "0.8" },
    ];

    const caseStudies = getAllCaseStudies();
    const blogPosts = getAllBlogPosts();

    const staticUrls = staticPages
        .map(
            (page) => `  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
        )
        .join("\n");

    const caseStudyUrls = caseStudies
        .map(
            (study) => `  <url>
    <loc>${baseUrl}/work/${study.slug}</loc>
    <lastmod>${new Date(study.frontmatter.publishedAt).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
        )
        .join("\n");

    const blogUrls = blogPosts
        .map(
            (post) => `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.frontmatter.publishedAt).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
        )
        .join("\n");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${caseStudyUrls}
${blogUrls}
</urlset>`;

    return new NextResponse(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
