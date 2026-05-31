import { ArrowUpRight } from "lucide-react";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { MediaSlot } from "../MediaSlot";
import { freelance, teaching } from "@/content/site";

export function Experience() {
  return (
    <Section id="experience" bordered>
      <SectionHeading
        kicker="Experience"
        title="Building, and helping others build."
      />

      {/* Freelance */}
      <div className="mb-16">
        <Reveal>
          <h3 className="font-kicker text-sm uppercase tracking-[0.15em] text-ink-muted">
            Freelance web development &amp; design
          </h3>
          <p className="mt-1 max-w-2xl leading-relaxed text-ink-muted">
            {freelance.intro}
          </p>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {freelance.projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80} className="h-full">
              <article className="card flex h-full flex-col rounded-xl border border-hairline bg-paper p-6">
                <h4 className="text-lg font-semibold tracking-tight">
                  {project.name}
                </h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {project.blurb}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-hairline px-2.5 py-1 font-kicker text-[11px] text-ink-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-1 text-sm font-medium"
                  >
                    Visit site <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Teaching */}
      <div>
        <Reveal>
          <h3 className="font-kicker text-sm uppercase tracking-[0.15em] text-ink-muted">
            Teaching &amp; tutoring
          </h3>
          <p className="mt-1 max-w-2xl leading-relaxed text-ink-muted">
            Making hard things usable for newcomers, the same belief in a
            classroom.
          </p>
        </Reveal>
        <div className="mt-8 space-y-8">
          {teaching.map((job, i) => (
            <Reveal key={job.org} delay={i * 80}>
              <article className="grid gap-4 border-t border-hairline pt-6 md:grid-cols-[1fr_2fr]">
                <div>
                  <h4 className="font-semibold tracking-tight">{job.role}</h4>
                  <p className="text-sm text-ink-muted">{job.org}</p>
                  <p className="mt-1 font-kicker text-xs text-ink-muted">
                    {job.dates}
                  </p>
                </div>
                <div>
                  <ul className="space-y-2">
                    {job.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-muted"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  {job.media ? (
                    <MediaSlot
                      kind="image"
                      label={job.media.label}
                      src={job.media.src}
                      ratio="3 / 1"
                      className="mt-5"
                    />
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
