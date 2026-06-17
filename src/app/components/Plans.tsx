import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { asset } from "@/lib/asset";
import { useLanguage } from "@/lib/i18n";
import useEmblaCarousel from "embla-carousel-react";

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
      <path d="M2.5 7L5.5 10L11.5 4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Plans({ showHeader = true, eyebrow, title, subtitle, slider = false }: { showHeader?: boolean; eyebrow?: string; title?: string; subtitle?: string; slider?: boolean }) {
  const { tr } = useLanguage();
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const useSlider = slider && isMobile;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const plans = [
    {
      id: "starter",
      name: "Starter",
      badgeLabel: tr.plans.available,
      badgeStyle: "available",
      available: true,
      price: tr.plans.prices[0],
      spendRange: tr.plans.spendRanges[0],
      tagline: tr.plans.taglines[0],
      clouds: tr.plans.clouds[0],
      accentColor: "#36AAC1",
      features: tr.plans.features[0],
      ctaLink: "/contacto?motivo=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20demo%20del%20plan%20Starter%20de%20CloudAltio.",
    },
    {
      id: "professional",
      name: "Professional",
      badgeLabel: tr.plans.available,
      badgeStyle: "available",
      available: true,
      price: tr.plans.prices[1],
      spendRange: tr.plans.spendRanges[1],
      tagline: tr.plans.taglines[1],
      clouds: tr.plans.clouds[1],
      accentColor: "#FE1F3D",
      features: tr.plans.features[1],
      ctaLink: "/contacto?motivo=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20demo%20del%20plan%20Professional%20de%20CloudAltio.",
    },
    {
      id: "business",
      name: "Business",
      badgeLabel: tr.plans.available,
      badgeStyle: "available",
      available: true,
      price: tr.plans.prices[2],
      spendRange: tr.plans.spendRanges[2],
      tagline: tr.plans.taglines[2],
      clouds: tr.plans.clouds[2],
      accentColor: "#7f2f8c",
      features: tr.plans.features[2],
      ctaLink: "/contacto?motivo=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20demo%20del%20plan%20Business%20de%20CloudAltio.",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      badgeLabel: tr.plans.available,
      badgeStyle: "available",
      available: true,
      price: tr.plans.prices[3],
      spendRange: tr.plans.spendRanges[3],
      tagline: tr.plans.taglines[3],
      clouds: tr.plans.clouds[3],
      accentColor: "#023660",
      features: tr.plans.features[3],
      ctaLink: `/contacto?motivo=${encodeURIComponent(tr.plans.ctaDemoMotivo)}`,
    },
  ];

  return (
    <section
      id="planes"
      style={{
        background: "#F0F4F8",
        padding: "120px 0",
        fontFamily: "Inter, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated texture background */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-10%",
          backgroundImage: `url('${asset("/bg-texture.svg")}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
          opacity: 0.85,
        }}
        animate={{ x: [0, -120, 40, -80, 0], y: [0, -60, 90, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        {showHeader && (
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#023660", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>
              {eyebrow ?? tr.plans.eyebrow}
            </div>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: "#023660", letterSpacing: "-1px", marginBottom: 14, lineHeight: 1.15 }}>
              {title ?? tr.plans.title}
            </h2>
            <p style={{ fontSize: 16, color: "#023660", opacity: 0.65, maxWidth: 520, margin: "0 auto" }}>
              {subtitle ?? tr.plans.subtitle}
            </p>
          </div>
        )}

        {/* Cards */}
        {useSlider ? (
          <>
            <div ref={emblaRef} style={{ overflow: "hidden", margin: "0 -8px" }}>
              <div style={{ display: "flex", gap: 20, paddingBottom: 8 }}>
                {plans.map((plan) => (
                  <div key={plan.id} style={{ flex: "0 0 clamp(280px, 78vw, 320px)", paddingTop: 20, display: "flex", flexDirection: "column" }}>
              {/* Card — sin opacity para que el badge no se vea afectado */}
              <div style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: 18,
                display: "flex",
                flexDirection: "column",
                flex: 1,
                boxShadow: plan.available
                  ? "0 4px 24px rgba(15,23,42,0.08)"
                  : "0 2px 8px rgba(15,23,42,0.03)",
                overflow: "visible",
              }}>
              {/* Badge centrado encima del card */}
              <div style={{ display: "flex", justifyContent: "center", marginTop: -14 }}>
                {plan.badgeStyle === "soon" ? (
                  <div style={{
                    background: "#E2E8F0",
                    color: "#64748b",
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "5px 16px",
                    borderRadius: 100,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}>
                    {plan.badgeLabel}
                  </div>
                ) : (
                  <div style={{
                    background: "linear-gradient(90deg, #023660 0%, #7f2f8c 50%, #fb2e50 100%)",
                    color: "#FFFFFF",
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "5px 16px",
                    borderRadius: 100,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    boxShadow: "0 4px 14px rgba(251,46,80,0.3)",
                  }}>
                    {plan.badgeLabel}
                  </div>
                )}
              </div>

              {/* Contenido interno — opacidad solo aquí */}
              <div style={{
                padding: "24px 32px 32px",
                display: "flex",
                flexDirection: "column",
                flex: 1,
                opacity: plan.available ? 1 : 0.55,
              }}>
                {/* Plan name */}
                <div style={{ fontSize: 11, fontWeight: 700, color: plan.accentColor, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>
                  {plan.name}
                </div>

                {/* Price */}
                <div style={{ fontSize: 32, fontWeight: 800, color: "#0F172A", lineHeight: 1, marginBottom: 4 }}>
                  {plan.price}
                </div>
                <div style={{ fontSize: 11, color: "#64748b", fontWeight: 500, marginBottom: 16 }}>
                  {tr.plans.billingPeriod}
                </div>

                {/* Spend range pill */}
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: `${plan.accentColor}12`,
                  border: `1px solid ${plan.accentColor}30`,
                  borderRadius: 6,
                  padding: "5px 12px",
                  marginBottom: 20,
                  alignSelf: "flex-start",
                }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: plan.accentColor }}>{plan.spendRange}</span>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: "#E2E8F0", marginBottom: 20 }} />

                {/* Features */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1, marginBottom: 24 }}>
                  {plan.features.map((feat) => (
                    <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <CheckIcon color={plan.accentColor} />
                      <span style={{ fontSize: 13, color: "#475569", lineHeight: 1.45 }}>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={plan.ctaLink}
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    textDecoration: "none",
                    padding: "14px",
                    borderRadius: 100,
                    background: plan.available ? "#FE1F3D" : "#023660",
                    boxShadow: plan.available
                      ? "0 4px 20px rgba(254,31,61,0.2)"
                      : "0 4px 20px rgba(2,54,96,0.18)",
                    transition: "background 0.2s, box-shadow 0.2s",
                    cursor: "pointer",
                    fontFamily: "Inter, sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = plan.available ? "#d81932" : "#01243f";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = plan.available ? "#FE1F3D" : "#023660";
                  }}
                >
                  {tr.plans.ctaDemo} {plan.name}
                </Link>
              </div>{/* fin contenido interno */}
              </div>{/* fin card */}
            </div>
          ))}
        </div>{/* fin slider track */}
      </div>{/* fin emblaRef */}
            {/* Dots */}
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 28 }}>
              {plans.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  style={{
                    width: i === selectedIndex ? 24 : 8,
                    height: 8,
                    borderRadius: 100,
                    background: i === selectedIndex ? "#FE1F3D" : "#CBD5E1",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4" style={{ gap: 20, alignItems: "stretch" }}>
            {plans.map((plan) => (
              <div key={plan.id} style={{ paddingTop: 20, display: "flex", flexDirection: "column" }}>
              <div style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: 18,
                display: "flex",
                flexDirection: "column",
                flex: 1,
                boxShadow: plan.available ? "0 4px 24px rgba(15,23,42,0.08)" : "0 2px 8px rgba(15,23,42,0.03)",
                overflow: "visible",
              }}>
              <div style={{ display: "flex", justifyContent: "center", marginTop: -14 }}>
                <div style={{
                  background: "linear-gradient(90deg, #023660 0%, #7f2f8c 50%, #fb2e50 100%)",
                  color: "#FFFFFF", fontSize: 10, fontWeight: 700, padding: "5px 16px",
                  borderRadius: 100, letterSpacing: "0.08em", textTransform: "uppercase" as const,
                  boxShadow: "0 4px 14px rgba(251,46,80,0.3)",
                }}>{plan.badgeLabel}</div>
              </div>
              <div style={{ padding: "24px 32px 32px", display: "flex", flexDirection: "column", flex: 1, opacity: 1 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: plan.accentColor, textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: 10 }}>{plan.name}</div>
                <div style={{ fontSize: 32, fontWeight: 800, color: "#0F172A", lineHeight: 1, marginBottom: 4 }}>{plan.price}</div>
                <div style={{ fontSize: 11, color: "#64748b", fontWeight: 500, marginBottom: 16 }}>{tr.plans.billingPeriod}</div>
                <div style={{ display: "inline-flex", alignItems: "center", background: `${plan.accentColor}12`, border: `1px solid ${plan.accentColor}30`, borderRadius: 6, padding: "5px 12px", marginBottom: 20, alignSelf: "flex-start" as const }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: plan.accentColor }}>{plan.spendRange}</span>
                </div>
                <div style={{ height: 1, background: "#E2E8F0", marginBottom: 20 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1, marginBottom: 24 }}>
                  {plan.features.map((feat) => (
                    <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <CheckIcon color={plan.accentColor} />
                      <span style={{ fontSize: 13, color: "#475569", lineHeight: 1.45 }}>{feat}</span>
                    </div>
                  ))}
                </div>
                <Link to={plan.ctaLink} style={{ display: "block", textAlign: "center", fontSize: 14, fontWeight: 700, color: "#FFFFFF", textDecoration: "none", padding: "14px", borderRadius: 100, background: "#FE1F3D", boxShadow: "0 4px 20px rgba(254,31,61,0.2)", transition: "background 0.2s", cursor: "pointer", fontFamily: "Inter, sans-serif" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#d81932"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#FE1F3D"; }}
                >{tr.plans.ctaDemo} {plan.name}</Link>
              </div>
              </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
