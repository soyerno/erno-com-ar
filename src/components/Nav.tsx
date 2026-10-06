import Link from "next/link";
import { getCopy } from "@/lib/copy";
import { person } from "@/lib/content";
import { otherLocale, pagePath, type Locale, type PageKey } from "@/lib/i18n";

export function Nav({ locale, page }: { locale: Locale; page: PageKey }) {
  const { nav } = getCopy(locale);
  const links = [
    { href: pagePath(locale, "projects"), label: nav.projects },
    { href: pagePath(locale, "about"), label: nav.about },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <Link href={pagePath(locale, "home")} className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent font-display text-base font-700 text-white">
            e
          </span>
          <span className="font-display text-lg font-600 tracking-tight">erno</span>
        </Link>
        <div className="flex items-center gap-1 text-sm text-ink-soft sm:gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="inline-flex min-h-11 items-center px-2 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={person.github}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-11 items-center px-2 transition-colors hover:text-ink sm:inline-flex"
          >
            {nav.github} ↗
          </a>
          <Link
            href={pagePath(otherLocale(locale), page)}
            hrefLang={nav.switchLang}
            lang={nav.switchLang}
            aria-label={nav.switchAria}
            className="mono inline-flex min-h-11 items-center px-2 text-xs transition-colors hover:text-ink"
          >
            {nav.switchLabel}
          </Link>
          <Link
            href={pagePath(locale, "contact")}
            className="ml-1 inline-flex min-h-11 items-center rounded-lg bg-accent px-4 text-sm font-600 text-white transition-transform hover:-translate-y-0.5"
          >
            {nav.contact}
          </Link>
        </div>
      </nav>
    </header>
  );
}
