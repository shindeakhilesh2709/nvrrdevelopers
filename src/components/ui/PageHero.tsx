"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/config/images";
import { getOptimizedImageProps } from "@/lib/imageProps";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  label?: string;
}

export function PageHero({
  title,
  subtitle,
  image = images.hero,
  label,
}: PageHeroProps) {
  const heroProps = getOptimizedImageProps(image, { priority: true });

  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
          {...heroProps}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/70 to-navy/90" />
      </div>
      <div className="container-custom relative z-10 py-16 text-center sm:py-20">
        {label && (
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="section-label mb-4 text-primary"
          >
            {label}
          </motion.p>
        )}
        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          className="heading-lg text-white"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
