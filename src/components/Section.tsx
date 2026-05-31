import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  id,
  children,
  className = "",
  bordered = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Draw a hairline divider above the section. */
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 sm:py-28 ${
        bordered ? "border-t border-hairline" : ""
      } ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
