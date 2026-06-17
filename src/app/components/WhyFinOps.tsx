import { motion } from "motion/react";
import { asset } from "@/lib/asset";
import { useLanguage } from "@/lib/i18n";

function ForecastChart() {
  const { tr } = useLanguage();
  const W = 500;
  const H = 260;
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
    <motion.svg
      viewBox={`0 0 ${W} ${H}`}
      style={{ width: "100%", height: "100%", display: "block" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <defs>
        {/* Línea real: azul → violeta */}
        <linearGradient id="actualLineGrad" x1={padL} y1="0" x2={xOf(5)} y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#003d80" />
          <stop offset="100%" stopColor="#7f2f8c" />
        </linearGradient>
        {/* Línea proyección: violeta → teal */}
        <linearGradient id="forecastLineGrad" x1={xOf(5)} y1="0" x2={xOf(9)} y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7f2f8c" />
          <stop offset="100%" stopColor="#36AAC1" />
        </linearGradient>
        {/* Relleno real: fade vertical */}
        <linearGradient id="actualFillGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#003d80" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#003d80" stopOpacity="0" />
        </linearGradient>
        {/* Relleno proyección: fade vertical */}
        <linearGradient id="forecastFillGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#36AAC1" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#36AAC1" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Grid horizontal */}
      {yGridValues.map((v, gi) => (
        <motion.g
          key={v}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, delay: gi * 0.08 } } }}
        >
          <line x1={padL} y1={yOf(v).toFixed(1)} x2={W - padR} y2={yOf(v).toFixed(1)} stroke="#E2E8F0" strokeWidth="1" />
          <text x={padL - 6} y={yOf(v) + 3} textAnchor="end" fontSize="8" fill="#94a3b8">${v / 1000}k</text>
        </motion.g>
      ))}

      {/* Línea Hoy + etiqueta */}
      <motion.g variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } } }}>
        <line x1={junX.toFixed(1)} y1={padT} x2={junX.toFixed(1)} y2={padT + cH} stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />
        <text x={junX} y={padT - 2} textAnchor="middle" fontSize="8" fill="#94a3b8">{tr.why.chartToday}</text>
      </motion.g>

      {/* Relleno real */}
      <motion.path
        d={`${actualPts} L ${xOf(5).toFixed(1)},${padT + cH} L ${xOf(0).toFixed(1)},${padT + cH} Z`}
        fill="url(#actualFillGrad)"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1.0, delay: 1.8 } } }}
      />

      {/* Relleno proyección */}
      <motion.path
        d={`${forecastPts} L ${xOf(9).toFixed(1)},${padT + cH} L ${junX.toFixed(1)},${padT + cH} Z`}
        fill="url(#forecastFillGrad)"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1.0, delay: 3.2 } } }}
      />

      {/* Línea real — se dibuja sola con degradé */}
      <motion.path
        d={actualPts}
        fill="none"
        stroke="url(#actualLineGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          hidden:   { pathLength: 0, opacity: 0 },
          visible:  { pathLength: 1, opacity: 1,
            transition: {
              pathLength: { duration: 2.4, delay: 0.5, ease: "easeInOut" },
              opacity:    { duration: 0.01, delay: 0.5 },
            },
          },
        }}
      />

      {/* Puntos en la línea real */}
      {actuals.map((v, i) =>
        v !== null ? (
          <motion.circle
            key={i}
            cx={xOf(i).toFixed(1)}
            cy={yOf(v).toFixed(1)}
            r="3"
            fill="white"
            stroke="url(#actualLineGrad)"
            strokeWidth="2"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3, delay: 1.9 + i * 0.06 } } }}
          />
        ) : null
      )}

      {/* Línea proyección con degradé — aparece después */}
      <motion.path
        d={forecastPts}
        fill="none"
        stroke="url(#forecastLineGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="5 3"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1.2, delay: 2.8 } } }}
      />

      {/* Etiquetas de meses */}
      {months.map((m, i) => (
        <motion.text
          key={m}
          x={xOf(i).toFixed(1)} y={H - 6}
          textAnchor="middle" fontSize="9" fill="#94a3b8"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3, delay: 0.1 + i * 0.06 } } }}
        >
          {m}
        </motion.text>
      ))}
    </motion.svg>
  );
}

