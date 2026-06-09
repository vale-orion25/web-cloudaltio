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
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { Link } from "react-router";
import { FinalCTA } from "../components/FinalCTA";

// Import screenshots already present in the project
import dashImg from "../../imports/screencapture-dev-cloudaltio-es-dashboard-2026-04-20-13_56_19.png";
import budgetsImg from "../../imports/screencapture-dev-cloudaltio-es-inventory-budgets-and-alerts-2026-04-20-13_56_40.png";

export function FinOpsPage() {
  return (
    <div className="font-sans min-h-screen bg-white text-slate-900 selection:bg-[#FE1F3D]/10 selection:text-[#FE1F3D]">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 border-b border-slate-100 bg-slate-50 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#023660 1px, transparent 1px), linear-gradient(90deg, #023660 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#023660]/5 border border-[#023660]/10 mb-8"
            >
              <span className="text-[10px] font-black text-[#023660] tracking-[0.2em] uppercase">Metodología & Cultura</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-[29px] lg:text-[37px] font-extrabold tracking-tight text-[#023660] mb-8 leading-tight"
            >
              Entiende en qué se está yendo tu gasto cloud
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed mb-10"
            >
              FinOps no es solo un modelo operativo; es la evolución necesaria para maximizar el valor de la nube, asegurando visibilidad total, control técnico y trazabilidad financiera.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/demo" className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 rounded-full bg-[#FE1F3D] px-8 py-4 text-xs font-black text-white uppercase tracking-widest hover:bg-[#FE1F3D]/90 transition-all duration-300 shadow-lg shadow-[#FE1F3D]/20">
                Solicitar demo
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="px-6 lg:px-8 py-24 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-black text-[#023660] tracking-tight mb-4">El desafío de la nube a escala</h2>
              <div className="h-1 w-12 bg-[#FE1F3D] mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: <Eye className="w-6 h-6 text-[#FE1F3D]" />,
                  title: "Falta de visibilidad", 
                  desc: "Costos ocultos y recursos huérfanos que fragmentan el presupuesto de infraestructura." 
                },
                { 
                  icon: <Network className="w-6 h-6 text-[#FE1F3D]" />,
                  title: "Equipos desconectados", 
                  desc: "Finanzas e ingeniería operan en silos, sin un idioma común para evaluar el gasto." 
                },
                { 
                  icon: <AlertTriangle className="w-6 h-6 text-[#FE1F3D]" />,
                  title: "Desviaciones tardías", 
                  desc: "Reacción y análisis post-facturación en lugar de gestión proactiva y en tiempo real." 
                },
                { 
                  icon: <Target className="w-6 h-6 text-[#FE1F3D]" />,
                  title: "Asignación compleja", 
                  desc: "Alta dificultad para atribuir con precisión el gasto a productos, unidades o centros de costo." 
                }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="mb-6 p-3 bg-white inline-block rounded-xl shadow-sm border border-slate-100">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-black text-[#023660] uppercase tracking-wider mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONCEPT: QUÉ ES FINOPS */}
        <section className="px-6 lg:px-8 py-24 bg-slate-50 border-y border-slate-100">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-6 text-[#FE1F3D]">
                  <Layers className="w-4 h-4" />
                  <span className="text-[10px] font-black tracking-widest uppercase">Concepto</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-[#023660] leading-tight mb-6">
                  Qué es FinOps
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                  FinOps es la práctica operativa y cultural que maximiza el valor de negocio de la nube. Evoluciona la gestión financiera tradicional hacia un modelo ágil y colaborativo, donde cada equipo asume la responsabilidad de su consumo cloud.
                </p>

                <div className="space-y-6">
                  {[
                    { phase: "Informar (Inform)", icon: <Search className="w-5 h-5" />, text: "Visibilidad total y asignación precisa del gasto para entender exactamente qué se está consumiendo y quién es responsable." },
                    { phase: "Optimizar (Optimize)", icon: <SlidersHorizontal className="w-5 h-5" />, text: "Identificación de eficiencias arquitectónicas y comerciales, eliminando desperdicios y ajustando la capacidad." },
                    { phase: "Operar (Operate)", icon: <Settings className="w-5 h-5" />, text: "Mejora continua, establecimiento de políticas de gobernanza y automatización de procesos para alinear la nube con los objetivos de negocio." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#023660]">
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
                <div className="absolute -inset-4 bg-white border border-slate-200 rounded-2xl -z-10 translate-x-4 translate-y-4 shadow-sm" />
                <div className="bg-[#023660] p-8 md:p-12 rounded-2xl shadow-2xl overflow-hidden relative border border-white/5 group hover:border-[#FE1F3D]/20 transition-all duration-500">
                  {/* Elementos decorativos de fondo */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#FE1F3D]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FE1F3D]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                  <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(45deg, #FE1F3D 0.5px, transparent 0.5px), linear-gradient(-45deg, #FE1F3D 0.5px, transparent 0.5px)", backgroundSize: "30px 30px" }} />
                  
                  <div className="relative z-10">
                    <div className="mb-10">
                      <div className="inline-flex items-center gap-2 mb-2">
                        <RefreshCw className="w-3 h-3 text-[#FE1F3D] animate-spin-slow" />
                        <span className="text-[10px] font-black text-[#FE1F3D] tracking-[0.3em] uppercase">Metodología Iterativa</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-white leading-tight uppercase tracking-tight">El ciclo de vida FinOps</h3>
                    </div>

                    <div className="space-y-10 relative">
                      {/* Línea de conexión visual */}
                      <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-[#FE1F3D]/50 via-white/10 to-transparent" />
                      
                      {[
                        { 
                          num: "1", 
                          phase: "Inform", 
                          desc: "Visibilidad total y asignación técnica granular basada en el estándar FOCUS para la toma de decisiones.",
                          tags: ["Etiquetado", "Atribución", "Presupuestos"] 
                        },
                        { 
                          num: "2", 
                          phase: "Optimize", 
                          desc: "Identificación de eficiencias, eliminación de desperdicio y optimización de compromisos de compra cloud.",
                          tags: ["Rightsizing", "Savings Plans", "Anomalías"] 
                        },
                        { 
                          num: "3", 
                          phase: "Operate", 
                          desc: "Establecimiento de gobernanza, automatización de políticas y alineación con los KPIs de negocio.",
                          tags: ["Gobernanza", "Cumplimiento", "Escalado"] 
                        }
                      ].map((item, i) => (
                        <div key={i} className="relative pl-12 group/item">
                          <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#023660] border-2 border-[#FE1F3D]/50 flex items-center justify-center text-xs font-black text-white shadow-[0_0_15px_rgba(254,31,61,0.2)] group-hover/item:shadow-[0_0_20px_rgba(254,31,61,0.4)] transition-all">
                            {item.num}
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-black text-[#FE1F3D] uppercase tracking-[0.2em]">{item.phase}</h4>
                            <p className="text-sm text-white/70 leading-relaxed max-w-sm">{item.desc}</p>
                            <div className="flex flex-wrap gap-2 pt-1">
                              {item.items?.map((tag, j) => (
                                <span key={j} className="text-[9px] font-bold text-white/40 uppercase tracking-widest px-2 py-0.5 rounded border border-white/5 bg-white/5">
                                  {tag}
                                </span>
                              )) || item.tags.map((tag, j) => (
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
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Framework Certificado</span>
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
        <section className="px-6 lg:px-8 py-24 bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-4 bg-slate-50 border border-slate-200 rounded-2xl -z-10 -translate-x-4 translate-y-4" />
                <div className="bg-white p-2 rounded-xl shadow-2xl border border-slate-100 relative z-10">
                  <ImageWithFallback 
                    src={dashImg} 
                    alt="CloudAltio Dashboard FOCUS Standard" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#023660] mb-6">
                  <span className="text-[10px] font-black text-white tracking-[0.2em] uppercase">Estándar Abierto</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#023660] mb-6 leading-tight">
                  Qué es FOCUS
                </h2>

                <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
                  <p className="font-semibold text-[#023660]">
                    FOCUS es el estándar de la FinOps Foundation para normalizar datos de facturación entre AWS, GCP y Azure. 
                  </p>
                  <p>
                    Con FOCUS, unificar y comparar consumos entre AWS, Azure, GCP y OCI deja de ser una pesadilla de formatos distintos. CloudAltio utiliza este estándar para estandarizar la información en un esquema común y transparente para tu gasto cloud.
                  </p>
                  <p>
                    Estandariza tus consumos cloud con FOCUS y obtén una visión clara, comparable y multi-cloud desde el primer día. Esto permite unificar tu facturación sin requerir transformaciones manuales, garantizando datos consistentes y trazables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS VALUE SECTION */}
        <section className="px-6 lg:px-8 py-24 bg-[#023660] relative overflow-hidden">
          <div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0), radial-gradient(circle at 70% 30%, rgba(254, 31, 61, 0.03), transparent 60%), radial-gradient(circle at 50% 50%, #034478 0%, #023660 100%)", backgroundSize: "40px 40px, 100% 100%, 100% 100%" }} />
          
          <div className="mx-auto max-w-7xl relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <div className="text-[#36AAC1] font-black text-[10px] uppercase tracking-[0.3em] mb-4">Valor de negocio</div>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  Importancia de FinOps para las organizaciones
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: <ShieldCheck className="w-5 h-5" />,
                  title: "Gobernanza y Control", 
                  text: "En un entorno multicloud, la gobernanza del gasto establece reglas claras para operar con seguridad. FinOps proporciona el marco normativo." 
                },
                { 
                  icon: <Zap className="w-5 h-5" />,
                  title: "Decisiones Ágiles", 
                  text: "Acelera el time-to-insight del gasto cloud. Decisiones más rápidas basadas en el análisis continuo en lugar del cierre de mes." 
                },
                { 
                  icon: <FileSpreadsheet className="w-5 h-5" />,
                  title: "Datos Confiables", 
                  text: "Elimina la dependencia de hojas de cálculo manuales y propensas a errores. Datos auditables y precisos en todo momento." 
                },
                { 
                  icon: <Network className="w-5 h-5" />,
                  title: "Puente Estratégico", 
                  text: "Permite que los equipos de ingeniería, finanzas y negocio hablen el mismo idioma: el del valor y retorno de la inversión." 
                }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl bg-[#034478] border border-white/5 hover:border-white/20 transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#023660] border border-white/10 flex items-center justify-center text-[#36AAC1] mb-6">
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
        <section className="px-6 lg:px-8 py-24 bg-white border-b border-slate-100">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-4">
                <div className="inline-flex items-center gap-2 mb-6 text-[#FE1F3D]">
                  <BarChart3 className="w-4 h-4" />
                  <span className="text-[10px] font-black tracking-widest uppercase">Producto</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-[#023660] leading-tight mb-6">
                  CloudAltio inspirado en el Framework FinOps
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Aplicamos los principios de FinOps de manera práctica, estructurada y automatizada a través de nuestras capacidades nativas.
                </p>
                <div className="h-px w-24 bg-[#FE1F3D]/30 mb-8" />
              </div>

              <div className="lg:col-span-8">
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {[
                    { label: "Estandarización Multicloud", text: "Procesamiento basado íntegramente en FOCUS para AWS, GCP y Azure, consolidando la facturación en un modelo de datos único." },
                    { label: "Detección de Anomalías", text: "Identificación temprana de picos de consumo y gastos imprevistos mediante análisis algorítmico continuo." },
                    { label: "Presupuestos y Alertas", text: "Control exhaustivo del gasto planificado, con notificaciones proactivas antes de superar los límites establecidos." },
                    { label: "Reportes y Visibilidad", text: "Dashboards detallados y granulares diseñados para brindar visibilidad a todos los niveles de la organización tecnológica." }
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <div className="text-[10px] font-black text-[#023660] uppercase tracking-widest mb-3">{item.label}</div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                  <ImageWithFallback 
                    src={budgetsImg} 
                    alt="FinOps Methodology Analysis" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <FinalCTA 
          title="Lleva FinOps a tu operación cloud"
          subtitle="Transforma el gasto cloud en decisiones claras, trazables y accionables para tu organización."
          variant="light"
        />
      </main>

      <Footer />
    </div>
  );
}
