import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  Plus, Edit2, Trash2, Send, Clock, Calendar, Users, BarChart2, Mail, UserMinus, UserPlus, X,
} from "lucide-react";
import { mockCampaigns } from "../../mockData";
import { Campaign, CampaignStatus } from "../../types";
import { getSubscribers, addSubscriber, removeSubscriber, Subscriber } from "@/lib/subscribers";

const statusConfig: Record<CampaignStatus, { label: string; className: string }> = {
  sent:      { label: "Enviado",    className: "bg-green-100 text-green-700 border-green-200" },
  scheduled: { label: "Programado", className: "bg-blue-100 text-blue-700 border-blue-200" },
  draft:     { label: "Borrador",   className: "bg-slate-100 text-slate-600 border-slate-200" },
};

export function NewsletterList() {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState<Campaign[]>(mockCampaigns);
  const [filter, setFilter] = useState<"all" | CampaignStatus>("all");
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [sentNow, setSentNow] = useState<number | null>(null);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [tab, setTab] = useState<"campaigns" | "subscribers">("campaigns");
  const [showAddModal, setShowAddModal] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [addError, setAddError] = useState("");

  useEffect(() => {
    setSubscribers(getSubscribers());
  }, [tab]);

  const filtered = campaigns.filter((c) => filter === "all" || c.status === filter);

  const handleDelete = (id: number) => {
    setCampaigns((prev) => prev.filter((c) => c.id !== id));
    setDeleteId(null);
  };

  const handleSendNow = (id: number) => {
    setSentNow(id);
    setTimeout(() => {
      setCampaigns((prev) => prev.map((c) =>
        c.id === id ? { ...c, status: "sent" as CampaignStatus, date: new Date().toLocaleDateString("es-CL", { day: "2-digit", month: "short", year: "numeric" }) } : c
      ));
      setSentNow(null);
    }, 1500);
  };

  const handleRemoveSubscriber = (email: string) => {
    removeSubscriber(email);
    setSubscribers(getSubscribers());
  };

  const handleAddSubscriber = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = addSubscriber(newEmail.trim());
    if (!ok) {
      setAddError("Este correo ya está en la lista.");
      return;
    }
    setSubscribers(getSubscribers());
    setNewEmail("");
    setAddError("");
    setShowAddModal(false);
  };

  return (
    <div className="p-8" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-1 h-7 rounded-full" style={{ background: "linear-gradient(180deg, #003d80, #7f2f8c, #fb2e50)" }} />
            <h1 className="text-2xl font-bold text-[#023660]">Newsletter</h1>
          </div>
          <p className="text-slate-400 text-sm ml-4">Gestiona las campañas y suscriptores de CloudAltio.</p>
        </div>
        <button
          onClick={() => navigate("/admin/newsletter/nuevo")}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-bold hover:scale-105 active:scale-95 transition-all"
          style={{ background: "#023660", boxShadow: "0 4px 16px rgba(2,54,96,0.2)" }}
        >
          <Plus className="w-4 h-4" />
          Nueva campaña
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: "Enviadas",    icon: <Send className="w-5 h-5" />,  color: "#023660" },
          { label: "Borradores",  icon: <Edit2 className="w-5 h-5" />, color: "#7f2f8c" },
          { label: "Programadas", icon: <Clock className="w-5 h-5" />, color: "#36AAC1" },
          {
            label: "Suscriptores",
            icon: <Users className="w-5 h-5" />,
            color: "#FE1F3D",
            value: subscribers.length > 0 ? subscribers.length.toLocaleString() : null,
          },
        ].map((m) => (
          <div key={m.label} className="bg-white rounded-2xl border border-slate-200 p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: m.color + "12", color: m.color }}>
              {m.icon}
            </div>
            <div className="min-w-0">
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">{m.label}</div>
              {"value" in m && m.value !== null
                ? <div className="text-xl font-bold text-[#023660]">{m.value}</div>
                : <div className="h-5 w-10 rounded bg-slate-100 mt-1" />
              }
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-white border border-slate-200 rounded-xl p-1 w-fit mb-6">
        <button
          onClick={() => setTab("campaigns")}
          className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${tab === "campaigns" ? "bg-[#023660] text-white shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
        >
          Campañas
        </button>
        <button
          onClick={() => { setTab("subscribers"); setSubscribers(getSubscribers()); }}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${tab === "subscribers" ? "bg-[#023660] text-white shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
        >
          Suscriptores
          {subscribers.length > 0 && (
            <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${tab === "subscribers" ? "bg-white/20 text-white" : "bg-[#023660]/10 text-[#023660]"}`}>
              {subscribers.length}
            </span>
          )}
        </button>
      </div>

      {tab === "campaigns" ? (
        <>
          {/* Campaign filter */}
          <div className="flex gap-1 bg-slate-100 rounded-lg p-0.5 w-fit mb-5">
            {(["all", "sent", "scheduled", "draft"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${filter === f ? "bg-white text-[#023660] shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
              >
                {f === "all" ? "Todas" : f === "sent" ? "Enviadas" : f === "scheduled" ? "Programadas" : "Borradores"}
              </button>
            ))}
          </div>

          {/* Campaigns table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="text-left px-6 py-3.5 text-xs font-medium text-slate-400 uppercase tracking-wide">Nombre / Asunto</th>
                  <th className="text-left px-4 py-3.5 text-xs font-medium text-slate-400 uppercase tracking-wide">Fecha</th>
                  <th className="text-left px-4 py-3.5 text-xs font-medium text-slate-400 uppercase tracking-wide">Estado</th>
                  <th className="text-left px-4 py-3.5 text-xs font-medium text-slate-400 uppercase tracking-wide">Destinatarios</th>
                  <th className="text-left px-4 py-3.5 text-xs font-medium text-slate-400 uppercase tracking-wide">Apertura</th>
                  <th className="px-4 py-3.5" />
                </tr>
              </thead>
              <tbody>
                {filtered.map((campaign, i) => (
                  <tr key={campaign.id} className={`border-b border-slate-50 hover:bg-slate-50/50 transition-colors ${i === filtered.length - 1 ? "border-b-0" : ""}`}>
                    <td className="px-6 py-4">
                      <div className="font-bold text-[#023660] text-sm leading-snug">{campaign.name}</div>
                      <div className="text-xs text-slate-400 mt-0.5 truncate max-w-[280px]">{campaign.subject}</div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {campaign.date || <span className="text-slate-300">—</span>}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest border ${statusConfig[campaign.status].className}`}>
                        {statusConfig[campaign.status].label}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        {subscribers.length > 0 ? subscribers.length.toLocaleString() : <span className="text-slate-300">0</span>}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-1.5 text-sm font-bold">
                        {campaign.openRate !== "-" ? (
                          <><BarChart2 className="w-3.5 h-3.5 text-[#36AAC1]" /><span style={{ color: "#023660" }}>{campaign.openRate}</span></>
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2 justify-end">
                        {campaign.status !== "sent" && (
                          <button
                            onClick={() => handleSendNow(campaign.id)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95 ${sentNow === campaign.id ? "bg-green-100 text-green-700" : "text-[#FE1F3D] bg-[#FE1F3D]/8 hover:bg-[#FE1F3D]/15"}`}
                          >
                            <Send className="w-3.5 h-3.5" />
                            {sentNow === campaign.id ? "Enviando..." : "Enviar"}
                          </button>
                        )}
                        <button
                          onClick={() => navigate(`/admin/newsletter/${campaign.id}/editar`)}
                          className="flex items-center justify-center p-1.5 rounded-lg text-slate-400 hover:text-[#023660] hover:bg-slate-100 active:scale-95 transition-all"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setDeleteId(campaign.id)}
                          className="flex items-center justify-center p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 active:scale-95 transition-all"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-20 text-center text-slate-400">
                      <Mail className="w-12 h-12 mx-auto mb-4 opacity-30" />
                      <p className="font-semibold">No hay campañas en esta categoría</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        /* Subscribers list */
        <>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-slate-500">
              {subscribers.length > 0 ? `${subscribers.length} suscriptor${subscribers.length !== 1 ? "es" : ""}` : ""}
            </p>
            <button
              onClick={() => { setShowAddModal(true); setAddError(""); setNewEmail(""); }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white active:scale-95 transition-all"
              style={{ background: "#023660", boxShadow: "0 4px 16px rgba(2,54,96,0.2)" }}
            >
              <UserPlus className="w-4 h-4" /> Agregar manualmente
            </button>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          {subscribers.length === 0 ? (
            <div className="py-24 text-center text-slate-400">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="font-semibold text-slate-500">Aún no hay suscriptores</p>
              <p className="text-sm text-slate-400 mt-1 max-w-xs mx-auto">
                Los correos ingresados en el formulario del blog aparecerán aquí automáticamente.
              </p>
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="text-left px-6 py-3.5 text-xs font-medium text-slate-400 uppercase tracking-wide">Email</th>
                  <th className="text-left px-4 py-3.5 text-xs font-medium text-slate-400 uppercase tracking-wide">Fecha de suscripción</th>
                  <th className="px-4 py-3.5" />
                </tr>
              </thead>
              <tbody>
                {subscribers.map((s, i) => (
                  <tr key={s.email} className={`border-b border-slate-50 hover:bg-slate-50/50 transition-colors ${i === subscribers.length - 1 ? "border-b-0" : ""}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0"
                          style={{ background: "linear-gradient(135deg, #003d80, #7f2f8c)" }}
                        >
                          {s.email[0].toUpperCase()}
                        </div>
                        <span className="text-sm font-semibold text-[#023660]">{s.email}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {s.date}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex justify-end">
                        <button
                          onClick={() => handleRemoveSubscriber(s.email)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-red-500 hover:bg-red-50 active:scale-95 transition-all"
                        >
                          <UserMinus className="w-3.5 h-3.5" /> Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          </div>
        </>
      )}

      {/* Add subscriber modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-[#023660]">Agregar suscriptor</h3>
                <p className="text-xs text-slate-400 mt-0.5">El correo se añadirá a la lista inmediatamente.</p>
              </div>
              <button onClick={() => setShowAddModal(false)} className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleAddSubscriber} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-500 uppercase tracking-widest mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => { setNewEmail(e.target.value); setAddError(""); }}
                  placeholder="nombre@empresa.com"
                  required
                  autoFocus
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                    addError ? "border-red-300 focus:ring-red-200" : "border-slate-200 focus:ring-[#023660]/25 focus:border-[#023660]"
                  }`}
                />
                {addError && <p className="text-xs text-red-500 mt-1.5">{addError}</p>}
              </div>
              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 active:scale-95 transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-sm font-bold active:scale-95 transition-all"
                  style={{ background: "#023660" }}
                >
                  <UserPlus className="w-4 h-4" /> Agregar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete campaign modal */}
      {deleteId !== null && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-4">
              <Trash2 className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-[#023660] mb-2">Eliminar campaña</h3>
            <p className="text-sm text-slate-500 mb-6">Esta acción no se puede deshacer.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)} className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 active:scale-95 transition-all">
                Cancelar
              </button>
              <button onClick={() => handleDelete(deleteId)} className="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-bold hover:bg-red-600 active:scale-95 transition-all shadow-lg shadow-red-500/20">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
