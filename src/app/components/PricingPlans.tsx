import React from 'react';
import { CheckCircle2, ArrowRight, Zap, Building2, Globe } from 'lucide-react';

const plans = [
  {
    icon: Zap,
    name: 'Starter',
    tagline: 'Para equipos que empiezan su viaje FinOps',
    description: 'Ideal para empresas con uno o dos clouds activos que quieren ganar visibilidad sin complejidad.',
    features: [
      'Hasta 2 clouds conectados',
      'Dashboard unificado multi-cloud',
      'Alertas básicas de presupuesto',
      'Historial de 90 días',
      'Reportes estándar',
      'Soporte por email',
    ],
    cta: 'Solicitar demo',
    highlighted: false,
    color: '#2D7FF9',
    gradient: 'rgba(45,127,249,0.06)',
    border: 'rgba(45,127,249,0.15)',
  },
  {
    icon: Building2,
    name: 'Growth',
    tagline: 'Para operaciones cloud en crecimiento',
    description: 'La opción más elegida por empresas que necesitan control, forecast y optimización activa.',
    features: [
      'Hasta 4 clouds conectados',
      'Todo lo de Starter, más:',
      'Detección de anomalías en tiempo real',
      'Forecast y proyecciones a 90 días',
      'Recomendaciones de optimización',
      'Atribución por equipo y proyecto',
      'Reportes personalizados',
      'Soporte dedicado',
    ],
    cta: 'Solicitar demo',
    highlighted: true,
    color: '#00CFFF',
    gradient: 'rgba(0,207,255,0.06)',
    border: 'rgba(0,207,255,0.25)',
  },
  {
    icon: Globe,
    name: 'Enterprise',
    tagline: 'Para organizaciones con múltiples cuentas',
    description: 'Control total, integraciones avanzadas y soporte enterprise para organizaciones complejas.',
    features: [
      'Clouds y cuentas ilimitadas',
      'Todo lo de Growth, más:',
      'Multi-cuenta y multi-organización',
      'SSO / SAML enterprise',
      'Integraciones custom (Jira, Slack, etc.)',
      'API y exportación de datos',
      'SLA garantizado',
      'Customer Success Manager',
    ],
    cta: 'Hablar con ventas',
    highlighted: false,
    color: '#8B5CF6',
    gradient: 'rgba(139,92,246,0.06)',
    border: 'rgba(139,92,246,0.15)',
  },
];

export function PricingPlans() {
  return (
    <section
      id="planes"
      style={{
        background: '#060E22',
        padding: '120px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(45,127,249,0.04) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 1000,
        height: 400,
        background: 'radial-gradient(ellipse at center, rgba(45,127,249,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
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
            <span style={{ fontSize: 12, color: '#2D7FF9', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Planes</span>
          </div>

          <h2 style={{
            fontSize: 42,
            fontWeight: 700,
            color: '#E8F0FE',
            letterSpacing: '-0.025em',
            lineHeight: 1.15,
            marginBottom: 16,
          }}>
            El nivel de control que<br />tu empresa necesita
          </h2>

          <p style={{ fontSize: 16, color: '#94A3B8', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Sin contratos complejos. Sin costos ocultos. Hablemos de tu caso y encontramos el plan ideal.
          </p>
        </div>

        {/* Plans Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <div
                key={i}
                style={{
                  background: plan.highlighted
                    ? `linear-gradient(180deg, ${plan.gradient} 0%, rgba(0,207,255,0.02) 100%)`
                    : `linear-gradient(180deg, ${plan.gradient} 0%, transparent 100%)`,
                  border: `1px solid ${plan.border}`,
                  borderRadius: 24,
                  padding: '40px 36px',
                  position: 'relative',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: plan.highlighted
                    ? '0 0 60px rgba(0,207,255,0.08), 0 20px 40px rgba(0,0,0,0.3)'
                    : 'none',
                }}
                onMouseEnter={e => {
                  if (!plan.highlighted) {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Popular badge */}
                {plan.highlighted && (
                  <div style={{
                    position: 'absolute',
                    top: -14,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #00CFFF, #2D7FF9)',
                    color: '#fff',
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '5px 16px',
                    borderRadius: 99,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}>
                    Más elegido
                  </div>
                )}

                {/* Icon & Name */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `rgba(${
                      plan.color === '#2D7FF9' ? '45,127,249' :
                      plan.color === '#00CFFF' ? '0,207,255' : '139,92,246'
                    },0.12)`,
                    border: `1px solid ${plan.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon style={{ width: 20, height: 20, color: plan.color }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: '#E8F0FE' }}>{plan.name}</div>
                    <div style={{ fontSize: 12, color: plan.color, fontWeight: 500 }}>{plan.tagline}</div>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 20 }} />

                {/* Description */}
                <p style={{
                  fontSize: 14,
                  color: '#94A3B8',
                  lineHeight: 1.6,
                  marginBottom: 24,
                }}>
                  {plan.description}
                </p>

                {/* Features */}
                <div style={{ flex: 1, marginBottom: 32 }}>
                  {plan.features.map((feat, j) => (
                    <div key={j} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 10,
                      marginBottom: 10,
                    }}>
                      <CheckCircle2 style={{
                        width: 15, height: 15,
                        color: j === 1 && plan.name !== 'Starter' ? '#526480' : plan.color,
                        flexShrink: 0, marginTop: 1,
                        opacity: j === 1 && plan.name !== 'Starter' ? 0.5 : 1,
                      }} />
                      <span style={{
                        fontSize: 13,
                        color: j === 1 && plan.name !== 'Starter' ? '#526480' : '#C8D8F0',
                        lineHeight: 1.4,
                        fontStyle: j === 1 && plan.name !== 'Starter' ? 'italic' : 'normal',
                      }}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    padding: '13px 20px',
                    borderRadius: 12,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    background: plan.highlighted
                      ? 'linear-gradient(135deg, #00CFFF, #2D7FF9)'
                      : 'transparent',
                    color: plan.highlighted ? '#fff' : plan.color,
                    border: plan.highlighted ? 'none' : `1px solid ${plan.border}`,
                    boxShadow: plan.highlighted ? '0 0 24px rgba(0,207,255,0.3)' : 'none',
                  }}
                  onMouseEnter={e => {
                    if (plan.highlighted) {
                      e.currentTarget.style.boxShadow = '0 0 36px rgba(0,207,255,0.5)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    } else {
                      e.currentTarget.style.background = `rgba(${
                        plan.color === '#2D7FF9' ? '45,127,249' : '139,92,246'
                      },0.08)`;
                    }
                  }}
                  onMouseLeave={e => {
                    if (plan.highlighted) {
                      e.currentTarget.style.boxShadow = '0 0 24px rgba(0,207,255,0.3)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    } else {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {plan.cta} <ArrowRight style={{ width: 15, height: 15 }} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p style={{ textAlign: 'center', marginTop: 40, fontSize: 13, color: '#526480' }}>
          ¿Necesitas algo específico? <a href="#demo" style={{ color: '#2D7FF9', textDecoration: 'none' }}>Hablemos y diseñamos una solución a tu medida.</a>
        </p>
      </div>
    </section>
  );
}
