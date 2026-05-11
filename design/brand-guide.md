# Burninghay — Brand Guide

> **Status:** Coming Soon  
> **Domain:** AI Integration · AI Architecture · Web Design · SaaS Development · Game Development

---

## Identity

| | |
|---|---|
| **Name** | Burninghay |
| **Tagline** | Forged in fire. Built for the future. |
| **Voice** | Minimal. Confident. Cinematic. Precise. |

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#16110d` | Page background |
| `--color-cream` | `#f5ead7` | Primary text, headings |
| `--color-cream-dim` | `rgba(245, 234, 215, 0.58)` | Secondary text, taglines |
| `--color-cream-faint` | `rgba(245, 234, 215, 0.28)` | Tertiary text, captions, hints |
| `--color-ember-deep` | `#8c2508` | Deep shadow embers |
| `--color-ember-orange` | `#e8571a` | Primary accent, glows |
| `--color-ember-gold` | `#f0a052` | Highlights, dividers, labels |
| `--color-ember-bright` | `#f5c866` | Bright ember particles, flares |

### Color Rules
- Always use dark backgrounds — this palette is dark-first only
- Never place cream text on anything lighter than `#1e1a14`
- Ember gold (`#f0a052`) is the primary accent; ember orange (`#e8571a`) is glow and depth only
- All text colors must meet WCAG AA contrast (4.5:1) against `#16110d`

---

## Typography

### Display — Cinzel
- **Purpose:** Brand name, section labels, "Coming Soon" UI chrome
- **Source:** Google Fonts — `Cinzel`
- **Weights:** 400 Regular · 600 SemiBold · 900 Black
- **Tracking:** 0.18em for brand name; 0.52em for small-caps labels

### Serif — Cormorant Garamond
- **Purpose:** Taglines, descriptive copy, body text
- **Source:** Google Fonts — `Cormorant+Garamond`
- **Weights/Styles:** 300 Light · 300 Light Italic · 400 Regular · 400 Italic
- **Tracking:** 0.07em for taglines; default for body

### Fallback
`Georgia, serif`

### Type Scale

| Role | Font | Weight | Size | Letter-spacing |
|---|---|---|---|---|
| Brand Name | Cinzel | 900 | `clamp(2.6rem, 10vw, 8rem)` | 0.18em |
| Tagline | Cormorant Garamond | 300 italic | `clamp(1.05rem, 2.2vw, 1.45rem)` | 0.07em |
| Label (Coming Soon) | Cinzel | 400 | `clamp(0.58rem, 1.15vw, 0.78rem)` | 0.52em |

---

## Logo Mark

**File:** `assets/images/burninghay-trans.png`  
**Format:** PNG with transparency (white background removed)  
**Description:** A burning hay bale in a circular composition — bold illustrative style with fire, smoke, and golden light. The mark embodies the brand name literally while conveying intensity, transformation, and craft.

### Usage Rules
- Always use on dark backgrounds (`#16110d` or near-black only)
- Minimum display size: 80px wide
- Never recolor, crop, or apply effects other than the specified ember glow
- Maintain equal clear space around the mark equal to ¼ of its width
- For web use, apply the ember glow `drop-shadow` (see Effects section)

### Preferred Presentation (dark bg)
```css
filter:
  drop-shadow(0 0 28px rgba(240, 160, 82, 0.32))
  drop-shadow(0 0 65px rgba(232, 87, 26, 0.16));
```

---

## Effects & Atmosphere

### Ember Glow — Logo
Applied to the logo mark on all dark backgrounds. Pulses on a 5-second ease-in-out cycle.
```css
filter:
  drop-shadow(0 0 28px rgba(240, 160, 82, 0.32))
  drop-shadow(0 0 65px rgba(232, 87, 26, 0.16));
```

### Background Warmth
Radial gradient warmth rising from below center — simulates a fire below the frame.
```css
background:
  radial-gradient(ellipse 70% 45% at 50% 65%, rgba(110, 38, 5, 0.22) 0%, transparent 65%),
  radial-gradient(ellipse 100% 60% at 50% 110%, rgba(28, 8, 0, 0.55) 0%, transparent 55%),
  radial-gradient(ellipse 120% 80% at 50% -10%, rgba(0, 0, 0, 0.35) 0%, transparent 50%);
```

### Film Grain
SVG fractalNoise at ~3.8% opacity over the entire viewport. Animates via `background-position` steps to simulate the flicker of analog film.

### Ember Particles
Procedurally generated orange/gold particles (`js/embers.js`) float upward from the bottom of the viewport, drifting slightly left or right. 20–25 particles visible at any time. Respects `prefers-reduced-motion`.

**Particle colors used:** `#e8571a` · `#f0a052` · `#f5c866` · `#c84012` · `#e87838`

---

## Animation Principles

| Principle | Detail |
|---|---|
| Staggered reveal | Page elements enter sequentially over ~2.5 seconds |
| Easing | `cubic-bezier(0.16, 1, 0.3, 1)` — fast out, soft settle |
| Logo entrance | 1.1s, slides up 16px + fade + glow emerges |
| Brand name entrance | 1.4s, letter-spacing compresses (0.38em → 0.18em) + blur dissolves |
| Supporting elements | 0.9s fade-up with 8px vertical drift |
| Logo pulse | 5s ease-in-out, continuous, glow intensity ±50% |
| Reduced motion | All animations disabled; elements appear at full opacity immediately |

---

## Voice & Tone

- **Minimal** — no filler, no marketing fluff. If it doesn't earn its place, cut it.
- **Confident** — never hedge, never over-explain.
- **Cinematic** — every line of copy feels like a title card. Short. Weighted. Deliberate.
- **Precise** — technical, but never cold. Smart, but never alienating.

### Copy Examples (on-brand)
- "Forged in fire. Built for the future."
- "Something is burning."
- "Where craft meets code."
- "Coming Soon"

### Copy Examples (off-brand)
- "We're working on some exciting new stuff!" ✗
- "Stay tuned for updates 🔥" ✗ (no emoji in brand contexts)
- "Our innovative platform is almost ready..." ✗

---

## File Structure

```
burninghay.com/
├── index.html              Main page
├── css/
│   └── style.css           All styles, CSS custom properties, animations
├── js/
│   └── embers.js           Ember particle system (vanilla JS, no dependencies)
├── assets/
│   └── images/
│       └── burninghay-trans.png    Brand logo mark (transparent PNG)
└── design/
    └── brand-guide.md      This document
```

---

## Technical Stack

| | |
|---|---|
| **Framework** | None — static HTML/CSS/JS |
| **CSS approach** | Custom properties (design tokens) + BEM-lite class naming |
| **JS approach** | Vanilla, IIFE-wrapped, no dependencies |
| **Fonts** | Google Fonts (Cinzel + Cormorant Garamond) |
| **Build tools** | None — `index.html` is immediately deployable |

---

*Last updated: 2026-05-11*
