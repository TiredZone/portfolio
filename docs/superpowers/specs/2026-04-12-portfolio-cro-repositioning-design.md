# Portfolio CRO Repositioning — Design Spec

**Date:** 2026-04-12
**Type:** Content, copy, and positioning overhaul (NOT visual redesign)
**Site:** https://www.becharaelmaalouf.dev/
**Stack:** Next.js 15 / React 19 / TypeScript / Tailwind 4 / Framer Motion

---

## Core Positioning Shift

**Before:** "Full-Stack Developer" generalist
**After:** "Shopify CRO Specialist" who also builds

**Identity sentence:** Bechara is a CRO specialist who increases revenue for Shopify stores. Full-stack development, automation, and Web3 experience are supporting evidence, not the headline.

**Dual audience:** Freelance clients (primary — "Get a Free CRO Audit" CTAs) and employers hiring CRO managers/leads (secondary — portfolio proves depth).

**Desired visitor reaction:** "Believers, convinced, relieved"

---

## Decisions Made

| Decision | Answer |
|----------|--------|
| Web3 case studies (4 Orcania entries) | Remove entirely from Work page and delete MDX files |
| CROEvolution timeline entry | Add — Oct 30, 2025 - Present |
| A/B test count metric | 90+ (not 44) |
| Case study consolidation | Full MDX content merge now |
| Regional pricing toggle (Lebanon/MENA) | Remove entirely |
| Hourly rate | $100/hr (was $75/hr) |

---

## Layer 1: Sitewide Identity Shift

### 1.1 Navigation

**File:** `src/components/layout/navbar.tsx`

| Element | Current | New |
|---------|---------|-----|
| CTA button text | "Book a Call" | "Book a Free Audit" |

### 1.2 Footer

**File:** `src/components/layout/footer.tsx`

| Element | Current | New |
|---------|---------|-----|
| Tagline | "Full-Stack Developer specializing in Shopify Plus, React, Node.js, and automation solutions." | "Shopify CRO specialist. I find where your store leaks revenue, fix it, and prove it worked." |

### 1.3 Site Config & Meta

**File:** `src/lib/config.ts`

| Element | Current | New |
|---------|---------|-----|
| siteConfig title | "Bechara El Maalouf - Full-Stack Developer" | "Bechara El Maalouf - Shopify CRO Specialist" |
| siteConfig description | "Full-Stack Developer specializing in React, Node.js, and Shopify Plus..." | "Shopify CRO Specialist. 3+ years optimizing 7-to-9 figure Shopify stores. $500K+ in documented CRO revenue across 8+ DTC brands." |

**File:** `src/lib/seo.ts` — Update default metadata and structured data:
- Person schema `jobTitle`: "Shopify CRO Specialist"
- `knowsAbout` array: lead with CRO, A/B Testing, Shopify Plus (reorder)

**Per-page meta titles and descriptions:**

| Page | New Title | New Description |
|------|-----------|-----------------|
| Home | "Bechara El Maalouf -- Shopify CRO Specialist \| I Turn Traffic Into Revenue" | "Shopify CRO Specialist. 3+ years optimizing 7-to-9 figure Shopify stores. $500K+ in documented CRO revenue. Book a free audit." |
| About | "About Bechara El Maalouf -- From Web3 to $500K+ in CRO Revenue" | "From building decentralized exchanges to generating $500K+ in CRO revenue for Shopify stores. The story of how I became a CRO specialist." |
| Services | "Shopify CRO & Development Services -- Transparent Pricing" | "CRO audits, Shopify optimization, automation, and consulting. Transparent pricing. Every engagement measured by revenue generated." |
| Work | "CRO Case Studies -- $500K+ Revenue Generated for Shopify Stores" | "Real CRO case studies with documented results. 32% revenue increases, 167% conversion lifts, 90+ A/B tests across 8+ DTC brands." |
| Blog | "Shopify CRO Blog -- Conversion Optimization, A/B Testing & Revenue Growth" | "A/B test breakdowns, CRO tactics, and lessons from optimizing 7-to-9 figure Shopify stores." |
| Contact | "Work With Me -- Book a Free Shopify CRO Audit" | "Book a free 30-minute CRO audit. I'll review your Shopify store, identify conversion killers, and give you 3 actionable wins." |

