import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { MediaSlot } from "@/components/MediaSlot";
import { caseStudies, getCaseStudy } from "@/content/work";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return { title: cs.title, description: cs.subtitle };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <article className="py-16 sm:py-20">
      <Container>
        <Link
          href="/#experience"
          className="link-underline inline-flex items-center gap-1 text-sm text-ink-muted"
        >
          <ArrowLeft size={14} /> Back
        </Link>

        <header className="mt-8 max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {cs.title}
          </h1>
          <p className="mt-4 text-lg text-ink-muted">{cs.subtitle}</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-ink-muted">
            <span>{cs.date}</span>
            {cs.url ? (
              <a
                href={cs.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1 text-ink"
              >
                Visit site <ArrowUpRight size={12} />
              </a>
            ) : null}
          </div>
          <ul className="mt-5 flex flex-wrap gap-2">
            {cs.tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-hairline px-2.5 py-1 font-mono text-[11px] text-ink-muted"
              >
                {t}
              </li>
            ))}
          </ul>
        </header>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {cs.media.map((m, i) => (
            <MediaSlot key={i} kind={m.kind} label={m.label} ratio={m.ratio} />
          ))}
        </div>

        <div className="prose-min mt-14">
          {cs.sections.map((section, i) => (
            <Reveal key={i}>
              {section.heading ? <h2>{section.heading}</h2> : null}
              {section.body.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </Reveal>
          ))}
        </div>

        <div className="mt-16 border-t border-hairline pt-8">
          <Link
            href="/#contact"
            className="link-underline inline-flex items-center gap-1 text-sm font-medium"
          >
            Get in touch <ArrowUpRight size={14} />
          </Link>
        </div>
      </Container>
    </article>
  );
}
