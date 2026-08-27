"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search, X, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";
import { showEverydayIot, showAppTeaser } from "@/data/site";

const navLinks = [
  { href: "/#pet", label: "Pet" },
  { href: "/#ecosystem", label: "Ecosystem" },
  ...(showEverydayIot
    ? [{ href: "/#heshnova", label: "Everyday IoT" }]
    : []),
  { href: "/#how", label: "AI & Technology" },
  ...(showAppTeaser ? [{ href: "/#app", label: "App" }] : []),
  { href: "/#day", label: "Discover" },
  { href: "/#faq", label: "Support" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");
  const overlayHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu || search ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu, search]);

  const solid = !overlayHero || scrolled || menu || search;

  const results = [
    ...navLinks,
    { href: "/business#inquiry", label: "Partner with Us" },
  ].filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  const closeMenu = () => setMenu(false);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 h-16 lg:h-20 transition-[background,box-shadow,color] duration-300",
          solid
            ? "bg-white/95 shadow-[0_1px_0_rgba(18,22,35,0.08)] backdrop-blur-md text-ink"
            : "bg-transparent text-white",
        )}
      >
        <div className="container-site flex h-full items-center gap-4 lg:gap-8">
          <Logo light={!solid} size="nav" />

          <nav className="ml-auto hidden min-w-0 items-center gap-3 xl:gap-5 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-[0.8125rem] font-semibold xl:text-[0.9rem]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/business#inquiry"
              className={cn(
                "whitespace-nowrap rounded-full bg-brand px-4 py-2 text-[0.8125rem] font-semibold text-ink transition-colors hover:bg-brand-hover xl:text-[0.9rem]",
              )}
            >
              Partner with Us
            </Link>
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setSearch(true)}
              className="grid h-10 w-10 place-items-center rounded-full hover:bg-black/5"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              className="grid h-10 w-10 place-items-center rounded-full lg:hidden"
              onClick={() => setMenu((v) => !v)}
              aria-label="Menu"
            >
              {menu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white pt-20 lg:hidden"
          >
            <nav className="container-site flex flex-col gap-1 py-4 text-lg font-semibold">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-3 hover:bg-surface"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/business#inquiry"
                onClick={closeMenu}
                className="mt-2 rounded-full bg-brand px-3 py-3 text-center text-ink"
              >
                Partner with Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {search && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/50 backdrop-blur-sm"
            onClick={() => setSearch(false)}
          >
            <motion.div
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="mx-auto mt-24 w-[min(640px,calc(100%-2rem))] rounded-2xl bg-white p-5 shadow-2xl"
            >
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search…"
                className="w-full rounded-xl border border-line bg-surface px-4 py-3 outline-none focus:border-ink"
              />
              <ul className="mt-3 max-h-72 overflow-auto">
                {results.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setSearch(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-3 hover:bg-surface"
                    >
                      <span className="font-semibold">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
