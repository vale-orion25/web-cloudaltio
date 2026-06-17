import React from 'react';
import { Globe2, Bell, TrendingUp, Lightbulb, FileBarChart2 } from 'lucide-react';

// Mini UI visuals for each capability
function UnifiedVisual() {
  const clouds = [
    { name: 'AWS', val: 51, color: '#FF9900' },
    { name: 'Azure', val: 23, color: '#0EA5E9' },
    { name: 'GCP', val: 16, color: '#4285F4' },
    { name: 'OCI', val: 10, color: '#E8523A' },
  ];
  return (
    <div style={{ padding: '16px', background: '#060E22', borderRadius: 12, border: '1px solid #1A3055' }}>
      <div style={{ fontSize: 9, color: '#526480', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Multi-cloud · Jun 2025</div>
      {clouds.map((c, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span style={{ fontSize: 9, color: '#94A3B8', width: 30 }}>{c.name}</span>
          <div style={{ flex: 1, height: 8, background: '#1A3055', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${c.val * 1.5}%`, background: c.color, borderRadius: 99, opacity: 0.8 }} />
          </div>
          <span style={{ fontSize: 9, color: '#E8F0FE', fontWeight: 600 }}>{c.val}%</span>
        </div>
      ))}
      <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid #1A3055', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 9, color: '#526480' }}>Gasto total</span>
        <span style={{ fontSize: 11, color: '#2D7FF9', fontWeight: 700 }}>$103,740</span>
      </div>
    </div>
  );
}

function AlertsVisual() {
  const alerts = [
    { type: 'critical', text: 'EC2 us-east-1 +43%', time: 'Hace 2h', color: '#EF4444' },
    { type: 'warning', text: 'S3 egress inusual', time: 'Hace 5h', color: '#F59E0B' },
    { type: 'info', text: 'Budget 80% utilizado', time: 'Hace 1d', color: '#2D7FF9' },
  ];
  return (
    <div style={{ padding: '16px', background: '#060E22', borderRadius: 12, border: '1px solid #1A3055' }}>
      <div style={{ fontSize: 9, color: '#526480', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Alertas activas</div>
      {alerts.map((a, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px',
          background: `rgba(${a.color === '#EF4444' ? '239,68,68' : a.color === '#F59E0B' ? '245,158,11' : '45,127,249'},0.06)`,
          border: `1px solid rgba(${a.color === '#EF4444' ? '239,68,68' : a.color === '#F59E0B' ? '245,158,11' : '45,127,249'},0.15)`,
          borderRadius: 8, marginBottom: 6,
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: a.color, flexShrink: 0 }} />
          <span style={{ fontSize: 10, color: '#E8F0FE', flex: 1 }}>{a.text}</span>
          <span style={{ fontSize: 8, color: '#526480' }}>{a.time}</span>
        </div>
      ))}
    </div>
  );
}

function ForecastVisual() {
  const bars = [42, 45, 48, 44, 51, 53, 58, 62];
  const isForecast = [false, false, false, false, false, true, true, true];
  return (
    <div style={{ padding: '16px', background: '#060E22', borderRadius: 12, border: '1px solid #1A3055' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
        <span style={{ fontSize: 9, color: '#526480', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Gasto + Forecast</span>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 8, height: 3, borderRadius: 99, background: '#2D7FF9' }} />
            <span style={{ fontSize: 7, color: '#526480' }}>Real</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 8, height: 3, borderRadius: 99, background: '#00CFFF', opacity: 0.5 }} />
            <span style={{ fontSize: 7, color: '#526480' }}>Forecast</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 60 }}>
        {bars.map((b, i) => (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div style={{
              height: `${(b / 62) * 100}%`,
              background: isForecast[i]
                ? 'linear-gradient(180deg, rgba(0,207,255,0.4), rgba(0,207,255,0.1))'
                : 'linear-gradient(180deg, #2D7FF9, rgba(45,127,249,0.5))',
              borderRadius: '3px 3px 0 0',
              border: isForecast[i] ? '1px dashed rgba(0,207,255,0.3)' : 'none',
            }} />
          </div>
        ))}
      </div>
      <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 8, color: '#526480' }}>Ene</span>
        <span style={{ fontSize: 8, color: '#526480' }}>Ago</span>
      </div>
      <div style={{ marginTop: 8, padding: '6px 10px', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 6 }}>
        <span style={{ fontSize: 9, color: '#F59E0B' }}>⚠ Forecast excede budget en $13.2K</span>
      </div>
    </div>
  );
}

function RecommendationsVisual() {
  const recs = [
    { text: 'Convertir 12 instancias EC2 a Reserved', save: '$4,200' },
    { text: 'Eliminar 8 discos no adjuntos', save: '$890' },
    { text: 'Reducir clase de storage S3', save: '$1,100' },
  ];
  return (
    <div style={{ padding: '16px', background: '#060E22', borderRadius: 12, border: '1px solid #1A3055' }}>
      <div style={{ fontSize: 9, color: '#526480', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Recomendaciones activas</div>
      {recs.map((r, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '8px 10px', background: 'rgba(16,217,140,0.04)', border: '1px solid rgba(16,217,140,0.12)',
          borderRadius: 8, marginBottom: 6,
        }}>
          <span style={{ fontSize: 9, color: '#94A3B8', flex: 1, paddingRight: 8 }}>{r.text}</span>
          <span style={{ fontSize: 10, color: '#10D98C', fontWeight: 700, whiteSpace: 'nowrap' }}>↓ {r.save}</span>
        </div>
      ))}
      <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 8, color: '#526480' }}>Ahorro potencial total</span>
        <span style={{ fontSize: 13, color: '#10D98C', fontWeight: 700 }}>$18,240</span>
      </div>
    </div>
  );
}

function ReportsVisual() {
  const teams = [
    { name: 'Backend', val: 38, color: '#2D7FF9' },
    { name: 'Data', val: 27, color: '#8B5CF6' },
    { name: 'DevOps', val: 22, color: '#00CFFF' },
    { name: 'QA', val: 13, color: '#10D98C' },
  ];
  return (
    <div style={{ padding: '16px', background: '#060E22', borderRadius: 12, border: '1px solid #1A3055' }}>
      <div style={{ fontSize: 9, color: '#526480', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Gasto por equipo</div>
      {teams.map((t, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7 }}>
          <span style={{ fontSize: 9, color: '#94A3B8', width: 44 }}>{t.name}</span>
          <div style={{ flex: 1, height: 6, background: '#1A3055', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${t.val * 2}%`, background: t.color, borderRadius: 99, opacity: 0.8 }} />
          </div>
          <span style={{ fontSize: 9, color: '#E8F0FE', width: 28, textAlign: 'right' }}>{t.val}%</span>
        </div>
      ))}
    </div>
  );
}

const capabilities = [
  {
    icon: Globe2,
    color: '#2D7FF9',
    title: 'Visibilidad unificada multi-cloud',
    description: 'Un único dashboard que consolida AWS, Azure, Google Cloud y Oracle Cloud. Sin cambiar de consola. Sin exportar planillas.',
    visual: <UnifiedVisual />,
  },
  {
    icon: Bell,
    color: '#F59E0B',
    title: 'Alertas y detección de anomalías',
    description: 'Recibe alertas proactivas cuando el gasto supera umbrales, detecta picos inusuales y actúa antes de que la factura sorprenda.',
    visual: <AlertsVisual />,
  },
  {
    icon: TrendingUp,
    color: '#00CFFF',
    title: 'Forecast y proyecciones de gasto',
    description: 'Proyecta el gasto hasta fin de mes y anticipa si vas a superar el budget. Toma decisiones con anticipación, no después.',
    visual: <ForecastVisual />,
  },
  {
    icon: Lightbulb,
    color: '#10D98C',
    title: 'Recomendaciones de optimización',
    description: 'CloudAltio analiza tu uso real y te propone acciones concretas de ahorro: instancias sobredimensionadas, reservas convenientes y más.',
    visual: <RecommendationsVisual />,
  },
  {
    icon: FileBarChart2,
    color: '#8B5CF6',
    title: 'Reportes por servicio, equipo y proyecto',
    description: 'Atribuye costos a equipos, proyectos o áreas de negocio. Genera reportes listos para presentar a dirección o a finanzas.',
    visual: <ReportsVisual />,
  },
];

export function PlatformCapabilities() {
  return (
    <section
      style={{
        background: '#060E22',
        padding: '120px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '50%',
        right: -200,
        transform: 'translateY(-50%)',
        width: 600,
        height: 600,
        background: 'radial-gradient(ellipse, rgba(45,127,249,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: 72 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(45,127,249,0.08)',
            border: '1px solid rgba(45,127,249,0.2)',
            borderRadius: 99,
            padding: '5px 14px',
            marginBottom: 20,
          }}>
            <span style={{ fontSize: 12, color: '#2D7FF9', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Capacidades de la plataforma</span>
          </div>

          <h2 style={{
            fontSize: 42,
            fontWeight: 700,
            color: '#E8F0FE',
            letterSpacing: '-0.025em',
            lineHeight: 1.15,
            maxWidth: 600,
          }}>
            Todo lo que necesitas para gobernar tu gasto cloud
          </h2>
        </div>

        {/* Capabilities - alternating layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            const isEven = i % 2 === 0;

            return (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2"
                style={{
                  gap: 48,
                  alignItems: 'center',
                  background: 'rgba(255,255,255,0.015)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: 24,
                  padding: '40px 48px',
                  transition: 'border-color 0.25s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `rgba(${
                    cap.color === '#2D7FF9' ? '45,127,249' :
                    cap.color === '#F59E0B' ? '245,158,11' :
                    cap.color === '#00CFFF' ? '0,207,255' :
                    cap.color === '#10D98C' ? '16,217,140' : '139,92,246'
                  },0.2)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                }}
              >
                {/* Text side */}
                <div style={{ order: isEven ? 0 : 1 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: `rgba(${
                      cap.color === '#2D7FF9' ? '45,127,249' :
                      cap.color === '#F59E0B' ? '245,158,11' :
                      cap.color === '#00CFFF' ? '0,207,255' :
                      cap.color === '#10D98C' ? '16,217,140' : '139,92,246'
                    },0.1)`,
                    border: `1px solid rgba(${
                      cap.color === '#2D7FF9' ? '45,127,249' :
                      cap.color === '#F59E0B' ? '245,158,11' :
                      cap.color === '#00CFFF' ? '0,207,255' :
                      cap.color === '#10D98C' ? '16,217,140' : '139,92,246'
                    },0.2)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 20,
                  }}>
                    <Icon style={{ width: 22, height: 22, color: cap.color }} />
                  </div>

                  <h3 style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: '#E8F0FE',
                    letterSpacing: '-0.015em',
                    lineHeight: 1.25,
                    marginBottom: 12,
                  }}>
                    {cap.title}
                  </h3>

                  <p style={{
                    fontSize: 15,
                    color: '#94A3B8',
                    lineHeight: 1.7,
                  }}>
                    {cap.description}
                  </p>
                </div>

                {/* Visual side */}
                <div style={{ order: isEven ? 1 : 0 }}>
                  {cap.visual}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
