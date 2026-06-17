import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff, Lock, Mail, AlertCircle, ArrowRight } from "lucide-react";
import { asset } from "@/lib/asset";

export function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    if (email === "admin@cloudaltio.com" && password === "admin123") {
      localStorage.setItem("ca_admin_auth", "true");
      navigate("/admin/blog");
    } else {
      setError("Credenciales incorrectas. Intenta de nuevo.");
    }
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex"
      style={{
        fontFamily: "Inter, sans-serif",
        background: "linear-gradient(135deg, #011e38 0%, #023660 40%, #1a1040 70%, #2d0a1a 100%)",
      }}
    >
      {/* Left panel — branding */}
      <div className="hidden lg:flex flex-col justify-between w-[45%] p-12 relative overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: "#7f2f8c", transform: "translate(-30%, -30%)" }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none" style={{ background: "#fb2e50", transform: "translate(30%, 30%)" }} />
        {/* Dot texture */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        {/* Logo */}
        <div className="relative">
          <img
            src={asset("/Logo-CloudAltio-bn.png")}
            alt="CloudAltio"
            className="h-9 w-auto object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>

        {/* Center content */}
        <div className="relative space-y-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/15"
            style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#36AAC1] animate-pulse" />
            Admin Portal
          </div>
          <h1 className="text-4xl font-black text-white leading-tight">
            Gestiona tu<br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #36AAC1, #7f2f8c, #fb2e50)" }}
            >
              contenido cloud
            </span>
          </h1>
          <p className="text-white/50 text-base leading-relaxed max-w-xs">
            Panel de administración para Blog y Newsletter de CloudAltio.
          </p>

          {/* Feature bullets */}
          <div className="space-y-3 pt-2">
            {["Blog con editor enriquecido", "Newsletter y campañas de email", "Métricas en tiempo real"].map((f) => (
              <div key={f} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #7f2f8c, #fb2e50)" }}>
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="text-sm text-white/60">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom brand strip */}
        <div className="relative">
          <div className="h-px w-full mb-4" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }} />
          <p className="text-white/25 text-xs">
            © 2025 CloudAltio · Orion Global · Uso interno
          </p>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 relative">
        {/* Subtle noise overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

        <div className="relative w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 flex justify-center">
            <img
              src={asset("/Logo-CloudAltio-bn.png")}
              alt="CloudAltio"
              className="h-8 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-black/40 overflow-hidden">
            {/* Card top accent */}
            <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #003d80, #7f2f8c, #fb2e50)" }} />

            <div className="p-8 sm:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-black text-[#023660] mb-1.5">Bienvenido</h2>
                <p className="text-slate-500 text-sm">Ingresa tus credenciales para continuar.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@cloudaltio.com"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#023660]/25 focus:border-[#023660] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-2">
                    Contraseña
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#023660]/25 focus:border-[#023660] focus:bg-white transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-sm text-red-600">{error}</span>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-black text-white text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#7f2f8c]/25 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ background: loading ? "#9ca3af" : "linear-gradient(100deg, #003d80 0%, #7f2f8c 55%, #fb2e50 100%)" }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Verificando...
                    </>
                  ) : (
                    <>
                      Ingresar
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <p className="text-center text-xs text-slate-400 mt-8 pt-6 border-t border-slate-100">
                Demo: <span className="font-mono text-slate-500 font-semibold">admin@cloudaltio.com</span> / <span className="font-mono text-slate-500 font-semibold">admin123</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
