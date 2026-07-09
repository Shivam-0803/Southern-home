import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "glass";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  type?: "button" | "submit";
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-[0_8px_30px_rgba(43,70,37,0.35)] hover:shadow-[0_12px_36px_rgba(43,70,37,0.45)]",
  secondary:
    "bg-ink text-white hover:bg-ink/85 shadow-[0_8px_30px_rgba(11,11,10,0.25)]",
  ghost:
    "bg-transparent text-ink border border-ink/15 hover:border-primary hover:text-primary",
  glass:
    "bg-white/10 text-white border border-white/25 backdrop-blur-md hover:bg-white/20",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  icon,
  iconPosition = "right",
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.97]",
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} onClick={onClick} className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
