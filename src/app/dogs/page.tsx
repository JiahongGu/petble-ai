import type { Metadata } from "next";
import { ProductPage } from "@/components/product/ProductPage";

export const metadata: Metadata = {
  title: "Petble AI | heshnova",
  description:
    "A 15g everyday wearable — activity, wellness, and at-home connection.",
};

export default function ProductRoutePage() {
  return <ProductPage />;
}