### 1.4 Sitewide Copy Sweep (Search & Replace)

Apply these replacements across all component and page files. Do NOT replace in: timeline job titles (factual), component filenames, blog post MDX content.

| Find | Replace With |
|------|-------------|
| "Full-Stack Developer" (in badges, titles, descriptions) | "Shopify CRO Specialist" |
| "Full-stack developer helping" | "CRO specialist helping" |
| "Build Something Amazing" | "Find Your Revenue Leaks" |
| "Ready to Build Something Amazing?" | "Let's Find the Revenue You're Leaving on the Table" |
| "Let's discuss your project and how I can help you achieve your goals" | "Book a free CRO audit -- I'll identify your biggest conversion killers and give you 3 actionable wins" |
| "Book a Strategy Call" | "Get a Free CRO Audit" |
| "Schedule a Call" (in CTAs only) | "Book Your Free Audit" |
| "Start a Project" | "Start a CRO Project" |
| "$2M/mo brands" | "7-to-9 figure Shopify stores" |
| "web, mobile, and cloud platforms" | "Shopify stores and e-commerce platforms" |

---

## Layer 2: Homepage

### 2.1 Hero Section

**File:** `src/components/features/hero.tsx`

| Element | Current (after earlier edit) | New |
|---------|-----|-----|
| Badge | "CRO & Shopify Developer -- Revenue-Focused Engineering" | "Shopify CRO Specialist -- I Turn Traffic Into Revenue" |
| Headline | "Bechara El Maalouf" | Keep |
| Subheadline | "I fix slow stores, broken funnels & manual workflows." | Keep |
| Body | "Full-stack developer helping $2M/mo brands turn performance problems into 32% revenue increases -- through Shopify optimization, automation, and strategic development." | "CRO specialist helping 7-to-9 figure Shopify stores turn performance problems into 32% revenue increases. I find where your funnel leaks money, fix it inside your Shopify theme, test it, and prove it worked." |
| Primary CTA | "Book a Strategy Call" | "Get a Free CRO Audit" |
| Secondary CTA | "View Case Studies" | "See My Results" (links to /work) |
| Trust strip | "Trusted by brands generating $2M+/mo in revenue" | "3+ years optimizing 7-to-9 figure Shopify stores at a performance marketing agency" |

### 2.2 Metrics Section

**File:** `src/components/features/metrics-impact.tsx`

- Keep the 4 metrics and count-up animation
- Add `noscript` or SSR-safe fallback so numbers appear in HTML (not just 0 before JS)
- Update disclaimer: "Results from work at a performance marketing agency. Client names anonymized per confidentiality agreements." -> "Real results from 3+ years of CRO work. Client names anonymized per confidentiality agreements -- every number is documented."

### 2.3 Results Showcase

**File:** `src/components/features/animated-homepage.tsx` (results section)

| Card | Current | New |
|------|---------|-----|
| Card 1 | $500K+ Revenue Generated / Through CRO Optimization | Keep |
| Card 2 | 15+ Production Pipelines / Enterprise Automation | 90+ A/B Tests Executed / Hypothesis-driven testing on real Shopify stores |
| Card 3 | 75% Work Reduction / Through n8n Automation | Keep |

### 2.4 Featured Work Section Heading

**File:** `src/components/features/animated-homepage.tsx`

| Element | Current | New |
|---------|---------|-----|
| Heading | "Featured Work" | Keep |
| Subheading | "Real projects, real results. See how I help businesses grow through strategic development." | "Real CRO wins, real revenue. Every project here drove measurable business outcomes." |

### 2.5 Skills Grid

**File:** `src/components/features/skills-grid.tsx`

Already trimmed to 5 categories from earlier session. Update category names and tags to match the prompt spec:

1. **CRO & Revenue Optimization** (was "CRO & Analytics")
   - Tags: Conversion Rate Optimization, A/B Testing & Experimentation, GA4 & GTM, Microsoft Clarity, Core Web Vitals, Heatmap Analysis, Revenue Attribution, Funnel Analysis, Landing Page Optimization

