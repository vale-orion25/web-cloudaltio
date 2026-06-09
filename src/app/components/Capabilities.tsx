import { useState } from "react";
const cloudLogos: Record<string, string> = {
  AWS: "/logo-aws.svg",
  Azure: "/logo-azure.svg",
  GCP: "/logo-gcp.svg",
  OCI: "/logo-oracle.svg",
};
import { ArrowRight } from "lucide-react";

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
    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
      <div className="flex justify-between mb-4">
        {[
          { cloud: "AWS", cost: "$72.4k", color: "#023660" },
          { cloud: "Azure", cost: "$41.1k", color: "#36AAC1" },
          { cloud: "GCP", cost: "$26.3k", color: "#FE1F3D" },
          { cloud: "OCI", cost: "$14.0k", color: "#023660" },
        ].map((c) => {
          const logos: Record<string, JSX.Element> = {
            "AWS": <img src={cloudLogos["AWS"]} alt="AWS" style={{ width: 12, height: 12, objectFit: "contain" }} />,
            "Azure": <img src={cloudLogos["Azure"]} alt="Azure" style={{ width: 12, height: 12, objectFit: "contain" }} />,
            "GCP": <img src={cloudLogos["GCP"]} alt="GCP" style={{ width: 12, height: 12, objectFit: "contain" }} />,
            "OCI": <img src={cloudLogos["OCI"]} alt="OCI" style={{ width: 12, height: 12, objectFit: "contain" }} />,
          };

          return (
          <div key={c.cloud} className="text-center">
            <div className="w-4 h-4 mx-auto mb-1 flex items-center justify-center">
              {logos[c.cloud]}
            </div>
            <div className="text-[9px] text-slate-500 font-sans">{c.cloud}</div>
            <div className="text-[11px] font-bold text-cloud-dark font-sans">{c.cost}</div>
          </div>
        )})}
      </div>
      <div className="w-full h-[70px] relative">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full overflow-visible">
          <path d={area} fill="#023660" fillOpacity={0.1} />
          <path d={path} fill="none" stroke="#023660" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex justify-between mt-2">
        {spendTrendData.map((d) => (
          <div key={d.m} className="text-[8px] text-slate-500">{d.m}</div>
        ))}
      </div>
    </div>
  );
}

