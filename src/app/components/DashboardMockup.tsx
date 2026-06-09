// Pure SVG chart — no recharts in this file to avoid duplicate-key SVG bugs

const spendData = [
  { month: "Ene", aws: 42000, azure: 28000, gcp: 15000 },
  { month: "Feb", aws: 38000, azure: 31000, gcp: 14000 },
  { month: "Mar", aws: 55000, azure: 29000, gcp: 18000 },
  { month: "Abr", aws: 61000, azure: 34000, gcp: 22000 },
  { month: "May", aws: 58000, azure: 37000, gcp: 20000 },
  { month: "Jun", aws: 72000, azure: 41000, gcp: 26000 },
];

const services = [
  { name: "EC2 / Compute", cost: "$48,200", pct: 68, color: "#2563EB" },
  { name: "S3 / Storage", cost: "$12,400", pct: 42, color: "#60A5FA" },
  { name: "RDS / Databases", cost: "$9,800", pct: 34, color: "#1D4ED8" },
  { name: "Networking", cost: "$6,100", pct: 22, color: "rgba(37,99,235,0.5)" },
];

const cloudDist = [
  { name: "AWS", pct: 47, color: "#2563EB" },
  { name: "Azure", pct: 27, color: "#60A5FA" },
  { name: "GCP", pct: 17, color: "#10B981" },
  { name: "Oracle", pct: 9, color: "#1D4ED8" },
];

