"use client";

import { useEffect, useRef } from "react";

interface CanvasBackgroundProps {
  dotRadius: number;
  dotSpacing: number;
  waveSpeed: number;
  maxWaveHeight: number;
  interactionRadius: number;
  mouseRepelStrength: number;
  waveAngle: number;
  waveIntensity: number;
  waveEnabled: boolean;
  hoverColor: string;
  gradientFrom: string;
  gradientTo: string;
  backgroundColor?: string;
  // Dark theme overrides
  darkHoverColor?: string;
  darkGradientFrom?: string;
  darkGradientTo?: string;
  darkBackgroundColor?: string;
}

interface Dot {
  baseX: number;
  baseY: number;
  offset: number;
  normalizedX: number;
  normalizedY: number;
}

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.substring(0, 2), 16),
    g: parseInt(h.substring(2, 4), 16),
    b: parseInt(h.substring(4, 6), 16),
  };
}

function interpolateColor(
  c1: { r: number; g: number; b: number },
  c2: { r: number; g: number; b: number },
  factor: number
) {
  return {
    r: Math.round(c1.r + factor * (c2.r - c1.r)),
    g: Math.round(c1.g + factor * (c2.g - c1.g)),
    b: Math.round(c1.b + factor * (c2.b - c1.b)),
  };
}

export default function CanvasBackground(props: CanvasBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const propsRef = useRef(props);
  propsRef.current = props;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let mouseX = -1000;
    let mouseY = -1000;
    let dots: Dot[] = [];
    let animationId: number;
    let width = 0;
    let height = 0;
    let isDark = document.documentElement.getAttribute("data-theme") === "dark";

    const observer = new MutationObserver(() => {
      isDark = document.documentElement.getAttribute("data-theme") === "dark";
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    let visible = localStorage.getItem("dots-enabled") !== "false";
    canvas.style.opacity = visible ? "1" : "0";
    function onDotsToggle(e: Event) {
      visible = (e as CustomEvent).detail;
      if (canvas) canvas.style.opacity = visible ? "1" : "0";
    }
    window.addEventListener("dots-toggle", onDotsToggle);

    function initDots() {
      const p = propsRef.current;
      const spacing = p.dotSpacing;
      const cols = Math.floor(width / spacing) + 2;
      const rows = Math.floor(height / spacing) + 2;
      const offsetX = (width - cols * spacing) / 2;
      const offsetY = (height - rows * spacing) / 2;

      dots = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const baseX = offsetX + col * spacing;
          const baseY = offsetY + row * spacing;
          dots.push({
            baseX,
            baseY,
            offset: 0,
            normalizedX: Math.max(0, Math.min(1, baseX / width)),
            normalizedY: Math.max(0, Math.min(1, baseY / height)),
          });
        }
      }
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.scale(dpr, dpr);
      initDots();
    }

    function animate(time: number) {
      const p = propsRef.current;
      const bgColor = isDark
        ? (p.darkBackgroundColor || "#050505")
        : (p.backgroundColor || "#F8F9FA");

      ctx!.fillStyle = bgColor;
      ctx!.fillRect(0, 0, width, height);

      const angleRad = (p.waveAngle * Math.PI) / 180;
      const dirX = Math.cos(angleRad);
      const dirY = Math.sin(angleRad);

      const colorFrom = hexToRgb(isDark ? (p.darkGradientFrom || p.gradientFrom) : p.gradientFrom);
      const colorTo = hexToRgb(isDark ? (p.darkGradientTo || p.gradientTo) : p.gradientTo);
      const hoverRgb = hexToRgb(isDark ? (p.darkHoverColor || p.hoverColor) : p.hoverColor);

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Layer 1 — Wave offset
        const cx = dot.baseX - width / 2;
        const cy = dot.baseY - height / 2;
        const dotPosition = cx * dirX + cy * dirY;
        const phaseOffset = dotPosition * p.waveIntensity;
        const wave = p.waveEnabled
          ? Math.sin(phaseOffset - time * p.waveSpeed * 2)
          : 0;
        let yOffset = wave * p.maxWaveHeight;
        let scale = 1 + wave * 0.3;
        let opacity = 0.4 + wave * 0.2;

        // Layer 2 — Gradient color
        const gradientFactor = 1 - dot.normalizedY;
        const baseColor = interpolateColor(colorFrom, colorTo, gradientFactor);
        let r = baseColor.r;
        let g = baseColor.g;
        let b = baseColor.b;

        // Layer 3 — Mouse interaction
        const dx = dot.baseX - mouseX;
        const dy = dot.baseY - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < p.interactionRadius) {
          const interactionFactor =
            1 - Math.pow(distance / p.interactionRadius, 1.5);
          yOffset -= interactionFactor * p.mouseRepelStrength;
          scale += interactionFactor * 1.5;
          opacity += interactionFactor * 0.4;
          r = r + (hoverRgb.r - r) * interactionFactor;
          g = g + (hoverRgb.g - g) * interactionFactor;
          b = b + (hoverRgb.b - b) * interactionFactor;
        }

        // Draw the dot
        ctx!.fillStyle = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${Math.max(0.1, Math.min(1, opacity))})`;
        ctx!.beginPath();
        ctx!.arc(
          dot.baseX,
          dot.baseY + yOffset,
          Math.max(0.2, p.dotRadius * scale),
          0,
          Math.PI * 2
        );
        ctx!.fill();
      }

      animationId = requestAnimationFrame(animate);
    }

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    function onMouseLeave() {
      mouseX = -1000;
      mouseY = -1000;
    }

    resize();
    animationId = requestAnimationFrame(animate);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("dots-toggle", onDotsToggle);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen -z-10"
      style={{ pointerEvents: "none", transition: "opacity 0.3s ease" }}
    />
  );
}
