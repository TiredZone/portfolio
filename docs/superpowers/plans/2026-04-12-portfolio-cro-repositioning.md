# Portfolio CRO Repositioning — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the portfolio from "Full-Stack Developer" generalist positioning to "Shopify CRO Specialist" — a complete content, copy, and positioning overhaul across all pages.

**Architecture:** This is a content overhaul, not a structural refactoring. The component architecture, routing, styling, and animations all stay. We're changing text content, data arrays, and configuration values across ~25 files. The work is organized in 7 layers where each layer builds on the identity established by the previous one.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, Framer Motion, MDX

**Spec:** `docs/superpowers/specs/2026-04-12-portfolio-cro-repositioning-design.md`

---

### Task 1: Sitewide Config & SEO Metadata

**Files:**
- Modify: `src/lib/config.ts`
- Modify: `src/lib/seo.ts`

- [ ] **Step 1: Update site config**

In `src/lib/config.ts`, replace the `title` and `description` fields:

```
Old: title: "Bechara El Maalouf - Full-Stack Developer"
New: title: "Bechara El Maalouf - Shopify CRO Specialist"

Old: "Full-Stack Developer specializing in React, Node.js, and Shopify Plus. Delivered 32% revenue increase for $2M/mo ecommerce brands through performance optimization and automation."
New: "Shopify CRO Specialist. 3+ years optimizing 7-to-9 figure Shopify stores. $500K+ in documented CRO revenue across 8+ DTC brands."
```

- [ ] **Step 2: Update SEO — Person schema jobTitle**

In `src/lib/seo.ts`, in the `personSchema`, change:
```
Old: jobTitle: "Full-Stack Developer"
New: jobTitle: "Shopify CRO Specialist"
```

- [ ] **Step 3: Update SEO — knowsAbout array**

In `src/lib/seo.ts`, replace the `knowsAbout` array in `personSchema` with CRO-first ordering:
```typescript
knowsAbout: [
    "Conversion Rate Optimization",
    "A/B Testing",
    "Shopify Plus",
    "Shopify Theme Development",
    "Google Analytics 4",
    "Google Tag Manager",
    "Microsoft Clarity",
    "Core Web Vitals",
    "E-commerce Optimization",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "n8n Automation",
    "ETL Pipelines",
    "Python",
    "Docker",
    "CI/CD",
    "PostgreSQL",
    "GraphQL",
],
```

- [ ] **Step 4: Update SEO — keywords meta tag**

In `src/lib/seo.ts`, in `additionalMetaTags`, replace the keywords `content` string with:
```
"Bechara El Maalouf, Shopify CRO Specialist, Conversion Rate Optimization, A/B Testing, Shopify Plus, Shopify Developer, CRO Consultant, Ecommerce Optimization, Revenue Optimization, Google Analytics 4, GTM, Microsoft Clarity, React, Next.js, Node.js, TypeScript, n8n Automation, ETL Pipelines, Lebanon Developer, Remote Developer"
```

- [ ] **Step 5: Update per-page metadata**

In `src/app/(marketing)/page.tsx`, add a metadata export (currently has none — uses default from config):
```typescript
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Bechara El Maalouf — Shopify CRO Specialist | I Turn Traffic Into Revenue",
    description: "Shopify CRO Specialist. 3+ years optimizing 7-to-9 figure Shopify stores. $500K+ in documented CRO revenue. Book a free audit.",
};
```

In `src/app/(marketing)/about/page.tsx`, update the `generateMetadata` call:
```
title: "About Bechara El Maalouf — From Web3 to $500K+ in CRO Revenue"
description: "From building decentralized exchanges to generating $500K+ in CRO revenue for Shopify stores. The story of how I became a CRO specialist."
```

In `src/app/(marketing)/services/page.tsx`, update the `generateMetadata` call:
```
title: "Shopify CRO & Development Services — Transparent Pricing"
description: "CRO audits, Shopify optimization, automation, and consulting. Transparent pricing. Every engagement measured by revenue generated."
```

In `src/app/(marketing)/work/page.tsx`, update the `metadata` export:
```
title: "CRO Case Studies — $500K+ Revenue Generated for Shopify Stores"
description: "Real CRO case studies with documented results. 32% revenue increases, 167% conversion lifts, 90+ A/B tests across 8+ DTC brands."
```

In `src/app/(marketing)/blog/page.tsx`, update the metadata:
```
title: "Shopify CRO Blog — Conversion Optimization & Revenue Growth"
description: "A/B test breakdowns, CRO tactics, and lessons from optimizing 7-to-9 figure Shopify stores."
```

In `src/app/(marketing)/contact/page.tsx`, update the metadata:
```
title: "Work With Me — Book a Free Shopify CRO Audit"
description: "Book a free 30-minute CRO audit. I'll review your Shopify store, identify conversion killers, and give you 3 actionable wins."
```

- [ ] **Step 6: Commit**

```bash
git add src/lib/config.ts src/lib/seo.ts src/app/\(marketing\)/about/page.tsx src/app/\(marketing\)/services/page.tsx src/app/\(marketing\)/work/page.tsx src/app/\(marketing\)/blog/page.tsx src/app/\(marketing\)/contact/page.tsx
git commit -m "feat: update sitewide config, SEO metadata, and per-page titles to CRO positioning"
```

---

### Task 2: Navigation & Footer

**Files:**
- Modify: `src/components/layout/navbar.tsx`
- Modify: `src/components/layout/footer.tsx`

- [ ] **Step 1: Update navbar CTA (desktop)**

In `navbar.tsx`, find `Book a Call` (desktop, around line 270) and replace with `Book a Free Audit`.

- [ ] **Step 2: Update navbar CTA (mobile)**

In `navbar.tsx`, find the second `Book a Call` (mobile menu, around line 340) and replace with `Book a Free Audit`.

- [ ] **Step 3: Update footer tagline**

