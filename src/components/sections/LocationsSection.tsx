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
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import {
  headOffice,
  domesticOffices,
  internationalOffices,
  officeStats,
} from "@/data/offices";
import { MapPin, Globe, Building2 } from "lucide-react";
import { images } from "@/config/images";
import { getOptimizedImageProps } from "@/lib/imageProps";

const MAP_SRC = images.worldPresenceMap;
const MAP_WIDTH = 1024;
const MAP_HEIGHT = 576;
const MIN_SCALE = 1;
const MAX_SCALE = 5;
const ZOOM_STEP = 0.25;

function clampPan(x: number, y: number, scale: number) {
  const maxOffset = (scale - 1) * 280;
  return {
    x: Math.max(-maxOffset, Math.min(maxOffset, x)),
    y: Math.max(-maxOffset, Math.min(maxOffset, y)),
  };
}

function OfficeCard({
  city,
  state,
  type,
}: {
  city: string;
  state: string;
  type?: string;
}) {
  return (
    <div className="luxury-card p-4 dark:bg-navy-light">
      <h4 className="font-heading font-semibold text-navy dark:text-white break-words">
        {city}
      </h4>
      <p className="mt-1 text-xs text-navy/50 dark:text-white/50">{state}</p>
      {type && (
        <span className="mt-2 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
          {type}
        </span>
      )}
    </div>
  );
}

function LocationsSectionComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, posX: 0, posY: 0 });

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

  return (
    <section className="section-padding bg-surface dark:bg-navy-dark">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[7fr_3fr] lg:gap-10">
          {/* World presence image — ~70%, sticky on desktop */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <button
              type="button"
              onClick={openModal}
              className="group relative w-full cursor-zoom-in text-left transition-shadow duration-300 hover:shadow-[0_20px_48px_-12px_rgba(13,35,63,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label="Open world presence map in full screen"
            >
              <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-navy shadow-luxury transition-transform duration-300 group-hover:scale-[1.02] sm:h-[380px] lg:h-[520px]">
                <Image
                  src={MAP_SRC}
                  alt="NVRR Developers global office presence"
                  fill
                  sizes="(max-width: 768px) 100vw, 70vw"
                  className="object-contain"
                  {...getOptimizedImageProps(MAP_SRC)}
                />
              </div>
              <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-navy/75 px-3 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Click to enlarge
              </span>
            </button>
          </div>

          {/* Heading, stats & scrollable office cards — ~30% */}
          <div className="flex min-w-0 flex-col">
            <FadeIn>
              <p className="section-label mb-3">Our Presence</p>
              <h2 className="heading-lg text-balance text-navy dark:text-white">
                Domestic & International Offices
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy/70 dark:text-white/70">
                A strategic network of {officeStats.totalOffices} offices across
                India and key global markets.
              </p>
            </FadeIn>

            <FadeIn className="mt-7 grid grid-cols-2 gap-4">
              <AnimatedCounter end={officeStats.headOffice} label="Head Office" />
              <AnimatedCounter
                end={officeStats.domesticOffices}
                label="Domestic Offices"
              />
              <AnimatedCounter
                end={officeStats.internationalOffices}
                label="International Offices"
              />
              <AnimatedCounter end={officeStats.totalOffices} label="Total Offices" />
            </FadeIn>

            <div className="mt-7 h-auto overflow-visible lg:h-[520px] lg:overflow-y-auto lg:pr-1">
              <FadeIn>
                <div className="mb-7 flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  <h3 className="font-heading text-base font-semibold text-navy dark:text-white">
                    Head Office
                  </h3>
                </div>
                <div className="luxury-card flex w-full min-h-[88px] items-center gap-3 border-l-4 border-l-primary p-4 dark:bg-navy-light">
                  <div>
                    <h4 className="font-heading font-semibold text-navy dark:text-white break-words">
                      {headOffice.city}, {headOffice.state}
                    </h4>
                    <p className="mt-0.5 text-xs text-navy/50 dark:text-white/50">
                      Corporate Headquarters
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn className="mt-7">
                <div className="mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <h3 className="font-heading text-base font-semibold text-navy dark:text-white">
                    Domestic Offices
                  </h3>
                </div>
                <StaggerContainer className="flex flex-col gap-3">
                  {domesticOffices.map((office) => (
                    <StaggerItem key={office.id} className="w-full">
                      <div className="w-full min-h-[88px]">
                        <OfficeCard city={office.city} state={office.state} />
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </FadeIn>

              <FadeIn className="mt-7">
                <div className="mb-3 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <h3 className="font-heading text-base font-semibold text-navy dark:text-white">
                    International Offices
                  </h3>
                </div>
                <StaggerContainer className="flex flex-col gap-3">
                  {internationalOffices.map((office) => (
                    <StaggerItem key={office.id} className="w-full">
                      <div className="w-full min-h-[88px]">
                        <OfficeCard city={office.city} state={office.state} />
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.85)] p-4"
          role="dialog"
          aria-modal="true"
          aria-label="World presence map viewer"
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
                alt="NVRR Developers global office presence"
                width={MAP_WIDTH}
                height={MAP_HEIGHT}
                sizes="90vw"
                className="max-h-[90vh] max-w-[90vw] object-contain"
                draggable={false}
                {...getOptimizedImageProps(MAP_SRC)}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export const LocationsSection = memo(LocationsSectionComponent);
