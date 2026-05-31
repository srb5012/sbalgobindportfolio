import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import {
  education,
  spotlightCourses,
  coursework,
  certificates,
  skills,
} from "@/content/site";

export function Academics() {
  return (
    <Section id="academics" bordered>
      <SectionHeading kicker="Academics" title="The foundation." />

      {/* Education */}
      <Reveal>
        <div className="flex flex-col justify-between gap-2 border-t border-hairline pt-6 sm:flex-row sm:items-baseline">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              {education.school}
            </h3>
            <p className="text-ink-muted">{education.degree}</p>
          </div>
          <p className="font-mono text-sm text-ink-muted">{education.detail}</p>
        </div>
      </Reveal>

      {/* Spotlight courses */}
      <Reveal delay={80}>
        <div className="mt-10">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
            Favorite coursework
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {spotlightCourses.map((course) => (
              <div
                key={course.code}
                className="rounded-xl border border-hairline p-5"
              >
                <p className="font-mono text-xs text-ink-muted">{course.code}</p>
                <p className="mt-1 font-medium">{course.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Other coursework */}
      <Reveal delay={120}>
        <div className="mt-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
            Also studied
          </p>
          <p className="mt-3 text-ink-muted">{coursework.join(" · ")}</p>
        </div>
      </Reveal>

      {/* Certificates */}
      <Reveal delay={160}>
        <div className="mt-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
            Certificates
          </p>
          <p className="mt-3 text-ink-muted">{certificates.join(" · ")}</p>
        </div>
      </Reveal>

      {/* Skills */}
      <div className="mt-12 space-y-6">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 70}>
            <div className="grid gap-3 border-t border-hairline pt-6 md:grid-cols-[1fr_3fr]">
              <p className="font-mono text-sm text-ink-muted">{group.group}</p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-hairline px-3 py-1 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
