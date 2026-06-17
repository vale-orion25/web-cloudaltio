import { useState, useRef, useCallback } from "react";
import { useNavigate, useParams } from "react-router";
import {
  ArrowLeft, Save, Send, Bold, Italic, List, Link2, Quote, Code,
  Heading1, Heading2, Heading3, Image as ImageIcon, ListOrdered, Upload,
  Tag, Calendar, Clock, User,
} from "lucide-react";
import { mockArticles, mockCategories } from "../../mockData";
import { Article } from "../../types";

function RichEditor({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const editorRef = useRef<HTMLDivElement>(null);

  const exec = useCallback((command: string, val?: string) => {
    document.execCommand(command, false, val);
    editorRef.current?.focus();
    if (editorRef.current) onChange(editorRef.current.innerHTML);
  }, [onChange]);

  const toolbarBtns = [
    { icon: <Heading1 className="w-4 h-4" />, label: "H1", action: () => exec("formatBlock", "h1") },
    { icon: <Heading2 className="w-4 h-4" />, label: "H2", action: () => exec("formatBlock", "h2") },
    { icon: <Heading3 className="w-4 h-4" />, label: "H3", action: () => exec("formatBlock", "h3") },
    { sep: true },
    { icon: <Bold className="w-4 h-4" />, label: "Negrita", action: () => exec("bold") },
    { icon: <Italic className="w-4 h-4" />, label: "Cursiva", action: () => exec("italic") },
    { sep: true },
    { icon: <List className="w-4 h-4" />, label: "Lista", action: () => exec("insertUnorderedList") },
    { icon: <ListOrdered className="w-4 h-4" />, label: "Lista num.", action: () => exec("insertOrderedList") },
    { sep: true },
    { icon: <Link2 className="w-4 h-4" />, label: "Enlace", action: () => { const url = prompt("URL:"); if (url) exec("createLink", url); } },
    { icon: <Quote className="w-4 h-4" />, label: "Cita", action: () => exec("formatBlock", "blockquote") },
    { icon: <Code className="w-4 h-4" />, label: "Código", action: () => exec("formatBlock", "pre") },
    { icon: <ImageIcon className="w-4 h-4" />, label: "Imagen", action: () => { const url = prompt("URL de imagen:"); if (url) exec("insertImage", url); } },
  ];

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
      <div className="flex items-center gap-0.5 px-3 py-2 border-b border-slate-100 bg-slate-50 flex-wrap">
        {toolbarBtns.map((btn, i) =>
          "sep" in btn ? (
            <div key={i} className="w-px h-5 bg-slate-200 mx-1" />
          ) : (
            <button
              key={btn.label}
              type="button"
              title={btn.label}
              onMouseDown={(e) => { e.preventDefault(); btn.action(); }}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-white hover:text-[#023660] hover:shadow-sm active:scale-90 transition-all"
            >
              {btn.icon}
            </button>
          )
        )}
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        dangerouslySetInnerHTML={{ __html: value }}
        onInput={() => { if (editorRef.current) onChange(editorRef.current.innerHTML); }}
        className="min-h-[380px] p-6 text-slate-700 text-sm leading-relaxed focus:outline-none
          [&_h1]:text-2xl [&_h1]:font-semibold [&_h1]:text-[#023660] [&_h1]:mb-3 [&_h1]:mt-6
          [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#023660] [&_h2]:mb-2 [&_h2]:mt-5
          [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-[#023660] [&_h3]:mb-2 [&_h3]:mt-4
          [&_blockquote]:border-l-4 [&_blockquote]:border-[#36AAC1] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-slate-500 [&_blockquote]:my-4
          [&_pre]:bg-[#023660] [&_pre]:text-[#E7F4F6] [&_pre]:p-4 [&_pre]:rounded-xl [&_pre]:text-xs [&_pre]:font-mono [&_pre]:my-4
          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-3
          [&_a]:text-[#36AAC1] [&_a]:underline [&_img]:rounded-xl [&_img]:my-4 [&_img]:max-w-full
          [&_p]:mb-3"
      />
    </div>
  );
}

export function BlogEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = !id;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const existing = id ? mockArticles.find((a) => a.id === parseInt(id)) : null;

  const [form, setForm] = useState<Partial<Article>>({
    title: existing?.title || "",
    slug: existing?.slug || "",
    excerpt: existing?.excerpt || "",
    category: existing?.category || mockCategories[0],
    date: existing?.date || "",
    readingTime: existing?.readingTime || "5 min",
    image: existing?.image || "",
    author: existing?.author || "",
    authorInitials: existing?.authorInitials || "",
    authorRole: existing?.authorRole || "",
    content: existing?.content || "<p>Escribe aquí el contenido del artículo...</p>",
    status: existing?.status || "draft",
  });

  const [saved, setSaved] = useState(false);
  const [published, setPublished] = useState(false);

  const set = (key: keyof Article, val: string) => {
    setForm((prev) => {
      const next = { ...prev, [key]: val };
      if (key === "title" && isNew) {
        next.slug = val.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
      }
      return next;
    });
  };

  const handleSaveDraft = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handlePublish = () => {
    setPublished(true);
    setTimeout(() => { setPublished(false); navigate("/admin/blog"); }, 1500);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => navigate("/admin/blog")} className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-100 active:scale-95 transition-all">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-1 h-5 rounded-full" style={{ background: "linear-gradient(180deg, #003d80, #fb2e50)" }} />
            <h1 className="text-xl font-bold text-[#023660]">{isNew ? "Nuevo artículo" : "Editar artículo"}</h1>
          </div>
          <p className="text-slate-400 text-xs mt-0.5 ml-3.5">
            {isNew ? "Crea un nuevo artículo para el blog." : `Editando: ${existing?.title}`}
          </p>
        </div>
        <div className="ml-auto flex gap-3">
          <button
            onClick={handleSaveDraft}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-bold transition-all active:scale-95 ${
              saved ? "bg-green-50 border-green-300 text-green-700" : "border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Save className="w-4 h-4" />
            {saved ? "¡Guardado!" : "Guardar borrador"}
          </button>
          <button
            onClick={handlePublish}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95 ${published ? "bg-green-500" : ""}`}
            style={published ? {} : { background: "#023660", boxShadow: "0 4px 16px rgba(2,54,96,0.2)" }}
          >
            <Send className="w-4 h-4" />
            {published ? "¡Publicado!" : "Publicar"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left: main content */}
        <div className="col-span-2 space-y-5">
          {/* Title */}
          <div>
            <label className="block text-xs font-medium text-slate-400 uppercase tracking-widest mb-1.5">Título</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => set("title", e.target.value)}
              placeholder="Título del artículo"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#023660] font-bold text-lg placeholder:text-slate-300 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#023660]/20 focus:border-[#023660] transition-all"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-xs font-medium text-slate-400 uppercase tracking-widest mb-1.5">Slug URL</label>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus-within:ring-2 focus-within:ring-[#023660]/20 focus-within:border-[#023660] transition-all">
              <span className="text-xs text-slate-400 font-mono whitespace-nowrap shrink-0">cloudaltio.com/blog/</span>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => set("slug", e.target.value)}
                className="flex-1 bg-transparent text-sm text-slate-600 font-mono focus:outline-none"
              />
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-xs font-medium text-slate-400 uppercase tracking-widest mb-1.5">Resumen / Excerpt</label>
            <textarea
              rows={3}
              value={form.excerpt}
              onChange={(e) => set("excerpt", e.target.value)}
              placeholder="Descripción breve que aparece en el listado del blog y en SEO..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-600 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#023660]/20 focus:border-[#023660] transition-all resize-none"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-xs font-medium text-slate-400 uppercase tracking-widest mb-1.5">Contenido</label>
            <RichEditor value={form.content || ""} onChange={(v) => setForm((p) => ({ ...p, content: v }))} />
          </div>

          {/* Live preview snippet */}
          {form.title && (
            <div className="border border-slate-200 rounded-2xl overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-100 px-5 py-3 text-xs font-medium text-slate-400 uppercase tracking-widest">
                Vista previa — como aparece en el blog
              </div>
              <div className="p-5 bg-white">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E7F4F6] text-[#023660] border border-[#36AAC1]/20 font-bold uppercase tracking-wide">
                    <Tag className="w-3 h-3" />
                    {form.category || "Categoría"}
                  </span>
                  {form.date && (
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-slate-400" />{form.date}</span>
                  )}
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-400" />Lectura de {form.readingTime}</span>
                </div>
                <h2 className="text-lg font-semibold text-[#023660] mb-2 leading-tight">{form.title}</h2>
                {form.excerpt && <p className="text-sm text-slate-600 leading-relaxed mb-4">{form.excerpt}</p>}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ background: "linear-gradient(135deg, #023660, #36AAC1)" }}
                  >
                    {form.authorInitials || "?"}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#023660]">{form.author}</div>
                    <div className="text-xs text-slate-500">{form.authorRole}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right: metadata */}
        <div className="space-y-4">
          {/* Image destacada */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <label className="block text-xs font-medium text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <ImageIcon className="w-3.5 h-3.5" /> Imagen destacada
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const objectUrl = URL.createObjectURL(file);
                  set("image", objectUrl);
                }
              }}
            />
            {form.image ? (
              <div className="relative group">
                <img src={form.image} alt="" className="w-full h-40 object-cover rounded-xl" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 rounded-xl transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg text-xs font-bold text-[#023660] shadow hover:scale-105 active:scale-95 transition-all"
                  >
                    <Upload className="w-3.5 h-3.5" /> Cambiar
                  </button>
                  <button
                    onClick={() => { set("image", ""); if (fileInputRef.current) fileInputRef.current.value = ""; }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg text-xs font-bold text-red-500 shadow hover:scale-105 active:scale-95 transition-all"
                  >
                    ✕ Quitar
                  </button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="h-40 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#023660]/40 hover:bg-[#023660]/3 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                  <Upload className="w-5 h-5 text-slate-400" />
                </div>
                <span className="text-sm font-semibold text-slate-500">Seleccionar imagen</span>
                <span className="text-xs text-slate-400">PNG, JPG, WebP — hasta 10 MB</span>
              </div>
            )}
          </div>

          {/* Categoría */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <label className="block text-xs font-medium text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" /> Categoría / Etiqueta
            </label>
            <select
              value={form.category}
              onChange={(e) => set("category", e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#023660]/20 focus:border-[#023660] transition-all bg-white"
            >
              {mockCategories.map((c) => <option key={c}>{c}</option>)}
            </select>
            <div className="mt-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E7F4F6] text-[#023660] border border-[#36AAC1]/20 text-xs font-bold uppercase tracking-wide">
                <Tag className="w-3 h-3 text-[#36AAC1]" />
                {form.category}
              </div>
            </div>
          </div>

          {/* Fecha y lectura */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> Fecha de publicación
              </label>
              <input
                type="text"
                value={form.date}
                onChange={(e) => set("date", e.target.value)}
                placeholder="ej: 12 Abr 2026"
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#023660]/20 focus:border-[#023660] transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Tiempo de lectura
              </label>
              <input
                type="text"
                value={form.readingTime}
                onChange={(e) => set("readingTime", e.target.value)}
                placeholder="5 min"
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#023660]/20 focus:border-[#023660] transition-all"
              />
            </div>
          </div>

          {/* Autor */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3">
            <label className="block text-xs font-medium text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" /> Autor
            </label>
            <input
              type="text"
              value={form.author}
              onChange={(e) => {
                const name = e.target.value;
                const initials = name.split(" ").filter(Boolean).map((w) => w[0].toUpperCase()).slice(0, 2).join("");
                setForm((p) => ({ ...p, author: name, authorInitials: initials }));
              }}
              placeholder="Nombre del autor"
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#023660]/20 focus:border-[#023660] transition-all"
            />
            <input
              type="text"
              value={form.authorRole}
              onChange={(e) => set("authorRole", e.target.value)}
              placeholder="Cargo del autor"
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#023660]/20 focus:border-[#023660] transition-all"
            />

            {/* Author preview */}
            {form.author && (
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ background: "linear-gradient(135deg, #023660, #36AAC1)" }}>
                  {form.authorInitials || "?"}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#023660]">{form.author}</div>
                  <div className="text-xs text-slate-500">{form.authorRole || "Cargo"}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
