"use client";

import { useEffect, useState } from "react";
import { hero } from "@/content/site";
import { useInView } from "@/lib/useInView";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export function Hero() {
  const reduced = usePrefersReducedMotion();
  // once:false so the typewriter replays each time the hero re-enters view.
  const { ref, inView } = useInView<HTMLElement>({
    once: false,
    threshold: 0.45,
  });
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
  const full = hero.headline;

  useEffect(() => {
    if (reduced) {
      setTyped(full);
      setDone(true);
      return;
    }
    if (!inView) {
      setTyped("");
      setDone(false);
      return;
    }

    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    setTyped("");
    setDone(false);

    const tick = () => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i < full.length) {
        timer = setTimeout(tick, 42 + Math.random() * 38);
      } else {
        setDone(true);
      }
    };
    timer = setTimeout(tick, 350);
    return () => clearTimeout(timer);
  }, [inView, reduced, full]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[88svh] items-center"
    >
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <h1 className="text-[2.5rem] font-light leading-[1.12] tracking-tight text-pretty sm:text-6xl lg:text-7xl">
          <span aria-hidden="true" className="tw-animated">
            {typed}
          </span>
          <span
            aria-hidden="true"
            className={`tw-animated tw-cursor ${done ? "" : "tw-cursor--typing"}`}
          />
          <span className="sr-only tw-fallback">{full}</span>
        </h1>

        <div
          className={`mt-6 transition-opacity duration-700 ${
            done ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="max-w-xl text-lg text-ink-muted sm:text-xl">
            {hero.subline}
          </p>
        </div>

        <div
          className={`mt-10 flex flex-col gap-6 transition-opacity duration-700 ${
            done ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-sm italic text-ink-muted">
            {hero.meta}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={hero.ctas[0].href}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              {hero.ctas[0].label}
            </a>
            <a
              href={hero.ctas[1].href}
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink"
            >
              {hero.ctas[1].label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
