import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: '¿CloudAltio modifica recursos en mi nube?',
    a: 'No. CloudAltio es una plataforma de solo lectura. Se conecta a tus clouds mediante APIs oficiales con permisos mínimos de lectura y nunca realiza cambios en tus recursos, configuraciones o servicios. Tu infraestructura está 100% bajo tu control.',
  },
  {
    q: '¿Cuánto tarda la implementación?',
    a: 'Nuestra plataforma permite una configuración fluida mediante guías paso a paso para cada proveedor cloud y soporte técnico durante el onboarding. No se requiere instalar agentes ni modificar tu arquitectura.',
  },
  {
    q: '¿Qué clouds soporta CloudAltio?',
    a: 'CloudAltio soporta actualmente Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP) y Oracle Cloud Infrastructure (OCI). Trabajamos en integraciones adicionales y seguimos el estándar FOCUS para garantizar compatibilidad futura.',
  },
  {
    q: '¿Necesito conocimiento técnico para usarlo?',
    a: 'No es necesario. CloudAltio está diseñado para que tanto equipos de finanzas como de tecnología puedan entenderlo. Los dashboards, reportes y recomendaciones están pensados para ser claros y accionables, sin requerir expertise cloud profundo.',
  },
  {
    q: '¿Qué datos procesa CloudAltio?',
    a: 'CloudAltio procesa únicamente datos de costos y metadata de uso entregados por las APIs oficiales de cada proveedor cloud. No accedemos a datos de negocio, PII ni al contenido de tus workloads. Si tienes requisitos específicos de seguridad o privacidad, podemos conversarlo en detalle durante la evaluación.',
  },
  {
    q: '¿Es posible exportar los reportes?',
    a: 'Sí. Puedes exportar reportes en PDF, Excel y CSV. Los planes Growth y Enterprise también incluyen acceso a la API para integrar los datos con tus herramientas de BI, dashboards internos o plataformas como Jira, Slack y Datadog.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      style={{
        background: '#060E22',
        padding: '120px 40px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
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
            <span style={{ fontSize: 12, color: '#2D7FF9', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>FAQ</span>
          </div>

          <h2 style={{
            fontSize: 40,
            fontWeight: 700,
            color: '#E8F0FE',
            letterSpacing: '-0.025em',
            lineHeight: 1.15,
            marginBottom: 16,
          }}>
            Preguntas frecuentes
          </h2>

          <p style={{ fontSize: 16, color: '#94A3B8', lineHeight: 1.7 }}>
            ¿Tienes más preguntas? <a href="#demo" style={{ color: '#2D7FF9', textDecoration: 'none' }}>Escríbenos</a> y respondemos en menos de 24 horas.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  background: isOpen
                    ? 'rgba(45,127,249,0.04)'
                    : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${isOpen ? 'rgba(45,127,249,0.2)' : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: 16,
                  overflow: 'hidden',
                  transition: 'all 0.25s',
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '22px 28px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: isOpen ? '#E8F0FE' : '#C8D8F0',
                    lineHeight: 1.4,
                    transition: 'color 0.2s',
                  }}>
                    {faq.q}
                  </span>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: isOpen ? 'rgba(45,127,249,0.15)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${isOpen ? 'rgba(45,127,249,0.3)' : 'rgba(255,255,255,0.08)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.25s',
                  }}>
                    <ChevronDown
                      style={{
                        width: 14, height: 14,
                        color: isOpen ? '#2D7FF9' : '#526480',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s, color 0.2s',
                      }}
                    />
                  </div>
                </button>

                <div style={{
                  maxHeight: isOpen ? 400 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease',
                }}>
                  <div style={{
                    padding: '0 28px 24px',
                    borderTop: '1px solid rgba(255,255,255,0.04)',
                    paddingTop: 20,
                  }}>
                    <p style={{
                      fontSize: 15,
                      color: '#94A3B8',
                      lineHeight: 1.75,
                    }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}