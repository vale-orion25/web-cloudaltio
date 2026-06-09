import { useEffect, useRef } from "react";

// Slide 2 — Cuadrícula hexagonal con pulsos suaves
export function BgHexGrid() {
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

    const SIZE = 36; // hex radius
    const drawHex = (cx: number, cy: number, radius: number, alpha: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(2,54,96,${alpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.008;

      const cols = Math.ceil(canvas.width / (SIZE * 1.73)) + 2;
      const rows = Math.ceil(canvas.height / (SIZE * 1.5)) + 2;

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const cx = col * SIZE * 1.73 + (row % 2 === 0 ? 0 : SIZE * 0.865);
          const cy = row * SIZE * 1.5;
          // wave pulse based on distance from center
          const dx = cx - canvas.width / 2;
          const dy = cy - canvas.height / 2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const wave = Math.sin(dist * 0.015 - t) * 0.5 + 0.5;
          const alpha = 0.06 + wave * 0.1;
          drawHex(cx, cy, SIZE - 2, alpha);
        }
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