2. **Shopify & E-Commerce** (was "Shopify & Ecommerce")
   - Tags: Shopify Plus, Liquid Template Engine, Dawn 2.0, Custom Sections & Blocks, Checkout Extensibility, Theme Development, Performance Optimization, Shopify Admin API

3. **Automation & Data Pipelines** (was "Automation & Data")
   - Tags: n8n Visual Workflows, ETL Pipeline Architecture, Lead Processing & Scoring, API Orchestration, Data Validation, AI/LLM Integrations, Production Monitoring, BigQuery

4. **Frontend Development** (keep name)
   - Tags: React.js, Next.js, TypeScript, Tailwind CSS, Framer Motion, HTML/CSS, JavaScript

5. **Backend & Infrastructure** (keep name)
   - Tags: Node.js/Express, Python, REST & GraphQL APIs, Docker, Google Cloud Run, CI/CD, PostgreSQL, Redis

### 2.6 Pricing Section (Homepage)

**File:** `src/components/features/pricing-table.tsx` — Complete rewrite

| Tier | Name | Price | Description |
|------|------|-------|-------------|
| 1 | Free CRO Audit | Free / 30-min call | "I'll review your Shopify store, identify the biggest conversion killers, and give you 3 actionable quick wins -- live on the call." |
| 2 (Popular) | CRO Sprint | $2,500-$5,000 / one-time | "A focused conversion optimization project: research, implement, test, and prove results in 4-6 weeks." |
| 3 | Monthly CRO Retainer | $3,000-$5,000 / per month | "Ongoing conversion optimization: continuous testing, implementation, and revenue growth." |

**Tier 1 features:** Live store walkthrough, Conversion bottleneck identification, 3 priority recommendations, Recorded Loom recap
**Tier 1 CTA:** "Book Your Audit" (outline)

**Tier 2 features:** Full heuristic CRO audit, Heatmap & analytics setup (Clarity + GA4), 3-5 high-impact changes implemented in Shopify, Before/after performance tracking, Detailed results report
**Tier 2 CTA:** "Start a Sprint" (filled/primary)

**Tier 3 features:** Monthly CRO roadmap, A/B testing program, Shopify implementation, Weekly reporting, Direct access -- no middlemen
**Tier 3 CTA:** "Apply for Retainer" (outline)

### 2.7 FAQ Section

**File:** `src/components/features/faq.tsx` — Complete rewrite (8 questions)

1. **"What kind of results can I expect?"**
   "Every store is different, but across 3+ years of CRO work for 7-to-9 figure Shopify stores, I've delivered results ranging from 32% revenue increases to 167% conversion rate lifts. I'll give you an honest assessment of what's realistic for your store during our free audit call."

2. **"What size store do you work with?"**
   "I work best with Shopify stores doing $50K+/month in revenue with consistent traffic. At that level, even small conversion improvements translate to meaningful revenue gains. For stores with 10,000+ monthly sessions, I add formal A/B testing to validate changes with statistical confidence."

3. **"Do you work with international clients?"**
   "Yes. I'm based in Lebanon (GMT+3) but work primarily with US and global clients. I'm fluent in English, French, Arabic, and Spanish. Most communication happens async via Slack/Loom with weekly live check-ins."

4. **"What's your process?"**
   "Discovery call -> CRO audit (heatmaps, analytics, heuristic review) -> Prioritized roadmap -> Implementation in your Shopify theme -> Testing -> Results reporting. I don't hand you a PDF and disappear -- I find what's broken, build the fix, test it, and prove it worked."

5. **"Do you also do Shopify development?"**
   "Yes. Unlike most CRO consultants who give you recommendations and leave, I'm also a Shopify developer. I implement changes directly in your Liquid theme -- no need to hire a separate dev to execute on CRO recommendations."

6. **"What tools do you use?"**
   "Google Analytics 4, Microsoft Clarity (heatmaps & session recordings), Google Tag Manager, Shopify analytics, and A/B testing platforms appropriate for your traffic level. Most tools are free or low-cost."

7. **"How do you ensure code quality and security?"**
   Keep current answer.

8. **"What is your payment structure?"**
   "For sprints: 50% upfront, 50% on completion. For retainers: monthly billing with 30-day cancellation after the initial 3-month commitment. All prices in USD."

