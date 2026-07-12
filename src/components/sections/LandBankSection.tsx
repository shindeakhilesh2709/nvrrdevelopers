"use client";

import {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";
import Image from "next/image";
import { LandBankMap } from "@/components/land-bank/LandBankMap";
import { LandBankLocationCard } from "@/components/land-bank/LandBankLocationCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { landBankProjects } from "@/data/landBank";

const MAP_SRC = "/images/NVRR_Land_Presence_Map.webp";
const MAP_WIDTH = 1024;
const MAP_HEIGHT = 682;
const MIN_SCALE = 1;
const MAX_SCALE = 5;
const ZOOM_STEP = 0.25;

const leftColumnIds = [
  "hyderabad",
  "sangareddy",
  "karimnagar",
  "khammam",
  "visakhapatnam",
] as const;

const rightColumnIds = [
  "kakinada",
  "rajahmundry",
  "bhimavaram",
  "kaldindi",
  "amaravati",
] as const;

function clampPan(x: number, y: number, scale: number) {
  const maxOffset = (scale - 1) * 280;
  return {
    x: Math.max(-maxOffset, Math.min(maxOffset, x)),
    y: Math.max(-maxOffset, Math.min(maxOffset, y)),
  };
}

function LandBankSectionComponent() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const dragStart = useRef({ x: 0, y: 0, posX: 0, posY: 0 });

  const handleHover = useCallback((id: string | null) => {
    setHoveredId(id);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);
  }, []);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const zoomIn = useCallback(() => {
    setScale((prev) => Math.min(MAX_SCALE, prev + ZOOM_STEP));
  }, []);

  const zoomOut = useCallback(() => {
    setScale((prev) => {
      const next = Math.max(MIN_SCALE, prev - ZOOM_STEP);
      if (next <= 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "+" || event.key === "=") zoomIn();
      if (event.key === "-") zoomOut();
      if (event.key === "0") resetZoom();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, closeModal, zoomIn, zoomOut, resetZoom]);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (event: MouseEvent) => {
      const dx = event.clientX - dragStart.current.x;
      const dy = event.clientY - dragStart.current.y;
      setPosition(
        clampPan(
          dragStart.current.posX + dx,
          dragStart.current.posY + dy,
          scale
        )
      );
    };

    const handleMouseUp = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, scale]);

  const handleWheel = useCallback((event: ReactWheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const delta = event.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
    setScale((prev) => {
      const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, prev + delta));
      if (next <= 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const handlePanStart = useCallback(
    (event: ReactMouseEvent<HTMLDivElement>) => {
      if (scale <= 1) return;
      event.preventDefault();
      setIsDragging(true);
      dragStart.current = {
        x: event.clientX,
        y: event.clientY,
        posX: position.x,
        posY: position.y,
      };
    },
    [scale, position.x, position.y]
  );

  const leftColumn = leftColumnIds.map(
    (id) => landBankProjects.find((p) => p.id === id)!
  );
  const rightColumn = rightColumnIds.map(
    (id) => landBankProjects.find((p) => p.id === id)!
  );

  const renderCard = (project: (typeof landBankProjects)[number]) => (
    <LandBankLocationCard
      project={project}
      isActive={project.id === hoveredId}
      onHover={handleHover}
    />
  );

  return (
    <section className="section-padding relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(25,197,200,0.05),transparent_60%)]" />

      <div className="container-custom relative z-10 mx-auto max-w-[1400px]">
        <SectionHeading
          label="Land Bank"
          title="Strategic Land Holdings"
          subtitle="Premium land parcels across Andhra Pradesh and Telangana — positioned for India's fastest-growing corridors."
          align="center"
          className="mb-10 lg:mb-12"
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-5 lg:gap-8 xl:gap-10">
          <div className="lg:col-span-3">
            <button
              type="button"
              onClick={openModal}
              className="group relative w-full cursor-zoom-in text-left transition-shadow duration-300 hover:shadow-[0_20px_48px_-12px_rgba(13,35,63,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label="Open land presence map in full screen"
            >
              <div className="transition-transform duration-300 group-hover:scale-[1.02]">
                <LandBankMap hoveredId={hoveredId} />
              </div>
              <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-navy/75 px-3 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Click to enlarge
              </span>
            </button>
          </div>

          <div className="flex lg:col-span-2">
            <div
              className="hidden w-full gap-3 sm:grid sm:grid-cols-2"
              role="list"
              aria-label="Land bank locations"
            >
              <div className="grid grid-rows-5 gap-3">
                {leftColumn.map((project) => (
                  <div key={project.id} role="listitem" className="h-full">
                    {renderCard(project)}
                  </div>
                ))}
              </div>
              <div className="grid grid-rows-5 gap-3">
                {rightColumn.map((project) => (
                  <div key={project.id} role="listitem" className="h-full">
                    {renderCard(project)}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="grid w-full grid-cols-1 gap-3 sm:hidden"
              role="list"
              aria-label="Land bank locations"
            >
              {landBankProjects.map((project) => (
                <div key={project.id} role="listitem" className="h-full">
                  {renderCard(project)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.85)] p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Land presence map viewer"
          onClick={closeModal}
        >
          <div
            className="absolute right-4 top-4 z-[60] flex items-center gap-2"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={zoomIn}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-lg font-semibold text-white transition-colors hover:bg-white/20"
              aria-label="Zoom in"
            >
              +
            </button>
            <button
              type="button"
              onClick={zoomOut}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-lg font-semibold text-white transition-colors hover:bg-white/20"
              aria-label="Zoom out"
            >
              −
            </button>
            <button
              type="button"
              onClick={resetZoom}
              className="min-h-11 rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-lg font-semibold text-white transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div
            className="relative flex h-[90vh] w-[90vw] items-center justify-center overflow-hidden"
            onClick={(event) => event.stopPropagation()}
            onWheel={handleWheel}
            onMouseDown={handlePanStart}
            style={{
              cursor:
                scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
            }}
          >
            <div
              className="will-change-transform"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                transition: isDragging ? "none" : "transform 0.2s ease-out",
              }}
            >
              <Image
                src={MAP_SRC}
                alt="NVRR Land Presence"
                width={MAP_WIDTH}
                height={MAP_HEIGHT}
                quality={90}
                sizes="90vw"
                className="max-h-[90vh] max-w-[90vw] object-contain"
                draggable={false}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export const LandBankSection = memo(LandBankSectionComponent);
