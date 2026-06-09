import { Eye, Users, BellRing, Tag } from "lucide-react";

const problems = [
  {
    Icon: Eye,
    color: "#023660",
    bg: "rgba(2,54,96,0.06)",
    title: "Poca visibilidad",
    desc: "Las facturas cloud son difíciles de interpretar. Cuesta entender en qué se está yendo realmente el gasto.",
  },
  {
    Icon: Users,
    color: "#36AAC1",
    bg: "rgba(54,170,193,0.08)",
    title: "Equipos desconectados",
    desc: "Tecnología, finanzas y operaciones no siempre trabajan con la misma información ni toman decisiones con el mismo contexto.",
  },
  {
    Icon: BellRing,
    color: "#FE1F3D",
    bg: "rgba(254,31,61,0.07)",
    title: "Desvíos que llegan tarde",
    desc: "Sin alertas ni proyecciones, el gasto puede crecer durante el mes sin que nadie lo detecte a tiempo.",
  },
  {
    Icon: Tag,
    color: "#023660",
    bg: "rgba(2,54,96,0.06)",
    title: "Costos difíciles de asignar",
    desc: "Sin una estructura clara, es difícil distribuir costos entre equipos, proyectos o clientes.",
  },
];

// Pure SVG chart — no recharts, no duplicate-key bug
function ForecastChart() {
  const W = 500;
  const H = 180;
  const padL = 44;
  const padR = 10;
  const padT = 12;
  const padB = 24;
  const cW = W - padL - padR;
  const cH = H - padT - padB;

  const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct"];
  const actuals = [98000, 105000, 121000, 115000, 138000, 153000, null, null, null, null];
  const forecasts = [null, null, null, null, null, 153000, 168000, 175000, 162000, 158000];

  const minV = 80000;
  const maxV = 200000;
  const range = maxV - minV;

  const xOf = (i: number) => padL + (i / (months.length - 1)) * cW;
  const yOf = (v: number) => padT + cH - ((v - minV) / range) * cH;

  const actualPts = actuals
    .map((v, i) => (v !== null ? `${i === 0 ? "M" : "L"} ${xOf(i).toFixed(1)},${yOf(v).toFixed(1)}` : null))
    .filter(Boolean)
    .join(" ");

  const forecastPts = forecasts
    .map((v, i) => {
      if (v === null) return null;
      const prev = forecasts.slice(0, i).every((x) => x === null);
      return `${prev ? "M" : "L"} ${xOf(i).toFixed(1)},${yOf(v).toFixed(1)}`;
    })
    .filter(Boolean)
    .join(" ");

  const yGridValues = [80000, 120000, 160000, 200000];
  const junX = xOf(5);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      style={{ width: "100%", height: 180 }}
      aria-label="Gasto real y forecast"
    >
      {yGridValues.map((v) => (
        <g key={v}>
          <line
            x1={padL}
            y1={yOf(v).toFixed(1)}
            x2={W - padR}
            y2={yOf(v).toFixed(1)}
            stroke="#E2E8F0"
            strokeWidth="1"
          />
          <text
            x={padL - 6}
            y={yOf(v) + 3}
            textAnchor="end"
            fontSize="8"
            fill="#475569"
          >
            ${v / 1000}k
          </text>
        </g>
      ))}

      {/* Reference line — Jun / Today */}
      <line
        x1={junX.toFixed(1)}
        y1={padT}
        x2={junX.toFixed(1)}
        y2={padT + cH}
        stroke="#E2E8F0"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      <text x={junX} y={padT - 2} textAnchor="middle" fontSize="8" fill="#475569">
        Hoy
      </text>

      {/* Forecast area fill */}
      <path
        d={`${forecastPts} L ${xOf(9).toFixed(1)},${padT + cH} L ${junX.toFixed(1)},${padT + cH} Z`}
        fill="#36AAC1"
        fillOpacity={0.07}
      />

      {/* Actual area fill */}
      <path
        d={`${actualPts} L ${xOf(5).toFixed(1)},${padT + cH} L ${xOf(0).toFixed(1)},${padT + cH} Z`}
        fill="#023660"
        fillOpacity={0.07}
      />

      {/* Actual line */}
      <path
        d={actualPts}
        fill="none"
        stroke="#023660"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Forecast line (dashed) */}
      <path
        d={forecastPts}
        fill="none"
        stroke="#36AAC1"
        strokeWidth="2"
        strokeDasharray="5 3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {months.map((m, i) => (
        <text
          key={m}
          x={xOf(i).toFixed(1)}
          y={H - 6}
          textAnchor="middle"
          fontSize="9"
          fill="#475569"
        >
          {m}
        </text>
      ))}
    </svg>
  );
}

