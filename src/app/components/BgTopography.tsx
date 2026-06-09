import { useEffect, useRef } from "react";

// Slide 4 — Líneas topográficas que se desplazan lentamente
export function BgTopography() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Simple noise approximation via sin/cos combinations
    const noise = (x: number, y: number, time: number) =>
      Math.sin(x * 0.008 + time * 0.3) * Math.cos(y * 0.01 + time * 0.2) +
      Math.sin((x + y) * 0.006 + time * 0.15) * 0.5 +
      Math.cos(x * 0.012 - y * 0.007 + time * 0.25) * 0.3;

    const LEVELS = 8;
    const STEP = 18; // sampling resolution

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.012;

      const w = canvas.width;
      const h = canvas.height;

      for (let level = 0; level < LEVELS; level++) {
        const threshold = -1 + (level / LEVELS) * 2;
        ctx.beginPath();

        // March across columns, find crossings, draw line segments
        for (let x = 0; x < w - STEP; x += STEP) {
          for (let y = 0; y < h - STEP; y += STEP) {
            const v00 = noise(x, y, t);
            const v10 = noise(x + STEP, y, t);
            const v01 = noise(x, y + STEP, t);
            const v11 = noise(x + STEP, y + STEP, t);

            const corners = [
              v00 > threshold ? 1 : 0,
              v10 > threshold ? 1 : 0,
              v01 > threshold ? 1 : 0,
              v11 > threshold ? 1 : 0,
            ];
            const idx = corners[0] * 8 + corners[1] * 4 + corners[2] * 2 + corners[3];

            if (idx === 0 || idx === 15) continue;

            // Interpolate crossing points on each edge
            const lerp = (a: number, b: number, v: number) => {
              const d = b - a;
              return d === 0 ? 0 : (threshold - a) / d;
            };
            const top    = { x: x + lerp(v00, v10, threshold) * STEP, y };
            const bottom = { x: x + lerp(v01, v11, threshold) * STEP, y: y + STEP };
            const left   = { x, y: y + lerp(v00, v01, threshold) * STEP };
            const right  = { x: x + STEP, y: y + lerp(v10, v11, threshold) * STEP };

            const segs: [typeof top, typeof top][] = [];
            if ([1,2,4,7,8,11,13,14].includes(idx)) segs.push([top, left]);
            if ([1,4,6,7,9,11,14,15].includes(idx)) segs.push([top, right]);
            if ([2,3,4,7,8,11,12,13].includes(idx)) segs.push([bottom, left]);
            if ([3,6,7,8,9,12,13,14].includes(idx)) segs.push([bottom, right]);

            for (const [a, b] of segs) {
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
            }
          }
        }

        const hue = level / LEVELS;
        const alpha = 0.07 + hue * 0.05;
        ctx.strokeStyle = level % 3 === 0
          ? `rgba(2,54,96,${alpha})`
          : level % 3 === 1
          ? `rgba(54,170,193,${alpha * 0.8})`
          : `rgba(100,120,160,${alpha * 0.6})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
