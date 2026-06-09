import { useState } from "react";
import { asset } from "@/lib/asset";
import { ArrowRight } from "lucide-react";

const cloudLogos: Record<string, string> = {
  AWS: asset("/AWS.png"),
  Azure: asset("/Azure.png"),
  GCP: asset("/Google-Cloud.png"),
  OCI: asset("/Oracle.png"),
};

const spendTrendData = [
  { m: "Ene", v: 42 }, { m: "Feb", v: 38 }, { m: "Mar", v: 55 },
  { m: "Abr", v: 61 }, { m: "May", v: 58 }, { m: "Jun", v: 72 },
];

const teamData = [
  { team: "Infra", cost: 48 },
  { team: "Backend", cost: 31 },
  { team: "Data", cost: 22 },
  { team: "Frontend", cost: 14 },
  { team: "DevOps", cost: 9 },
];

function CapabilityVisual1() {
  const n = spendTrendData.length;
  const maxV = 80;
  const H = 70;
  const W = 300;
  const xOf = (i: number) => (i / (n - 1)) * W;
  const yOf = (v: number) => H - (v / maxV) * H;
  const path = spendTrendData.map((d, i) => `${i === 0 ? "M" : "L"} ${xOf(i)},${yOf(d.v)}`).join(" ");
  const area = `${path} L ${W},${H} L 0,${H} Z`;

  return (
    <div style={{ background: "#F8FAFC", borderRadius: 12, border: "1px solid #E2E8F0", padding: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
        {[
          { cloud: "AWS", cost: "$72.4k" },
          { cloud: "Azure", cost: "$41.1k" },
          { cloud: "GCP", cost: "$26.3k" },
          { cloud: "OCI", cost: "$14.0k" },
        ].map((c) => (
          <div key={c.cloud} style={{ textAlign: "center" }}>
            <div style={{ width: 20, height: 20, margin: "0 auto 4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={cloudLogos[c.cloud]} alt={c.cloud} style={{ width: 16, height: 16, objectFit: "contain" }} />
            </div>
            <div style={{ fontSize: 9, color: "#94a3b8", fontFamily: "Inter, sans-serif" }}>{c.cloud}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#023660", fontFamily: "Inter, sans-serif" }}>{c.cost}</div>
          </div>
        ))}
      </div>
      <div style={{ width: "100%", height: 70 }}>
        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%", overflow: "visible" }}>
          <path d={area} fill="#023660" fillOpacity={0.1} />
          <path d={path} fill="none" stroke="#023660" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
        {spendTrendData.map((d) => (
          <div key={d.m} style={{ fontSize: 8, color: "#94a3b8", fontFamily: "Inter, sans-serif" }}>{d.m}</div>
        ))}
      </div>
    </div>
  );
}

function CapabilityVisual2() {
  const alerts = [
    { type: "Anomalía", msg: "EC2 spike us-east-1", delta: "+$3.4k", color: "#FE1F3D" },
    { type: "Presupuesto", msg: "Dev team al 90%", delta: "90%", color: "#36AAC1" },
    { type: "Forecast", msg: "Jul superará el límite", delta: "+12%", color: "#023660" },
  ];
  return (
    <div style={{ background: "#F8FAFC", borderRadius: 12, border: "1px solid #E2E8F0", padding: "16px" }}>
      {alerts.map((a) => (
        <div key={a.msg} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", borderBottom: "1px solid #E2E8F0" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: a.color, flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 9, color: "#94a3b8", fontFamily: "Inter, sans-serif" }}>{a.type}</div>
            <div style={{ fontSize: 11, color: "#023660", fontFamily: "Inter, sans-serif" }}>{a.msg}</div>
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, color: a.color, fontFamily: "Inter, sans-serif" }}>{a.delta}</div>
        </div>
      ))}
    </div>
  );
}

function CapabilityVisual3() {
  const fcData = [
    { m: "Jun", a: 153, f: 0 }, { m: "Jul", a: 0, f: 168 }, { m: "Ago", a: 0, f: 175 }, { m: "Sep", a: 0, f: 162 },
  ];
  const maxV = 200;
  const H = 60;

  return (
    <div style={{ background: "#F8FAFC", borderRadius: 12, border: "1px solid #E2E8F0", padding: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: 9, color: "#94a3b8", fontFamily: "Inter, sans-serif" }}>Proyecciones Julio</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#023660", fontFamily: "Inter, sans-serif" }}>$168k</div>
        </div>
        <div style={{ background: "rgba(54,170,193,0.08)", border: "1px solid rgba(54,170,193,0.2)", borderRadius: 6, padding: "4px 10px", alignSelf: "flex-start" }}>
          <span style={{ fontSize: 10, color: "#023660", fontWeight: 600, fontFamily: "Inter, sans-serif" }}>+9.8% MoM</span>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-around", height: H }}>
        {fcData.map((d) => {
          const v = d.a || d.f;
          const h = (v / maxV) * H;
          return (
            <div key={d.m} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <div style={{ width: 16, borderRadius: "2px 2px 0 0", background: d.a ? "#023660" : "rgba(54,170,193,0.4)", height: h }} />
              <div style={{ fontSize: 8, color: "#94a3b8", fontFamily: "Inter, sans-serif" }}>{d.m}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CapabilityVisual4() {
  const recs = [
    { label: "Rightsizing EC2", save: "$8.2k/mes", done: false },
    { label: "Reserved Instances", save: "$6.4k/mes", done: true },
    { label: "S3 Lifecycle Rules", save: "$2.1k/mes", done: false },
    { label: "Eliminar snapshots", save: "$0.9k/mes", done: true },
  ];
  return (
    <div style={{ background: "#F8FAFC", borderRadius: 12, border: "1px solid #E2E8F0", padding: "16px" }}>
      {recs.map((r) => (
        <div key={r.label} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", borderBottom: "1px solid #E2E8F0" }}>
          <div style={{ width: 14, height: 14, borderRadius: 4, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: r.done ? "rgba(54,170,193,0.1)" : "#FFFFFF", border: r.done ? "1px solid rgba(54,170,193,0.3)" : "1px solid #E2E8F0" }}>
            {r.done && <div style={{ width: 6, height: 6, borderRadius: 2, background: "#36AAC1" }} />}
          </div>
          <div style={{ flex: 1, fontSize: 11, color: r.done ? "#94a3b8" : "#023660", textDecoration: r.done ? "line-through" : "none", fontFamily: "Inter, sans-serif" }}>{r.label}</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: r.done ? "#94a3b8" : "#36AAC1", fontFamily: "Inter, sans-serif" }}>{r.save}</div>
        </div>
      ))}
    </div>
  );
}

function CapabilityVisual5() {
  const maxV = 60;
  return (
    <div style={{ background: "#F8FAFC", borderRadius: 12, border: "1px solid #E2E8F0", padding: "16px" }}>
      <div style={{ fontSize: 10, color: "#94a3b8", marginBottom: 12, fontFamily: "Inter, sans-serif" }}>Gasto por equipo · Junio</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {teamData.map((d) => (
          <div key={d.team} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 52, fontSize: 9, color: "#94a3b8", textAlign: "right", fontFamily: "Inter, sans-serif" }}>{d.team}</div>
            <div style={{ flex: 1 }}>
              <div style={{ height: 8, background: "#023660", borderRadius: "0 2px 2px 0", width: `${(d.cost / maxV) * 100}%` }} />
            </div>
            <div style={{ width: 28, fontSize: 9, color: "#94a3b8", fontFamily: "Inter, sans-serif" }}>${d.cost}k</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const capabilities = [
  {
    tag: "MULTI-CLOUD",
    title: "Visibilidad unificada",
    desc: "Un panel único para entender el gasto de todos tus clouds en un solo lugar, sin exportar archivos ni consolidar datos manualmente.",
    visual: <CapabilityVisual1 />,
  },
  {
    tag: "ALERTAS",
    title: "Alertas y control de desvíos",
    desc: "Detecta cambios inesperados en tu gasto y configura alertas por equipo, servicio o región para actuar a tiempo.",
    visual: <CapabilityVisual2 />,
  },
  {
    tag: "PROYECCIONES",
    title: "Proyecciones más claras",
    desc: "Anticipa el cierre del mes usando tu historial de consumo y visualiza tendencias para planificar con más confianza.",
    visual: <CapabilityVisual3 />,
  },
  {
    tag: "REPORTES",
    title: "Análisis por equipo y proyecto",
    desc: "Desglosa el gasto por etiquetas, proyectos, equipos o cuentas y comparte reportes claros con finanzas y operaciones.",
    visual: <CapabilityVisual5 />,
  },
  {
    tag: "OPTIMIZACIÓN",
    title: "Optimización próximamente",
    desc: "Esta funcionalidad estará disponible próximamente para ayudarte a detectar oportunidades de eficiencia con mayor precisión.",
    visual: <CapabilityVisual4 />,
  },
];

export function Capabilities() {
  const [active, setActive] = useState(0);
  const cap = capabilities[active];

  return (
    <section
      id="capacidades"
      style={{
        backgroundImage: `url('${asset("/Capacidades-de-la-plataforma.jpg")}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Inter, sans-serif",
        padding: "100px 0 100px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.75)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>
            CAPACIDADES DE LA PLATAFORMA
          </div>
          <h2 style={{ fontSize: 42, fontWeight: 800, color: "#FFFFFF", letterSpacing: "-1px", lineHeight: 1.2, margin: "0 auto 16px", maxWidth: 680 }}>
            Todo lo que necesitas para gestionar cloud con criterio financiero
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", maxWidth: 560, margin: "0 auto" }}>
            Diseñado para equipos de tecnología, finanzas y operaciones que necesitan trabajar con una misma fuente de verdad.
          </p>
        </div>

        {/* Tab pills */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
          {capabilities.map((c, i) => (
            <button
              key={c.tag}
              onClick={() => setActive(i)}
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.05em",
                padding: "9px 22px",
                borderRadius: 100,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                transition: "all 0.2s",
                border: active === i ? "1.5px solid transparent" : "1.5px solid rgba(255,255,255,0.55)",
                background: active === i ? "#023660" : "transparent",
                color: "#FFFFFF",
              }}
            >
              {c.tag}
            </button>
          ))}
        </div>

        {/* White card */}
        <div
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
            <div style={{
              display: "inline-block",
              fontSize: 11, fontWeight: 700,
              color: "#023660",
              background: "rgba(54,170,193,0.1)",
              border: "1px solid rgba(54,170,193,0.25)",
              borderRadius: 100,
              padding: "5px 14px",
              marginBottom: 20,
              letterSpacing: "0.05em",
            }}>
              {cap.tag}
            </div>
            <h3 style={{ fontSize: 32, fontWeight: 800, color: "#023660", letterSpacing: "-0.5px", lineHeight: 1.25, marginBottom: 16 }}>
              {cap.title}
            </h3>
            <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.75, marginBottom: 32 }}>
              {cap.desc}
            </p>
            <a
              href="#demo"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#023660", color: "#FFFFFF",
                fontSize: 14, fontWeight: 700,
                padding: "12px 28px", borderRadius: 100,
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Solicitar demo <ArrowRight size={16} />
            </a>
          </div>

          {/* Right: visual */}
          <div>{cap.visual}</div>
        </div>
      </div>
    </section>
  );
}
