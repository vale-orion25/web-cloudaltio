import { useState } from "react";
import { useSearchParams } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { asset } from "@/lib/asset";
import { ArrowRight, Mail, MapPin, MessageSquare } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function ContactPage() {
  const { tr } = useLanguage();
  const [searchParams] = useSearchParams();
  const motivo = searchParams.get("motivo") || "";
  const [form, setForm] = useState({ name: "", email: "", company: "", country: "", clouds: [] as string[], message: motivo });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#F8FAFC", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <div className="pt-28 pb-16 px-6 md:px-10 text-center" style={{
        backgroundImage: `url('${asset("/bg-gradient.png")}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#023660", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>
          {tr.contact.eyebrow}
        </div>
        <h1 className="text-4xl md:text-5xl" style={{ fontWeight: 800, color: "#023660", letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: 16 }}>
          {tr.contact.title}
        </h1>
        <p style={{ fontSize: 17, color: "#023660", opacity: 0.65, maxWidth: 500, margin: "0 auto" }}>
          {tr.contact.subtitle}
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 md:gap-16 px-6 md:px-10 py-16 md:py-24" style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Left: info */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#023660", marginBottom: 12, letterSpacing: "-0.3px" }}>
              {tr.contact.howHelp}
            </h2>
            <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.75 }}>
              {tr.contact.howHelpDesc}
            </p>
          </div>

          {[
            { icon: <Mail size={18} />, title: tr.contact.emailLabel, value: "hola@cloudaltio.com" },
            { icon: <MapPin size={18} />, title: tr.contact.locationLabel, value: tr.contact.locationVal },
            { icon: <MessageSquare size={18} />, title: tr.contact.responseLabel, value: tr.contact.responseVal },
          ].map((item) => (
            <div key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                background: "linear-gradient(135deg, rgba(251,46,80,0.08), rgba(0,61,128,0.08))",
                border: "1px solid rgba(127,47,140,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#7f2f8c",
              }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: "#023660", fontWeight: 500 }}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: form */}
        <div className="p-6 sm:p-10" style={{
          background: "#FFFFFF",
          borderRadius: 20,
          boxShadow: "0 4px 32px rgba(15,23,42,0.08)",
          border: "1px solid #E2E8F0",
        }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{
                width: 56, height: 56, borderRadius: "50%", margin: "0 auto 20px",
                background: "linear-gradient(135deg, #fb2e50, #003d80)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#023660", marginBottom: 10 }}>{tr.contact.sentTitle}</h3>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}>
                {tr.contact.sentDesc}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 16 }}>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "#023660", display: "block", marginBottom: 8 }}>{tr.contact.name}</label>
                  <input
                    type="text" required placeholder={tr.contact.namePlh}
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #E2E8F0", fontSize: 14, color: "#023660", fontFamily: "Inter, sans-serif", outline: "none", boxSizing: "border-box" }}
                    onFocus={(e) => { e.target.style.borderColor = "#7f2f8c"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#E2E8F0"; }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "#023660", display: "block", marginBottom: 8 }}>{tr.contact.email}</label>
                  <input
                    type="email" required placeholder={tr.contact.emailPlh}
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #E2E8F0", fontSize: 14, color: "#023660", fontFamily: "Inter, sans-serif", outline: "none", boxSizing: "border-box" }}
                    onFocus={(e) => { e.target.style.borderColor = "#7f2f8c"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#E2E8F0"; }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 16 }}>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "#023660", display: "block", marginBottom: 8 }}>{tr.contact.company}</label>
                  <input
                    type="text" placeholder={tr.contact.companyPlh}
                    value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #E2E8F0", fontSize: 14, color: "#023660", fontFamily: "Inter, sans-serif", outline: "none", boxSizing: "border-box" }}
                    onFocus={(e) => { e.target.style.borderColor = "#7f2f8c"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#E2E8F0"; }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "#023660", display: "block", marginBottom: 8 }}>{tr.contact.country}</label>
                  <select
                    value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #E2E8F0", fontSize: 14, color: form.country ? "#023660" : "#94a3b8", fontFamily: "Inter, sans-serif", outline: "none", boxSizing: "border-box", background: "#fff", appearance: "none", cursor: "pointer" }}
                    onFocus={(e) => { e.target.style.borderColor = "#7f2f8c"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#E2E8F0"; }}
                  >
                    <option value="">{tr.contact.countryPlh}</option>
                    {["Argentina","Bolivia","Brasil","Chile","Colombia","Costa Rica","Cuba","Ecuador","El Salvador","Guatemala","Honduras","México","Nicaragua","Panamá","Paraguay","Perú","Puerto Rico","República Dominicana","Uruguay","Venezuela","Otro"].map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: "#023660", display: "block", marginBottom: 10 }}>{tr.contact.clouds}</label>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {[
                    { id: "AWS", label: "AWS" },
                    { id: "Azure", label: "Azure" },
                    { id: "GCP", label: "Google Cloud" },
                    { id: "OCI", label: "Oracle Cloud" },
                  ].map((cloud) => {
                    const selected = form.clouds.includes(cloud.id);
                    return (
                      <button
                        key={cloud.id}
                        type="button"
                        onClick={() => setForm({
                          ...form,
                          clouds: selected
                            ? form.clouds.filter((c) => c !== cloud.id)
                            : [...form.clouds, cloud.id],
                        })}
                        style={{
                          padding: "8px 16px",
                          borderRadius: 100,
                          fontSize: 13,
                          fontWeight: 600,
                          fontFamily: "Inter, sans-serif",
                          cursor: "pointer",
                          transition: "all 0.15s",
                          border: selected ? "1.5px solid #7f2f8c" : "1.5px solid #E2E8F0",
                          background: selected ? "linear-gradient(90deg, rgba(251,46,80,0.08), rgba(0,61,128,0.08))" : "#F8FAFC",
                          color: selected ? "#7f2f8c" : "#64748b",
                        }}
                      >
                        {cloud.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: "#023660", display: "block", marginBottom: 8 }}>{tr.contact.message}</label>
                <textarea
                  required placeholder={tr.contact.messagePlh}
                  rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #E2E8F0", fontSize: 14, color: "#023660", fontFamily: "Inter, sans-serif", outline: "none", resize: "none", boxSizing: "border-box" }}
                  onFocus={(e) => { e.target.style.borderColor = "#7f2f8c"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#E2E8F0"; }}
                />
              </div>

              <button
                type="submit"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  background: "linear-gradient(90deg, #003d80 0%, #7f2f8c 50%, #fb2e50 100%)",
                  color: "#FFFFFF", fontSize: 14, fontWeight: 700,
                  padding: "14px 28px", borderRadius: 100,
                  border: "none", cursor: "pointer", fontFamily: "Inter, sans-serif",
                  boxShadow: "0 4px 20px rgba(127,47,140,0.25)",
                }}
              >
                {tr.contact.send} <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
