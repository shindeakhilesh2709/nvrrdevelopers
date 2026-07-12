"use client";

import { memo } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/content";
import { getOptimizedImageProps } from "@/lib/imageProps";
import { Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

export const TestimonialsSection = memo(function TestimonialsSection() {
  return (
    <section className="section-padding bg-surface dark:bg-navy-dark">
      <div className="container-custom">
        <SectionHeading
          label="Testimonials"
          title="Trusted by Investors & Communities"
          subtitle="Hear from those who have experienced the NVRR difference."
        />

        <FadeIn>
          <div className="relative overflow-hidden">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 6000 }}
              breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
              className="testimonials-swiper !pb-4"
            >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="luxury-card h-full p-6 sm:p-8 dark:bg-navy-light">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="text-navy/70 dark:text-white/70 leading-relaxed mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                        {...getOptimizedImageProps(t.image)}
                      />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-navy dark:text-white">
                        {t.name}
                      </p>
                      <p className="text-xs text-navy/50 dark:text-white/50">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        </FadeIn>
      </div>
    </section>
  );
});
