import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/site";
import { MediaSlot } from "./MediaSlot";
import { Reveal } from "./Reveal";

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {tags.map((t) => (
        <li
          key={t}
          className="rounded-full border border-hairline px-2.5 py-1 font-mono text-[11px] text-ink-muted"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function Links({ links }: { links: Project["links"] }) {
  if (!links.length) return null;
  return (
    <div className="mt-5 flex flex-wrap gap-5">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="link-underline inline-flex items-center gap-1 text-sm font-medium"
        >
          {link.label} <ArrowUpRight size={14} />
        </a>
      ))}
    </div>
  );
}

function Heading({ project }: { project: Project }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
      <span className="shrink-0 font-mono text-xs text-ink-muted">
        {project.date}
      </span>
    </div>
  );
}

export function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="card flex h-full flex-col rounded-xl border border-hairline bg-paper p-6 sm:p-7">
        <Heading project={project} />
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {project.blurb}
        </p>
        {project.media ? (
          <MediaSlot
            kind={project.media.kind}
            label={project.media.label}
            src={project.media.src}
            className="mt-5"
          />
        ) : null}
        <Tags tags={project.tags} />
        <Links links={project.links} />
      </article>
    </Reveal>
  );
}
