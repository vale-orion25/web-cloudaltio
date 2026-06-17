import { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import {
  ArrowLeft, Save, Send, Clock, Users, AlertCircle, CheckCircle, X, Eye, Code,
} from "lucide-react";
import { mockCampaigns, mockArticles } from "../../mockData";
import { Campaign } from "../../types";
import { getSubscribers } from "@/lib/subscribers";

type ActionState = "idle" | "saving" | "saved" | "sending-test" | "sent-test" | "scheduling" | "scheduled" | "sending" | "sent";

const DEFAULT_TEMPLATE = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Newsletter CloudAltio</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;">
    <tr><td align="center" style="padding:32px 16px;">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:600px;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(100deg,#003d80 0%,#7f2f8c 55%,#fb2e50 100%);padding:28px 40px;">
            <div style="color:#ffffff;font-size:22px;font-weight:900;letter-spacing:-0.5px;">CloudAltio</div>
            <div style="color:rgba(255,255,255,0.55);font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:3px;margin-top:4px;">Newsletter FinOps</div>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <h1 style="color:#023660;font-size:24px;font-weight:900;margin:0 0 16px;line-height:1.2;">
              Título del artículo principal
            </h1>
            <p style="color:#475569;font-size:15px;line-height:1.75;margin:0 0 20px;">
              Escribe aquí la introducción del newsletter. Este párrafo debe enganchar al lector y resumir el valor del contenido que va a encontrar.
            </p>
            <p style="color:#475569;font-size:15px;line-height:1.75;margin:0 0 32px;">
              Añade contexto adicional, los puntos clave del artículo, o una pregunta que invite a la reflexión del equipo de ingeniería.
            </p>

            <!-- Highlight box -->
            <div style="background:#e7f4f6;border-left:4px solid #36AAC1;border-radius:0 12px 12px 0;padding:16px 20px;margin:0 0 32px;">
              <div style="color:#023660;font-size:13px;font-weight:700;margin-bottom:6px;">💡 Dato clave</div>
              <div style="color:#334155;font-size:13px;line-height:1.6;">
                Agrega aquí una estadística, insight o tip que quieras destacar de forma especial.
              </div>
            </div>

            <!-- CTA button -->
            <div style="text-align:center;margin:32px 0;">
              <a href="https://cloudaltio.com/blog" style="display:inline-block;background:linear-gradient(100deg,#003d80,#7f2f8c 60%,#fb2e50);color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:14px 36px;border-radius:12px;letter-spacing:0.3px;">
                Leer artículo completo
              </a>
            </div>
          </td>
        </tr>

        <!-- Divider -->
        <tr>
          <td style="padding:0 40px;">
            <div style="border-top:1px solid #e2e8f0;"></div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;padding:24px 40px;text-align:center;">
            <p style="color:#94a3b8;font-size:12px;margin:0 0 8px;">
              <strong style="color:#64748b;">CloudAltio</strong> · Plataforma FinOps para Latinoamérica
            </p>
            <p style="color:#94a3b8;font-size:11px;margin:0;">
              <a href="https://cloudaltio.com" style="color:#94a3b8;text-decoration:none;">cloudaltio.com</a>
              &nbsp;·&nbsp;
              <a href="#" style="color:#94a3b8;text-decoration:none;">Cancelar suscripción</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

export function NewsletterEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = !id;
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const existing = id ? mockCampaigns.find((c) => c.id === parseInt(id)) : null;
  const subscriberCount = getSubscribers().length;

  const [form, setForm] = useState<Partial<Campaign>>({
    name: existing?.name || "",
    subject: existing?.subject || "",
    preheader: existing?.preheader || "",
    recipients: subscriberCount,
    relatedArticle: existing?.relatedArticle || "",
    content: existing?.content || DEFAULT_TEMPLATE,
    cta: existing?.cta || "Leer artículo completo",
    status: existing?.status || "draft",
  });

  const [action, setAction] = useState<ActionState>("idle");
  const [editorTab, setEditorTab] = useState<"html" | "preview">("html");
  const [scheduleDate, setScheduleDate] = useState("");
  const [showSchedule, setShowSchedule] = useState(false);
  const [showTestModal, setShowTestModal] = useState(false);
  const [testEmail, setTestEmail] = useState("");

  const set = (key: keyof Campaign, val: string | number) =>
    setForm((p) => ({ ...p, [key]: val }));

  const runAction = (state: ActionState, next: ActionState, delay: number, after?: () => void) => {
    setAction(state);
    setTimeout(() => {
      setAction(next);
      after?.();
      setTimeout(() => setAction("idle"), 2500);
    }, delay);
  };

  const handleSaveDraft = () => runAction("saving", "saved", 700);

  const handleSendTest = (e: React.FormEvent) => {
    e.preventDefault();
    setShowTestModal(false);
    runAction("sending-test", "sent-test", 1200);
    setTestEmail("");
  };

  const handleSchedule = () => {
    if (!scheduleDate) return;
    setShowSchedule(false);
    runAction("scheduling", "scheduled", 1000, () => navigate("/admin/newsletter"));
  };

  const handleSendNow = () => runAction("sending", "sent", 1200, () => navigate("/admin/newsletter"));

  return (
    <div className="p-8 max-w-5xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => navigate("/admin/newsletter")} className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-100 active:scale-95 transition-all">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-1 h-5 rounded-full" style={{ background: "linear-gradient(180deg, #003d80, #fb2e50)" }} />
            <h1 className="text-xl font-bold text-[#023660]">{isNew ? "Nueva campaña" : "Editar campaña"}</h1>
          </div>
          <p className="text-slate-400 text-xs mt-0.5 ml-3.5">{isNew ? "Diseña y programa tu próximo email." : `Editando: ${existing?.name}`}</p>
        </div>

        {/* Action buttons */}
        <div className="ml-auto flex gap-2 flex-wrap justify-end">
          {/* Save draft */}
          <button
            onClick={handleSaveDraft}
            disabled={action !== "idle"}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-bold transition-all active:scale-95 disabled:opacity-50 ${
              action === "saved" ? "bg-green-50 border-green-300 text-green-700" : "border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            {action === "saved" ? <CheckCircle className="w-4 h-4" /> : <Save className="w-4 h-4" />}
            {action === "saving" ? "Guardando..." : action === "saved" ? "¡Guardado!" : "Guardar"}
          </button>

          {/* Send test — opens modal */}
          <button
            onClick={() => setShowTestModal(true)}
            disabled={action !== "idle"}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-bold transition-all active:scale-95 disabled:opacity-50 ${
              action === "sent-test" ? "bg-blue-50 border-blue-300 text-blue-700" : "border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            {action === "sent-test" ? <CheckCircle className="w-4 h-4" /> : <Send className="w-4 h-4" />}
            {action === "sending-test" ? "Enviando..." : action === "sent-test" ? "¡Prueba enviada!" : "Enviar prueba"}
          </button>

          {/* Schedule */}
          <div className="relative">
            <button
              onClick={() => setShowSchedule((s) => !s)}
              disabled={action !== "idle"}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-bold transition-all active:scale-95 disabled:opacity-50 ${
                action === "scheduled" ? "bg-blue-50 border-blue-300 text-blue-700" : "border-[#023660] text-[#023660] hover:bg-[#023660]/5"
              }`}
            >
              {action === "scheduled" ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
              {action === "scheduling" ? "Programando..." : action === "scheduled" ? "¡Programado!" : "Programar"}
            </button>
            {showSchedule && (
              <div className="absolute top-full mt-2 right-0 bg-white rounded-2xl border border-slate-200 shadow-xl p-4 z-20 w-64">
                <div className="text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Fecha y hora de envío</div>
                <input
                  type="datetime-local"
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#023660]/20 focus:border-[#023660] transition-all mb-3"
                />
                <button
                  onClick={handleSchedule}
                  disabled={!scheduleDate}
                  className="w-full py-2 rounded-xl text-white text-sm font-bold disabled:opacity-50 active:scale-95 transition-all"
                  style={{ background: "linear-gradient(90deg, #023660, #7f2f8c)" }}
                >
                  Confirmar
                </button>
              </div>
            )}
          </div>

          {/* Send now */}
          <button
            onClick={handleSendNow}
            disabled={action !== "idle"}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 ${action === "sent" ? "bg-green-500" : ""}`}
            style={action === "sent" ? {} : { background: "#023660", boxShadow: "0 4px 16px rgba(2,54,96,0.2)" }}
          >
            {action === "sent" ? <CheckCircle className="w-4 h-4" /> : <Send className="w-4 h-4" />}
            {action === "sending" ? "Enviando..." : action === "sent" ? "¡Enviado!" : "Enviar ahora"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left: content */}
        <div className="col-span-2 space-y-5">
          {/* Subject */}
          <div>
            <label className="block text-xs font-medium text-slate-400 uppercase tracking-widest mb-1.5">Asunto del email</label>
            <input
              type="text"
              value={form.subject}
              onChange={(e) => set("subject", e.target.value)}
              placeholder="Escribe un asunto atractivo..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#023660] font-bold text-base placeholder:text-slate-300 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#023660]/20 focus:border-[#023660] transition-all"
            />
          </div>

          {/* Preheader */}
          <div>
            <label className="block text-xs font-medium text-slate-400 uppercase tracking-widest mb-1.5">
              Preheader
              <span className="ml-2 font-normal normal-case text-slate-400">Texto previo en la bandeja de entrada</span>
            </label>
            <input
              type="text"
              value={form.preheader}
              onChange={(e) => set("preheader", e.target.value)}
              placeholder="Texto de vista previa..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#023660]/20 focus:border-[#023660] transition-all"
            />
          </div>

          {/* Related article */}
          <div>
            <label className="block text-xs font-medium text-slate-400 uppercase tracking-widest mb-1.5">Artículo relacionado</label>
            <select
              value={form.relatedArticle}
              onChange={(e) => set("relatedArticle", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#023660]/20 focus:border-[#023660] transition-all"
            >
              <option value="">Sin artículo relacionado</option>
              {mockArticles.filter((a) => a.status === "published").map((a) => (
                <option key={a.id} value={a.title}>{a.title}</option>
              ))}
            </select>
          </div>

          {/* HTML Editor */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-medium text-slate-400 uppercase tracking-widest">Editor de contenido</label>
              <div className="flex gap-0.5 bg-slate-100 rounded-lg p-0.5">
                <button
                  onClick={() => setEditorTab("html")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-all ${editorTab === "html" ? "bg-white text-[#023660] shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                >
                  <Code className="w-3 h-3" /> HTML
                </button>
                <button
                  onClick={() => setEditorTab("preview")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-all ${editorTab === "preview" ? "bg-white text-[#023660] shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                >
                  <Eye className="w-3 h-3" /> Vista previa
                </button>
              </div>
            </div>

            {editorTab === "html" ? (
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className="bg-[#011e38] px-4 py-2 flex items-center gap-2 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <span className="w-3 h-3 rounded-full bg-green-400/70" />
                  </div>
                  <span className="text-white/30 text-xs font-mono ml-2">email-template.html</span>
                </div>
                <textarea
                  value={form.content}
                  onChange={(e) => set("content", e.target.value)}
                  rows={24}
                  spellCheck={false}
                  className="w-full px-5 py-4 bg-[#022a4a] text-[#a8d8ea] text-xs font-mono leading-relaxed focus:outline-none resize-none"
                  style={{ tabSize: 2 }}
                />
              </div>
            ) : (
              <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-100">
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Vista previa del email</span>
                  </div>
                  <span className="text-xs text-slate-300">600px</span>
                </div>
                <iframe
                  ref={iframeRef}
                  srcDoc={form.content}
                  className="w-full bg-white"
                  style={{ height: "560px", border: "none" }}
                  sandbox="allow-same-origin"
                  title="Email preview"
                />
              </div>
            )}
          </div>
        </div>

        {/* Right: config */}
        <div className="space-y-4">
          {/* Campaign name */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <label className="block text-xs font-medium text-slate-400 uppercase tracking-widest mb-3">Nombre de campaña</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Ej: Newsletter Julio 2025"
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#023660]/20 focus:border-[#023660] transition-all"
            />
          </div>

          {/* Recipients */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <label className="block text-xs font-medium text-slate-400 uppercase tracking-widest mb-3">Destinatarios</label>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
              <Users className="w-5 h-5 text-[#023660]" />
              <div>
                <div className="text-sm font-semibold text-[#023660]">
                  {subscriberCount > 0 ? `${subscriberCount.toLocaleString()} suscriptores` : "Sin suscriptores aún"}
                </div>
                <div className="text-xs text-slate-400">Lista completa</div>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-3 flex items-start gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
              La segmentación estará disponible próximamente.
            </p>
          </div>

          {/* Status */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <label className="block text-xs font-medium text-slate-400 uppercase tracking-widest mb-3">Estado actual</label>
            <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border ${
              form.status === "sent" ? "bg-green-100 text-green-700 border-green-200" :
              form.status === "scheduled" ? "bg-blue-100 text-blue-700 border-blue-200" :
              "bg-slate-100 text-slate-600 border-slate-200"
            }`}>
              {form.status === "sent" ? "Enviado" : form.status === "scheduled" ? "Programado" : "Borrador"}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-gradient-to-br from-[#023660]/5 to-[#7f2f8c]/5 rounded-2xl border border-[#023660]/10 p-5">
            <div className="text-xs font-semibold text-[#023660] uppercase tracking-widest mb-3">Buenas prácticas</div>
            <ul className="space-y-2">
              {[
                "Asunto menor a 50 caracteres",
                "Prueba antes de enviar",
                "Mejor horario: mar–jue 9–11 AM",
                "Incluye siempre un CTA claro",
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-xs text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#36AAC1] mt-1.5 flex-shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Send test modal ─────────────────────────────────────────── */}
      {showTestModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-[#023660]">Enviar prueba</h3>
                <p className="text-xs text-slate-400 mt-0.5">Te enviaremos el email exactamente como lo recibirán tus suscriptores.</p>
              </div>
              <button onClick={() => setShowTestModal(false)} className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleSendTest} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-500 uppercase tracking-widest mb-2">
                  Correo de destino
                </label>
                <input
                  type="email"
                  value={testEmail}
                  onChange={(e) => setTestEmail(e.target.value)}
                  placeholder="tu@empresa.com"
                  required
                  autoFocus
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#023660]/25 focus:border-[#023660] focus:bg-white transition-all"
                />
              </div>
              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setShowTestModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 active:scale-95 transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-sm font-bold active:scale-95 transition-all"
                  style={{ background: "#023660" }}
                >
                  <Send className="w-4 h-4" /> Enviar prueba
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
