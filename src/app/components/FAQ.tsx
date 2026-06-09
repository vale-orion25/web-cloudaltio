import { useState } from "react";

const faqs = [
  {
    q: "¿CloudAltio modifica recursos en mi nube?",
    a: "No. CloudAltio es una plataforma de solo lectura. Nos conectamos a las APIs de billing y metadata de AWS, Azure, GCP y Oracle Cloud para analizar tu gasto, pero nunca ejecutamos acciones sobre tu infraestructura. La decisión siempre es tuya.",
  },
  {
    q: "¿Cuánto tarda la implementación?",
    a: "Contamos con un proceso de onboarding asistido para asegurar una integración correcta de tus datos. El proceso consiste en otorgar permisos de lectura a través de roles IAM o equivalentes en cada cloud, y CloudAltio hace el resto. No se requieren agentes ni cambios en tu infraestructura.",
  },
  {
    q: "¿Qué nubes soporta CloudAltio?",
    a: "CloudAltio soporta Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP) y Oracle Cloud Infrastructure (OCI).",
  },
  {
    q: "¿Necesito conocimiento técnico para usar CloudAltio?",
    a: "No. CloudAltio está diseñado para ser usado tanto por equipos de ingeniería como por equipos de finanzas y operaciones. Los dashboards traducen datos técnicos de cloud en lenguaje financiero claro. No necesitas saber qué es una instancia EC2 para entender cuánto estás gastando en cómputo.",
  },
  {
    q: "¿Qué datos procesa CloudAltio?",
    a: "CloudAltio procesa únicamente datos de costos y metadata de uso entregados por las APIs de cada proveedor cloud. Nunca accedemos a datos de negocio, PII ni contenido de tus workloads. Si tienes requisitos específicos de seguridad o privacidad, podemos conversarlo en detalle durante la evaluación.",
  },
  {
    q: "¿Puedo asignar costos por equipo o proyecto sin tener tagging perfecto?",
    a: "Sí. CloudAltio incluye herramientas de cost allocation que permiten asignar costos incluso cuando el tagging no está al 100%. Puedes usar reglas de negocio, nombres de cuentas y heurísticas configurables para distribuir costos entre equipos y proyectos desde el primer día.",
  },
  {
    q: "¿Hay costos adicionales por usar CloudAltio?",
    a: "CloudAltio tiene su propia tarifa por uso de la plataforma. El acceso a las APIs de billing de tus proveedores cloud es generalmente de bajo costo o gratuito, dependiendo de cada proveedor.",
  },
  {
    q: "¿Qué es FOCUS y por qué lo usa CloudAltio?",
    a: "FOCUS (FinOps Open Cost and Usage Specification) es un estándar abierto impulsado por la FinOps Foundation para unificar los datos de costos y uso entre distintos proveedores cloud. CloudAltio utiliza el estándar FOCUS para que puedas unificar, estandarizar y comparar consumos generados desde AWS, Azure, GCP y OCI en una sola fuente de verdad, permitiendo un análisis consistente sin importar qué nubes estés usando.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        background: "#ffffff",
        padding: "120px 0",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#0F172A",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: 16,
            }}
          >
            Preguntas frecuentes
          </div>
          <h2
            style={{
              fontSize: 38,
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-1px",
              lineHeight: 1.15,
            }}
          >
            Todo lo que necesitas saber
          </h2>
          <p style={{ fontSize: 16, color: "#475569", marginTop: 16, maxWidth: 500, margin: "16px auto 0" }}>
            Desde la implementación hasta cómo funciona FOCUS, aquí encontrarás las respuestas más comunes.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: open === i ? "rgba(54,170,193,0.03)" : "#FFFFFF",
                border: open === i ? "1px solid rgba(54,170,193,0.2)" : "1px solid #E2E8F0",
                borderRadius: 14,
                overflow: "hidden",
                transition: "border-color 0.2s, background 0.2s",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "22px 26px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: open === i ? "#0F172A" : "#0F172A",
                    fontFamily: "Inter, sans-serif",
                    lineHeight: 1.4,
                    flex: 1,
                  }}
                >
                  {faq.q}
                </span>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: open === i ? "rgba(54,170,193,0.1)" : "#F8FAFC",
                    border: open === i ? "1px solid rgba(54,170,193,0.2)" : "1px solid #E2E8F0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.2s",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    style={{
                      transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  >
                    <path
                      d="M7 2v10M2 7h10"
                      stroke={open === i ? "#36AAC1" : "#475569"}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </button>

              {open === i && (
                <div
                  style={{
                    padding: "0 26px 22px",
                  }}
                >
                  <p
                    style={{
                      fontSize: 14,
                      color: "#475569",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}