import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ArrowRight, BookOpen, Calendar, Clock, Check } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { addSubscriber } from "@/lib/subscribers";
import { useLanguage } from "@/lib/i18n";

const postImages = [
  "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzY4NzQ3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1770012977129-19f856a1f935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGludGVyZmFjZSUyMGRhcmt8ZW58MXx8fHwxNzc2ODc0NzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBjaGFydCUyMHNjcmVlbnxlbnwxfHx8fDE3NzY4NzQ3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzc2Nzc1OTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NzY4NzQ3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1748439435495-722cc1728b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyYXBoJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3Njg3NDczNnww&ixlib=rb-4.1.0&q=80&w=1080",
];

const postSlugs = [
  "estrategia-etiquetado-aws-azure",
  "derecho-de-piso-kubernetes",
  "showback-chargeback-cultura",
  "instancias-reservadas-savings-plans",
  "arquitectura-serverless-factura",
  "alertas-anomalias-gasto",
];

export function BlogPage() {
  const { tr } = useLanguage();
  const [subEmail, setSubEmail] = useState("");
  const [subState, setSubState] = useState<"idle" | "success" | "duplicate">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const added = addSubscriber(subEmail);
    setSubState(added ? "success" : "duplicate");
    if (added) setSubEmail("");
    setTimeout(() => setSubState("idle"), 3500);
  };

  const posts = tr.blog.posts.map((post, i) => ({
    id: i + 1,
    slug: postSlugs[i],
    image: postImages[i],
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    date: post.date,
    readingTime: post.readingTime,
  }));

  return (
    <div className="font-sans min-h-screen bg-slate-50">
      <Navbar />

      {/* Compact Intro */}
      <section className="bg-white pt-32 pb-12 lg:pt-40 lg:pb-16 px-6 lg:px-8 text-center border-b border-slate-200/50">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E7F4F6] px-3 py-1 mb-6 border border-[#36AAC1]/20">
            <BookOpen className="w-3.5 h-3.5 text-[#36AAC1]" />
            <span className="text-xs font-semibold text-[#023660] tracking-wide uppercase">{tr.blog.badge}</span>
          </div>

          <h1 className="text-2xl md:text-[29px] font-extrabold tracking-tight text-[#023660] mb-6 leading-tight">
            {tr.blog.title}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {tr.blog.subtitle}
          </p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-8 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                to={`/blog/${post.slug}`}
                key={post.id}
                className="group flex flex-col bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-slate-200/80 hover:-translate-y-1"
              >
                {/* Cover Image (Unsplash Realistic UI) */}
                <div className="h-48 w-full relative overflow-hidden bg-slate-200">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle gradient overlay to make text readable if needed, or just category badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#023660]/40 to-transparent mix-blend-multiply"></div>

                  {/* Category Badge over Graphic */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-extrabold tracking-wider text-[#023660] uppercase shadow-sm">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-extrabold text-[#023660] mb-3 leading-tight group-hover:text-[#36AAC1] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-bold text-[#FE1F3D] group-hover:text-[#d81932] transition-colors">
                      {tr.blog.readArticle}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#FE1F3D] group-hover:text-white text-slate-400 transition-colors">
                      <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination / Load More */}
          <div className="mt-16 text-center">
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-[#023660] ring-1 ring-inset ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 transition-all shadow-sm">
              {tr.blog.loadMore}
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-24" style={{ background: "linear-gradient(90deg, #003d80 0%, #7f2f8c 50%, #fb2e50 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {tr.blog.newsletterTitle}
          </h2>
          <p className="text-lg text-white/75 mb-8 max-w-xl mx-auto">
            {tr.blog.newsletterSubtitle}
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={subEmail}
              onChange={(e) => setSubEmail(e.target.value)}
              placeholder={tr.blog.emailPlaceholder}
              required
              disabled={subState === "success"}
              className="flex-grow px-5 py-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent backdrop-blur-sm disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={subState === "success"}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#023660] font-bold hover:bg-white/90 shadow-lg transition-all sm:w-auto w-full disabled:opacity-70"
            >
              {subState === "success" ? <><Check className="w-4 h-4 text-green-600" /> {tr.blog.subscribedBtn}</> : tr.blog.subscribeBtn}
            </button>
          </form>
          <p className="text-xs text-white/50 mt-4 min-h-[1.25rem]">
            {subState === "duplicate"
              ? tr.blog.duplicateEmail
              : tr.blog.noSpam}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
