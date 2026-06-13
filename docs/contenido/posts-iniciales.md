# Primeros 5 posts — listos para publicar

> Voz rioplatense, sin buzzwords, honesta. Cada post nace de un caso real.
> Formato: **X (hilo)** + **LinkedIn (long)**. Ajustá lo que quieras antes de publicar.
> Recordá sumar un screenshot/diagrama a cada uno — sube el alcance.

---

## Post 1 — "Construí una app con IA usando Claude Code: 200+ PRs. Esto aprendí."

**Pilar:** Build in public (Firulapp). **Objetivo:** presentación de marca + caso.

### X (hilo)

1/ Hace meses arranqué a construir Firulapp: una app de comunidad para dueños de mascotas en Buenos Aires. Feed social + un Lost & Found con IA para encontrar perros perdidos.

La construí casi entera con Claude Code. Van +200 PRs. Te cuento lo que aprendí. 🧵

2/ Lección 1: el agente no reemplaza el criterio, lo amplifica.
Si vos no sabés qué es "estar bien hecho", el agente te va a entregar algo que compila y está mal. El cuello de botella dejó de ser escribir código. Ahora es decidir.

3/ Lección 2: spec antes que código.
Para cada feature nueva escribo el spec primero (Given/When/Then). El agente con un objetivo claro vuela. Sin spec, da vueltas. El que copia prompts no hace esto; el que shippea, sí.

4/ Lección 3: harness de calidad o caos.
Pre-commit que corre typecheck + tests + arquitectura. El agente puede romper algo en el archivo 40 mientras arregla el 1. El harness es lo que te deja dormir.

5/ Lección 4: lo que rompió enseña más que lo que salió bien.
Tuve un bug de feed que repetí 3 veces hasta encontrar la causa real (un fallback a Date.now() en ids no numéricos). Lo documenté. Esa honestidad es la marca.

6/ Voy a ir contando todo esto en detalle, en rioplatense, con el código a la vista.
👉 erno.com.ar

¿Vos también construís con agentes? Contame qué te rompió.

### LinkedIn

**Construí una app con IA usando Claude Code: van más de 200 PRs. Lo que aprendí no es lo que esperaba.**

Hace unos meses empecé Firulapp — una app de comunidad para dueños de mascotas en Buenos Aires, con feed social y un Lost & Found potenciado por IA. La construí casi entera trabajando con Claude Code en producción.

Tres aprendizajes que me cambiaron la forma de trabajar:

→ **El agente amplifica el criterio, no lo reemplaza.** El cuello de botella ya no es escribir código, es decidir qué está bien hecho. Si no lo sabés, el agente te entrega algo que compila y está mal.

→ **El spec va antes que el código.** Para cada feature escribo Given/When/Then primero. Con un objetivo claro, el agente vuela. Sin él, da vueltas.

→ **Sin harness de calidad, caos.** Un pre-commit que corre typecheck, tests y chequeos de arquitectura es lo que te deja shippear tranquilo cuando un agente toca 40 archivos.

Voy a ir contando todo esto en detalle. Si te interesa el agentic coding de verdad — no los tutoriales de juguete — seguime.

🌐 erno.com.ar

#AIEngineering #ClaudeCode #DesarrolloDeSoftware #InteligenciaArtificial

---

## Post 2 — "Cómo tengo a Claude Code laburando en producción de verdad"

**Pilar:** Agentic coding (el más vacío en español). **Objetivo:** autoridad técnica.

### X (hilo)

1/ "Uso Claude Code" puede significar dos cosas muy distintas:
— le pido cosas en el chat y copio/pego, o
— tengo un sistema que lo hace laburar en mi repo real con reglas, memoria y guardrails.

Te muestro el segundo. 🧵

2/ **Skills.** Empaqueto conocimiento del proyecto (diseño, voz de marca, convenciones del framework) en skills. El agente las invoca solo cuando hacen falta. Deja de inventar; sigue MIS reglas.

3/ **MCP.** Servidores que le dan herramientas reales: leer la base, correr queries, navegar. El agente no adivina el estado del sistema, lo consulta.

4/ **Hooks.** Antes de cada commit corre un gate: lint en lo tocado + typecheck + tests + arquitectura. Si rompe, no commitea. El agente no negocia con el harness.

