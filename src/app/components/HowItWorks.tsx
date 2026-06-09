const cloudLogos: Record<string, string> = {
  aws: "/logo-aws.svg",
  az: "/logo-azure.svg",
  gcp: "/logo-gcp.svg",
  oci: "/logo-oracle.svg",
};

const steps = [
  {
    number: "01",
    title: "Conecta tus clouds",
    description:
      "Integra AWS, Azure, Google Cloud y Oracle Cloud de forma simple. Sin agentes, sin modificar tu infraestructura y con acceso de solo lectura.",
    tags: ["API nativa", "Sin agentes", "Onboarding asistido"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M8 14C8 10.69 10.69 8 14 8H18C20.76 8 23 10.24 23 13C23 15.76 20.76 18 18 18H8"
          stroke="#023660"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="10" cy="18" r="2.5" fill="#023660" />
        <path
          d="M12 9C12 7.34 13.34 6 15 6C17.21 6 19 7.79 19 10"
          stroke="rgba(2,54,96,0.4)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    visual: (
      <div
        style={{
          background: "#F8FAFC",
          borderRadius: 10,
          border: "1px solid #E2E8F0",
          padding: "14px 16px",
          marginTop: 16,
        }}
      >
        {["AWS · us-east-1", "Azure · East US", "GCP · us-central1", "Oracle · São Paulo"].map(
          (cloud, i) => {
            const logoKeys = ["aws", "az", "gcp", "oci"];
            const logos = logoKeys.map(k => (
              <img key={k} src={cloudLogos[k]} alt={k} style={{ width: 12, height: 12, objectFit: "contain" }} />
            ));
            return (
            <div
              key={cloud}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "7px 0",
                borderBottom: i < 3 ? "1px solid #E2E8F0" : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {logos[i]}
                <span style={{ fontSize: 11, color: "#475569", fontFamily: "Inter, sans-serif" }}>
                  {cloud}
                </span>
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "#36AAC1",
                  background: "rgba(54,170,193,0.08)",
                  border: "1px solid rgba(54,170,193,0.2)",
                  padding: "2px 8px",
                  borderRadius: 100,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                }}
              >
                Conectado
              </div>
            </div>
            );
          }
        )}
      </div>
    ),
  },
  {
    number: "02",
    title: "Visualiza y entiende tu gasto",
    description:
      "Un dashboard unificado que convierte información compleja en una vista clara de tu gasto por equipo, proyecto, región, servicio y etiquetas.",
    tags: ["Multi-cloud", "Por equipo", "Por proyecto"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="16" width="4" height="8" rx="1.5" fill="#36AAC1" />
        <rect x="10" y="12" width="4" height="12" rx="1.5" fill="#36AAC1" opacity="0.7" />
        <rect x="16" y="8" width="4" height="16" rx="1.5" fill="#36AAC1" opacity="0.5" />
        <rect x="22" y="5" width="4" height="19" rx="1.5" fill="#36AAC1" opacity="0.3" />
        <path d="M4 4h22" stroke="rgba(54,170,193,0.2)" strokeWidth="1" />
      </svg>
    ),
    visual: (
      <div
        style={{
          background: "#F8FAFC",
          borderRadius: 10,
          border: "1px solid #E2E8F0",
          padding: "14px 16px",
          marginTop: 16,
        }}
      >
        {[
          { label: "Compute", pct: 68, cost: "$48.2k", color: "#023660" },
          { label: "Storage", pct: 42, cost: "$12.4k", color: "#36AAC1" },
          { label: "Database", pct: 34, cost: "$9.8k", color: "#FE1F3D" },
        ].map((item) => (
          <div key={item.label} style={{ marginBottom: 10 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 5,
              }}
            >
              <span style={{ fontSize: 10, color: "#475569", fontFamily: "Inter, sans-serif" }}>
                {item.label}
              </span>
              <span
                style={{ fontSize: 10, fontWeight: 700, color: "#0F172A", fontFamily: "Inter, sans-serif" }}
              >
                {item.cost}
              </span>
            </div>
            <div style={{ height: 4, background: "#E2E8F0", borderRadius: 4 }}>
              <div
                style={{
                  height: "100%",
                  width: `${item.pct}%`,
                  background: item.color,
                  borderRadius: 4,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "03",
    title: "Prepárate para optimizar",
    description:
      "Próximamente podrás identificar oportunidades de ahorro y priorizar acciones según su impacto económico.",
    tags: ["Próximamente", "Oportunidades de ahorro", "Impacto estimado"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 5L8 14H14L12 23L20 12H14L16 5H14z"
          stroke="#FE1F3D"
          strokeWidth="1.8"
          strokeLinejoin="round"
          fill="rgba(254,31,61,0.12)"
        />
      </svg>
    ),
    visual: (
      <div
        style={{
          background: "#F8FAFC",
          borderRadius: 10,
          border: "1px solid #E2E8F0",
          padding: "14px 16px",
          marginTop: 16,
        }}
      >
        {[
          { rec: "Rightsizing EC2", saving: "$8,200/mes", effort: "Bajo" },
          { rec: "Reserved Instances", saving: "$6,400/mes", effort: "Medio" },
          { rec: "S3 Lifecycle", saving: "$2,100/mes", effort: "Bajo" },
        ].map((item) => (
          <div
            key={item.rec}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "7px 0",
              borderBottom: "1px solid #E2E8F0",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#0F172A",
                  fontFamily: "Inter, sans-serif",
                  marginBottom: 2,
                }}
              >
                {item.rec}
              </div>
              <div
                style={{
                  fontSize: 9,
                  color: "#475569",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Esfuerzo: {item.effort}
              </div>
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#FE1F3D",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {item.saving}
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <section
      id="plataforma"
      style={{
        background: "#FFFFFF",
        padding: "120px 0",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 700,
              color: "#0F172A",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: 16,
            }}
          >
            Cómo funciona
          </div>
          <h2
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-1px",
              marginBottom: 16,
              lineHeight: 1.15,
            }}
          >
            De la conexión a la visibilidad,
            <br />
            en tres pasos
          </h2>
          <p style={{ fontSize: 16, color: "#475569", maxWidth: 480, margin: "0 auto" }}>
            Sin meses de implementación. Sin procesos complejos. Solo datos claros para tomar mejores decisiones.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: 16,
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 2px 16px rgba(15,23,42,0.04)",
              }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: 54,
                    right: -36,
                    width: 48,
                    height: 1,
                    background: "rgba(15,23,42,0.1)",
                    zIndex: 10,
                  }}
                />
              )}

              {/* Step number */}
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 900,
                  color: "rgba(15,23,42,0.04)",
                  position: "absolute",
                  top: 16,
                  right: 24,
                  lineHeight: 1,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: "rgba(54,170,193,0.06)",
                  border: "1px solid rgba(54,170,193,0.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                {step.icon}
              </div>

              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#0F172A",
                  marginBottom: 12,
                  letterSpacing: "-0.3px",
                }}
              >
                {step.title}
              </h3>

              <p style={{ fontSize: 14, lineHeight: 1.65, color: "#475569", marginBottom: 16 }}>
                {step.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 4 }}>
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: "#475569",
                      background: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                      borderRadius: 100,
                      padding: "3px 10px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {step.visual}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
