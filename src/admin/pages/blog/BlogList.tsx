import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Plus, Edit2, Copy, Trash2, Eye, Clock, Calendar, BookOpen,
} from "lucide-react";
import { mockArticles } from "../../mockData";
import { Article, ArticleStatus } from "../../types";

const statusConfig: Record<ArticleStatus, { label: string; className: string }> = {
  published: { label: "Publicado", className: "bg-green-100 text-green-700 border-green-200" },
  draft:     { label: "Borrador",  className: "bg-slate-100 text-slate-600 border-slate-200" },
};

export function BlogList() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>(mockArticles);
  const [filter, setFilter] = useState<"all" | ArticleStatus>("all");
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const filtered = articles.filter((a) => filter === "all" || a.status === filter);

  const handleDelete = (id: number) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
    setDeleteId(null);
  };

  const handleDuplicate = (article: Article) => {
    setArticles((prev) => [
      {
        ...article,
        id: Date.now(),
        title: `${article.title} (copia)`,
        slug: `${article.slug}-copia`,
        status: "draft",
        date: "",
        views: 0,
      },
      ...prev,
    ]);
  };

  return (
    <div className="p-8" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-1 h-7 rounded-full" style={{ background: "linear-gradient(180deg, #003d80, #7f2f8c, #fb2e50)" }} />
            <h1 className="text-2xl font-bold text-[#023660]">Blog</h1>
          </div>
          <p className="text-slate-400 text-sm ml-4">Gestiona los artículos publicados en CloudAltio.</p>
        </div>
        <button
          onClick={() => navigate("/admin/blog/nuevo")}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-bold hover:scale-105 active:scale-95 transition-all"
          style={{ background: "#023660", boxShadow: "0 4px 16px rgba(2,54,96,0.2)" }}
        >
          <Plus className="w-4 h-4" />
          Nuevo artículo
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Publicados",        icon: <BookOpen className="w-5 h-5" />, color: "#023660" },
          { label: "Borradores",        icon: <Edit2 className="w-5 h-5" />,   color: "#7f2f8c" },
          { label: "Artículo más leído", icon: <Eye className="w-5 h-5" />,    color: "#FE1F3D" },
        ].map((m) => (
          <div key={m.label} className="bg-white rounded-2xl border border-slate-200 p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: m.color + "12", color: m.color }}>
              {m.icon}
            </div>
            <div className="min-w-0">
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">{m.label}</div>
              <div className="h-5 w-10 rounded bg-slate-100" />
            </div>
          </div>
        ))}
      </div>

      {/* Filter tabs */}
      <div className="flex gap-1 bg-white border border-slate-200 rounded-xl p-1 w-fit mb-6">
        {(["all", "published", "draft"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filter === f ? "bg-[#023660] text-white shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {f === "all" ? "Todos" : f === "published" ? "Publicados" : "Borradores"}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50">
              <th className="text-left px-6 py-3.5 text-xs font-medium text-slate-400 uppercase tracking-wide">Artículo</th>
              <th className="text-left px-4 py-3.5 text-xs font-medium text-slate-400 uppercase tracking-wide">Fecha</th>
              <th className="text-left px-4 py-3.5 text-xs font-medium text-slate-400 uppercase tracking-wide">Estado</th>
              <th className="text-left px-4 py-3.5 text-xs font-medium text-slate-400 uppercase tracking-wide">Categoría</th>
              <th className="text-left px-4 py-3.5 text-xs font-medium text-slate-400 uppercase tracking-wide">Lectura</th>
              <th className="text-left px-4 py-3.5 text-xs font-medium text-slate-400 uppercase tracking-wide">Vistas</th>
              <th className="px-4 py-3.5" />
            </tr>
          </thead>
          <tbody>
            {filtered.map((article, i) => (
              <tr
                key={article.id}
                className={`border-b border-slate-50 hover:bg-slate-50/50 transition-colors ${i === filtered.length - 1 ? "border-b-0" : ""}`}
              >
                {/* Article */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-10 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                      {article.image ? (
                        <img src={article.image} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <BookOpen className="w-4 h-4 text-slate-300" />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-[#023660] text-sm leading-snug truncate max-w-[280px]">{article.title}</div>
                      <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-1.5">
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center text-white text-[8px] font-semibold flex-shrink-0"
                          style={{ background: "linear-gradient(135deg, #023660, #36AAC1)" }}
                        >
                          {article.authorInitials}
                        </span>
                        {article.author}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Date */}
                <td className="px-4 py-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {article.date || <span className="text-slate-300">—</span>}
                  </div>
                </td>

                {/* Status */}
                <td className="px-4 py-4">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest border ${statusConfig[article.status].className}`}>
                    {statusConfig[article.status].label}
                  </span>
                </td>

                {/* Category */}
                <td className="px-4 py-4">
                  <span className="text-xs text-slate-600 font-medium">{article.category}</span>
                </td>

                {/* Reading time */}
                <td className="px-4 py-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {article.readingTime}
                  </div>
                </td>

                {/* Views */}
                <td className="px-4 py-4">
                  <div className="flex items-center gap-1.5 text-sm font-bold" style={{ color: article.views > 0 ? "#023660" : undefined }}>
                    {article.views > 0 ? (
                      <>
                        <Eye className="w-3.5 h-3.5 text-[#36AAC1]" />
                        {article.views.toLocaleString()}
                      </>
                    ) : (
                      <span className="text-slate-300">—</span>
                    )}
                  </div>
                </td>

                {/* Actions */}
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2 justify-end">
                    <button
                      onClick={() => navigate(`/admin/blog/${article.id}/editar`)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-[#023660] bg-[#023660]/8 hover:bg-[#023660]/15 active:scale-95 transition-all"
                    >
                      <Edit2 className="w-3.5 h-3.5" /> Editar
                    </button>
                    <button
                      onClick={() => handleDuplicate(article)}
                      className="flex items-center justify-center p-1.5 rounded-lg text-slate-400 hover:text-[#023660] hover:bg-slate-100 active:scale-95 transition-all"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setDeleteId(article.id)}
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
                <td colSpan={7} className="px-6 py-20 text-center text-slate-400">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
                  <p className="font-semibold">No hay artículos en esta categoría</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Delete modal */}
      {deleteId !== null && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-4">
              <Trash2 className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-[#023660] mb-2">Eliminar artículo</h3>
            <p className="text-sm text-slate-500 mb-6">Esta acción no se puede deshacer. ¿Confirmas que deseas eliminar este artículo?</p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 active:scale-95 transition-all"
              >
                Cancelar
              </button>
              <button
                onClick={() => handleDelete(deleteId)}
                className="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-bold hover:bg-red-600 active:scale-95 transition-all shadow-lg shadow-red-500/20"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
