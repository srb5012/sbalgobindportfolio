import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import { SITE_URL } from "@/lib/site-url";
import { BottomBar } from "@/components/BottomBar";

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Good software should work for everyone. Shawn Balgobind — Computer Science & Mathematics, Boston University. Building for AI research and freelance web clients.",
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description:
      "Good software should work for everyone, not just the people who already know how to use it.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={merriweather.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.tw-animated{display:none!important}.tw-fallback{position:static!important;width:auto!important;height:auto!important;margin:0!important;clip:auto!important;clip-path:none!important;white-space:normal!important}`}</style>
        </noscript>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <BottomBar />
      </body>
    </html>
  );
}
