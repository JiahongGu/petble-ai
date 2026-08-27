import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "heshnova | Petble AI — wellness tracker for cats and small dogs",
  description:
    "Know their normal. Notice the change. Petble AI delivers advanced wellness insights in a 15g tracker designed to wear every day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="page-enter flex min-h-full flex-col font-sans text-ink">
        <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
