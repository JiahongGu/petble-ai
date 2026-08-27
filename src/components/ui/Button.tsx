import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-brand text-ink hover:bg-brand-hover active:bg-brand-dark shadow-[0_1px_0_rgba(18,22,35,0.06)]",
  dark: "bg-ink text-white hover:bg-[#2a3142] active:bg-[#3a4256]",
  outline:
    "bg-transparent text-white border border-white hover:bg-white/20",
  ghost:
    "bg-white text-ink border border-[#5c606e] hover:border-ink hover:bg-surface",
  white: "bg-white text-ink hover:bg-surface",
};

const sizes = {
  md: "h-12 min-w-[7.5rem] px-8 text-[1rem]",
  lg: "h-14 min-w-[12.5rem] px-10 text-[1rem]",
};

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  type?: "button" | "submit";
  full?: boolean;
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  full,
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition-[background,border,transform,box-shadow] duration-300 ease-out will-change-transform",
    "hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(18,22,35,0.12)]",
    "active:translate-y-0 active:scale-[0.98]",
    variants[variant],
    sizes[size],
    full && "w-full",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
