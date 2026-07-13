"use client";

import { memo } from "react";
import Image from "next/image";
import { images } from "@/config/images";
import { getOptimizedImageProps } from "@/lib/imageProps";

function LandBankMapImageComponent() {
  const mapProps = getOptimizedImageProps(images.landPresenceMap);

  return (
    <Image
      src={images.landPresenceMap}
      alt="NVRR Land Presence"
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
      className="object-contain"
      {...mapProps}
    />
  );
}

export const LandBankMapImage = memo(LandBankMapImageComponent);
