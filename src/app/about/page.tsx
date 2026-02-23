"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { conditions as conditionData } from "@/lib/conditions";
import type { TranslationKey } from "@/lib/translations";

export default function AboutPage() {
  const { t } = useLanguage();

  const services = [
    {
      titleKey: "service.regen.title" as const,
      descKey: "about.service.regen.desc" as const,
      // DNA helix
      icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.341 4.024A2.25 2.25 0 0115.5 20.25H8.5a2.25 2.25 0 01-2.159-1.726L5 14.5m14 0H5",
    },
    {
      titleKey: "service.emg.title" as const,
      descKey: "about.service.emg.desc" as const,
      // Lightning bolt
      icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    },
    {
      titleKey: "service.botox.title" as const,
      descKey: "about.service.botox.desc" as const,
      // Syringe/eyedropper
      icon: "M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      titleKey: "service.rehab.title" as const,
      descKey: "about.service.rehab.desc" as const,
      // Heart with pulse
      icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
    },
  ];

  const credentials = [
    "cred.pmr" as const,
    "cred.edx" as const,
    "cred.fellowship" as const,
  ];

  const education = [
    "edu.md" as const,
    "edu.phd" as const,
    "edu.neuro" as const,
    "edu.residency" as const,
    "edu.fellowship" as const,
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-teal-dark to-teal py-20 px-6 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            {t("about.hero.title")}
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            {t("about.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Doctor Bio */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-5 items-start">
          <div className="lg:col-span-2">
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-teal-light to-teal/20 overflow-hidden relative">
              <Image
                src="/dr-zhou.png"
                alt="Dr. Jianxun Zhou"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold text-gold uppercase tracking-wider">
              {t("about.lead")}
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-800">
              Jianxun Zhou, M.D. PhD QME
            </h2>

            <div className="mt-3 space-y-1">
              {credentials.map((key) => (
                <p key={key} className="text-muted font-medium text-sm">
                  {t(key)}
                </p>
              ))}
            </div>

            <p className="mt-6 text-muted leading-relaxed">
              {t("about.bio1")}
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              {t("about.bio2")}
            </p>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider font-sans mb-3">
                {t("about.education")}
              </h3>
              <ul className="space-y-2">
                {education.map((key) => (
                  <li key={key} className="text-sm text-muted flex gap-2">
                    <span className="text-teal mt-1 shrink-0">&#10003;</span>
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Patients Trust */}
      <section className="bg-teal-light py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">
            {t("home.whyTrust.title")}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 font-sans">
                {t("home.whyTrust.wholePerson.title")}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {t("home.whyTrust.wholePerson.desc")}
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 font-sans">
                {t("home.whyTrust.expertise.title")}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {t("home.whyTrust.expertise.desc")}
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 font-sans">
                {t("home.whyTrust.modern.title")}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {t("home.whyTrust.modern.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-20 px-6 scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              {t("about.services.title")}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.titleKey}
                className="rounded-xl border border-slate-100 p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-light flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 font-sans">
                  {t(service.titleKey)}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {t(service.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section
        id="conditions"
        className="bg-teal-light py-20 px-6 scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              {t("conditions.section.title" as TranslationKey)}
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              {t("conditions.section.subtitle" as TranslationKey)}
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {conditionData.map((condition) => (
              <Link
                key={condition.slug}
                href={`/conditions/${condition.slug}`}
                className="rounded-xl bg-white shadow-sm hover:shadow-md transition-all group overflow-hidden"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={condition.heroImage}
                    alt={t(condition.titleKey as TranslationKey)}
                    fill
                    className="object-cover grayscale group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-slate-800 group-hover:text-teal transition-colors font-sans">
                    {t(condition.titleKey as TranslationKey)}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted leading-relaxed line-clamp-2">
                    {t(condition.shortDescKey as TranslationKey)}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal">
                    {t("conditions.section.learnMore" as TranslationKey)}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
