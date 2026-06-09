import { asset } from "@/lib/asset";

const problems = [
  {
    img: asset("/Poca-visibilidad.jpg"),
    title: "Poca visibilidad",
    desc: "Las facturas cloud son difíciles de interpretar. Cuesta entender en qué se está yendo realmente el gasto.",
  },
  {
    img: asset("/Equipos-desconectados.jpg"),
    title: "Equipos desconectados",
    desc: "Tecnología, finanzas y operaciones no siempre trabajan con la misma información ni toman decisiones con el mismo contexto.",
  },
  {
    img: asset("/Desvios-que-llegan-tarde.jpg"),
    title: "Desvíos que llegan tarde",
    desc: "Sin alertas ni proyecciones, el gasto puede crecer durante el mes sin que nadie lo detecte a tiempo.",
  },
  {
    img: asset("/Costos-dificiles-asignar.jpg"),
    title: "Costos difíciles de asignar",
    desc: "Sin una estructura clara, es difícil distribuir costos entre equipos, proyectos o clientes.",
  },
];

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
    .filter(Boolean).join(" ");

  const forecastPts = forecasts
    .map((v, i) => {
      if (v === null) return null;
      const prev = forecasts.slice(0, i).every((x) => x === null);
      return `${prev ? "M" : "L"} ${xOf(i).toFixed(1)},${yOf(v).toFixed(1)}`;
    })
    .filter(Boolean).join(" ");

  const yGridValues = [80000, 120000, 160000, 200000];
  const junX = xOf(5);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: 180 }}>
      {yGridValues.map((v) => (
        <g key={v}>
          <line x1={padL} y1={yOf(v).toFixed(1)} x2={W - padR} y2={yOf(v).toFixed(1)} stroke="#E2E8F0" strokeWidth="1" />
          <text x={padL - 6} y={yOf(v) + 3} textAnchor="end" fontSize="8" fill="#94a3b8">${v / 1000}k</text>
        </g>
      ))}
      <line x1={junX.toFixed(1)} y1={padT} x2={junX.toFixed(1)} y2={padT + cH} stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
      <text x={junX} y={padT - 2} textAnchor="middle" fontSize="8" fill="#94a3b8">Hoy</text>
      <path d={`${forecastPts} L ${xOf(9).toFixed(1)},${padT + cH} L ${junX.toFixed(1)},${padT + cH} Z`} fill="#36AAC1" fillOpacity={0.07} />
      <path d={`${actualPts} L ${xOf(5).toFixed(1)},${padT + cH} L ${xOf(0).toFixed(1)},${padT + cH} Z`} fill="#023660" fillOpacity={0.07} />
      <path d={actualPts} fill="none" stroke="#023660" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={forecastPts} fill="none" stroke="#36AAC1" strokeWidth="2" strokeDasharray="5 3" strokeLinecap="round" strokeLinejoin="round" />
      {months.map((m, i) => (
        <text key={m} x={xOf(i).toFixed(1)} y={H - 6} textAnchor="middle" fontSize="9" fill="#94a3b8">{m}</text>
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
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#023660", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>
            POR QUÉ FINOPS IMPORTA
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "flex-start" }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: "#023660", letterSpacing: "-1px", lineHeight: 1.15 }}>
              El cloud no es caro.<br />El cloud sin visibilidad sí.
            </h2>
            <p style={{ fontSize: 16, color: "#023660", lineHeight: 1.75, paddingTop: 8, opacity: 0.7 }}>
              Muchas empresas terminan gastando más de lo necesario en cloud no por falta de capacidad técnica, sino por falta de visibilidad, contexto y coordinación entre equipos.
            </p>
          </div>
        </div>

        {/* Problem cards with images */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 72 }}>
          {problems.map((p) => (
            <div
              key={p.title}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(15,23,42,0.04)",
              }}
            >
              {/* Photo */}
              <div style={{ position: "relative", height: 140, overflow: "hidden" }}>
                <img
                  src={p.img}
                  alt={p.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(180deg, rgba(251,46,80,0.15) 0%, rgba(0,61,128,0.25) 100%)",
                }} />
              </div>
              {/* Text */}
              <div style={{ padding: "18px 20px 22px" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#023660", marginBottom: 8, letterSpacing: "-0.2px" }}>
                  {p.title}
                </div>
                <p style={{ fontSize: 13, color: "#023660", lineHeight: 1.6, opacity: 0.7 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Forecast + FOCUS */}
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 24, marginBottom: 24 }}>
          <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: "28px 28px 20px", boxShadow: "0 2px 16px rgba(15,23,42,0.04)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#023660", marginBottom: 4 }}>Gasto real + Proyecciones</div>
                <div style={{ fontSize: 12, color: "#023660", opacity: 0.6 }}>Anticipa el gasto antes de que llegue la factura</div>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 20, height: 2, background: "#023660", borderRadius: 2 }} />
                  <span style={{ fontSize: 10, color: "#023660", opacity: 0.6 }}>Real</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <svg width="20" height="2" style={{ display: "block" }}>
                    <line x1="0" y1="1" x2="20" y2="1" stroke="#36AAC1" strokeWidth="2" strokeDasharray="5 3" />
                  </svg>
                  <span style={{ fontSize: 10, color: "#023660", opacity: 0.6 }}>Proyecciones</span>
                </div>
              </div>
            </div>
            <ForecastChart />
          </div>

          <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: "28px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 2px 16px rgba(15,23,42,0.04)" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(54,170,193,0.07)", border: "1px solid rgba(54,170,193,0.18)", borderRadius: 8, padding: "6px 12px", marginBottom: 20 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#023660", boxShadow: "0 0 6px rgba(2,54,96,0.5)" }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#023660", letterSpacing: "0.05em" }}>FOCUS · Estándar abierto</span>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#023660", marginBottom: 10, letterSpacing: "-0.3px" }}>
                Un idioma común para todos tus clouds
              </h3>
              <p style={{ fontSize: 13, color: "#023660", lineHeight: 1.65, marginBottom: 20, opacity: 0.7 }}>
                Cada cloud entrega datos en su propio formato. CloudAltio los traduce al estándar <strong>FOCUS</strong> (FinOps Open Cost and Usage Specification) para que puedas comparar, analizar y reportar de forma consistente.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "AWS · Azure · GCP · OCI", sub: "Datos nativos de cada proveedor", bg: "#F8FAFC", border: "#E2E8F0" },
                { label: "↓ Traducción FOCUS", sub: "CloudAltio normaliza y estandariza", bg: "rgba(54,170,193,0.08)", border: "rgba(54,170,193,0.2)" },
                { label: "Dashboard unificado", sub: "Un solo idioma para todos tus equipos", bg: "rgba(2,54,96,0.05)", border: "rgba(2,54,96,0.1)" },
              ].map((item) => (
                <div key={item.label} style={{ background: item.bg, border: `1px solid ${item.border}`, borderRadius: 8, padding: "10px 14px" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#023660", marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontSize: 10, color: "#023660", opacity: 0.6 }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom banner with photo */}
        <div style={{
          background: "linear-gradient(90deg, #003d80 0%, #7f2f8c 50%, #fb2e50 100%)",
          borderRadius: 16,
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          overflow: "hidden",
        }}>
          {/* Left: text */}
          <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.65)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 14 }}>
                Diseñado para equipos transversales
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.4 }}>
                CloudAltio es útil para Tecnología, Finanzas y Operaciones — todos trabajando con la misma fuente de verdad.
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["TECNOLOGÍA", "FINANZAS", "OPERACIONES"].map((team) => (
                <div key={team} style={{ background: "transparent", border: "1.5px solid rgba(255,255,255,0.5)", borderRadius: 100, padding: "8px 20px", fontSize: 11, fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.06em" }}>
                  {team}
                </div>
              ))}
            </div>
          </div>
          {/* Right: photo flush */}
          <div style={{ position: "relative" }}>
            <img
              src={asset("/Disenado-para-equipos-transversales.jpg")}
              alt="Equipos transversales"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transform: "scaleX(-1)" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(127,47,140,0.3) 0%, transparent 40%)" }} />
          </div>
        </div>

      </div>
    </section>
  );
}