### 2.8 Newsletter Section

**File:** `src/components/features/animated-homepage.tsx` (newsletter section)

| Element | Current | New |
|---------|---------|-----|
| Heading | "Stay in the Loop" | "Free Shopify CRO Teardowns" |
| Body | "Get insights on e-commerce optimization, automation, and development -- delivered to your inbox." | "Every week, I audit a real Shopify store and share exactly what I'd fix to increase conversions. Get the breakdown in your inbox." |

**File:** `src/components/features/newsletter-signup.tsx`

| Element | Current | New |
|---------|---------|-----|
| Submit button | "Subscribe" | "Get the Teardowns" |

### 2.9 Bottom CTA

**File:** `src/components/features/animated-homepage.tsx` (bottom CTA)

Already updated in earlier session. Further refine:

| Element | Current (after earlier edit) | New |
|---------|-----|-----|
| Heading | "Let's Find the Revenue You're Leaving on the Table" | Keep |
| Body | "Book a free 30-minute strategy call. I'll audit your store, identify conversion leaks, and outline a plan to increase revenue." | "Book a free 30-minute CRO audit. I'll review your store, identify conversion leaks, and give you 3 actionable wins -- no commitment." |
| Primary CTA | "Schedule a Call" | "Book Your Free Audit" |
| Secondary CTA | "View Services" | "See My Results" (link to /work) |

---

## Layer 3: About Page

### 3.1 Hero

**File:** `src/app/(marketing)/about/page.tsx`

| Element | Current (after earlier edit) | New |
|---------|-----|-----|
| Badge | "Full-Stack Developer" | "Shopify CRO Specialist" |
| Headline | "From Web3 to Revenue. How I Got Here." | "From Web3 to $500K+ in CRO Revenue." |
| Body | "I went from building decentralized exchanges to generating $500K+ in CRO revenue for ecommerce brands. Here's the story." | "I spent 3+ years running CRO for 7-to-9 figure Shopify stores at a performance marketing agency -- real A/B tests, real revenue lifts, real implementation inside Shopify themes. Here's how I got here and where I'm going." |
| Tech badges | "React & Next.js", "Node.js & .NET", "Mobile & Cloud", "AI Automation" | "Shopify & CRO", "A/B Testing & Analytics", "Automation & ETL", "Full-Stack Development" |
| Achievement cards | 32% Revenue Increase, 25+ Technologies, 50K+ Leads Processed, 4+ Years Experience | $500K+ Revenue Generated, 8+ DTC Brands Optimized, 90+ A/B Tests Executed, 3+ Years of CRO |

### 3.2 About Narrative

Replace the entire story section with:

> I started in Web3 -- building decentralized exchanges, SDKs, and NFT platforms at Orcania. It was technically fascinating but disconnected from real business impact.
>
> Then I joined BAD Marketing as a CRO Web Developer, and everything changed. For the first time, I could measure the exact revenue impact of my code. A layout change I made based on heatmap data? 77% homepage conversion lift. A full-site CRO overhaul for a luxury brand? 167% conversion rate increase with half the ad spend. Over 3 years, the CRO work I led generated over $500K in measurable revenue across 8+ DTC brands.
>
> Now I combine that CRO methodology with Shopify development skills most CRO consultants don't have. I don't hand you a PDF of recommendations. I find what's broken, build the fix in your Liquid theme, test it, and prove it worked.
>
> I also build high-converting funnels and advertorials at CROEvolution for 7-to-9 figure DTC brands -- custom Shopify templates optimized for cold traffic that lower customer acquisition costs. And I'm building CROHound, a CRO agency focused exclusively on Shopify stores.

**Key Achievement callout box:**
- Line 1: "32% revenue increase for a 7-figure Shopify store -- in 15 days"
- Line 2: "167% conversion rate lift for a luxury home brand -- with half the ad spend"

### 3.3 "What I Ship" Cards

Already created from earlier session. Update copy to match prompt exactly:

1. **Shopify & CRO:** "Theme builds, A/B tests, checkout optimization -- drove 32% revenue increases for 7-figure stores"
2. **Automation & ETL:** "n8n workflows, data pipelines, lead processing -- 50K+ leads/month automated"
3. **Full-Stack Web:** "React/Next.js apps, Node.js APIs, TypeScript -- production-grade systems"
4. **DevOps & Monitoring:** "Docker, CI/CD, BigQuery dashboards -- 75% faster deployments"

