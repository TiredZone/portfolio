# Social Proof Revamp: Replace Testimonials & Logo Wall with Metrics Impact Section

## Context

The portfolio currently has two social proof sections that expose NDA client information:
1. **Testimonials carousel** — names Casa Di Lumo, ClariGenZ, BetterBrand, Genex, Lane 201 are BAD Marketing clients with specific revenue figures. THe others aren't so we can use them.
2. **Logo wall** — displays 10 client logos including NDA-protected brands

These clients are from BAD Marketing work and most are under NDA. Publishing their names and revenue data is a liability. Additionally, the testimonials section feels unprofessional for a senior developer portfolio — more Fiverr than engineer. The goal is to replace both with a metrics-driven approach that showcases real, anonymized results.

## Changes

### 1. Remove Testimonials Carousel

**File:** `src/components/features/testimonials.tsx`
**Action:** Delete the component file entirely.

**File:** `src/components/features/animated-homepage.tsx`
**Action:** Remove the Testimonials import and the "What Clients Say" section block (around lines 480-513). Remove the `<Testimonials />` component usage and its wrapping motion container, heading, and subtitle.

### 2. Remove Logo Wall

**File:** `src/components/features/logo-wall.tsx`
**Action:** Delete the component file entirely.

**File:** `src/components/features/animated-homepage.tsx`
**Action:** Remove the LogoWall import and the `<LogoWall />` usage. Replace this slot with the new Metrics Impact section.

### 3. Create Metrics Impact Section

**New file:** `src/components/features/metrics-impact.tsx`

A grid of 4 metric cards showing anonymized but real results from BAD Marketing CRO work.

#### Data

| Metric | Descriptor                                           | Tag                 |
| ------ | ---------------------------------------------------- | ------------------- |
| 32%    | Revenue increase in 15 days                          | 7-Figure E-Commerce |
| 167%   | Conversion rate lift with half the ad spend          | Luxury Home Brand   |
| 77%    | Homepage conversion lift from a single layout change | Pet Products        |
| 94%    | YoY revenue growth                                   | Home & Lifestyle    |

#### Layout

- **Desktop:** 2x2 grid of cards
- **Tablet:** 2x2 grid
- **Mobile:** Single column stack

#### Card Structure

Each card contains:
1. **Metric number** — large, bold, gradient or gold accent (using existing `royal`/`gold` palette)
2. **Descriptor** — one-line description of what was achieved
3. **Tag** — small muted text showing anonymized industry context

#### Section Structure

- **Heading:** "Proven Impact" (Playfair Display, consistent with other section headings)
- **Subtitle:** "Real results from 3+ years of CRO and development work"
- **Cards grid:** 4 metric cards
- **Footer note:** small muted text — "Results from work at a performance marketing agency. Client names anonymized per confidentiality agreements."

#### Animations

- Scroll-triggered entrance animations using Framer Motion (consistent with rest of homepage)
- Staggered card entrance (opacity + translateY)
- Metric number can have a subtle count-up animation on first view
- Respect `prefers-reduced-motion`

#### Styling

- Follow the existing design system: royal/gold color palette, Playfair Display for headings, Geist Sans for body
- Cards should have subtle borders or glass-morphism effect consistent with other homepage cards
- Use existing Tailwind classes and custom colors from the project's tailwind config

### 4. Update Homepage Flow

**File:** `src/components/features/animated-homepage.tsx`

New section order:
1. Hero
2. Animated Stats Bar (50+ Projects, 95% Satisfaction, 24/7 Support)
3. **Metrics Impact Section (NEW)** — replaces Logo Wall position
4. Results Showcase ($500K+, 15+ pipelines, 75% reduction)
5. Featured Case Studies
6. Skills Grid
7. *(Testimonials section removed — no replacement in this slot)*
8. Pricing
9. FAQ
10. Newsletter CTA
11. Final CTA

### 5. Cleanup

- Remove any unused imports related to testimonials or logo wall data
- Remove testimonial-related CSS if any exists in `globals.css`
- Check for any other references to the removed components across the codebase

## Files to Modify

| File                                            | Action                                         |
| ----------------------------------------------- | ---------------------------------------------- |
| `src/components/features/testimonials.tsx`      | Delete                                         |
| `src/components/features/logo-wall.tsx`         | Delete                                         |
| `src/components/features/metrics-impact.tsx`    | Create (new)                                   |
| `src/components/features/animated-homepage.tsx` | Remove old imports/sections, add MetricsImpact |

---

## Phase 2: Anonymize NDA Client Names & Remove Stats Bar

### 6. Anonymize Client Names in Case Studies

Replace NDA client names with anonymized industry descriptors throughout all content:

| NDA Name | Anonymized As |
|----------|--------------|
| ClariGenZ | DTC Skincare Brand |
| BetterBrand | Health & Wellness Brand |
| Genex Formulas | Supplement Brand |
| Casa Di Lumo | Luxury Home Brand |

**Files to update:**

**`content/case-studies/bad-marketing-cro-mastery.mdx`**
- Frontmatter description: replace all 4 names
- Section headings: "### 1. ClariGenZ" → "### 1. DTC Skincare Brand", etc.
- Body text: all mentions of the 4 names
- Testimonial quote at bottom: anonymize or remove

**`content/case-studies/bad-marketing-shopify-optimization.mdx`**
- Section headings (lines ~44, 54, 64, 73): replace all 4 names
- Revenue summary bullets (lines ~293-296): replace names

**`content/case-studies/bad-marketing-etl-platform.mdx`**
- Code comment (line ~45): replace `'ClariGenZ'` with `'ClientA'` in example array

**`src/components/features/timeline.tsx`**
- Line ~39: Replace "ClariGenZ (+52%), BetterBrand (+22%), Genex (9.31% CR), Casa Di Lumo (+386% vs ReConvert)" with metrics-only text: "Drove 52% revenue growth, 22% conversion lift, 9.31% peak CR, and 386% upsell improvement across major DTC brands."

### 7. Remove Stats Bar Section

**File:** `src/components/features/animated-homepage.tsx`
**Action:** Delete the entire "Animated Transition Section" — the purple gradient section containing 50+ Projects / 95% Client Satisfaction / 24/7 Support stats and floating particles. This is redundant with the Metrics Impact section.

New homepage flow:
1. Hero
2. Metrics Impact (directly after hero)
3. Results Showcase
4. Featured Case Studies
5. Skills Grid
6. Pricing
7. FAQ
8. Newsletter CTA
9. Final CTA

## Verification

1. Run `npm run build` to ensure no broken imports or references
2. Run `npm run dev` and verify in browser:
   - Metrics Impact section renders correctly directly after hero
   - Stats bar is gone
   - Testimonials section is gone
   - All 4 metric cards display with correct data
   - Case study pages render with anonymized names (no NDA names visible)
   - Responsive layout works
   - No console errors
3. Search codebase for any remaining NDA client names
