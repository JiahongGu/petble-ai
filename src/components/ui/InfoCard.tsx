import Link from "next/link";
import { cn } from "@/lib/cn";

export function InfoCard({
  icon,
  title,
  kicker,
  points,
  footer,
  href,
  className,
}: {
  icon?: React.ReactNode;
  title: string;
  kicker?: string;
  points: readonly string[];
  footer?: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const body = (
    <>
      <div className="flex items-center gap-3">
        {icon != null ? (
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cream text-sm font-bold text-ink">
            {icon}
          </span>
        ) : null}
        <div className="min-w-0">
          {kicker ? (
            <p className="text-[11px] font-bold uppercase tracking-wide text-ink/50">
              {kicker}
            </p>
          ) : null}
          <h3 className="text-xl font-semibold md:text-[1.35rem]">{title}</h3>
        </div>
      </div>
      <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted">
        {points.map((point) => (
          <li key={point} className="flex gap-2.5">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      {footer}
    </>
  );

  const classes = cn(
    "flex h-full flex-col rounded-[1.75rem] bg-white p-6 md:p-8",
    href && "transition hover:shadow-[0_8px_30px_rgba(18,22,35,0.06)]",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {body}
      </Link>
    );
  }

  return <article className={classes}>{body}</article>;
}
