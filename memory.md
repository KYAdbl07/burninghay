# memory.md — Session Log

A continuous log of what Tim and Claude do together on burninghay.com.
Every Claude context window should **read this file at the start** and **append an entry at the end** of its work.

## How to use

- One entry per session (context window), newest at the bottom.
- Date format: `YYYY-MM-DD`. Keep entries short: what was done, what was decided, what's still open.
- Record decisions and reasons here, not code. Code lives in git; this is the "why" and the "where we left off."
- If a session changes direction or leaves something unfinished, say so under **Open / next**.

---

## 2026-05-11 — Project setup (from git history)

**Done**
- Initialised the burninghay.com repo (`c852ffc`).
- Ran `claude init` and set up the Claude Code skills Tim wanted (`816c61f`).
- Built out the site structure (`ade73cc`): split `index.html` into `css/style.css` and `js/embers.js`, added the ember particle system, moved the logo to `assets/images/burninghay-trans.png`, wrote `design/brand-guide.md`, and expanded `CLAUDE.md` with architecture and design constraints.

**Decisions**
- Single-page static site, no build tools or frameworks, vanilla JS only.
- Dark `#16110d` background, cream `#f5ead7` text, Cinzel + Cormorant Garamond type, ember accent palette (orange / gold / bright).
- All animations respect `prefers-reduced-motion`.

---

## 2026-10-10 — Added this session log

**Done**
- Created `memory.md` in the project root as a running log for all context windows.
- Seeded it with the project history from git.
- Added a note to `CLAUDE.md` so future sessions read and append to this file automatically.

**Open / next**
- Nothing pending. Future sessions: add an entry below this one.