In `footer.tsx`, replace:
```
Old: "Full-Stack Developer specializing in Shopify Plus, React, Node.js, and automation solutions."
New: "Shopify CRO specialist. I find where your store leaks revenue, fix it, and prove it worked."
```

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/navbar.tsx src/components/layout/footer.tsx
git commit -m "feat: update nav CTA to 'Book a Free Audit' and footer tagline to CRO positioning"
```

---

### Task 3: Homepage Hero

**Files:**
- Modify: `src/components/features/hero.tsx`

- [ ] **Step 1: Update hero badge**

Replace:
```
Old: "CRO & Shopify Developer — Revenue-Focused Engineering"
New: "Shopify CRO Specialist — I Turn Traffic Into Revenue"
```

- [ ] **Step 2: Update hero body copy**

Replace the body paragraph text:
```
Old: Full-stack developer helping{" "}<span className="text-gold-400 font-bold">$2M/mo brands</span>{" "}turn performance problems into 32% revenue increases — through Shopify optimization, automation, and strategic development.
New: CRO specialist helping{" "}<span className="text-gold-400 font-bold">7-to-9 figure Shopify stores</span>{" "}turn performance problems into 32% revenue increases. I find where your funnel leaks money, fix it inside your Shopify theme, test it, and prove it worked.
```

- [ ] **Step 3: Update hero CTAs**

Primary CTA text: `"Book a Strategy Call"` -> `"Get a Free CRO Audit"`
Secondary CTA text: `"View Case Studies"` -> `"See My Results"`

- [ ] **Step 4: Update trust strip**

Replace:
```
Old: "Trusted by brands generating $2M+/mo in revenue"
New: "3+ years optimizing 7-to-9 figure Shopify stores at a performance marketing agency"
```

- [ ] **Step 5: Commit**

```bash
git add src/components/features/hero.tsx
git commit -m "feat: update homepage hero to CRO specialist positioning"
```

---

### Task 4: Metrics, Results Showcase & Featured Work Heading

**Files:**
- Modify: `src/components/features/metrics-impact.tsx`
- Modify: `src/components/features/animated-homepage.tsx`

- [ ] **Step 1: Update metrics disclaimer**

In `metrics-impact.tsx`, replace the disclaimer text:
```
Old: "Results from work at a performance marketing agency. Client names anonymized per confidentiality agreements."
New: "Real results from 3+ years of CRO work. Client names anonymized per confidentiality agreements — every number is documented."
```

- [ ] **Step 2: Add SSR-safe fallback for count-up**

In `metrics-impact.tsx`, update the `CountUp` component to show the target value in a `<noscript>` tag or as the initial render value. Change the `useState(0)` to `useState(target)` so the HTML always contains the real number, and only animate if JS is available:

```typescript
function CountUp({ target, duration = 1.8, started }: { target: number; duration?: number; started: boolean }) {
    const [count, setCount] = useState(target);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!started || hasAnimated.current) return;
        hasAnimated.current = true;
        setCount(0); // Reset to 0 to start animation

        let startTime: number | null = null;
        let rafId: number;

        function animate(timestamp: number) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));

            if (progress < 1) {
                rafId = requestAnimationFrame(animate);
            }
        }

        rafId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafId);
    }, [started, target, duration]);

    return <>{count}</>;
}
```

Add `useRef` to the imports from React.

- [ ] **Step 3: Update results showcase card 2**

In `animated-homepage.tsx`, find the second results card (currently "15+" / "Production Pipelines" / "Enterprise Automation"). Replace:
```
"15+" -> "90+"
"Production Pipelines" -> "A/B Tests Executed"
"Enterprise Automation" -> "Hypothesis-driven testing on real Shopify stores"
```

Also change the icon from `Zap` to `Target` (add Target to lucide imports if not already present).

- [ ] **Step 4: Update featured work section heading**

In `animated-homepage.tsx`, find the featured work subheading:
```
Old: "Real projects, real results. See how I help businesses grow through strategic development."
New: "Real CRO wins, real revenue. Every project here drove measurable business outcomes."
```

- [ ] **Step 5: Commit**

```bash
git add src/components/features/metrics-impact.tsx src/components/features/animated-homepage.tsx
git commit -m "feat: update metrics SSR fallback, results showcase, and featured work heading"
```

---

### Task 5: Skills Grid — Final Category Names & Tags

**Files:**
- Modify: `src/components/features/skills-grid.tsx`

- [ ] **Step 1: Update category names and tags**

The grid is already at 5 categories from earlier work. Update the names and tags to match the spec exactly:

1. `"CRO & Analytics"` -> `"CRO & Revenue Optimization"`, tags: `["Conversion Rate Optimization", "A/B Testing & Experimentation", "GA4 & GTM", "Microsoft Clarity", "Core Web Vitals", "Heatmap Analysis", "Revenue Attribution", "Funnel Analysis", "Landing Page Optimization"]`

2. `"Shopify & Ecommerce"` -> `"Shopify & E-Commerce"`, tags: `["Shopify Plus", "Liquid Template Engine", "Dawn 2.0", "Custom Sections & Blocks", "Checkout Extensibility", "Theme Development", "Performance Optimization", "Shopify Admin API"]`

3. `"Automation & Data"` -> `"Automation & Data Pipelines"`, tags: `["n8n Visual Workflows", "ETL Pipeline Architecture", "Lead Processing & Scoring", "API Orchestration", "Data Validation", "AI/LLM Integrations", "Production Monitoring", "BigQuery"]`

4. `"Frontend Development"` -> keep name, tags: `["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS", "JavaScript"]`

5. `"Backend & Infrastructure"` -> keep name, tags: `["Node.js/Express", "Python", "REST & GraphQL APIs", "Docker", "Google Cloud Run", "CI/CD", "PostgreSQL", "Redis"]`

- [ ] **Step 2: Commit**

```bash
git add src/components/features/skills-grid.tsx
git commit -m "feat: finalize skills grid category names and tags for CRO positioning"
```

---

### Task 6: Homepage Pricing Table — CRO Tiers

**Files:**
- Modify: `src/components/features/pricing-table.tsx`

- [ ] **Step 1: Replace pricing plans array**

Replace the entire `pricingPlans` array with CRO-focused tiers:

```typescript
const pricingPlans = [
    {
        name: "Free CRO Audit",
        price: "Free",
        period: "30-min call",
        description:
            "I'll review your Shopify store, identify the biggest conversion killers, and give you 3 actionable quick wins — live on the call.",
        features: [
            "Live store walkthrough",
            "Conversion bottleneck identification",
            "3 priority recommendations",
            "Recorded Loom recap",
        ],
        buttonText: "Book Your Audit",
        buttonVariant: "outline" as const,
        popular: false,
        icon: Shield,
        gradient: "from-blue-500 to-cyan-500",
        borderColor: "border-blue-200 dark:border-blue-800",
        hoverGlow: "hover:shadow-blue-500/25",
    },
    {
        name: "CRO Sprint",
        price: "$2,500–$5,000",
        period: "one-time",
        description:
            "A focused conversion optimization project: research, implement, test, and prove results in 4–6 weeks.",
        features: [
            "Full heuristic CRO audit",
            "Heatmap & analytics setup (Clarity + GA4)",
            "3–5 high-impact changes in Shopify",
            "Before/after performance tracking",
            "Detailed results report",
        ],
        buttonText: "Start a Sprint",
        buttonVariant: "default" as const,
        popular: true,
        icon: Zap,
        gradient: "from-gold-500 to-orange-500",
        borderColor: "border-gold-300 dark:border-gold-700",
        hoverGlow: "hover:shadow-gold-500/25",
    },
    {
        name: "Monthly CRO Retainer",
        price: "$3,000–$5,000",
        period: "per month",
        description:
            "Ongoing conversion optimization: continuous testing, implementation, and revenue growth.",
        features: [
            "Monthly CRO roadmap",
            "A/B testing program",
            "Shopify implementation",
            "Weekly reporting",
            "Direct access — no middlemen",
        ],
        buttonText: "Apply for Retainer",
        buttonVariant: "outline" as const,
        popular: false,
        icon: Star,
        gradient: "from-purple-500 to-pink-500",
        borderColor: "border-purple-200 dark:border-purple-800",
        hoverGlow: "hover:shadow-purple-500/25",
    },
];
```

- [ ] **Step 2: Commit**

```bash
git add src/components/features/pricing-table.tsx
git commit -m "feat: replace homepage pricing with CRO-focused tiers"
```

---

### Task 7: FAQ — Complete Rewrite

**Files:**
- Modify: `src/components/features/faq.tsx`

- [ ] **Step 1: Replace entire faqs array**

Replace the `faqs` array with 8 CRO-focused questions. Keep the same data structure (`id`, `question`, `answer`, `category`):

```typescript
const faqs = [
    {
        id: 1,
        question: "What kind of results can I expect?",
        answer: "Every store is different, but across 3+ years of CRO work for 7-to-9 figure Shopify stores, I've delivered results ranging from 32% revenue increases to 167% conversion rate lifts. I'll give you an honest assessment of what's realistic for your store during our free audit call.",
        category: "Results",
    },
    {
        id: 2,
        question: "What size store do you work with?",
        answer: "I work best with Shopify stores doing $50K+/month in revenue with consistent traffic. At that level, even small conversion improvements translate to meaningful revenue gains. For stores with 10,000+ monthly sessions, I add formal A/B testing to validate changes with statistical confidence.",
        category: "Fit",
    },
    {
        id: 3,
        question: "Do you work with international clients?",
        answer: "Yes. I'm based in Lebanon (GMT+3) but work primarily with US and global clients. I'm fluent in English, French, Arabic, and Spanish. Most communication happens async via Slack/Loom with weekly live check-ins.",
        category: "Availability",
    },
    {
        id: 4,
        question: "What's your process?",
        answer: "Discovery call \u2192 CRO audit (heatmaps, analytics, heuristic review) \u2192 Prioritized roadmap \u2192 Implementation in your Shopify theme \u2192 Testing \u2192 Results reporting. I don't hand you a PDF and disappear \u2014 I find what's broken, build the fix, test it, and prove it worked.",
        category: "Process",
    },
    {
        id: 5,
        question: "Do you also do Shopify development?",
        answer: "Yes. Unlike most CRO consultants who give you recommendations and leave, I'm also a Shopify developer. I implement changes directly in your Liquid theme \u2014 no need to hire a separate dev to execute on CRO recommendations.",
        category: "Technical",
    },
    {
        id: 6,
        question: "What tools do you use?",
        answer: "Google Analytics 4, Microsoft Clarity (heatmaps & session recordings), Google Tag Manager, Shopify analytics, and A/B testing platforms appropriate for your traffic level. Most tools are free or low-cost.",
        category: "Technical",
    },
    {
        id: 7,
        question: "How do you ensure code quality and security?",
        answer: "I follow industry best practices including code reviews, automated testing, security audits, and performance monitoring. All code is written with scalability and maintainability in mind. I also implement proper authentication, data validation, and follow OWASP security guidelines.",
        category: "Quality",
    },
    {
        id: 8,
        question: "What is your payment structure?",
        answer: "For sprints: 50% upfront, 50% on completion. For retainers: monthly billing with 30-day cancellation after the initial 3-month commitment. All prices in USD.",
        category: "Payment",
    },
];
```

- [ ] **Step 2: Commit**

```bash
git add src/components/features/faq.tsx
git commit -m "feat: rewrite FAQ with CRO-focused questions and answers"
```

---

### Task 8: Newsletter & Homepage Bottom CTA

**Files:**
- Modify: `src/components/features/newsletter-signup.tsx`
- Modify: `src/components/features/animated-homepage.tsx`

- [ ] **Step 1: Update newsletter button text**

In `newsletter-signup.tsx`, replace `"Subscribe"` with `"Get the Teardowns"`.

- [ ] **Step 2: Update homepage newsletter section**

In `animated-homepage.tsx`, find the newsletter section heading and body:
```
Old heading: "Stay in the Loop"
New heading: "Free Shopify CRO Teardowns"

