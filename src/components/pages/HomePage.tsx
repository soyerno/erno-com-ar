import Image from "next/image";
import Link from "next/link";
import { person } from "@/lib/content";
import { pagePath, type Locale } from "@/lib/i18n";
import { getContent } from "@/lib/resolve";
import { ProjectCard } from "@/components/ProjectCard";
import { SiteShell } from "@/components/SiteShell";

export function HomePage({ locale }: { locale: Locale }) {
  const { copy, featuredProjects, snapshot } = getContent(locale);
  const t = copy.home;
  return (
    <SiteShell locale={locale} page="home">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 pt-16 pb-14 sm:pt-24">
        <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-12">
          <div>
            <p className="mono mb-5 text-sm text-accent-soft">
              {t.eyebrow} · {person.location}
            </p>
            <h1 className="font-display text-4xl font-700 leading-[1.05] tracking-tight sm:text-6xl">
              {person.name}.
              <br />
              <span className="text-accent">{t.headline}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{t.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={pagePath(locale, "contact")}
                className="inline-flex min-h-11 items-center rounded-lg bg-accent px-5 text-sm font-600 text-white transition-transform hover:-translate-y-0.5"
              >
                {t.getInTouch}
              </Link>
              <Link
                href={pagePath(locale, "projects")}
                className="inline-flex min-h-11 items-center rounded-lg border border-border bg-surface px-5 text-sm font-600 text-ink transition-colors hover:border-accent"
              >
                {t.seeProjects}
              </Link>
            </div>
          </div>
          <Image
            src={person.photo}
            alt={copy.meta.photoAlt}
            width={512}
            height={512}
            priority
            className="h-28 w-28 shrink-0 rounded-2xl border border-border object-cover sm:h-52 sm:w-52"
          />
        </div>
      </section>

      {/* Proof strip */}
      <section className="mx-auto max-w-5xl px-5 pb-6">
        <dl className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {t.proofPoints.map((p) => (
            <div key={p.value} className="bg-surface p-5">
              <dt className="font-display text-xl font-600">{p.value}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink-soft">{p.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* How I work with customers */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <h2 className="mb-8 font-display text-2xl font-600">{t.workHeading}</h2>
        <ol className="grid gap-4 sm:grid-cols-3">
          {t.workSteps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-border bg-surface p-6">
              <p className="mono text-xs text-ink-faint">0{i + 1}</p>
              <h3 className="mt-2 font-display text-lg font-600">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-600">{t.selectedProjects}</h2>
          <Link
            href={pagePath(locale, "projects")}
            className="inline-flex min-h-11 items-center text-sm text-ink-soft hover:text-ink"
          >
            {t.allProjects}
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} compact />
          ))}
        </div>
      </section>

      {/* Experience snapshot */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-600">{t.recentExperience}</h2>
          <Link
            href={pagePath(locale, "about")}
            className="inline-flex min-h-11 items-center text-sm text-ink-soft hover:text-ink"
          >
            {t.fullBackground}
          </Link>
        </div>
        <ul className="divide-y divide-border rounded-2xl border border-border bg-surface">
          {snapshot.map((j) => (
            <li
              key={j.id}
              className="flex flex-col gap-1 p-5 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <p className="font-display text-base font-600">
                {j.role} <span className="text-ink-soft">· {j.company}</span>
              </p>
              <p className="mono text-xs text-ink-faint">{j.period}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-surface to-surface-2 p-8 text-center sm:p-10">
          <h2 className="font-display text-3xl font-700 tracking-tight">{t.ctaHeading}</h2>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">{t.ctaBody}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${person.email}`}
              className="inline-flex min-h-11 items-center rounded-lg bg-accent px-6 text-sm font-600 text-white transition-transform hover:-translate-y-0.5"
            >
              {person.email}
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-lg border border-border bg-surface px-6 text-sm font-600 text-ink transition-colors hover:border-accent"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
