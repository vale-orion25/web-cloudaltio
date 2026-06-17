import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ArrowRight, Tag, Box, PieChart, ShieldAlert, Zap, BellRing, Calendar, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function BlogPage() {
  const posts = [
    {
      id: 1,
      slug: "estrategia-etiquetado-aws-azure",
      title: "Cómo implementar una estrategia de etiquetado (Tagging) exitosa en AWS y Azure",
      excerpt: "El primer paso para la madurez FinOps es la visibilidad. Descubre cómo definir una convención de etiquetas que tu equipo de ingeniería realmente utilice y mantenga.",
      category: "Guías Prácticas",
      date: "12 Abr 2026",
      readingTime: "5 min",
      image: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzY4NzQ3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      slug: "derecho-de-piso-kubernetes",
      title: "Derecho de piso: Reduciendo el desperdicio en entornos de Kubernetes",
      excerpt: "Un análisis profundo sobre las recomendaciones de capacidad (rightsizing) en clústeres de EKS y GKE para maximizar el uso de recursos sin afectar el rendimiento.",
      category: "Casos de Uso",
      date: "28 Mar 2026",
      readingTime: "8 min",
      image: "https://images.unsplash.com/photo-1770012977129-19f856a1f935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGludGVyZmFjZSUyMGRhcmt8ZW58MXx8fHwxNzc2ODc0NzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      slug: "showback-chargeback-cultura",
      title: "Showback vs Chargeback: Transformando la cultura de ingeniería",
      excerpt: "La tecnología es solo la mitad del reto. Aprende a crear reportes de Showback que fomenten la responsabilidad financiera en los equipos de desarrollo.",
      category: "Cultura FinOps",
      date: "15 Mar 2026",
      readingTime: "6 min",
      image: "https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBjaGFydCUyMHNjcmVlbnxlbnwxfHx8fDE3NzY4NzQ3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      slug: "instancias-reservadas-savings-plans",
      title: "Instancias Reservadas y Savings Plans: Errores matemáticos comunes",
      excerpt: "Comprar capacidad reservada puede ahorrar hasta un 70%, pero un mal cálculo genera compromisos vacíos. Qué métricas revisar antes de comprometer capital.",
      category: "Optimización",
      date: "02 Mar 2026",
      readingTime: "7 min",
      image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzc2Nzc1OTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 5,
      slug: "arquitectura-serverless-factura",
      title: "El impacto de la arquitectura Serverless en tu factura mensual",
      excerpt: "Migrar a Lambda o Cloud Run cambia el modelo de costos de fijo a variable. Estrategias para monitorear el gasto por ejecución y evitar facturas sorpresa.",
      category: "Arquitectura Cloud",
      date: "18 Feb 2026",
      readingTime: "4 min",
      image: "https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NzY4NzQ3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 6,
      slug: "alertas-anomalias-gasto",
      title: "Alertas de anomalías: Detectando picos de gasto en tiempo real",
      excerpt: "Configurar alertas dinámicas basadas en el comportamiento histórico para detener despliegues erróneos o scripts en bucle antes de que consuman el presupuesto mensual.",
      category: "Gobernanza",
      date: "05 Feb 2026",
      readingTime: "5 min",
      image: "https://images.unsplash.com/photo-1748439435495-722cc1728b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyYXBoJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3Njg3NDczNnww&ixlib=rb-4.1.0&q=80&w=1080",
    }
  ];

  return (
    <div className="font-sans min-h-screen bg-slate-50">
      <Navbar />

      {/* Compact Intro */}
      <section className="bg-white pt-32 pb-12 lg:pt-40 lg:pb-16 px-6 lg:px-8 text-center border-b border-slate-200/50">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E7F4F6] px-3 py-1 mb-6 border border-[#36AAC1]/20">
            <BookOpen className="w-3.5 h-3.5 text-[#36AAC1]" />
            <span className="text-xs font-semibold text-[#023660] tracking-wide uppercase">Recursos & Blog</span>
          </div>
          
          <h1 className="text-2xl md:text-[29px] font-extrabold tracking-tight text-[#023660] mb-6 leading-tight">
            Conocimiento táctico para tu nube
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Estrategias de FinOps, guías de optimización arquitectónica y casos de uso reales para equipos de ingeniería y finanzas.
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
                      Leer artículo
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
              Cargar más artículos
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-24" style={{ background: "linear-gradient(90deg, #003d80 0%, #7f2f8c 50%, #fb2e50 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Mantente actualizado en FinOps
          </h2>
          <p className="text-lg text-white/75 mb-8 max-w-xl mx-auto">
            Recibe nuestras mejores guías y casos de uso de optimización cloud directamente en tu bandeja de entrada una vez al mes.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="tu@empresa.com"
              className="flex-grow px-5 py-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent backdrop-blur-sm"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#023660] font-bold hover:bg-white/90 shadow-lg transition-all sm:w-auto w-full"
            >
              Suscribirme
            </button>
          </form>
          <p className="text-xs text-white/50 mt-4">
            Cero spam. Solo contenido técnico de alto valor.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}