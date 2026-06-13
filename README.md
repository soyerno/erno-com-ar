<p align="center">
  <img src=".github/banner.svg" alt="erno.com.ar" width="100%">
</p>

# erno.com.ar

Sitio profesional de **Hernán De Souza** (alias *Erno*), Sr AI Engineer argentino.
Marca personal: AI Engineering aplicada, agentic coding con Claude Code, pagos agénticos.

Construido con **Next.js 16** (App Router, React 19, TypeScript) + **Tailwind v4**.
Dark-first, identidad propia (accent violeta `#7c5cff`).

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Estructura

| Ruta | Qué es |
|---|---|
| `/` | Home: hero + casos + pilares + CTA. |
| `/sobre` | Bio, valores de ingeniería, stack. |
| `/casos` | Portfolio real (Firulapp, fintech, agentic coding). |
| `/contacto` | Canales. |

Contenido editable en `src/lib/content.ts`. SEO/GEO: `robots.ts`, `sitemap.ts`, `public/llms.txt`, JSON-LD `Person` en `layout.tsx`.

## Estrategia

Docs de marca, arquitectura y plan de contenido en [`docs/`](docs/).

## Deploy

Vercel + dominio `erno.com.ar`.