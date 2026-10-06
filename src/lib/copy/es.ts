import type { Copy } from "./types";

// Spanish: neutral professional register, first person, no voseo.
// "Forward Deployed Engineer" is the role being sought and stays in English; job titles stay in English.
export const es: Copy = {
  htmlLang: "es",
  ogLocale: "es_AR",
  meta: {
    title: "Hernán De Souza — Forward Deployed AI Engineer",
    titleSuffix: "Hernán De Souza",
    description:
      "Hernán De Souza es AI Engineer en Buenos Aires y busca puestos de Forward Deployed Engineer. Convierte problemas de negocio en sistemas LLM en producción y desarrolla software de forma profesional desde 2010.",
    keywords: [
      "Forward Deployed Engineer",
      "Forward Deployed AI Engineer",
      "AI Engineer",
      "aplicaciones LLM",
      "Generative Engine Optimization",
      "MCP",
      "Claude Code",
      "Next.js",
      "Buenos Aires",
      "Hernán De Souza",
      "Erno",
    ],
    photoAlt: "Retrato de Hernán De Souza",
    pages: {
      projects: {
        title: "Proyectos",
        description:
          "Proyectos de Hernán De Souza: productos propios, sistemas LLM en una fintech, sitios y herramientas hechos para terceros, infraestructura de agentes de código abierto para Claude Code y MCP, bibliotecas y un proyecto comunitario.",
      },
      about: {
        title: "Sobre mí",
        description:
          "Hernán De Souza es AI Engineer en MODO, en Buenos Aires, y desarrolla software de forma profesional desde 2010. Experiencia, principios de trabajo y stack.",
      },
      contact: {
        title: "Contacto",
        description:
          "Contacto con Hernán De Souza por puestos de Forward Deployed Engineer. Remoto desde Buenos Aires (UTC-3), en inglés y español.",
      },
    },
  },
  months: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  present: "actualidad",
  projectGroups: {
    Products: "Productos",
    "Built for others": "Hechos para terceros",
    "Agent infrastructure": "Infraestructura de agentes",
    "Open source": "Código abierto",
    Community: "Comunidad",
  },
  projectItems: {
    firulapp: {
      title: "Firulapp",
      role: "Producto propio, construido de punta a punta",
      summary:
        "App comunitaria para dueños de mascotas en Buenos Aires: un feed social y un servicio de Perdidos y Encontrados asistido por IA. Más de 200 pull requests entregados con Claude Code bajo un arnés de calidad, con sistema de diseño propio y especificaciones escritas antes del código. La app móvil funciona con Capacitor.",
    },
    "fintech-ai": {
      title: "Sistemas LLM en una fintech",
      role: "AI Engineer en MODO, empleo actual",
      summary:
        "Aplicaciones LLM llevadas desde el diseño de prompts hasta APIs en producción, con OpenAI, Anthropic y Gemini integrados en superficies de producto. Generative Engine Optimization para búsqueda con IA, medida con tasa de menciones, proporción de citas y atribución de tráfico. Herramientas internas de IA que automatizan procesos repetitivos. Descrito en términos generales.",
    },
    prompteo: {
      title: "Prompteo",
      role: "Producto propio",
      summary:
        "App de aprendizaje al estilo Duolingo, en español, que enseña a personas que viven de un oficio o de un pequeño negocio a usar IA sin programar. 141 lecciones interactivas breves en 9 cursos, con XP, rachas y repaso con repetición espaciada.",
    },
    "777-en-serie": {
      title: "777 en serie",
      role: "Sitio y gráficos en vivo para un programa de streaming",
      summary:
        "Sitio web de un programa urbano de streaming que transmite música, entrevistas y batallas de freestyle desde San Martín, Buenos Aires, más un motor de gráficos en vivo para sus transmisiones. Los layouts se arman en OBS y el contenido en pantalla se maneja desde la app.",
    },
    "dermacare-studio": {
      title: "Dermacare Studio",
      role: "Sitio y sistema de citas para un estudio",
      summary:
        "Sitio web de un estudio de estética en Buenos Aires, más un sistema de gestión de clientes y de citas.",
    },
    "edgar-hernan": {
      title: "Edgar Hernán",
      role: "Sitio de artista y press kit",
      summary:
        "Sitio de press kit de un cantante de cuarteto de Buenos Aires: trayectoria, apariciones en medios, show en vivo, repertorio y contacto para contrataciones.",
    },
    atlantis: {
      title: "Atlantis",
      role: "Orquestador de código abierto para Claude Code",
      summary:
        "Un pedido se reparte entre agentes especialistas que trabajan en paralelo y de forma aislada. Los auditores revisan, los jueces ponderan cada bloqueo y vuelve una sola decisión. Dirigido por configuración, un solo archivo, cero dependencias.",
    },
    "nexo-agent": {
      title: "Nexo Agent Server",
      role: "Plano de control MCP de código abierto",
      summary:
        "Un plano de control MCP duradero para redes de orquestadores de IA, más un cliente de un solo comando para Claude Code y Claude Desktop.",
    },
    "claude-code-skills": {
      title: "Claude Code skills marketplace",
      role: "Skills y agentes de código abierto",
      summary:
        "Seis skills y agentes. session-recall busca en sesiones pasadas por tema. session-recap arma un resumen semanal con varias fuentes. topic-roadmap hace un inventario de un tema en PRs, especificaciones, documentos y ramas. distill-lint es una auditoría de solo lectura de una base de conocimiento. lectura-bionica aplica lectura biónica para lectores con TDAH o dislexia.",
    },
    "nestjs-toon": {
      title: "nestjs-toon",
      role: "Biblioteca para NestJS",
      summary:
        "Un interceptor de NestJS y decoradores de Swagger que serializan las respuestas de la API a TOON para reducir el uso de tokens de LLM.",
    },
    "stripe-plans-importer": {
      title: "stripe-plans-importer-nodejs",
      role: "Utilidad de Node.js",
      summary: "Importa planes de Stripe de forma masiva desde un archivo CSV con Node.js.",
    },
    tiendarapida: {
      title: "Tienda Rápida",
      role: "MVP de tienda gratuita y autoalojable",
      summary:
        "Una tienda online gratuita que se puede alojar por cuenta propia. El catálogo vive en Google Sheets y el pago funciona con Mercado Pago o MODO.",
    },
    solar34: {
      title: "Solar34",
      role: "Proyecto de barrio",
      summary:
        "Un sitio con una propuesta solar para los 34 techos de un barrio de Buenos Aires, el Barrio Gral. San Martín en Villa Pueyrredón.",
    },
  },
  jobSummaries: {
    "modo-ai":
      "Aplicaciones LLM desde el diseño de prompts hasta APIs en producción. Generative Engine Optimization para superficies de búsqueda con IA, medida con tasa de menciones, proporción de citas y atribución de tráfico. APIs de OpenAI, Anthropic y Gemini integradas en superficies de producto. Herramientas internas de IA que automatizan procesos repetitivos. Modernización de stacks heredados con herramientas asistidas por IA.",
    "modo-frontend":
      "Lideré un módulo multimarca en Next.js (SSR) con un sistema de diseño en Tailwind con temas y configuración por cliente. Pruebas unitarias y de integración, monitoreo de releases y pruebas A/B. Automatizaciones con agentes para la revisión de postmortems y un servidor MCP que conecta datos de producto con ChatGPT. Biblioteca de componentes compartida, RFCs, demos y propuestas técnicas.",
    freelance:
      "Trabajo directo con clientes: una plataforma de comercio electrónico de productos automotrices (Strapi, Next.js, Postgres, MongoDB, Redis), un cliente de medios de larga data, FWTv (Angular, Node, Express, MongoDB, Redis, AWS S3), y una app de gestión de pases de jugadores de fútbol (Next.js, Redis). Autenticación con Passport.js, pruebas con Jest y Cypress.",
    "true-north":
      "Dos proyectos fintech sobre Node, Express, MongoDB y React: flujos de solicitud de préstamos, integraciones con terceros (scoring crediticio, verificación de datos financieros en tiempo real), firma digital de documentos y paneles para stakeholders que siguen cada solicitud.",
    "vida-tec":
      "Plataforma educativa sobre Angular y NgRx, NestJS, AWS Lambda y S3, y MongoDB, con recorridos guiados del producto.",
    belatrix:
      "Arquitectura de UI para una herramienta de analítica y minería de datos con la mayor parte del procesamiento en el cliente. Líder de UI en un proyecto con Angular y Redux. Di charlas internas sobre Angular Elements, Aurelia y NgRx.",
    fansworld:
      "API, panel de administración, frontend en Angular, app móvil con PhoneGap, notificaciones push y procesamiento de video para una plataforma de video social.",
    mrm: "Front-end de producción para clientes de agencia en stacks LAMP, .NET y Java, con equipos distribuidos.",
    "8a-marketing": "Micrositios, newsletters y páginas de CMS.",
  },
  nav: {
    projects: "Proyectos",
    about: "Sobre mí",
    contact: "Contacto",
    github: "GitHub",
    switchLabel: "EN",
    switchName: "English",
    switchAria: "View in English",
    switchLang: "en",
  },
  footer: {
    role: "AI Engineer",
    email: "Correo",
  },
  home: {
    eyebrow: "Puestos de Forward Deployed Engineer",
    headline: "Forward Deployed AI Engineer.",
    intro:
      "Me integro a un equipo, convierto un problema de negocio en un sistema LLM funcionando en producción y me quedo hasta que está medido y entregado. Soy AI Engineer en MODO, una fintech de Argentina, y llevo desarrollando software de forma profesional desde 2010.",
    getInTouch: "Ponte en contacto",
    seeProjects: "Ver proyectos",
    proofPoints: [
      { value: "Desde 2010", label: "Desarrollo software de forma profesional" },
      { value: "200+ PRs", label: "Entregados en Firulapp, mi propio producto, con Claude Code" },
      {
        value: "3 APIs de LLM",
        label: "OpenAI, Anthropic y Gemini en superficies de producto en MODO",
      },
      { value: "UTC-3", label: "Remoto desde Buenos Aires, en inglés y español" },
    ],
    workHeading: "Cómo trabajo con clientes",
    workSteps: [
      {
        title: "Definir el alcance con quienes son dueños del problema",
        body: "Empiezo con el equipo que convive con el problema, no con la elección de un modelo. Acordamos qué debe hacer el sistema y cómo sabremos que funciona.",
      },
      {
        title: "Llevar a producción",
        body: "Construyo la versión más pequeña que cumple su función y la llevo a una API en producción.",
      },
      {
        title: "Medir y entregar",
        body: "Me quedo hasta que el resultado está medido y luego lo entrego para que el equipo pueda operarlo.",
      },
    ],
    selectedProjects: "Proyectos seleccionados",
    allProjects: "Todos los proyectos →",
    recentExperience: "Experiencia reciente",
    fullBackground: "Trayectoria completa →",
    ctaHeading: "¿Estás contratando un Forward Deployed Engineer?",
    ctaBody: "Escríbeme por correo o por LinkedIn. Trabajo en inglés y en español.",
  },
  projectsPage: {
    heading: "Proyectos",
    intro:
      "Repositorios públicos y productos en funcionamiento, además del trabajo que hago en mi empleo actual descrito en términos generales.",
  },
  about: {
    heading: "Sobre mí",
    introLead: "Soy ",
    introTail: (location, timezone) =>
      `, también conocido como Erno. Vivo en ${location} (${timezone}) y trabajo en inglés y en español. Llevo desarrollando software de forma profesional desde 2010.`,
    currentRole:
      "Hoy soy AI Engineer en MODO, una fintech de Argentina, donde llevo aplicaciones LLM desde el diseño de prompts hasta APIs en producción. Antes trabajé como desarrollador frontend senior y como desarrollador full-stack en productos de fintech, educación, medios y comercio electrónico.",
    seeking:
      "Busco puestos de Forward Deployed Engineer. Fuera del trabajo desarrollo mi propio producto, Firulapp, y herramientas de código abierto para flujos de trabajo con agentes.",
    experience: "Experiencia",
    howIWork: "Cómo trabajo",
    principles: [
      {
        title: "Pensar antes de programar",
        body: "Explicito los supuestos, nombro la confusión y propongo la opción más simple. Ante la ambigüedad hago una pregunta, no una suposición.",
      },
      {
        title: "Simplicidad primero",
        body: "El mínimo código que resuelve el problema planteado. Nada especulativo. Si un ingeniero senior lo calificaría de sobrecomplicado, lo es.",
      },
      {
        title: "Informar con honestidad",
        body: "Informo los resultados tal como son. Si una prueba falla, lo digo. Dejo por escrito lo que funcionó y lo que falló.",
      },
      {
        title: "Especificación antes del código",
        body: "Para funcionalidades nuevas y decisiones de arquitectura escribo primero la especificación, en formato Given/When/Then. El criterio es el trabajo.",
      },
    ],
    stack: "Stack",
  },
  contact: {
    heading: "Contacto",
    lookingFor: "Qué estoy buscando",
    lookingItems: (location, timezone) => [
      "Puestos de Forward Deployed Engineer.",
      `Remoto, con base en ${location} (${timezone}).`,
      "Trabajo en inglés y en español.",
    ],
    reachMe: "Cómo contactarme",
    emailNote: "La forma más directa de contactarme.",
    linkedinNote: "Historial laboral completo.",
    githubNote: "Código de los proyectos de código abierto.",
  },
};
