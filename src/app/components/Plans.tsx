import { useState } from "react";

const plans = [
  {
    name: "Starter",
    badge: null,
    comingSoon: true,
    tagline: "Próximamente",
    clouds: "Multi-cloud",
    features: [
      "Dashboard unificado multi-cloud",
      "Alertas de presupuesto básicas",
      "Reportes mensuales",
    ],
    missing: [],
    cta: "Próximamente",
    ctaStyle: "outline",
    accentColor: "#36AAC1",
  },
  {
    name: "Professional",
    badge: "Más popular",
    comingSoon: false,
    tagline: "Para empresas que necesitan visibilidad transversal y control",
    clouds: "Multi-cloud",
    features: [
      "Usuarios ilimitados",
      "Acceso basado en roles",
      "Agente IA / Asistente FinOps",
      "Dashboard multi-cloud",
      "Alertas y anomalías",
      "Exportación de datos",
    ],
    missing: [],
    cta: "Solicitar demo",
    ctaStyle: "primary",
    accentColor: "#FE1F3D",
  },
  {
    name: "Enterprise",
    badge: null,
    comingSoon: false,
    tagline: "Para organizaciones con múltiples cuentas, equipos y necesidades avanzadas de gobierno",
    clouds: "Clouds ilimitados",
    features: [
      "Todo lo de Professional",
      "Cuentas y usuarios ilimitados",
      "SSO / SAML",
      "SLA con uptime garantizado",
      "Integraciones personalizadas",
      "Implementación asistida",
      "Customer Success Manager dedicado",
      "Reportes ejecutivos y de auditoría",
      "Soporte 24/7",
    ],
    missing: [],
    cta: "Hablar con ventas",
    ctaStyle: "outline",
    accentColor: "#023660",
  },
];

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
      <path d="M2.5 7L5.5 10L11.5 4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
      <path d="M4 4L10 10M10 4L4 10" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Plans() {
  const [hoveredCta, setHoveredCta] = useState<number | null>(null);

  return (
    <section
      id="planes"
      style={{
        background: "#F8FAFC",
        padding: "120px 0",
        fontFamily: "Inter, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: -100,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 300,
          background: "radial-gradient(ellipse, rgba(54,170,193,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
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
            Planes
          </div>
          <h2
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-1px",
              marginBottom: 14,
              lineHeight: 1.15,
            }}
          >
            El nivel correcto para cada organización
          </h2>
          <p style={{ fontSize: 16, color: "#475569", maxWidth: 520, margin: "0 auto" }}>
            Estandariza tus consumos cloud con FOCUS y elige el plan que mejor se adapte a tu organización.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              style={{
                background: plan.comingSoon ? "#FAFAFA" : "#FFFFFF",
                border: plan.comingSoon
                  ? "1px solid #E2E8F0"
                  : plan.badge
                  ? "2px solid #FE1F3D"
                  : "1px solid #E2E8F0",
                borderRadius: 18,
                padding: "36px 32px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                boxShadow: plan.comingSoon
                  ? "0 2px 8px rgba(15,23,42,0.02)"
                  : plan.badge
                  ? "0 8px 32px rgba(254,31,61,0.14)"
                  : "0 4px 16px rgba(15,23,42,0.06)",
                opacity: plan.comingSoon ? 0.65 : 1,
              }}
            >
              {/* Coming Soon Badge */}
              {plan.comingSoon && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#64748b",
                    color: "#FFFFFF",
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "4px 14px",
                    borderRadius: 100,
                    whiteSpace: "nowrap",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Próximamente
                </div>
              )}

              {/* Badge para planes disponibles */}
              {!plan.comingSoon && plan.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#FE1F3D",
                    color: "#FFFFFF",
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "4px 14px",
                    borderRadius: 100,
                    whiteSpace: "nowrap",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    boxShadow: "0 4px 12px rgba(254,31,61,0.35)",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: plan.accentColor,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 12,
                }}
              >
                {plan.name}
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#0F172A",
                  marginBottom: 8,
                  lineHeight: 1.45,
                }}
              >
                {plan.tagline}
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: `${plan.accentColor}0d`,
                  border: `1px solid ${plan.accentColor}25`,
                  borderRadius: 6,
                  padding: "5px 12px",
                  marginTop: 8,
                  marginBottom: 28,
                  alignSelf: "flex-start",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6C2 3.79 3.79 2 6 2H7C8.66 2 10 3.34 10 5C10 6.66 8.66 8 7 8H2" stroke={plan.accentColor} strokeWidth="1.4" strokeLinecap="round" />
                  <circle cx="3.5" cy="8" r="1.2" fill={plan.accentColor} />
                </svg>
                <span style={{ fontSize: 11, fontWeight: 600, color: plan.accentColor }}>
                  {plan.clouds}
                </span>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "#E2E8F0", marginBottom: 24 }} />

              {/* Features */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20, flex: 1 }}>
                {plan.features.map((feat) => (
                  <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckIcon color={plan.accentColor} />
                    <span style={{ fontSize: 13, color: "#475569", lineHeight: 1.45 }}>{feat}</span>
                  </div>
                ))}
                {plan.missing.map((feat) => (
                  <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <XIcon />
                    <span style={{ fontSize: 13, color: "#E2E8F0", lineHeight: 1.45 }}>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              {plan.comingSoon ? (
                <div
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#94a3b8",
                    padding: "14px",
                    borderRadius: 100,
                    background: "#F1F5F9",
                    border: "1px solid #E2E8F0",
                    marginTop: 8,
                    cursor: "not-allowed",
                  }}
                >
                  Próximamente
                </div>
              ) : (
                <a
                  href="#demo"
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#FFFFFF",
                    textDecoration: "none",
                    padding: "14px",
                    borderRadius: 100,
                    background: hoveredCta === idx ? "#d81932" : "#FE1F3D",
                    border: "none",
                    boxShadow: hoveredCta === idx
                      ? "0 8px 28px rgba(254,31,61,0.35)"
                      : "0 4px 20px rgba(254,31,61,0.2)",
                    marginTop: 8,
                    transition: "background 0.2s, box-shadow 0.2s, transform 0.15s",
                    transform: hoveredCta === idx ? "translateY(-1px)" : "translateY(0)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setHoveredCta(idx)}
                  onMouseLeave={() => setHoveredCta(null)}
                >
                  Solicitar demo
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