### 3.4 Core Values

| Current | New |
|---------|-----|
| Results-Driven: "Every line of code serves a purpose..." | **Data Over Opinions:** "I don't guess. Every change starts with analytics, heatmaps, and user behavior data. If I can't measure it, I don't ship it." |
| Performance First: "Obsessed with speed, efficiency..." | **Implementation, Not Recommendations:** "Most CRO consultants hand you a PDF. I'm also a Shopify developer -- I implement changes directly in your theme. No translation layer, no lost-in-handoff." |
| User-Centric: "Building experiences that users love..." | **Revenue Is the Only Metric:** "Conversion rate is a means, not an end. I optimize for revenue. Sometimes that means increasing AOV, not just CVR." |

Update icons: Target -> BarChart3, Zap -> Code, Users -> TrendingUp (or appropriate alternatives from lucide)

### 3.5 Timeline Updates

**File:** `src/components/features/timeline.tsx`

**Add new entry — CROEvolution:**
- Date: Oct 2025 - Present
- Title: "CRO & Funnel Developer"
- Company: "CROEvolution"
- Type: Part-time
- Description: "Build high-converting funnels, advertorials, and listicles for 7-to-9 figure DTC brands. Custom Shopify templates optimized for cold traffic using AI-powered workflows, delivering in 10-14 days to lower customer acquisition costs."
- Achievements: "10-14 day delivery", "Cold traffic funnels", "Native Shopify code"

**Update existing entries:**

BAD Marketing CRO Web Developer (Sep 2022 - Sep 2025):
- Description: "Led conversion rate optimization for 8+ DTC Shopify brands generating $2M+/mo. Executed 90+ A/B tests, delivered 32% revenue increases, 167% CVR lifts, and $500K+ in attributable revenue. Built and maintained CRO tracking systems, heatmap analysis workflows, and testing playbooks."
- Achievements: "$500K+ CRO revenue", "90+ A/B tests", "8+ brands optimized"

BAD Marketing Advanced Systems (Sep 2025 - Present):
- Description: "Promoted to build enterprise automation: ETL platforms connecting ClickUp, BigQuery, and Klaviyo; multi-stage lead processing pipelines; production-grade monitoring systems. Reduced manual operations work by 75%."
- Keep current achievements

Orcania (Jan 2022 - Dec 2022):
- Shorten description to: "Architected Web3 SDK and multi-chain DEX. Learned to build production systems at scale -- then pivoted to where code drives revenue directly."
- Reduce achievements to 2 max

### 3.6 About Page Bottom CTA

Already updated from earlier session. Ensure it says:
- Heading: "Let's Find the Revenue You're Leaving on the Table"
- Body: "Whether you need CRO optimization, automation pipelines, or a Shopify overhaul -- I work with global teams across 4 languages to ship results that move the needle."

---

## Layer 4: Services Page

### 4.1 Hero

**File:** `src/app/(marketing)/services/page.tsx`

| Element | Current (after earlier edit) | New |
|---------|-----|-----|
| Badge | "Professional Development Services" | "CRO & Shopify Development Services" |
| Headline | "Development That Pays for Itself" | Keep |
| Body | "Shopify optimization, automation, and custom builds..." | "Shopify CRO, theme development, and automation -- priced transparently and measured by the revenue they generate, not the hours they take." |
| Metric cards | +10-30% CVR, 75% Work Reduction, $5M+ Revenue Managed, 99.9% Uptime Target | +10-30% CVR (keep), 75% Work Reduction (keep), $500K+ CRO Revenue Generated, 90+ A/B Tests Executed |

### 4.2 Service Cards — Reorder and Add CRO Service

Reorder to: CRO first, then Shopify Dev, Automation, Consulting.

**Add NEW service card at position 1:**

