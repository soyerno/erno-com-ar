import Link from "next/link";
import { person } from "@/lib/content";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <Link href="/" className="group flex items-center gap-2">
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
            GitHub ↗
          </a>
          <Link
            href="/contact"
            className="ml-1 inline-flex min-h-11 items-center rounded-lg bg-accent px-4 text-sm font-600 text-white transition-transform hover:-translate-y-0.5"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
