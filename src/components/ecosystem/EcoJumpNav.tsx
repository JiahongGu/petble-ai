"use client";

import { ecoNav } from "@/data/ecosystem";

export function EcoJumpNav() {
  return (
    <nav
      aria-label="Ecosystem sections"
      className="sticky top-16 z-40 border-b border-line bg-white/95 backdrop-blur-md lg:top-20"
    >
      <div className="container-site flex gap-1 overflow-x-auto py-2 no-scrollbar">
        {ecoNav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full px-3 py-2 text-[0.75rem] font-semibold text-muted hover:bg-surface hover:text-ink xl:text-[0.8125rem]"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
