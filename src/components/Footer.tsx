import { site } from "@/content/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-hairline pb-28 pt-12">
      <Container className="flex flex-col gap-1">
        <p className="font-kicker text-sm">{site.name}</p>
        <p className="text-sm text-ink-muted">
          Good software should work for everyone.
        </p>
        <p className="mt-6 text-xs text-ink-muted">
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
      </Container>
    </footer>
  );
}
