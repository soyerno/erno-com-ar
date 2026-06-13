import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Charlas, consultoría sobre IA aplicada y agentic coding, o colaboraciones. Escribime.",
};

const canales = [
  {
    label: "Email",
    valor: "hola@erno.com.ar",
    href: "mailto:hola@erno.com.ar",
    nota: "Lo más directo. Charlas, consultoría, colaboraciones.",
  },
  {
    label: "GitHub",
    valor: "@soyerno",
    href: "https://github.com/soyerno",
    nota: "El código, las skills y los proyectos.",
  },
  {
    label: "LinkedIn",
    valor: "in/hdesouza",
    href: "https://www.linkedin.com/in/hdesouza/",
    nota: "Para temas profesionales, charlas y consultoría.",
  },
];

export default function Contacto() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-20 pb-12">
      <p className="mono mb-4 text-sm text-accent-soft">{"// contacto"}</p>
      <h1 className="font-display text-4xl font-700 tracking-tight sm:text-5xl">
        ¿Hablamos?
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Si querés una charla sobre IA aplicada o agentic coding, asesoría para tu equipo,
        o simplemente cruzar ideas — escribime. Respondo todo.
      </p>

      <div className="mt-12 space-y-3">
        {canales.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="flex items-center justify-between rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/60"
          >
            <div>
              <p className="font-display text-lg font-600">{c.label}</p>
              <p className="mt-1 text-sm text-ink-soft">{c.nota}</p>
            </div>
            <span className="mono text-sm text-accent-soft">{c.valor} ↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}
