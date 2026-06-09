import { useEffect, useRef } from "react";

// Slide 2 — Circuito PCB con corriente animada (light)
export function BgCircuit() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const GRID = 40;
    const TRACE_COLOR = "rgba(2,54,96,0.12)";
    const DOT_COLOR = "rgba(2,54,96,0.2)";

    // Build static grid traces
    type Trace = { x1: number; y1: number; x2: number; y2: number };
    const traces: Trace[] = [];
    const dots: { x: number; y: number }[] = [];

    const cols = Math.ceil(canvas.width / GRID) + 2;
    const rows = Math.ceil(canvas.height / GRID) + 2;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * GRID;
        const y = row * GRID;
        dots.push({ x, y });
        if (Math.random() > 0.35 && col < cols - 1) {
          traces.push({ x1: x, y1: y, x2: x + GRID, y2: y });
        }
        if (Math.random() > 0.35 && row < rows - 1) {
          traces.push({ x1: x, y1: y, x2: x, y2: y + GRID });
        }
      }
    }

    // Pulses traveling along traces
    type Pulse = { trace: Trace; t: number; speed: number; color: string };
    const PULSE_COLORS = ["rgba(254,31,61,0.7)", "rgba(2,54,96,0.6)", "rgba(54,170,193,0.7)"];
    const pulses: Pulse[] = Array.from({ length: 18 }, () => ({
      trace: traces[Math.floor(Math.random() * traces.length)],
      t: Math.random(),
      speed: 0.004 + Math.random() * 0.006,
      color: PULSE_COLORS[Math.floor(Math.random() * PULSE_COLORS.length)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw traces
      ctx.lineWidth = 1;
      ctx.strokeStyle = TRACE_COLOR;
      for (const t of traces) {
        ctx.beginPath();
        ctx.moveTo(t.x1, t.y1);
        ctx.lineTo(t.x2, t.y2);
        ctx.stroke();
      }

      // Draw dots
      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = DOT_COLOR;
        ctx.fill();
      }

      // Animate pulses
      for (const p of pulses) {
        p.t += p.speed;
        if (p.t > 1) {
          p.t = 0;
          p.trace = traces[Math.floor(Math.random() * traces.length)];
        }
        const x = p.trace.x1 + (p.trace.x2 - p.trace.x1) * p.t;
        const y = p.trace.y1 + (p.trace.y2 - p.trace.y1) * p.t;

        // glow
        const grad = ctx.createRadialGradient(x, y, 0, x, y, 10);
        grad.addColorStop(0, p.color);
        grad.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // dot
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.85 }}
    />
  );
}
