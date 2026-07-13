"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";
import { images } from "@/config/images";
import { getOptimizedImageProps } from "@/lib/imageProps";
import { useMounted } from "@/hooks/useMounted";

export function HeroSection() {
  const mounted = useMounted();
  const heroProps = getOptimizedImageProps(images.hero, { priority: true });

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="Luxury township skyline"
          fill
          className="object-cover"
          sizes="100vw"
          {...heroProps}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90" />
      </div>

      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <motion.div
            initial={false}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          />
          <motion.div
            initial={false}
            animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
          />
        </div>
      )}

      <div className="container-custom relative z-10 pt-28 pb-16 text-center sm:pt-32 sm:pb-20">
        <p className="section-label mb-6 text-primary">NVRR Developers Pvt Ltd</p>

        <h1 className="heading-xl mx-auto max-w-5xl text-white text-balance">
          Building Tomorrow&apos;s{" "}
          <span className="text-gradient">Smart Cities</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          Creating integrated communities with world-class residential,
          healthcare, education and commercial infrastructure.
        </p>

        <div className="mt-10 flex w-full max-w-lg flex-col items-stretch justify-center gap-4 sm:mx-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center">
          <Button href="/#land-bank" variant="primary" className="w-full sm:w-auto">
            Explore Land Bank
          </Button>
          <Button href="/#vision" variant="outline" className="w-full sm:w-auto">
            Our Vision
          </Button>
          <Button href="/#contact" variant="outline" className="w-full sm:w-auto">
            Contact Us
          </Button>
        </div>
      </div>

      {mounted && (
        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
          aria-hidden
        >
          <motion.div
            initial={false}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-8 w-8 text-white/50" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