Old body: "Get insights on e-commerce optimization, automation, and development — delivered to your inbox."
New body: "Every week, I audit a real Shopify store and share exactly what I'd fix to increase conversions. Get the breakdown in your inbox."
```

- [ ] **Step 3: Update homepage bottom CTA body and buttons**

In `animated-homepage.tsx`, the heading is already "Let's Find the Revenue You're Leaving on the Table" from earlier. Update the body and CTAs:

```
Old body: "Book a free 30-minute strategy call. I'll audit your store, identify conversion leaks, and outline a plan to increase revenue."
New body: "Book a free 30-minute CRO audit. I'll review your store, identify conversion leaks, and give you 3 actionable wins — no commitment."

Old primary CTA: "Schedule a Call"
New primary CTA: "Book Your Free Audit"

Old secondary CTA text: "View Services"
New secondary CTA text: "See My Results"
Old secondary CTA link: "/services"
New secondary CTA link: "/work"
```

- [ ] **Step 4: Commit**

```bash
git add src/components/features/newsletter-signup.tsx src/components/features/animated-homepage.tsx
git commit -m "feat: update newsletter to CRO teardowns and bottom CTA copy"
```

---

### Task 9: About Page — Hero, Narrative & Values

**Files:**
- Modify: `src/app/(marketing)/about/page.tsx`

- [ ] **Step 1: Update about hero badge**

Replace `"Full-Stack Developer"` badge text with `"Shopify CRO Specialist"`.

- [ ] **Step 2: Update about hero headline**

```
Old: "From Web3 to" ... "Revenue." ... "How I Got Here."
New: "From Web3 to" ... "$500K+ in CRO" ... "Revenue."
```

- [ ] **Step 3: Update about hero body**

```
Old: "I went from building decentralized exchanges to generating $500K+ in CRO revenue for ecommerce brands. Here's the story."
New: "I spent 3+ years running CRO for 7-to-9 figure Shopify stores at a performance marketing agency — real A/B tests, real revenue lifts, real implementation inside Shopify themes. Here's how I got here and where I'm going."
```

- [ ] **Step 4: Update tech badges**

Replace the badges array:
```
Old: ["React & Next.js", "Node.js & .NET", "Mobile & Cloud", "AI Automation"]
New: ["Shopify & CRO", "A/B Testing & Analytics", "Automation & ETL", "Full-Stack Development"]
```

- [ ] **Step 5: Update achievement cards**

Replace the `achievements` array values/labels/descriptions:
```typescript
{ icon: Trophy, value: "$500K+", label: "Revenue Generated", description: "Through CRO optimization", color/bg: keep gold },
{ icon: Code, value: "8+", label: "DTC Brands Optimized", description: "Across Shopify stores", color/bg: keep royal },
{ icon: Users, value: "90+", label: "A/B Tests Executed", description: "Hypothesis-driven testing", color/bg: keep green },
{ icon: Clock, value: "3+", label: "Years of CRO", description: "At a performance marketing agency", color/bg: keep blue },
```

- [ ] **Step 6: Rewrite the about narrative**

Replace the two `<p>` paragraphs in the prose section with 4 paragraphs:

Paragraph 1: "I started in Web3 — building decentralized exchanges, SDKs, and NFT platforms at Orcania. It was technically fascinating but disconnected from real business impact."

Paragraph 2: "Then I joined BAD Marketing as a CRO Web Developer, and everything changed. For the first time, I could measure the exact revenue impact of my code. A layout change I made based on heatmap data? 77% homepage conversion lift. A full-site CRO overhaul for a luxury brand? 167% conversion rate increase with half the ad spend. Over 3 years, the CRO work I led generated over $500K in measurable revenue across 8+ DTC brands."

Paragraph 3: "Now I combine that CRO methodology with Shopify development skills most CRO consultants don't have. I don't hand you a PDF of recommendations. I find what's broken, build the fix in your Liquid theme, test it, and prove it worked."

Paragraph 4: "I also build high-converting funnels and advertorials at CROEvolution for 7-to-9 figure DTC brands — custom Shopify templates optimized for cold traffic that lower customer acquisition costs. And I'm building CROHound, a CRO agency focused exclusively on Shopify stores."

- [ ] **Step 7: Update key achievement callout box**

Replace the callout text:
```
Line 1: "32% revenue increase for a 7-figure Shopify store — in 15 days"
Line 2: "167% conversion rate lift for a luxury home brand — with half the ad spend"
```

- [ ] **Step 8: Update "What I Ship" card copy**

Update the 4 cards to match spec:
```
Card 1 area: "Shopify & CRO", detail: "Theme builds, A/B tests, checkout optimization — drove 32% revenue increases for 7-figure stores"
Card 2 area: "Automation & ETL", detail: "n8n workflows, data pipelines, lead processing — 50K+ leads/month automated"
Card 3: keep as-is
Card 4 area: "DevOps & Monitoring", detail: "Docker, CI/CD, BigQuery dashboards — 75% faster deployments"
```

- [ ] **Step 9: Update core values**

Replace the `coreValues` array:
```typescript
{ icon: BarChart3, title: "Data Over Opinions", description: "I don't guess. Every change starts with analytics, heatmaps, and user behavior data. If I can't measure it, I don't ship it.", color: "text-gold-600 dark:text-gold-400", bgColor: "bg-gold-50 dark:bg-gold-900/10" },
{ icon: Code, title: "Implementation, Not Recommendations", description: "Most CRO consultants hand you a PDF. I'm also a Shopify developer — I implement changes directly in your theme. No translation layer, no lost-in-handoff.", color: "text-royal-600 dark:text-royal-400", bgColor: "bg-royal-50 dark:bg-royal-900/10" },
{ icon: TrendingUp, title: "Revenue Is the Only Metric", description: "Conversion rate is a means, not an end. I optimize for revenue. Sometimes that means increasing AOV, not just CVR.", color: "text-green-600 dark:text-green-400", bgColor: "bg-green-50 dark:bg-green-900/10" },
```

Update the icon imports at the top: add `BarChart3`, `TrendingUp` if not present. `Code` is already imported.

- [ ] **Step 10: Commit**

```bash
git add src/app/\(marketing\)/about/page.tsx
git commit -m "feat: rewrite About page — hero, narrative, values, achievements for CRO positioning"
```

---

### Task 10: Timeline — Add CROEvolution & Update Entries

**Files:**
- Modify: `src/components/features/timeline.tsx`

- [ ] **Step 1: Add CROEvolution entry and update existing entries**

Replace the entire `experiences` array with:

```typescript
const experiences = [
    {
        year: "Oct 2025 - Present",
        title: "CRO & Funnel Developer",
        company: "CROEvolution (Part-time)",
        description:
            "Build high-converting funnels, advertorials, and listicles for 7-to-9 figure DTC brands. Custom Shopify templates optimized for cold traffic using AI-powered workflows, delivering in 10-14 days to lower customer acquisition costs.",
        icon: TrendingUp,
        metrics: ["10-14 day delivery", "Cold traffic funnels", "Native Shopify code"],
    },
    {
        year: "Oct 2024 - Present",
        title: "Automation Engineer",
        company: "Kalyxi (Part-time)",
        description:
            "Built n8n automation workflows for content generation, lead processing, and sales call analysis, reducing manual work by 75%.",
        icon: Zap,
        metrics: ["3 core workflows", "75% work reduction"],
    },
    {
        year: "Nov 2024 - Feb 2025",
        title: "Shopify Developer",
        company: "Sunday Golf",
        description:
            "Led Dawn 2.0 theme migration implementing bundle builder and mega menu while maintaining sub-2.5s load times.",
        icon: Building2,
        metrics: ["<2.5s load time", "18% conversion increase"],
    },
    {
        year: "Sep 2025 - Present",
        title: "Advanced Systems & Operations Developer",
        company: "BAD Marketing (Remote)",
        description:
            "Promoted to build enterprise automation: ETL platforms connecting ClickUp, BigQuery, and Klaviyo; multi-stage lead processing pipelines; production-grade monitoring systems. Reduced manual operations work by 75%.",
        icon: Award,
        metrics: ["300+ line monolith \u2192 modular", "15+ production pipelines"],
    },
    {
        year: "Sep 2022 - Sep 2025",
        title: "CRO Web Developer",
        company: "BAD Marketing (Remote)",
        description:
            "Led conversion rate optimization for 8+ DTC Shopify brands generating $2M+/mo. Executed 90+ A/B tests, delivered 32% revenue increases, 167% CVR lifts, and $500K+ in attributable revenue. Built CRO tracking systems, heatmap analysis workflows, and testing playbooks.",
        icon: Award,
        metrics: ["$500K+ CRO revenue", "90+ A/B tests", "8+ brands optimized"],
    },
    {
        year: "Jan 2022 - Dec 2022",
        title: "Lead Web3 Developer",
        company: "Orcania (Remote)",
        description:
            "Architected Web3 SDK and multi-chain DEX. Learned to build production systems at scale \u2014 then pivoted to where code drives revenue directly.",
        icon: Calendar,
        metrics: ["Celeste-JS SDK", "Multi-chain DEX"],
    },
];
```

Add `TrendingUp` to the lucide-react imports if not already present.

- [ ] **Step 2: Commit**

```bash
git add src/components/features/timeline.tsx
git commit -m "feat: add CROEvolution to timeline, update CRO role description with 90+ A/B tests"
```

---

### Task 11: Services Page — Hero, CRO Service, Reorder & Process

**Files:**
- Modify: `src/app/(marketing)/services/page.tsx`

- [ ] **Step 1: Update badge text**

```
Old: "Professional Development Services"
New: "CRO & Shopify Development Services"
```

- [ ] **Step 2: Update body copy**

```
Old: "Shopify optimization, automation, and custom builds — priced transparently and measured by the revenue they generate, not the hours they take."
New: "Shopify CRO, theme development, and automation — priced transparently and measured by the revenue they generate, not the hours they take."
```

- [ ] **Step 3: Update achievement metrics**

Replace the 3rd and 4th achievement entries:
```
3rd: value "$5M+" -> "$500K+", label "Revenue Managed" -> "CRO Revenue Generated", description "Client portfolios" -> "Across 8+ DTC brands"
4th: value "99.9%" -> "90+", label "Uptime Target" -> "A/B Tests Executed", description "Performance SLA" -> "Hypothesis-driven testing"
```

- [ ] **Step 4: Add CRO service and reorder services array**

Add a new CRO service at position 0 of the `services` array. Import `TrendingUp` from lucide-react:

```typescript
{
    title: "CRO & Conversion Optimization",
    icon: TrendingUp,
    description:
        "I audit your Shopify store, identify where you're losing revenue, and implement data-backed changes that increase conversions. Research, implementation, testing, and proof — end to end.",
    features: [
        "Heuristic CRO audit",
        "Heatmap & session recording setup",
        "Analytics & funnel analysis",
        "Prioritized conversion roadmap",
        "Shopify theme implementation",
        "A/B testing (traffic permitting)",
        "Before/after results report",
    ],
    results: "+10–30% CVR, 32% revenue increase",
    price: "From $2.5k",
    color: "from-gold-500 to-orange-600",
    bgColor: "bg-gold-50 dark:bg-gold-900/10",
    iconColor: "text-gold-600 dark:text-gold-400",
    whoFor: "Shopify stores doing $50K+/mo that have traffic but aren't converting.",
},
```

Add `whoFor` field to existing services:
- Shopify Development: `whoFor: "Brands launching on Shopify, migrating themes, or needing custom Liquid development."`
- Custom Web Applications: `whoFor: "Startups and businesses needing custom web applications from MVP to enterprise."`
- Automation & Integrations: `whoFor: "Teams drowning in manual data work, lead processing, or disconnected tools."`
- Technical Consulting: `whoFor: "Founders or teams needing expert guidance before committing to a build."`

Update consulting pricing: `"$75/hr"` -> `"$100/hr"` and `"$75/hr (retainer discounts available)"` -> `"$100/hr (retainer discounts available)"` and `price: "$75/hr or Fixed"` -> `price: "$100/hr or Fixed"`

- [ ] **Step 5: Render "Who it's for" in service cards**

In the JSX that renders service cards, after the description `<p>`, add:
```tsx
{service.whoFor && (
    <p className="text-sm text-gold-600 dark:text-gold-400 font-medium mt-2">
        Who it&apos;s for: {service.whoFor}
    </p>
)}
```

- [ ] **Step 6: Update process section**

Replace the `process` array step 1:
```
Old title: "Discovery Call"
New title: "Free CRO Audit"

