# fde-positioning

Feature document (ODD). Mirror: Engram topic `odd/fde-positioning/tasks`.
Locator: `odd/tasks/fde-positioning.md` · Branch: `feat/fde-positioning`

## Objective

Reposition erno.com.ar from a Spanish "AI Engineer who writes in public" site into an
English-first hiring site for **Forward Deployed Engineer** roles, and get it live on
`https://erno.com.ar`.

## Problem

- The site targets LATAM developers first and recruiters last; the owner wants the inverse.
- Projects are three loosely described "casos"; real public work is not listed.
- The domain has no DNS delegation (`NXDOMAIN`), so the site and `hola@erno.com.ar` are unreachable.
- The hero links to a journal URL that returns 404.

## Why

The owner wants the site to be the channel through which recruiters and hiring managers at
global AI/SaaS companies find him and contact him. Decision recorded 2026-10-05.

## Scope

In: copy and information architecture of all pages, project list, SEO/GEO metadata,
`llms.txt`, route names, docs that describe positioning, DNS + HTTPS + email forwarding.

Out: visual redesign (tokens, fonts and component style stay), blog/MDX, i18n, analytics,
contact form backend, CV PDF (no source file exists).

## Constraints

- Static export (`output: "export"`, `trailingSlash: true`), hosted on Vercel. No server code.
- Next 16: read `node_modules/next/dist/docs/` before using any framework API.
- CI installs with `npm ci`; use npm, do not touch `pnpm-lock.yaml` / `pnpm-workspace.yaml`.
- Truthfulness: every claim on the site must come from the fact sheet below. No invented
  metrics, clients, testimonials, titles or availability dates.
- "Forward Deployed AI Engineer" is the positioning and the role sought. He has not held
  that job title: never write it as a past or current title. Current title is "AI Engineer".
- MODO: name it only as employer with role titles and dates. Describe the work in generic
  terms. No internal product names, roadmap, numbers or customers.
- All site copy in English, neutral professional register, first person, plain words.
  No hype vocabulary, no em-dash-heavy slogans, no emoji.

## Fact sheet (only source of claims)

Person: Hernán De Souza, alias Erno. Buenos Aires, Argentina (UTC-3). Works in English and
Spanish. Building software professionally since 2010.
Contact: `hola@erno.com.ar` · https://www.linkedin.com/in/hdesouza/ · https://github.com/soyerno

Experience (LinkedIn, public):

| Period | Company | Role | What |
|---|---|---|---|
| Jan 2026 – present | MODO (fintech, Argentina) | AI Engineer | LLM applications taken from prompt design to production APIs; Generative Engine Optimization for AI search surfaces, tracked with mention rate, citation share and traffic attribution; OpenAI, Anthropic and Gemini APIs integrated into product surfaces; internal AI tools that automate repetitive processes; legacy stack modernization with AI-assisted tooling. |
| Apr 2024 – Dec 2025 | MODO | Senior Frontend Developer | Led a multi-brand Next.js (SSR) module with a themeable Tailwind design system and per-client configuration; unit and integration tests; release monitoring; A/B tests; agent automations for postmortem review; an MCP server connecting product data to ChatGPT; shared component library; RFCs, demos and technical proposals. |
| Jan 2023 – present | Freelance | Full-stack Developer | Direct client work: e-commerce platform for automotive products (Strapi, Next.js, Postgres, MongoDB, Redis); long-standing media client FWTv (Angular, Node, Express, MongoDB, Redis, AWS S3); football player pass management app (Next.js, Redis). Auth with Passport.js; Jest and Cypress. |
| Oct 2020 – Jan 2023 | True North | Senior Full Stack Developer | Two fintech projects on Node/Express/MongoDB/React: loan application flows, third-party integrations (credit scoring, real-time financial data verification), digital document signature, stakeholder dashboards tracking each application. |
| May 2019 – Oct 2020 | VIDA Tec | Senior Web Application Developer | Education platform: Angular + NgRx, NestJS, AWS Lambda and S3, MongoDB; guided product tours. |
| May 2016 – Feb 2019 | Belatrix Software | Full Stack Developer, UI Lead | UI architecture for an analytics and data-mining tool with most processing client-side; UI lead on an Angular/Redux project; internal talks (Angular Elements, Aurelia, NgRx). |
| Sep 2013 – Mar 2016 | FansWorld TV | MEAN Stack Developer | API, admin panel, Angular frontend, PhoneGap mobile app, push notifications and video processing for a social video platform. |
| Jul 2012 – Sep 2013 | MRM Worldwide | Front-End Developer | Production front-end for agency clients across LAMP, .NET and Java stacks with distributed teams. |
| Jan 2010 – Jul 2012 | 8A Marketing | Front-End Developer | Microsites, newsletters, CMS pages. |

