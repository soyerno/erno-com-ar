import { person } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { getContent } from "@/lib/resolve";
import { SiteShell } from "@/components/SiteShell";

export function ContactPage({ locale }: { locale: Locale }) {
  const { copy } = getContent(locale);
  const t = copy.contact;
  const channels = [
    { label: "Email", value: person.email, href: `mailto:${person.email}`, note: t.emailNote },
    { label: "LinkedIn", value: "in/hdesouza", href: person.linkedin, note: t.linkedinNote },
    { label: "GitHub", value: "@soyerno", href: person.github, note: t.githubNote },
  ];
  return (
    <SiteShell locale={locale} page="contact">
      <div className="mx-auto max-w-3xl px-5 pt-16 pb-12 sm:pt-20">
        <h1 className="font-display text-4xl font-700 tracking-tight sm:text-5xl">{t.heading}</h1>

        <h2 className="mt-10 font-display text-2xl font-600">{t.lookingFor}</h2>
        <ul className="mt-4 space-y-2 text-lg leading-relaxed text-ink-soft">
          {t.lookingItems(person.location, person.timezone).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="mt-12 font-display text-2xl font-600">{t.reachMe}</h2>
        <div className="mt-5 space-y-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex min-h-11 flex-col gap-2 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/60 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-display text-lg font-600">{c.label}</p>
                <p className="mt-1 text-sm text-ink-soft">{c.note}</p>
              </div>
              <span className="mono break-all text-sm text-accent-soft">{c.value} ↗</span>
            </a>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