Old description: "We discuss your goals, challenges, and requirements to understand the full scope of your project."
New description: "I review your store live, identify the biggest conversion killers, and give you 3 actionable wins. If we're a fit, I'll propose next steps."
```

Update all process descriptions to use "I" instead of "We":
- Step 2: "I provide a detailed proposal..." (already "I")
- Step 3: "Regular updates and check-ins ensure we're aligned..." -> "Regular updates and check-ins ensure alignment throughout development with room for feedback."
- Step 4: Keep as-is
- Step 5: Keep as-is

Find and replace the section heading `"Our Collaborative Process"` (if present) with `"How I Work"`.

- [ ] **Step 7: Commit**

```bash
git add src/app/\(marketing\)/services/page.tsx
git commit -m "feat: add CRO service, reorder services, update consulting rate to $100/hr"
```

---

### Task 12: Services Pricing Table — Remove Regional Toggle & Add CRO Tiers

**Files:**
- Modify: `src/components/features/pricing-table-segmented.tsx`

- [ ] **Step 1: Remove regional pricing toggle**

Remove the `Region` type, `region` state, `getPrice` function, and the toggle button JSX. Replace all `getPrice(tier)` calls with `tier.globalPrice`. Remove the `menaPrice` field from the `PricingTier` interface and all tier data. Remove the MENA badge JSX.

Rename `globalPrice` to just `price` in the interface and all data.

- [ ] **Step 2: Add CRO pricing tiers array**

Add before the existing `shopifyTiers`:

```typescript
const croTiers: PricingTier[] = [
    {
        name: "CRO Audit",
        price: "$2,500",
        description: "Full heuristic audit with prioritized roadmap and 5 actionable recommendations",
        scope: [
            "Full-site heuristic review",
            "Heatmap & analytics setup",
            "Funnel drop-off analysis",
            "Mobile UX review",
            "5 prioritized recommendations",
            "Recorded Loom walkthrough",
        ],
        deliverables: [
            "Written CRO audit report",
            "Prioritized implementation roadmap",
            "Analytics baseline documentation",
        ],
        timeline: "1–2 weeks",
    },
    {
        name: "CRO Sprint",
        price: "$5,000–$8,000",
        description: "Audit + implementation of top 3-5 changes + testing + results report",
        scope: [
            "Everything in CRO Audit",
            "Implementation of top 3-5 changes in Shopify",
            "A/B testing setup (traffic permitting)",
            "2 rounds of revisions",
        ],
        deliverables: [
            "All audit deliverables",
            "Implemented changes in theme",
            "Before/after performance report",
            "14-day post-launch monitoring",
        ],
        timeline: "4–6 weeks",
    },
    {
        name: "Monthly CRO Retainer",
        price: "$3,000–$5,000/mo",
        description: "Ongoing optimization: monthly testing roadmap, implementation, reporting. 3-month minimum.",
        scope: [
            "Monthly testing roadmap",
            "2-4 tests/changes per month",
            "Continuous heatmap & analytics review",
            "Shopify theme implementation",
            "Weekly async updates (Loom)",
            "Monthly results report",
        ],
        deliverables: [
            "Monthly CRO report with revenue attribution",
            "Ongoing test documentation",
            "Quarterly strategy review call",
        ],
        timeline: "Ongoing",
    },
];
```

- [ ] **Step 3: Add CRO section to the rendered pricing sections**

Add a CRO pricing section before the Shopify section in the JSX. Follow the same card rendering pattern as existing sections.

- [ ] **Step 4: Update consulting rate**

Find `$75` in the consulting tiers and replace with `$100`. Update retainer discounts: `$68/hr` -> `$90/hr`, `$64/hr` -> `$85/hr`.

- [ ] **Step 5: Commit**

```bash
git add src/components/features/pricing-table-segmented.tsx
git commit -m "feat: remove regional pricing toggle, add CRO pricing tiers, update consulting rate"
```

---

### Task 13: Work Page — Hero & Achievement Cards

**Files:**
- Modify: `src/app/(marketing)/work/page.tsx`

- [ ] **Step 1: Update badge text**

```
Old: "Portfolio & Case Studies"
New: "CRO Results & Case Studies"
```

- [ ] **Step 2: Update body copy**

```
Old: "CRO wins, automation pipelines, and Shopify builds with real data and measurable outcomes. Every project here drove revenue or saved hours."
New: "Every project here drove measurable revenue or saved real hours. Client names anonymized per confidentiality agreements — every number is documented."
```

- [ ] **Step 3: Update achievement cards**

Replace the `achievements` array:
```typescript
{ icon: Trophy, value: "8+", label: "Brands Optimized", description: "DTC Shopify stores", color/bg: keep gold },
{ icon: Users, value: "32%", label: "Peak Revenue Lift", description: "Single store, 15 days", color/bg: keep blue },
{ icon: BarChart3, value: "167%", label: "Peak CVR Increase", description: "With half the ad spend", color/bg: keep green },
{ icon: Globe, value: "90+", label: "A/B Tests Run", description: "Hypothesis-driven", color/bg: keep royal },
```

- [ ] **Step 4: Commit**

```bash
git add src/app/\(marketing\)/work/page.tsx
git commit -m "feat: update Work page hero and achievements to CRO-specific metrics"
```

---

### Task 14: Delete Web3 Case Studies

**Files:**
- Delete: `content/case-studies/orcania-bitnaft-nft-platform.mdx`
- Delete: `content/case-studies/orcania-celeste-web3-sdk.mdx`
- Delete: `content/case-studies/orcania-dex-platform.mdx`
- Delete: `content/case-studies/red-ape-family-nft-ecosystem.mdx`

- [ ] **Step 1: Delete the 4 Web3/Orcania files**

```bash
cd d:/projects/01-active/personal/my_portfolio/bechara-portfolio
rm content/case-studies/orcania-bitnaft-nft-platform.mdx
rm content/case-studies/orcania-celeste-web3-sdk.mdx
rm content/case-studies/orcania-dex-platform.mdx
rm content/case-studies/red-ape-family-nft-ecosystem.mdx
```

- [ ] **Step 2: Commit**

```bash
git add -A content/case-studies/
git commit -m "feat: remove Web3/Orcania case studies — no longer aligned with CRO positioning"
```

---

### Task 15: Merge BAD Marketing Automation Case Studies

**Files:**
- Read: `content/case-studies/bad-marketing-clickup-pipeline.mdx`
- Read: `content/case-studies/bad-marketing-etl-platform.mdx`
- Read: `content/case-studies/bad-marketing-lead-automation.mdx`
- Create: `content/case-studies/bad-marketing-enterprise-automation.mdx`
- Delete: the 3 source files above

- [ ] **Step 1: Read all 3 source files**

Read the full content of each file to understand the content to merge.

- [ ] **Step 2: Create merged file**

Create `content/case-studies/bad-marketing-enterprise-automation.mdx` with combined frontmatter and merged body content. Use the following frontmatter structure:

```yaml
---
title: "Enterprise Data Infrastructure: ClickUp, ETL & Lead Automation at BAD Marketing"
description: "Built the complete data infrastructure at BAD Marketing — ClickUp analytics pipeline, modular ETL platform processing 100K+ events daily, and multi-stage lead automation with 6+ API integrations."
client: "BAD Marketing"
duration: "Sep 2025 - Present"
role: "Advanced Systems & Operations Developer"
tech: ["Node.js", "TypeScript", "Python", "n8n", "BigQuery", "Klaviyo API", "ClickUp API", "ZeroBounce", "MillionVerifier", "Smartlead", "Google Sheets", "Docker"]
featured: true
metrics:
  - { label: "Daily Events Processed", value: "100K+" }
  - { label: "Development Speed", value: "75% faster" }
  - { label: "System Reliability", value: "99.9% uptime" }
  - { label: "API Integrations", value: "6+ services" }