Projects (public repos and live products):

| Slug | Title | Group | Facts | Links |
|---|---|---|---|---|
| firulapp | Firulapp | Products | Own product, built end to end. Community app for pet owners in Buenos Aires: social feed plus AI-assisted Lost & Found. 200+ pull requests shipped with Claude Code under a quality harness, own design system, specs before code. Mobile app via Capacitor. Stack: Next.js, React 19, Firebase, Claude Code, MCP, OpenSpec. | https://firulapp.com.ar |
| fintech-ai | LLM systems at a fintech | Products | Day job at MODO as described above, generic terms only. Stack: LLM APIs (OpenAI, Anthropic, Gemini), MCP, Next.js, GEO. | none |
| atlantis | Atlantis | Agent infrastructure | Open-source orchestrator for Claude Code: one request fans out to specialist agents working in parallel and isolated, auditors review, judges weigh each blocker, one decision comes back. Config-driven, single file, zero dependencies. JavaScript. | https://github.com/soyerno/Atlantis |
| nexo-agent | Nexo Agent Server | Agent infrastructure | Durable MCP control plane for networks of AI orchestrators, plus a one-command client for Claude Code and Claude Desktop. Python. | https://github.com/soyerno/nexo-agent-server, https://github.com/soyerno/nexo-agent-client |
| claude-code-skills | Claude Code skills marketplace | Agent infrastructure | Six skills and agents: session-recall (search past sessions by topic), session-recap (weekly cross-source recap), topic-roadmap (topic inventory across PRs, specs, docs, branches), distill-lint (read-only knowledge-base audit), lectura-bionica (bionic reading for ADHD/dyslexia readers). | https://github.com/SoyErnoModo/erno-modo-marketplace |
| nestjs-toon | nestjs-toon | Open source | NestJS interceptor and Swagger decorators that serialize API responses to TOON to reduce LLM token usage. | https://github.com/soyerno/nestjs-toon |
| stripe-plans-importer | stripe-plans-importer-nodejs | Open source | Bulk-import Stripe plans from a CSV with Node.js. | https://github.com/soyerno/stripe-plans-importer-nodejs |
| tiendarapida | Tienda Rápida | Open source | Free self-hostable online store MVP: catalog in Google Sheets, checkout with Mercado Pago or MODO. Next.js. | https://tiendarapida.vercel.app, https://github.com/soyerno/tiendarapida |
| solar34 | Solar34 | Community | Solar proposal site for the 34 rooftops of a Buenos Aires neighborhood (Barrio Gral. San Martín, Villa Pueyrredón). | https://github.com/soyerno/solar34 |

Featured on home, in order: firulapp, fintech-ai, atlantis, nexo-agent.

## Information architecture

Routes are renamed to English. The old Spanish routes never resolved publicly (domain had
no DNS), so they are deleted with no redirects.

| Route | Purpose | Content |
|---|---|---|
| `/` | Say who he is and what to do next in one screen | Eyebrow with role sought and location. H1 with name and positioning. One paragraph: embeds with a team, turns a business problem into an LLM system in production, stays until it is measured and handed over. Primary CTA "Get in touch" to `/contact`, secondary "See projects" to `/projects`. Then: proof strip (4 facts), "How I work with customers" (3 steps: scope with the people who own the problem, ship to production, measure and hand over), featured projects (4), short experience snapshot linking to `/about`, closing hire CTA with email and LinkedIn. |
| `/projects` | Full project list as delivery evidence | Intro line, then projects grouped by Group in the order Products, Agent infrastructure, Open source, Community. Each: title, role line, summary, stack chips, links. |
| `/about` | Background a hiring manager checks | Short bio, experience timeline (table above, newest first; 2010–2013 entries can be compact), how I work (keep the four principles, translated), stack. |
| `/contact` | Conversion page | What he is looking for (Forward Deployed Engineer roles, remote from Buenos Aires, UTC-3, English and Spanish), then channels: email, LinkedIn, GitHub. |