function CapabilityVisual2() {
  const alerts = [
    { type: "Anomalía", msg: "EC2 spike us-east-1", delta: "+$3.4k", accent: "bg-cloud-red", text: "text-cloud-red" },
    { type: "Presupuesto", msg: "Dev team al 90%", delta: "90%", accent: "bg-cloud-cyan", text: "text-cloud-cyan" },
    { type: "Forecast", msg: "Jul superará el límite", delta: "+12%", accent: "bg-cloud-dark", text: "text-cloud-dark" },
  ];
  return (
    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
      {alerts.map((a) => (
        <div key={a.msg} className="flex items-center gap-3 py-2 border-b border-slate-200 last:border-0">
          <div className={`w-1.5 h-1.5 rounded-full ${a.accent} shadow-sm shrink-0`} />
          <div className="flex-1">
            <div className="text-[9px] text-slate-500 font-sans">{a.type}</div>
            <div className="text-[11px] text-cloud-dark font-sans">{a.msg}</div>
          </div>
          <div className={`text-[11px] font-bold ${a.text} font-sans`}>{a.delta}</div>
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
  const W = 300;
  const barWidth = 16;

  return (
    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
      <div className="flex justify-between mb-3">
        <div>
          <div className="text-[9px] text-slate-500 font-sans">Proyecciones Julio</div>
          <div className="text-lg font-bold text-cloud-dark font-sans">$168k</div>
        </div>
        <div className="bg-cloud-cyan/10 border border-cloud-cyan/20 rounded-md px-2.5 py-1 self-start">
          <span className="text-[10px] text-cloud-dark font-semibold font-sans">+9.8% MoM</span>
        </div>
      </div>
      <div className="w-full h-[60px] relative flex items-end justify-around">
        {fcData.map((d) => {
          const v = d.a || d.f;
          const h = (v / maxV) * H;
          return (
            <div key={d.m} className="flex flex-col items-center gap-1">
              <div 
                className={`w-4 rounded-t-sm ${d.a ? "bg-cloud-dark" : "bg-cloud-cyan/40"}`}
                style={{ height: h }}
              />
              <div className="text-[8px] text-slate-500">{d.m}</div>
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
    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
      {recs.map((r) => (
        <div key={r.label} className="flex items-center gap-3 py-2 border-b border-slate-200 last:border-0">
          <div className={`w-3.5 h-3.5 rounded flex shrink-0 items-center justify-center border ${r.done ? 'bg-cloud-cyan/10 border-cloud-cyan/30' : 'bg-white border-slate-200'}`}>
            {r.done && <div className="w-1.5 h-1.5 rounded-sm bg-cloud-cyan" />}
          </div>
          <div className={`flex-1 text-[11px] font-sans ${r.done ? 'text-slate-500 line-through' : 'text-cloud-dark'}`}>
            {r.label}
          </div>
          <div className={`text-[11px] font-bold font-sans ${r.done ? 'text-slate-500' : 'text-cloud-cyan'}`}>
            {r.save}
          </div>
        </div>
      ))}
    </div>
  );
}

function CapabilityVisual5() {
  const maxV = 60;
  return (
    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
      <div className="mb-3 text-[10px] text-slate-500 font-sans">Gasto por equipo · Junio</div>
      <div className="flex flex-col gap-2 h-[90px]">
        {teamData.map((d) => (
          <div key={d.team} className="flex items-center gap-2">
            <div className="w-10 text-[9px] text-slate-500 text-right">{d.team}</div>
            <div className="flex-1 flex items-center">
              <div 
                className="h-2 bg-cloud-dark rounded-r-sm"
                style={{ width: `${(d.cost / maxV) * 100}%` }}
              />
            </div>
            <div className="w-5 text-[8px] text-slate-500">${d.cost}k</div>
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
    colorId: "cloud-dark",
  },
  {
    tag: "ALERTAS",
    title: "Alertas y control de desvíos",
    desc: "Detecta cambios inesperados en tu gasto y configura alertas por equipo, servicio o región para actuar a tiempo.",
    visual: <CapabilityVisual2 />,
    colorId: "cloud-cyan",
  },
  {
    tag: "PROYECCIONES",
    title: "Proyecciones más claras",
    desc: "Anticipa el cierre del mes usando tu historial de consumo y visualiza tendencias para planificar con más confianza.",
    visual: <CapabilityVisual3 />,
    colorId: "cloud-dark",
  },
  {
    tag: "REPORTES",
    title: "Análisis por equipo y proyecto",
    desc: "Desglosa el gasto por etiquetas, proyectos, equipos o cuentas y comparte reportes claros con finanzas y operaciones.",
    visual: <CapabilityVisual5 />,
    colorId: "cloud-dark",
  },
  {
    tag: "OPTIMIZACIÓN",
    title: "Optimización próximamente",
    desc: "Esta funcionalidad estará disponible próximamente para ayudarte a detectar oportunidades de eficiencia con mayor precisión.",
    visual: <CapabilityVisual4 />,
    colorId: "cloud-cyan",
  },
];

export function Capabilities() {
  const [active, setActive] = useState(0);
  const cap = capabilities[active];

  return (
    <section id="plataforma" className="bg-white py-24 lg:py-32 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[11px] font-bold text-cloud-dark uppercase tracking-widest mb-4">
            CAPACIDADES DE LA PLATAFORMA
          </div>
          <h2 className="text-4xl font-extrabold text-cloud-dark tracking-tight mb-4 leading-tight">
            Todo lo que necesitas para gestionar cloud <br className="hidden md:block"/> con criterio financiero
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Diseñado para equipos de tecnología, finanzas y operaciones que necesitan trabajar con una misma fuente de verdad.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex gap-2 mb-12 justify-center flex-wrap">
          {capabilities.map((c, i) => (
            <button
              key={c.tag}
              onClick={() => setActive(i)}
              className={`font-sans text-[13px] font-semibold rounded-full px-5 py-2 cursor-pointer transition-all duration-200 ${
                active === i 
                  ? `text-cloud-dark bg-cloud-light border border-cloud-cyan/30` 
                  : `text-slate-600 bg-slate-50 border border-slate-200 hover:bg-slate-100`
              }`}
            >
              {c.tag}
            </button>
          ))}
        </div>

        {/* Active capability */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white border border-slate-200 rounded-3xl p-8 lg:p-14 shadow-xl shadow-slate-200/50">
          <div>
            <div className={`inline-block text-[11px] font-bold text-cloud-dark bg-cloud-light border border-cloud-cyan/20 rounded-full px-3 py-1 mb-6 tracking-wide uppercase`}>
              {cap.tag}
            </div>
            <h3 className="text-3xl font-extrabold text-cloud-dark tracking-tight mb-4 leading-tight">
              {cap.title}
            </h3>
            <p className="text-base leading-relaxed text-slate-600 mb-8">
              {cap.desc}
            </p>
            <a
              href="#demo"
              className={`group inline-flex items-center gap-2 text-sm font-semibold no-underline px-6 py-3 rounded-full transition-all duration-200 bg-cloud-dark text-white hover:bg-cloud-dark/90 shadow-md`}
            >
              Solicitar demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div>{cap.visual}</div>
        </div>
      </div>
    </section>
  );
}