# erno.com.ar — Arquitectura del sitio

> Sitio nuevo, repo propio. Linkea a la bitácora `erno-modo` (no la absorbe).
> Reutiliza el stack y los componentes que ya dominás de `erno-modo`.

---

## 1. Decisión de arquitectura

**Sitio nuevo separado** que actúa como **home de marca personal**. La bitácora `erno-modo` queda como destino enlazado (build in public diario). erno.com.ar es la cara curada y profesional; la bitácora es el detrás de escena.

```
erno.com.ar  (NUEVO — portfolio/marca, curado)
   │
   ├── linkea → bitacora (erno-modo, diario, crudo)
   ├── linkea → GitHub @SoyErnoModo
   └── linkea → X / LinkedIn
```

---

## 2. Mapa del sitio

| Ruta | Propósito | Contenido |
|---|---|---|
| `/` (home) | Pitch en 5 segundos + prueba + CTA | Hero (quién/qué), 3 casos destacados, últimos escritos, prueba social, CTA contacto. |
| `/sobre` | Quién es Erno | Bio rioplatense, stack, valores de ingeniería, foto, qué busca (charlas/consultoría). |
| `/casos` | Portfolio de trabajo real | **Firulapp** (deep dive: app comunidad mascotas + IA Lost&Found, construida con Claude Code), aprendizajes de fintech (genéricos), proyectos OSS. |
| `/escritos` (blog) | Long-form aplicado | Artículos por pilar. Puede sindicar/curar desde la bitácora los mejores. |
| `/recursos` | Lead magnet + autoridad | Skills/herramientas Claude Code descargables, guías, `llms.txt`. (Reusa lo de erno-modo.) |
| `/bitacora` | Redirige/linkea a erno-modo | Build in public diario. No se duplica acá. |
| `/contacto` | Conversión | Charlas, consultoría/advisory, redes, email. |

**MVP (primera versión online):** `/`, `/sobre`, `/casos` (con Firulapp), `/contacto`. El resto se suma incremental.

---

## 3. Stack propuesto

| Capa | Elección | Por qué |
|---|---|---|
| Framework | **Next 16 (App Router, React 19, TS strict)** | Ya lo dominás en erno-modo. Cero curva. Componentes reutilizables. |
| Styling | **Tailwind v4 + tokens semánticos** | Mismo sistema que erno-modo. Identidad visual propia (no verde MODO). |
| Deploy | **Vercel + dominio erno.com.ar** | El cutover que ya estaba preparado en erno-modo. DNS → Vercel. |
| Contenido | MDX o feeds JSON | MDX para escritos; JSON para casos/recursos (patrón erno-modo). |
| SEO/GEO | JSON-LD `Person`, OG dinámico, sitemap, `llms.txt`, canonical | Aprovechar el know-how SEO/GEO que ya tenés. Clave para ser citado por buscadores con IA. |
| Analytics | Vercel Analytics o Plausible | Privacidad-friendly. |

> **Decisión de marca visual:** erno.com.ar necesita identidad **propia** (no el verde `#008859` de MODO, que es del empleador). Definir paleta + tipografías propias en el doc de diseño (pendiente).

---

## 4. Relación técnica con erno-modo

- **Repos separados.** erno.com.ar = repo nuevo. erno-modo sigue siendo la bitácora.
- **Componentes:** copiar/extraer los reutilizables de erno-modo (Card, Pill, ThemeToggle, Header) a erno.com.ar. A futuro, evaluar un paquete compartido (no ahora — simplicidad primero).
- **Dominios:** `erno.com.ar` → sitio nuevo. La bitácora puede vivir en `bitacora.erno.com.ar` o en su URL actual; decidir en deploy.
- **SEO:** un solo `Person` JSON-LD canónico en erno.com.ar; la bitácora referencia con `sameAs`.

---

## 5. Home — wireframe textual

```
┌────────────────────────────────────────────┐
│  [Erno]                  sobre casos escritos contacto │
├────────────────────────────────────────────┤
│  HERO                                                  │
│  "Construyo software con IA en producción."            │
│  Sr AI Engineer · fintech + producto propio.           │
│  [Ver casos]  [Leer la bitácora]                       │
├────────────────────────────────────────────┤
│  CASOS DESTACADOS (3 cards)                            │
│  Firulapp · Claude Code en prod · Pagos agénticos      │
├────────────────────────────────────────────┤
│  ÚLTIMOS ESCRITOS (3) — desde bitácora/blog            │
├────────────────────────────────────────────┤
│  PRUEBA: GitHub stats · charlas · stack                │
├────────────────────────────────────────────┤
│  CTA: "¿Hablamos?" → contacto/redes                    │
└────────────────────────────────────────────┘
```

---

## 6. Próximos pasos técnicos (cuando aprobemos estrategia)

1. Definir identidad visual propia (paleta + tipografías) — doc de diseño.
2. Scaffold Next 16 en repo nuevo `erno-com-ar`.
3. Home + /sobre + /casos (Firulapp) — MVP.
4. Conectar dominio en Vercel.
5. Sumar /escritos y /recursos incremental.
