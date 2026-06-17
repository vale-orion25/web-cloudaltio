import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FinalCTA } from "../components/FinalCTA";
import { ArrowRight, Link as LinkIcon, ShieldCheck, XCircle, Zap, HelpCircle, AlertCircle, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { asset } from "@/lib/asset";
const cloudProviders = [
  {
    name: "Amazon Web Services",
    short: "AWS",
    desc: "Conecta tus cuentas AWS para consolidar datos de Cost Explorer, S3 Cost & Usage Reports y APIs de billing en una vista unificada.",
    details: ["Cost Explorer API", "S3 CUR (Cost & Usage Reports)", "Permisos IAM de solo lectura", "Soporte multi-cuenta y Organizations"],
    logo: asset("/AWS.png"),
    accent: "#FF9900",
    accentBg: "rgba(255,153,0,0.07)",
  },
  {
    name: "Microsoft Azure",
    short: "Azure",
    desc: "Integra datos de consumo y billing desde Azure Cost Management para analizar tu gasto junto al resto de tu operación cloud.",
    details: ["Azure Cost Management API", "Consumption API", "Service Principal de solo lectura", "Soporte multi-subscripción"],
    logo: asset("/Azure.png"),
    accent: "#0078D4",
    accentBg: "rgba(0,120,212,0.07)",
  },
  {
    name: "Google Cloud",
    short: "GCP",
    desc: "Centraliza costos y uso desde Google Cloud Billing para compararlos junto al resto de tu operación multi-cloud.",
    details: ["Cloud Billing API", "BigQuery Billing Export", "Service Account de solo lectura", "Soporte multi-proyecto"],
    logo: asset("/Google-Cloud.png"),
    accent: "#4285F4",
    accentBg: "rgba(66,133,244,0.07)",
  },
  {
    name: "Oracle Cloud",
    short: "OCI",
    desc: "Agrega visibilidad sobre consumo y costos desde Oracle Cloud Infrastructure dentro de una sola plataforma unificada.",
    details: ["OCI Usage API", "Cost Reports", "API Key de solo lectura", "Soporte multi-tenancy"],
    logo: asset("/Oracle.png"),
    accent: "#F80000",
    accentBg: "rgba(248,0,0,0.06)",
  },
];

export function IntegrationsPage() {
  return (
    <div className="font-sans min-h-screen bg-white">
      <Navbar />

      {/* 1. Compact Intro */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 px-6 lg:px-8 text-center border-b border-slate-200/50 overflow-hidden">
        {/* Background */}
        <img src={asset("/degradado-matices.png")} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E7F4F6] px-3 py-1 mb-6 border border-[#36AAC1]/20">
            <LinkIcon className="w-3.5 h-3.5 text-[#36AAC1]" />
            <span className="text-xs font-semibold text-[#023660] tracking-wide uppercase">Integraciones Nativas</span>
          </div>
          
          <h1 className="text-2xl md:text-[29px] lg:text-[37px] font-extrabold tracking-tight text-[#023660] mb-6 leading-tight">
            Conecta tus clouds <br className="hidden sm:block" /> sin complicarte
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-slate-600 mb-8 leading-relaxed">
            Integra AWS, Azure, Google Cloud y Oracle Cloud con acceso de solo lectura, sin agentes y sin modificar tu infraestructura. Plug & play desde el primer día.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#FE1F3D] px-6 py-3 text-sm font-semibold text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto">
              Solicitar demo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Cloud provider cards with logos */}
      <section className="py-16 lg:py-24 bg-[#f8fafb] relative overflow-hidden">
        <motion.img
          src={asset("/bg-textura-fondo.svg")}
          alt="" aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ inset: "-8%", width: "116%", height: "116%", objectFit: "cover", objectPosition: "center" }}
          animate={{ x: [0, -50, 30, -20, 0], y: [0, -30, 50, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-[#023660] mb-4">
              Proveedores soportados
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Conecta uno o todos tus proveedores cloud. Cada integración usa las APIs nativas del proveedor con permisos mínimos de solo lectura.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {cloudProviders.map((cloud) => (
              <div
                key={cloud.short}
                className="group bg-white p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-sm hover:border-[#36AAC1]/40 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center border"
                    style={{ background: "#ffffff", borderColor: "#e2e8f0" }}
                  >
                    <img src={cloud.logo} alt={cloud.short} style={{ width: 36, height: 36, objectFit: "contain" }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{cloud.short}</div>
                    <h3 className="text-xl font-bold text-[#023660]">{cloud.name}</h3>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">{cloud.desc}</p>
                <div className="flex flex-col gap-2">
                  {cloud.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#36AAC1] shrink-0" />
                      <span className="text-sm text-slate-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* API cost disclaimer */}
          <div className="mt-8 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-5 max-w-3xl mx-auto">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Nota sobre costos de API:</strong> El acceso a las APIs de billing y extracción de datos de algunos proveedores cloud puede generar cargos marginales en tu cuenta de cloud. Estos costos son generalmente bajos, pero te recomendamos revisarlo con tu proveedor antes de conectar.
            </p>
          </div>
        </div>
      </section>

      {/* 3. What you need / What you don't need */}
      <section className="py-24 relative overflow-hidden">
        <img src={asset("/Header_1.jpg")} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Qué necesitas (y qué no) para empezar
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Modelo plug & play: sin agentes, sin cambios en infraestructura, sin proyectos largos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* What you need */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/25">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#36AAC1]" />
                </div>
                <h3 className="text-xl font-bold text-white">Lo que sí necesitas</h3>
              </div>
              <div className="space-y-5">
                {[
                  { label: "Permisos de solo lectura en tu cuenta de cloud", note: "IAM Role en AWS, Service Principal en Azure, Service Account en GCP" },
                  { label: "Acceso a datos de billing o costos habilitado", note: "Cost Explorer, Azure Cost Management, Cloud Billing, OCI Cost Reports" },
                  { label: "Configuración inicial por proveedor", note: "Proceso guiado y asistido por proveedor" },
                  { label: "Validación de conexión", note: "CloudAltio verifica el acceso antes de procesar datos" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center border border-[#36AAC1]/40 flex-shrink-0 text-[#36AAC1] mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-white font-semibold text-sm block mb-0.5">{item.label}</span>
                      <span className="text-white/50 text-xs">{item.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What you don't need */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/25">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-[#FE1F3D]" />
                </div>
                <h3 className="text-xl font-bold text-white">Lo que NO necesitas</h3>
              </div>
              <div className="space-y-5">
                {[
                  { label: "Instalar agentes o software en tus servidores", note: "100% agentless, sin tocar tu infraestructura" },
                  { label: "Modificar workloads o arquitectura", note: "Tu ambiente productivo no se toca" },
                  { label: "Intervenir infraestructura productiva", note: "Solo lectura, cero escritura, cero cambios" },
                  { label: "Desarrollar integraciones custom para comenzar", note: "Las integraciones nativas están listas desde el primer día" },
                  { label: "Proyectos largos de implementación", note: "Onboarding ágil y directo" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 text-[#FE1F3D] mt-0.5">
                      <XCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-white font-semibold text-sm block mb-0.5">{item.label}</span>
                      <span className="text-white/50 text-xs">{item.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How integration works */}
      <section className="py-24 lg:py-32 bg-slate-50 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#023660] mb-6">
              El proceso de integración
            </h2>
            <p className="text-lg text-slate-600">Tres pasos para empezar a ver tus datos cloud unificados.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Step connectors */}
            {[0, 1].map((connIdx) => (
              <div
                key={connIdx}
                className="hidden md:flex absolute items-center gap-0.5 z-0"
                style={{ top: "2.3rem", left: connIdx === 0 ? "28%" : "61.5%", transform: "translateX(-50%)" }}
              >
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.1, 1, 0.1], x: [0, 3, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: connIdx * 0.4 + i * 0.2, ease: "easeInOut" }}
                  >
                    <ChevronRight className="w-6 h-6" style={{ color: i < 2 ? "#7f2f8c" : "#023660" }} />
                  </motion.div>
                ))}
              </div>
            ))}

            {[
              {
                title: "Configura permisos",
                desc: "Habilita acceso de solo lectura según el proveedor cloud para que CloudAltio pueda consultar costos y uso. Sin escribir ni modificar nada.",
                bg: "linear-gradient(135deg, #fb2e50 0%, #7f2f8c 50%, #003d80 100%)",
              },
              {
                title: "Conecta tus cuentas",
                desc: "Agrega las cuentas, proyectos o suscripciones que quieres visualizar. Puedes empezar con uno y agregar más después.",
                bg: "#023660",
              },
              {
                title: "Visualiza y controla",
                desc: "CloudAltio normaliza los datos al estándar FOCUS y los presenta en un dashboard unificado. Datos listos tras la sincronización inicial.",
                bg: "linear-gradient(135deg, #fb2e50 0%, #7f2f8c 50%, #003d80 100%)",
              }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-lg transition-transform group-hover:-translate-y-1"
                  style={{ background: step.bg }}
                >
                  <span className="text-white font-black text-3xl leading-none">{i + 1}</span>
                </div>
                <div className="text-[#36AAC1] font-bold mb-2 text-sm uppercase tracking-wide">Paso {i + 1}</div>
                <h3 className="text-xl font-bold text-[#023660] mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Quick time / friction */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(90deg, #003d80 0%, #7f2f8c 50%, #fb2e50 100%)" }}>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 text-white mb-8 border border-white/20">
            <Zap className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Conexión ágil y transparente
          </h2>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Cuando los permisos están listos, la conexión inicial es directa. Sin proyectos largos, sin consultoras, sin semanas de configuración. Tus equipos de tecnología, finanzas y operaciones pueden empezar a ver datos de forma consistente.
          </p>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E7F4F6] px-3 py-1 mb-6 border border-[#36AAC1]/20">
              <HelpCircle className="w-4 h-4 text-[#36AAC1]" />
              <span className="text-xs font-semibold text-[#023660] uppercase tracking-wide">Preguntas Frecuentes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#023660]">
              Respuestas rápidas sobre integración
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "¿CloudAltio modifica recursos en mi nube?",
                a: "No. CloudAltio opera estrictamente con permisos de solo lectura. No tiene capacidad ni permisos para crear, modificar o eliminar recursos en tu infraestructura."
              },
              {
                q: "¿Qué permisos necesita?",
                a: "Solo requiere acceso a las APIs de facturación y administración de costos de cada proveedor, además de lectura básica de metadatos para organizar la información. No necesita acceso a datos de negocio ni workloads."
              },
              {
                q: "¿Cuánto tarda la implementación?",
                a: "Si cuentas con los accesos requeridos listos, la conexión inicial es un proceso asistido y directo. La visualización completa se habilita tras el procesamiento del histórico de datos."
              },
              {
                q: "¿Puedo conectar más de un proveedor?",
                a: "Sí. La plataforma está diseñada para la visibilidad multi-cloud, permitiendo unificar AWS, Azure, Google Cloud y Oracle Cloud. Puedes empezar con uno e ir agregando el resto."
              },
              {
                q: "¿Hay costos de API en mi cuenta de cloud?",
                a: "El acceso a las APIs de billing puede generar cargos marginales dependiendo del proveedor y el volumen de datos. Generalmente son bajos, pero te recomendamos revisarlo con tu proveedor antes de conectar."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-[#023660] mb-2">{faq.q}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <FinalCTA
        title="Empieza con una implementación simple"
        subtitle="Conecta tu operación cloud con una configuración mínima y empieza a visualizar tu gasto con más claridad."
        showFeatures={false}
        backgroundImage="/cta-bg.jpg"
      />

      <Footer />
    </div>
  );
}