"use client";
import React, { useEffect, useRef } from "react";

const COLORS = [
  "#f8f8f3", // blanco pastel
  "#f7e6ef", // rosa muy suave
  "#e6efe2", // verde olivo claro
  "#ffe4e1", // rosa pálido
  "#f3ead9", // beige claro
  "#e9f5e1"  // verde muy pálido
];

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function PetalRain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const petals: HTMLDivElement[] = [];
    const container = containerRef.current;
    if (!container) return;
    for (let i = 0; i < 24; i++) {
      const petal = document.createElement("div");
      const size = random(8, 16);
      petal.style.position = "absolute";
      petal.style.left = `${random(0, 100)}vw`;
      petal.style.top = `-${size}px`;
      petal.style.width = `${size}px`;
      petal.style.height = `${size * 1.2}px`;
  petal.style.opacity = String(random(0.5, 0.8));
      petal.style.borderRadius = "50% 60% 50% 60% / 60% 50% 60% 50%";
      petal.style.background = COLORS[Math.floor(random(0, COLORS.length))];
      petal.style.boxShadow = "0 2px 8px rgba(183,110,121,0.08)";
      petal.style.zIndex = "2";
      petal.style.pointerEvents = "none";
      petal.style.transform = `rotate(${random(-30, 30)}deg)`;
      petal.style.animation = `petal-fall ${random(4, 8)}s linear ${random(0, 3)}s infinite`;
      container.appendChild(petal);
      petals.push(petal);
    }
    return () => {
      petals.forEach((p) => container.removeChild(p));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 1,
        overflow: "hidden",
      }}
    />
  );
}

// CSS keyframes for falling petals
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes petal-fall {
      0% { transform: translateY(0) rotate(0deg); }
      80% { opacity: 1; }
      100% { transform: translateY(100vh) rotate(360deg); opacity: 0.2; }
    }
  `;
  document.head.appendChild(style);
}
