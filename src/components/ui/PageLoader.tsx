"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMounted } from "@/hooks/useMounted";

export function PageLoader() {
  const mounted = useMounted();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mounted) return;

    const hide = () => setLoading(false);
    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { passive: true });
      const fallback = setTimeout(hide, 800);
      return () => {
        window.removeEventListener("load", hide);
        clearTimeout(fallback);
      };
    }
  }, [mounted]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={false}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy"
        >
          <div className="text-center">
            <div className="relative mx-auto mb-6 h-20 w-20">
              <Image
                src="/logo-icon.svg"
                alt="NVRR"
                width={80}
                height={80}
                className="h-20 w-20"
                priority
              />
            </div>
            <h1 className="font-heading text-2xl font-semibold text-white">
              NVRR Developers
            </h1>
            <p className="mt-2 font-button text-sm text-primary">
              We Construct Your Success.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
