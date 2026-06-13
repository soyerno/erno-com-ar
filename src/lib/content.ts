export type Caso = {
  slug: string;
  titulo: string;
  rol: string;
  resumen: string;
  stack: string[];
  destacado?: string;
  link?: { href: string; label: string };
};

export const casos: Caso[] = [
  {
    slug: "firulapp",
    titulo: "Firulapp",
    rol: "Producto propio · diseño + ingeniería end-to-end",
    resumen:
      "App de comunidad para dueños de mascotas en Buenos Aires: feed social + Lost & Found con IA. Más de 200 PRs construidos con Claude Code en producción, con harness de calidad, design system propio y specs antes del código.",
    stack: ["Next.js", "React 19", "Firebase", "Claude Code", "MCP", "OpenSpec"],
    destacado: "200+ PRs · IA Lost & Found · App móvil (Capacitor)",
    link: { href: "https://firulapp.com.ar", label: "firulapp.com.ar" },
  },
  {
    slug: "fintech-ia",
    titulo: "IA aplicada en fintech",
    rol: "Sr AI Engineer",
    resumen:
      "Trabajo de plataforma en una fintech argentina: agentes, SEO/GEO para buscadores con IA, y prácticas de Claude Code en producción (skills, MCP, hooks, worktrees). Acá comparto los aprendizajes genéricos — el criterio, no lo confidencial.",
    stack: ["LLMs", "Agentes", "SEO/GEO", "Next.js", "Plataforma"],
    destacado: "Pagos agénticos · Claude Code en prod · Migraciones",
  },
  {
    slug: "agentic-coding",
    titulo: "Agentic coding en serio",
    rol: "Open source · herramientas y método",
    resumen:
      "Skills de Claude Code, servidores MCP, hooks y un harness de calidad que uso en repos reales. Documentado en público en la bitácora: una historia por feature, lo que funcionó y lo que rompió.",
    stack: ["Claude Code", "MCP", "Hooks", "Skills", "Worktrees"],
    destacado: "Build in public · herramientas reutilizables",
    link: { href: "https://github.com/SoyErnoModo", label: "GitHub" },
  },
];

export const pilares = [
  {
    titulo: "Agentic coding en producción",
    desc: "Claude Code en un repo real: skills, MCP, hooks, worktrees, harness de calidad. El tema más vacío en español.",
  },
  {
    titulo: "AI Engineering aplicada",
    desc: "RAG, agentes, evals, pagos agénticos, SEO/GEO para buscadores con IA. Lo que shippea, no lo de juguete.",
  },
  {
    titulo: "Build in public",
    desc: "Casos reales documentados: Firulapp y aprendizajes de fintech. Con honestidad sobre lo que rompió.",
  },
  {
    titulo: "Criterio de ingeniería",
    desc: "Simplicidad primero, spec-driven, Software 3.0. La capa que separa al senior del que copia prompts.",
  },
];
