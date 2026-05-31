import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons";
import { Section } from "../Section";
import { Reveal } from "../Reveal";
import { contact, site } from "@/content/site";

const actions = [
  { label: site.email, href: `mailto:${site.email}`, icon: Mail, external: false },
  { label: "Download résumé", href: site.resume, icon: FileText, external: true },
  { label: "LinkedIn", href: site.linkedin, icon: LinkedinIcon, external: true },
  { label: "GitHub", href: site.github, icon: GithubIcon, external: true },
];

export function Contact() {
  return (
    <Section id="contact" bordered>
      <Reveal>
        <h2 className="max-w-3xl text-3xl font-normal tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {contact.headline}
        </h2>
        <p className="mt-1 max-w-xl text-ink-muted">{contact.line}</p>
      </Reveal>
      <Reveal delay={100}>
        <div className="mt-10 flex flex-wrap gap-3">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <a
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-hairline px-4 py-2.5 text-sm transition-colors hover:border-ink"
              >
                <Icon size={16} />
                {action.label}
              </a>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}
