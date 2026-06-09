import { Sparkles, Users, Database, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import focusImage from "../../imports/Captura_de_pantalla_2026-06-03_a_la_s__10.05.53_a.m..png";

const cards = [
  {
    icon: <Database className="w-6 h-6 text-[#FE1F3D]" />,
    title: "Estándar FOCUS",
    desc: "Normalizamos los datos de AWS, Azure, GCP y OCI bajo el estándar FOCUS para comparaciones precisas entre proveedores.",
    accent: "#FE1F3D",
  },
  {
    icon: <Users className="w-6 h-6 text-[#023660]" />,
    title: "Cultura FinOps",
    desc: "Unificamos a Finanzas, Tecnología y Operaciones en un solo lenguaje de datos para decisiones estratégicas.",
    accent: "#023660",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-[#36AAC1]" />,
    title: "Asistente de IA",
    desc: "Insights inmediatos sobre anomalías y proyecciones de ahorro mediante nuestro asistente FinOps especializado.",
    accent: "#36AAC1",
  },
];

export function FocusSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12">

        {/* ── Header centrado ── */}
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#023660]/5 border border-[#023660]/10 mb-5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="pilarGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#fb2e50" />
                  <stop offset="50%" stopColor="#7f2f8c" />
                  <stop offset="100%" stopColor="#003d80" />
                </linearGradient>
              </defs>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="url(#pilarGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="14 2 14 8 20 8" stroke="url(#pilarGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="16" y1="13" x2="8" y2="13" stroke="url(#pilarGrad)" strokeWidth="2" strokeLinecap="round"/>
              <line x1="16" y1="17" x2="8" y2="17" stroke="url(#pilarGrad)" strokeWidth="2" strokeLinecap="round"/>
              <line x1="10" y1="9" x2="8" y2="9" stroke="url(#pilarGrad)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-[11px] font-bold text-[#023660] uppercase tracking-widest">Pilar Fundamental</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#023660] leading-[1.1] mb-5">
            Gestión Multi-cloud con{" "}
            <span className="text-[#FE1F3D]">Criterio Financiero</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            CloudAltio elimina la complejidad de comparar facturas de distintos proveedores. Unificamos bajo estándares internacionales de transparencia y cumplimiento técnico.
          </p>
        </div>

        {/* ── 3 Cards horizontales ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group flex flex-col gap-4 p-7 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform"
                style={{ backgroundColor: card.accent + "12", border: `1.5px solid ${card.accent}25` }}
              >
                {card.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-[#023660] mb-2">{card.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
              </div>
              <div
                className="mt-auto h-0.5 w-8 rounded-full group-hover:w-16 transition-all duration-300"
                style={{ backgroundColor: card.accent }}
              />
            </div>
          ))}
        </div>

        {/* ── Imagen + CTA ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">

          {/* Imagen — ocupa 3/5 */}
          <div className="lg:col-span-3 relative group">
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#023660]/8 to-[#FE1F3D]/8 rounded-[2.5rem] -z-10 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative bg-white border border-slate-200 rounded-2xl p-3 shadow-xl shadow-slate-200/50 overflow-hidden">
              <div className="rounded-xl overflow-hidden">
                <ImageWithFallback
                  src={focusImage}
                  alt="CloudAltio FOCUS Standard Visualization"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
            {/* Badge flotante */}
            <div className="absolute -top-4 -right-4 bg-white border border-slate-200 px-4 py-3 rounded-xl shadow-lg hidden md:flex items-center gap-3 z-20">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-black text-[#023660] uppercase tracking-widest">FOCUS 1.0 Live</span>
            </div>
          </div>

          {/* CTA block — ocupa 2/5 */}
          <div className="lg:col-span-2 flex flex-col gap-6 lg:pl-6">
            <div className="space-y-4">
              <p className="text-2xl font-black text-[#023660] leading-tight">
                Un solo estándar para todos tus proveedores cloud.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Sin hojas de cálculo, sin interpretaciones distintas. Solo datos unificados y listos para decidir.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <button className="bg-[#FE1F3D] hover:bg-[#d81932] text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-lg shadow-[#FE1F3D]/25 flex items-center gap-2 group w-fit">
                Comenzar ahora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-[#023660] font-semibold text-sm flex items-center gap-1.5 hover:gap-3 transition-all w-fit">
                Ver documentación FOCUS
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
