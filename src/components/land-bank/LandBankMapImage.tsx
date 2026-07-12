"use client";

import { memo } from "react";
import Image from "next/image";

const MAP_SRC = "/images/NVRR_Land_Presence_Map.webp";

function LandBankMapImageComponent() {
  return (
    <Image
      src={MAP_SRC}
      alt="NVRR Land Presence"
      fill
      priority={false}
      loading="lazy"
      quality={90}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
      className="object-contain"
    />
  );
}

export const LandBankMapImage = memo(LandBankMapImageComponent);
