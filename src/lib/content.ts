// Shared, non-translatable site data: identity, links, slugs, stack, dates, order.
// Everything a reader sees in prose lives in src/lib/copy/{en,es}.ts, keyed by the ids below.

export const SITE = "https://erno.com.ar";

export const person = {
  name: "Hernán De Souza",
  alias: "Erno",
  email: "hola@erno.com.ar",
  linkedin: "https://www.linkedin.com/in/hdesouza/",
  github: "https://github.com/soyerno",
  location: "Buenos Aires, Argentina",
  timezone: "UTC-3",
  photo: "/hernan-de-souza.jpg",
};

export const projectGroups = [
  "Products",
  "Built for others",
  "Agent infrastructure",
  "Open source",
  "Community",
] as const;

export type ProjectGroup = (typeof projectGroups)[number];

export type ProjectBase<Slug extends string = string> = {
  slug: Slug;
  group: ProjectGroup;
  stack: readonly string[];
  links: readonly { href: string; label: string }[];
  /** Position on the home page; projects without it are not featured. */
  featured?: number;
};

const projectData = [
  {
    slug: "firulapp",
    group: "Products",
    stack: ["Next.js", "React 19", "Firebase", "Claude Code", "MCP", "OpenSpec"],
    links: [{ href: "https://firulapp.com.ar", label: "firulapp.com.ar" }],
    featured: 1,
  },
  {
    slug: "fintech-ai",
    group: "Products",
    stack: ["OpenAI", "Anthropic", "Gemini", "MCP", "Next.js", "GEO"],
    links: [],
    featured: 2,
  },
  {
    slug: "prompteo",
    group: "Products",
    stack: ["Next.js", "TypeScript"],
    links: [{ href: "https://claudelingo-roan.vercel.app", label: "Live app" }],
  },
  {
    slug: "777-en-serie",
    group: "Built for others",
    stack: ["TypeScript", "OBS"],
    links: [{ href: "https://vamosalaire.app", label: "vamosalaire.app" }],
  },
  {
    slug: "dermacare-studio",
    group: "Built for others",
    stack: ["Next.js", "Supabase"],
    links: [{ href: "https://dermacare.ar", label: "dermacare.ar" }],
  },
  {
    slug: "edgar-hernan",
    group: "Built for others",
    stack: [],
    links: [{ href: "https://edgar-hernan.vercel.app", label: "edgar-hernan.vercel.app" }],
  },
  {
    slug: "atlantis",
    group: "Agent infrastructure",
    stack: ["JavaScript", "Claude Code"],
    links: [{ href: "https://github.com/soyerno/Atlantis", label: "GitHub" }],
    featured: 3,
  },
  {
    slug: "nexo-agent",
    group: "Agent infrastructure",
    stack: ["Python", "MCP", "Claude Code", "Claude Desktop"],
    links: [
      { href: "https://github.com/soyerno/nexo-agent-server", label: "Server" },
      { href: "https://github.com/soyerno/nexo-agent-client", label: "Client" },
    ],
    featured: 4,
  },
  {
    slug: "claude-code-skills",
    group: "Agent infrastructure",
    stack: ["Claude Code", "Skills", "Agents"],
    links: [
      { href: "https://github.com/SoyErnoModo/erno-modo-marketplace", label: "GitHub" },
    ],
  },
  {
    slug: "nestjs-toon",
    group: "Open source",
    stack: ["NestJS", "TypeScript", "Swagger", "TOON"],
    links: [{ href: "https://github.com/soyerno/nestjs-toon", label: "GitHub" }],
  },
  {
    slug: "stripe-plans-importer",
    group: "Open source",
    stack: ["Node.js", "Stripe"],
    links: [
      { href: "https://github.com/soyerno/stripe-plans-importer-nodejs", label: "GitHub" },
    ],
  },
  {
    slug: "tiendarapida",
    group: "Open source",
    stack: ["Next.js", "Google Sheets", "Mercado Pago", "MODO"],
    links: [
      { href: "https://tiendarapida.vercel.app", label: "Live" },
      { href: "https://github.com/soyerno/tiendarapida", label: "GitHub" },
    ],
  },
  {
    slug: "solar34",
    group: "Community",
    stack: [],
    links: [{ href: "https://github.com/soyerno/solar34", label: "GitHub" }],
  },
] as const satisfies readonly ProjectBase[];

export type ProjectSlug = (typeof projectData)[number]["slug"];

export const projects: readonly ProjectBase<ProjectSlug>[] = projectData;

/** Year and month (1-12). The text ("Jan", "ene", "present") is rendered per locale. */
export type YearMonth = readonly [year: number, month: number];

export type JobBase<Id extends string = string> = {
  id: Id;
  from: YearMonth;
  /** null means current. */
  to: YearMonth | null;
  company: string;
  /** Job titles stay in English in every locale, as on LinkedIn. */
  role: string;
  compact?: boolean;
};

// Newest first.
const jobData = [
  { id: "modo-ai", from: [2026, 1], to: null, company: "MODO", role: "AI Engineer" },
  {
    id: "modo-frontend",
    from: [2024, 4],
    to: [2025, 12],
    company: "MODO",
    role: "Senior Frontend Developer",
  },
  {
    id: "freelance",
    from: [2023, 1],
    to: null,
    company: "Freelance",
    role: "Full-stack Developer",
  },
  {
    id: "true-north",
    from: [2020, 10],
    to: [2023, 1],
    company: "True North",
    role: "Senior Full Stack Developer",
  },
  {
    id: "vida-tec",
    from: [2019, 5],
    to: [2020, 10],
    company: "VIDA Tec",
    role: "Senior Web Application Developer",
  },
  {
    id: "belatrix",
    from: [2016, 5],
    to: [2019, 2],
    company: "Belatrix Software",
    role: "Full Stack Developer, UI Lead",
  },
  {
    id: "fansworld",
    from: [2013, 9],
    to: [2016, 3],
    company: "FansWorld TV",
    role: "MEAN Stack Developer",
  },
  {
    id: "mrm",
    from: [2012, 7],
    to: [2013, 9],
    company: "MRM Worldwide",
    role: "Front-End Developer",
    compact: true,
  },
  {
    id: "8a-marketing",
    from: [2010, 1],
    to: [2012, 7],
    company: "8A Marketing",
    role: "Front-End Developer",
    compact: true,
  },
] as const satisfies readonly JobBase[];

export type JobId = (typeof jobData)[number]["id"];

export const jobs: readonly JobBase<JobId>[] = jobData;

export const stack = [
  "Claude Code",
  "MCP",
  "OpenAI API",
  "Anthropic API",
  "Gemini API",
  "Generative Engine Optimization",
  "TypeScript",
  "Next.js",
  "React",
  "Tailwind",
  "Node.js",
  "NestJS",
  "Python",
  "Angular",
  "MongoDB",
  "Postgres",
  "Redis",
  "Firebase",
  "AWS",
  "OpenSpec",
];
