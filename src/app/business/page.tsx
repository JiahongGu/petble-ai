import type { Metadata } from "next";
import { ContactForm } from "@/components/home/Newsletter";

export const metadata: Metadata = {
  title: "Partner with Us | heshnova",
  description:
    "Leave a few details and we’ll come back with pricing, samples, and next steps.",
};

export default function BusinessPage() {
  return (
    <div>
      <ContactForm id="inquiry" className="py-16 md:py-24" />
    </div>
  );
}
