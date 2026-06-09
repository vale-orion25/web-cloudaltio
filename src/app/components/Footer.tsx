import { Link } from "react-router";
import { asset } from "@/lib/asset";

export function Footer() {
  const links = {
    Plataforma: ["Dashboard", "Alertas", "Forecast", "Optimización", "Reportes"],
    FinOps: ["¿Qué es FinOps?", "Estándar FOCUS", "Metodología", "Blog"],
    Empresa: ["Sobre CloudAltio", "Clientes", "Careers", "Contáctanos"],
    Legal: ["Privacidad", "Términos de uso", "Seguridad", "DPA"],
  };

  return (
    <footer
      style={{
        background: "#F8FAFC",
        borderTop: "1px solid #E2E8F0",
        padding: "64px 0 40px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        {/* Top */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr repeat(4, 1fr)", gap: 48, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Link to="/">
                <img
                  src={asset("/Logo-CloudAltio-color.png")}
                  alt="CloudAltio"
                  style={{ height: 28, width: "auto", display: "block" }}
                />
              </Link>
            </div>
            <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.7, maxWidth: 240, marginBottom: 20 }}>
              Plataforma FinOps para empresas de Latinoamérica. Visibilidad, control y optimización de tu gasto cloud.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(54,170,193,0.07)",
                border: "1px solid rgba(54,170,193,0.18)",
                borderRadius: 6,
                padding: "5px 11px",
              }}
            >
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#94a3b8", boxShadow: "0 0 6px rgba(148,163,184,0.4)" }} />
              <span style={{ fontSize: 10, fontWeight: 600, color: "#475569" }}>FinOps Foundation member · en proceso</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>
                {category}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map((item) => {
                  let href = "/";
                  if (item === "Dashboard" || item === "Reportes" || item === "Optimización" || item === "Forecast" || item === "Alertas") href = "/plataforma";
                  if (item === "¿Qué es FinOps?" || item === "Metodología") href = "/finops";
                  if (item === "Blog") href = "/blog";
                  if (item === "Contáctanos") href = "/faq";
                  
                  return (
                    <Link
                      key={item}
                      to={href}
                      style={{
                        fontSize: 13,
                        color: "#475569",
                        textDecoration: "none",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#0F172A"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#475569"; }}
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 28,
            borderTop: "1px solid #E2E8F0",
          }}
        >
          <span style={{ fontSize: 12, color: "#475569" }}>
            © 2025 CloudAltio. Todos los derechos reservados. Hecho para LATAM 🌎
          </span>
          <div style={{ display: "flex", gap: 16 }}>
            {["AWS Partner", "Azure Partner", "GCP Partner"].map((badge) => (
              <span
                key={badge}
                style={{
                  fontSize: 10,
                  color: "#475569",
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: 4,
                  padding: "4px 10px",
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}