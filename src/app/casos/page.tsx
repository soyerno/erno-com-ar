import type { Metadata } from "next";
import { casos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Casos",
  description:
    "Trabajo real con IA en producción: Firulapp (producto propio), IA aplicada en fintech y agentic coding con Claude Code.",
};

export default function Casos() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-20 pb-12">
      <p className="mono mb-4 text-sm text-accent-soft">{"// casos"}</p>
      <h1 className="font-display text-4xl font-700 tracking-tight sm:text-5xl">
        Lo que construí.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Sistemas reales, en producción. No demos. Acá el resumen; el detrás de escena —
        decisiones, PRs, lo que rompió — vive en la bitácora.
      </p>

      <div className="mt-12 space-y-5">
        {casos.map((c) => (
          <article
            key={c.slug}
            className="rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-accent/60"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-2xl font-600">{c.titulo}</h2>
              {c.link && (
                <a
                  href={c.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-accent-soft hover:text-accent"
                >
                  {c.link.label} ↗
                </a>
              )}
            </div>
            <p className="mono mt-1 text-xs text-ink-faint">{c.rol}</p>
            {c.destacado && (
              <p className="mono mt-3 text-sm text-accent-soft">{c.destacado}</p>
            )}
            <p className="mt-3 leading-relaxed text-ink-soft">{c.resumen}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {c.stack.map((s) => (
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
    </div>
  );
}