/** Pure-SVG multi-series area chart — no recharts */
function SpendAreaChart() {
  const W = 420;
  const H = 120;
  const padL = 32;
  const padR = 8;
  const padT = 8;
  const padB = 20;
  const cW = W - padL - padR;
  const cH = H - padT - padB;
  const n = spendData.length;

  const maxV = 80000;
  const minV = 0;
  const range = maxV - minV;

  const xOf = (i: number) => padL + (i / (n - 1)) * cW;
  const yOf = (v: number) => padT + cH - ((v - minV) / range) * cH;

  const buildPath = (key: "aws" | "azure" | "gcp") =>
    spendData
      .map((d, i) => `${i === 0 ? "M" : "L"} ${xOf(i).toFixed(1)},${yOf(d[key]).toFixed(1)}`)
      .join(" ");

  const buildArea = (key: "aws" | "azure" | "gcp") => {
    const line = buildPath(key);
    return `${line} L ${xOf(n - 1).toFixed(1)},${(padT + cH).toFixed(1)} L ${xOf(0).toFixed(1)},${(padT + cH).toFixed(1)} Z`;
  };

  const series: { key: "aws" | "azure" | "gcp"; stroke: string; fill: string; label: string }[] = [
    { key: "aws", stroke: "#2563EB", fill: "#2563EB", label: "AWS" },
    { key: "azure", stroke: "#60A5FA", fill: "#60A5FA", label: "Azure" },
    { key: "gcp", stroke: "#10B981", fill: "#10B981", label: "GCP" },
  ];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: H }} aria-label="Gasto por cloud">
      {/* Grid lines */}
      {[0, 0.33, 0.66, 1].map((t, i) => (
        <line
          key={`grid-${i}`}
          x1={padL}
          y1={(padT + cH * t).toFixed(1)}
          x2={W - padR}
          y2={(padT + cH * t).toFixed(1)}
          stroke="#E2E8F0"
          strokeWidth="1"
        />
      ))}

      {/* Areas */}
      {series.map((s) => (
        <path
          key={`area-${s.key}`}
          d={buildArea(s.key)}
          fill={s.fill}
          fillOpacity={0.1}
        />
      ))}

      {/* Lines */}
      {series.map((s) => (
        <path
          key={`line-${s.key}`}
          d={buildPath(s.key)}
          fill="none"
          stroke={s.stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}

      {/* X-axis labels */}
      {spendData.map((d, i) => (
        <text
          key={`xlabel-${i}`}
          x={xOf(i).toFixed(1)}
          y={H - 4}
          textAnchor="middle"
          fontSize="8"
          fill="#475569"
        >
          {d.month}
        </text>
      ))}

      {/* Y-axis label */}
      <text x={padL - 4} y={padT + 4} textAnchor="end" fontSize="8" fill="#475569">
        $80k
      </text>
    </svg>
  );
}

const sidebarIcons = [
  <path key="icon-0" d="M2 2h7v7H2zM11 2h7v7h-7zM2 11h7v7H2zM11 11h7v7h-7z" fill="currentColor" />,
  <path key="icon-1" d="M2 14h3v4H2zM7 11h3v7H7zM12 7h3v11h-3zM17 3h3v15h-3z" fill="currentColor" />,
  <path key="icon-2" d="M5 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM3 17s2-3 7-3 7 3 7 3" stroke="currentColor" strokeWidth="1.5" fill="none" />,
  <path key="icon-3" d="M10 2a6 6 0 0 0-6 6v3L2.5 14h15L16 11V8a6 6 0 0 0-6-6zM8 18h4" stroke="currentColor" strokeWidth="1.5" fill="none" />,
];

export function DashboardMockup() {
  return (
    <div
      style={{
        width: "100%",
        background: "#FFFFFF",
        borderRadius: 16,
        border: "1px solid #E2E8F0",
        overflow: "hidden",
        boxShadow: "0 24px 64px rgba(15,23,42,0.06), 0 0 0 1px rgba(15,23,42,0.02)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Topbar */}
      <div
        style={{
          background: "#F8FAFC",
          borderBottom: "1px solid #E2E8F0",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          {["#E2E8F0", "#CBD5E1", "#94A3B8"].map((bg, i) => (
            <div key={`dot-${i}`} style={{ width: 11, height: 11, borderRadius: "50%", background: bg }} />
          ))}
        </div>
        <div
          style={{
            fontSize: 11,
            color: "#475569",
            background: "#FFFFFF",
            padding: "4px 14px",
            borderRadius: 6,
            border: "1px solid #E2E8F0",
          }}
        >
          app.cloudaltio.com/dashboard
        </div>
        <div style={{ width: 60 }} />
      </div>

      {/* Sidebar + Content */}
      <div style={{ display: "flex", height: 420 }}>
        {/* Sidebar */}
        <div
          style={{
            width: 48,
            background: "#F8FAFC",
            borderRight: "1px solid #E2E8F0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 12,
            gap: 12,
          }}
        >
          {sidebarIcons.map((icon, i) => (
            <div
              key={`sidebar-${i}`}
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: i === 0 ? "rgba(37,99,235,0.1)" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: i === 0 ? "#2563EB" : "#94A3B8",
                cursor: "pointer",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                {icon}
              </svg>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            padding: "14px 16px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            background: "#FFFFFF",
          }}
        >
          {/* Header row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 10, color: "#475569", marginBottom: 1 }}>
                Junio 2025 — Multi-Cloud Overview
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#0F172A" }}>
                Gasto Total del Mes
              </div>
            </div>
            <div
              style={{
                fontSize: 10,
                color: "#10B981",
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.2)",
                padding: "3px 8px",
                borderRadius: 5,
              }}
            >
              Live
            </div>
          </div>

          {/* KPI Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
            {[
              { label: "Gasto Total", value: "$153,240", delta: "+8.2%", color: "#2563EB" },
              { label: "Desvíos", value: "3", delta: "Detectados", color: "#FE1F3D" },
              { label: "Variación", value: "-2.4%", delta: "Mensual", color: "#10B981" },
              { label: "Forecast Jul", value: "$168K", delta: "+9.6%", color: "#1D4ED8" },
            ].map((kpi, i) => (
              <div
                key={`kpi-${i}`}
                style={{
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  borderRadius: 8,
                  padding: "10px 12px",
                }}
              >
                <div style={{ fontSize: 9, color: "#475569", marginBottom: 4 }}>
                  {kpi.label}
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0F172A", marginBottom: 2 }}>
                  {kpi.value}
                </div>
                <div style={{ fontSize: 9, color: kpi.color, fontWeight: 500 }}>{kpi.delta}</div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 0.55fr", gap: 10 }}>
            {/* Pure SVG Area Chart */}
            <div
              style={{
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: 8,
                padding: "12px 14px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 6,
                }}
              >
                <div style={{ fontSize: 10, fontWeight: 600, color: "#475569" }}>
                  Gasto por Cloud
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  {[
                    { label: "AWS", color: "#2563EB" },
                    { label: "Azure", color: "#60A5FA" },
                  ].map((s) => (
                    <div key={`legend-${s.label}`} style={{ display: "flex", alignItems: "center", gap: 3 }}>
                      <div style={{ width: 12, height: 2, background: s.color, borderRadius: 2 }} />
                      <span style={{ fontSize: 8, color: "#475569", fontWeight: 500 }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ flex: 1, position: "relative" }}>
                <SpendAreaChart />
              </div>
            </div>

            {/* Cloud Distribution */}
            <div
              style={{
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: 8,
                padding: "12px 14px",
              }}
            >
              <div style={{ fontSize: 10, fontWeight: 600, color: "#475569", marginBottom: 8 }}>
                Distribución
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {cloudDist.slice(0, 3).map((c) => (
                  <div key={`dist-${c.name}`}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                      <span style={{ fontSize: 9, color: "#475569" }}>{c.name}</span>
                      <span style={{ fontSize: 9, fontWeight: 600, color: "#0F172A" }}>{c.pct}%</span>
                    </div>
                    <div style={{ height: 3, background: "#E2E8F0", borderRadius: 3 }}>
                      <div
                        style={{
                          height: "100%",
                          width: `${c.pct}%`,
                          background: c.color,
                          borderRadius: 3,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services table */}
          <div
            style={{
              background: "#F8FAFC",
              border: "1px solid #E2E8F0",
              borderRadius: 8,
              padding: "10px 14px",
            }}
          >
            <div style={{ fontSize: 10, fontWeight: 600, color: "#475569", marginBottom: 8 }}>
              Top Servicios · AWS
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {services.slice(0, 3).map((s) => (
                <div key={`svc-${s.name}`} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 90, fontSize: 9, color: "#475569", fontWeight: 500 }}>{s.name}</div>
                  <div style={{ flex: 1, height: 3, background: "#E2E8F0", borderRadius: 3 }}>
                    <div style={{ height: "100%", width: `${s.pct}%`, background: s.color, borderRadius: 3 }} />
                  </div>
                  <div style={{ width: 48, fontSize: 9, fontWeight: 600, color: "#0F172A", textAlign: "right" }}>
                    {s.cost}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}