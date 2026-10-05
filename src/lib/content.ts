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

export type ProjectGroup =
  | "Products"
  | "Built for others"
  | "Agent infrastructure"
  | "Open source"
  | "Community";

export const projectGroups: ProjectGroup[] = [
  "Products",
  "Built for others",
  "Agent infrastructure",
  "Open source",
  "Community",
];

export type Project = {
  slug: string;
  title: string;
  group: ProjectGroup;
  role: string;
  summary: string;
  stack: string[];
  links: { href: string; label: string }[];
  featured?: number;
};

export const projects: Project[] = [
  {
    slug: "firulapp",
    title: "Firulapp",
    group: "Products",
    role: "Own product, built end to end",
    summary:
      "Community app for pet owners in Buenos Aires: a social feed plus an AI-assisted Lost & Found. Over 200 pull requests shipped with Claude Code under a quality harness, with its own design system and specs written before code. The mobile app runs through Capacitor.",
    stack: ["Next.js", "React 19", "Firebase", "Claude Code", "MCP", "OpenSpec"],
    links: [{ href: "https://firulapp.com.ar", label: "firulapp.com.ar" }],
    featured: 1,
  },
  {
    slug: "fintech-ai",
    title: "LLM systems at a fintech",
    group: "Products",
    role: "AI Engineer at MODO, day job",
    summary:
      "LLM applications taken from prompt design to production APIs, with OpenAI, Anthropic and Gemini integrated into product surfaces. Generative Engine Optimization for AI search, tracked with mention rate, citation share and traffic attribution. Internal AI tools that automate repetitive processes. Described in generic terms.",
    stack: ["OpenAI", "Anthropic", "Gemini", "MCP", "Next.js", "GEO"],
    links: [],
    featured: 2,
  },
  {
    slug: "prompteo",
    title: "Prompteo",
    group: "Products",
    role: "Own product",
    summary:
      "Duolingo-style learning app, in Spanish, that teaches people who live off a trade or a small business to use AI without programming. 141 short interactive lessons across 9 courses, with XP, streaks and spaced-repetition review.",
    stack: ["Next.js", "TypeScript"],
    links: [{ href: "https://claudelingo-roan.vercel.app", label: "Live app" }],
  },
  {
    slug: "777-en-serie",
    title: "777 en serie",
    group: "Built for others",
    role: "Site and live graphics for a streaming show",
    summary:
      "Website for an urban streaming show that broadcasts music, interviews and freestyle battles from San Martín, Buenos Aires, plus a live graphics engine for its broadcasts. The layouts are built in OBS and the on-screen content is driven from the app.",
    stack: ["TypeScript", "OBS"],
    links: [{ href: "https://vamosalaire.app", label: "vamosalaire.app" }],
  },
  {
    slug: "dermacare-studio",
    title: "Dermacare Studio",
    group: "Built for others",
    role: "Site and appointment system for a studio",
    summary:
      "Website for an aesthetics studio in Buenos Aires, plus a client management and appointment system.",
    stack: ["Next.js", "Supabase"],
    links: [{ href: "https://dermacare.ar", label: "dermacare.ar" }],
  },
  {
    slug: "edgar-hernan",
    title: "Edgar Hernán",
    group: "Built for others",
    role: "Artist site and press kit",
    summary:
      "Press kit site for a cuarteto singer from Buenos Aires: background, media appearances, live show, repertoire and booking contact.",
    stack: [],
    links: [{ href: "https://edgar-hernan.vercel.app", label: "edgar-hernan.vercel.app" }],
  },
  {
    slug: "atlantis",
    title: "Atlantis",
    group: "Agent infrastructure",
    role: "Open-source orchestrator for Claude Code",
    summary:
      "One request fans out to specialist agents that work in parallel and in isolation. Auditors review, judges weigh each blocker, and one decision comes back. Config-driven, a single file, zero dependencies.",
    stack: ["JavaScript", "Claude Code"],
    links: [{ href: "https://github.com/soyerno/Atlantis", label: "GitHub" }],
    featured: 3,
  },
  {
    slug: "nexo-agent",
    title: "Nexo Agent Server",
    group: "Agent infrastructure",
    role: "Open-source MCP control plane",
    summary:
      "A durable MCP control plane for networks of AI orchestrators, plus a one-command client for Claude Code and Claude Desktop.",
    stack: ["Python", "MCP", "Claude Code", "Claude Desktop"],
    links: [
      { href: "https://github.com/soyerno/nexo-agent-server", label: "Server" },
      { href: "https://github.com/soyerno/nexo-agent-client", label: "Client" },
    ],
    featured: 4,
  },
  {
    slug: "claude-code-skills",
    title: "Claude Code skills marketplace",
    group: "Agent infrastructure",
    role: "Open-source skills and agents",
    summary:
      "Six skills and agents. session-recall searches past sessions by topic. session-recap builds a weekly cross-source recap. topic-roadmap inventories a topic across PRs, specs, docs and branches. distill-lint is a read-only knowledge-base audit. lectura-bionica applies bionic reading for readers with ADHD or dyslexia.",
    stack: ["Claude Code", "Skills", "Agents"],
    links: [
      { href: "https://github.com/SoyErnoModo/erno-modo-marketplace", label: "GitHub" },
    ],
  },
  {
    slug: "nestjs-toon",
    title: "nestjs-toon",
    group: "Open source",
    role: "NestJS library",
    summary:
      "A NestJS interceptor and Swagger decorators that serialize API responses to TOON to reduce LLM token usage.",
    stack: ["NestJS", "TypeScript", "Swagger", "TOON"],
    links: [{ href: "https://github.com/soyerno/nestjs-toon", label: "GitHub" }],
  },
  {
    slug: "stripe-plans-importer",
    title: "stripe-plans-importer-nodejs",
    group: "Open source",
    role: "Node.js utility",
    summary: "Bulk-import Stripe plans from a CSV file with Node.js.",
    stack: ["Node.js", "Stripe"],
    links: [
      { href: "https://github.com/soyerno/stripe-plans-importer-nodejs", label: "GitHub" },
    ],
  },
  {
    slug: "tiendarapida",
    title: "Tienda Rápida",
    group: "Open source",
    role: "Free self-hostable store MVP",
    summary:
      "A free online store you can host yourself. The catalog lives in Google Sheets and checkout works with Mercado Pago or MODO.",
    stack: ["Next.js", "Google Sheets", "Mercado Pago", "MODO"],
    links: [
      { href: "https://tiendarapida.vercel.app", label: "Live" },
      { href: "https://github.com/soyerno/tiendarapida", label: "GitHub" },
    ],
  },
  {
    slug: "solar34",
    title: "Solar34",
    group: "Community",
    role: "Neighborhood project",
    summary:
      "A solar proposal site for the 34 rooftops of a Buenos Aires neighborhood, Barrio Gral. San Martín in Villa Pueyrredón.",
    stack: [],
    links: [{ href: "https://github.com/soyerno/solar34", label: "GitHub" }],
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0));