publishedAt: "2026-03-15"
---
```

Merge body content from the 3 files into sections:
1. Overview/intro (combine highlights from each)
2. "ClickUp Analytics Pipeline" section (from clickup-pipeline content)
3. "Modular ETL Platform" section (from etl-platform content)
4. "Lead Processing Automation" section (from lead-automation content)
5. Combined methodology/approach section
6. Key takeaways

- [ ] **Step 3: Delete source files**

```bash
rm content/case-studies/bad-marketing-clickup-pipeline.mdx
rm content/case-studies/bad-marketing-etl-platform.mdx
rm content/case-studies/bad-marketing-lead-automation.mdx
```

- [ ] **Step 4: Commit**

```bash
git add -A content/case-studies/
git commit -m "feat: merge 3 BAD Marketing automation case studies into single enterprise data infrastructure narrative"
```

---

### Task 16: Merge Kalyxi Case Studies

**Files:**
- Read: `content/case-studies/kalyxi-content-automation.mdx`
- Read: `content/case-studies/kalyxi-lead-processing.mdx`
- Read: `content/case-studies/kalyxi-sales-analysis.mdx`
- Read: `content/case-studies/kalyxl-lead-automation.mdx`
- Create: `content/case-studies/kalyxi-complete-automation.mdx`
- Delete: the 4 source files above

- [ ] **Step 1: Read all 4 source files**

Read full content of each file.

- [ ] **Step 2: Create merged file**

Create `content/case-studies/kalyxi-complete-automation.mdx` with:

```yaml
---
title: "Kalyxi: Complete Automation Ecosystem — Content, Leads & Sales Analysis"
description: "Built a comprehensive automation ecosystem at Kalyxi: AI-powered content generation, intelligent lead processing with ZeroBounce validation, and automated sales call analysis — reducing manual work by 75%."
client: "Kalyxi"
duration: "October 2024 - Present"
role: "Automation Engineer (Part-time)"
tech: ["n8n", "OpenAI GPT-4", "ZeroBounce API", "SerpAPI", "Fathom API", "Google Sheets", "Google Docs", "JavaScript"]
featured: true
metrics:
  - { label: "Workflows Deployed", value: "3 Core Systems" }
  - { label: "Manual Work Reduction", value: "75%" }
  - { label: "Processing Efficiency", value: "10x Faster" }
  - { label: "Data Quality", value: "80% Improved" }
