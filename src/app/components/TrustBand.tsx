import { Check, ShieldCheck, Zap, Database, Cpu, Layers } from "lucide-react";
import { motion } from "motion/react";

const providers: { name: string; logo: string; raw: string }[] = [
  { name: "AWS",          logo: "/logo-aws.svg",    raw: "$12,400" },
  { name: "Azure",        logo: "/logo-azure.svg",  raw: "$8,200"  },
  { name: "Google Cloud", logo: "/logo-gcp.svg",    raw: "$4,100"  },
  { name: "Oracle Cloud", logo: "/logo-oracle.svg", raw: "$2,300"  },
];

export function TrustBand() {
  return (
    <section className="relative py-24 border-y border-slate-100 overflow-hidden">
      {/* Texture Background */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          inset: "-10%",
          backgroundImage: "url('/bg-texture.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        animate={{ x: [0, -20, 8, -12, 0], y: [0, -10, 14, -6, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header - Centered */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#023660]/5 border border-[#023660]/10 mb-6">
            <ShieldCheck className="w-4 h-4 text-[#023660]" />
            <span className="text-[11px] font-bold text-[#023660] tracking-widest uppercase">
              Pipeline de Datos FOCUS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#023660] leading-tight mb-4">
            Estandarización Multicloud en Tiempo Real
          </h2>
          <p className="text-slate-600 text-lg">
            Utilizamos el estándar <strong>FOCUS</strong> para unificar, estandarizar y comparar consumos generados desde AWS, Azure, GCP y OCI en una sola fuente de verdad.
          </p>
        </div>

        {/* Vertical Pipeline Visualization */}
        <div className="relative flex flex-col items-center">
          
          {/* Step 1: Ingestion Sources */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-16 relative z-20">
            {providers.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border border-slate-200 p-5 rounded-2xl flex flex-col items-center gap-3 group hover:border-[#023660]/30 transition-colors bg-[#ffffff]"
              >
                <img src={p.logo} alt={p.name} style={{ width: 48, height: 48, objectFit: "contain" }} />
                <div className="text-center">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-1">{p.name}</div>
                  <div className="text-sm font-bold text-[#023660] tabular-nums">{p.raw}</div>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#FE1F3D] transition-colors" />
              </motion.div>
            ))}
          </div>

          {/* SVG Connector 1 (Converging Lines) - Visible on Desktop */}
          <div className="absolute top-24 left-0 w-full h-32 pointer-events-none hidden md:block">
            <svg width="100%" height="100%" viewBox="0 0 800 120" preserveAspectRatio="none" fill="none">
              <path d="M100 0C100 60 400 60 400 120" stroke="#023660" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M300 0C300 60 400 60 400 120" stroke="#023660" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M500 0C500 60 400 60 400 120" stroke="#023660" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M700 0C700 60 400 60 400 120" stroke="#023660" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* Step 2: FOCUS Engine Block */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            style={{ background: "linear-gradient(135deg, #fb2e50 0%, #7f2f8c 50%, #003d80 100%)" }}
            className="relative z-30 p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col items-center gap-4 text-center border-4 border-white"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FE1F3D] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full whitespace-nowrap">
              Engine Core
            </div>
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white tracking-tight uppercase">FOCUS Standard</h3>
              <p className="text-white/60 text-xs font-medium mt-1">Normalización multicloud automatizada</p>
            </div>
            <div className="flex gap-2 mt-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  className="w-1.5 h-1.5 rounded-full bg-[#FE1F3D]"
                />
              ))}
            </div>
          </motion.div>

          {/* SVG Connector 2 (Single Line) */}
          <div className="w-px h-24 bg-gradient-to-b from-[#023660] to-transparent relative">
            <motion.div
              animate={{ y: [0, 80] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-4 bg-[#FE1F3D] rounded-full blur-[2px]"
            />
          </div>

          {/* Step 3: Standardized Output */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-lg bg-white border border-slate-200 shadow-xl rounded-2xl overflow-hidden"
          >
            <div className="bg-slate-50 px-6 py-3 border-b border-slate-100 flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Vista Unificada</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-green-600 uppercase">Validado</span>
              </div>
            </div>
            <div className="p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="flex flex-col">
                <div className="text-xs font-bold text-[#023660]/60 uppercase mb-1">Inversión Mensual</div>
                <div className="text-4xl font-black text-[#023660]">$27,000.00</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-slate-100" />
              <div className="flex flex-col items-center sm:items-start">
                <div className="text-xs font-bold text-[#FE1F3D] uppercase mb-1">Metadata FOCUS</div>
                <div className="flex -space-x-2">
                  {providers.map((p) => (
                    <div key={p.name} className="w-8 h-8 rounded-full border-2 border-white bg-white shadow-sm flex items-center justify-center">
                      <img src={p.logo} alt={p.name} style={{ width: 14, height: 14, objectFit: "contain" }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Alert Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="absolute bottom-10 -right-4 md:-right-24 bg-white border border-[#FE1F3D]/20 shadow-2xl p-4 rounded-xl max-w-[200px] hidden lg:block"
          >
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-[#FE1F3D]" />
              <span className="text-[10px] font-black text-[#FE1F3D] uppercase tracking-wider">Detección FOCUS</span>
            </div>
            <div className="text-xs font-bold text-[#023660] leading-snug">Variación detectada: +$3,400 en EC2</div>
          </motion.div>

        </div>

        {/* Feature Grid - Bottom */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Database, title: "Consolidación", desc: "4 nubes principales integradas nativamente." },
            { icon: Layers, title: "Sin Código", desc: "Implementación técnica sin agentes ni fricción." },
            { icon: Check, title: "Sin Impacto", desc: "Lectura de costos sin afectar tu infraestructura." },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4">
              <div className="w-10 h-10 rounded-xl bg-[#023660]/5 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-[#023660]" />
              </div>
              <h4 className="text-sm font-bold text-[#023660] mb-2 uppercase tracking-wide">{item.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
