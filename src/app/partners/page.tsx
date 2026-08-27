import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Partner with us | heshnova",
  description:
    "Work with heshnova on distribution, OEM, and ODM for consumer IoT.",
};

export default function PartnersPage() {
  redirect("/business#inquiry");
}
