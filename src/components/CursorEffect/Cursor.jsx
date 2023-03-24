import React, { useState, useEffect, useRef } from "react";
import "../../bootstrap/scss/components/_cursor.scss";

const colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#8B00FF"];
const numColors = colors.length;
const wakeSize = 100;

const Cursor = () => {
  const [wake, setWake] = useState([]);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    setCtx(canvas.getContext("2d"));
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const onResize = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
  };

  const onMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const newWake = wake.filter((w) => {
      const distance = Math.sqrt(Math.pow(w.x - x, 2) + Math.pow(w.y - y, 2));
      return distance < wakeSize;
    });

    newWake.push({ x, y, colorIndex: Math.floor(Math.random() * numColors) });
    setWake(newWake);
  };

  useEffect(() => {
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);

    wake.forEach((w) => {
      ctx.beginPath();
      const gradient = ctx.createRadialGradient(w.x, w.y, 0, w.x, w.y, wakeSize);
      gradient.addColorStop(0, colors[w.colorIndex]);
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.arc(w.x, w.y, wakeSize, 0, 2 * Math.PI);
      ctx.fill();
    });
  }, [wake, ctx, canvasSize]);

  return <canvas ref={canvasRef} className="wake" onMouseMove={onMouseMove} />;
};

export default Cursor;
