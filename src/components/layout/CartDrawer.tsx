"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const { items, open, setOpen, remove, total } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            aria-label="Close cart overlay"
            className="fixed inset-0 z-[70] bg-ink/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <h2 className="text-lg font-semibold">Your bag</h2>
              <button
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full hover:bg-surface"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-auto px-5 py-4">
              {items.length === 0 ? (
                <p className="pt-10 text-center text-muted">
                  Your bag is empty. A tracker is waiting.
                </p>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => {
                    const view = item.product.views.find((v) => v.id === item.colorId);
                    return (
                      <li key={`${item.product.id}-${item.colorId}`} className="flex gap-3">
                        <div className="relative h-20 w-20 rounded-xl bg-surface">
                          <Image
                            src={view?.image ?? item.product.views[0].image}
                            alt={item.product.name}
                            fill
                            unoptimized
                            className="object-contain p-2"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold">{item.product.name}</p>
                          <p className="text-sm text-muted">
                            {item.product.name} · Qty {item.qty}
                          </p>
                          <p className="mt-1 font-semibold">${item.product.price * item.qty}</p>
                        </div>
                        <button
                          className="text-sm text-muted hover:text-ink"
                          onClick={() => remove(item.product.id, item.colorId)}
                        >
                          Remove
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div className="border-t border-line p-5">
              <div className="mb-4 flex justify-between font-semibold">
                <span>Subtotal</span>
                <span>${total}</span>
              </div>
              <Button full>Checkout</Button>
              <p className="mt-3 text-center text-xs text-muted">
                Plans are chosen after purchase. Free shipping on every tracker.
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
