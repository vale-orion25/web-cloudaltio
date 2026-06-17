import { Article, Campaign } from "./types";

export const mockArticles: Article[] = [
  {
    id: 1,
    slug: "estrategia-etiquetado-aws-azure",
    title: "Cómo implementar una estrategia de etiquetado (Tagging) exitosa en AWS y Azure",
    excerpt: "El primer paso para la madurez FinOps es la visibilidad. Descubre cómo definir una convención de etiquetas que tu equipo de ingeniería realmente utilice y mantenga.",
    category: "Guías Prácticas",
    date: "12 Abr 2026",
    readingTime: "5 min",
    image: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzY4NzQ3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "David Ramírez",
    authorInitials: "DR",
    authorRole: "Lead FinOps Practitioner",
    content: `<p class="lead">Imagina intentar auditar los gastos de una empresa sin saber qué departamento hizo cada compra. Eso es exactamente lo que sucede cuando operas en la nube sin una estrategia de etiquetado sólida.</p>
<h2>El problema de la nube no etiquetada</h2>
<p>En los modelos on-premise tradicionales, la adquisición de infraestructura pasaba por largos procesos de aprobación. Hoy, cualquier ingeniero con los permisos adecuados puede levantar miles de dólares en recursos con un simple script de Terraform.</p>
<p>Sin etiquetas (tags), la consola de facturación de AWS (Cost Explorer) o Azure (Cost Management) solo te mostrará gastos por "Servicio" (ej. EC2, RDS, S3). Pero el CFO no quiere saber cuánto gastamos en EC2; quiere saber cuánto cuesta el "Entorno de Producción" vs "Desarrollo".</p>
<h2>1. Las Etiquetas Obligatorias (The Big Three)</h2>
<p>No intentes implementar 20 etiquetas desde el día uno. Comienza con estas tres dimensiones críticas:</p>
<ul>
<li><strong>CostCenter / BusinessUnit:</strong> ¿Quién paga por esto?</li>
<li><strong>Environment:</strong> ¿Es este un gasto evitable? (prod, dev, staging)</li>
<li><strong>Project / Application:</strong> ¿A qué iniciativa pertenece este recurso?</li>
</ul>
<h2>2. Automatización: Hazlo invisible</h2>
<p>El etiquetado manual es un mito. La mejor estrategia es integrar el etiquetado directamente en el código de infraestructura (IaC).</p>
<pre>provider "aws" {
  region = "us-east-1"
  default_tags {
    tags = {
      Environment = "production"
      CostCenter  = "engineering"
      ManagedBy   = "terraform"
    }
  }
}</pre>
<h2>3. Políticas de Control (Guardrails)</h2>
<p>Una vez que tienes las reglas claras, necesitas políticas coercitivas. En AWS, puedes usar Service Control Policies (SCPs) o Tag Policies. Con CloudAltio, puedes configurar alertas inmediatas en nuestro panel de Gobernanza.</p>`,
    status: "published",
    views: 0,
  },
  {
    id: 2,
    slug: "derecho-de-piso-kubernetes",
    title: "Derecho de piso: Reduciendo el desperdicio en entornos de Kubernetes",
    excerpt: "Un análisis profundo sobre las recomendaciones de capacidad (rightsizing) en clústeres de EKS y GKE para maximizar el uso de recursos sin afectar el rendimiento.",
    category: "Casos de Uso",
    date: "28 Mar 2026",
    readingTime: "8 min",
    image: "https://images.unsplash.com/photo-1770012977129-19f856a1f935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGludGVyZmFjZSUyMGRhcmt8ZW58MXx8fHwxNzc2ODc0NzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Ana Torres",
    authorInitials: "AT",
    authorRole: "Cloud Architect",
    content: `<p class="lead">Kubernetes es increíblemente poderoso, pero también increíblemente fácil de sobreprovisionar. La mayoría de los equipos establecen requests y limits de forma conservadora y nunca los revisan.</p>
<h2>El costo del sobreaprovisionamiento</h2>
<p>En un clúster de EKS con 20 nodos m5.2xlarge, sobreprovisionar un 30% en promedio significa pagar aproximadamente $2,400 USD al mes por capacidad que nunca se usa. Multiplicado por 12 meses, son $28,800 anuales de desperdicio puro.</p>
<h2>Rightsizing con Vertical Pod Autoscaler</h2>
<p>El VPA (Vertical Pod Autoscaler) en modo recomendación analiza el historial de uso real de tus pods y sugiere valores óptimos para requests y limits. Es el punto de partida ideal.</p>
<h2>Namespace Quotas como guardrail</h2>
<p>Antes de reducir, establece cuotas por namespace. Esto evita que equipos individuales acaparen recursos del clúster y crea visibilidad de costos por equipo o producto.</p>`,
    status: "published",
    views: 0,
  },
  {
    id: 3,
    slug: "showback-chargeback-cultura",
    title: "Showback vs Chargeback: Transformando la cultura de ingeniería",
    excerpt: "La tecnología es solo la mitad del reto. Aprende a crear reportes de Showback que fomenten la responsabilidad financiera en los equipos de desarrollo.",
    category: "Cultura FinOps",
    date: "15 Mar 2026",
    readingTime: "6 min",
    image: "https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBjaGFydCUyMHNjcmVlbnxlbnwxfHx8fDE3NzY4NzQ3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Carlos Méndez",
    authorInitials: "CM",
    authorRole: "Head of FinOps",
    content: `<p class="lead">El mayor obstáculo para la cultura FinOps no es la tecnología. Es que los ingenieros no ven el impacto financiero de sus decisiones técnicas en tiempo real.</p>
<h2>Showback: Visibilidad sin consecuencias</h2>
<p>El Showback consiste en mostrar a cada equipo cuánto está costando su infraestructura, sin que ese costo se cobre directamente a su presupuesto. Es el primer paso para crear conciencia.</p>
<h2>Chargeback: Responsabilidad real</h2>
<p>El Chargeback va un paso más allá: el costo se imputa directamente al centro de costos del equipo o producto. Crea incentivos reales para optimizar, pero requiere una base de datos de etiquetado madura.</p>
<h2>Por dónde empezar</h2>
<p>Comienza con Showback. Publica dashboards semanales con el gasto por equipo. Celebra públicamente las reducciones de costo como logros técnicos equivalentes a mejorar el performance.</p>`,
    status: "published",
    views: 0,
  },
  {
    id: 4,
    slug: "instancias-reservadas-savings-plans",
    title: "Instancias Reservadas y Savings Plans: Errores matemáticos comunes",
    excerpt: "Comprar capacidad reservada puede ahorrar hasta un 70%, pero un mal cálculo genera compromisos vacíos. Qué métricas revisar antes de comprometer capital.",
    category: "Optimización",
    date: "02 Mar 2026",
    readingTime: "7 min",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzc2Nzc1OTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "David Ramírez",
    authorInitials: "DR",
    authorRole: "Lead FinOps Practitioner",
    content: `<p class="lead">Las Instancias Reservadas (RI) y los Savings Plans son las herramientas de ahorro más potentes en AWS, pero también las más mal utilizadas. Un compromiso mal calculado puede costarte más que no haberlo hecho.</p>
<h2>El error más común: baseline vs peak</h2>
<p>El error clásico es comprar RIs basándose en el pico de uso, no en el baseline. Si tu uso de EC2 oscila entre 10 y 40 instancias según la hora, tu baseline real son esas 10 instancias que siempre están corriendo.</p>
<h2>Savings Plans vs Reserved Instances</h2>
<p>Los Compute Savings Plans ofrecen más flexibilidad: aplican a EC2, Fargate y Lambda independientemente de la región o tipo de instancia. Son ideales si tu arquitectura está en evolución.</p>
<h2>La métrica clave: RI Utilization</h2>
<p>Mantén tu RI Utilization por encima del 90%. Si está por debajo, tienes compromisos sin usar que estás pagando sin obtener beneficio. CloudAltio te alerta cuando este indicador cae.</p>`,
    status: "published",
    views: 0,
  },
  {
    id: 5,
    slug: "arquitectura-serverless-factura",
    title: "El impacto de la arquitectura Serverless en tu factura mensual",
    excerpt: "Migrar a Lambda o Cloud Run cambia el modelo de costos de fijo a variable. Estrategias para monitorear el gasto por ejecución y evitar facturas sorpresa.",
    category: "Arquitectura Cloud",
    date: "18 Feb 2026",
    readingTime: "4 min",
    image: "https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NzY4NzQ3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Ana Torres",
    authorInitials: "AT",
    authorRole: "Cloud Architect",
    content: `<p class="lead">Serverless no significa gratis. Significa que el modelo de facturación cambia radicalmente: de pagar por capacidad reservada a pagar por cada milisegundo de ejecución.</p>
<h2>El riesgo del modelo variable</h2>
<p>Una función Lambda invocada millones de veces por un bug en producción puede generar una factura de miles de dólares en horas. Sin alertas correctas, no lo sabes hasta fin de mes.</p>
<h2>Estrategias de control de costos</h2>
<p>Configura concurrency limits en tus funciones Lambda críticas. Esto actúa como un circuit breaker de costos. Define presupuestos por función usando AWS Budgets con alertas a los 50%, 80% y 100%.</p>
<h2>CloudAltio y Serverless</h2>
<p>Nuestro panel de Anomalías detecta picos de invocación fuera del patrón histórico y te notifica en minutos. Puedes configurar umbrales por función individual o por grupo de recursos.</p>`,
    status: "published",
    views: 0,
  },
  {
    id: 6,
    slug: "alertas-anomalias-gasto",
    title: "Alertas de anomalías: Detectando picos de gasto en tiempo real",
    excerpt: "Configurar alertas dinámicas basadas en el comportamiento histórico para detener despliegues erróneos o scripts en bucle antes de que consuman el presupuesto mensual.",
    category: "Gobernanza",
    date: "05 Feb 2026",
    readingTime: "5 min",
    image: "https://images.unsplash.com/photo-1748439435495-722cc1728b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyYXBoJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3Njg3NDczNnww&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Carlos Méndez",
    authorInitials: "CM",
    authorRole: "Head of FinOps",
    content: `<p class="lead">Las alertas de presupuesto estáticas ("avísame cuando gaste más de $10,000") son necesarias pero insuficientes. No detectan anomalías dentro del mes ni comportamientos inusuales en servicios individuales.</p>
<h2>Alertas estáticas vs dinámicas</h2>
<p>Una alerta dinámica aprende tu patrón de gasto histórico (día de la semana, hora, servicio) y te notifica cuando el gasto actual se desvía significativamente de lo esperado. Es la diferencia entre saber que algo pasó y saber que algo está pasando.</p>
<h2>AWS Cost Anomaly Detection</h2>
<p>AWS ofrece Cost Anomaly Detection como servicio nativo. Configura monitores por servicio, cuenta o tag y define el umbral de desviación. El problema: solo envía email, sin integración directa con Slack o PagerDuty.</p>
<h2>Respuesta ante una anomalía</h2>
<p>Cuando CloudAltio detecta un pico anómalo, el flujo recomendado es: identificar el recurso causante → verificar si hay un despliegue reciente relacionado → tomar acción correctiva → registrar el incidente para prevención futura.</p>`,
    status: "published",
    views: 0,
  },
];

