import { useState } from "react";
import { motion } from "motion/react";
import { asset } from "@/lib/asset";
import { useLanguage } from "@/lib/i18n";

export function FAQ() {
  const { tr } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  const faqs = tr.faq.items;

  return (
    <section
      id="faq"
      style={{
        backgroundImage: `url('${asset("/bg-gradient.png")}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "120px 0",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#023660", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>
            {tr.faq.eyebrow}
          </div>
          <h2 style={{ fontSize: 40, fontWeight: 800, color: "#023660", letterSpacing: "-1px", lineHeight: 1.15, marginBottom: 16 }}>
            {tr.faq.title}
          </h2>
          <p style={{ fontSize: 16, color: "#023660", opacity: 0.65, maxWidth: 480, margin: "0 auto" }}>
            {tr.faq.subtitle}
          </p>
        </div>

        {/* Accordion */}
        <motion.div
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.97 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
              }}
              style={{
                background: "#FFFFFF",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(15,23,42,0.06)",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "22px 24px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: 16,
                }}
              >
                <span style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#023660",
                  fontFamily: "Inter, sans-serif",
                  lineHeight: 1.4,
                  flex: 1,
                }}>
                  {faq.q}
                </span>

                {/* +/× button */}
                <div style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "#F1F5F9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "background 0.2s",
                }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    {open === i ? (
                      <path d="M2 2L12 12M12 2L2 12" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" />
                    ) : (
                      <path d="M7 2v10M2 7h10" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" />
                    )}
                  </svg>
                </div>
              </button>

              {open === i && (
                <div style={{ padding: "0 24px 22px" }}>
                  <p style={{
                    fontSize: 14,
                    color: "#475569",
                    lineHeight: 1.75,
                    margin: 0,
                  }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
