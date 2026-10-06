<p align="center">
  <img src=".github/banner.svg" alt="erno.com.ar" width="100%">
</p>

# erno.com.ar

Sitio de **Hernán De Souza** (alias *Erno*), AI Engineer en Buenos Aires. Está en inglés (`/`) y tiene versión en español (`/es/`); apunta a roles de Forward Deployed Engineer: quién es, qué construyó y cómo contactarlo.

Construido con **Next.js 16** (App Router, React 19, TypeScript) + **Tailwind v4**, exportado como sitio estático.
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
| `/` | Hero con rol buscado, prueba en cuatro datos, cómo trabaja con clientes, proyectos destacados, experiencia reciente y CTA. |
| `/projects` | Los proyectos agrupados: Products, Built for others, Agent infrastructure, Open source, Community. |
| `/about` | Bio, experiencia (más reciente primero), principios de trabajo y stack. |
| `/contact` | Qué busca y canales: email, LinkedIn, GitHub. |

Los datos que no se traducen (slugs, links, stack, fechas, orden) están en `src/lib/content.ts`. Los textos viven en `src/lib/copy/en.ts` y `src/lib/copy/es.ts`, tipados con `Copy` (`types.ts`): si falta una clave en un idioma, no compila. Las cuatro páginas se renderizan desde `src/components/pages/` con un `locale`; las rutas de `src/app/(en)/` y `src/app/(es)/es/` son wrappers de una línea. Cada grupo de rutas tiene su propio root layout (así `<html lang>` es `en` o `es`) y ambos usan `RootHtml`. SEO/GEO: `src/lib/metadata.ts` (canonical, `hreflang`, Open Graph por idioma), `robots.ts`, `sitemap.ts`, `public/llms.txt`, JSON-LD `Person` en `RootHtml.tsx`.

## Estrategia

Docs de marca, arquitectura y plan de contenido en [`docs/`](docs/).

## Deploy

Vercel (export estático) + DNS en Cloudflare + dominio `erno.com.ar`. Ver [`docs/04-DEPLOY.md`](docs/04-DEPLOY.md).
