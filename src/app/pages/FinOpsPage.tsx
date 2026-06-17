import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {
  ArrowRight,
  BarChart3,
  Eye,
  Layers,
  Network,
  AlertTriangle,
  Target,
  Zap,
  RefreshCw,
  Search,
  SlidersHorizontal,
  Settings,
  ShieldCheck,
  FileSpreadsheet
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { FinalCTA } from "../components/FinalCTA";
import { Plans } from "../components/Plans";
import { asset } from "@/lib/asset";
import { useLanguage } from "@/lib/i18n";

export function FinOpsPage() {
  const { tr } = useLanguage();

  return (
    <div className="font-sans min-h-screen bg-white text-slate-900 selection:bg-[#FE1F3D]/10 selection:text-[#FE1F3D]">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 border-b border-slate-100 bg-slate-50 overflow-hidden">
          {/* Animated texture with mirror effect */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.img
              src={asset("/bg-texture.svg")}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              animate={{
                scale: [1.3, 1.7, 1.5, 1.9, 1.4, 1.3],
                rotate: [0, 8, -5, 12, -3, 0],
                x: ["0%", "-8%", "6%", "-4%", "3%", "0%"],
                y: ["0%", "4%", "-6%", "3%", "-2%", "0%"],
              }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "center center" }}
            />
            <div className="absolute inset-0" style={{ transform: "scaleX(-1)" }}>
              <motion.img
                src={asset("/bg-texture.svg")}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
                animate={{
                  scale: [1.5, 1.7, 1.4, 1.8, 1.6, 1.5],
                  rotate: [0, -10, 6, -14, 4, 0],
                  x: ["0%", "10%", "-7%", "5%", "-4%", "0%"],
                  y: ["0%", "-5%", "7%", "-4%", "3%", "0%"],
                }}
                transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "center center" }}
              />
            </div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#023660]/5 border border-[#023660]/10 mb-8"
            >
              <span className="text-[10px] font-black text-[#023660] tracking-[0.2em] uppercase">{tr.finops.heroBadge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-[29px] lg:text-[37px] font-extrabold tracking-tight text-[#023660] mb-8 leading-tight"
            >
              {tr.finops.heroTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed mb-10"
            >
              {tr.finops.heroSubtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/demo" className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 rounded-full bg-[#FE1F3D] px-8 py-4 text-xs font-black text-white uppercase tracking-widest hover:bg-[#FE1F3D]/90 transition-all duration-300 shadow-lg shadow-[#FE1F3D]/20">
                {tr.finops.heroCtaDemo}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="px-6 lg:px-8 py-24 relative overflow-hidden">
          <img
            src={asset("/finops-desafio.jpg")}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4">{tr.finops.problemTitle}</h2>
              <div className="h-1 w-12 bg-[#FE1F3D] mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Eye className="w-6 h-6 text-[#FE1F3D]" />, title: tr.finops.problems[0].title, desc: tr.finops.problems[0].desc },
                { icon: <Network className="w-6 h-6 text-[#FE1F3D]" />, title: tr.finops.problems[1].title, desc: tr.finops.problems[1].desc },
                { icon: <AlertTriangle className="w-6 h-6 text-[#FE1F3D]" />, title: tr.finops.problems[2].title, desc: tr.finops.problems[2].desc },
                { icon: <Target className="w-6 h-6 text-[#FE1F3D]" />, title: tr.finops.problems[3].title, desc: tr.finops.problems[3].desc },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="mb-6 p-3 bg-white/10 inline-block rounded-xl border border-white/10">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-black text-white uppercase tracking-wider mb-3">{item.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONCEPT: QUÉ ES FINOPS */}
        <section className="px-6 lg:px-8 py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #fce4ec 0%, #ede7f6 45%, #e8eaf6 75%, #f0f4ff 100%)" }}>
          <div className="absolute inset-0 z-0">
            <motion.img
              src={asset("/bg-gradient.png")}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              animate={{
                scale: [1.6, 2.0, 1.7, 2.1, 1.8, 1.6],
                x: ["0%", "-12%", "10%", "-8%", "6%", "0%"],
                y: ["0%", "8%", "-10%", "6%", "-5%", "0%"],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "center center" }}
            />
          </div>
          <div className="mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-6 text-[#FE1F3D]">
                  <Layers className="w-4 h-4" />
                  <span className="text-[10px] font-black tracking-widest uppercase">{tr.finops.conceptBadge}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-[#023660] leading-tight mb-6">
                  {tr.finops.conceptTitle}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                  {tr.finops.conceptSubtitle}
                </p>
                <div className="space-y-6">
                  {[
                    { phase: tr.finops.phases[0].phase, icon: <Search className="w-5 h-5" />, text: tr.finops.phases[0].text },
                    { phase: tr.finops.phases[1].phase, icon: <SlidersHorizontal className="w-5 h-5" />, text: tr.finops.phases[1].text },
                    { phase: tr.finops.phases[2].phase, icon: <Settings className="w-5 h-5" />, text: tr.finops.phases[2].text },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#FE1F3D]">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-[#023660] mb-1">{item.phase}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-[#023660] p-8 md:p-12 rounded-2xl shadow-2xl overflow-hidden relative border border-white/5 group hover:border-[#FE1F3D]/20 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#FE1F3D]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FE1F3D]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                  <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(45deg, #FE1F3D 0.5px, transparent 0.5px), linear-gradient(-45deg, #FE1F3D 0.5px, transparent 0.5px)", backgroundSize: "30px 30px" }} />

                  <div className="relative z-10">
                    <div className="mb-10">
                      <div className="inline-flex items-center gap-2 mb-2">
                        <RefreshCw className="w-3 h-3 text-[#FE1F3D] animate-spin-slow" />
                        <span className="text-[10px] font-black text-[#FE1F3D] tracking-[0.3em] uppercase">{tr.finops.lifecycleBadge}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-white leading-tight uppercase tracking-tight">{tr.finops.lifecycleTitle}</h3>
                    </div>

                    <div className="space-y-10 relative">
                      <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-[#FE1F3D]/50 via-white/10 to-transparent" />
                      {tr.finops.lifecycleSteps.map((item, i) => (
                        <div key={i} className="relative pl-12">
                          <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#023660] border-2 border-[#FE1F3D]/50 flex items-center justify-center text-xs font-black text-white shadow-[0_0_15px_rgba(254,31,61,0.2)]">
                            {item.num}
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-black text-[#FE1F3D] uppercase tracking-[0.2em]">{item.phase}</h4>
                            <p className="text-sm text-white/70 leading-relaxed max-w-sm">{item.desc}</p>
                            <div className="flex flex-wrap gap-2 pt-1">
                              {item.tags.map((tag, j) => (
                                <span key={j} className="text-[9px] font-bold text-white/40 uppercase tracking-widest px-2 py-0.5 rounded border border-white/5 bg-white/5">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white/40">
                        <ShieldCheck className="w-3 h-3" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{tr.finops.frameworkCertBadge}</span>
                      </div>
                      <div className="text-[10px] font-black text-[#FE1F3D] uppercase tracking-widest">
                        CloudAltio OS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOCUS STANDARD SECTION */}
        <section className="px-6 lg:px-8 py-24 relative overflow-hidden bg-white">
          {/* bg-texture mirror background */}
          <div className="absolute inset-0 z-0">
            <motion.img
              src={asset("/bg-texture.svg")}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              animate={{
                scale: [1.1, 1.3, 1.15, 1.25, 1.1],
                x: ["0%", "8%", "-6%", "4%", "0%"],
                y: ["0%", "-6%", "8%", "-4%", "0%"],
              }}
              transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "center center" }}
            />
            <div className="absolute inset-0" style={{ transform: "scaleX(-1)" }}>
              <motion.img
                src={asset("/bg-texture.svg")}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
                animate={{
                  scale: [1.2, 1.1, 1.3, 1.15, 1.2],
                  x: ["0%", "-10%", "6%", "-4%", "0%"],
                  y: ["0%", "8%", "-6%", "4%", "0%"],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "center center" }}
              />
            </div>
          </div>
          <div className="mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative flex justify-center">
                <div className="rounded-full overflow-hidden shadow-2xl border-4 border-white relative z-10 w-96 h-96 lg:w-[480px] lg:h-[480px]">
                  <img
                    src={asset("/finops-focus.jpg")}
                    alt={tr.finops.focusImgAlt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#023660] mb-6">
                  <span className="text-[10px] font-black text-white tracking-[0.2em] uppercase">{tr.finops.focusStandardBadge}</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#023660] mb-6 leading-tight">
                  {tr.finops.focusTitle}
                </h2>

                <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
                  <p className="font-semibold text-[#023660]">
                    {tr.finops.focusP1}
                  </p>
                  <p>
                    {tr.finops.focusP2}
                  </p>
                  <p>
                    {tr.finops.focusP3}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS VALUE SECTION */}
        <section className="px-6 lg:px-8 py-24 relative overflow-hidden" style={{ background: "linear-gradient(90deg, #003d80 0%, #7f2f8c 50%, #fb2e50 100%)" }}>
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div
              className="absolute w-[700px] h-[700px] rounded-full bg-white/10 blur-[60px]"
              animate={{ x: ["-10%", "45%", "15%", "-5%", "-10%"], y: ["-20%", "15%", "45%", "5%", "-20%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-[600px] h-[600px] rounded-full bg-white/8 blur-[80px]"
              animate={{ x: ["65%", "15%", "75%", "35%", "65%"], y: ["55%", "15%", "-10%", "65%", "55%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-[500px] h-[500px] rounded-full bg-black/20 blur-[50px]"
              animate={{ x: ["25%", "-15%", "55%", "10%", "25%"], y: ["25%", "65%", "5%", "-15%", "25%"] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="mx-auto max-w-7xl relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <div className="text-white/60 font-black text-[10px] uppercase tracking-[0.3em] mb-4">{tr.finops.valueEyebrow}</div>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  {tr.finops.valueTitle}
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <ShieldCheck className="w-5 h-5" />, title: tr.finops.valueItems[0].title, text: tr.finops.valueItems[0].text },
                { icon: <Zap className="w-5 h-5" />, title: tr.finops.valueItems[1].title, text: tr.finops.valueItems[1].text },
                { icon: <FileSpreadsheet className="w-5 h-5" />, title: tr.finops.valueItems[2].title, text: tr.finops.valueItems[2].text },
                { icon: <Network className="w-5 h-5" />, title: tr.finops.valueItems[3].title, text: tr.finops.valueItems[3].text },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-black text-white uppercase tracking-widest mb-4">{item.title}</h4>
                  <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCT SECTION */}
        <section className="px-6 lg:px-8 py-24 relative overflow-hidden border-b border-slate-100" style={{ backgroundImage: `url('${asset("/degradado-matices.png")}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-4">
                <div className="inline-flex items-center gap-2 mb-6 text-[#FE1F3D]">
                  <BarChart3 className="w-4 h-4" />
                  <span className="text-[10px] font-black tracking-widest uppercase">{tr.finops.productEyebrow}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-[#023660] leading-tight mb-6">
                  {tr.finops.productTitle}
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {tr.finops.productSubtitle}
                </p>
                <div className="h-px w-24 bg-[#FE1F3D]/30 mb-8" />
              </div>

              <div className="lg:col-span-8">
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {tr.finops.productItems.map((item, i) => (
                    <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <div className="text-[10px] font-black text-[#023660] uppercase tracking-widest mb-3">{item.label}</div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-video">
                  <img
                    src={asset("/finops-framework.jpg")}
                    alt={tr.finops.productImgAlt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Plans />

        {/* FINAL CTA SECTION */}
        <FinalCTA
          title={tr.finops.ctaTitle}
          subtitle={tr.finops.ctaSubtitle}
          backgroundImage="/finops-cta-bg.jpg"
        />
      </main>

      <Footer />
    </div>
  );
}
