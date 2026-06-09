import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ArrowRight, Link as LinkIcon, ShieldCheck, Settings, LineChart, XCircle, Zap, HelpCircle, AlertCircle } from "lucide-react";
const cloudProviders = [
  {
    name: "Amazon Web Services",
    short: "AWS",
    desc: "Conecta tus cuentas AWS para consolidar datos de Cost Explorer, S3 Cost & Usage Reports y APIs de billing en una vista unificada.",
    details: ["Cost Explorer API", "S3 CUR (Cost & Usage Reports)", "Permisos IAM de solo lectura", "Soporte multi-cuenta y Organizations"],
    logo: "/logo-aws.svg",
    accent: "#FF9900",
    accentBg: "rgba(255,153,0,0.07)",
  },
  {
    name: "Microsoft Azure",
    short: "Azure",
    desc: "Integra datos de consumo y billing desde Azure Cost Management para analizar tu gasto junto al resto de tu operación cloud.",
    details: ["Azure Cost Management API", "Consumption API", "Service Principal de solo lectura", "Soporte multi-subscripción"],
    logo: "/logo-azure.svg",
    accent: "#0078D4",
    accentBg: "rgba(0,120,212,0.07)",
  },
  {
    name: "Google Cloud",
    short: "GCP",
    desc: "Centraliza costos y uso desde Google Cloud Billing para compararlos junto al resto de tu operación multi-cloud.",
    details: ["Cloud Billing API", "BigQuery Billing Export", "Service Account de solo lectura", "Soporte multi-proyecto"],
    logo: "/logo-gcp.svg",
    accent: "#4285F4",
    accentBg: "rgba(66,133,244,0.07)",
  },
  {
    name: "Oracle Cloud",
    short: "OCI",
    desc: "Agrega visibilidad sobre consumo y costos desde Oracle Cloud Infrastructure dentro de una sola plataforma unificada.",
    details: ["OCI Usage API", "Cost Reports", "API Key de solo lectura", "Soporte multi-tenancy"],
    logo: "/logo-oracle.svg",
    accent: "#F80000",
    accentBg: "rgba(248,0,0,0.06)",
  },
];

export function IntegrationsPage() {
  return (
    <div className="font-sans min-h-screen bg-white">
      <Navbar />

      {/* 1. Compact Intro */}
      <section className="bg-white pt-32 pb-12 lg:pt-40 lg:pb-16 px-6 lg:px-8 text-center border-b border-slate-200/50">
        <div className="mx-auto max-w-4xl">
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
      <section className="py-16 lg:py-24 bg-slate-50 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                    style={{ background: cloud.accentBg, borderColor: `${cloud.accent}22` }}
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
      <section className="py-24 bg-white border-y border-slate-200/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#023660] mb-4">
              Qué necesitas (y qué no) para empezar
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Modelo plug & play: sin agentes, sin cambios en infraestructura, sin proyectos largos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* What you need */}
            <div className="bg-[#E7F4F6]/50 rounded-3xl p-8 lg:p-10 border border-[#36AAC1]/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#36AAC1]/20 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#36AAC1]" />
                </div>
                <h3 className="text-xl font-bold text-[#023660]">Lo que sí necesitas</h3>
              </div>
              <div className="space-y-5">
                {[
                  { label: "Permisos de solo lectura en tu cuenta de cloud", note: "IAM Role en AWS, Service Principal en Azure, Service Account en GCP" },
                  { label: "Acceso a datos de billing o costos habilitado", note: "Cost Explorer, Azure Cost Management, Cloud Billing, OCI Cost Reports" },
                  { label: "Configuración inicial por proveedor", note: "Proceso guiado y asistido por proveedor" },
                  { label: "Validación de conexión", note: "CloudAltio verifica el acceso antes de procesar datos" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-[#36AAC1]/20 flex-shrink-0 shadow-sm text-[#36AAC1] mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[#023660] font-semibold text-sm block mb-0.5">{item.label}</span>
                      <span className="text-slate-500 text-xs">{item.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What you don't need */}
            <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#FE1F3D]/10 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-[#FE1F3D]" />
                </div>
                <h3 className="text-xl font-bold text-[#023660]">Lo que NO necesitas</h3>
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
                      <span className="text-slate-700 font-semibold text-sm block mb-0.5">{item.label}</span>
                      <span className="text-slate-400 text-xs">{item.note}</span>
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
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-[#36AAC1]/30 z-0"></div>

            {[
              {
                title: "Configura permisos",
                desc: "Habilita acceso de solo lectura según el proveedor cloud para que CloudAltio pueda consultar costos y uso. Sin escribir ni modificar nada.",
                icon: <Settings className="w-6 h-6" />
              },
              {
                title: "Conecta tus cuentas",
                desc: "Agrega las cuentas, proyectos o suscripciones que quieres visualizar. Puedes empezar con uno y agregar más después.",
                icon: <LinkIcon className="w-6 h-6" />
              },
              {
                title: "Visualiza y controla",
                desc: "CloudAltio normaliza los datos al estándar FOCUS y los presenta en un dashboard unificado. Datos listos tras la sincronización inicial.",
                icon: <LineChart className="w-6 h-6" />
              }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white border border-[#36AAC1]/30 shadow-xl shadow-[#36AAC1]/10 rounded-2xl flex items-center justify-center text-[#36AAC1] mb-8 relative transition-transform group-hover:-translate-y-1">
                  <div className="absolute inset-0 bg-[#E7F4F6] rounded-2xl transform rotate-3 scale-105 -z-10 transition-transform group-hover:rotate-6"></div>
                  {step.icon}
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
      <section className="py-24 bg-[#E7F4F6] relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white text-[#36AAC1] mb-8 shadow-sm border border-[#36AAC1]/10">
            <Zap className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#023660] mb-6">
            Conexión ágil y transparente
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
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
      <section className="py-24 sm:py-32 bg-[#023660] text-center relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#36AAC1]/50 to-transparent"></div>
        
        <div className="mx-auto max-w-3xl px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6">
            Empieza con una implementación simple
          </h2>
          <p className="text-xl text-[#E7F4F6]/80 mb-10 max-w-2xl mx-auto">
            Conecta tu operación cloud con una configuración mínima y empieza a visualizar tu gasto con más claridad.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FE1F3D] px-8 py-4 text-base font-semibold text-white shadow-[0_0_24px_rgba(254,31,61,0.3)] hover:shadow-[0_0_32px_rgba(254,31,61,0.5)] hover:-translate-y-0.5 transition-all duration-200">
              Solicitar demo
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}