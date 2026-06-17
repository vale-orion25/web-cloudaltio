import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Check, ArrowRight, Zap, TrendingUp, Building2, Cloud, Clock, HelpCircle, Target, ShieldCheck } from "lucide-react";
import React, { useState } from "react";
import { motion } from "motion/react";
import { FinalCTA } from "../components/FinalCTA";
import { Plans } from "../components/Plans";
import { useLanguage } from "@/lib/i18n";
import { asset } from "@/lib/asset";

export function PlansPage() {
  const { tr } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = tr.plansPage.faqs;

  const plans = [
    {
      id: "starter",
      name: "Starter",
      icon: <Zap className="w-5 h-5" />,
      tagline: "Para equipos que están empezando a organizar su nube.",
      clouds: "Hasta 2 nubes",
      features: [
        "Dashboard unificado multi-cloud",
        "Alertas de presupuesto básicas",
        "Desglose por servicio y región",
        "Reportes mensuales",
        "Integración con 2 cuentas",
        "Acceso a 3 usuarios",
      ],
      comingSoon: true,
    },
    {
      id: "professional",
      name: "Professional",
      icon: <TrendingUp className="w-5 h-5" />,
      tagline: "Para empresas que necesitan visibilidad transversal y control.",
      clouds: "Hasta 4 nubes",
      features: [
        "Usuarios ilimitados",
        "Acceso basado en roles (RBAC)",
        "Agente IA / Asistente FinOps",
        "Dashboard multi-cloud unificado",
        "Reportes de consumo detallados",
        "Alertas y detección de anomalías",
        "Exportación de datos",
        "Soporte estándar",
      ],
      comingSoon: false,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      icon: <Building2 className="w-5 h-5" />,
      tagline: "Para operaciones complejas con gobierno, control y escala.",
      clouds: "Nubes ilimitadas",
      features: [
        "Cuentas y usuarios ilimitados",
        "Visibilidad multi-cloud unificada",
        "Alertas y detección de anomalías",
        "Proyecciones basadas en historial",
        "Asignación de costos avanzada",
        "Integración SSO / SAML",
        "Reportes ejecutivos y de auditoría",
        "SLA garantizado",
        "Soporte 24/7 y CSM dedicado",
        "Implementación asistida",
      ],
      comingSoon: false,
    },
  ];

  return (
    <div className="font-sans min-h-screen bg-white text-slate-900 selection:bg-[#FE1F3D]/10 selection:text-[#FE1F3D]">
      <Navbar />

      <main>
        {/* PRICING CARDS */}
        <Plans
          eyebrow={tr.plansPage.eyebrow}
          title={tr.plansPage.title}
          subtitle={tr.plansPage.subtitle}
        />

        {/* TECHNICAL BLOCK */}
        <section className="py-24 px-6 lg:px-8" style={{ backgroundImage: `url('${asset("/implementacion-asistida.jpg")}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: tr.plansPage.techItems[0].title,
                  desc: tr.plansPage.techItems[0].desc,
                  icon: <Zap className="w-5 h-5" />,
                },
                {
                  title: tr.plansPage.techItems[1].title,
                  desc: tr.plansPage.techItems[1].desc,
                  icon: <Target className="w-5 h-5" />,
                },
                {
                  title: tr.plansPage.techItems[2].title,
                  desc: tr.plansPage.techItems[2].desc,
                  icon: <ShieldCheck className="w-5 h-5" />,
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xs font-black text-white mb-3 uppercase tracking-widest">{item.title}</h3>
                  <p className="text-[13px] text-white/70 leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="relative py-24 px-6 overflow-hidden" style={{ background: "#f8f5f7" }}>
          {/* Animated gradient blobs */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{ background: "#F9A8C0", filter: "blur(80px)", opacity: 0.85, width: "50%", height: "120%", top: "-10%", left: "-8%" }}
            animate={{ x: [0, 35, -12, 20, 0], y: [0, -20, 30, -8, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{ background: "#C9A8E0", filter: "blur(70px)", opacity: 0.75, width: "42%", height: "100%", top: "10%", left: "28%" }}
            animate={{ x: [0, -25, 18, -8, 0], y: [0, 22, -25, 12, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{ background: "#A8C0DC", filter: "blur(90px)", opacity: 0.80, width: "48%", height: "110%", bottom: "-15%", right: "-8%" }}
            animate={{ x: [0, -20, 28, -12, 0], y: [0, 25, -18, 8, 0] }}
            transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-[#FE1F3D] font-black text-[9px] uppercase tracking-[0.3em] mb-4">{tr.plansPage.faqEyebrow}</div>
              <h2 className="text-xl md:text-2xl font-black text-[#023660]">{tr.plansPage.faqTitle}</h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="text-[11px] font-black text-[#023660] uppercase tracking-widest">{faq.q}</span>
                    <div className={`transition-transform duration-300 ${openFaq === i ? "rotate-45" : "rotate-0"}`}>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center ${openFaq === i ? "bg-[#023660] text-white" : "bg-slate-100 text-slate-400"}`}>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="px-5 pb-5 pt-1 border-t border-slate-50"
                    >
                      <p className="text-[13px] text-slate-500 leading-relaxed font-medium">{faq.a}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCTA
          title={tr.plansPage.ctaTitle}
          subtitle={tr.plansPage.ctaSubtitle}
          showFeatures={false}
          backgroundImage="/plans-cta-bg.jpg"
        />
      </main>

      <Footer />
    </div>
  );
}
