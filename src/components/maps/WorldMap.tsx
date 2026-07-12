"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Office } from "@/types";
import { headOffice } from "@/data/offices";

interface WorldMapProps {
  markers: Office[];
  className?: string;
}

const WORLD_VIEWBOX = "0 0 1000 500";

const connectionPaths = [
  { from: headOffice.mapPosition!, to: { x: 735, y: 332 } },
  { from: headOffice.mapPosition!, to: { x: 865, y: 215 } },
  { from: headOffice.mapPosition!, to: { x: 748, y: 338 } },
];

function WorldMapComponent({ markers, className }: WorldMapProps) {
  return (
    <div className={className}>
      <svg
        viewBox={WORLD_VIEWBOX}
        className="h-full w-full"
        role="img"
        aria-label="World map showing NVRR international presence"
      >
        <defs>
          <radialGradient id="worldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#19C5C8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#19C5C8" stopOpacity="0" />
          </radialGradient>
          <filter id="markerGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Simplified continent outlines */}
        <g fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1">
          <path d="M120,120 Q200,80 320,100 Q420,90 500,130 Q580,110 680,140 Q780,120 860,160 Q900,200 880,260 Q820,300 740,320 Q660,340 580,330 Q500,350 420,340 Q340,360 260,340 Q180,320 140,260 Q100,200 120,120Z" />
          <path d="M480,280 Q520,260 560,280 Q600,300 580,340 Q540,360 500,350 Q460,340 480,280Z" opacity="0.6" />
          <path d="M200,360 Q280,340 360,360 Q440,380 400,420 Q320,440 240,420 Q160,400 200,360Z" opacity="0.5" />
          <path d="M700,300 Q760,280 820,300 Q860,340 840,380 Q780,400 720,380 Q680,360 700,300Z" opacity="0.5" />
        </g>

        {/* Grid lines */}
        <g stroke="rgba(25,197,200,0.06)" strokeWidth="0.5">
          {[200, 400, 600, 800].map((x) => (
            <line key={`v${x}`} x1={x} y1="0" x2={x} y2="500" />
          ))}
          {[125, 250, 375].map((y) => (
            <line key={`h${y}`} x1="0" y1={y} x2="1000" y2={y} />
          ))}
        </g>

        {/* Connection lines */}
        {connectionPaths.map((conn, i) => {
          const midX = (conn.from.x + conn.to.x) / 2;
          const midY = Math.min(conn.from.y, conn.to.y) - 60;
          return (
            <motion.path
              key={i}
              d={`M${conn.from.x},${conn.from.y} Q${midX},${midY} ${conn.to.x},${conn.to.y}`}
              fill="none"
              stroke="#19C5C8"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              opacity="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: i * 0.2 }}
              style={{ willChange: "stroke-dashoffset" }}
            />
          );
        })}

        {/* Markers */}
        {markers.map((marker, i) => {
          if (!marker.mapPosition) return null;
          const { x, y } = marker.mapPosition;
          const label =
            marker.type === "head"
              ? `${marker.city} (HQ)`
              : marker.city;

          return (
            <g
              key={marker.id}
              className="group cursor-pointer"
              style={{ transform: "translateZ(0)" }}
            >
              <circle cx={x} cy={y} r="30" fill="url(#worldGlow)" opacity="0.6">
                <animate
                  attributeName="r"
                  values="20;35;20"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <motion.circle
                cx={x}
                cy={y}
                r="6"
                fill="#19C5C8"
                filter="url(#markerGlow)"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15 }}
              />
              <circle
                cx={x}
                cy={y}
                r="12"
                fill="none"
                stroke="#19C5C8"
                strokeWidth="1"
                opacity="0.6"
              >
                <animate
                  attributeName="r"
                  values="8;22;8"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.8;0;0.8"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <foreignObject
                x={x - 80}
                y={y - 70}
                width="160"
                height="60"
                className="pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <div className="flex justify-center">
                  <div className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-center backdrop-blur-xl">
                    <p className="font-button text-[10px] font-semibold text-primary">
                      {label}
                    </p>
                    <p className="text-[9px] text-white/70">{marker.state}</p>
                  </div>
                </div>
              </foreignObject>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export const WorldMap = memo(WorldMapComponent);
