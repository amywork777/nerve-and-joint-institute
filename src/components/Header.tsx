"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "/about", label: t("nav.about") },
    { href: "/resources", label: t("nav.resources") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-seal.svg"
            alt="Nerve and Joint Institute"
            width={44}
            height={44}
          />
          <span className="text-xl font-serif font-bold text-teal hidden sm:inline">
            Nerve &amp; Joint Institute
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-teal transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            className="flex items-center gap-1.5 rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
            aria-label={language === "en" ? "Cambiar a español" : "Switch to English"}
          >
            {language === "en" ? "🇲🇽 ES" : "🇺🇸 EN"}
          </button>

          <Link
            href="/contact"
            className="rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-white hover:bg-gold/90 transition-colors"
          >
            {t("nav.schedule")}
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-slate-700 transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-700 transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-700 transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t bg-white px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-slate-600 hover:text-teal"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={() => {
              setLanguage(language === "en" ? "es" : "en");
              setMobileOpen(false);
            }}
            className="block w-full text-left py-3 text-sm font-medium text-slate-600 hover:text-teal"
          >
            {language === "en" ? "🇲🇽 Español" : "🇺🇸 English"}
          </button>

          <Link
            href="/contact"
            className="mt-2 block rounded-md bg-gold px-5 py-2.5 text-center text-sm font-semibold text-white"
            onClick={() => setMobileOpen(false)}
          >
            {t("nav.schedule")}
          </Link>
        </nav>
      )}
    </header>
  );
}
