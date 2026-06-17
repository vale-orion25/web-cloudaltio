import React, { useCallback, useEffect, useState } from "react";
import { BgNetwork } from "./BgNetwork";
import { asset } from "@/lib/asset";
import { useLanguage } from "@/lib/i18n";
const cloudLogos: Record<string, string> = {
  AWS: asset("/AWS.png"),
  GCP: asset("/Google-Cloud.png"),
  Azure: asset("/Azure.png"),
  OCI: asset("/Oracle.png"),
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
import { motion } from "motion/react";

function DashboardScreenshot() {
  return (
    <div style={{
      width: "100%",
      background: "#FFFFFF",
      borderRadius: 16,
      border: "1px solid rgba(255,255,255,0.12)",
      overflow: "hidden",
      boxShadow: "0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06)",
      fontFamily: "Inter, sans-serif",
    }}>
      {/* Topbar estilo browser */}
      <div style={{
        background: "#F8FAFC",
        borderBottom: "1px solid #E2E8F0",
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0,
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["#E2E8F0", "#CBD5E1", "#94A3B8"].map((bg, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: bg }} />
          ))}
        </div>
        <div style={{
          fontSize: 10,
          color: "#475569",
          background: "#FFFFFF",
          padding: "3px 12px",
          borderRadius: 5,
          border: "1px solid #E2E8F0",
        }}>
          app.cloudaltio.com/dashboard
        </div>
        <div style={{ width: 50 }} />
      </div>
      {/* Contenedor fijo con auto-scroll */}
      <div style={{ height: 420, overflow: "hidden" }}>
        <motion.img
          src={asset("/cloudaltio-es-dashboard.png")}
          alt="CloudAltio Dashboard"
          style={{ width: "100%", display: "block" }}
          animate={{ y: [0, -520, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Slide 2 visual: nubes separadas convergiendo
// ─────────────────────────────────────────────
function MulticloudPainVisual() {
  const clouds = [
    { name: "AWS",   color: "#FF9900", ay: [0, -8, 0], dur: 3.5 },
    { name: "GCP",   color: "#4285F4", ay: [0, -6, 0], dur: 4.2 },
    { name: "Azure", color: "#0078D4", ay: [0, -10, 0], dur: 3.8 },
    { name: "OCI",   color: "#F80000", ay: [0, -7, 0], dur: 4.6 },
  ];
  return (
    <div className="relative w-full max-w-md mx-auto py-4">
      {/* Grid de nubes */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {clouds.map((c, i) => (
          <motion.div
            key={c.name}
            className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col items-center gap-3 shadow-md"
            animate={{ y: c.ay }}
            transition={{ duration: c.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
              style={{ backgroundColor: c.color + "18", border: `1.5px solid ${c.color}44` }}
            >
              <img src={cloudLogos[c.name]} alt={c.name} style={{ width: 34, height: 34, objectFit: "contain" }} />
            </div>
            <div className="space-y-1.5 w-full">
              <div className="h-1.5 bg-slate-200 rounded-full w-full" />
              <div className="h-1.5 bg-slate-200 rounded-full w-2/3" />
            </div>
          </motion.div>
        ))}
      </div>
      {/* Convergencia */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/40" />
        <GitMerge className="w-6 h-6 text-white/70" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/40" />
      </div>
      {/* Resultado */}
      <div className="bg-[#FE1F3D] rounded-2xl px-5 py-3 text-center shadow-lg shadow-[#FE1F3D]/30">
        <p className="text-white font-black text-sm uppercase tracking-widest">Más complejidad, menos control.</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Slide 3 visual: métricas cloud en glass
// ─────────────────────────────────────────────
function CloudMetricsVisual() {
  const metrics = [
    { label: "Gasto Total", value: "$153K", sub: "+8.2% vs mes ant.", color: "#36AAC1" },
    { label: "Ahorro Detectado", value: "$24K", sub: "este mes", color: "#FE1F3D" },
    { label: "Nubes Activas", value: "4", sub: "AWS · GCP · Azure · OCI", color: "#7f2f8c" },
    { label: "Anomalías", value: "3", sub: "detectadas hoy", color: "#fb2e50" },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex flex-col gap-1"
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 3.2 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
        >
          <div className="text-white/55 text-[10px] font-bold uppercase tracking-widest">{m.label}</div>
          <div className="font-black text-3xl text-white leading-none" style={{ color: m.color }}>{m.value}</div>
          <div className="text-white/45 text-[11px]">{m.sub}</div>
        </motion.div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// Slide 4 visual: flujo FinOps glass
// ─────────────────────────────────────────────
function FinOpsFlowVisual() {
  const steps = [
    { label: "Cost Allocation", icon: <Target className="w-5 h-5" />, desc: "Primer paso — asignar el gasto", active: true },
    { label: "Visibilidad", icon: <Eye className="w-5 h-5" />, desc: "Entender cada peso cloud", active: false },
    { label: "Optimización", icon: <TrendingUp className="w-5 h-5" />, desc: "Reducir, mejorar, escalar", active: false },
  ];
  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-3">
      <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] text-center mb-1">Metodología FinOps</p>
      {steps.map((step, i) => (
        <motion.div
          key={step.label}
          className={`flex items-center gap-4 rounded-2xl p-4 border backdrop-blur-md ${
            step.active
              ? "bg-[#FE1F3D]/20 border-[#FE1F3D]/50 shadow-lg shadow-[#FE1F3D]/10"
              : "bg-white/8 border-white/15"
          }`}
          animate={{ x: [0, step.active ? 4 : 2, 0] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        >
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
            step.active ? "bg-[#FE1F3D] text-white shadow-md shadow-[#FE1F3D]/30" : "bg-white/15 text-white/60"
          }`}>
            {step.icon}
          </div>
          <div className="flex-1">
            <p className="font-black text-sm text-white flex items-center gap-2">
              {step.label}
              {step.active && <span className="text-[9px] bg-[#FE1F3D] px-2 py-0.5 rounded-full uppercase tracking-wide font-black">Clave</span>}
            </p>
            <p className="text-white/45 text-xs mt-0.5">{step.desc}</p>
          </div>
          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${step.active ? "text-[#FE1F3D]" : "text-white/20"}`} />
        </motion.div>
      ))}
      <div className="mt-1 bg-white/8 border border-white/15 rounded-2xl px-4 py-3 text-center backdrop-blur-md">
        <p className="text-white/50 text-xs italic">"FinOps no empieza por ahorrar. Empieza por ordenar."</p>
      </div>
    </div>
  );
}


// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────
export function HeroSlider() {
  const { tr, lang } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000, stopOnInteraction: false }),
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
      badge: tr.hero.s1.badge,
      title: tr.hero.s1.title,
      highlight: tr.hero.s1.highlight,
      subtitle: tr.hero.s1.subtitle,
      cta: tr.hero.s1.cta,
      ctaLink: `/contacto?motivo=${encodeURIComponent("Hola, quiero agendar una demo para ver cómo CloudAltio gestiona mis costos cloud.")}`,
      ctaStyle: "red",
      visual: <DashboardScreenshot />,
    },
    // SLIDE 2 — Dolor multicloud
    {
      id: 2,
      type: "pain",
      theme: "dark",
      bg: "bg-[#f1f5f9]",
      bgGradient: "",
      bgPhoto: "/Header_2-El problema del multicloud.jpg",
      badgeIcon: <Layers className="w-4 h-4 text-[#36AAC1]" />,
      badge: tr.hero.s2.badge,
      title: `${tr.hero.s2.titlePre}${tr.hero.s2.highlight}${tr.hero.s2.titlePost}`,
      highlight: tr.hero.s2.highlight,
      subtitle: null,
      painPoints: tr.hero.s2.painPoints,
      cta: tr.hero.s2.cta,
      ctaLink: "/plataforma",
      ctaStyle: "teal",
      visual: <MulticloudPainVisual />,
    },
    // SLIDE 3 — Solución
    {
      id: 3,
      type: "solution",
      theme: "dark",
      bg: "bg-slate-100",
      bgGradient: "",
      bgPhoto: "/Header_3-Una sola plataforma.jpg",
      badgeIcon: <Eye className="w-4 h-4 text-[#FE1F3D]" />,
      badge: tr.hero.s3.badge,
      title: `${tr.hero.s3.titlePre}${tr.hero.s3.highlight}${tr.hero.s3.titlePost}`,
      highlight: tr.hero.s3.highlight,
      subtitle: null,
      benefits: [
        { icon: <Eye className="w-4 h-4" />, label: tr.hero.s3.benefits[0] },
        { icon: <Layers className="w-4 h-4" />, label: tr.hero.s3.benefits[1] },
        { icon: <Target className="w-4 h-4" />, label: tr.hero.s3.benefits[2] },
        { icon: <BarChart3 className="w-4 h-4" />, label: tr.hero.s3.benefits[3] },
      ],
      cta: tr.hero.s3.cta,
      ctaLink: `/contacto?motivo=${encodeURIComponent("Hola, me gustaría solicitar una demo de la plataforma CloudAltio.")}`,
      ctaStyle: "red",
      visual: <CloudMetricsVisual />,
    },
    // SLIDE 4 — Método FinOps
    {
      id: 4,
      type: "finops",
      theme: "dark",
      bg: "bg-[#f1f5f9]",
      bgGradient: "",
      bgPhoto: "/Header_4-No puedes optimizar.jpg",
      badgeIcon: <TrendingUp className="w-4 h-4 text-[#36AAC1]" />,
      badge: tr.hero.s4.badge,
      title: tr.hero.s4.title,
      highlight: tr.hero.s4.highlight,
      subtitle: tr.hero.s4.subtitle,
      cta: tr.hero.s4.cta,
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
              <div className="absolute inset-0 z-0">

                {/* Slide 1 — foto de fondo */}
                {slide.type === "problem" && (
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${asset("/Header_1.jpg")}')` }}
                  />
                )}

                {/* Slides 2-4 — foto con overlay */}
                {"bgPhoto" in slide && slide.bgPhoto && (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url('${asset(slide.bgPhoto as string)}')` }}
                    />
                    {/* Overlay direccional */}
                    <div className={`absolute inset-0 ${
                      slide.type === "finops"
                        ? "bg-gradient-to-r from-black/60 via-black/30 to-black/10"
                        : isDark(slide)
                        ? "bg-gradient-to-r from-[#011e38]/90 via-[#011e38]/60 to-[#011e38]/20"
                        : "bg-gradient-to-r from-white/85 via-white/55 to-white/10"
                    }`} />
                  </>
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
                          ? "bg-[#36AAC1]/30 border-[#36AAC1]/60"
                          : slide.type === "finops"
                          ? "bg-[#36AAC1]/30 border-[#36AAC1]/60"
                          : "bg-[#FE1F3D]/30 border-[#FE1F3D]/60"
                        : "bg-[#FE1F3D]/15 border-[#FE1F3D]/40"
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
                            {tr.hero.s2.titlePre}
                          </span>
                          <span className="text-[#FE1F3D]">
                            {tr.hero.s2.highlight}
                          </span>
                          <span className={isDark(slide) ? " text-white" : " text-[#023660]"}>{tr.hero.s2.titlePost}</span>
                        </>
                      ) : slide.type === "solution" ? (
                        <>
                          <span className="text-white">{tr.hero.s3.titlePre}</span>
                          <span className="text-[#FE1F3D]">{tr.hero.s3.highlight}</span>
                          <span className="text-white">{tr.hero.s3.titlePost}</span>
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
                          <div key={b.label} className="flex items-center gap-2 px-3 py-1.5 bg-white/15 border border-white/25 rounded-full backdrop-blur-sm">
                            <div className="text-white/80">{b.icon}</div>
                            <span className="text-xs font-semibold text-white">{b.label}</span>
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
                          {tr.hero.badge1}
                        </span>
                        <span className="bg-[#FE1F3D]/15 border border-[#FE1F3D]/30 text-[#FE1F3D] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                          {tr.hero.badge2}
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
