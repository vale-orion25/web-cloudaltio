import { motion } from "motion/react";
import { asset } from "@/lib/asset";
import { useLanguage } from "@/lib/i18n";
const cloudLogos: Record<string, string> = {
  aws: asset("/AWS.png"),
  az: asset("/Azure.png"),
  gcp: asset("/Google-Cloud.png"),
  oci: asset("/Oracle.png"),
};

export function HowItWorks() {
  const { tr } = useLanguage();

  const steps = [
    {
      number: "01",
      title: tr.how.steps[0].title,
      description: tr.how.steps[0].desc,
      tags: tr.how.steps[0].tags,
      icon: <img src={asset("/05.png")} alt="Conecta" style={{ width: 28, height: 28, objectFit: "contain" }} />,
      visual: (
        <div
          style={{
            background: "#F8FAFC",
            borderRadius: 10,
            border: "1px solid #E2E8F0",
            padding: "14px 16px",
            marginTop: 16,
          }}
        >
          {["AWS · us-east-1", "Azure · East US", "GCP · us-central1", "Oracle · São Paulo"].map(
            (cloud, i) => {
              const logoKeys = ["aws", "az", "gcp", "oci"];
              const logos = logoKeys.map(k => (
                <img key={k} src={cloudLogos[k]} alt={k} style={{ width: 12, height: 12, objectFit: "contain" }} />
              ));
              return (
              <div
                key={cloud}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "7px 0",
                  borderBottom: i < 3 ? "1px solid #E2E8F0" : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {logos[i]}
                  <span style={{ fontSize: 11, color: "#023660", fontFamily: "Inter, sans-serif" }}>
                    {cloud}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "#36AAC1",
                    background: "rgba(54,170,193,0.08)",
                    border: "1px solid rgba(54,170,193,0.2)",
                    padding: "2px 8px",
                    borderRadius: 100,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {tr.how.steps[0].connected}
                </div>
              </div>
              );
            }
          )}
        </div>
      ),
    },
    {
      number: "02",
      title: tr.how.steps[1].title,
      description: tr.how.steps[1].desc,
      tags: tr.how.steps[1].tags,
      icon: <img src={asset("/06.png")} alt="Visualiza" style={{ width: 28, height: 28, objectFit: "contain" }} />,
      visual: (
        <div
          style={{
            background: "#F8FAFC",
            borderRadius: 10,
            border: "1px solid #E2E8F0",
            padding: "14px 16px",
            marginTop: 16,
          }}
        >
          {[
            { label: "Compute", pct: 68, cost: "$48.2k", color: "#023660" },
            { label: "Storage", pct: 42, cost: "$12.4k", color: "#36AAC1" },
            { label: "Database", pct: 34, cost: "$9.8k", color: "#FE1F3D" },
          ].map((item) => (
            <div key={item.label} style={{ marginBottom: 10 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 5,
                }}
              >
                <span style={{ fontSize: 10, color: "#023660", fontFamily: "Inter, sans-serif" }}>
                  {item.label}
                </span>
                <span
                  style={{ fontSize: 10, fontWeight: 700, color: "#0F172A", fontFamily: "Inter, sans-serif" }}
                >
                  {item.cost}
                </span>
              </div>
              <div style={{ height: 4, background: "#E2E8F0", borderRadius: 4 }}>
                <div
                  style={{
                    height: "100%",
                    width: `${item.pct}%`,
                    background: item.color,
                    borderRadius: 4,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      number: "03",
      title: tr.how.steps[2].title,
      description: tr.how.steps[2].desc,
      tags: tr.how.steps[2].tags,
      icon: <img src={asset("/07.png")} alt="Optimiza" style={{ width: 28, height: 28, objectFit: "contain" }} />,
      visual: (
        <div
          style={{
            background: "#F8FAFC",
            borderRadius: 10,
            border: "1px solid #E2E8F0",
            padding: "14px 16px",
            marginTop: 16,
          }}
        >
          {[
            { rec: "Rightsizing EC2", saving: "$8,200/mes", effort: "Bajo" },
            { rec: "Reserved Instances", saving: "$6,400/mes", effort: "Medio" },
            { rec: "S3 Lifecycle", saving: "$2,100/mes", effort: "Bajo" },
          ].map((item) => (
            <div
              key={item.rec}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "7px 0",
                borderBottom: "1px solid #E2E8F0",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: "#0F172A",
                    fontFamily: "Inter, sans-serif",
                    marginBottom: 2,
                  }}
                >
                  {item.rec}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    color: "#475569",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {tr.how.steps[2].effort}: {item.effort}
                </div>
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#FE1F3D",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {item.saving}
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section
      id="como-funciona"
      style={{
        backgroundImage: `url('${asset("/bg-gradient.png")}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "120px 0",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 700,
              color: "#023660",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: 16,
            }}
          >
            {tr.how.eyebrow}
          </div>
          <h2
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: "#023660",
              letterSpacing: "-1px",
              marginBottom: 16,
              lineHeight: 1.15,
            }}
          >
            {tr.how.title1}
            <br />
            {tr.how.title2}
          </h2>
          <p style={{ fontSize: 16, color: "#023660", maxWidth: 480, margin: "0 auto" }}>
            {tr.how.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: 16,
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 2px 16px rgba(15,23,42,0.04)",
              }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: 54,
                    right: -36,
                    width: 48,
                    height: 1,
                    background: "rgba(15,23,42,0.1)",
                    zIndex: 10,
                  }}
                />
              )}

              {/* Step number */}
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 900,
                  color: "rgba(2,54,96,0.06)",
                  position: "absolute",
                  top: 16,
                  right: 24,
                  lineHeight: 1,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: "rgba(54,170,193,0.06)",
                  border: "1px solid rgba(54,170,193,0.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                {step.icon}
              </motion.div>

              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#023660",
                  marginBottom: 12,
                  letterSpacing: "-0.3px",
                }}
              >
                {step.title}
              </h3>

              <p style={{ fontSize: 14, lineHeight: 1.65, color: "#023660", marginBottom: 16 }}>
                {step.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 4 }}>
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: "#475569",
                      background: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                      borderRadius: 100,
                      padding: "3px 10px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {step.visual}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
