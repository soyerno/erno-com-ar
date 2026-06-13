# Deploy a erno.com.ar

Repo: **https://github.com/soyerno/erno-com-ar** · branch `main` · build verde (Next 16, estático).

Estos 2 pasos requieren **tus credenciales** (login Vercel + acceso al registrar del dominio), por eso los hacés vos. Tardan ~5 minutos.

---

## Paso 1 — Importar el repo a Vercel (login tuyo)

1. Entrá a **https://vercel.com/new** (login con GitHub, cuenta `soyerno`).
2. Importá el repo **`soyerno/erno-com-ar`**.
3. Vercel detecta Next.js solo. No toques nada → **Deploy**.
4. En ~1 min tenés una URL `…vercel.app` funcionando. Ese es el sitio.

> Cada push a `main` redeploya automáticamente.

---

## Paso 2 — Conectar el dominio erno.com.ar

1. En el proyecto: **Settings → Domains → Add** → escribí `erno.com.ar`.
2. Sumá también `www.erno.com.ar` (Vercel redirige www → apex).
3. Vercel te muestra los **registros DNS exactos**. Copialos tal cual. Suelen ser:

   | Tipo | Nombre | Valor |
   |---|---|---|
   | `A` | `@` (apex) | `76.76.21.21` |
   | `CNAME` | `www` | `cname.vercel-dns.com` |

   > Usá **los valores que muestre tu dashboard de Vercel**, no estos de memoria, por si cambian.

4. Andá al panel DNS de donde compraste **erno.com.ar** (NIC.ar / tu registrar) y cargá esos registros.
5. Esperá la propagación (minutos a unas horas). Vercel valida y emite el SSL solo.

---

## Verificación

- `https://erno.com.ar` carga el home.
- `https://erno.com.ar/sitemap.xml` y `/robots.txt` responden.
- `https://erno.com.ar/llms.txt` visible (para buscadores con IA).

---

## Alternativa por CLI (si preferís terminal)

```bash
export PATH="$HOME/.nvm/versions/node/v22.16.0/bin:$PATH"
npm i -g vercel
cd ~/Documents/erno-com-ar
vercel login          # abre el browser, login tuyo
vercel --prod         # deploy
vercel domains add erno.com.ar
```

El `vercel domains add` te imprime los mismos registros DNS del Paso 2.
