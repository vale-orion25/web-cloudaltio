import { useEffect, useRef } from "react";

// Slide 4 — Columnas de datos fluyendo (light)
export function BgDataFlow() {
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

    const COL_W = 28;
    const CHAR_H = 18;
    const CHARS = "01アイウエオカキクケコ∑∆∏∞≈≠ƒ€$#@!%^&*".split("");

    const cols = Math.ceil(canvas.width / COL_W);

    type Column = { y: number; speed: number; length: number; chars: string[]; opacity: number };

    const columns: Column[] = Array.from({ length: cols }, () => ({
      y: Math.random() * -canvas.height,
      speed: 0.5 + Math.random() * 1.2,
      length: 6 + Math.floor(Math.random() * 10),
      chars: Array.from({ length: 20 }, () => CHARS[Math.floor(Math.random() * CHARS.length)]),
      opacity: 0.15 + Math.random() * 0.25,
    }));

    // Randomly refresh chars
    setInterval(() => {
      for (const col of columns) {
        const idx = Math.floor(Math.random() * col.chars.length);
        col.chars[idx] = CHARS[Math.floor(Math.random() * CHARS.length)];
      }
    }, 120);

    const COLORS = ["#023660", "#36AAC1", "#FE1F3D"];

    const draw = () => {
      ctx.fillStyle = "rgba(241,245,249,0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < columns.length; i++) {
        const col = columns[i];
        const color = COLORS[i % COLORS.length];
        col.y += col.speed;

        for (let j = 0; j < col.length; j++) {
          const charY = col.y - j * CHAR_H;
          if (charY < -CHAR_H || charY > canvas.height + CHAR_H) continue;

          // head is brightest
          const alpha = j === 0 ? col.opacity * 2 : col.opacity * (1 - j / col.length);
          ctx.font = `${j === 0 ? "bold " : ""}11px monospace`;
          ctx.fillStyle = j === 0 ? `${color}ff` : `${color}${Math.floor(alpha * 255).toString(16).padStart(2, "0")}`;
          ctx.fillText(col.chars[j % col.chars.length], i * COL_W + 4, charY);
        }

        // Reset column when off screen
        if (col.y - col.length * CHAR_H > canvas.height) {
          col.y = Math.random() * -200;
          col.speed = 0.5 + Math.random() * 1.2;
          col.length = 6 + Math.floor(Math.random() * 10);
          col.opacity = 0.12 + Math.random() * 0.2;
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
}
