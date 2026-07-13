import { getImageBlur } from "@/data/imageBlurs";
import { IMAGE_QUALITY } from "@/config/images";

interface OptimizedImageOptions {
  priority?: boolean;
  loading?: "lazy" | "eager";
  sizes?: string;
}

export function getOptimizedImageProps(
  src: string,
  { priority = false, loading = "lazy" }: OptimizedImageOptions = {}
) {
  const blur = getImageBlur(src);

  return {
    quality: IMAGE_QUALITY,
    decoding: "async" as const,
    ...(blur
      ? { placeholder: "blur" as const, blurDataURL: blur }
      : {}),
    ...(priority
      ? { priority: true, fetchPriority: "high" as const }
      : { loading }),
  };
}
