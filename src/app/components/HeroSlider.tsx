import React, { useCallback, useEffect, useState } from "react";
import { BgNetwork } from "./BgNetwork";
const cloudLogos: Record<string, string> = {
  AWS: "/logo-aws.svg",
  GCP: "/logo-gcp.svg",
  Azure: "/logo-azure.svg",
  OCI: "/logo-oracle.svg",
};
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Eye,
  Layers,
  GitMerge,
  BarChart3,
  Target,
  CheckCircle2,
} from "lucide-react";
import { DashboardMockup } from "./DashboardMockup";

// ─────────────────────────────────────────────
// Slide 1 visual: ilustración de problema
// ─────────────────────────────────────────────
function ProblemVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Card central de "sorpresa" */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <span className="text-white/50 text-xs uppercase tracking-widest font-bold">Resumen de gasto</span>
          <span className="bg-[#FE1F3D]/20 text-[#FE1F3D] text-xs font-black px-3 py-1 rounded-full border border-[#FE1F3D]/30 uppercase tracking-wide">
            ¡Alerta!
          </span>
        </div>
        {/* Barras de gasto */}
        <div className="space-y-3 mb-6">
          {[
            { label: "AWS", pct: 78, color: "#FF9900" },
            { label: "Azure", pct: 54, color: "#0078D4" },
            { label: "GCP", pct: 42, color: "#4285F4" },
            { label: "OCI", pct: 30, color: "#F80000" },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-3">
              <span className="text-white/60 text-xs w-10 font-bold">{c.label}</span>
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${c.pct}%`, backgroundColor: c.color }}
                />
              </div>
              <span className="text-white/50 text-xs w-8 text-right">{c.pct}%</span>
            </div>
          ))}
        </div>
        {/* Mensaje de alerta */}
        <div className="bg-[#FE1F3D]/10 border border-[#FE1F3D]/20 rounded-2xl p-4">
          <p className="text-white text-sm font-semibold">Incremento inesperado del 34%</p>
          <p className="text-white/50 text-xs mt-1">No había contexto para anticiparlo</p>
        </div>
      </div>
      {/* Badges flotantes */}
      <div className="absolute -top-4 -left-4 bg-[#023660] border border-[#36AAC1]/40 rounded-2xl px-4 py-2 shadow-xl backdrop-blur-md">
        <span className="text-[#36AAC1] text-xs font-black uppercase tracking-widest">+ Visibilidad</span>
      </div>
      <div className="absolute -bottom-4 -right-4 bg-[#023660] border border-[#FE1F3D]/40 rounded-2xl px-4 py-2 shadow-xl backdrop-blur-md">
        <span className="text-[#FE1F3D] text-xs font-black uppercase tracking-widest">+ Control</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Slide 2 visual: nubes separadas convergiendo
// ─────────────────────────────────────────────
function MulticloudPainVisual() {
  const clouds = [
    { name: "AWS",   color: "#FF9900" },
    { name: "GCP",   color: "#4285F4" },
    { name: "Azure", color: "#0078D4" },
    { name: "OCI",   color: "#F80000" },
  ];
  return (
    <div className="relative w-full max-w-md mx-auto py-4">
      {/* Grid de nubes */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {clouds.map((c) => (
          <div
            key={c.name}
            className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col items-center gap-2 shadow-sm"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow"
              style={{ backgroundColor: c.color + "18", border: `1.5px solid ${c.color}44` }}
            >
              <img src={cloudLogos[c.name]} alt={c.name} style={{ width: 22, height: 22, objectFit: "contain" }} />
            </div>
            <div className="space-y-1 w-full">
              <div className="h-1.5 bg-slate-200 rounded-full w-full" />
              <div className="h-1.5 bg-slate-200 rounded-full w-3/4" />
            </div>
          </div>
        ))}
      </div>
      {/* Convergencia */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#023660]/40" />
        <GitMerge className="w-6 h-6 text-[#023660]" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#023660]/40" />
      </div>
      {/* Resultado */}
      <div className="bg-[#FE1F3D]/10 border border-[#FE1F3D]/30 rounded-2xl px-5 py-3 text-center">
        <p className="text-[#FE1F3D] font-black text-sm uppercase tracking-widest">Más complejidad, menos control.</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Slide 4 visual: flujo FinOps horizontal
// ─────────────────────────────────────────────
function FinOpsFlowVisual() {
  const steps = [
    { label: "Cost Allocation", icon: <Target className="w-6 h-6" />, primary: true, desc: "Primer paso" },
    { label: "Visibilidad", icon: <Eye className="w-6 h-6" />, primary: false, desc: "Entender el gasto" },
    { label: "Optimización", icon: <TrendingUp className="w-6 h-6" />, primary: false, desc: "Reducir y mejorar" },
  ];
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl">
        <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-6 text-center">Metodología FinOps</p>
        <div className="flex flex-col gap-3">
          {steps.map((step, i) => (
            <React.Fragment key={step.label}>
              <div
                className={`flex items-center gap-4 rounded-2xl p-4 border transition-all ${
                  step.primary
                    ? "bg-[#FE1F3D]/8 border-[#FE1F3D]/30 shadow-sm"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    step.primary ? "bg-[#FE1F3D] text-white shadow-md shadow-[#FE1F3D]/25" : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {step.icon}
                </div>
                <div>
                  <p className={`font-black text-sm ${step.primary ? "text-[#023660]" : "text-slate-500"}`}>
                    {step.label}
                    {step.primary && (
                      <span className="ml-2 text-[10px] bg-[#FE1F3D] text-white px-2 py-0.5 rounded-full uppercase tracking-wide font-black">
                        Clave
                      </span>
                    )}
                  </p>
                  <p className="text-slate-400 text-xs">{step.desc}</p>
                </div>
                <div className="ml-auto">
                  <CheckCircle2 className={`w-5 h-5 ${step.primary ? "text-[#FE1F3D]" : "text-slate-300"}`} />
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center">
                  <div className="w-px h-4 bg-slate-200" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-6 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-center">
          <p className="text-slate-400 text-xs italic">"FinOps no empieza por ahorrar. Empieza por ordenar."</p>
        </div>
      </div>
    </div>
  );
}


// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────
export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev(); }, [emblaApi]);
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext(); }, [emblaApi]);
  const onSelect = useCallback(() => { if (!emblaApi) return; setSelectedIndex(emblaApi.selectedScrollSnap()); }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // ── 4 slides ──────────────────────────────
  const slides = [
    // SLIDE 1 — Problema
    {
      id: 1,
      type: "problem",
      theme: "dark",
      bg: "bg-[#023660]",
      bgGradient: "from-[#023660] via-[#012d52] to-[#011e38]",
      badgeIcon: <BarChart3 className="w-4 h-4 text-[#FE1F3D]" />,
      badge: "El problema",
      title: "El gasto cloud no debería ser una sorpresa.",
      highlight: "sorpresa.",
      subtitle: "Centraliza, entiende y controla tu operación multicloud para tomar decisiones con información real.",
      cta: "Agenda una demo",
      ctaLink: "/demo",
      ctaStyle: "red",
      visual: <ProblemVisual />,
    },
    // SLIDE 2 — Dolor multicloud
    {
      id: 2,
      type: "pain",
      theme: "light",
      bg: "bg-[#f1f5f9]",
      bgGradient: "",
      badgeIcon: <Layers className="w-4 h-4 text-[#36AAC1]" />,
      badge: "El dolor del multicloud",
      title: "El problema del multicloud no es la tecnología. Es la gestión.",
      highlight: "no es la tecnología.",
      subtitle: null,
      painPoints: [
        "Datos en distintos formatos",
        "Equipos en silos",
        "Dificultad para comparar gastos",
        "Falta de contexto para decidir",
      ],
      cta: "Ver cómo lo resolvemos",
      ctaLink: "/plataforma",
      ctaStyle: "teal",
      visual: <MulticloudPainVisual />,
    },
    // SLIDE 3 — Solución
    {
      id: 3,
      type: "solution",
      theme: "light",
      bg: "bg-slate-100",
      bgGradient: "",
      badgeIcon: <Eye className="w-4 h-4 text-[#FE1F3D]" />,
      badge: "La solución CloudAltio",
      title: "Una sola plataforma para entender y controlar tu operación cloud.",
      highlight: "entender y controlar",
      subtitle: null,
      benefits: [
        { icon: <Eye className="w-4 h-4" />, label: "Visibilidad unificada" },
        { icon: <Layers className="w-4 h-4" />, label: "Estandarización FOCUS" },
        { icon: <Target className="w-4 h-4" />, label: "Control proactivo" },
        { icon: <BarChart3 className="w-4 h-4" />, label: "Asignación de costos" },
      ],
      cta: "Solicitar demo",
      ctaLink: "/demo",
      ctaStyle: "red",
      visual: <DashboardMockup />,
    },
    // SLIDE 4 — Método FinOps
    {
      id: 4,
      type: "finops",
      theme: "light",
      bg: "bg-[#f1f5f9]",
      bgGradient: "",
      badgeIcon: <TrendingUp className="w-4 h-4 text-[#36AAC1]" />,
      badge: "Enfoque FinOps",
      title: "No puedes optimizar lo que no entiendes.",
      highlight: "optimizar lo que no entiendes.",
      subtitle: "FinOps no empieza por ahorrar. Empieza por ordenar.",
      cta: "Conocer la metodología",
      ctaLink: "/finops",
      ctaStyle: "teal",
      visual: <FinOpsFlowVisual />,
    },
  ];

  const isDark = (slide: typeof slides[0]) => slide.theme === "dark";

  return (
    <section className="relative w-full h-[500px] lg:h-[580px] overflow-hidden bg-[#023660] mt-[64px]">
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-full">

              {/* Background */}
              <div className={`absolute inset-0 z-0 ${slide.type === "problem" ? "" : slide.bg}`}>

                {/* Slide 1 — foto sin filtro */}
                {slide.type === "problem" && (
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/Header_1.jpg')" }}
                  />
                )}

                {/* Otros slides oscuros — gradiente */}
                {slide.type !== "problem" && isDark(slide) && slide.bgGradient && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} opacity-95`} />
                )}

              </div>

              {/* Content */}
              <div className="relative z-10 h-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

                  {/* LEFT — text (animated on slide change) */}
                  <div
                    key={`text-${slide.id}-${selectedIndex}`}
                    className={`${isDark(slide) ? "text-white" : "text-[#023660]"} max-w-[560px] hero-text-enter`}
                  >

                    {/* Badge */}
                    <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 border ${
                      isDark(slide)
                        ? slide.type === "pain"
                          ? "bg-[#36AAC1]/15 border-[#36AAC1]/30"
                          : slide.type === "finops"
                          ? "bg-[#36AAC1]/15 border-[#36AAC1]/30"
                          : "bg-[#FE1F3D]/15 border-[#FE1F3D]/30"
                        : "bg-[#FE1F3D]/10 border-[#FE1F3D]/30"
                    }`}>
                      {slide.badgeIcon}
                      <span className={`text-xs font-black tracking-widest uppercase ${
                        isDark(slide)
                          ? slide.type === "pain" || slide.type === "finops"
                            ? "text-[#36AAC1]"
                            : "text-[#FE1F3D]"
                          : "text-[#FE1F3D]"
                      }`}>{slide.badge}</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl lg:text-[2.6rem] font-black mb-4 leading-[1.1] tracking-tight">
                      {slide.type === "pain" ? (
                        <>
                          <span className={isDark(slide) ? "text-white" : "text-[#023660]"}>
                            El problema del multicloud{" "}
                          </span>
                          <span className="text-[#FE1F3D]">
                            no es la tecnología.
                          </span>
                          <span className={isDark(slide) ? " text-white" : " text-[#023660]"}> Es la gestión.</span>
                        </>
                      ) : slide.type === "solution" ? (
                        <>
                          <span className="text-[#023660]">Una sola plataforma para </span>
                          <span className="text-[#FE1F3D]">entender y controlar</span>
                          <span className="text-[#023660]"> tu operación cloud.</span>
                        </>
                      ) : (
                        <>
                          <span className={isDark(slide) ? "text-white" : "text-[#023660]"}>
                            {slide.title.split(slide.highlight)[0]}
                          </span>
                          <span className={
                            slide.type === "finops" ? "text-[#36AAC1]" : "text-[#FE1F3D]"
                          }>{slide.highlight}</span>
                        </>
                      )}
                    </h1>

                    {/* Subtitle */}
                    {slide.subtitle && (
                      <p className={`text-base lg:text-lg mb-5 leading-relaxed ${isDark(slide) ? "text-slate-300" : "text-slate-600"}`}>
                        {slide.subtitle}
                      </p>
                    )}

                    {/* Pain points (slide 2) */}
                    {slide.painPoints && (
                      <ul className="space-y-2 mb-6">
                        {slide.painPoints.map((point) => (
                          <li key={point} className={`flex items-center gap-3 text-sm ${isDark(slide) ? "text-slate-300" : "text-slate-600"}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FE1F3D] flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Benefits (slide 3) */}
                    {slide.benefits && (
                      <div className="flex flex-wrap gap-3 mb-6">
                        {slide.benefits.map((b) => (
                          <div key={b.label} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
                            <div className="text-[#023660]">{b.icon}</div>
                            <span className="text-xs font-semibold text-slate-700">{b.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4">
                      <Link
                        to={slide.ctaLink}
                        className={`font-black py-3 px-8 rounded-full transition-all shadow-lg flex items-center gap-2 group hover:scale-105 text-white ${
                          slide.ctaStyle === "red"
                            ? "bg-[#FE1F3D] shadow-[#FE1F3D]/25 hover:shadow-[#FE1F3D]/40"
                            : "bg-[#36AAC1] shadow-[#36AAC1]/25 hover:shadow-[#36AAC1]/40"
                        }`}
                      >
                        {slide.cta}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Slide 1 extra badges */}
                    {slide.type === "problem" && (
                      <div className="flex gap-3 mt-5">
                        <span className="bg-[#36AAC1]/15 border border-[#36AAC1]/30 text-[#36AAC1] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                          + Visibilidad
                        </span>
                        <span className="bg-[#FE1F3D]/15 border border-[#FE1F3D]/30 text-[#FE1F3D] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                          + Control
                        </span>
                      </div>
                    )}
                  </div>

                  {/* RIGHT — visual */}
                  <div className="hidden lg:block">
                    {slide.visual}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nav arrows */}
      <button
        onClick={scrollPrev}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full transition-all hidden md:flex ${
          slides[selectedIndex]?.theme === "light"
            ? "bg-[#023660]/10 hover:bg-[#023660]/20 border border-[#023660]/20 text-[#023660]"
            : "bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white"
        }`}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full transition-all hidden md:flex ${
          slides[selectedIndex]?.theme === "light"
            ? "bg-[#023660]/10 hover:bg-[#023660]/20 border border-[#023660]/20 text-[#023660]"
            : "bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white"
        }`}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`transition-all rounded-full ${
              i === selectedIndex
                ? "w-8 h-3 bg-[#FE1F3D]"
                : slide.theme === "light" && selectedIndex === 2
                ? "w-3 h-3 bg-slate-300 hover:bg-slate-400"
                : "w-3 h-3 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <style>{`
        /* Slow title entrance animation */
        @keyframes heroTextEnter {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-text-enter {
          animation: heroTextEnter 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

      `}</style>
    </section>
  );
}
