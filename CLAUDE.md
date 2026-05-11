# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

burninghay.com is a single-page static HTML website — no build tools, no dependencies, no framework. Changes to `index.html` are immediately deployable.

## Architecture

- `index.html` — the entire site: HTML structure, embedded CSS, and content
- `burninghay-trans.png` — transparent logo asset used in the page

All styling is in a `<style>` block in the `<head>` of `index.html`. There is no external CSS file.

## Design constraints

- Dark background `#16110d`, warm cream text `#f5ead7`, Georgia serif font
- Layout uses CSS Grid `place-items: center` — keep the centered, minimal aesthetic
- Typography uses `clamp()` for fluid scaling — preserve this for responsiveness
- The site intentionally has no JavaScript; avoid introducing it unless asked