export type Job = {
  period: string;
  company: string;
  role: string;
  summary: string;
  compact?: boolean;
};

// Newest first.
export const experience: Job[] = [
  {
    period: "Jan 2026 – present",
    company: "MODO",
    role: "AI Engineer",
    summary:
      "LLM applications from prompt design to production APIs. Generative Engine Optimization for AI search surfaces, tracked with mention rate, citation share and traffic attribution. OpenAI, Anthropic and Gemini APIs integrated into product surfaces. Internal AI tools that automate repetitive processes. Legacy stack modernization with AI-assisted tooling.",
  },
  {
    period: "Apr 2024 – Dec 2025",
    company: "MODO",
    role: "Senior Frontend Developer",
    summary:
      "Led a multi-brand Next.js (SSR) module with a themeable Tailwind design system and per-client configuration. Unit and integration tests, release monitoring and A/B tests. Agent automations for postmortem review and an MCP server connecting product data to ChatGPT. Shared component library, RFCs, demos and technical proposals.",
  },
  {
    period: "Jan 2023 – present",
    company: "Freelance",
    role: "Full-stack Developer",
    summary:
      "Direct client work: an e-commerce platform for automotive products (Strapi, Next.js, Postgres, MongoDB, Redis), a long-standing media client, FWTv (Angular, Node, Express, MongoDB, Redis, AWS S3), and a football player pass management app (Next.js, Redis). Auth with Passport.js, tests with Jest and Cypress.",
  },
  {
    period: "Oct 2020 – Jan 2023",
    company: "True North",
    role: "Senior Full Stack Developer",
    summary:
      "Two fintech projects on Node, Express, MongoDB and React: loan application flows, third-party integrations (credit scoring, real-time financial data verification), digital document signature and stakeholder dashboards tracking each application.",
  },
  {
    period: "May 2019 – Oct 2020",
    company: "VIDA Tec",
    role: "Senior Web Application Developer",
    summary:
      "Education platform on Angular and NgRx, NestJS, AWS Lambda and S3, and MongoDB, with guided product tours.",
  },
  {
    period: "May 2016 – Feb 2019",
    company: "Belatrix Software",
    role: "Full Stack Developer, UI Lead",
    summary:
      "UI architecture for an analytics and data-mining tool with most processing on the client. UI lead on an Angular and Redux project. Gave internal talks on Angular Elements, Aurelia and NgRx.",
  },
  {
    period: "Sep 2013 – Mar 2016",
    company: "FansWorld TV",
    role: "MEAN Stack Developer",
    summary:
      "API, admin panel, Angular frontend, PhoneGap mobile app, push notifications and video processing for a social video platform.",
  },
  {
    period: "Jul 2012 – Sep 2013",
    company: "MRM Worldwide",
    role: "Front-End Developer",
    summary:
      "Production front-end for agency clients across LAMP, .NET and Java stacks, with distributed teams.",
    compact: true,
  },
  {
    period: "Jan 2010 – Jul 2012",
    company: "8A Marketing",
    role: "Front-End Developer",
    summary: "Microsites, newsletters and CMS pages.",
    compact: true,
  },
];

