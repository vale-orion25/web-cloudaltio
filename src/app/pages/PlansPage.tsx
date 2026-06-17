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
import { Plans } from "../components/Plans";

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
        {/* PRICING CARDS */}
        <Plans
          eyebrow="Planes y Precios"
          title="Escalabilidad bajo control"
          subtitle="Estandariza tus consumos cloud con FOCUS y elige el plan que mejor se adapte a la escala de tu organización."
        />

        {/* TECHNICAL BLOCK */}
        <section className="py-24 px-6 lg:px-8" style={{ background: "linear-gradient(90deg, #003d80 0%, #7f2f8c 50%, #fb2e50 100%)" }}>
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
          backgroundColor="#023660"
        />
      </main>

      <Footer />
    </div>
  );
}