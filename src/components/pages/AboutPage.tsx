import { person, stack } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { getContent } from "@/lib/resolve";
import { Chip } from "@/components/ProjectCard";
import { SiteShell } from "@/components/SiteShell";

export function AboutPage({ locale }: { locale: Locale }) {
  const { copy, experience } = getContent(locale);
  const t = copy.about;
  return (
    <SiteShell locale={locale} page="about">
      <div className="mx-auto max-w-3xl px-5 pt-16 pb-12 sm:pt-20">
        <h1 className="font-display text-4xl font-700 tracking-tight sm:text-5xl">{t.heading}</h1>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
          <p>
            {t.introLead}
            <strong className="text-ink">{person.name}</strong>
            {t.introTail(person.location, person.timezone)}
          </p>
          <p>{t.currentRole}</p>
          <p>{t.seeking}</p>
        </div>

        <h2 className="mt-14 font-display text-2xl font-600">{t.experience}</h2>
        <ol className="mt-5 space-y-3">
          {experience.map((j) => (
            <li
              key={j.id}
              className={`rounded-2xl border border-border bg-surface ${
                j.compact ? "p-4" : "p-6"
              }`}
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-base font-600">
                  {j.role} <span className="text-ink-soft">· {j.company}</span>
                </h3>
                <p className="mono text-xs text-ink-faint">{j.period}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{j.summary}</p>
            </li>
          ))}
        </ol>

        <h2 className="mt-14 font-display text-2xl font-600">{t.howIWork}</h2>
        <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {t.principles.map((p) => (
            <div key={p.title} className="bg-surface p-6">
              <h3 className="font-display text-base font-600 text-accent-soft">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-14 font-display text-2xl font-600">{t.stack}</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
