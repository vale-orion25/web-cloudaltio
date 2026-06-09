import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "es" | "en";

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const es = {
  nav: {
    home: "Inicio", platform: "Plataforma", finops: "FinOps",
    integrations: "Integraciones", plans: "Planes", blog: "Blog",
    login: "Ingresar", demo: "Solicitar demo",
  },
  hero: {
    s1: { badge: "El problema", title: "El gasto cloud no debería ser una sorpresa.", highlight: "sorpresa.", subtitle: "Centraliza, entiende y controla tu operación multicloud para tomar decisiones con información real.", cta: "Agenda una demo" },
    s2: { badge: "El dolor del multicloud", titlePre: "El problema del multicloud ", highlight: "no es la tecnología.", titlePost: " Es la gestión.", painPoints: ["Datos en distintos formatos", "Equipos en silos", "Dificultad para comparar gastos", "Falta de contexto para decidir"], cta: "Ver cómo lo resolvemos" },
    s3: { badge: "La solución CloudAltio", titlePre: "Una sola plataforma para ", highlight: "entender y controlar", titlePost: " tu operación cloud.", benefits: ["Visibilidad unificada", "Estandarización FOCUS", "Control proactivo", "Asignación de costos"], cta: "Solicitar demo" },
    s4: { badge: "Enfoque FinOps", title: "No puedes optimizar lo que no entiendes.", highlight: "optimizar lo que no entiendes.", subtitle: "FinOps no empieza por ahorrar. Empieza por ordenar.", cta: "Conocer la metodología" },
    badge1: "+ Visibilidad", badge2: "+ Control",
  },
  focus: {
    badge: "Pilar Fundamental",
    title: "Gestión Multi-cloud con",
    highlight: "Criterio Financiero",
    subtitle: "CloudAltio elimina la complejidad de comparar facturas de distintos proveedores. Unificamos bajo estándares internacionales de transparencia y cumplimiento técnico.",
    cards: [
      { title: "Estándar FOCUS", desc: "Normalizamos los datos de AWS, Azure, GCP y OCI bajo el estándar FOCUS para comparaciones precisas entre proveedores." },
      { title: "Cultura FinOps", desc: "Unificamos a Finanzas, Tecnología y Operaciones en un solo lenguaje de datos para decisiones estratégicas." },
      { title: "Asistente de IA", desc: "Insights inmediatos sobre anomalías y proyecciones de ahorro mediante nuestro asistente FinOps especializado." },
    ],
  },
  trust: {
    badge: "Pipeline de Datos FOCUS",
    title: "Estandarización Multicloud en Tiempo Real",
    subtitle: "Utilizamos el estándar FOCUS para unificar, estandarizar y comparar consumos generados desde AWS, Azure, GCP y OCI en una sola fuente de verdad.",
    engineLabel: "Engine Core",
    engineTitle: "FOCUS Standard",
    engineSub: "Normalización multicloud automatizada",
    unifiedLabel: "Vista Unificada",
    validado: "Validado",
    monthly: "Inversión Mensual",
    focusMeta: "Metadata FOCUS",
    alertBadge: "Detección FOCUS",
    alertText: "Variación detectada: +$3,400 en EC2",
    features: ["Consolidación", "Sin Código", "Sin Impacto"],
    featuresDesc: ["4 nubes principales integradas nativamente.", "Implementación técnica sin agentes ni fricción.", "Lectura de costos sin afectar tu infraestructura."],
    connected: "Conectado",
  },
  how: {
    eyebrow: "Cómo funciona",
    title1: "De la conexión a la visibilidad,",
    title2: "en tres pasos",
    subtitle: "Sin meses de implementación. Sin procesos complejos. Solo datos claros para tomar mejores decisiones.",
    steps: [
      { title: "Conecta tus clouds", desc: "Integra AWS, Azure, Google Cloud y Oracle Cloud de forma simple. Sin agentes, sin modificar tu infraestructura y con acceso de solo lectura.", tags: ["API nativa", "Sin agentes", "Onboarding asistido"], connected: "Conectado" },
      { title: "Visualiza y entiende tu gasto", desc: "Un dashboard unificado que convierte información compleja en una vista clara de tu gasto por equipo, proyecto, región, servicio y etiquetas.", tags: ["Multi-cloud", "Por equipo", "Por proyecto"] },
      { title: "Prepárate para optimizar", desc: "Próximamente podrás identificar oportunidades de ahorro y priorizar acciones según su impacto económico.", tags: ["Próximamente", "Oportunidades de ahorro", "Impacto estimado"], effort: "Esfuerzo" },
    ],
  },
  why: {
    eyebrow: "POR QUÉ FINOPS IMPORTA",
    title1: "El cloud no es caro.",
    title2: "El cloud sin visibilidad sí.",
    subtitle: "Muchas empresas terminan gastando más de lo necesario en cloud no por falta de capacidad técnica, sino por falta de visibilidad, contexto y coordinación entre equipos.",
    problems: [
      { title: "Poca visibilidad", desc: "Las facturas cloud son difíciles de interpretar. Cuesta entender en qué se está yendo realmente el gasto." },
      { title: "Equipos desconectados", desc: "Tecnología, finanzas y operaciones no siempre trabajan con la misma información ni toman decisiones con el mismo contexto." },
      { title: "Desvíos que llegan tarde", desc: "Sin alertas ni proyecciones, el gasto puede crecer durante el mes sin que nadie lo detecte a tiempo." },
      { title: "Costos difíciles de asignar", desc: "Sin una estructura clara, es difícil distribuir costos entre equipos, proyectos o clientes." },
    ],
    chartTitle: "Gasto real + Proyecciones",
    chartSub: "Anticipa el gasto antes de que llegue la factura",
    chartActual: "Real",
    chartForecast: "Proyecciones",
    chartToday: "Hoy",
    focusBadge: "FOCUS · Estándar abierto",
    focusTitle: "Un idioma común para todos tus clouds",
    focusDesc: "Cada cloud entrega datos en su propio formato. CloudAltio los traduce al estándar FOCUS (FinOps Open Cost and Usage Specification) para que puedas comparar, analizar y reportar de forma consistente.",
    flow: [
      { label: "AWS · Azure · GCP · OCI", sub: "Datos nativos de cada proveedor" },
      { label: "↓ Traducción FOCUS", sub: "CloudAltio normaliza y estandariza" },
      { label: "Dashboard unificado", sub: "Un solo idioma para todos tus equipos" },
    ],
    bannerEyebrow: "Diseñado para equipos transversales",
    bannerTitle: "CloudAltio es útil para Tecnología, Finanzas y Operaciones — todos trabajando con la misma fuente de verdad.",
    teams: ["TECNOLOGÍA", "FINANZAS", "OPERACIONES"],
  },
  caps: {
    eyebrow: "CAPACIDADES DE LA PLATAFORMA",
    title: "Todo lo que necesitas para gestionar cloud con criterio financiero",
    subtitle: "Diseñado para equipos de tecnología, finanzas y operaciones que necesitan trabajar con una misma fuente de verdad.",
    items: [
      { tag: "MULTI-CLOUD", title: "Visibilidad unificada", desc: "Un panel único para entender el gasto de todos tus clouds en un solo lugar, sin exportar archivos ni consolidar datos manualmente." },
      { tag: "ALERTAS", title: "Alertas y control de desvíos", desc: "Detecta cambios inesperados en tu gasto y configura alertas por equipo, servicio o región para actuar a tiempo." },
      { tag: "PROYECCIONES", title: "Proyecciones más claras", desc: "Anticipa el cierre del mes usando tu historial de consumo y visualiza tendencias para planificar con más confianza." },
      { tag: "REPORTES", title: "Análisis por equipo y proyecto", desc: "Desglosa el gasto por etiquetas, proyectos, equipos o cuentas y comparte reportes claros con finanzas y operaciones." },
      { tag: "OPTIMIZACIÓN", title: "Optimización próximamente", desc: "Esta funcionalidad estará disponible próximamente para ayudarte a detectar oportunidades de eficiencia con mayor precisión." },
    ],
  },
  plans: {
    eyebrow: "Planes",
    title: "El nivel correcto para cada organización",
    subtitle: "Actualmente disponible para Enterprise. Los planes Starter y Professional estarán disponibles próximamente.",
    soon: "Próximamente",
    available: "Disponible ahora",
    clouds: ["Multi-cloud", "Multi-cloud", "Clouds ilimitados"],
    taglines: ["Próximamente", "Próximamente", "Para organizaciones con múltiples cuentas, equipos y necesidades avanzadas de gobierno"],
    features: [
      ["Dashboard unificado multi-cloud", "Alertas de presupuesto básicas", "Reportes mensuales"],
      ["Proyecciones", "Detección de anomalías", "Asignación de costos por equipo"],
      ["Todo lo de Professional", "Cuentas y usuarios ilimitados", "SSO / SAML", "SLA con uptime garantizado", "Integraciones personalizadas", "Customer Success Manager dedicado", "Reportes ejecutivos y de auditoría", "Soporte 24/7"],
    ],
    cta: "Solicitar demo Enterprise",
    ctaDemo: "Solicitar demo",
    ctaDemoMotivo: "Hola, me gustaría solicitar una demo del plan Enterprise de CloudAltio.",
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Todo lo que necesitas saber",
    subtitle: "Desde la implementación hasta cómo funciona FOCUS, aquí encontrarás las respuestas más comunes.",
    items: [
      { q: "¿CloudAltio modifica recursos en mi nube?", a: "No. CloudAltio es una plataforma de solo lectura. Nos conectamos a las APIs de billing y metadata de AWS, Azure, GCP y Oracle Cloud para analizar tu gasto, pero nunca ejecutamos acciones sobre tu infraestructura. La decisión siempre es tuya." },
      { q: "¿Cuánto tarda la implementación?", a: "Contamos con un proceso de onboarding asistido para asegurar una integración correcta de tus datos. El proceso consiste en otorgar permisos de lectura a través de roles IAM o equivalentes en cada cloud, y CloudAltio hace el resto. No se requieren agentes ni cambios en tu infraestructura." },
      { q: "¿Qué nubes soporta CloudAltio?", a: "CloudAltio soporta Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP) y Oracle Cloud Infrastructure (OCI)." },
      { q: "¿Necesito conocimiento técnico para usar CloudAltio?", a: "No. CloudAltio está diseñado para ser usado tanto por equipos de ingeniería como por equipos de finanzas y operaciones. Los dashboards traducen datos técnicos de cloud en lenguaje financiero claro. No necesitas saber qué es una instancia EC2 para entender cuánto estás gastando en cómputo." },
      { q: "¿Qué datos procesa CloudAltio?", a: "CloudAltio procesa únicamente datos de costos y metadata de uso entregados por las APIs de cada proveedor cloud. Nunca accedemos a datos de negocio, PII ni contenido de tus workloads. Si tienes requisitos específicos de seguridad o privacidad, podemos conversarlo en detalle durante la evaluación." },
      { q: "¿Puedo asignar costos por equipo o proyecto sin tener tagging perfecto?", a: "Sí. CloudAltio incluye herramientas de cost allocation que permiten asignar costos incluso cuando el tagging no está al 100%. Puedes usar reglas de negocio, nombres de cuentas y heurísticas configurables para distribuir costos entre equipos y proyectos desde el primer día." },
      { q: "¿Hay costos adicionales por usar CloudAltio?", a: "CloudAltio tiene su propia tarifa por uso de la plataforma. El acceso a las APIs de billing de tus proveedores cloud es generalmente de bajo costo o gratuito, dependiendo de cada proveedor." },
      { q: "¿Qué es FOCUS y porqué lo usa CloudAltio?", a: "FOCUS (FinOps Open Cost and Usage Specification) es un estándar abierto impulsado por la FinOps Foundation para unificar los datos de costos y uso entre distintos proveedores cloud. CloudAltio utiliza el estándar FOCUS para que puedas unificar, estandarizar y comparar consumos generados desde AWS, Azure, GCP y OCI en una sola fuente de verdad, permitiendo un análisis consistente sin importar qué nubes estés usando." },
    ],
  },
  cta: {
    title: "Toma decisiones cloud con datos, no con intuición",
    subtitle: "CloudAltio se integra sin fricciones. Sin instalaciones complejas ni agentes. Solo visibilidad real y proyecciones precisas de tu gasto cloud.",
    demo: "Solicitar demo",
  },
  footer: {
    tagline: "Plataforma FinOps para empresas de Latinoamérica. Visibilidad, control y optimización de tu gasto cloud.",
    copyright: "© 2026 CloudAltio. Todos los derechos reservados.",
    fmBadge: "FinOps Foundation member · en proceso",
    cols: {
      Plataforma: [{ label: "Dashboard", href: "/plataforma" }, { label: "Alertas", href: "/plataforma" }, { label: "Forecast", href: "/plataforma" }, { label: "Reportes", href: "/plataforma" }],
      FinOps: [{ label: "¿Qué es FinOps?", href: "/finops" }, { label: "Estándar FOCUS", href: "/finops" }, { label: "Blog", href: "/blog" }],
      Legal: [{ label: "Privacidad", href: "/privacidad" }, { label: "Términos de uso", href: "/terminos" }, { label: "Contacto", href: "/contacto" }],
    },
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos de tu gasto cloud",
    subtitle: "Cuéntanos tu situación y te mostramos cómo CloudAltio puede ayudarte a tomar mejores decisiones.",
    howHelp: "¿Cómo podemos ayudarte?",
    howHelpDesc: "Estamos disponibles para resolver tus dudas sobre la plataforma, hablar sobre integraciones o agendar una demo personalizada.",
    emailLabel: "Email", locationLabel: "Ubicación", locationVal: "Latinoamérica", responseLabel: "Respuesta", responseVal: "En menos de 24 horas hábiles",
    name: "Nombre", namePlh: "Tu nombre", email: "Email", emailPlh: "tu@empresa.com",
    company: "Empresa", companyPlh: "Nombre de tu empresa", country: "País", countryPlh: "Selecciona tu país",
    clouds: "¿Qué nubes utilizas?",
    message: "Mensaje", messagePlh: "Cuéntanos sobre tu infraestructura cloud y qué necesitas...",
    send: "Enviar mensaje",
    sentTitle: "¡Mensaje enviado!", sentDesc: "Gracias por contactarnos. Te responderemos en menos de 24 horas hábiles.",
  },
};

