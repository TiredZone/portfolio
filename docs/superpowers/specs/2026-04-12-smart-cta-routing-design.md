# Smart CTA Routing & Form Pre-fill — Design Spec

**Date:** 2026-04-12
**Type:** UX improvement — purposeful CTAs with query-param-driven form pre-fill
**Site:** https://www.becharaelmaalouf.dev/

---

## Problem

40+ CTAs across the site all link to `/contact` with zero context. When a visitor clicks "Start a Sprint" on the pricing table, they land on the contact page and must manually re-select their project type, budget, and explain what they want. Visitor intent is lost at the handoff.

## Solution

**Two CTA destinations based on intent:**

| Intent | Destination | Scroll Target |
|--------|-------------|---------------|
| Free audit / book a call | `/contact#booking` | Cal.com widget |
| Paid service inquiry | `/contact?service=X&tier=Y&budget=Z#contact-form` | Contact form (pre-filled) |

---

## Query Parameter Schema

| Param | Maps To | Values |
|-------|---------|--------|
| `service` | Project Type dropdown | `cro_audit`, `shopify`, `automation`, `consulting`, `employment` |
| `tier` | Message field pre-fill | Free text (e.g., "CRO Sprint", "Shopify Launch", "Automation Growth") |
| `budget` | Budget dropdown | `<10k`, `10-25k`, `25-50k`, `50k+` |

All params are optional. Missing params leave the corresponding field at its default empty state.

---

## Contact Form Changes

**File:** `src/components/features/contact-form.tsx`

1. Import `useSearchParams` from `next/navigation`
2. On component mount, read query params and set form defaults:
   - `service` param -> pre-select `projectType` dropdown
   - `budget` param -> pre-select `budget` dropdown
   - `tier` param -> pre-fill `message` textarea with `"I'm interested in {tier}."`
3. Add `id="contact-form"` to the form's outermost wrapper div for hash-based scrolling

**Wrap component in `Suspense`:** `useSearchParams()` requires a Suspense boundary in Next.js App Router. Wrap the `ContactForm` usage on the contact page in `<Suspense>`.

---

## Contact Page Changes

**File:** `src/app/(marketing)/contact/page.tsx`

1. Add `id="booking"` to the Cal.com booking section wrapper for hash-based scrolling
2. Wrap `<ContactForm />` in `<Suspense>` (required for `useSearchParams`)

---

## CTA Routing Map

### Free Audit CTAs -> `/contact#booking`

| File | Button Text | Current href | New href |
|------|-------------|-------------|----------|
| `hero.tsx` | "Get a Free CRO Audit" | `/contact` | `/contact#booking` |
| `navbar.tsx` | "Book a Free Audit" (desktop) | `/contact` | `/contact#booking` |
| `navbar.tsx` | "Book a Free Audit" (mobile) | `/contact` | `/contact#booking` |
| `pricing-table.tsx` | "Book Your Audit" | `/contact` | `/contact#booking` |
| `animated-homepage.tsx` | "Book Your Free Audit" (bottom CTA) | `/contact` | `/contact#booking` |
| `about/page.tsx` | "Let's Work Together" | `/contact` | `/contact#booking` |

### Paid Service CTAs -> `/contact?...#contact-form`

| File | Button Text | New href |
|------|-------------|----------|
| `pricing-table.tsx` | "Start a Sprint" | `/contact?service=cro_audit&tier=CRO+Sprint&budget=10-25k#contact-form` |
| `pricing-table.tsx` | "Apply for Retainer" | `/contact?service=cro_audit&tier=Monthly+CRO+Retainer&budget=25-50k#contact-form` |
| `services/page.tsx` | "Discuss This Service" (CRO) | `/contact?service=cro_audit&tier=CRO+%26+Conversion+Optimization#contact-form` |
| `services/page.tsx` | "Discuss This Service" (Shopify) | `/contact?service=shopify&tier=Shopify+Development#contact-form` |
| `services/page.tsx` | "Discuss This Service" (Web Apps) | `/contact?service=shopify&tier=Custom+Web+Application#contact-form` |
| `services/page.tsx` | "Discuss This Service" (Automation) | `/contact?service=automation&tier=Automation+%26+Integrations#contact-form` |
| `services/page.tsx` | "Discuss This Service" (Consulting) | `/contact?service=consulting&tier=Technical+Consulting#contact-form` |
| `pricing-table-segmented.tsx` | "Discuss CRO Audit" | `/contact?service=cro_audit&tier=CRO+Audit&budget=10-25k#contact-form` |
| `pricing-table-segmented.tsx` | "Discuss CRO Sprint" | `/contact?service=cro_audit&tier=CRO+Sprint&budget=10-25k#contact-form` |
| `pricing-table-segmented.tsx` | "Discuss Monthly CRO Retainer" | `/contact?service=cro_audit&tier=Monthly+CRO+Retainer&budget=25-50k#contact-form` |
| `pricing-table-segmented.tsx` | "Discuss Launch" | `/contact?service=shopify&tier=Shopify+Launch&budget=10-25k#contact-form` |
| `pricing-table-segmented.tsx` | "Discuss Scale" | `/contact?service=shopify&tier=Shopify+Scale&budget=10-25k#contact-form` |
| `pricing-table-segmented.tsx` | "Discuss Plus / Enterprise" | `/contact?service=shopify&tier=Shopify+Plus+%2F+Enterprise&budget=25-50k#contact-form` |
| `pricing-table-segmented.tsx` | "Discuss Starter" | `/contact?service=automation&tier=Automation+Starter#contact-form` |
| `pricing-table-segmented.tsx` | "Discuss Growth" | `/contact?service=automation&tier=Automation+Growth&budget=10-25k#contact-form` |
| `pricing-table-segmented.tsx` | "Discuss Advanced" | `/contact?service=automation&tier=Automation+Advanced&budget=10-25k#contact-form` |
| `pricing-table-segmented.tsx` | "Discuss MVP" | `/contact?service=shopify&tier=Web+App+MVP&budget=10-25k#contact-form` |
| `pricing-table-segmented.tsx` | "Discuss Full Build" | `/contact?service=shopify&tier=Web+App+Full+Build&budget=25-50k#contact-form` |
| `pricing-table-segmented.tsx` | "Get a Custom Quote" | `/contact#contact-form` |
| `work/page.tsx` | "Start a CRO Project" | `/contact?service=cro_audit#contact-form` |
| `about/page.tsx` | "Start a CRO Project" | `/contact?service=cro_audit#contact-form` |

