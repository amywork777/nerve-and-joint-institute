"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export default function ResourcesPage() {
  const { t } = useLanguage();

  const steps = [
    { number: "01", titleKey: "resources.step1.title" as const, descKey: "resources.step1.desc" as const },
    { number: "02", titleKey: "resources.step2.title" as const, descKey: "resources.step2.desc" as const },
    { number: "03", titleKey: "resources.step3.title" as const, descKey: "resources.step3.desc" as const },
    { number: "04", titleKey: "resources.step4.title" as const, descKey: "resources.step4.desc" as const },
  ];

  const insurances = [
    "insurance.anthem" as const,
    "insurance.blueShield" as const,
    "insurance.hill" as const,
    "insurance.medicare" as const,
    "insurance.united" as const,
    "insurance.aetna" as const,
    "insurance.workers" as const,
    "insurance.pi" as const,
  ];

  const faqs = [
    { qKey: "resources.faq1.q" as const, aKey: "resources.faq1.a" as const },
    { qKey: "resources.faq2.q" as const, aKey: "resources.faq2.a" as const },
    { qKey: "resources.faq3.q" as const, aKey: "resources.faq3.a" as const },
    { qKey: "resources.faq4.q" as const, aKey: "resources.faq4.a" as const },
    { qKey: "resources.faq5.q" as const, aKey: "resources.faq5.a" as const },
    { qKey: "resources.faq6.q" as const, aKey: "resources.faq6.a" as const },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-teal-dark to-teal py-20 px-6 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            {t("resources.hero.title")}
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            {t("resources.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              {t("resources.expect.title")}
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              {t("resources.expect.subtitle")}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-5xl font-bold text-teal-light font-sans">
                  {step.number}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-800 font-sans">
                  {t(step.titleKey)}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {t(step.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="bg-teal-light py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              {t("resources.insurance.title")}
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              {t("resources.insurance.subtitle")}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {insurances.map((key) => (
              <div
                key={key}
                className="rounded-lg bg-white px-6 py-4 text-center text-sm font-medium text-slate-700 shadow-sm"
              >
                {t(key)}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            {t("resources.insurance.notListed")}{" "}
            <Link
              href="/contact"
              className="text-teal font-medium hover:underline"
            >
              {t("resources.insurance.contactUs")}
            </Link>{" "}
            {t("resources.insurance.verify")}
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              {t("resources.faq.title")}
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.qKey}
                className="group rounded-xl border border-slate-200 overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-medium text-slate-800 hover:bg-slate-50 transition-colors font-sans text-sm">
                  {t(faq.qKey)}
                  <svg
                    className="w-5 h-5 text-muted shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-muted leading-relaxed">
                  {t(faq.aKey)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal py-16 px-6 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">
            {t("resources.cta.title")}
          </h2>
          <p className="mt-4 text-lg text-white/80">
            {t("resources.cta.subtitle")}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-white hover:bg-gold/90 transition-colors"
          >
            {t("resources.cta.button")}
          </Link>
        </div>
      </section>
    </>
  );
}
