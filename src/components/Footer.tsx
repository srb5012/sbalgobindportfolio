import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { site } from "@/content/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-hairline py-12">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-mono text-sm font-medium">{site.name}</p>
          <p className="mt-1 text-sm text-ink-muted">
            Good software should work for everyone.
          </p>
        </div>
        <div className="-ml-2 flex items-center gap-1">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email Shawn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-surface hover:text-ink"
          >
            <Mail size={18} />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-surface hover:text-ink"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-surface hover:text-ink"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </Container>
      <Container className="mt-8">
        <p className="text-xs text-ink-muted">
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
      </Container>
    </footer>
  );
}
