# erno.com.ar — Plan de contenido (redes + GitHub)

> Motor de contenido para construir comunidad. Build in public desde casos reales.
> Canales primarios: **X** + **LinkedIn** + **GitHub**. Bitácora como fuente.

---

## 1. Principio editorial

**Cada cosa que construís en producción es contenido.** No inventamos temas: destilamos de la bitácora, los PRs y los aprendizajes reales. Un PR no trivial → un hilo. Una decisión de arquitectura → un escrito. Un error que costó → la historia más valiosa.

Modelo: **curado por una persona, no submission-driven.** Si funcionó en real, sube. Si rompió, también.

---

## 2. Canales y rol de cada uno

| Canal | Rol | Cadencia objetivo |
|---|---|---|
| **X (@?)** | Alcance, hilos técnicos, build in public, debate. | 3–4 / semana (1 hilo largo + 2-3 cortos). |
| **LinkedIn** | Autoridad profesional, clientes/reclutadores, long-form. | 2 / semana (1 post sustancia + 1 reflexión/caso). |
| **GitHub @SoyErnoModo** | Prueba de competencia, OSS, perfil README. | Continuo (repos pinned + README cuidado). |
| **Bitácora (erno-modo)** | Fuente cruda, build in public diario. | Diario/lo que salga. |
| **erno.com.ar/escritos** | Long-form pulido, evergreen, SEO/GEO. | 2 / mes al inicio. |

> **Decisión pendiente:** handle de X. Sugerencia: alinear con `erno` / `SoyErno` para consistencia de marca.

---

## 3. GitHub — primera prioridad (rápido y alto impacto)

1. **Perfil README** (`SoyErnoModo/SoyErnoModo/README.md`):
   - Pitch de 1 línea (el del doc de estrategia).
   - Qué construyo / con qué (Claude Code, Next, fintech, agentes).
   - Casos: Firulapp + erno.com.ar.
   - Stats (ya generás `contributions.svg` en erno-modo — reutilizar).
   - Links: erno.com.ar, X, LinkedIn, bitácora.
2. **Repos pinned (6):** erno.com.ar · erno-modo (bitácora) · Firulapp (si público) · 1-2 skills/herramientas Claude Code · cualquier OSS.
3. **Skills descargables como repos/releases** — ya los empaquetás como `.zip` en erno-modo; convertir los mejores en repos públicos = autoridad + SEO.

---

## 4. Calendario semanal (plantilla)

| Día | Canal | Formato |
|---|---|---|
| Lun | X | Hilo técnico de la semana (pilar 1 o 2). |
| Mar | LinkedIn | Post sustancia (caso/aprendizaje). |
| Mié | X | Tip corto / snippet Claude Code. |
| Jue | Bitácora + X | Entrada del día + teaser. |
| Vie | LinkedIn | Reflexión/criterio (pilar 4). |
| (quincenal) | erno.com.ar | Escrito long-form evergreen. |

Mantenible: ~30-40 min/día destilando lo que ya hiciste. No es producir de cero.

---

## 5. Primeros 5 posts (listos para escribir, desde casos reales)

1. **"Construí una app de mascotas con IA usando Claude Code — 200+ PRs. Esto aprendí."**
   Hilo X / post LinkedIn. Caso Firulapp: Lost&Found con IA, harness de calidad, worktrees. Honesto: qué salió mal.

2. **"Skills, MCP y hooks: cómo tengo a Claude Code laburando en producción de verdad."**
   Pilar 1. El setup real (skills de marca, MCP, pre-commit gate). Repo/demo. *El post que nadie hace en español.*

3. **"Pagos agénticos (ACP/AP2) explicados para devs — qué son y por qué importan en 2026."**
   Pilar 2. Evergreen, SEO/GEO fuerte. Posiciona en un tema vacío en español.

4. **"Spec-driven development con agentes: por qué escribo el spec antes que el código."**
   Pilar 4. OpenSpec + Given/When/Then. Criterio senior vs copiar prompts.

5. **"Mi bitácora pública: por qué documento lo que rompo, no solo lo que funciona."**
   Manifiesto de marca / learn in public. Linkea erno-modo + erno.com.ar. Define la voz.

---

## 6. Métricas de comunidad (qué mirar, sin obsesionar)

- **Liderazgo:** posts guardados/compartidos > likes. Comentarios técnicos > vanidad.
- **GitHub:** stars en skills/repos, followers.
- **Sitio:** suscriptores a escritos (si hay newsletter), citas en buscadores con IA.
- **Conversión real:** mensajes de charlas/consultoría/colaboración.

---

## 7. Fases de ejecución

- **Fase 0 (ya):** estos docs + perfil GitHub README. *Impacto inmediato, cero deploy.*
- **Fase 1:** MVP erno.com.ar online (home + casos Firulapp + contacto) + dominio.
- **Fase 2:** motor de contenido activo (calendario, primeros 5 posts).
- **Fase 3:** /escritos + /recursos + newsletter + comunidad. Evento propio a la midudev = norte lejano.
