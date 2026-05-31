import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { about } from "@/content/site";

export function About() {
  return (
    <Section id="about" bordered>
      <SectionHeading kicker="About" title="Clear thinking, made usable." />
      <div className="max-w-2xl">
        <Reveal>
          <p className="text-xl leading-relaxed text-pretty sm:text-2xl">
            {about.lead}
          </p>
        </Reveal>
        <div className="mt-6 space-y-4">
          {about.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="leading-relaxed text-ink-muted">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
