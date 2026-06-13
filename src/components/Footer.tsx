import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-600">Erno</p>
          <p className="mt-1 text-sm text-ink-soft">
            Hernán De Souza · AI Engineer · Argentina
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
          <Link href="/sobre" className="hover:text-ink">Sobre</Link>
          <Link href="/casos" className="hover:text-ink">Casos</Link>
          <Link href="/contacto" className="hover:text-ink">Contacto</Link>
          <a href="https://github.com/SoyErnoModo" target="_blank" rel="noreferrer" className="hover:text-ink">
            GitHub
          </a>
        </div>
      </div>
      <p className="mx-auto max-w-5xl px-5 pb-8 text-xs text-ink-faint">
        © {new Date().getFullYear()} Hernán De Souza · Hecho con Next.js, en rioplatense.
      </p>
    </footer>
  );
}
