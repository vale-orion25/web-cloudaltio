import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { Newspaper, Mail, Target, LogOut, ChevronRight } from "lucide-react";
import { asset } from "@/lib/asset";

const navMain = [
  { to: "/admin/blog", icon: <Newspaper className="w-4 h-4" />, label: "Blog" },
  { to: "/admin/newsletter", icon: <Mail className="w-4 h-4" />, label: "Newsletter" },
];

const navSoon = [
  { icon: <Target className="w-4 h-4" />, label: "Leads" },
];

export function AdminLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("ca_admin_auth")) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("ca_admin_auth");
    navigate("/admin/login");
  };

  return (
    <div className="flex h-screen bg-[#F0F4F8] overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Sidebar */}
      <aside className="w-60 flex-shrink-0 flex flex-col bg-white border-r border-slate-200/80 shadow-sm">
        {/* Logo area — brand gradient strip */}
        <div
          className="px-5 py-5 border-b border-white/20"
          style={{ background: "linear-gradient(100deg, #003d80 0%, #7f2f8c 55%, #fb2e50 100%)" }}
        >
          <img
            src={asset("/Logo-CloudAltio-bn.png")}
            alt="CloudAltio"
            className="h-7 w-auto object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <div
            className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Admin Portal
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-5 space-y-0.5">
          <div className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Módulos
          </div>

          {navMain.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all group ${
                  isActive
                    ? "text-white shadow-md"
                    : "text-slate-500 hover:text-[#023660] hover:bg-[#023660]/6"
                }`
              }
              style={({ isActive }) =>
                isActive
                  ? { background: "linear-gradient(100deg, #003d80, #7f2f8c 100%)" }
                  : {}
              }
            >
              {item.icon}
              <span>{item.label}</span>
              <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-50 transition-opacity" />
            </NavLink>
          ))}

          <div className="pt-4 pb-1.5 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300">
            Próximamente
          </div>

          {navSoon.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-slate-300 cursor-not-allowed select-none"
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div className="px-3 py-4 border-t border-slate-100">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:text-[#FE1F3D] hover:bg-red-50 transition-all w-full group"
          >
            <LogOut className="w-4 h-4" />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
