"use client";

import { useState, useMemo, memo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { galleryItems, galleryCategories } from "@/data/content";
import { cn } from "@/lib/utils";
import { getOptimizedImageProps } from "@/lib/imageProps";
import { X } from "lucide-react";

export const GallerySection = memo(function GallerySection() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter]
  );

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Gallery"
          title="Visual Journey Through Our Vision"
          subtitle="Explore drone views, architecture, master plans, construction progress, and our office spaces."
        />

        <FadeIn className="mb-8 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "min-h-11 rounded-full px-4 py-2.5 font-button text-xs font-medium transition-all",
                filter === cat
                  ? "bg-primary text-white"
                  : "bg-surface dark:bg-navy-light text-navy dark:text-white hover:bg-primary/10"
              )}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        <div className="masonry-grid">
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="masonry-item group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setLightbox(item.image)}
            >
              <div className={`relative overflow-hidden rounded-xl ${index % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  {...getOptimizedImageProps(item.image, {
                    loading: index < 3 ? "eager" : "lazy",
                  })}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform group-hover:translate-y-0">
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="text-xs text-white/70">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/gallery" variant="navy">
            View Full Gallery
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 flex min-h-11 min-w-11 items-center justify-center text-white sm:top-6 sm:right-6"
              onClick={() => setLightbox(null)}
              aria-label="Close gallery image"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[80vh] max-w-5xl w-full aspect-video"
            >
              <Image
                src={lightbox}
                alt="Gallery"
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 90vw, 1200px"
                {...getOptimizedImageProps(lightbox)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});
