# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

burninghay.com is a single-page static HTML website — no build tools, no dependencies, no framework. The site is immediately deployable as-is.

## File Structure

```
burninghay.com/
├── index.html              Main page (HTML structure and content only)
├── css/
│   └── style.css           All styles and CSS custom properties
├── js/
│   └── embers.js           Ember particle system (vanilla JS, no dependencies)
├── assets/
│   └── images/
│       └── burninghay-trans.png    Brand logo mark
└── design/
    └── brand-guide.md      Brand guide: colors, fonts, effects, voice
```

## Architecture

- `index.html` — HTML structure and content; links to external CSS and JS
- `css/style.css` — all styles, CSS custom properties (design tokens), and animations
- `js/embers.js` — minimal vanilla JS ember particle system; respects `prefers-reduced-motion`
- `assets/images/burninghay-trans.png` — transparent logo mark (PNG)
- `design/brand-guide.md` — canonical reference for all branding decisions

## Design constraints

- Dark background `#16110d`, warm cream text `#f5ead7`
- Typography: Cinzel (display) + Cormorant Garamond (serif) from Google Fonts; fallback Georgia serif
- All CSS custom properties (design tokens) are defined in `:root` in `style.css`
- Layout uses CSS Grid `place-items: center` — keep the centered, minimal aesthetic
- Typography uses `clamp()` for fluid scaling — preserve this for responsiveness
- Ember accent palette: `#e8571a` orange · `#f0a052` gold · `#f5c866` bright — defined in brand guide
- All animations use `prefers-reduced-motion` media query for accessibility
- No third-party JS libraries — keep vanilla

## Brand voice

Minimal. Confident. Cinematic. Precise. See `design/brand-guide.md` for full copy guidelines.