export const snapshot = experience.slice(0, 3);

export const proofPoints = [
  { value: "Since 2010", label: "Building software professionally" },
  { value: "200+ PRs", label: "Shipped on Firulapp, my own product, with Claude Code" },
  { value: "3 LLM APIs", label: "OpenAI, Anthropic and Gemini in product surfaces at MODO" },
  { value: "UTC-3", label: "Remote from Buenos Aires, English and Spanish" },
];

export const workSteps = [
  {
    title: "Scope with the people who own the problem",
    body: "I start with the team that lives with the problem, not with a model choice. We agree on what the system must do and how we will know it works.",
  },
  {
    title: "Ship to production",
    body: "I build the smallest version that does the job and take it to a production API.",
  },
  {
    title: "Measure and hand over",
    body: "I stay until the result is measured, then hand it over so the team can run it.",
  },
];

export const principles = [
  {
    title: "Think before coding",
    body: "State assumptions, name the confusion, propose the simplest option. Ambiguity gets a question, not a guess.",
  },
  {
    title: "Simplicity first",
    body: "The minimum code that solves the problem asked. Nothing speculative. If a senior engineer would call it overcomplicated, it is.",
  },
  {
    title: "Honest reporting",
    body: "I report results as they are. If a test fails, I say so. I write down what worked and what broke.",
  },
  {
    title: "Spec before code",
    body: "For new features and architecture decisions I write the spec first, in Given/When/Then form. The judgment is the work.",
  },
];

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
