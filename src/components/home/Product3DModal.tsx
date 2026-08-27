"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { ProductModel } from "@/components/home/ProductModel";

export function Product3DModal({
  open,
  onClose,
  src,
  poster,
  title,
}: {
  open: boolean;
  onClose: () => void;
  src: string;
  poster?: string;
  title: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close 3D viewer"
            className="fixed inset-0 z-[70] bg-ink/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${title} 3D view`}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            className="fixed inset-4 z-[80] mx-auto flex max-w-4xl flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-2xl md:inset-y-10 md:h-auto"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">
                  3D view
                </p>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="grid h-10 w-10 place-items-center rounded-full hover:bg-surface"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            <div className="relative min-h-[360px] flex-1 bg-surface md:min-h-[520px]">
              <ProductModel src={src} poster={poster} alt={title} />
            </div>
            <p className="px-5 py-3 text-center text-sm text-muted">
              Drag to rotate · Scroll to zoom
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