publishedAt: "2026-03-01"
---
```

Merge body content into sections:
1. Overview of the complete automation transformation
2. "Content Generation Pipeline" section (from content-automation)
3. "Lead Processing & Validation" section (from lead-processing)
4. "Sales Call Analysis" section (from sales-analysis)
5. Combined architecture overview
6. Key results and takeaways

- [ ] **Step 3: Delete source files**

```bash
rm content/case-studies/kalyxi-content-automation.mdx
rm content/case-studies/kalyxi-lead-processing.mdx
rm content/case-studies/kalyxi-sales-analysis.mdx
rm content/case-studies/kalyxl-lead-automation.mdx
```

- [ ] **Step 4: Commit**

```bash
git add -A content/case-studies/
git commit -m "feat: merge 4 Kalyxi case studies into single comprehensive automation ecosystem narrative"
```

---

### Task 17: Fold BAD Marketing Overview into CRO Mastery & Delete

**Files:**
- Read: `content/case-studies/bad-marketing-shopify-optimization.mdx`
- Modify: `content/case-studies/bad-marketing-cro-mastery.mdx`
- Delete: `content/case-studies/bad-marketing-shopify-optimization.mdx`

- [ ] **Step 1: Read both files**

Read the overview file (`bad-marketing-shopify-optimization.mdx`) and the CRO mastery file.

- [ ] **Step 2: Add relevant content from overview to CRO Mastery**

At the end of the CRO Mastery MDX body, add a section like "## The Full Journey" or similar that incorporates the career arc content from the overview (promotion context, full timeline, skills evolution). Keep the CRO Mastery file as the canonical BAD Marketing case study.

- [ ] **Step 3: Delete the overview file**

```bash
rm content/case-studies/bad-marketing-shopify-optimization.mdx
```

- [ ] **Step 4: Commit**

```bash
git add -A content/case-studies/
git commit -m "feat: fold BAD Marketing overview into CRO Mastery case study, delete standalone overview"
```

---

### Task 18: Blog & Contact Pages

**Files:**
- Modify: `src/app/(marketing)/blog/page.tsx`
- Modify: `src/app/(marketing)/contact/page.tsx`
- Modify: `src/components/features/contact-form.tsx`

- [ ] **Step 1: Update blog headline and tagline**

```
Old headline: "Blog"
New headline: "Shopify CRO Insights"