5/ **Worktrees.** Cada feature en su propio worktree aislado. Puedo correr varias sesiones en paralelo sin que se pisen. Una rama, un PR, un objetivo.

6/ El resultado: el agente no es un autocompletado glorificado. Es un colaborador con reglas, memoria y límites.

Esto casi nadie lo cuenta en español. Lo voy a documentar entero.
👉 erno.com.ar

### LinkedIn

**"Uso Claude Code" no dice nada. La diferencia está en el sistema alrededor.**

Hay dos formas de usar un agente de código:
1. Pedirle cosas en el chat y copiar/pegar.
2. Construir un sistema que lo haga trabajar en tu repo real, con reglas, memoria y guardrails.

La segunda es la que shippea. Estos son los cuatro pilares de mi setup:

• **Skills** — conocimiento del proyecto (diseño, voz, convenciones) empaquetado. El agente sigue mis reglas en vez de inventar.
• **MCP** — herramientas reales para consultar el estado del sistema en vez de adivinarlo.
• **Hooks** — un gate pre-commit (lint, typecheck, tests, arquitectura) que el agente no puede saltear.
• **Worktrees** — aislamiento por feature para trabajar en paralelo sin pisarse.

El agente deja de ser un autocompletado glorificado y pasa a ser un colaborador con límites.

En español casi nadie cuenta esto en detalle. Lo voy a documentar entero en erno.com.ar.

#ClaudeCode #AIEngineering #AgenticCoding #Productividad

---

## Post 3 — "Pagos agénticos explicados para devs (y por qué importan en 2026)"

**Pilar:** AI Engineering aplicada. **Objetivo:** evergreen, SEO/GEO, tema vacío en español.

### X (hilo)

1/ "Pagos agénticos" suena a buzzword. No lo es. Es la pregunta de cómo un agente de IA paga algo por vos, de forma segura, sin que le des tu tarjeta.

Te lo explico sin humo. 🧵

2/ El problema: si un agente compra por vos, ¿cómo sabe el comercio que vos lo autorizaste? ¿Hasta cuánto? ¿Para qué? Darle tu tarjeta al agente es justo lo que NO querés.

3/ La idea central: **mandatos**. Vos firmás un "mandato de intención" (qué puede comprar, hasta cuánto) y el agente actúa dentro de ese límite. El comercio verifica la firma, no tu tarjeta.

4/ Aparecen protocolos para estandarizar esto (ACP, AP2). Definen cómo viaja ese mandato, cómo se verifica y cómo se separa "querer comprar" de "ejecutar el pago".

5/ Por qué importa: el comercio que no esté listo para recibir un agente comprador en 2-3 años, lo va a sentir. Es la próxima capa de internet, como lo fue mobile.

6/ Voy a escribir esto en profundidad — en español, que casi no existe.
👉 erno.com.ar

### LinkedIn

**Pagos agénticos: la próxima capa de internet, explicada sin humo.**

Suena a buzzword, pero es una pregunta concreta: ¿cómo paga un agente de IA por vos, de forma segura, sin que le des tu tarjeta?

El problema es de confianza. Si un agente compra algo, el comercio necesita saber que vos lo autorizaste, para qué y hasta cuánto. Entregarle tu tarjeta al agente es exactamente lo que no querés.

La solución gira alrededor de **mandatos**: vos firmás una intención (qué puede comprar, con qué límite) y el agente opera dentro de ese marco. El comercio verifica la firma, no tus datos. Protocolos como ACP y AP2 buscan estandarizar cómo viaja y se verifica ese mandato.

¿Por qué te debería importar hoy? Porque el comercio que no esté listo para un agente comprador en 2-3 años lo va a sentir, igual que pasó con mobile.

Voy a escribir esto en profundidad, en español — donde casi no existe.

#PagosAgénticos #FinTech #InteligenciaArtificial #AIEngineering

---

## Post 4 — "Por qué escribo el spec antes que el código (incluso con un agente)"

**Pilar:** Criterio de ingeniería. **Objetivo:** diferenciar senior vs copia-prompts.

### X (hilo)

1/ La tentación con un agente de código es pedirle "hacé X" y ver qué sale.
Funciona para lo trivial. Para lo que importa, es la receta del caos.

