/**
 * Canonical site URL. On Vercel this resolves to the production domain
 * (e.g. your-project.vercel.app) at build time; locally it falls back to
 * localhost. Set/override by deploying — no custom domain required.
 */
export const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";
