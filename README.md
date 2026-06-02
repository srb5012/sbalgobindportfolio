# Shawn Balgobind — Portfolio

Minimalist portfolio. Off-white canvas, ink type, a typewriter hero, restrained
motion. Built to be clear, accessible, and effortless — *good software should
work for everyone.*

## Stack
- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** (CSS-first tokens in `src/app/globals.css`)
- **Geist / Geist Mono** (self-hosted via the `geist` package)
- **lucide-react** for UI icons; brand icons (GitHub/LinkedIn) are inline SVGs in `src/components/icons.tsx`
- Motion is hand-rolled (IntersectionObserver + CSS) — no animation library, less JS shipped

## Develop
```bash
npm install          # see Node note below
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve the build
```

## ⚠️ Node version note
This machine runs **Node 18**, but Tailwind v4's native engine
(`@tailwindcss/oxide`) and ESLint 9 declare **Node 20+**. npm therefore *skips*
the platform binary on Node 18, and the build fails with
`Cannot find module '@tailwindcss/oxide-linux-x64-gnu'`.

Fix (already applied here) — after any clean `npm install` on Node 18, run:
```bash
npm install @tailwindcss/oxide-linux-x64-gnu@4.3.0 --no-save --prefer-offline
```
On **Vercel (Node 20+)** this is automatic — no action needed. Upgrading local
Node to 20+ removes the workaround entirely.

ESLint is disabled during builds (`next.config.ts`) for the same Node-18 reason;
type-checking still runs.

## Editing content
- **All copy:** `src/content/site.ts` (hero, about, experience, projects, academics, contact).
- **Case studies:** `src/content/work.ts` → rendered at `/work/[slug]`.
- Copy is a typed layer (not MDX) — edit strings in one file, type-safe.

## Add media / assets (placeholders today)
Drop these into `public/` (links/slots already point at them):
- `public/HDSI_Submission.pdf` — the datathon submission.
- Replace `MediaSlot` placeholders by swapping them for `<img>`/video in the
  relevant component once you have screenshots/recordings (Written Exposure &
  Gallant screenshots, Hack For Impact demo, UFC charts, audio-visualizer clip,
  Adelphi/Lavner photo).

## Deploy (free `*.vercel.app` — no custom domain)
The base URL is derived from `process.env.VERCEL_PROJECT_PRODUCTION_URL`
(`src/lib/site-url.ts`), so OG tags + sitemap auto-use your real Vercel URL — no
code change needed for a domain-less deploy.

**Option A — GitHub + Vercel (recommended; gives CI/CD):**
1. Create a GitHub repo (e.g. `srb5012/portfolio`) and push this project.
2. Import it at https://vercel.com/new — Vercel auto-detects Next.js.
3. Deploy → `https://<project>.vercel.app`. Pushes to `main` redeploy
   production; branches/PRs get preview URLs.

**Option B — Vercel CLI:**
```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production
```

**Node note:** Vercel runs Node 20+, so `@tailwindcss/oxide` installs its native
binary automatically — the local `--no-save` workaround above is **local-only**
and is not committed. (Optionally pin Node 20.x in Vercel → Project Settings.)

Add a custom domain later in Vercel → Domains; `site-url.ts` keeps working.

## Open items
- ~~Gallant stack~~ → WordPress + PHP (done).
- ~~Hero support-line~~ → keeping the current draft.
- Swap real media into the `MediaSlot` placeholders when ready; optional custom domain later.
