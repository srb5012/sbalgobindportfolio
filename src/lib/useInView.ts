"use client";

import { useEffect, useRef, useState } from "react";

type Options = {
  /** Stop observing after first reveal (default true). */
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
};

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: Options = {},
) {
  const { once = true, threshold = 0.15, rootMargin = "0px 0px -10% 0px" } =
    options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  return { ref, inView };
}