Yo escribo el spec primero. Te explico por qué. 🧵

2/ Un spec no es burocracia. Es convertir "que funcione" (criterio débil) en criterios verificables: Given (contexto), When (acción), Then (resultado esperado).

3/ Con eso, el agente tiene un objetivo, no una vibra. Y yo tengo cómo verificar que terminó: o cumple los Then, o no terminó.

4/ Bonus: el spec es el lugar donde pensás ANTES de codear. Ahí descubrís el caso borde, la ambigüedad, la decisión de arquitectura. Barato en texto, caro en código.

5/ Uso OpenSpec para esto. Pero la herramienta es lo de menos. El hábito es lo que separa al que shippea del que copia prompts.

6/ Más sobre cómo trabajo con agentes:
👉 erno.com.ar

### LinkedIn

**Escribo el spec antes que el código. Incluso (sobre todo) cuando trabajo con un agente.**

La tentación es pedirle al agente "hacé X" y ver qué sale. Para lo trivial, alcanza. Para lo que importa, es la receta del caos.

Un spec no es burocracia. Es convertir "que funcione" — un criterio débil — en algo verificable:
- **Given**: el contexto.
- **When**: la acción.
- **Then**: el resultado esperado.

Con eso, el agente tiene un objetivo concreto en vez de una intuición, y yo tengo cómo saber si terminó: cumple los Then o no terminó. Además, escribir el spec es el momento donde pensás antes de codear — donde aparecen el caso borde, la ambigüedad y la decisión de arquitectura. Barato en texto, carísimo en código.

La herramienta (uso OpenSpec) es lo de menos. El hábito es lo que separa al que shippea del que copia prompts.

#SpecDriven #AIEngineering #IngenieríaDeSoftware #ClaudeCode

---

## Post 5 — "Mi bitácora pública: por qué documento lo que rompo, no solo lo que funciona"

**Pilar:** Manifiesto de marca / learn in public. **Objetivo:** definir la voz, conectar todo.

### X (hilo)

1/ Abrí una bitácora pública de ingeniería. La regla es rara: documento lo que ROMPE, no solo lo que sale bien.

Por qué esa decisión. 🧵

2/ Internet está lleno de hilos "10 trucos de IA que te van a volar la cabeza". Casi todos venden la versión donde todo funciona a la primera. La realidad no es esa, y vos lo sabés.

3/ Yo aprendo más de un bug que me costó 3 intentos que de un feature que salió redondo. Si lo documento, vos te ahorrás esos 3 intentos. Eso es valor real.

4/ Es lo que swyx llama "learn in public" y lo que Karpathy hace al contar una historia por lección. Honestidad técnica como método, no como marketing.

5/ Así que vas a ver acá los aciertos y los errores, en rioplatense, con el código a la vista. Una historia por feature.

6/ Empieza acá 👇
erno.com.ar

### LinkedIn

**Abrí una bitácora pública de ingeniería con una regla incómoda: documento lo que rompo, no solo lo que funciona.**

Internet está lleno de "10 trucos de IA que te vuelan la cabeza". Casi todos venden la versión donde todo sale a la primera. La realidad no es esa — y vos lo sabés.

Yo aprendo más de un bug que me costó tres intentos que de un feature que salió redondo. Si lo documento bien, vos te ahorrás esos tres intentos. Ese es el valor real.

Es lo que swyx llama *learn in public* y lo que Karpathy practica al contar una historia por lección: honestidad técnica como método, no como marketing.

Vas a encontrar los aciertos y los errores, en rioplatense, con el código a la vista. Una historia por feature.

Empieza en erno.com.ar.

#LearnInPublic #AIEngineering #DesarrolloDeSoftware #ClaudeCode

---

## Cómo usarlos

- **Orden sugerido:** 1 (presentación) → 5 (manifiesto) → 2 (autoridad técnica) → 4 (criterio) → 3 (evergreen).
- **Cadencia:** 1 por semana en X + adaptado a LinkedIn. No quemes los 5 juntos.
- **Antes de publicar:** sumá una imagen (screenshot de Firulapp, diagrama del setup, snippet). Define tu handle de X.
- **Reciclá:** cada post largo de la bitácora puede partirse en 2-3 de estos.
