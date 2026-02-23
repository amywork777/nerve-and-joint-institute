"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "@/lib/language-context";
import { conditions, getConditionBySlug } from "@/lib/conditions";
import type { TranslationKey } from "@/lib/translations";

export default function ConditionPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const condition = getConditionBySlug(slug);

  if (!condition) {
    return (
      <div className="py-20 px-6 text-center">
        <h1 className="text-2xl font-bold text-slate-800">
          Condition not found
        </h1>
        <Link
          href="/about#conditions"
          className="mt-4 inline-block text-teal hover:text-teal-dark transition-colors font-semibold"
        >
          &larr; {t("conditions.detail.back" as TranslationKey)}
        </Link>
      </div>
    );
  }

  const sections = [
    {
      labelKey: "conditions.detail.overview" as TranslationKey,
      contentKey: condition.overviewKey as TranslationKey,
    },
    {
      labelKey: "conditions.detail.diagnosis" as TranslationKey,
      contentKey: condition.diagnosisKey as TranslationKey,
    },
    {
      labelKey: "conditions.detail.treatment" as TranslationKey,
      contentKey: condition.treatmentKey as TranslationKey,
    },
  ];

  // Find related conditions (exclude current)
  const related = conditions
    .filter((c) => c.slug !== condition.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero with background image */}
      <section className="relative overflow-hidden text-white">
        <Image
          src={condition.heroImage}
          alt=""
          fill
          className="object-cover grayscale"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/90 to-teal/80" />
        <div className="relative py-20 md:py-28 px-6">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/about#conditions"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-6"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              {t("conditions.detail.back" as TranslationKey)}
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold">
              {t(condition.titleKey as TranslationKey)}
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-3xl leading-relaxed">
              {t(condition.shortDescKey as TranslationKey)}
            </p>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-4xl space-y-16">
          {sections.map((section, idx) => (
            <div key={section.labelKey}>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal text-white text-sm font-bold shrink-0">
                  {idx + 1}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                  {t(section.labelKey)}
                </h2>
              </div>
              <p className="text-muted leading-relaxed pl-14">
                {t(section.contentKey)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal py-16 px-6 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("conditions.detail.cta.title" as TranslationKey)}
          </h2>
          <p className="mt-4 text-lg text-white/80">
            {t("conditions.detail.cta.subtitle" as TranslationKey)}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-white hover:bg-gold/90 transition-colors"
            >
              {t("nav.schedule")}
            </Link>
            <a
              href="tel:9167410848"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              {t("home.cta.call")}
            </a>
          </div>
        </div>
      </section>

      {/* Related conditions */}
      <section className="bg-teal-light py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">
            {t("conditions.section.title" as TranslationKey)}
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((c) => (
              <Link
                key={c.slug}
                href={`/conditions/${c.slug}`}
                className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow group"
              >
                <h3 className="text-sm font-semibold text-slate-800 group-hover:text-teal transition-colors font-sans">
                  {t(c.titleKey as TranslationKey)}
                </h3>
                <p className="mt-2 text-xs text-muted leading-relaxed line-clamp-2">
                  {t(c.shortDescKey as TranslationKey)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