**CRO & Conversion Optimization**
- Icon: TrendingUp (or Target)
- Description: "I audit your Shopify store, identify where you're losing revenue, and implement data-backed changes that increase conversions. Research, implementation, testing, and proof -- end to end."
- Who it's for: "Shopify stores doing $50K+/mo that have traffic but aren't converting."
- Typical Results: +10-30% CVR, 32% revenue increase
- Starting price: From $2,500
- Features: Heuristic CRO audit, Heatmap & session recording setup, Analytics & funnel analysis, Prioritized conversion roadmap, Shopify theme implementation, A/B testing (traffic permitting), Before/after results report

**Existing services — add "Who it's for" to each:**
- Shopify Development: "Brands launching on Shopify, migrating themes, or needing custom Liquid development."
- Automation & Integrations: "Teams drowning in manual data work, lead processing, or disconnected tools."
- Technical Consulting: "Founders or teams needing expert guidance before committing to a build."

### 4.3 Pricing Table — Remove Regional Toggle, Add CRO Tiers

**File:** `src/components/features/pricing-table-segmented.tsx`

- Remove the Global/MENA toggle entirely
- Show only global pricing
- Add CRO & Conversion Optimization pricing section (first position):

| Tier | Price | Timeline |
|------|-------|----------|
| CRO Audit | $2,500 | 1-2 weeks |
| CRO Sprint | $5,000-$8,000 | 4-6 weeks |
| Monthly CRO Retainer | $3,000-$5,000/mo | Ongoing (3-month minimum) |

**CRO Audit scope:** Full-site heuristic review, Heatmap & analytics setup, Funnel drop-off analysis, Mobile UX review, 5 prioritized recommendations, Recorded Loom walkthrough
**CRO Audit deliverables:** Written CRO audit report, Prioritized implementation roadmap, Analytics baseline documentation

**CRO Sprint scope:** Everything in CRO Audit + Implementation of top 3-5 changes in Shopify, A/B testing setup (traffic permitting), 2 rounds of revisions
**CRO Sprint deliverables:** All audit deliverables + Implemented changes in theme, Before/after performance report, 14-day post-launch monitoring

**Monthly Retainer scope:** Monthly testing roadmap, 2-4 tests/changes per month, Continuous heatmap & analytics review, Shopify theme implementation, Weekly async updates (Loom), Monthly results report
**Monthly Retainer deliverables:** Monthly CRO report with revenue attribution, Ongoing test documentation, Quarterly strategy review call

**Update Technical Consulting rate:** $100/hr (was $75/hr)
- Retainer discounts: 20h/mo -> $90/hr, 40h/mo -> $85/hr

### 4.4 Process Section

| Element | Current | New |
|---------|---------|-----|
| Heading | "Our Collaborative Process" | "How I Work" |
| Step 1 | "Discovery Call -- We discuss your goals..." | "Free CRO Audit -- I review your store live, identify the biggest conversion killers, and give you 3 actionable wins. If we're a fit, I'll propose next steps." |
| All steps | "We" language | "I" language throughout |

---

## Layer 5: Work Page + Case Study Consolidation

### 5.1 Hero

**File:** `src/app/(marketing)/work/page.tsx`

| Element | Current (after earlier edit) | New |
|---------|-----|-----|
| Badge | "Portfolio & Case Studies" | "CRO Results & Case Studies" |
| Headline | "$500K+ in Revenue. Here's How." | Keep |
| Body | "CRO wins, automation pipelines, and Shopify builds..." | "Every project here drove measurable revenue or saved real hours. Client names anonymized per confidentiality agreements -- every number is documented." |
| Achievement cards | 32% Revenue Increase, 50K+ Leads Automated, $5M+ Revenue Managed, 25+ Technologies | 8+ Brands Optimized, 32% Peak Revenue Lift, 167% Peak CVR Increase, 90+ A/B Tests Run |

### 5.2 Case Study Consolidation

**Final case study lineup (5 entries):**

1. **BAD Marketing -- CRO Mastery** (Featured)
   - Keep existing content (`bad-marketing-cro-mastery.mdx`)
   - Fold in key points from `bad-marketing-shopify-optimization.mdx` (the 3-year overview) as additional context/conclusion sections

