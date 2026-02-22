"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
        {/* Brand + contact */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-wide.svg"
            alt="Nerve and Joint Institute"
            width={220}
            height={98}
            className="mb-4 invert"
          />
          <p className="text-sm leading-relaxed">
            1001 Nut Tree Road, Suite 110
            <br />
            Vacaville, CA 95687
          </p>
          <p className="mt-3 text-sm">
            Phone: (916) 741-0848
            <br />
            Fax: 800-268-8044
            <br />
            Email: info@nerveandjoint.com
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            {t("footer.quickLinks")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about"
                className="hover:text-teal-light transition-colors"
              >
                {t("footer.aboutServices")}
              </Link>
            </li>
            <li>
              <Link
                href="/about#conditions"
                className="hover:text-teal-light transition-colors"
              >
                {t("footer.conditions")}
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="hover:text-teal-light transition-colors"
              >
                {t("footer.resources")}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-teal-light transition-colors"
              >
                {t("footer.contactUs")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            {t("footer.officeHours")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>{t("footer.monFri")}</li>
            <li>{t("footer.sat")}</li>
            <li>{t("footer.sun")}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
