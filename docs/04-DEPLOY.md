# Deploy a erno.com.ar (GitHub Pages)

Repo: **https://github.com/soyerno/erno-com-ar** · branch `main`.
Deploy automático vía **GitHub Actions** → GitHub Pages. Next configurado como sitio estático (`output: "export"`).

Cada push a `main` rebuildea y redeploya solo (workflow `.github/workflows/deploy.yml`).

---

## Lo que ya quedó configurado (automático)

- `next.config.ts` → `output: "export"` + `trailingSlash` (genera `/sobre/index.html`).
- Workflow de Actions que hace `npm ci` + `npm run build` + deploy a Pages.
- `public/CNAME` con `erno.com.ar` (GitHub lo lee para el dominio custom).
- `public/.nojekyll` (para que sirva la carpeta `_next`).

---

## Único paso tuyo: el DNS del dominio

GitHub Pages ya queda sirviendo. Falta apuntar **erno.com.ar** a GitHub.
En el panel DNS de tu registrar (NIC.ar / donde compraste el dominio), cargá:

**Apex (`erno.com.ar`) — 4 registros A:**

| Tipo | Nombre | Valor |
|---|---|---|
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |

**(Opcional) `www`:**

| Tipo | Nombre | Valor |
|---|---|---|
| `CNAME` | `www` | `soyerno.github.io.` |

Luego, en el repo: **Settings → Pages → Custom domain** debe decir `erno.com.ar`
(ya viene del CNAME). Cuando el DNS propague, tildá **Enforce HTTPS**.

> Propagación: minutos a unas horas. GitHub emite el SSL solo.

---

## Verificación

- URL temporal de Pages mientras propaga el dominio: `https://soyerno.github.io/erno-com-ar/`
  (con dominio custom, el sitio sirve en la raíz de `erno.com.ar`).
- `https://erno.com.ar` → home.
- `https://erno.com.ar/llms.txt` y `/sitemap.xml` → responden.

---

## Sobre el sitio viejo (soyerno.github.io)

El repo `soyerno/soyerno.github.io` tiene tu portfolio de **2016** (UX/UI dev, MEAN stack) — quedó viejo. Recomendado: retirarlo o reemplazar su contenido por un redirect a `erno.com.ar`. No afecta este deploy.