2. **BAD Marketing -- Enterprise Data Infrastructure** (Featured)
   - NEW merged file: `bad-marketing-enterprise-automation.mdx`
   - Combine content from: `bad-marketing-clickup-pipeline.mdx`, `bad-marketing-etl-platform.mdx`, `bad-marketing-lead-automation.mdx`
   - Narrative: "Building the complete data infrastructure at BAD Marketing" covering ClickUp pipeline, ETL platform, and lead automation as chapters in one story

3. **Sunday Golf -- Theme Migration** (Featured)
   - Keep as-is (`sunday-golf-theme-migration.mdx`)

4. **Kalyxi -- Complete Automation Ecosystem** (Featured)
   - NEW merged file: combine content from `kalyxi-content-automation.mdx`, `kalyxi-lead-processing.mdx`, `kalyxi-sales-analysis.mdx`, `kalyxl-lead-automation.mdx`
   - Single comprehensive narrative covering all automation work for Kalyxi
   - Use `kalyxl-lead-automation.mdx` as the base (it was the overview), expand with detail sections from the other 3

5. **(Optional) Keep any remaining standalone entry if content is unique enough**

**Files to DELETE (Web3/Orcania):**
- `orcania-bitnaft-nft-platform.mdx`
- `orcania-celeste-web3-sdk.mdx`
- `orcania-dex-platform.mdx`
- `red-ape-family-nft-ecosystem.mdx`

**Files to DELETE after merge:**
- `bad-marketing-clickup-pipeline.mdx`
- `bad-marketing-etl-platform.mdx`
- `bad-marketing-lead-automation.mdx`
- `bad-marketing-shopify-optimization.mdx`
- `kalyxi-content-automation.mdx`
- `kalyxi-lead-processing.mdx`
- `kalyxi-sales-analysis.mdx`
- `kalyxl-lead-automation.mdx`

**Slug rename:** `kalyxl-lead-automation` (typo) -> `kalyxi-complete-automation`

**Result: 4 case studies total** (CRO Mastery, Enterprise Automation, Sunday Golf, Kalyxi)

### 5.3 Case Study Detail Pages — Add Visual Proof Slots

For each remaining case study MDX file, add after the intro section:

```mdx
## Key Results

| Metric | Before | After |
|--------|--------|-------|
| [metric name] | [before value] | [after value] |

{/* Screenshot slots -- add visuals here */}
{/* ![Anonymized GA4 dashboard showing revenue lift](placeholder) */}
```

Also add a "How I Approached This" methodology section and a highlighted "Key Takeaway" callout box.

---

## Layer 6: Blog + Contact

### 6.1 Blog Page

**File:** `src/app/(marketing)/blog/page.tsx`

| Element | Current | New |
|---------|---------|-----|
| Headline | "Blog" | "Shopify CRO Insights" |
| Tagline | "Insights on web development, Shopify optimization, and building successful digital experiences" | "A/B test breakdowns, conversion optimization tactics, and lessons from optimizing 7-to-9 figure Shopify stores." |
| Newsletter heading | "Never Miss an Update" | "Free Weekly CRO Teardown" |
| Newsletter body | "Get notified when I publish new articles..." | "I audit a real Shopify store every week and share exactly what I'd change. Get it in your inbox." |

### 6.2 Contact Page

**File:** `src/app/(marketing)/contact/page.tsx`

| Element | Current | New |
|---------|---------|-----|
| Headline | "Let's Work Together" | "Let's Find Your Revenue Leaks" |
| Body | "Have a project in mind? I'd love to hear about it. Book a call or send a message and I'll get back to you within 24 hours." | "Book a free 30-minute CRO audit -- I'll review your Shopify store live, identify the biggest conversion killers, and give you 3 actionable wins. No pitch, no pressure." |
| Booking title | "Book a Free Consultation" | "Book Your Free CRO Audit" |
| Booking description | "Schedule a 30-minute call to discuss your project, goals, and how I can help you achieve them." | "Schedule a 30-minute call. I'll review your store live and give you 3 actionable conversion wins." |

### 6.3 Contact Form

**File:** `src/components/features/contact-form.tsx`

Update project type enum options:
1. CRO Audit & Optimization (NEW -- first position)
2. Shopify Development
3. Automation & Integrations
4. Technical Consulting
5. Full-Time / Employment Opportunity (NEW)
6. Other

---

## Layer 7: Verification

After all changes:

