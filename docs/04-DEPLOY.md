# Deploy de erno.com.ar (Vercel + Cloudflare DNS)

Repo: **https://github.com/soyerno/erno-com-ar** · rama de producción `main`.

| Pieza | Dónde | Qué hace |
|---|---|---|
| Hosting | Vercel, proyecto `erno-com-ar` (equipo `hernan-de-souzas-projects`) | Build y deploy en cada push. `main` va a producción; el resto de las ramas genera un preview. |
| DNS | Cloudflare, zona `erno.com.ar` (cuenta personal, plan gratuito) | Resuelve el dominio hacia Vercel. |
| Registro | NIC.ar | Delega el dominio a los nameservers de Cloudflare. NIC.ar no aloja registros DNS. |

Next está configurado como sitio estático (`output: "export"` en `next.config.ts`); Vercel
publica la carpeta `out/`. No hay código de servidor.

## Registros DNS en Cloudflare

Los dos registros van en modo **Solo DNS** (nube gris). Con el proxy de Cloudflare activo,
Vercel no puede emitir ni renovar el certificado.

| Tipo | Nombre | Valor | Proxy |
|---|---|---|---|
| `A` | `@` | `76.76.21.21` | Solo DNS |
| `CNAME` | `www` | `cname.vercel-dns.com` | Solo DNS |

Pendiente: `prompteo.erno.com.ar` está asignado en Vercel al proyecto `claudelingo`. Para
que resuelva hay que agregar `CNAME prompteo → cname.vercel-dns.com` en modo Solo DNS.

## Delegación en NIC.ar

En Trámites a Distancia → NIC Argentina → `erno.com.ar` → **Delegar**, cargar:

```
nash.ns.cloudflare.com
rosalyn.ns.cloudflare.com
```

La propagación tarda de minutos a algunas horas. Cloudflare avisa por mail cuando la zona
queda activa y Vercel emite el certificado solo.

## Correo `hola@erno.com.ar`

El sitio usa esa dirección como contacto principal. Mientras no haya registros MX, el
correo rebota. Con la zona activa: Cloudflare → `erno.com.ar` → Correo electrónico →
Email Routing → crear la dirección `hola` con destino a la casilla personal y verificar el
destino desde el mail que envía Cloudflare. Cloudflare agrega los registros MX y SPF.

## Verificación

```bash
dig +short NS erno.com.ar          # nash / rosalyn .ns.cloudflare.com
dig +short A erno.com.ar           # 76.76.21.21
curl -sI https://erno.com.ar       # HTTP/2 200
curl -sI https://www.erno.com.ar   # redirige al dominio raíz
```

También deben responder `https://erno.com.ar/llms.txt` y `https://erno.com.ar/sitemap.xml`.
La URL de Vercel `https://erno-com-ar.vercel.app` sirve el mismo build sin depender del DNS.

## Historial

Hasta el 2026-10-05 el sitio se desplegaba en GitHub Pages con un workflow de Actions. Se
retiraron el workflow, `public/CNAME` y `public/.nojekyll`. En GitHub, Settings → Pages
todavía puede figurar el dominio personalizado; conviene desactivar Pages ahí.

El repo `soyerno/soyerno.github.io` conserva un portfolio de 2016. Conviene retirarlo o
reemplazarlo por un redirect a `erno.com.ar`.
