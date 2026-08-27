"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { Product } from "@/data/site";

export type CartItem = {
  product: Product;
  colorId: string;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (product: Product, colorId: string) => void;
  remove: (productId: string, colorId: string) => void;
  count: number;
  total: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const value = useMemo<CartContextValue>(() => {
    const add = (product: Product, colorId: string) => {
      setItems((prev) => {
        const i = prev.findIndex(
          (x) => x.product.id === product.id && x.colorId === colorId,
        );
        if (i >= 0) {
          const next = [...prev];
          next[i] = { ...next[i], qty: next[i].qty + 1 };
          return next;
        }
        return [...prev, { product, colorId, qty: 1 }];
      });
      setOpen(true);
    };

    const remove = (productId: string, colorId: string) => {
      setItems((prev) =>
        prev.filter((x) => !(x.product.id === productId && x.colorId === colorId)),
      );
    };

    const count = items.reduce((n, x) => n + x.qty, 0);
    const total = items.reduce((n, x) => n + x.qty * x.product.price, 0);

    return { items, open, setOpen, add, remove, count, total };
  }, [items, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
