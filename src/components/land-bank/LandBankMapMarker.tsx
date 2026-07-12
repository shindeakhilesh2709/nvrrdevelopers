"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { LandBankProject } from "@/types";

interface LandBankMapMarkerProps {
  project: LandBankProject;
  isHighlighted: boolean;
}

function LandBankMapMarkerComponent({
  project,
  isHighlighted,
}: LandBankMapMarkerProps) {
  const { left, top } = project.markerPosition;

  return (
    <div
      className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${left}%`, top: `${top}%` }}
      aria-hidden
    >
      {isHighlighted && (
        <>
          {[0, 0.5, 1].map((delay) => (
            <motion.span
              key={delay}
              className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/50"
              initial={false}
              animate={{ scale: [1, 2.8], opacity: [0.55, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeOut",
                delay,
              }}
            />
          ))}
          <motion.span
            className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20"
            initial={false}
            animate={{ scale: [1, 1.4], opacity: [0.45, 0.15] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <motion.span
        initial={false}
        animate={{
          scale: isHighlighted ? 1.35 : 1,
          opacity: isHighlighted ? 1 : 0,
          boxShadow: isHighlighted
            ? "0 0 0 4px rgba(25,197,200,0.35), 0 0 20px rgba(25,197,200,0.7)"
            : "0 0 0 0px rgba(25,197,200,0)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative block h-2.5 w-2.5 rounded-full bg-primary will-change-transform"
      />
    </div>
  );
}

export const LandBankMapMarker = memo(
  LandBankMapMarkerComponent,
  (prev, next) =>
    prev.isHighlighted === next.isHighlighted &&
    prev.project.id === next.project.id
);
