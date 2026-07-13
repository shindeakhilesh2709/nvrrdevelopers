"use client";

import { useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { masterPlanItems, masterPlanCategories } from "@/data/masterPlan";

interface MasterPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MasterPlanModal({ isOpen, onClose }: MasterPlanModalProps) {
  const close = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-navy/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Complete master plan facilities"
      onClick={close}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-luxury-lg dark:bg-navy-light sm:rounded-3xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-gray-100 px-6 py-5 dark:border-white/10 sm:px-8">
          <div>
            <p className="section-label mb-1">Master Plan</p>
            <h3 className="font-heading text-xl font-semibold text-navy dark:text-white sm:text-2xl">
              Complete Township Facilities
            </h3>
            <p className="mt-1 text-sm text-navy/55 dark:text-white/55">
              Every amenity integrated into our smart township vision.
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-100 text-navy transition-colors hover:bg-surface dark:border-white/10 dark:text-white dark:hover:bg-navy"
            aria-label="Close master plan"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
          <div className="space-y-10">
            {masterPlanCategories.map((category) => {
              const items = masterPlanItems.filter((item) => item.category === category.id);
              if (!items.length) return null;

              return (
                <div key={category.id}>
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-navy/70 dark:text-white/70">
                      {category.label}
                    </h4>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-start gap-3 rounded-xl border border-gray-100/80 p-4 dark:border-white/10"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <DynamicIcon name={item.icon} className="h-4 w-4 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-heading text-sm font-semibold text-navy dark:text-white">
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-xs leading-relaxed text-navy/50 dark:text-white/50 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
