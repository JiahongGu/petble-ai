import type { Metadata } from "next";
import { ProductPage } from "@/components/product/ProductPage";

export const metadata: Metadata = {
  title: "PawBasis Smart Tracker | heshnova",
  description:
    "PawBasis Smart Tracker — outdoor GPS (AL600) for live location, Safe Circles, and lost-pet alerts.",
};

export default function ClipRoutePage() {
  return <ProductPage />;
}
