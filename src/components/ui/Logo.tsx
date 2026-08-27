import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  light = false,
  className,
  size = "nav",
}: {
  light?: boolean;
  className?: string;
  size?: "nav" | "footer";
}) {
  return (
    <Link
      href="/"
      aria-label="heshnova home"
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <img
        src={light ? "/brand/heshnova-light.svg" : "/brand/heshnova.svg"}
        alt="heshnova"
        width={size === "nav" ? 214 : 196}
        height={size === "nav" ? 48 : 44}
        className={cn(
          "w-auto max-w-none shrink-0",
          size === "nav" ? "h-10 lg:h-12" : "h-9 md:h-10",
        )}
      />
    </Link>
  );
}
