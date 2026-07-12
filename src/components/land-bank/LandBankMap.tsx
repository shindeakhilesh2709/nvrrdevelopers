"use client";

import { memo } from "react";
import { landBankProjects } from "@/data/landBank";
import { LandBankMapImage } from "@/components/land-bank/LandBankMapImage";
import { LandBankMapMarker } from "@/components/land-bank/LandBankMapMarker";
import { cn } from "@/lib/utils";

interface LandBankMapProps {
  hoveredId: string | null;
  className?: string;
}

function LandBankMapComponent({ hoveredId, className }: LandBankMapProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative h-[420px] w-full overflow-hidden rounded-2xl bg-transparent shadow-luxury sm:h-[560px] lg:h-[720px]">
        <LandBankMapImage />

        <div className="pointer-events-none absolute inset-0 z-10">
          {landBankProjects.map((project) => (
            <LandBankMapMarker
              key={project.id}
              project={project}
              isHighlighted={project.id === hoveredId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export const LandBankMap = memo(LandBankMapComponent);
