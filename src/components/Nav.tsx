import Link from "next/link";

const links = [
  { href: "/sobre", label: "Sobre" },
  { href: "/casos", label: "Casos" },
  { href: "/contacto", label: "Contacto" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link href="/" className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent font-display text-base font-700 text-white">
            e
          </span>
          <span className="font-display text-lg font-600 tracking-tight">erno</span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-ink-soft">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </Link>
          ))}
          <a
            href="https://github.com/soyerno"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-ink"
          >
            GitHub ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