Nav: Projects, About, Contact (visually primary), GitHub. Footer mirrors it.
Remove every link to `soyernomodo.github.io/erno-modo` (404).

SEO/GEO: `<html lang="en">`; title "Hernán De Souza — Forward Deployed AI Engineer";
description, keywords, Open Graph (`en_US`) and Twitter text rewritten; JSON-LD `Person`
with `jobTitle: "AI Engineer"`, `worksFor` MODO, `knowsAbout` including forward deployed
engineering, `sameAs` LinkedIn and GitHub; `sitemap.ts` with the new routes; `llms.txt`
rewritten in English from the fact sheet.

## Tasks

- [x] T1 — Site repositioning (content model, pages, nav, footer, metadata, sitemap, llms.txt, README and strategy doc note). Route: delegated direct, one writer (trigger: 2+ non-trivial files, reading that prepares a write). Commit `8eb1883`.
- [ ] T2 — Go live on Vercel (owner decision 2026-10-05, replaces GitHub Pages): Vercel project and domains, Cloudflare zone and DNS, NIC.ar delegation, Email Routing for `hola@`, `docs/04-DEPLOY.md`. Route: inline plus browser. Open: NIC.ar delegation and Email Routing (owner), `prompteo` CNAME (owner).
- [ ] T3 — Merge to `main` and verify production URLs. Owner decision.

## Acceptance criteria

- T1: `npm run lint`, `npx tsc --noEmit` and `npm run build` pass; `out/` contains
  `index.html`, `projects/index.html`, `about/index.html`, `contact/index.html`, `llms.txt`,
  `sitemap.xml`; no `sobre`, `casos`, `contacto` output; no Spanish UI copy; no
  link to the 404 journal; every factual claim traceable to the fact sheet; all nine
  projects listed on `/projects`.
- T2: Vercel production deployment is READY; `dig NS erno.com.ar` returns Cloudflare nameservers; `https://erno.com.ar` returns
  200 with a valid certificate; mail to `hola@erno.com.ar` is delivered.

## Checks

Test-first exception: the repo has no test runner and the change is static copy and
markup, so there is no meaningful runnable RED. Checks are lint, typecheck, static build,
output-file assertions and a browser readback.

## Delivery

Forecast: about 700 authored changed lines (full copy rewrite of four pages plus data).
Strategy: `single-pr`. Rationale: solo repository with direct-to-main history and no
reviewers; splitting a copy rewrite would leave the site half Spanish, half English.
Review mode: receipt-driven development is `off` (global), so no native review is started.

## Progress

- 2026-10-05: explored repo, LinkedIn and public GitHub repos; audience decided (global
  companies, FDE role); branch created; this document written.

- 2026-10-05, T1: writer reported `node node_modules/eslint/bin/eslint.js` clean, `npx tsc --noEmit` clean, `npm run build` passing with routes `/`, `/about`, `/contact`, `/projects`. `npm run lint` fails before eslint on a pnpm dependency hook (`ERR_PNPM_IGNORED_BUILDS`) caused by stray untracked pnpm files; not caused by this change. Parent spot check: `npm run build` re-run, passing. Risk assessment `high` with review mode off, so an independent read-only verifier checked every claim against the fact sheet: pass, no findings. Browser readback of home, projects and contact from the static build: rendered as specified.
- 2026-10-05, T2: Vercel project `erno-com-ar` created and connected to the GitHub repo; `erno.com.ar` and `www.erno.com.ar` assigned to it. Cloudflare zone created on the personal account (free plan) with `A @ 76.76.21.21` and `CNAME www cname.vercel-dns.com`, both DNS only. Assigned nameservers: `nash.ns.cloudflare.com`, `rosalyn.ns.cloudflare.com`. GitHub Pages workflow, `public/CNAME` and `public/.nojekyll` removed. A third record for the pre-existing `prompteo` subdomain was blocked by the permission classifier and left to the owner.

## Next step

Owner delegates the domain in NIC.ar and sets up Email Routing; then verify `https://erno.com.ar`.
