import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface CaseStudyFrontmatter {
    title: string;
    description: string;
    client: string;
    duration: string;
    role: string;
    tech: string[];
    image: string;
    featured: boolean;
    metrics: Array<{
        label: string;
        value: string;
    }>;
    publishedAt: string;
}

export interface CaseStudy {
    slug: string;
    frontmatter: CaseStudyFrontmatter;
    content: string;
}

export interface BlogPostFrontmatter {
    title: string;
    description: string;
    publishedAt: string;
    tags?: string[];
    featured?: boolean;
    readingTime?: number;
}

export interface BlogPost {
    slug: string;
    frontmatter: BlogPostFrontmatter;
    content: string;
}

// Get all MDX files from a directory
function getMDXFiles(dir: string): string[] {
    const files = fs.readdirSync(dir);
    return files.filter((file) => file.endsWith(".mdx"));
}

// Read and parse a single MDX file
function readMDXFile(filePath: string) {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(rawContent);
    return {
        frontmatter: data,
        content,
    };
}

// Get all case studies
export function getAllCaseStudies(): CaseStudy[] {
    const caseStudiesDir = path.join(process.cwd(), "content", "case-studies");

    if (!fs.existsSync(caseStudiesDir)) {
        return [];
    }

    const files = getMDXFiles(caseStudiesDir);

    return files
        .map((file) => {
            const slug = file.replace(".mdx", "");
            const filePath = path.join(caseStudiesDir, file);
            const { frontmatter, content } = readMDXFile(filePath);

            return {
                slug,
                frontmatter: frontmatter as CaseStudyFrontmatter,
                content,
            };
        })
        .sort((a, b) => {
            // Sort by publishedAt date, newest first
            return (
                new Date(b.frontmatter.publishedAt).getTime() -
                new Date(a.frontmatter.publishedAt).getTime()
            );
        });
}

// Get a single case study by slug
export function getCaseStudyBySlug(slug: string): CaseStudy | null {
    const caseStudiesDir = path.join(process.cwd(), "content", "case-studies");
    const filePath = path.join(caseStudiesDir, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const { frontmatter, content } = readMDXFile(filePath);

    return {
        slug,
        frontmatter: frontmatter as CaseStudyFrontmatter,
        content,
    };
}

// Get all blog posts
export function getAllBlogPosts(): BlogPost[] {
    const blogDir = path.join(process.cwd(), "content", "blog");

    if (!fs.existsSync(blogDir)) {
        return [];
    }

    const files = getMDXFiles(blogDir);

    return files
        .map((file) => {
            const slug = file.replace(".mdx", "");
            const filePath = path.join(blogDir, file);
            const { frontmatter, content } = readMDXFile(filePath);

            return {
                slug,
                frontmatter: frontmatter as BlogPostFrontmatter,
                content,
            };
        })
        .sort((a, b) => {
            // Sort by publishedAt date, newest first
            return (
                new Date(b.frontmatter.publishedAt).getTime() -
                new Date(a.frontmatter.publishedAt).getTime()
            );
        });
}

// Get a single blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | null {
    const blogDir = path.join(process.cwd(), "content", "blog");
    const filePath = path.join(blogDir, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const { frontmatter, content } = readMDXFile(filePath);

    return {
        slug,
        frontmatter: frontmatter as BlogPostFrontmatter,
        content,
    };
}

// Get all case study slugs for static generation
export function getAllCaseStudySlugs(): string[] {
    const caseStudies = getAllCaseStudies();
    return caseStudies.map((caseStudy) => caseStudy.slug);
}

// Get all blog post slugs for static generation
export function getAllBlogPostSlugs(): string[] {
    const blogPosts = getAllBlogPosts();
    return blogPosts.map((post) => post.slug);
}
