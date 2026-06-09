import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n";

const gradientId = "iconGrad";

const GradientDefs = () => (
  <defs>
    <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#fb2e50" />
      <stop offset="50%" stopColor="#7f2f8c" />
      <stop offset="100%" stopColor="#003d80" />
    </linearGradient>
  </defs>
);

const IconDatabase = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <GradientDefs />
    <ellipse cx="12" cy="5" rx="9" ry="3" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconUsers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <GradientDefs />
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="4" stroke={`url(#${gradientId})`} strokeWidth="2"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconSparkles = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <GradientDefs />
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 3v4M22 5h-4M4 17v2M5 18H3" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export function FocusSection() {
  const { tr } = useLanguage();

  const cards = [
    {
      icon: <IconDatabase />,
      title: tr.focus.cards[0].title,
      desc: tr.focus.cards[0].desc,
    },
    {
      icon: <IconUsers />,
      title: tr.focus.cards[1].title,
      desc: tr.focus.cards[1].desc,
    },
    {
      icon: <IconSparkles />,
      title: tr.focus.cards[2].title,
      desc: tr.focus.cards[2].desc,
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12">

        {/* ── Header centrado ── */}
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#023660]/5 border border-[#023660]/10 mb-5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="pilarGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#fb2e50" />
                  <stop offset="50%" stopColor="#7f2f8c" />
                  <stop offset="100%" stopColor="#003d80" />
                </linearGradient>
              </defs>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="url(#pilarGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="14 2 14 8 20 8" stroke="url(#pilarGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="16" y1="13" x2="8" y2="13" stroke="url(#pilarGrad)" strokeWidth="2" strokeLinecap="round"/>
              <line x1="16" y1="17" x2="8" y2="17" stroke="url(#pilarGrad)" strokeWidth="2" strokeLinecap="round"/>
              <line x1="10" y1="9" x2="8" y2="9" stroke="url(#pilarGrad)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-[11px] font-bold text-[#023660] uppercase tracking-widest">{tr.focus.badge}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#023660] leading-[1.1] mb-5">
            {tr.focus.title}{" "}
            <span className="text-[#FE1F3D]">{tr.focus.highlight}</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            {tr.focus.subtitle}
          </p>
        </div>

        {/* ── 3 Cards horizontales ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {cards.map((card, idx) => {
            const origins = [
              { x: -60, y: 30 },
              { x: 0,   y: 60 },
              { x: 60,  y: 30 },
            ];
            return (
            <motion.div
              key={idx}
              className="group flex flex-col gap-4 p-7 rounded-2xl border border-slate-100 bg-slate-50/60"
              initial={{ opacity: 0, x: origins[idx].x, y: origins[idx].y, scale: 0.92 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              animate={{ scale: [1, 1.025, 1] }}
              transition={{
                opacity: { duration: 0.55, delay: idx * 0.15 },
                x:       { duration: 0.7,  delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] },
                y:       { duration: 0.7,  delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] },
                scale:   { duration: 3.2 + idx * 0.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.9 },
              }}
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{ y: -12, scale: 1.04, boxShadow: "0 28px 52px rgba(127,47,140,0.22)", backgroundColor: "#ffffff" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform"
                style={{ background: "linear-gradient(135deg, rgba(251,46,80,0.08) 0%, rgba(0,61,128,0.08) 100%)", border: "1.5px solid rgba(127,47,140,0.15)" }}>
                {card.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-[#023660] mb-2">{card.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
              </div>
              <div className="mt-auto h-0.5 w-8 rounded-full group-hover:w-16 transition-all duration-300"
                style={{ background: "linear-gradient(90deg, #fb2e50 0%, #7f2f8c 50%, #003d80 100%)" }}
              />
            </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