export function WhyFinOps() {
  const { tr } = useLanguage();

  const problems = [
    {
      img: asset("/Poca-visibilidad.jpg"),
      title: tr.why.problems[0].title,
      desc: tr.why.problems[0].desc,
    },
    {
      img: asset("/Equipos-desconectados.jpg"),
      title: tr.why.problems[1].title,
      desc: tr.why.problems[1].desc,
    },
    {
      img: asset("/Desvios-que-llegan-tarde.jpg"),
      title: tr.why.problems[2].title,
      desc: tr.why.problems[2].desc,
    },
    {
      img: asset("/Costos-dificiles-asignar.jpg"),
      title: tr.why.problems[3].title,
      desc: tr.why.problems[3].desc,
    },
  ];

  return (
    <section
      id="finops"
      style={{
        background: "#F8FAFC",
        padding: "120px 0",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="px-4 md:px-10" style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#023660", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>
            {tr.why.eyebrow}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 60, alignItems: "flex-start" }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: "#023660", letterSpacing: "-1px", lineHeight: 1.15 }}>
              {tr.why.title1}<br />{tr.why.title2}
            </h2>
            <p style={{ fontSize: 16, color: "#023660", lineHeight: 1.75, paddingTop: 8, opacity: 0.7 }}>
              {tr.why.subtitle}
            </p>
          </div>
        </div>

        {/* Problem cards with images */}
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 16, marginBottom: 72 }}>
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
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 24, marginBottom: 24 }}>
          <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: "28px 28px 20px", boxShadow: "0 2px 16px rgba(15,23,42,0.04)", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, flexShrink: 0 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#023660", marginBottom: 4 }}>{tr.why.chartTitle}</div>
                <div style={{ fontSize: 12, color: "#023660", opacity: 0.6 }}>{tr.why.chartSub}</div>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 20, height: 2, background: "#023660", borderRadius: 2 }} />
                  <span style={{ fontSize: 10, color: "#023660", opacity: 0.6 }}>{tr.why.chartActual}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <svg width="20" height="2" style={{ display: "block" }}>
                    <line x1="0" y1="1" x2="20" y2="1" stroke="#36AAC1" strokeWidth="2" strokeDasharray="5 3" />
                  </svg>
                  <span style={{ fontSize: 10, color: "#023660", opacity: 0.6 }}>{tr.why.chartForecast}</span>
                </div>
              </div>
            </div>
            <div style={{ flex: 1, minHeight: 0 }}>
              <ForecastChart />
            </div>
          </div>

          <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: "28px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 2px 16px rgba(15,23,42,0.04)" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(54,170,193,0.07)", border: "1px solid rgba(54,170,193,0.18)", borderRadius: 8, padding: "6px 12px", marginBottom: 20 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#023660", boxShadow: "0 0 6px rgba(2,54,96,0.5)" }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#023660", letterSpacing: "0.05em" }}>{tr.why.focusBadge}</span>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#023660", marginBottom: 10, letterSpacing: "-0.3px" }}>
                {tr.why.focusTitle}
              </h3>
              <p style={{ fontSize: 13, color: "#023660", lineHeight: 1.65, marginBottom: 20, opacity: 0.7 }}>
                {tr.why.focusDesc}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: tr.why.flow[0].label, sub: tr.why.flow[0].sub, bg: "#F8FAFC", border: "#E2E8F0" },
                { label: tr.why.flow[1].label, sub: tr.why.flow[1].sub, bg: "rgba(54,170,193,0.08)", border: "rgba(54,170,193,0.2)" },
                { label: tr.why.flow[2].label, sub: tr.why.flow[2].sub, bg: "rgba(2,54,96,0.05)", border: "rgba(2,54,96,0.1)" },
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
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr]" style={{
          background: "linear-gradient(90deg, #003d80 0%, #7f2f8c 50%, #fb2e50 100%)",
          borderRadius: 16,
          overflow: "hidden",
        }}>
          {/* Left: text */}
          <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.65)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 14 }}>
                {tr.why.bannerEyebrow}
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.4 }}>
                {tr.why.bannerTitle}
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {tr.why.teams.map((team) => (
                <div key={team} style={{ background: "transparent", border: "1.5px solid rgba(255,255,255,0.5)", borderRadius: 100, padding: "8px 20px", fontSize: 11, fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.06em" }}>
                  {team}
                </div>
              ))}
            </div>
          </div>
          {/* Right: photo flush */}
          <div className="min-h-[200px] md:min-h-0" style={{ position: "relative" }}>
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
