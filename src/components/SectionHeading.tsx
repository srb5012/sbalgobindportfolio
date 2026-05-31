import { Reveal } from "./Reveal";

export function SectionHeading({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="mb-6 sm:mb-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
        {kicker}
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-2 max-w-2xl leading-relaxed text-ink-muted">{intro}</p>
      ) : null}
    </Reveal>
  );
}
