import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && <p className="section-label mb-3">{label}</p>}
      <h2
        className={cn(
          "heading-lg text-balance break-words",
          dark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed break-words sm:text-lg",
            align === "center" && "mx-auto",
            dark ? "text-white/70" : "text-navy/60"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
