import Link from "next/link";
import { casos, pilares } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="mx-auto max-w-5xl px-5 pt-20 pb-16 sm:pt-28">
        <p className="mono mb-5 text-sm text-accent-soft">
          {"// Sr AI Engineer · Argentina"}
        </p>
        <h1 className="font-display text-4xl font-700 leading-[1.05] tracking-tight sm:text-6xl">
          Construyo software con IA
          <br />
          <span className="text-accent">en producción de verdad.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          No prompts mágicos ni demos. Agentes, evals, pagos agénticos y Claude Code en
          repos reales — fintech y producto propio. En rioplatense, con el código y los
          errores a la vista.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/casos"
            className="rounded-lg bg-accent px-5 py-3 text-sm font-600 text-white transition-transform hover:-translate-y-0.5"
          >
            Ver casos
          </Link>
          <a
            href="https://soyernomodo.github.io/erno-modo/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border bg-surface px-5 py-3 text-sm font-600 text-ink transition-colors hover:border-accent"
          >
            Leer la bitácora ↗
          </a>
        </div>
      </section>

      {/* ── Casos destacados ── */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-600">Casos</h2>
          <Link href="/casos" className="text-sm text-ink-soft hover:text-ink">
            Ver todos →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {casos.map((c) => (
            <article
              key={c.slug}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/60"
            >
              <h3 className="font-display text-lg font-600">{c.titulo}</h3>
              <p className="mono mt-1 text-xs text-accent-soft">{c.destacado}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{c.resumen}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.stack.slice(0, 3).map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-surface-2 px-2 py-0.5 text-[11px] text-ink-faint"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Pilares ── */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <h2 className="mb-8 font-display text-2xl font-600">Sobre qué escribo</h2>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {pilares.map((p, i) => (
            <div key={p.titulo} className="bg-surface p-6">
              <p className="mono text-xs text-ink-faint">0{i + 1}</p>
              <h3 className="mt-2 font-display text-lg font-600">{p.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-surface to-surface-2 p-10 text-center">
          <h2 className="font-display text-3xl font-700 tracking-tight">¿Hablamos?</h2>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">
            Charlas, consultoría sobre IA aplicada o agentic coding, o simplemente
            mostrarte cómo lo hago.
          </p>
          <Link
            href="/contacto"
            className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-600 text-white transition-transform hover:-translate-y-0.5"
          >
            Escribime
          </Link>
        </div>
      </section>
    </>
  );
}
