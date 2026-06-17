import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Globe } from "lucide-react";
import { asset } from "@/lib/asset";
import { useLanguage, Lang } from "@/lib/i18n";

export function Navbar() {
  const { tr, lang, setLang } = useLanguage();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ctaHover, setCtaHover] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: tr.nav.home, href: "/" },
    { label: tr.nav.platform, href: "/plataforma" },
    { label: tr.nav.finops, href: "/finops" },
    { label: tr.nav.integrations, href: "/integraciones" },
    { label: tr.nav.plans, href: "/planes" },
    { label: tr.nav.blog, href: "/blog" },
  ];

  const mobileOnlyLinks = [
    { label: tr.nav.contact, href: "/contacto" },
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
            src={scrolled ? asset("/Logo-CloudAltio-color.png") : asset("/Logo-CloudAltio-bn.png")}
            alt="CloudAltio by Orión"
            style={{ height: 28, width: "auto", display: "block", transition: "opacity 0.3s" }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="navbar-desktop-nav hidden md:flex" style={{ alignItems: "center", gap: 6 }}>
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            const activeColor = scrolled ? "#023660" : "#ffffff";
            const activeBg = scrolled ? "rgba(2,54,96,0.1)" : "rgba(255,255,255,0.22)";
            return (
              <Link
                key={link.label}
                to={link.href}
                style={{
                  fontSize: 14,
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? activeColor : linkColor,
                  textDecoration: "none",
                  padding: "8px 16px",
                  borderRadius: 100,
                  background: isActive ? activeBg : "transparent",
                  transition: "color 0.2s, background 0.2s, font-weight 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = linkHoverColor;
                  (e.currentTarget as HTMLElement).style.background = linkHoverBg;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = isActive ? activeColor : linkColor;
                  (e.currentTarget as HTMLElement).style.background = isActive ? activeBg : "transparent";
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA Actions */}
        <div className="navbar-desktop-nav hidden md:flex" style={{ alignItems: "center", gap: 16 }}>
          {/* Language selector */}
          <div ref={langRef} style={{ position: "relative" }}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              style={{
                display: "flex", alignItems: "center", gap: 4,
                background: "transparent", border: "none", cursor: "pointer",
                padding: "6px 8px", borderRadius: 8,
                color: linkColor, transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = linkHoverBg; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              <Globe size={15} />
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.04em" }}>{lang.toUpperCase()}</span>
            </button>
            {langOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 8px)", right: 0,
                background: "#ffffff", border: "1px solid #E2E8F0",
                borderRadius: 10, boxShadow: "0 8px 24px rgba(15,23,42,0.1)",
                overflow: "hidden", minWidth: 130, zIndex: 200,
              }}>
                {[
                  { code: "ES", label: "Español" },
                  { code: "EN", label: "English" },
                ].map((item) => (
                  <a
                    key={item.code}
                    href="#"
                    onClick={(e) => { e.preventDefault(); setLang(item.code.toLowerCase() as Lang); setLangOpen(false); }}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "10px 14px", textDecoration: "none",
                      fontSize: 13, fontWeight: 500, color: "#023660",
                      background: lang.toUpperCase() === item.code ? "rgba(2,54,96,0.04)" : "transparent",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(2,54,96,0.06)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = lang.toUpperCase() === item.code ? "rgba(2,54,96,0.04)" : "transparent"; }}
                  >
                    {item.label}
                    {lang.toUpperCase() === item.code && <span style={{ fontSize: 10, fontWeight: 700, color: "#7f2f8c" }}>✓</span>}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a
            href="https://cloudaltio.com/es/"
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
            {tr.nav.login}
          </a>
          <Link
            to={`/contacto?motivo=${encodeURIComponent("Hola, me gustaría solicitar una demo de CloudAltio.")}`}
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
            {tr.nav.demo}
          </Link>
        </div>

        {/* Mobile: globe + hamburger */}
        <div className="md:hidden flex items-center gap-1">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: scrolled ? "#023660" : "#ffffff",
              padding: 8, borderRadius: 8,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "color 0.4s ease",
            }}
            aria-label="Cambiar idioma"
          >
            <Globe size={20} />
          </button>
          <button
            className="navbar-mobile-btn"
            onClick={() => setMobileOpen((v) => !v)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: scrolled ? "#023660" : "#ffffff",
              padding: 8, borderRadius: 8,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "color 0.4s ease",
            }}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontSize: 15,
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#023660" : "#334155",
                    textDecoration: "none",
                    padding: "12px 16px",
                    borderRadius: 10,
                    background: isActive ? "rgba(2,54,96,0.07)" : "transparent",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(2,54,96,0.05)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = isActive ? "rgba(2,54,96,0.07)" : "transparent"; }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #E2E8F0", display: "flex", flexDirection: "column", gap: 10 }}>
            <a
              href="https://cloudaltio.com/es/"
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: 14, fontWeight: 600, color: "#023660", textDecoration: "none",
                padding: "12px 16px", borderRadius: 10, textAlign: "center",
                border: "1.5px solid #023660",
              }}
            >
              {tr.nav.login}
            </a>
            <Link
              to="/contacto"
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
              {tr.nav.contact}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
