import type { Copy } from "./types";

export const en: Copy = {
  htmlLang: "en",
  ogLocale: "en_US",
  meta: {
    title: "Hernán De Souza — Forward Deployed AI Engineer",
    titleSuffix: "Hernán De Souza",
    description:
      "Hernán De Souza is an AI Engineer in Buenos Aires looking for Forward Deployed Engineer roles. He turns business problems into LLM systems in production and has built software professionally since 2010.",
    keywords: [
      "Forward Deployed Engineer",
      "Forward Deployed AI Engineer",
      "AI Engineer",
      "LLM applications",
      "Generative Engine Optimization",
      "MCP",
      "Claude Code",
      "Next.js",
      "Buenos Aires",
      "Hernán De Souza",
      "Erno",
    ],
    photoAlt: "Portrait of Hernán De Souza",
    pages: {
      projects: {
        title: "Projects",
        description:
          "Projects by Hernán De Souza: own products, LLM systems at a fintech, sites and tools built for others, open-source agent infrastructure for Claude Code and MCP, libraries and a community project.",
      },
      about: {
        title: "About",
        description:
          "Hernán De Souza is an AI Engineer at MODO in Buenos Aires who has built software professionally since 2010. Experience, working principles and stack.",
      },
      contact: {
        title: "Contact",
        description:
          "Contact Hernán De Souza about Forward Deployed Engineer roles. Remote from Buenos Aires (UTC-3), English and Spanish.",
      },
    },
  },
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  present: "present",
  projectGroups: {
    Products: "Products",
    "Built for others": "Built for others",
    "Agent infrastructure": "Agent infrastructure",
    "Open source": "Open source",
    Community: "Community",
  },
  projectItems: {
    firulapp: {
      title: "Firulapp",
      role: "Own product, built end to end",
      summary:
        "Community app for pet owners in Buenos Aires: a social feed plus an AI-assisted Lost & Found. Over 200 pull requests shipped with Claude Code under a quality harness, with its own design system and specs written before code. The mobile app runs through Capacitor.",
    },
    "fintech-ai": {
      title: "LLM systems at a fintech",
      role: "AI Engineer at MODO, day job",
      summary:
        "LLM applications taken from prompt design to production APIs, with OpenAI, Anthropic and Gemini integrated into product surfaces. Generative Engine Optimization for AI search, tracked with mention rate, citation share and traffic attribution. Internal AI tools that automate repetitive processes. Described in generic terms.",
    },
    prompteo: {
      title: "Prompteo",
      role: "Own product",
      summary:
        "Duolingo-style learning app, in Spanish, that teaches people who live off a trade or a small business to use AI without programming. 141 short interactive lessons across 9 courses, with XP, streaks and spaced-repetition review.",
    },
    "777-en-serie": {
      title: "777 en serie",
      role: "Site and live graphics for a streaming show",
      summary:
        "Website for an urban streaming show that broadcasts music, interviews and freestyle battles from San Martín, Buenos Aires, plus a live graphics engine for its broadcasts. The layouts are built in OBS and the on-screen content is driven from the app.",
    },
    "dermacare-studio": {
      title: "Dermacare Studio",
      role: "Site and appointment system for a studio",
      summary:
        "Website for an aesthetics studio in Buenos Aires, plus a client management and appointment system.",
    },
    "edgar-hernan": {
      title: "Edgar Hernán",
      role: "Artist site and press kit",
      summary:
        "Press kit site for a cuarteto singer from Buenos Aires: background, media appearances, live show, repertoire and booking contact.",
    },
    atlantis: {
      title: "Atlantis",
      role: "Open-source orchestrator for Claude Code",
      summary:
        "One request fans out to specialist agents that work in parallel and in isolation. Auditors review, judges weigh each blocker, and one decision comes back. Config-driven, a single file, zero dependencies.",
    },
    "nexo-agent": {
      title: "Nexo Agent Server",
      role: "Open-source MCP control plane",
      summary:
        "A durable MCP control plane for networks of AI orchestrators, plus a one-command client for Claude Code and Claude Desktop.",
    },
    "claude-code-skills": {
      title: "Claude Code skills marketplace",
      role: "Open-source skills and agents",
      summary:
        "Six skills and agents. session-recall searches past sessions by topic. session-recap builds a weekly cross-source recap. topic-roadmap inventories a topic across PRs, specs, docs and branches. distill-lint is a read-only knowledge-base audit. lectura-bionica applies bionic reading for readers with ADHD or dyslexia.",
    },
    "nestjs-toon": {
      title: "nestjs-toon",
      role: "NestJS library",
      summary:
        "A NestJS interceptor and Swagger decorators that serialize API responses to TOON to reduce LLM token usage.",
    },
    "stripe-plans-importer": {
      title: "stripe-plans-importer-nodejs",
      role: "Node.js utility",
      summary: "Bulk-import Stripe plans from a CSV file with Node.js.",
    },
    tiendarapida: {
      title: "Tienda Rápida",
      role: "Free self-hostable store MVP",
      summary:
        "A free online store you can host yourself. The catalog lives in Google Sheets and checkout works with Mercado Pago or MODO.",
    },
    solar34: {
      title: "Solar34",
      role: "Neighborhood project",
      summary:
        "A solar proposal site for the 34 rooftops of a Buenos Aires neighborhood, Barrio Gral. San Martín in Villa Pueyrredón.",
    },
  },
  jobSummaries: {
    "modo-ai":
      "LLM applications from prompt design to production APIs. Generative Engine Optimization for AI search surfaces, tracked with mention rate, citation share and traffic attribution. OpenAI, Anthropic and Gemini APIs integrated into product surfaces. Internal AI tools that automate repetitive processes. Legacy stack modernization with AI-assisted tooling.",
    "modo-frontend":
      "Led a multi-brand Next.js (SSR) module with a themeable Tailwind design system and per-client configuration. Unit and integration tests, release monitoring and A/B tests. Agent automations for postmortem review and an MCP server connecting product data to ChatGPT. Shared component library, RFCs, demos and technical proposals.",
    freelance:
      "Direct client work: an e-commerce platform for automotive products (Strapi, Next.js, Postgres, MongoDB, Redis), a long-standing media client, FWTv (Angular, Node, Express, MongoDB, Redis, AWS S3), and a football player pass management app (Next.js, Redis). Auth with Passport.js, tests with Jest and Cypress.",
    "true-north":
      "Two fintech projects on Node, Express, MongoDB and React: loan application flows, third-party integrations (credit scoring, real-time financial data verification), digital document signature and stakeholder dashboards tracking each application.",
    "vida-tec":
      "Education platform on Angular and NgRx, NestJS, AWS Lambda and S3, and MongoDB, with guided product tours.",
    belatrix:
      "UI architecture for an analytics and data-mining tool with most processing on the client. UI lead on an Angular and Redux project. Gave internal talks on Angular Elements, Aurelia and NgRx.",
    fansworld:
      "API, admin panel, Angular frontend, PhoneGap mobile app, push notifications and video processing for a social video platform.",
    mrm: "Production front-end for agency clients across LAMP, .NET and Java stacks, with distributed teams.",
    "8a-marketing": "Microsites, newsletters and CMS pages.",
  },
  nav: {
    projects: "Projects",
    about: "About",
    contact: "Contact",
    github: "GitHub",
    switchLabel: "ES",
    switchName: "Español",
    switchAria: "Ver en español",
    switchLang: "es",
  },
  footer: {
    role: "AI Engineer",
    email: "Email",
  },
  home: {
    eyebrow: "Forward Deployed Engineer roles",
    headline: "Forward Deployed AI Engineer.",
    intro:
      "I embed with a team, turn a business problem into an LLM system running in production, and stay until it is measured and handed over. I am an AI Engineer at MODO, a fintech in Argentina, and I have built software professionally since 2010.",
    getInTouch: "Get in touch",
    seeProjects: "See projects",
    proofPoints: [
      { value: "Since 2010", label: "Building software professionally" },
      { value: "200+ PRs", label: "Shipped on Firulapp, my own product, with Claude Code" },
      { value: "3 LLM APIs", label: "OpenAI, Anthropic and Gemini in product surfaces at MODO" },
      { value: "UTC-3", label: "Remote from Buenos Aires, English and Spanish" },
    ],
    workHeading: "How I work with customers",
    workSteps: [
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
    ],
    selectedProjects: "Selected projects",
    allProjects: "All projects →",
    recentExperience: "Recent experience",
    fullBackground: "Full background →",
    ctaHeading: "Hiring for a Forward Deployed Engineer?",
    ctaBody: "Email me or message me on LinkedIn. I work in English and Spanish.",
  },
  projectsPage: {
    heading: "Projects",
    intro:
      "Public repositories and live products, plus the work I do at my current job described in general terms.",
  },
  about: {
    heading: "About",
    introLead: "I am ",
    introTail: (location, timezone) =>
      `, also known as Erno. I live in ${location} (${timezone}) and work in English and Spanish. I have built software professionally since 2010.`,
    currentRole:
      "Today I am an AI Engineer at MODO, a fintech in Argentina, where I take LLM applications from prompt design to production APIs. Before that I worked as a senior frontend developer and as a full-stack developer on fintech, education, media and e-commerce products.",
    seeking:
      "I am looking for Forward Deployed Engineer roles. Outside work I build my own product, Firulapp, and open-source tools for agent workflows.",
    experience: "Experience",
    howIWork: "How I work",
    principles: [
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
    ],
    stack: "Stack",
  },
  contact: {
    heading: "Contact",
    lookingFor: "What I am looking for",
    lookingItems: (location, timezone) => [
      "Forward Deployed Engineer roles.",
      `Remote, based in ${location} (${timezone}).`,
      "I work in English and Spanish.",
    ],
    reachMe: "Reach me",
    emailNote: "The most direct way to reach me.",
    linkedinNote: "Full work history.",
    githubNote: "Code for the open-source projects.",
  },
};
