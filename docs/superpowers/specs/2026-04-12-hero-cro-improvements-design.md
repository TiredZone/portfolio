# Hero CRO Improvements Design

## Context

The portfolio hero section works well visually with its parallax zoom-out animation, but lacks CRO principles that a CRO developer's site should demonstrate. Additionally, the mouse wheel scroll indicator is a desktop-only metaphor that doesn't translate to mobile.

## Scope

- Hero section (`src/components/features/hero.tsx`)
- MetricsImpact section (`src/components/features/metrics-impact.tsx`) — top padding only

## Changes

### 1. Replace Mouse Scroll Indicator with Universal Chevron

**File**: `src/components/features/hero.tsx` (lines ~299-335)

Replace the custom mouse wheel SVG with a `ChevronDown` icon from `lucide-react`.

- Size: `w-6 h-6`
- Animation: Same bounce `y: [0, 8, 0]` on 2s infinite loop
- Colors: `text-white/60` default, `group-hover:text-gold-400` on hover
- Behavior: Same `onClick` scrolling to `window.innerHeight` with smooth scroll
- Hover: Same `whileHover={{ scale: 1.1 }}` effect

Remove the entire mouse body markup (the `w-6 h-10 rounded-full border` container and the inner dot). Replace with a single `ChevronDown` icon wrapped in the existing motion container.

### 2. Add Social Proof Trust Strip

**File**: `src/components/features/hero.tsx`

Add a trust line between the CTA buttons and the scroll chevron.

```tsx
<motion.p
    className="text-sm text-royal-200/70 mb-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2, duration: 0.8 }}
>
    Trusted by brands generating $2M+/mo in revenue
</motion.p>
```

Position: After the CTA button flex container, before the scroll chevron.

The fade-in delay (1.2s) ensures it appears after the CTAs have animated in, creating a natural reading sequence: headline -> subtitle -> CTA -> trust reinforcement.

### 3. Tighten Visual Hierarchy Spacing

**File**: `src/components/features/hero.tsx`

Update spacing classes on existing elements:

| Element | Current | New | Rationale |
|---------|---------|-----|-----------|
| Badge (`mb-8`) | `mb-8` | `mb-6` | Badge is secondary, tighter coupling to heading |
| Heading wrapper (`mb-8`) | `mb-8` | `mb-6` | Bring subtitle closer — they're a semantic unit |
| Subtitle wrapper (`mb-12`) | `mb-12` | `mb-8` | Pull CTA closer to value prop (Gestalt proximity) |
| CTA buttons (`mb-16`) | `mb-16` | `mb-6` | Tighter to new trust strip below |

Net effect: Content block feels more cohesive, less "floating in space." The parallax animation still has room to breathe since `min-h-screen` with flex centering provides ample surrounding space.

### 4. Reduce MetricsImpact Top Padding

**File**: `src/components/features/metrics-impact.tsx` (line 80)

Change: `py-20 md:py-28` -> `pt-16 md:pt-20 pb-20 md:pb-28`

This makes the metrics section peek into view sooner on scroll, creating a stronger visual pull downward. The reduced top padding (64px/80px instead of 80px/112px) means visitors see the start of the social proof numbers earlier, encouraging continued scrolling.

## Files Modified

1. `src/components/features/hero.tsx` — Chevron icon, trust strip, spacing
2. `src/components/features/metrics-impact.tsx` — Top padding reduction

## Verification

1. Run `npx next build` to confirm no build errors
2. Check desktop viewport (~1440px):
   - Chevron arrow bounces at bottom of hero
   - Trust strip visible below CTAs
   - Spacing feels tighter but content still breathes with parallax
3. Check mobile viewport (~375px):
   - Chevron arrow renders correctly (no mouse icon)
   - Trust strip wraps cleanly on small screens
   - Spacing proportions feel right on smaller viewport
4. Test parallax scroll animation still works smoothly on both breakpoints
5. Test chevron click-to-scroll behavior
