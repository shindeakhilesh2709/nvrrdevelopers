import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "navy" | "ghost";
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className,
  icon: Icon,
  type = "button",
  disabled,
}: ButtonProps) {
  const variants = {
    primary: "btn-primary",
    outline: "btn-outline",
    navy: "btn-navy",
    ghost: "btn-ghost",
  };

  const classes = cn(variants[variant], className, disabled && "opacity-50 pointer-events-none");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {Icon && <Icon className="h-4 w-4" />}
        {!Icon && variant !== "ghost" && <ArrowRight className="h-4 w-4" />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
      {Icon && <Icon className="h-4 w-4" />}
    </button>
  );
}
