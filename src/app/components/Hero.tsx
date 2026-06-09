import { useState } from "react";
import { DashboardMockup } from "./DashboardMockup";
import type { ReactNode } from "react";

function FloatingCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-10 font-sans ${className}`}
    >
      {children}
    </div>
  );
}

export function Hero() {
  const [primaryHover, setPrimaryHover] = useState(false);

  return (
    <section className="relative bg-white pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden font-sans">
      {/* Ambient glow effects */}
      <div className="absolute -top-[200px] left-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(54,170,193,0.07)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-[100px] right-[5%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(231,244,246,0.5)_0%,transparent_70%)] pointer-events-none" />

      {/* Grid lines decoration */}
      <div className="absolute inset-0 pointer-events-none" />

      {/* Main Container - Compact and Efficient */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        
        {/* Left Column — Text & CTAs */}
        <div className="flex flex-col items-start justify-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 bg-cloud-cyan/5 border border-cloud-cyan/20 rounded-full px-3.5 py-1 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-cloud-red shadow-[0_0_8px_rgba(254,31,61,0.5)]" />
            <span className="text-xs font-semibold text-cloud-dark tracking-wider uppercase">
              Plataforma FinOps
            </span>
            <span className="text-cloud-cyan/40 text-xs">·</span>
            <span className="text-xs font-bold text-[#36AAC1] tracking-wider uppercase">
              FOCUS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl lg:text-[50px] font-extrabold leading-[1.1] text-cloud-dark mb-3 tracking-tight">
            Entiende en qué se está yendo tu gasto cloud
          </h1>

          {/* FOCUS line */}
          <p className="text-[13px] text-[#36AAC1] font-medium mb-5 max-w-[480px]">
            Estandariza tus consumos cloud con FOCUS y obtén una visión clara, comparable y multi-cloud.
          </p>

          {/* Subtitle */}
          <p className="text-[17px] leading-relaxed text-slate-600 mb-8 max-w-[480px]">
            CloudAltio utiliza el estándar <span className="text-cloud-dark font-semibold">FOCUS</span> para unificar, estandarizar y comparar consumos generados desde <span className="text-cloud-dark font-medium">AWS, Azure, GCP y OCI</span> en una sola fuente de verdad.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-6">
            {/* Primary CTA */}
            <a
              href="#demo"
              className={`inline-flex items-center gap-2 text-white text-[15px] font-semibold no-underline px-7 py-3.5 rounded-full tracking-tight transition-all duration-200 ${
                primaryHover
                  ? "bg-[#d81932] shadow-[0_8px_32px_rgba(254,31,61,0.5)] -translate-y-0.5"
                  : "bg-cloud-red shadow-[0_4px_24px_rgba(254,31,61,0.35)] translate-y-0"
              }`}
              onMouseEnter={() => setPrimaryHover(true)}
              onMouseLeave={() => setPrimaryHover(false)}
            >
              Solicitar demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* FOCUS trust signal */}
          <div className="flex items-center gap-4 flex-wrap">
            {["Estándar FOCUS", "Multicloud nativo", "Sin agentes"].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="5.5" stroke="#36AAC1" strokeWidth="1" />
                  <path d="M3.5 6l1.8 1.8L8.5 4" stroke="#36AAC1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[11px] font-medium text-slate-500">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column — Dashboard */}
        <div className="relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative w-full max-w-[580px]">
            
            {/* Soft shadow behind dashboard */}
            <div className="absolute -inset-5 bg-[radial-gradient(ellipse_at_center,rgba(54,170,193,0.08)_0%,transparent_70%)] pointer-events-none rounded-[2rem]" />

            {/* Floating alert card */}
            <FloatingCard className="-top-6 -right-2 sm:-right-8 lg:-right-10 w-full max-w-[210px]">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-cloud-red/10 border border-cloud-red/30 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1L13 12H1L7 1z" stroke="#FE1F3D" strokeWidth="1.3" strokeLinejoin="round" />
                    <path d="M7 5v3M7 10h.01" stroke="#FE1F3D" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-cloud-red mb-0.5">
                    Alerta configurada
                  </div>
                  <div className="text-[10px] text-slate-600 leading-relaxed">
                    Spike en EC2 us-east-1
                    <br />
                    <span className="text-cloud-dark font-semibold">+$3,400 vs. promedio</span>
                  </div>
                </div>
              </div>
            </FloatingCard>

            {/* Floating savings card */}
            <FloatingCard className="-bottom-8 -left-2 sm:-left-8 lg:-left-10 w-full max-w-[200px]">
              <div className="text-[10px] text-slate-400 mb-1.5">Detección de anomalías</div>
              <div className="text-xs font-semibold text-cloud-cyan mb-1">
                🔍 3 desvíos detectados este mes
              </div>
              <div className="text-[10px] text-slate-500 leading-relaxed">
                EC2, RDS y Storage con variaciones relevantes
              </div>
            </FloatingCard>

            {/* Mockup */}
            <div className="relative z-0 w-full">
              <DashboardMockup />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}