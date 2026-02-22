"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export default function AboutPage() {
  const { t } = useLanguage();

  const services = [
    { titleKey: "service.regen.title" as const, descKey: "about.service.regen.desc" as const },
    { titleKey: "service.emg.title" as const, descKey: "about.service.emg.desc" as const },
    { titleKey: "service.botox.title" as const, descKey: "about.service.botox.desc" as const },
    { titleKey: "service.rehab.title" as const, descKey: "about.service.rehab.desc" as const },
  ];

  const conditions = [
    "condition.nerve" as const,
    "condition.neuropathy" as const,
    "condition.radiculopathy" as const,
    "condition.muscle" as const,
    "condition.sports" as const,
    "condition.arthritis" as const,
    "condition.stenosis" as const,
    "condition.disc" as const,
    "condition.facet" as const,
    "condition.chronic" as const,
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
                      d="M12 4.5v15m7.5-7.5h-15"
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

      {/* Conditions Treated */}
      <section
        id="conditions"
        className="bg-teal-light py-20 px-6 scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              {t("about.conditions.title")}
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {conditions.map((key) => (
              <div
                key={key}
                className="rounded-lg bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm hover:shadow-md transition-shadow"
              >
                {t(key)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
