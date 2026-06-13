import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Hernán De Souza (Erno), Sr AI Engineer argentino. Construyo software con IA en producción: fintech, producto propio y agentic coding con Claude Code.",
};

const valores = [
  {
    t: "Pensar antes de codear",
    d: "Explicitar supuestos, nombrar la confusión, proponer lo más simple. La ambigüedad se pregunta, no se adivina.",
  },
  {
    t: "Simplicidad primero",
    d: "El mínimo código que resuelve el problema pedido. Nada especulativo. Si un senior lo llamaría sobre-complicado, sobra.",
  },
  {
    t: "Honestidad técnica",
    d: "Reporto los resultados como son. Si un test falla, lo digo. Una historia por feature, lo que funcionó y lo que rompió.",
  },
  {
    t: "Spec antes que código",
    d: "Para features nuevas y decisiones de arquitectura, escribo el spec primero (Given/When/Then). El criterio es el trabajo.",
  },
];

const stack = [
  "Claude Code", "MCP", "Hooks & Skills", "Next.js 16", "React 19",
  "TypeScript", "Tailwind v4", "Firebase", "Node", "LLMs / Agentes",
  "RAG & Evals", "Pagos agénticos", "SEO / GEO", "OpenSpec",
];

export default function Sobre() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-20 pb-12">
      <p className="mono mb-4 text-sm text-accent-soft">{"// sobre mí"}</p>
      <h1 className="font-display text-4xl font-700 tracking-tight sm:text-5xl">
        Hola, soy Hernán.
      </h1>
      <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
        <p>
          Soy <strong className="text-ink">Sr AI Engineer</strong> y trabajo todos los
          días construyendo software con IA en producción — no en slides, no en demos:
          sistemas que shippean y que la gente usa.
        </p>
        <p>
          Mi laburo vive en dos mundos. En una <strong className="text-ink">fintech
          argentina</strong> hago plataforma, agentes y SEO/GEO. Y en{" "}
          <strong className="text-ink">Firulapp</strong>, mi producto propio, construí una
          app de comunidad para dueños de mascotas con IA — más de 200 PRs hechos con
          Claude Code, con harness de calidad y specs antes del código.
        </p>
        <p>
          Documento todo en público, en rioplatense y con voz pedagógica. La idea es
          simple: mostrar <em>cómo</em> se hace, con el código y los errores a la vista.
          En español casi nadie cuenta el agentic coding de verdad. Ese es el hueco que
          ocupo.
        </p>
      </div>

      <h2 className="mt-14 font-display text-2xl font-600">Cómo trabajo</h2>
      <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {valores.map((v) => (
          <div key={v.t} className="bg-surface p-6">
            <h3 className="font-display text-base font-600 text-accent-soft">{v.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.d}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-14 font-display text-2xl font-600">Stack</h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span
            key={s}
            className="mono rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-ink-soft"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
