import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ArrowLeft, Calendar, Clock, Tag, Share2, Facebook, Twitter, Linkedin, Copy, Check } from "lucide-react";
import { Link, useParams } from "react-router";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function BlogPostPage() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="font-sans min-h-screen bg-slate-50">
      <Navbar />

      {/* Article Header (Compact & Professional) */}
      <section className="bg-white pt-32 pb-8 lg:pt-40 lg:pb-12 px-6 lg:px-8 border-b border-slate-200/50">
        <div className="mx-auto max-w-4xl">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#36AAC1] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E7F4F6] text-[#023660] border border-[#36AAC1]/20 tracking-wide uppercase font-bold">
              <Tag className="w-3.5 h-3.5" />
              Guías Prácticas
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              12 Abr 2026
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              Lectura de 5 min
            </span>
          </div>
          
          <h1 className="text-2xl md:text-[38px] font-extrabold tracking-tight text-[#023660] mb-6 leading-tight">
            Cómo implementar una estrategia de etiquetado (Tagging) exitosa en AWS y Azure
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            El primer paso para la madurez FinOps es la visibilidad. Descubre cómo definir una convención de etiquetas que tu equipo de ingeniería realmente utilice, automatice y mantenga a lo largo del tiempo.
          </p>

          <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#023660] to-[#36AAC1] flex items-center justify-center text-white font-bold text-lg shadow-inner">
                DR
              </div>
              <div>
                <p className="text-sm font-bold text-[#023660]">David Ramírez</p>
                <p className="text-xs font-medium text-slate-500">Lead FinOps Practitioner</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline-block">Compartir</span>
              <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#E7F4F6] hover:text-[#36AAC1] transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#E7F4F6] hover:text-[#36AAC1] transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button 
                onClick={handleCopyLink}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${copied ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500 hover:bg-[#E7F4F6] hover:text-[#36AAC1]'}`}
                title="Copiar enlace"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cover Image (Realistic Tech Placeholder) */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 -mt-6 relative z-10">
        <div className="w-full aspect-[21/9] bg-slate-200 rounded-[24px] overflow-hidden shadow-2xl border-4 border-white">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzY4NzQ3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Dashboard interface placeholder"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <section className="py-16 px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto prose prose-lg prose-slate prose-headings:font-extrabold prose-headings:text-[#023660] prose-a:text-[#36AAC1] prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl">
          
          <p className="lead text-xl text-slate-700 font-medium">
            Imagina intentar auditar los gastos de una empresa sin saber qué departamento hizo cada compra. Eso es exactamente lo que sucede cuando operas en la nube sin una estrategia de etiquetado sólida. Las facturas llegan, los números suben, pero nadie sabe exactamente de dónde provienen.
          </p>

          <h2>El problema de la nube no etiquetada</h2>
          <p>
            En los modelos on-premise tradicionales, la adquisición de infraestructura pasaba por largos procesos de aprobación. Hoy, cualquier ingeniero con los permisos adecuados puede levantar miles de dólares en recursos con un simple script de Terraform. 
          </p>
          <p>
            Sin etiquetas (tags), la consola de facturación de AWS (Cost Explorer) o Azure (Cost Management) solo te mostrará gastos por "Servicio" (ej. EC2, RDS, S3). Pero el CFO no quiere saber cuánto gastamos en EC2; quiere saber cuánto cuesta el "Entorno de Producción" vs "Desarrollo", o cuál es el costo real del "Microservicio de Pagos".
          </p>

          <div className="bg-[#E7F4F6]/50 border-l-4 border-[#36AAC1] p-6 rounded-r-xl my-8">
            <h4 className="text-[#023660] m-0 mb-2 font-bold flex items-center gap-2">
              <Tag className="w-5 h-5 text-[#36AAC1]" /> 
              El estándar FOCUS
            </h4>
            <p className="text-sm text-slate-600 m-0">
              Te recomendamos alinear tu estrategia de etiquetas con el FinOps Open Cost & Usage Specification (FOCUS). Utilizar nombres de dimensiones estandarizados facilitará la vida de tu equipo de datos al crear reportes multi-nube.
            </p>
          </div>

          <h2>1. Las Etiquetas Obligatorias (The Big Three)</h2>
          <p>
            No intentes implementar 20 etiquetas desde el día uno. Fracasará. Los ingenieros se frustrarán y los pipelines de CI/CD se romperán. Comienza con estas tres dimensiones críticas:
          </p>

          <ul>
            <li><strong><code>CostCenter</code> / <code>BusinessUnit</code>:</strong> ¿Quién paga por esto? (Ej. Marketing, Ingeniería, Data)</li>
            <li><strong><code>Environment</code>:</strong> ¿Es este un gasto evitable? (Ej. prod, dev, staging)</li>
            <li><strong><code>Project</code> / <code>Application</code>:</strong> ¿A qué iniciativa pertenece este recurso? (Ej. api-gateway, web-frontend)</li>
          </ul>

          <h2>2. Automatización: Hazlo invisible</h2>
          <p>
            El etiquetado manual es un mito. Si dependes de la memoria humana para etiquetar instancias EC2 a través de la consola web, tus datos financieros siempre estarán sucios.
          </p>
          
          <p>
            La mejor estrategia es integrar el etiquetado directamente en el código de infraestructura (IaC). Si utilizas Terraform, puedes usar la funcionalidad de <code>default_tags</code> a nivel del proveedor:
          </p>

          <pre className="bg-[#023660] text-[#E7F4F6] p-6 rounded-xl overflow-x-auto text-sm my-6 shadow-lg">
            <code>
{`provider "aws" {
  region = "us-east-1"

  default_tags {
    tags = {
      Environment = "production"
      CostCenter  = "engineering"
      ManagedBy   = "terraform"
    }
  }
}`}
            </code>
          </pre>

          <h2>3. Políticas de Control (Guardrails)</h2>
          <p>
            Una vez que tienes las reglas claras y la automatización lista, necesitas políticas coercitivas. En AWS, puedes usar <em>Service Control Policies (SCPs)</em> o <em>Tag Policies</em> para evitar que se creen recursos si no incluyen las etiquetas obligatorias. En Azure, <em>Azure Policy</em> cumple exactamente la misma función.
          </p>

          <p>
            Con CloudAltio, puedes configurar alertas inmediatas en nuestro panel de Gobernanza. Si un recurso se despliega sin la etiqueta <code>Environment</code>, nuestro sistema notificará por Slack al equipo responsable para que lo corrija antes del cierre de mes.
          </p>

          <hr className="my-12 border-slate-200" />

          <h3>Siguientes pasos</h3>
          <p>
            La higiene en la nube no se logra de la noche a la mañana. Comienza auditando tu nivel de cobertura actual (¿Qué porcentaje de tu gasto total está etiquetado?). Tu primera meta debe ser alcanzar un 80% de cobertura en los servicios que representan la mayor parte de tu factura.
          </p>

        </div>
      </section>

      {/* Recommended Articles Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-extrabold text-[#023660]">Sigue aprendiendo</h3>
            <Link to="/blog" className="text-sm font-bold text-[#36AAC1] hover:text-[#023660] transition-colors flex items-center gap-1">
              Ver todos <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Recommendation 1 */}
            <Link to="/blog/derecho-de-piso-kubernetes" className="group flex flex-col sm:flex-row gap-6 bg-slate-50 rounded-[20px] p-4 hover:bg-[#E7F4F6]/40 transition-colors border border-transparent hover:border-[#36AAC1]/20">
              <div className="w-full sm:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0 bg-slate-200">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1770012977129-19f856a1f935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGludGVyZmFjZSUyMGRhcmt8ZW58MXx8fHwxNzc2ODc0NzM2fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Software interface thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold text-[#36AAC1] uppercase tracking-wider mb-2">Casos de Uso</span>
                <h4 className="text-lg font-bold text-[#023660] mb-2 leading-tight group-hover:text-[#36AAC1] transition-colors">
                  Derecho de piso: Reduciendo el desperdicio en entornos de Kubernetes
                </h4>
                <span className="text-xs font-medium text-slate-500">Lectura de 8 min</span>
              </div>
            </Link>

            {/* Recommendation 2 */}
            <Link to="/blog/showback-chargeback-cultura" className="group flex flex-col sm:flex-row gap-6 bg-slate-50 rounded-[20px] p-4 hover:bg-[#E7F4F6]/40 transition-colors border border-transparent hover:border-[#36AAC1]/20">
              <div className="w-full sm:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0 bg-slate-200">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBjaGFydCUyMHNjcmVlbnxlbnwxfHx8fDE3NzY4NzQ3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Analytics chart thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold text-[#FE1F3D] uppercase tracking-wider mb-2">Cultura FinOps</span>
                <h4 className="text-lg font-bold text-[#023660] mb-2 leading-tight group-hover:text-[#FE1F3D] transition-colors">
                  Showback vs Chargeback: Transformando la cultura de ingeniería
                </h4>
                <span className="text-xs font-medium text-slate-500">Lectura de 6 min</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}