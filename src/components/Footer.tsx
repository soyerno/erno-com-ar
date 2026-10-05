import Link from "next/link";
import { person } from "@/lib/content";

const linkClass = "inline-flex min-h-11 items-center hover:text-ink";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-600">Erno</p>
          <p className="mt-1 text-sm text-ink-soft">
            {person.name} · AI Engineer · {person.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 text-sm text-ink-soft">
          <Link href="/projects" className={linkClass}>Projects</Link>
          <Link href="/about" className={linkClass}>About</Link>
          <Link href="/contact" className={linkClass}>Contact</Link>
          <a href={`mailto:${person.email}`} className={linkClass}>Email</a>
          <a href={person.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
            LinkedIn
          </a>
          <a href={person.github} target="_blank" rel="noreferrer" className={linkClass}>
            GitHub
          </a>
        </div>
      </div>
      <p className="mx-auto max-w-5xl px-5 pb-8 text-xs text-ink-faint">
        © {new Date().getFullYear()} {person.name}
      </p>
    </footer>
  );
}
