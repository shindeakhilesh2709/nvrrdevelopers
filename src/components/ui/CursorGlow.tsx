"use client";

import { useEffect, useRef, useState } from "react";
import { throttle } from "@/lib/performance";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const positionRef = useRef(position);

  useEffect(() => {
    const handleMove = throttle((e: MouseEvent) => {
      const next = { x: e.clientX, y: e.clientY };
      positionRef.current = next;
      setPosition(next);
      setVisible(true);
    }, 32);

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.body.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9998] hidden lg:block"
      style={{
        left: position.x - 200,
        top: position.y - 200,
        width: 400,
        height: 400,
        background:
          "radial-gradient(circle, rgba(25,197,200,0.08) 0%, transparent 70%)",
        transition: "left 0.15s ease-out, top 0.15s ease-out",
        willChange: "left, top",
      }}
    />
  );
}
