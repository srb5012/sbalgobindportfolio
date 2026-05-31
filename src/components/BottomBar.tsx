import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { ThemeToggle } from "./ThemeToggle";
import { site } from "@/content/site";

const btn =
  "inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-paper hover:text-ink";

export function BottomBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4">
      <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-hairline bg-surface/80 p-1.5 shadow-lg backdrop-blur">
        <a href={`mailto:${site.email}`} aria-label="Email Shawn" className={btn}>
          <Mail size={18} />
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={btn}
        >
          <GithubIcon size={18} />
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={btn}
        >
          <LinkedinIcon size={18} />
        </a>
        <span className="mx-1 h-5 w-px bg-hairline" aria-hidden />
        <ThemeToggle />
      </div>
    </div>
  );
}