export function WhyFinOps() {
  return (
    <section
      id="finops"
      style={{
        background: "#F8FAFC",
        padding: "120px 0",
        fontFamily: "Inter, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          bottom: -100,
          right: -100,
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(54,170,193,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        {/* Section Header */}
        <div style={{ marginBottom: 80 }}>
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
            POR QUÉ FINOPS IMPORTA
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "flex-start",
            }}
          >
            <h2
              style={{
                fontSize: 40,
                fontWeight: 800,
                color: "#0F172A",
                letterSpacing: "-1px",
                lineHeight: 1.15,
              }}
            >
              El cloud no es caro.
              <br />
              El cloud sin visibilidad sí.
            </h2>
            <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, paddingTop: 8 }}>
              Muchas empresas terminan gastando más de lo necesario en cloud no por falta de capacidad técnica, sino por falta de visibilidad, contexto y coordinación entre equipos.
            </p>
          </div>
        </div>

        {/* Problems grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            marginBottom: 72,
          }}
        >
          {problems.map((p) => (
            <div
              key={p.title}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: 14,
                padding: "24px 22px",
                boxShadow: "0 2px 12px rgba(15,23,42,0.04)",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 14 }}>{p.icon}</div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#0F172A",
                  marginBottom: 8,
                  letterSpacing: "-0.2px",
                }}
              >
                {p.title}
              </div>
              <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Forecast Visual + FOCUS */}
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 24, marginBottom: 24 }}>
          {/* Forecast chart */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: 16,
              padding: "28px 28px 20px",
              boxShadow: "0 2px 16px rgba(15,23,42,0.04)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#0F172A", marginBottom: 4 }}>
                  Gasto real + Proyecciones
                </div>
                <div style={{ fontSize: 12, color: "#475569" }}>
                  Anticipa el gasto antes de que llegue la factura
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 20, height: 2, background: "#023660", borderRadius: 2 }} />
                  <span style={{ fontSize: 10, color: "#475569" }}>Real</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <svg width="20" height="2" style={{ display: "block" }}>
                    <line x1="0" y1="1" x2="20" y2="1" stroke="#36AAC1" strokeWidth="2" strokeDasharray="5 3" />
                  </svg>
                  <span style={{ fontSize: 10, color: "#475569" }}>Proyecciones</span>
                </div>
              </div>
            </div>
            <ForecastChart />
          </div>

          {/* FOCUS standard — enhanced */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: 16,
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 2px 16px rgba(15,23,42,0.04)",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(54,170,193,0.07)",
                  border: "1px solid rgba(54,170,193,0.18)",
                  borderRadius: 8,
                  padding: "6px 12px",
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#023660",
                    boxShadow: "0 0 6px rgba(2,54,96,0.5)",
                  }}
                />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#0F172A", letterSpacing: "0.05em" }}>
                  FOCUS · Estándar abierto
                </span>
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#0F172A",
                  marginBottom: 10,
                  letterSpacing: "-0.3px",
                }}
              >
                Un idioma común para todos tus clouds
              </h3>
              <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.65, marginBottom: 20 }}>
                Cada cloud entrega datos en su propio formato. CloudAltio los traduce al estándar <strong>FOCUS</strong> (FinOps Open Cost and Usage Specification) para que puedas comparar, analizar y reportar de forma consistente.
              </p>
            </div>

            {/* Mini flow: native → FOCUS → dashboard */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "AWS · Azure · GCP · OCI", sub: "Datos nativos de cada proveedor", color: "#E2E8F0", textColor: "#475569" },
                { label: "↓ Traducción FOCUS", sub: "CloudAltio normaliza y estandariza", color: "rgba(54,170,193,0.1)", textColor: "#023660" },
                { label: "Dashboard unificado", sub: "Un solo idioma para todos tus equipos", color: "rgba(2,54,96,0.07)", textColor: "#023660" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: item.color,
                    border: `1px solid ${item.color === "#E2E8F0" ? "#E2E8F0" : "rgba(54,170,193,0.2)"}`,
                    borderRadius: 8,
                    padding: "10px 14px",
                  }}
                >
                  <div style={{ fontSize: 12, fontWeight: 700, color: item.textColor, marginBottom: 2 }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: 10, color: "#64748b" }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Who benefits banner */}
        <div
          style={{
            background: "linear-gradient(135deg, #023660 0%, #034b85 100%)",
            borderRadius: 16,
            padding: "28px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
          }}
        >
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(231,244,246,0.7)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
              Diseñado para equipos transversales
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF" }}>
              CloudAltio es útil para Tecnología, Finanzas y Operaciones — todos trabajando con la misma fuente de verdad.
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
            {["Tecnología", "Finanzas", "Operaciones"].map((team) => (
              <div
                key={team}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 8,
                  padding: "8px 16px",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#E7F4F6",
                  whiteSpace: "nowrap",
                }}
              >
                {team}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