const en: typeof es = {
  nav: {
    home: "Home", platform: "Platform", finops: "FinOps",
    integrations: "Integrations", plans: "Plans", blog: "Blog",
    login: "Sign in", demo: "Request demo",
  },
  hero: {
    s1: { badge: "The problem", title: "Cloud spend shouldn't be a surprise.", highlight: "surprise.", subtitle: "Centralize, understand and control your multicloud operation to make decisions with real data.", cta: "Schedule a demo" },
    s2: { badge: "The multicloud pain", titlePre: "The multicloud problem ", highlight: "isn't technology.", titlePost: " It's management.", painPoints: ["Data in different formats", "Siloed teams", "Difficulty comparing spend", "Lack of context to decide"], cta: "See how we solve it" },
    s3: { badge: "The CloudAltio solution", titlePre: "One platform to ", highlight: "understand and control", titlePost: " your cloud operation.", benefits: ["Unified visibility", "FOCUS standardization", "Proactive control", "Cost allocation"], cta: "Request demo" },
    s4: { badge: "FinOps approach", title: "You can't optimize what you don't understand.", highlight: "optimize what you don't understand.", subtitle: "FinOps doesn't start with saving. It starts with organizing.", cta: "Learn the methodology" },
    badge1: "+ Visibility", badge2: "+ Control",
  },
  focus: {
    badge: "Core foundation",
    title: "Multi-cloud management with",
    highlight: "Financial Criteria",
    subtitle: "CloudAltio eliminates the complexity of comparing invoices from different providers. We unify under international standards of transparency and technical compliance.",
    cards: [
      { title: "FOCUS Standard", desc: "We normalize data from AWS, Azure, GCP and OCI under the FOCUS standard for precise cross-provider comparisons." },
      { title: "FinOps Culture", desc: "We unify Finance, Technology and Operations into a single data language for strategic decisions." },
      { title: "AI Assistant", desc: "Immediate insights on anomalies and savings projections through our specialized FinOps assistant." },
    ],
  },
  trust: {
    badge: "FOCUS Data Pipeline",
    title: "Real-Time Multicloud Standardization",
    subtitle: "We use the FOCUS standard to unify, standardize and compare consumption from AWS, Azure, GCP and OCI into a single source of truth.",
    engineLabel: "Engine Core",
    engineTitle: "FOCUS Standard",
    engineSub: "Automated multicloud normalization",
    unifiedLabel: "Unified View",
    validado: "Validated",
    monthly: "Monthly Investment",
    focusMeta: "FOCUS Metadata",
    alertBadge: "FOCUS Detection",
    alertText: "Variation detected: +$3,400 on EC2",
    features: ["Consolidation", "No Code", "Zero Impact"],
    featuresDesc: ["4 main clouds integrated natively.", "Technical implementation without agents or friction.", "Cost reading without affecting your infrastructure."],
    connected: "Connected",
  },
  how: {
    eyebrow: "How it works",
    title1: "From connection to visibility,",
    title2: "in three steps",
    subtitle: "No months of implementation. No complex processes. Just clear data to make better decisions.",
    steps: [
      { title: "Connect your clouds", desc: "Integrate AWS, Azure, Google Cloud and Oracle Cloud simply. No agents, no modifying your infrastructure, with read-only access.", tags: ["Native API", "No agents", "Assisted onboarding"], connected: "Connected" },
      { title: "Visualize and understand your spend", desc: "A unified dashboard that turns complex information into a clear view of your spend by team, project, region, service and tags.", tags: ["Multi-cloud", "By team", "By project"] },
      { title: "Get ready to optimize", desc: "Soon you'll be able to identify savings opportunities and prioritize actions based on their financial impact.", tags: ["Coming soon", "Savings opportunities", "Estimated impact"], effort: "Effort" },
    ],
  },
  why: {
    eyebrow: "WHY FINOPS MATTERS",
    title1: "Cloud is not expensive.",
    title2: "Cloud without visibility is.",
    subtitle: "Many companies end up spending more than necessary on cloud not due to a lack of technical capability, but due to a lack of visibility, context and coordination between teams.",
    problems: [
      { title: "Low visibility", desc: "Cloud invoices are hard to interpret. It's difficult to understand where spending is actually going." },
      { title: "Disconnected teams", desc: "Technology, finance and operations don't always work with the same information or make decisions with the same context." },
      { title: "Late-arriving deviations", desc: "Without alerts or projections, spend can grow during the month without anyone detecting it in time." },
      { title: "Hard-to-allocate costs", desc: "Without a clear structure, it's difficult to distribute costs between teams, projects or clients." },
    ],
    chartTitle: "Actual spend + Projections",
    chartSub: "Anticipate spend before the invoice arrives",
    chartActual: "Actual",
    chartForecast: "Projections",
    chartToday: "Today",
    focusBadge: "FOCUS · Open standard",
    focusTitle: "A common language for all your clouds",
    focusDesc: "Each cloud delivers data in its own format. CloudAltio translates it to the FOCUS standard (FinOps Open Cost and Usage Specification) so you can compare, analyze and report consistently.",
    flow: [
      { label: "AWS · Azure · GCP · OCI", sub: "Native data from each provider" },
      { label: "↓ FOCUS Translation", sub: "CloudAltio normalizes and standardizes" },
      { label: "Unified dashboard", sub: "A single language for all your teams" },
    ],
    bannerEyebrow: "Designed for cross-functional teams",
    bannerTitle: "CloudAltio is useful for Technology, Finance and Operations — all working with the same source of truth.",
    teams: ["TECHNOLOGY", "FINANCE", "OPERATIONS"],
  },
  caps: {
    eyebrow: "PLATFORM CAPABILITIES",
    title: "Everything you need to manage cloud with financial criteria",
    subtitle: "Designed for technology, finance and operations teams that need to work with a single source of truth.",
    items: [
      { tag: "MULTI-CLOUD", title: "Unified visibility", desc: "A single panel to understand spend from all your clouds in one place, without exporting files or manually consolidating data." },
      { tag: "ALERTS", title: "Alerts and deviation control", desc: "Detect unexpected changes in your spend and configure alerts by team, service or region to act on time." },
      { tag: "PROJECTIONS", title: "Clearer projections", desc: "Anticipate month-end using your consumption history and visualize trends to plan with more confidence." },
      { tag: "REPORTS", title: "Analysis by team and project", desc: "Break down spend by tags, projects, teams or accounts and share clear reports with finance and operations." },
      { tag: "OPTIMIZATION", title: "Optimization coming soon", desc: "This feature will be available soon to help you detect efficiency opportunities with greater precision." },
    ],
  },
  plans: {
    eyebrow: "Plans",
    title: "The right level for every organization",
    subtitle: "Currently available for Enterprise. Starter and Professional plans will be available soon.",
    soon: "Coming soon",
    available: "Available now",
    clouds: ["Multi-cloud", "Multi-cloud", "Unlimited clouds"],
    taglines: ["Coming soon", "Coming soon", "For organizations with multiple accounts, teams and advanced governance needs"],
    features: [
      ["Unified multi-cloud dashboard", "Basic budget alerts", "Monthly reports"],
      ["Projections", "Anomaly detection", "Cost allocation by team"],
      ["Everything in Professional", "Unlimited accounts and users", "SSO / SAML", "Guaranteed SLA uptime", "Custom integrations", "Dedicated Customer Success Manager", "Executive and audit reports", "24/7 Support"],
    ],
    cta: "Request Enterprise demo",
    ctaDemo: "Request a demo",
    ctaDemoMotivo: "Hello, I'd like to request a demo of CloudAltio's Enterprise plan.",
  },
  faq: {
    eyebrow: "Frequently asked questions",
    title: "Everything you need to know",
    subtitle: "From implementation to how FOCUS works, here you'll find the most common answers.",
    items: [
      { q: "Does CloudAltio modify resources in my cloud?", a: "No. CloudAltio is a read-only platform. We connect to the billing and metadata APIs of AWS, Azure, GCP and Oracle Cloud to analyze your spend, but we never execute actions on your infrastructure. The decision is always yours." },
      { q: "How long does implementation take?", a: "We have an assisted onboarding process to ensure correct integration of your data. The process consists of granting read permissions through IAM roles or equivalents in each cloud, and CloudAltio does the rest. No agents or changes to your infrastructure are required." },
      { q: "What clouds does CloudAltio support?", a: "CloudAltio supports Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP) and Oracle Cloud Infrastructure (OCI)." },
      { q: "Do I need technical knowledge to use CloudAltio?", a: "No. CloudAltio is designed to be used by both engineering teams and finance and operations teams. Dashboards translate technical cloud data into clear financial language. You don't need to know what an EC2 instance is to understand how much you're spending on compute." },
      { q: "What data does CloudAltio process?", a: "CloudAltio processes only cost data and usage metadata delivered by each cloud provider's APIs. We never access business data, PII or content from your workloads. If you have specific security or privacy requirements, we can discuss them in detail during the evaluation." },
      { q: "Can I allocate costs by team or project without perfect tagging?", a: "Yes. CloudAltio includes cost allocation tools that allow you to allocate costs even when tagging isn't 100%. You can use business rules, account names and configurable heuristics to distribute costs between teams and projects from day one." },
      { q: "Are there additional costs for using CloudAltio?", a: "CloudAltio has its own usage fee for the platform. Access to your cloud providers' billing APIs is generally low-cost or free, depending on each provider." },
      { q: "What is FOCUS and why does CloudAltio use it?", a: "FOCUS (FinOps Open Cost and Usage Specification) is an open standard driven by the FinOps Foundation to unify cost and usage data across different cloud providers. CloudAltio uses the FOCUS standard so you can unify, standardize and compare consumption from AWS, Azure, GCP and OCI in a single source of truth, enabling consistent analysis regardless of which clouds you're using." },
    ],
  },
  cta: {
    title: "Make cloud decisions with data, not intuition",
    subtitle: "CloudAltio integrates without friction. No complex installations or agents. Just real visibility and precise projections of your cloud spend.",
    demo: "Request demo",
  },
  footer: {
    tagline: "FinOps platform for companies in Latin America. Visibility, control and optimization of your cloud spend.",
    copyright: "© 2026 CloudAltio. All rights reserved.",
    fmBadge: "FinOps Foundation member · in progress",
    cols: {
      Platform: [{ label: "Dashboard", href: "/plataforma" }, { label: "Alerts", href: "/plataforma" }, { label: "Forecast", href: "/plataforma" }, { label: "Reports", href: "/plataforma" }],
      FinOps: [{ label: "What is FinOps?", href: "/finops" }, { label: "FOCUS Standard", href: "/finops" }, { label: "Blog", href: "/blog" }],
      Legal: [{ label: "Privacy", href: "/privacidad" }, { label: "Terms of use", href: "/terminos" }, { label: "Contact", href: "/contacto" }],
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your cloud spend",
    subtitle: "Tell us your situation and we'll show you how CloudAltio can help you make better decisions.",
    howHelp: "How can we help you?",
    howHelpDesc: "We're available to answer your questions about the platform, discuss integrations or schedule a personalized demo.",
    emailLabel: "Email", locationLabel: "Location", locationVal: "Latin America", responseLabel: "Response", responseVal: "Within 24 business hours",
    name: "Name", namePlh: "Your name", email: "Email", emailPlh: "you@company.com",
    company: "Company", companyPlh: "Your company name", country: "Country", countryPlh: "Select your country",
    clouds: "Which clouds do you use?",
    message: "Message", messagePlh: "Tell us about your cloud infrastructure and what you need...",
    send: "Send message",
    sentTitle: "Message sent!", sentDesc: "Thanks for contacting us. We'll get back to you within 24 business hours.",
  },
};

export const allTranslations = { es, en };

// ─── CONTEXT ──────────────────────────────────────────────────────────────────
type LanguageCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: typeof es;
};

const LanguageContext = createContext<LanguageCtx>({
  lang: "es",
  setLang: () => {},
  tr: es,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try { return (localStorage.getItem("ca_lang") as Lang) || "es"; } catch { return "es"; }
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("ca_lang", l); } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, tr: lang === "en" ? en : es }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
