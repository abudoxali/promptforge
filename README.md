<p align="center"><img src="assets/app-icon.webp" alt="PromptForge icon" width="160"></p>

# PromptForge AI

Turn a product idea into tailored, ready-to-use system instructions for AI coding and design agents.
Pick a workflow (design, build, fix, deploy, business), describe the idea, and PromptForge generates a
structured prompt package you can copy or export as Markdown. Everything runs in the browser; history,
templates and settings are stored locally (no account, no backend).

## Features

- Prompt generator with workflow presets and an options panel
- Prompt library of pre-built templates
- Local history of generated prompts
- Prompt-engineering guide
- Settings for model, language (Arabic / English, RTL aware) and theme
- Markdown export

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000/promptforge
npm run lint
npm run build
```

The app is served under the `/promptforge` base path (see `next.config.ts`).
Fonts are loaded through a CSS `@import` in `src/app/globals.css`, so builds do not need network access to Google Fonts.

## Deployment

- `promptforge-ai.nginx.conf` is the nginx reverse-proxy config for self-hosted deployment.
- `.github/workflows/nextjs.yml` builds the site for GitHub Pages.

See `STATUS.md` for the latest verification results.
