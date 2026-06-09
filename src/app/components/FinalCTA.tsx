import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n";

interface FinalCTAProps {
  title?: string;
  subtitle?: string;
  showFeatures?: boolean;
  variant?: 'dark' | 'light';
}

export function FinalCTA({
  title,
  subtitle,
  showFeatures = true,
  variant = 'dark'
}: FinalCTAProps) {
  const { tr } = useLanguage();
  const isDark = variant === 'dark';
  const resolvedTitle = title ?? tr.cta.title;
  const resolvedSubtitle = subtitle ?? tr.cta.subtitle;
  
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 font-sans"
      style={isDark ? { background: "linear-gradient(90deg, #003d80 0%, #7f2f8c 50%, #fb2e50 100%)" } : { background: "#ffffff" }}
    >
      {/* sin patterns — el gradiente es el protagonista */}
      
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6 border ${isDark ? 'bg-white/5 border-white/10' : 'bg-[#023660]/5 border-[#023660]/10'}`}>
            <div className="h-1.5 w-1.5 rounded-full bg-[#36AAC1] shadow-[0_0_8px_rgba(54,170,193,0.8)]" />
            <span className={`text-[9px] font-black tracking-[0.2em] uppercase ${isDark ? 'text-white/70' : 'text-[#023660]/70'}`}>CloudAltio OS</span>
          </div>

          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-6 leading-tight ${isDark ? 'text-white' : 'text-[#023660]'}`}>
            {resolvedTitle}
          </h2>

          <p className={`mx-auto max-w-2xl text-base mb-10 leading-relaxed font-medium ${isDark ? 'text-white/70' : 'text-slate-500'}`}>
            {resolvedSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Link to={`/contacto?motivo=${encodeURIComponent("Hola, quiero ver CloudAltio en acción. Me gustaría agendar una demo.")}`} className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#FE1F3D] px-8 py-4 text-[10px] font-black text-white uppercase tracking-widest hover:bg-[#FE1F3D]/90 transition-all duration-300 shadow-lg shadow-[#FE1F3D]/20 w-full sm:w-auto">
              {tr.cta.demo}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {showFeatures && (
            <div className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-400'}`}>
              {[
                "Sin agentes",
                "FOCUS Compliant",
                "Estandarización Multicloud",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className={`h-4 w-4 ${isDark ? 'text-white' : 'text-[#36AAC1]'}`} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