export const mockCampaigns: Campaign[] = [
  {
    id: 1,
    name: "Newsletter Abril 2026",
    subject: "Etiquetado en AWS y Azure: la guía definitiva",
    preheader: "El primer paso para la madurez FinOps es la visibilidad",
    date: "12 Abr 2026",
    status: "sent",
    recipients: 0,
    openRate: "-",
    relatedArticle: "Cómo implementar una estrategia de etiquetado (Tagging) exitosa en AWS y Azure",
    content: "<p>Este mes publicamos nuestra guía más completa sobre etiquetado en AWS y Azure. El tagging es la base de cualquier práctica FinOps seria, y en este artículo cubrimos desde las etiquetas obligatorias hasta la automatización con Terraform.</p>",
    cta: "Leer artículo completo",
  },
  {
    id: 2,
    name: "Newsletter Marzo 2026",
    subject: "Kubernetes y el costo del sobreaprovisionamiento",
    preheader: "¿Sabes cuánto estás desperdiciando en tu clúster EKS?",
    date: "28 Mar 2026",
    status: "sent",
    recipients: 0,
    openRate: "-",
    relatedArticle: "Derecho de piso: Reduciendo el desperdicio en entornos de Kubernetes",
    content: "<p>Este mes exploramos el problema del sobreaprovisionamiento en Kubernetes. Con herramientas como el VPA y namespace quotas, puedes reducir tu factura de EKS o GKE hasta un 30% sin afectar el rendimiento.</p>",
    cta: "Ver guía completa",
  },
  {
    id: 3,
    name: "Newsletter Mayo 2026",
    subject: "FinOps en Serverless: evita facturas sorpresa",
    preheader: "Lambda y Cloud Run cambian el modelo de costos — así los controlas",
    date: "2026-05-15",
    status: "scheduled",
    recipients: 0,
    openRate: "-",
    relatedArticle: "El impacto de la arquitectura Serverless en tu factura mensual",
    content: "<p>El próximo número cubre cómo monitorear y controlar los costos en arquitecturas serverless, incluyendo estrategias prácticas para Lambda y Cloud Run.</p>",
    cta: "Leer más",
  },
  {
    id: 4,
    name: "Campaña Q3 2026",
    subject: "El futuro del FinOps en América Latina",
    preheader: "Tendencias, herramientas y casos reales de la región",
    date: "",
    status: "draft",
    recipients: 0,
    openRate: "-",
    relatedArticle: "",
    content: "",
    cta: "Explorar",
  },
];

export const mockCategories = [
  "Guías Prácticas",
  "Casos de Uso",
  "Cultura FinOps",
  "Optimización",
  "Arquitectura Cloud",
  "Gobernanza",
];

export const mockAuthors = [
  { name: "David Ramírez", initials: "DR", role: "Lead FinOps Practitioner" },
  { name: "Ana Torres", initials: "AT", role: "Cloud Architect" },
  { name: "Carlos Méndez", initials: "CM", role: "Head of FinOps" },
  { name: "Luis Rojas", initials: "LR", role: "Solutions Engineer" },
];