1. `npm run build` completes with no errors
2. All 6 main pages render correctly (/, /about, /services, /work, /blog, /contact)
3. All remaining case study detail pages render (/work/[slug])
4. All blog post pages render (/blog/[slug])
5. Navigation links work (no dead links to deleted case studies)
6. Cal.com embed loads on contact page
7. Contact form submits (Zod validation still passes with new enum values)
8. Skills grid shows exactly 5 categories with updated names
9. No proficiency percentage bars on about page
10. No "Blockchain & Web3" or "Business Integrations" in skills grid
11. No "Lebanon & MENA" pricing toggle on services page
12. Footer tagline updated
13. All meta titles and descriptions updated
14. No instances of "Build Something Amazing" remain
15. No instances of "Full-Stack Developer" remain (except timeline job titles)
16. Sitemap and RSS feed still generate without deleted case study slugs
17. OG image generation still works
18. 404 page works for deleted case study URLs

---

## Files Modified (Complete List)

### Components
- `src/components/features/hero.tsx` -- badge, body, CTAs, trust strip
- `src/components/features/animated-homepage.tsx` -- results cards, featured heading, newsletter, bottom CTA
- `src/components/features/metrics-impact.tsx` -- SSR fallback, disclaimer
- `src/components/features/skills-grid.tsx` -- category names and tags
- `src/components/features/pricing-table.tsx` -- complete rewrite (CRO tiers)
- `src/components/features/pricing-table-segmented.tsx` -- remove regional toggle, add CRO section, update consulting rate
- `src/components/features/faq.tsx` -- complete rewrite (CRO-focused)
- `src/components/features/newsletter-signup.tsx` -- button text
- `src/components/features/timeline.tsx` -- add CROEvolution, update descriptions
- `src/components/features/contact-form.tsx` -- project type options
- `src/components/layout/navbar.tsx` -- CTA text
- `src/components/layout/footer.tsx` -- tagline

### Pages
- `src/app/(marketing)/page.tsx` -- no changes (uses components)
- `src/app/(marketing)/about/page.tsx` -- hero, narrative, values, achievement cards, tech badges, "What I Ship" copy, bottom CTA
- `src/app/(marketing)/services/page.tsx` -- hero, badge, body, metrics, add CRO service, reorder, "Who This Is For", process section
- `src/app/(marketing)/work/page.tsx` -- hero, badge, body, achievement cards
- `src/app/(marketing)/blog/page.tsx` -- headline, tagline, newsletter CTA
- `src/app/(marketing)/contact/page.tsx` -- headline, body, booking title/description

### Config
- `src/lib/config.ts` -- site title, description
- `src/lib/seo.ts` -- per-page metadata, structured data

### Content (MDX)
- `content/case-studies/bad-marketing-cro-mastery.mdx` -- fold in overview content from shopify-optimization
- `content/case-studies/bad-marketing-enterprise-automation.mdx` -- NEW merged file (from clickup-pipeline + etl-platform + lead-automation)
- `content/case-studies/kalyxi-complete-automation.mdx` -- NEW merged file (from all 4 kalyxi entries, replaces kalyxl-lead-automation.mdx typo)
- DELETE: 4 Orcania files, 3 BAD Marketing sub-files, 4 Kalyxi sub-files, 1 BAD Marketing overview = 12 files deleted

### Implementation Notes
- **Pricing alignment:** Homepage pricing (Section 2.6) shows simpler/lower ranges as a lead-gen funnel. Services page (Section 4.3) shows full granular pricing. This is intentional — homepage entices, services page qualifies.
- **Custom Web Applications service:** Keep in services page pricing table (not listed in service cards but pricing tiers remain for existing leads). The prompt keeps this pricing unchanged.
- **Contact form Zod schema:** Must update the `projectType` Zod enum to match the new dropdown values (add "cro_audit", "employment"; keep existing values).
- **Sitemap/RSS:** After deleting MDX files, verify these routes don't generate 404s. The `getAllCaseStudies()` function reads the filesystem, so deleted files won't appear.
- **Redirects:** No redirects needed for deleted case study URLs — they'll 404 naturally. Consider adding redirects in `next.config.ts` if SEO matters for those URLs (likely not, since they're internal links only).
