import { Link } from "react-router";
import { asset } from "@/lib/asset";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { tr } = useLanguage();
  const links = tr.footer.cols;

  return (
    <footer style={{
      background: "#F8FAFC",
      borderTop: "1px solid #E2E8F0",
      padding: "64px 0 40px",
      fontFamily: "Inter, sans-serif",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        {/* Top */}
        <div style={{ display: "grid", gridTemplateColumns: "1.8fr repeat(3, 1fr)", gap: 48, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <Link to="/" style={{ display: "inline-block", marginBottom: 16 }}>
              <img src={asset("/Logo-CloudAltio-color-by-Orion.png")} alt="CloudAltio by Orión" style={{ height: 44, width: "auto", display: "block" }} />
            </Link>
            <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.7, maxWidth: 240, marginBottom: 24 }}>
              {tr.footer.tagline}
            </p>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/cloudaltio"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 36, height: 36, borderRadius: 8,
                background: "#0A66C2", border: "none",
                color: "#FFFFFF", transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#004182"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#0A66C2"; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#0F172A", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>
                {category}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    style={{ fontSize: 13, color: "#475569", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#0F172A"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#475569"; }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 24, borderTop: "1px solid #E2E8F0" }}>
          <span style={{ fontSize: 12, color: "#94a3b8" }}>{tr.footer.copyright}</span>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(54,170,193,0.07)", border: "1px solid rgba(54,170,193,0.18)",
            borderRadius: 6, padding: "4px 10px",
          }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#94a3b8" }} />
            <span style={{ fontSize: 10, fontWeight: 600, color: "#475569" }}>{tr.footer.fmBadge}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
