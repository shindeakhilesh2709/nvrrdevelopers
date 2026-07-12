"use client";

import { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { LandBankProject } from "@/types";
import { STATUS_LABELS, STATUS_STYLES } from "@/data/landBank";
import { cn } from "@/lib/utils";

interface LandBankLocationCardProps {
  project: LandBankProject;
  isActive: boolean;
  onHover: (id: string | null) => void;
}

function LandBankLocationCardComponent({
  project,
  isActive,
  onHover,
}: LandBankLocationCardProps) {
  const handleMouseEnter = useCallback(() => onHover(project.id), [onHover, project.id]);
  const handleMouseLeave = useCallback(() => onHover(null), [onHover]);
  const handleFocus = useCallback(() => onHover(project.id), [onHover, project.id]);
  const handleBlur = useCallback(() => onHover(null), [onHover]);

  return (
    <motion.button
      type="button"
      initial={false}
      animate={{
        y: isActive ? -6 : 0,
        scale: isActive ? 1.03 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      aria-label={`${project.name}, ${project.state}, ${project.acres} acres, ${STATUS_LABELS[project.status]}`}
      className={cn(
        "group flex h-full min-h-[96px] flex-col rounded-2xl border bg-white p-3.5 text-left will-change-transform sm:min-h-[104px] sm:p-4",
        isActive
          ? "border-primary shadow-[0_16px_40px_-10px_rgba(25,197,200,0.45),0_0_0_1px_rgba(25,197,200,0.3)]"
          : "border-slate-100 shadow-card hover:border-primary/40 hover:shadow-[0_12px_32px_-8px_rgba(25,197,200,0.25)]"
      )}
    >
      <div className="flex items-start gap-2.5">
        <span
          className={cn(
            "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors duration-300",
            isActive ? "bg-primary text-white" : "bg-primary/10 text-primary group-hover:bg-primary/15"
          )}
          aria-hidden
        >
          <MapPin className="h-3.5 w-3.5" strokeWidth={2.25} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-heading text-sm font-bold leading-tight text-navy break-words sm:text-base">
            {project.name}
          </p>
          <p className="mt-0.5 text-xs text-slate-500">{project.state}</p>
        </div>
      </div>

      <div className="mt-auto flex items-end justify-between gap-2 pt-3">
        <p className="text-sm font-bold text-navy">
          {project.acres.toLocaleString()}{" "}
          <span className="text-xs font-medium text-slate-500">Acres</span>
        </p>
        <span
          className={cn(
            "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ring-1",
            STATUS_STYLES[project.status].badge
          )}
        >
          {STATUS_LABELS[project.status]}
        </span>
      </div>
    </motion.button>
  );
}

export const LandBankLocationCard = memo(
  LandBankLocationCardComponent,
  (prev, next) =>
    prev.isActive === next.isActive && prev.project.id === next.project.id
);
