import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { DashboardMockup } from './DashboardMockup';

export function HeroSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#060E22',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(45,127,249,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
      />

      {/* Radial glow top */}
      <div
        style={{
          position: 'absolute',
          top: -200,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 900,
          height: 600,
          background: 'radial-gradient(ellipse at center, rgba(45,127,249,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Radial glow right */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: -100,
          width: 600,
          height: 600,
          background: 'radial-gradient(ellipse at center, rgba(0,207,255,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '120px 40px 80px',
          display: 'grid',
          gridTemplateColumns: '5fr 7fr',
          gap: 64,
          alignItems: 'center',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left Column */}
        <div>
          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(45,127,249,0.08)',
            border: '1px solid rgba(45,127,249,0.25)',
            borderRadius: 99,
            padding: '6px 14px',
            marginBottom: 28,
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#2D7FF9',
              boxShadow: '0 0 8px rgba(45,127,249,0.8)',
              animation: 'pulse 2s infinite',
            }} />
            <span style={{ fontSize: 13, color: '#2D7FF9', fontWeight: 500 }}>FinOps para Latinoamérica</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: '#E8F0FE',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              marginBottom: 24,
            }}
          >
            Descubre en qué se va tu{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2D7FF9 0%, #00CFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              presupuesto cloud
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 17,
            color: '#94A3B8',
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 480,
          }}>
            CloudAltio unifica <strong style={{ color: '#C8D8F0' }}>AWS, Azure, Google Cloud y Oracle Cloud</strong> para darte visibilidad, control y oportunidades reales de ahorro.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a
              href="#demo"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'linear-gradient(135deg, #2D7FF9 0%, #1E6EE8 100%)',
                color: '#fff',
                fontSize: 15,
                fontWeight: 600,
                padding: '13px 26px',
                borderRadius: 12,
                textDecoration: 'none',
                boxShadow: '0 0 32px rgba(45,127,249,0.4)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 0 48px rgba(45,127,249,0.6)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 0 32px rgba(45,127,249,0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Solicitar demo <ArrowRight style={{ width: 16, height: 16 }} />
            </a>
          </div>

          {/* Social proof line */}
          <div style={{
            marginTop: 48,
            paddingTop: 32,
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            gap: 24,
          }}>
            <div>
              <div style={{ fontSize: 22, color: '#E8F0FE', fontWeight: 700 }}>4 clouds</div>
              <div style={{ fontSize: 12, color: '#526480', marginTop: 2 }}>integrados</div>
            </div>
            <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.08)' }} />
            <div>
              <div style={{ fontSize: 22, color: '#E8F0FE', fontWeight: 700 }}>15 min</div>
              <div style={{ fontSize: 12, color: '#526480', marginTop: 2 }}>setup inicial</div>
            </div>
            <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.08)' }} />
            <div>
              <div style={{ fontSize: 22, color: '#E8F0FE', fontWeight: 700 }}>+30%</div>
              <div style={{ fontSize: 12, color: '#526480', marginTop: 2 }}>ahorro promedio</div>
            </div>
          </div>
        </div>

        {/* Right Column - Dashboard */}
        <div style={{ position: 'relative' }}>
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}