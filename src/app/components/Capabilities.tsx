import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { asset } from "@/lib/asset";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { Link } from "react-router";

const cloudLogos: Record<string, string> = {
  AWS: asset("/AWS.png"),
  Azure: asset("/Azure.png"),
  GCP: asset("/Google-Cloud.png"),
  OCI: asset("/Oracle.png"),
};

const spendTrendData = [
  { m: "Ene", v: 38 }, { m: "Feb", v: 42 }, { m: "Mar", v: 48 },
  { m: "Abr", v: 55 }, { m: "May", v: 51 }, { m: "Jun", v: 63 },
  { m: "Jul", v: 68 }, { m: "Ago", v: 72 }, { m: "Sep", v: 69 },
  { m: "Oct", v: 75 }, { m: "Nov", v: 82 }, { m: "Dic", v: 88 },
];

const teamData = [
  { team: "Infra",    cost: 48 },
  { team: "Backend",  cost: 31 },
  { team: "Data",     cost: 22 },
  { team: "Frontend", cost: 14 },
  { team: "DevOps",   cost: 9  },
];

/* ── Visual 1: Multi-cloud spend line + gradient ── */
function CapabilityVisual1() {
  const n = spendTrendData.length;
  const maxV = 100;
  const H = 110;
  const W = 480;
  const xOf = (i: number) => (i / (n - 1)) * W;
  const yOf = (v: number) => H - (v / maxV) * H;
  const path = spendTrendData.map((d, i) => `${i === 0 ? "M" : "L"} ${xOf(i).toFixed(1)},${yOf(d.v).toFixed(1)}`).join(" ");
  const area = `${path} L ${W},${H} L 0,${H} Z`;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        {[
          { cloud: "AWS", cost: "$72.4k" },
          { cloud: "Azure", cost: "$41.1k" },
          { cloud: "GCP", cost: "$26.3k" },
          { cloud: "OCI", cost: "$14.0k" },
        ].map((c, i) => (
          <motion.div
            key={c.cloud}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            style={{ textAlign: "center" }}
          >
            <div style={{ width: 28, height: 28, margin: "0 auto 6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={cloudLogos[c.cloud]} alt={c.cloud} style={{ width: 22, height: 22, objectFit: "contain" }} />
            </div>
            <div style={{ fontSize: 10, color: "#94a3b8", fontFamily: "Inter, sans-serif", marginBottom: 2 }}>{c.cloud}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#023660", fontFamily: "Inter, sans-serif" }}>{c.cost}</div>
          </motion.div>
        ))}
      </div>
      <div style={{ width: "100%", height: 120 }}>
        <motion.svg
          viewBox={`0 0 ${W} ${H}`}
          style={{ width: "100%", height: "100%", overflow: "visible" }}
          initial="hidden"
          animate="visible"
        >
          <defs>
            <linearGradient id="capLine1Grad" x1="0" y1="0" x2={W} y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#003d80" />
              <stop offset="50%" stopColor="#7f2f8c" />
              <stop offset="100%" stopColor="#fb2e50" />
            </linearGradient>
            <linearGradient id="capFill1Grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7f2f8c" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#003d80" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d={area}
            fill="url(#capFill1Grad)"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8, delay: 2.2 } } }}
          />
          <motion.path
            d={path}
            fill="none"
            stroke="url(#capLine1Grad)"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden:  { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 1, transition: { pathLength: { duration: 2.0, ease: "easeInOut", delay: 0.2 }, opacity: { duration: 0.01, delay: 0.2 } } },
            }}
          />
          {spendTrendData.map((d, i) => (
            <motion.circle
              key={i}
              cx={xOf(i).toFixed(1)} cy={yOf(d.v).toFixed(1)} r="3.5"
              fill="white" stroke="url(#capLine1Grad)" strokeWidth="2"
              variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.25, delay: 1.8 + i * 0.07 } } }}
            />
          ))}
        </motion.svg>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
        {spendTrendData.map((d) => (
          <div key={d.m} style={{ fontSize: 9, color: "#94a3b8", fontFamily: "Inter, sans-serif" }}>{d.m}</div>
        ))}
      </div>
    </div>
  );
}

