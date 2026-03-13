import React, { useEffect, useRef } from "react";

const CursorCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<{ x: number; y: number; age: number }[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new point at current mouse position
      points.current.push({ ...mouse.current, age: 0 });

      // Update and filter points
      points.current = points.current
        .map((p) => ({ ...p, age: p.age + 1 }))
        .filter((p) => p.age < 20);

      if (points.current.length > 1) {
        ctx.beginPath();
        ctx.moveTo(points.current[0].x, points.current[0].y);

        for (let i = 1; i < points.current.length; i++) {
          const p = points.current[i];
          const prevP = points.current[i - 1];
          
          // Quadratic curve for smoothness
          const xc = (p.x + prevP.x) / 2;
          const yc = (p.y + prevP.y) / 2;
          ctx.quadraticCurveTo(prevP.x, prevP.y, xc, yc);
          
          // Gradient effect based on age
          const alpha = 1 - p.age / 20;
          ctx.strokeStyle = `rgba(145, 94, 255, ${alpha * 0.5})`; // Using the primary purple color
          ctx.lineWidth = (1 - p.age / 20) * 8;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(xc, yc);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] h-full w-full"
    />
  );
};

export default CursorCanvas;
