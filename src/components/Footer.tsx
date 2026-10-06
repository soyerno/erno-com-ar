import Link from "next/link";
import { getCopy } from "@/lib/copy";
import { person } from "@/lib/content";
import { otherLocale, pagePath, type Locale, type PageKey } from "@/lib/i18n";

const linkClass = "inline-flex min-h-11 items-center hover:text-ink";

export function Footer({ locale, page }: { locale: Locale; page: PageKey }) {
  const { footer, nav } = getCopy(locale);
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-600">Erno</p>
          <p className="mt-1 text-sm text-ink-soft">
            {person.name} · {footer.role} · {person.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 text-sm text-ink-soft">
          <Link href={pagePath(locale, "projects")} className={linkClass}>
            {nav.projects}
          </Link>
          <Link href={pagePath(locale, "about")} className={linkClass}>
            {nav.about}
          </Link>
          <Link href={pagePath(locale, "contact")} className={linkClass}>
            {nav.contact}
          </Link>
          <a href={`mailto:${person.email}`} className={linkClass}>{footer.email}</a>
          <a href={person.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
            LinkedIn
          </a>
          <a href={person.github} target="_blank" rel="noreferrer" className={linkClass}>
            GitHub
          </a>
          <Link
            href={pagePath(otherLocale(locale), page)}
            hrefLang={nav.switchLang}
            lang={nav.switchLang}
            aria-label={nav.switchAria}
            className={linkClass}
          >
            {nav.switchName}
          </Link>
        </div>
      </div>
      <p className="mx-auto max-w-5xl px-5 pb-8 text-xs text-ink-faint">
        © {new Date().getFullYear()} {person.name}
      </p>
    </footer>
  );
}