Old tagline: "Insights on web development, Shopify optimization, and building successful digital experiences"
New tagline: "A/B test breakdowns, conversion optimization tactics, and lessons from optimizing 7-to-9 figure Shopify stores."
```

- [ ] **Step 2: Update blog newsletter section**

```
Old heading: "Never Miss an Update"
New heading: "Free Weekly CRO Teardown"

Old body: "Get notified when I publish new articles about web development, Shopify, and automation."
New body: "I audit a real Shopify store every week and share exactly what I'd change. Get it in your inbox."
```

- [ ] **Step 3: Update contact page headline and body**

```
Old headline: "Let's Work Together"
New headline: "Let's Find Your Revenue Leaks"

Old body: "Have a project in mind? I'd love to hear about it." ... "Book a call or send a message and I'll get back to you within 24 hours."
New body: "Book a free 30-minute CRO audit — I'll review your Shopify store live, identify the biggest conversion killers, and give you 3 actionable wins. No pitch, no pressure."
```

- [ ] **Step 4: Update booking section title**

```
Old: "Book a Free Consultation"
New: "Book Your Free CRO Audit"
```

- [ ] **Step 5: Update contact form project type options**

In `contact-form.tsx`, update the `FormData` type's `projectType` union:
```typescript
projectType: "cro_audit" | "shopify" | "webapp" | "automation" | "consulting" | "employment" | "other";
```

Update the `<option>` elements:
```tsx
<option value="">Select a type</option>
<option value="cro_audit">CRO Audit & Optimization</option>
<option value="shopify">Shopify Development</option>
<option value="automation">Automation/Integration</option>
<option value="consulting">Technical Consulting</option>
<option value="employment">Full-Time / Employment Opportunity</option>
<option value="other">Other</option>
```

Remove the `webapp` option (consolidated into Shopify/other). If the Zod schema validates `projectType`, update it to match the new union.

- [ ] **Step 6: Commit**

```bash
git add src/app/\(marketing\)/blog/page.tsx src/app/\(marketing\)/contact/page.tsx src/components/features/contact-form.tsx
git commit -m "feat: update blog, contact, and form to CRO positioning"
```

---

### Task 19: Sitewide Copy Sweep

**Files:**
- All previously modified files (grep and verify)

- [ ] **Step 1: Search for remaining instances of old copy**

Run grep across the `src/` directory for each pattern. Fix any remaining instances NOT in timeline job titles, filenames, or blog MDX content:

```bash
grep -r "Full-Stack Developer" src/ --include="*.tsx" --include="*.ts" -l
grep -r "Build Something Amazing" src/ --include="*.tsx" --include="*.ts" -l
grep -r "Book a Strategy Call" src/ --include="*.tsx" --include="*.ts" -l
grep -r "Start a Project" src/ --include="*.tsx" --include="*.ts" -l
grep -r "\$2M/mo brands" src/ --include="*.tsx" --include="*.ts" -l
grep -r "web, mobile, and cloud" src/ --include="*.tsx" --include="*.ts" -l
```

- [ ] **Step 2: Fix any remaining instances**

For each match found that isn't a protected context (timeline job titles, blog content), apply the replacement from the spec's search & replace table.

- [ ] **Step 3: Commit**

```bash
git add -A src/
git commit -m "feat: sitewide copy sweep — remove all remaining generalist positioning"
```

---

### Task 20: Build Verification

- [ ] **Step 1: Run the build**

```bash
cd d:/projects/01-active/personal/my_portfolio/bechara-portfolio
npm run build
```

Expected: Build completes with 0 errors. Page count should be ~25-27 (down from 37 due to deleted case studies).

- [ ] **Step 2: Verify no stale references**

```bash
grep -r "orcania" src/ --include="*.tsx" --include="*.ts" -l
grep -r "bitnaft" src/ --include="*.tsx" --include="*.ts" -l
grep -r "red-ape" src/ --include="*.tsx" --include="*.ts" -l
grep -r "Full-Stack Developer" src/ --include="*.tsx" --include="*.ts" -l
grep -r "Build Something Amazing" src/ --include="*.tsx" --include="*.ts" -l
grep -r "Lebanon & MENA" src/ --include="*.tsx" --include="*.ts" -l
grep -r "\$75/hr" src/ --include="*.tsx" --include="*.ts" -l
```

Expected: No matches (or only in protected contexts like timeline job titles).

- [ ] **Step 3: Verify final case study count**

```bash
ls content/case-studies/*.mdx | wc -l
```

Expected: 4 files (bad-marketing-cro-mastery, bad-marketing-enterprise-automation, kalyxi-complete-automation, sunday-golf-theme-migration)

- [ ] **Step 4: Start dev server and spot-check pages**

```bash
npm run dev
```

Check each page loads without errors: `/`, `/about`, `/services`, `/work`, `/blog`, `/contact`

- [ ] **Step 5: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix: address build verification issues"
```
