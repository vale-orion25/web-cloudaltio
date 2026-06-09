import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FinalCTA } from "../components/FinalCTA";
import { ChevronDown, ChevronUp, Search, MessageSquare, BookOpen, ExternalLink, LifeBuoy } from "lucide-react";

export function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("Implementación");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const categories = [
    { id: "Implementación", icon: <BookOpen className="w-4 h-4" /> },
    { id: "Seguridad", icon: <LifeBuoy className="w-4 h-4" /> },
    { id: "Integraciones", icon: <ExternalLink className="w-4 h-4" /> },
    { id: "Plataforma", icon: <MessageSquare className="w-4 h-4" /> },
    { id: "Planes", icon: <Search className="w-4 h-4" /> },
  ];

  const faqData: Record<string, { q: string, a: string }[]> = {
    "Implementación": [
      { q: "¿Cuánto tarda la implementación inicial?", a: "La conexión inicial es directa tras configurar los accesos. CloudAltio procesará los datos históricos (CUR/Exports) para entregarte una visibilidad completa de tus costos multi-cloud." },
      { q: "¿Necesito conocimiento técnico avanzado o ingeniería de datos?", a: "No. Solo necesitas permisos de administración en tu proveedor cloud para crear un rol IAM o Service Principal con acceso de lectura (ReadOnlyAccess). Nosotros proveemos guías paso a paso." },
      { q: "¿Puedo asignar costos por equipo sin un tagging perfecto?", a: "Sí. CloudAltio permite crear reglas de asignación virtual basadas en cuentas, suscripciones o filtros de recursos, independientemente del estado actual de tus etiquetas (tags)." },
    ],
    "Seguridad": [
      { q: "¿Qué datos procesa CloudAltio?", a: "CloudAltio procesa únicamente datos de costos y metadata de uso entregados por las APIs de cada proveedor cloud (facturas, reportes de uso, CUR). No accedemos a datos de negocio, PII ni al contenido de tus workloads. Si tienes requisitos específicos de seguridad o privacidad, podemos conversarlo en detalle durante la evaluación." },
      { q: "¿CloudAltio modifica recursos en mi infraestructura?", a: "Nunca. CloudAltio solicita acceso estrictamente de solo lectura. No tenemos permisos operativos para crear, borrar, escalar o modificar ningún recurso de tu red." },
    ],
    "Integraciones": [
      { q: "¿Qué nubes soporta nativamente la plataforma?", a: "Soportamos de forma nativa a Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP) y Oracle Cloud Infrastructure (OCI)." },
    ],
    "Plataforma": [
      { q: "¿Cómo calculan las proyecciones y tendencias?", a: "Utilizamos modelos matemáticos que analizan tu histórico de consumo (hasta 12 meses atrás), tendencias estacionales y variaciones recientes para predecir con alta precisión el cierre del mes." },
    ],
    "Planes": [
      { q: "¿Puedo cambiar de plan en cualquier momento?", a: "Sí, puedes escalar tu plan conforme crezca tu infraestructura. Las facturas se prorratean automáticamente según los días de uso en cada nivel." },
    ]
  };

  const toggleItem = (q: string) => {
    setOpenItems(prev => ({ ...prev, [q]: !prev[q] }));
  };

  return (
    <div className="font-sans min-h-screen bg-slate-50">
      <Navbar />

      {/* Compact Header */}
      <section className="bg-white pt-32 pb-12 lg:pt-40 lg:pb-16 px-6 lg:px-8 border-b border-slate-200/50 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E7F4F6] px-3 py-1 mb-6 border border-[#36AAC1]/20">
            <MessageSquare className="w-3.5 h-3.5 text-[#36AAC1]" />
            <span className="text-xs font-semibold text-[#023660] tracking-wide uppercase">Preguntas Frecuentes</span>
          </div>
          
          <h1 className="text-2xl md:text-[29px] font-extrabold tracking-tight text-[#023660] mb-6 leading-tight">
            Respuestas claras
          </h1>
          
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Explora las dudas comunes sobre implementación, seguridad, integraciones y uso de CloudAltio. Todo lo que necesitas saber antes de comenzar.
          </p>
          
          <div className="relative max-w-xl mx-auto group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-[#36AAC1] transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Busca por palabra clave..." 
              className="block w-full pl-11 pr-4 py-4 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#36AAC1]/50 focus:border-[#36AAC1] transition-all bg-slate-50 focus:bg-white text-base shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* FAQ Layout - Two columns */}
      <section className="py-16 lg:py-20 relative bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-72 lg:sticky lg:top-32 flex-shrink-0">
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm shadow-slate-200/50 flex flex-col gap-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 px-3">Categorías</h3>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      activeCategory === cat.id
                        ? "bg-cloud-light text-cloud-cyan shadow-sm border border-cloud-cyan/20"
                        : "text-slate-600 hover:bg-cloud-light/50 hover:text-cloud-dark border border-transparent"
                    }`}
                  >
                    {cat.icon}
                    {cat.id}
                  </button>
                ))}
              </div>
            </div>

            {/* Questions Container */}
            <div className="flex-1 max-w-3xl">
              <div className="mb-10">
                <h2 className="text-3xl font-bold tracking-tight text-cloud-dark mb-4 flex items-center gap-3">
                  {activeCategory}
                </h2>
                <div className="h-1 w-20 bg-cloud-cyan rounded-full"></div>
              </div>
              
              <div className="flex flex-col gap-4">
                {faqData[activeCategory]?.map((item, i) => (
                  <div 
                    key={i} 
                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                      openItems[item.q] 
                        ? "border-cloud-cyan shadow-md shadow-cloud-cyan/5 ring-1 ring-cloud-cyan/10" 
                        : "border-slate-200/80 shadow-sm hover:border-cloud-cyan/40 hover:shadow"
                    }`}
                  >
                    <button
                      onClick={() => toggleItem(item.q)}
                      className="w-full px-6 py-5 flex items-start justify-between text-left focus:outline-none focus-visible:bg-slate-50"
                    >
                      <span className={`text-base font-bold pr-6 leading-snug ${
                        openItems[item.q] ? "text-cloud-dark" : "text-slate-800"
                      }`}>
                        {item.q}
                      </span>
                      <span className={`flex-shrink-0 mt-0.5 w-6 h-6 flex items-center justify-center rounded-full transition-colors duration-200 ${
                        openItems[item.q] ? "bg-cloud-cyan/10 text-cloud-cyan" : "bg-slate-100 text-slate-400"
                      }`}>
                        {openItems[item.q] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </button>
                    
                    <div 
                      className={`px-6 pb-6 text-slate-600 text-base leading-relaxed max-w-2xl transition-all duration-300 ${
                        openItems[item.q] ? "block opacity-100 translate-y-0" : "hidden opacity-0 -translate-y-2"
                      }`}
                    >
                      <div className="w-full h-px bg-slate-100 mb-4"></div>
                      {item.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}