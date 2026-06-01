import { Reveal } from "./Reveal";

export function SectionHeading({
  kicker,
  title,
  intro,
  introVariant = "default",
}: {
  kicker: string;
  title: string;
  intro?: string;
  /** Larger lead line directly under the title (e.g. About). */
  introVariant?: "default" | "lead";
}) {
  return (
    <Reveal className="mb-4 sm:mb-5">
      <p className="font-kicker text-xs uppercase tracking-[0.2em] text-ink-muted">
        {kicker}
      </p>
      <h2 className="mt-8 text-3xl font-light tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-1 max-w-2xl leading-relaxed ${
            introVariant === "lead"
              ? "text-xl text-pretty text-ink sm:text-2xl"
              : "text-ink-muted"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
