import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ctaHover, setCtaHover] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Plataforma", href: "/plataforma" },
    { label: "FinOps", href: "/finops" },
    { label: "Integraciones", href: "/integraciones" },
    { label: "Planes", href: "/planes" },
    { label: "Blog", href: "/blog" },
  ];

  const linkColor = scrolled ? "#64748b" : "rgba(255,255,255,0.9)";
  const linkHoverColor = scrolled ? "#023660" : "#ffffff";
  const linkHoverBg = scrolled ? "rgba(2,54,96,0.06)" : "rgba(255,255,255,0.15)";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled
          ? "rgba(255,255,255,0.95)"
          : "linear-gradient(90deg, #fb2e50 0%, #7f2f8c 50%, #003d80 100%)",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #E2E8F0" : "none",
        boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
        fontFamily: "Inter, sans-serif",
        transition: "background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo: color en blanco, degradé en blanco/negro */}
        <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src={scrolled ? "/Logo-CloudAltio-color.png" : "/Logo-CloudAltio-bn.png"}
            alt="CloudAltio by Orión"
            style={{ height: 28, width: "auto", display: "block", transition: "opacity 0.3s" }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="navbar-desktop-nav hidden md:flex" style={{ alignItems: "center", gap: 6 }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: linkColor,
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: 100,
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = linkHoverColor;
                (e.currentTarget as HTMLElement).style.background = linkHoverBg;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = linkColor;
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Actions */}
        <div className="navbar-desktop-nav hidden md:flex" style={{ alignItems: "center", gap: 20 }}>
          <Link
            to="/login"
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: linkColor,
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = linkHoverColor; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = linkColor; }}
          >
            Ingresar
          </Link>
          <Link
            to="/demo"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#fff",
              textDecoration: "none",
              background: ctaHover ? "#d81932" : "#FE1F3D",
              padding: "10px 22px",
              borderRadius: 100,
              boxShadow: ctaHover
                ? "0 6px 24px rgba(254,31,61,0.45)"
                : "0 4px 20px rgba(254,31,61,0.3)",
              transition: "background 0.2s, box-shadow 0.2s, transform 0.15s",
              transform: ctaHover ? "translateY(-1px)" : "translateY(0)",
              display: "inline-block",
            }}
            onMouseEnter={() => setCtaHover(true)}
            onMouseLeave={() => setCtaHover(false)}
          >
            Solicitar demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="navbar-mobile-btn md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: scrolled ? "#023660" : "#ffffff",
            padding: 8,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          style={{
            background: "rgba(255,255,255,0.98)",
            borderTop: "1px solid #E2E8F0",
            padding: "16px 24px 24px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#023660",
                  textDecoration: "none",
                  padding: "12px 16px",
                  borderRadius: 10,
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(2,54,96,0.05)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #E2E8F0", display: "flex", flexDirection: "column", gap: 10 }}>
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "#64748b",
                textDecoration: "none",
                padding: "12px 16px",
                borderRadius: 10,
                textAlign: "center",
                border: "1px solid #E2E8F0",
              }}
            >
              Ingresar
            </Link>
            <Link
              to="/demo"
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#fff",
                textDecoration: "none",
                background: "#FE1F3D",
                padding: "13px 16px",
                borderRadius: 100,
                textAlign: "center",
                boxShadow: "0 4px 20px rgba(254,31,61,0.3)",
              }}
            >
              Solicitar demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