### Keep As-Is (no query params needed)

| File | Button Text | href | Reason |
|------|-------------|------|--------|
| `hero.tsx` | "See My Results" | `/work` | Not a contact CTA |
| `animated-homepage.tsx` | "See My Results" | `/work` | Not a contact CTA |
| `animated-homepage.tsx` | "View All Projects" | `/work` | Not a contact CTA |
| `work/page.tsx` | "Learn More About Me" | `/about` | Not a contact CTA |
| `work/page.tsx` | "Read Full Case Study" | `/work/{slug}` | Not a contact CTA |
| `blog/page.tsx` | "Read Article" | `/blog/{slug}` | Not a contact CTA |

### Footer Service Links -> `/services`

| File | Link Text | Current href | New href |
|------|-----------|-------------|----------|
| `footer.tsx` | "Shopify Development" | `/contact` | `/services` |
| `footer.tsx` | "Web Applications" | `/contact` | `/services` |
| `footer.tsx` | "Automation & Integrations" | `/contact` | `/services` |
| `footer.tsx` | "Technical Consulting" | `/contact` | `/services` |

---

## Services Page — Dynamic CTA Links

The services page renders service cards from an array. To generate the correct query params for each card's "Discuss This Service" button, add a `serviceParam` field to each service object:

```typescript
// Add to each service in the services array:
{ title: "CRO & Conversion Optimization", serviceParam: "cro_audit", ... }
{ title: "Shopify Development", serviceParam: "shopify", ... }
{ title: "Custom Web Applications", serviceParam: "shopify", ... }
{ title: "Automation & Integrations", serviceParam: "automation", ... }
{ title: "Technical Consulting", serviceParam: "consulting", ... }
```

Then the CTA link becomes:
```tsx
<Link href={`/contact?service=${service.serviceParam}&tier=${encodeURIComponent(service.title)}#contact-form`}>
```

---

## Pricing Table Segmented — Dynamic CTA Links

The pricing-table-segmented component renders tier cards from arrays. Each tier already has a `name` field. The section context provides the `service` value. Add the query params to the TierCard's link:

Each pricing section should pass a `serviceParam` value (e.g., `"cro_audit"`, `"shopify"`, `"automation"`). The TierCard then builds:
```tsx
<Link href={`/contact?service=${serviceParam}&tier=${encodeURIComponent(tier.name)}${budgetParam ? `&budget=${budgetParam}` : ''}#contact-form`}>
```

Add a `budgetHint` field to tiers where a reasonable budget default exists.

---

## What Doesn't Change

- Cal.com embed configuration
- Form validation (Zod schema)
- GTM event tracking
- Form submission flow (Resend)
- Visual design of any component
- URL routing structure

---

## Files Modified

| File | Change |
|------|--------|
| `src/components/features/contact-form.tsx` | Add `useSearchParams` pre-fill, add `id="contact-form"` |
| `src/app/(marketing)/contact/page.tsx` | Add `id="booking"`, wrap form in `Suspense` |
| `src/components/features/hero.tsx` | Update CTA href |
| `src/components/layout/navbar.tsx` | Update CTA hrefs (x2) |
| `src/components/features/pricing-table.tsx` | Update 3 button hrefs |
| `src/components/features/animated-homepage.tsx` | Update bottom CTA href |
| `src/components/features/pricing-table-segmented.tsx` | Add serviceParam to sections, update TierCard links |
| `src/app/(marketing)/services/page.tsx` | Add serviceParam to services array, update CTA link, update bottom CTA |
| `src/app/(marketing)/work/page.tsx` | Update bottom CTA href |
| `src/app/(marketing)/about/page.tsx` | Update CTA hrefs |
| `src/components/layout/footer.tsx` | Change service links from `/contact` to `/services` |

---

## Verification

1. `npm run build` passes
2. Click "Get a Free CRO Audit" in hero -> lands on contact page, scrolls to Cal.com widget
3. Click "Start a Sprint" in homepage pricing -> lands on contact page, scrolls to form, Project Type = "CRO Audit & Optimization", Budget = "$10,000 - $25,000", Message = "I'm interested in a CRO Sprint."
4. Click "Discuss This Service" on Shopify card -> form has Project Type = "Shopify Development", Message = "I'm interested in Shopify Development."
5. Click "Book a Free Audit" in nav -> scrolls to Cal.com widget
6. Footer service links go to `/services` page
7. Direct visit to `/contact` (no query params) -> form is empty as normal
8. Form submission still works correctly with pre-filled values
9. GTM tracking still fires on form submit
