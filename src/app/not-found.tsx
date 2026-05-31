import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70svh] flex-col items-center justify-center text-center">
      <p className="font-kicker text-xs uppercase tracking-[0.25em] text-ink-muted">
        404
      </p>
      <h1 className="mt-8 text-4xl font-normal tracking-tight sm:text-5xl">
        Page not found.
      </h1>
      <p className="mt-1 max-w-md text-ink-muted">
        That page doesn&apos;t exist, or it moved. Let&apos;s get you back on
        track.
      </p>
      <Link href="/" className="link-underline mt-8 text-sm font-medium">
        Back home
      </Link>
    </Container>
  );
}
