import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ArrowRight, CheckCircle2, LayoutDashboard, LineChart, PieChart, ShieldAlert, Zap, Layers, BarChart3, Users, Cloud, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { asset } from "@/lib/asset";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n";

// Import screenshots
import dashImg from "../../imports/screencapture-dev-cloudaltio-es-dashboard-2026-04-20-13_56_19.png";
import { FinalCTA } from "../components/FinalCTA";

export function PlatformPage() {
  const { tr } = useLanguage();

  return (
    <div className="font-sans min-h-screen bg-white">
      <Navbar />

      {/* 1. Compact Intro */}
      <section
        className="pt-32 pb-12 lg:pt-40 lg:pb-16 px-6 lg:px-8 text-center border-b border-white/10 relative overflow-hidden"
        style={{ backgroundImage: `url('${asset("/platform-header-bg.jpg")}')`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-3 py-1 mb-6 border border-white/30">
            <span className="flex h-2 w-2 rounded-full bg-[#36AAC1]"></span>
            <span className="text-xs font-semibold text-white tracking-wide uppercase">{tr.platform.badge}</span>
          </div>

          <h1 className="text-2xl md:text-[29px] lg:text-[37px] font-extrabold tracking-tight text-white mb-6 leading-tight">
            {tr.platform.title}
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-white/80 mb-8 leading-relaxed">
            {tr.platform.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#FE1F3D] px-6 py-3 text-sm font-semibold text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto">
              {tr.platform.ctaDemo}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. CloudAltio en acción */}
      <section className="relative py-16 lg:py-20 bg-slate-50 border-b border-slate-200/50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
           {/* Wide Dashboard Mockup with Floating Callouts */}
           <div className="relative mx-auto w-full max-w-6xl flex flex-col items-center">

              {/* Main Central Mockup */}
              <div className="w-full lg:w-[85%] relative z-10 rounded-2xl lg:rounded-[32px] overflow-hidden border border-slate-200/50 shadow-2xl shadow-[#023660]/10 bg-white p-2">
                 <div className="rounded-xl lg:rounded-[24px] overflow-hidden border border-slate-200/60 bg-slate-50 relative w-full aspect-[16/9] md:aspect-[16/10]">
                    <ImageWithFallback
                      src={dashImg}
                      alt="CloudAltio Dashboard"
                      className="absolute top-0 left-0 w-[105%] h-[115%] max-w-[105%] -left-[2.5%] -top-[8%] object-cover object-left-top"
                    />
                 </div>
              </div>

              {/* Floating Callouts (Desktop) */}
              <div className="hidden lg:block absolute inset-0 z-20 pointer-events-none">
                 {/* Callout 1: Top Left */}
                 <div className="absolute top-[10%] left-0 w-72 bg-white/95 backdrop-blur-xl p-5 rounded-2xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] pointer-events-auto transform -translate-x-6 hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-sm font-extrabold text-[#023660] mb-2 flex items-center gap-2">
                       <div className="w-7 h-7 rounded-lg bg-[#E7F4F6] flex items-center justify-center flex-shrink-0"><Cloud className="w-3.5 h-3.5 text-[#36AAC1]" /></div>
                       {tr.platform.callouts[0].title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed pl-9">{tr.platform.callouts[0].desc}</p>
                 </div>

                 {/* Callout 2: Top Right */}
                 <div className="absolute top-[25%] right-0 w-72 bg-white/95 backdrop-blur-xl p-5 rounded-2xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] pointer-events-auto transform translate-x-6 hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-sm font-extrabold text-[#023660] mb-2 flex items-center gap-2">
                       <div className="w-7 h-7 rounded-lg bg-[#FE1F3D]/10 flex items-center justify-center flex-shrink-0"><ShieldAlert className="w-3.5 h-3.5 text-[#FE1F3D]" /></div>
                       {tr.platform.callouts[1].title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed pl-9">{tr.platform.callouts[1].desc}</p>
                 </div>

                 {/* Callout 3: Bottom Left */}
                 <div className="absolute bottom-[20%] left-4 w-72 bg-[#023660]/95 backdrop-blur-xl p-5 rounded-2xl border border-[#36AAC1]/20 shadow-[0_8px_40px_rgb(2,54,96,0.25)] pointer-events-auto transform -translate-x-10 hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-sm font-extrabold text-white mb-2 flex items-center gap-2">
                       <div className="w-7 h-7 rounded-lg bg-[#36AAC1]/20 flex items-center justify-center flex-shrink-0"><LineChart className="w-3.5 h-3.5 text-[#36AAC1]" /></div>
                       {tr.platform.callouts[2].title}
                    </h4>
                    <p className="text-xs text-[#E7F4F6]/80 leading-relaxed pl-9">{tr.platform.callouts[2].desc}</p>
                 </div>

                 {/* Callout 4: Bottom Right */}
                 <div className="absolute bottom-[10%] right-2 w-72 bg-white/95 backdrop-blur-xl p-5 rounded-2xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] pointer-events-auto transform translate-x-10 hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-sm font-extrabold text-[#023660] mb-2 flex items-center gap-2">
                       <div className="w-7 h-7 rounded-lg bg-[#E7F4F6] flex items-center justify-center flex-shrink-0"><LayoutDashboard className="w-3.5 h-3.5 text-[#36AAC1]" /></div>
                       {tr.platform.callouts[3].title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed pl-9">{tr.platform.callouts[3].desc}</p>
                 </div>
              </div>

              {/* Callouts (Mobile/Tablet Grid) */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8 w-full lg:hidden z-20 relative">
                 <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <h4 className="text-sm font-extrabold text-[#023660] mb-2 flex items-center gap-2">
                       <div className="w-7 h-7 rounded-lg bg-[#E7F4F6] flex items-center justify-center flex-shrink-0"><Cloud className="w-3.5 h-3.5 text-[#36AAC1]" /></div>
                       {tr.platform.calloutsShort[0].title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed pl-9">{tr.platform.calloutsShort[0].desc}</p>
                 </div>
                 <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <h4 className="text-sm font-extrabold text-[#023660] mb-2 flex items-center gap-2">
                       <div className="w-7 h-7 rounded-lg bg-[#FE1F3D]/10 flex items-center justify-center flex-shrink-0"><ShieldAlert className="w-3.5 h-3.5 text-[#FE1F3D]" /></div>
                       {tr.platform.calloutsShort[1].title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed pl-9">{tr.platform.calloutsShort[1].desc}</p>
                 </div>
                 <div className="bg-[#023660] p-5 rounded-2xl border border-[#36AAC1]/20 shadow-md">
                    <h4 className="text-sm font-extrabold text-white mb-2 flex items-center gap-2">
                       <div className="w-7 h-7 rounded-lg bg-[#36AAC1]/20 flex items-center justify-center flex-shrink-0"><LineChart className="w-3.5 h-3.5 text-[#36AAC1]" /></div>
                       {tr.platform.calloutsShort[2].title}
                    </h4>
                    <p className="text-xs text-[#E7F4F6]/80 leading-relaxed pl-9">{tr.platform.calloutsShort[2].desc}</p>
                 </div>
                 <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <h4 className="text-sm font-extrabold text-[#023660] mb-2 flex items-center gap-2">
                       <div className="w-7 h-7 rounded-lg bg-[#E7F4F6] flex items-center justify-center flex-shrink-0"><LayoutDashboard className="w-3.5 h-3.5 text-[#36AAC1]" /></div>
                       {tr.platform.calloutsShort[3].title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed pl-9">{tr.platform.calloutsShort[3].desc}</p>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* 2. What you can understand from day one */}
      <section className="py-24 relative" style={{ background: "linear-gradient(90deg, #003d80 0%, #7f2f8c 50%, #fb2e50 100%)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 mb-6 border border-white/20">
                <PieChart className="w-4 h-4 text-white" />
                <span className="text-xs font-semibold text-white uppercase tracking-wide">{tr.platform.immediateResultsBadge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                {tr.platform.immediateResultsTitle}
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                {tr.platform.immediateResultsSubtitle}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { text: tr.platform.immediateItems[0], icon: <Layers className="w-5 h-5 text-white" /> },
                  { text: tr.platform.immediateItems[1], icon: <Cloud className="w-5 h-5 text-white" /> },
                  { text: tr.platform.immediateItems[2], icon: <Users className="w-5 h-5 text-white" /> },
                  { text: tr.platform.immediateItems[3], icon: <LineChart className="w-5 h-5 text-white" /> },
                  { text: tr.platform.immediateItems[4], icon: <ShieldAlert className="w-5 h-5 text-white" /> },
                  { text: tr.platform.immediateItems[5], icon: <BarChart3 className="w-5 h-5 text-white" /> },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="mt-1 p-2 bg-white/10 rounded-lg shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-white/80 font-medium text-sm leading-snug pt-1">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
               <div className="absolute inset-0 bg-white/5 rounded-[32px] transform rotate-3 scale-105 -z-10"></div>
               <div className="rounded-[24px] overflow-hidden border border-white/20 shadow-xl shadow-black/30 aspect-square relative bg-white/10">
                  <img
                    src={asset("/lo-que-podras-entender.jpg")}
                    alt={tr.platform.imgAlt}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#023660]/40 to-transparent pointer-events-none"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Capabilities */}
      <section className="py-32 border-y border-slate-200/50 relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src={asset("/bg-texture.svg")}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            animate={{
              scale: [1.3, 1.7, 1.5, 1.9, 1.4, 1.3],
              rotate: [0, 10, -6, 14, -4, 0],
              x: ["0%", "-10%", "8%", "-6%", "5%", "0%"],
              y: ["0%", "5%", "-8%", "4%", "-3%", "0%"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "center center" }}
          />
        </div>
        <div className="absolute inset-0 z-0 bg-white/30" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#023660] mb-6">
              {tr.platform.capabilitiesTitle}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {tr.platform.capabilitiesSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Capability 1: Multi-cloud (Large Top Block) */}
            <div className="md:col-span-12 bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-sm shadow-slate-200/50 flex flex-col lg:flex-row gap-12 items-center">
               <div className="lg:w-1/2">
                 <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#023660] text-white mb-6 shadow-lg shadow-[#023660]/20">
                   <Cloud className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold text-[#023660] mb-4">{tr.platform.multicloudTitle}</h3>
                 <p className="text-slate-600 text-lg leading-relaxed">
                   {tr.platform.multicloudDesc}
                 </p>
               </div>
               <div className="lg:w-1/2 w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-100">
                  <img
                    src={asset("/Multi-nube.jpg")}
                    alt={tr.platform.multicloudImgAlt}
                    className="w-full h-full object-cover object-center"
                  />
               </div>
            </div>

            {/* Sub-capabilities Grid */}
            {[
              {
                title: tr.platform.subCapabilities[0].title,
                icon: <ShieldAlert className="w-6 h-6" />,
                desc: tr.platform.subCapabilities[0].desc,
              },
              {
                title: tr.platform.subCapabilities[1].title,
                icon: <LineChart className="w-6 h-6" />,
                desc: tr.platform.subCapabilities[1].desc,
              },
              {
                title: tr.platform.subCapabilities[2].title,
                icon: <LayoutDashboard className="w-6 h-6" />,
                desc: tr.platform.subCapabilities[2].desc,
              },
              {
                title: tr.platform.subCapabilities[3].title,
                icon: <Zap className="w-6 h-6" />,
                desc: tr.platform.subCapabilities[3].desc,
              },
            ].map((cap, idx) => (
              <div key={idx} className="md:col-span-6 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                 <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#E7F4F6] text-[#36AAC1] mb-6">
                   {cap.icon}
                 </div>
                 <h3 className="text-xl font-bold text-[#023660] mb-3">{cap.title}</h3>
                 <p className="text-slate-600 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How it works */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <img
          src={asset("/bg-gradient.png")}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-[#023660] sm:text-4xl mb-6">
              {tr.platform.howItWorksTitle}
            </h2>
            <p className="text-lg text-slate-600">
              {tr.platform.howItWorksSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 z-0 overflow-visible rounded-full"
              style={{ background: "linear-gradient(90deg, #fb2e50 0%, #7f2f8c 50%, #003d80 100%)", opacity: 0.35 }}>
              {/* Traveling dot */}
              <motion.div
                style={{
                  position: "absolute",
                  top: "50%",
                  translateY: "-50%",
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "white",
                  boxShadow: "0 0 10px 3px rgba(251,46,80,0.7), 0 0 20px 6px rgba(127,47,140,0.4)",
                }}
                animate={{ left: ["-1%", "101%"] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
              />
            </div>

            {tr.platform.steps.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-8 shadow-xl transition-all duration-300 group-hover:-translate-y-1"
                  style={{ background: "linear-gradient(135deg, #fb2e50 0%, #7f2f8c 50%, #003d80 100%)" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#023660"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #fb2e50 0%, #7f2f8c 50%, #003d80 100%)"}
                >
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-[#023660] mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Built for cross-functional teams */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(90deg, #003d80 0%, #7f2f8c 50%, #fb2e50 100%)" }}>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

          <div className="mb-16 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                {tr.platform.teamsTitle}
              </h2>
              <p className="text-[#E7F4F6]/80 text-lg">
                {tr.platform.teamsSubtitle}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tr.platform.teams.map((team, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{team.role}</h3>
                </div>
                <p className="text-[#E7F4F6]/70 leading-relaxed">
                  {team.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl overflow-hidden h-64 md:h-96 border border-white/10 relative shadow-2xl">
             <img
                src={asset("/equipos-bg.jpg")}
                alt={tr.platform.teamsImgAlt}
                className="w-full h-full object-cover object-center"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#023660]/80 via-transparent to-transparent pointer-events-none"></div>
          </div>

        </div>
      </section>

      {/* 6. Estandarización Multi-cloud (FOCUS) - Rediseño Horizontal */}
      <section id="estandarizacion" className="py-24 lg:py-32 px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src={asset("/bg-texture.svg")}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            animate={{
              scale: [1.4, 1.8, 1.5, 2.0, 1.6, 1.4],
              rotate: [0, -12, 8, -16, 6, 0],
              x: ["0%", "10%", "-8%", "6%", "-5%", "0%"],
              y: ["0%", "-6%", "9%", "-5%", "4%", "0%"],
            }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "center center" }}
          />
        </div>
        <div className="absolute inset-0 z-0 bg-white/10" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-4 text-[#36AAC1]">
              <Layers className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-widest">{tr.platform.focusBadge}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#023660] mb-6">{tr.platform.focusTitle}</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {tr.platform.focusSubtitle}
            </p>
          </div>

          {/* Horizontal Flow Visual */}
          <div className="relative max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">

              {/* Left: Input Sources */}
              <div className="w-full lg:w-1/4 space-y-4">
                <div className="text-center lg:text-left mb-6">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tr.platform.fragmentedLabel}</span>
                </div>
                {[
                  { name: "AWS", format: "Billing" },
                  { name: "Azure", format: "Billing" },
                  { name: "Google Cloud", format: "Billing" },
                  { name: "Oracle Cloud", format: "Billing" }
                ].map((cloud) => (
                  <div key={cloud.name} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group hover:border-[#36AAC1]/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-[#36AAC1]"></div>
                      <span className="text-sm font-bold text-[#023660]">{cloud.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">{cloud.format}</span>
                  </div>
                ))}
              </div>

              {/* Connector Arrow 1 */}
              <div className="hidden lg:flex flex-col items-center justify-center w-12 text-slate-200">
                <ArrowRight className="w-8 h-8" />
              </div>
              <div className="lg:hidden py-4 text-slate-200">
                <ArrowRight className="w-8 h-8 rotate-90" />
              </div>

              {/* Center: The Standardizer */}
              <div className="w-full lg:w-1/3 relative">
                <div className="bg-white rounded-[40px] p-10 border-2 border-[#36AAC1]/20 shadow-2xl shadow-[#36AAC1]/10 text-center relative z-10 overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#36AAC1] to-[#023660]"></div>
                  <div className="w-20 h-20 rounded-3xl bg-[#E7F4F6] text-[#36AAC1] flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <Zap className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-[#023660] mb-2 uppercase tracking-tight">CloudAltio</h3>
                  <div className="inline-flex items-center px-3 py-1 bg-[#023660] text-white rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">
                    {tr.platform.focusMotorLabel}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[200px] mx-auto">
                    {tr.platform.focusMotorDesc}
                  </p>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#36AAC1]/5 blur-[100px] -z-0"></div>
              </div>

              {/* Connector Arrow 2 */}
              <div className="hidden lg:flex flex-col items-center justify-center w-12 text-slate-200">
                <ArrowRight className="w-8 h-8" />
              </div>
              <div className="lg:hidden py-4 text-slate-200">
                <ArrowRight className="w-8 h-8 rotate-90" />
              </div>

              {/* Right: Unified Outcome */}
              <div className="w-full lg:w-1/4">
                <div className="text-center lg:text-right mb-6">
                  <span className="text-[10px] font-bold text-[#36AAC1] uppercase tracking-widest">{tr.platform.unifiedLabel}</span>
                </div>
                <div className="bg-[#023660] p-6 rounded-[32px] text-white shadow-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#36AAC1]/20 to-transparent"></div>
                  <div className="relative z-10">
                    <LayoutDashboard className="w-10 h-10 text-[#36AAC1] mb-6" />
                    <h4 className="text-xl font-bold mb-4">{tr.platform.truthSource}</h4>
                    <div className="space-y-3">
                      {tr.platform.focusTeams.map((team) => (
                        <div key={team} className="flex items-center gap-2 text-xs font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                          <CheckCircle2 className="w-4 h-4 text-[#36AAC1]" />
                          {team}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-12 lg:gap-24 opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#023660]">100%</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">{tr.platform.stat1Label}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#023660]">0</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">{tr.platform.stat2Label}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#023660]">Multi</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">{tr.platform.stat3Label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <FinalCTA
        title={tr.platform.ctaTitle}
        subtitle={tr.platform.ctaSubtitle}
        backgroundImage="/cta-bg.jpg"
      />

      <Footer />
    </div>
  );
}
