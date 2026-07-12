import { getImageBlur } from "@/data/imageBlurs";
import { IMAGE_QUALITY } from "@/config/images";

interface OptimizedImageOptions {
  priority?: boolean;
  loading?: "lazy" | "eager";
}

export function getOptimizedImageProps(
  src: string,
  { priority = false, loading = "lazy" }: OptimizedImageOptions = {}
) {
  const blur = getImageBlur(src);

  return {
    quality: IMAGE_QUALITY,
    ...(blur
      ? { placeholder: "blur" as const, blurDataURL: blur }
      : {}),
    ...(priority ? { priority: true } : { loading }),
  };
}