/* ── Visual 2: Alertas con stagger ── */
function CapabilityVisual2() {
  const alerts = [
    { type: "Anomalía",   msg: "EC2 spike us-east-1",  delta: "+$3.4k", color: "#FE1F3D" },
    { type: "Presupuesto", msg: "Dev team al 90%",       delta: "90%",    color: "#36AAC1" },
    { type: "Forecast",   msg: "Jul superará el límite", delta: "+12%",   color: "#7f2f8c" },
  ];
  return (
    <div style={{ background: "#F8FAFC", borderRadius: 12, border: "1px solid #E2E8F0", padding: "16px" }}>
      {alerts.map((a, i) => (
        <motion.div
          key={a.msg}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: i * 0.12 }}
          style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", borderBottom: "1px solid #E2E8F0" }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.12 + 0.1 }}
            style={{ width: 8, height: 8, borderRadius: "50%", background: a.color, flexShrink: 0, boxShadow: `0 0 6px ${a.color}` }}
          />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 9, color: "#94a3b8", fontFamily: "Inter, sans-serif" }}>{a.type}</div>
            <div style={{ fontSize: 11, color: "#023660", fontFamily: "Inter, sans-serif" }}>{a.msg}</div>
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, color: a.color, fontFamily: "Inter, sans-serif" }}>{a.delta}</div>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Visual 3: Proyecciones — barras que crecen ── */
function CapabilityVisual3() {
  const fcData = [
    { m: "Jun", a: 153, f: 0 },
    { m: "Jul", a: 0, f: 168 },
    { m: "Ago", a: 0, f: 175 },
    { m: "Sep", a: 0, f: 162 },
  ];
  const maxV = 200;
  const H = 60;

  return (
    <div style={{ background: "#F8FAFC", borderRadius: 12, border: "1px solid #E2E8F0", padding: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div style={{ fontSize: 9, color: "#94a3b8", fontFamily: "Inter, sans-serif" }}>Proyecciones Julio</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#023660", fontFamily: "Inter, sans-serif" }}>$168k</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.2 }}
          style={{ background: "rgba(54,170,193,0.08)", border: "1px solid rgba(54,170,193,0.2)", borderRadius: 6, padding: "4px 10px", alignSelf: "flex-start" }}
        >
          <span style={{ fontSize: 10, color: "#023660", fontWeight: 600, fontFamily: "Inter, sans-serif" }}>+9.8% MoM</span>
        </motion.div>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-around", height: H }}>
        {fcData.map((d, i) => {
          const v = d.a || d.f;
          const targetH = (v / maxV) * H;
          const isActual = !!d.a;
          return (
            <div key={d.m} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: targetH }}
                transition={{ duration: 1.3, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: 16,
                  borderRadius: "2px 2px 0 0",
                  background: isActual
                    ? "linear-gradient(180deg, #7f2f8c, #003d80)"
                    : "linear-gradient(180deg, rgba(54,170,193,0.7), rgba(54,170,193,0.25))",
                }}
              />
              <div style={{ fontSize: 8, color: "#94a3b8", fontFamily: "Inter, sans-serif" }}>{d.m}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Visual 4: Optimización — lista con stagger ── */
function CapabilityVisual4() {
  const recs = [
    { label: "Rightsizing EC2",    save: "$8.2k/mes", done: false },
    { label: "Reserved Instances", save: "$6.4k/mes", done: true  },
    { label: "S3 Lifecycle Rules", save: "$2.1k/mes", done: false },
    { label: "Eliminar snapshots", save: "$0.9k/mes", done: true  },
  ];
  return (
    <div style={{ background: "#F8FAFC", borderRadius: 12, border: "1px solid #E2E8F0", padding: "16px" }}>
      {recs.map((r, i) => (
        <motion.div
          key={r.label}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: i * 0.1 }}
          style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", borderBottom: "1px solid #E2E8F0" }}
        >
          <div style={{ width: 14, height: 14, borderRadius: 4, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: r.done ? "rgba(54,170,193,0.1)" : "#FFFFFF", border: r.done ? "1px solid rgba(54,170,193,0.3)" : "1px solid #E2E8F0" }}>
            {r.done && <div style={{ width: 6, height: 6, borderRadius: 2, background: "#36AAC1" }} />}
          </div>
          <div style={{ flex: 1, fontSize: 11, color: r.done ? "#94a3b8" : "#023660", textDecoration: r.done ? "line-through" : "none", fontFamily: "Inter, sans-serif" }}>{r.label}</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: r.done ? "#94a3b8" : "#36AAC1", fontFamily: "Inter, sans-serif" }}>{r.save}</div>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Visual 5: Reportes — barras horizontales con degradé ── */
function CapabilityVisual5() {
  const maxV = 60;
  return (
    <div style={{ background: "#F8FAFC", borderRadius: 12, border: "1px solid #E2E8F0", padding: "16px" }}>
      <div style={{ fontSize: 10, color: "#94a3b8", marginBottom: 12, fontFamily: "Inter, sans-serif" }}>Gasto por equipo · Junio</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {teamData.map((d, i) => (
          <div key={d.team} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 52, fontSize: 9, color: "#94a3b8", textAlign: "right", fontFamily: "Inter, sans-serif" }}>{d.team}</div>
            <div style={{ flex: 1, background: "#E2E8F0", borderRadius: "0 2px 2px 0", overflow: "hidden", height: 8 }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(d.cost / maxV) * 100}%` }}
                transition={{ duration: 1.4, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  height: "100%",
                  borderRadius: "0 2px 2px 0",
                  background: `linear-gradient(90deg, #003d80, #7f2f8c)`,
                }}
              />
            </div>
            <div style={{ width: 28, fontSize: 9, color: "#94a3b8", fontFamily: "Inter, sans-serif" }}>${d.cost}k</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main component ── */
export function Capabilities() {
  const { tr } = useLanguage();
  const [active, setActive] = useState(0);

  const capabilities = [
    { tag: tr.caps.items[0].tag, title: tr.caps.items[0].title, desc: tr.caps.items[0].desc, visual: <CapabilityVisual1 /> },
    { tag: tr.caps.items[1].tag, title: tr.caps.items[1].title, desc: tr.caps.items[1].desc, visual: <CapabilityVisual2 /> },
    { tag: tr.caps.items[2].tag, title: tr.caps.items[2].title, desc: tr.caps.items[2].desc, visual: <CapabilityVisual3 /> },
    { tag: tr.caps.items[3].tag, title: tr.caps.items[3].title, desc: tr.caps.items[3].desc, visual: <CapabilityVisual5 /> },
    { tag: tr.caps.items[4].tag, title: tr.caps.items[4].title, desc: tr.caps.items[4].desc, visual: <CapabilityVisual4 /> },
  ];

  const cap = capabilities[active];

  return (
    <section
      id="capacidades"
      style={{
        backgroundImage: `url('${asset("/Capacidades-de-la-plataforma.jpg")}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Inter, sans-serif",
        padding: "100px 0",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.75)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>
            {tr.caps.eyebrow}
          </div>
          <h2 style={{ fontSize: 42, fontWeight: 800, color: "#FFFFFF", letterSpacing: "-1px", lineHeight: 1.2, margin: "0 auto 16px", maxWidth: 680 }}>
            {tr.caps.title}
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", maxWidth: 560, margin: "0 auto" }}>
            {tr.caps.subtitle}
          </p>
        </div>

        {/* Tab pills */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
          {capabilities.map((c, i) => (
            <motion.button
              key={c.tag}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.05em",
                padding: "9px 22px",
                borderRadius: 100,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                transition: "all 0.25s",
                border: "none",
                background: active === i ? "#023660" : "rgba(255,255,255,0.15)",
                color: "#FFFFFF",
                boxShadow: active === i ? "0 4px 18px rgba(2,54,96,0.4)" : "none",
              }}
            >
              {c.tag}
            </motion.button>
          ))}
        </div>

        {/* White card con AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "#FFFFFF",
              borderRadius: 24,
              padding: "48px 56px",
              boxShadow: "0 8px 48px rgba(15,23,42,0.18)",
              display: "grid",
              gridTemplateColumns: "1fr 1.1fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            {/* Left: text */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                style={{
                  display: "inline-block",
                  fontSize: 11, fontWeight: 700,
                  color: "#023660",
                  background: "rgba(54,170,193,0.1)",
                  border: "1px solid rgba(54,170,193,0.25)",
                  borderRadius: 100,
                  padding: "5px 14px",
                  marginBottom: 20,
                  letterSpacing: "0.05em",
                }}
              >
                {cap.tag}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                style={{ fontSize: 32, fontWeight: 800, color: "#023660", letterSpacing: "-0.5px", lineHeight: 1.25, marginBottom: 16 }}
              >
                {cap.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                style={{ fontSize: 15, color: "#64748B", lineHeight: 1.75, marginBottom: 32 }}
              >
                {cap.desc}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Link
                  to={`/contacto?motivo=${encodeURIComponent("Hola, quiero ver CloudAltio en acción. Me gustaría agendar una demo.")}`}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "#023660",
                    color: "#FFFFFF",
                    fontSize: 14, fontWeight: 700,
                    padding: "12px 28px", borderRadius: 100,
                    textDecoration: "none",
                    fontFamily: "Inter, sans-serif",
                    boxShadow: "0 4px 18px rgba(2,54,96,0.3)",
                  }}
                >
                  {tr.nav.demo} <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

            {/* Right: visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {cap.visual}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
