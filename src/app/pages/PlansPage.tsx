import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Check, ArrowRight, Zap, TrendingUp, Building2, Cloud, Clock, HelpCircle, Target, ShieldCheck } from "lucide-react";
import React, { useState } from "react";
import { motion } from "motion/react";

const faqs = [
  {
    q: "¿Qué plan me conviene más?",
    a: "El plan Professional es ideal para empresas que buscan estandarizar su consumo multi-cloud con herramientas avanzadas como nuestro asistente FinOps con IA. El plan Enterprise está diseñado para organizaciones con requisitos complejos de cumplimiento, seguridad (SSO) y acompañamiento personalizado.",
  },
  {
    q: "¿Qué incluye el plan Enterprise?",
    a: "Enterprise incluye todo lo de Professional más integración SSO/SAML, Service Manager dedicado, reportes de auditoría avanzados, soporte 24/7 e implementación asistida.",
  },
  {
    q: "¿Cómo se define el precio de Enterprise?",
    a: "Enterprise se cotiza a medida según el volumen de datos, complejidad de la infraestructura y necesidades específicas de soporte. El proceso comienza con una sesión de descubrimiento con nuestro equipo.",
  },
  {
    q: "¿Puedo probar la plataforma antes de contratar?",
    a: "Sí, puedes solicitar una demo personalizada donde exploraremos tus cuentas cloud y te mostraremos cómo FOCUS puede aportar claridad inmediata a tu gasto.",
  },
];

import { FinalCTA } from "../components/FinalCTA";

export function PlansPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 border-b border-slate-100">
          <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#023660 1px, transparent 1px), linear-gradient(90deg, #023660 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#023660] mb-8"
            >
              <span className="text-[10px] font-black text-white tracking-[0.2em] uppercase">Planes y Precios</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#023660] mb-6 leading-tight"
            >
              Escalabilidad bajo control
            </motion.h1>

        <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
          Estandariza tus consumos cloud con FOCUS y elige el plan que mejor se adapte a la escala de tu organización.
        </p>
          </div>
        </section>

        {/* PRICING CARDS */}
        <section className="py-20 px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6 items-stretch">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`group relative flex flex-col p-7 rounded-2xl bg-white transition-all duration-300 border ${
                    plan.comingSoon
                      ? "border-slate-200 opacity-80"
                      : "border-[#023660] shadow-2xl shadow-[#023660]/5 z-10"
                  }`}
                >
                  {!plan.comingSoon && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#FE1F3D] text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg text-white">
                      Disponible
                    </div>
                  )}

                  <div className="mb-8 flex justify-between items-center">
                    <div className={`p-3 rounded-xl ${plan.comingSoon ? "bg-slate-50 text-slate-300" : "bg-slate-50 text-[#023660]"}`}>
                      {React.cloneElement(plan.icon as React.ReactElement, { className: "w-5 h-5" })}
                    </div>
                    {plan.comingSoon && (
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-2 py-1 rounded-full">
                        Roadmap 2026
                      </span>
                    )}
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-black text-[#023660] mb-2 uppercase tracking-tighter">{plan.name}</h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed min-h-[38px]">
                      {plan.tagline}
                    </p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-2xl font-black ${plan.comingSoon ? "text-slate-200" : "text-[#023660]"} uppercase tracking-tight`}>
                        {plan.comingSoon ? "—" : "A medida"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-3 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                      <Cloud className={`w-3.5 h-3.5 ${plan.comingSoon ? "text-slate-200" : "text-[#FE1F3D]"}`} />
                      {plan.clouds}
                    </div>
                  </div>

                  <div className="w-full h-px bg-slate-100 mb-8" />

                  <div className="flex-grow">
                    <ul className="space-y-3.5 mb-10">
                      {plan.features.map((f, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                          <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${plan.comingSoon ? "text-slate-200" : "text-[#FE1F3D]"}`} strokeWidth={4} />
                          <span className={`text-[12px] font-medium leading-tight ${plan.comingSoon ? "text-slate-400" : "text-slate-600"}`}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    {plan.comingSoon ? (
                      <div className="w-full py-3.5 rounded-full text-[9px] font-black text-center bg-slate-100 text-slate-300 border border-slate-200 cursor-not-allowed uppercase tracking-widest">
                        Próximamente
                      </div>
                    ) : (
                      <button className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#FE1F3D] px-6 py-3.5 text-[10px] font-black text-white uppercase tracking-widest hover:bg-[#FE1F3D]/90 transition-all duration-300 shadow-lg shadow-[#FE1F3D]/10">
                        Solicitar demo
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL BLOCK */}
        <section className="py-24 bg-white px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Implementación asistida",
                  desc: "Nuestro equipo técnico acompaña la conexión de tus cuentas cloud para garantizar la integridad de los datos.",
                  icon: <Zap className="w-5 h-5" />,
                },
                {
                  title: "Soporte dedicado",
                  desc: "Acceso directo a especialistas FinOps para maximizar la visibilidad bajo el estándar FOCUS.",
                  icon: <Target className="w-5 h-5" />,
                },
                {
                  title: "Gobernanza avanzada",
                  desc: "Control total del acceso mediante integración SSO/SAML y auditoría completa de acciones.",
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
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#023660] mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xs font-black text-[#023660] mb-3 uppercase tracking-widest">{item.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 bg-slate-50 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-[#FE1F3D] font-black text-[9px] uppercase tracking-[0.3em] mb-4">FAQ</div>
              <h2 className="text-xl md:text-2xl font-black text-[#023660]">Preguntas frecuentes</h2>
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
          title="¿Listo para hablar con nuestro equipo?"
          subtitle="Cuéntanos sobre tu operación cloud y encontramos juntos la mejor forma de empezar."
          showFeatures={false}
        />
      </main>

      <Footer />
    </div>
  );
}