"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { conditions } from "@/lib/conditions";
import type { TranslationKey } from "@/lib/translations";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-dark via-teal to-teal/90 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <p className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
            Nerve &amp; Joint Institute
          </p>
          <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
            Jianxun Zhou, M.D. PhD QME
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            {t("home.hero.tagline")}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            {t("home.hero.subtitle")}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-white hover:bg-gold/90 transition-colors"
            >
              {t("nav.schedule")}
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              {t("home.hero.learnMore")}
            </Link>
          </div>
          <p className="mt-10 text-sm text-white/70">
            1001 Nut Tree Road, Suite 110, Vacaville, CA 95687
          </p>
        </div>
      </section>

      {/* Why Patients Trust Dr. Zhou */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            {t("home.whyTrust.title")}
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            {t("home.whyTrust.subtitle")}
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {([
              { titleKey: "home.whyTrust.wholePerson.title" as const, descKey: "home.whyTrust.wholePerson.desc" as const, icon: <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg> },
              { titleKey: "home.whyTrust.expertise.title" as const, descKey: "home.whyTrust.expertise.desc" as const, icon: <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" /></svg> },
              { titleKey: "home.whyTrust.modern.title" as const, descKey: "home.whyTrust.modern.desc" as const, icon: <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.341 4.024A2.25 2.25 0 0115.5 20.25H8.5a2.25 2.25 0 01-2.159-1.726L5 14.5m14 0H5" /></svg> },
            ]).map((item) => (
              <div
                key={item.titleKey}
                className="rounded-xl bg-slate-50 p-8 text-left hover:shadow-md transition-shadow"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-teal-light p-3">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 font-sans">
                  {t(item.titleKey)}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {t(item.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-teal-light py-20 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            {t("home.services.title")}
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            {t("home.services.subtitle")}
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {([
              { titleKey: "service.regen.title" as const, descKey: "service.regen.desc" as const },
              { titleKey: "service.emg.title" as const, descKey: "service.emg.desc" as const },
              { titleKey: "service.botox.title" as const, descKey: "service.botox.desc" as const },
              { titleKey: "service.rehab.title" as const, descKey: "service.rehab.desc" as const },
            ]).map((service) => (
              <Link
                key={service.titleKey}
                href="/about#services"
                className="rounded-xl bg-white p-8 text-left shadow-sm hover:shadow-md transition-shadow group"
              >
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-teal transition-colors font-sans">
                  {t(service.titleKey)}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {t(service.descKey)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            {t("conditions.section.title" as TranslationKey)}
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            {t("conditions.section.subtitle" as TranslationKey)}
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {conditions.slice(0, 4).map((condition) => (
              <Link
                key={condition.slug}
                href={`/conditions/${condition.slug}`}
                className="rounded-xl bg-white text-left shadow-sm hover:shadow-md transition-all group overflow-hidden"
              >
                <div className="relative h-32 w-full overflow-hidden">
                  <Image
                    src={condition.heroImage}
                    alt={t(condition.titleKey as TranslationKey)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-slate-800 group-hover:text-teal transition-colors font-sans">
                    {t(condition.titleKey as TranslationKey)}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
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
          <Link
            href="/about#conditions"
            className="mt-8 inline-flex items-center gap-2 text-teal font-semibold hover:text-teal-dark transition-colors"
          >
            {t("conditions.detail.back" as TranslationKey)}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Doctor Teaser */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2 items-center">
          <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-teal-light to-teal/20 overflow-hidden relative">
            <Image
              src="/dr-zhou.png"
              alt="Dr. Jianxun Zhou"
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-gold uppercase tracking-wider">
              {t("home.doctor.meet")}
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-800">
              Jianxun Zhou, M.D. PhD QME
            </h2>
            <p className="mt-2 text-muted font-medium">
              {t("home.doctor.cred1")}
            </p>
            <p className="text-muted font-medium">
              {t("home.doctor.cred2")}
            </p>
            <p className="text-muted font-medium">
              {t("home.doctor.cred3")}
            </p>
            <p className="mt-6 text-muted leading-relaxed">
              {t("home.doctor.bio")}
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-teal font-semibold hover:text-teal-dark transition-colors"
            >
              {t("home.doctor.learnMore")}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Patient Stories */}
      <section className="bg-teal-light py-20 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            {t("home.testimonials.title")}
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {([
              "home.testimonial.1" as const,
              "home.testimonial.2" as const,
              "home.testimonial.3" as const,
              "home.testimonial.4" as const,
              "home.testimonial.5" as const,
              "home.testimonial.6" as const,
              "home.testimonial.7" as const,
              "home.testimonial.8" as const,
              "home.testimonial.9" as const,
            ]).map((key) => (
              <div
                key={key}
                className="rounded-xl bg-white p-8 text-left shadow-sm"
              >
                <div className="text-gold text-3xl leading-none mb-3">
                  &ldquo;
                </div>
                <p className="text-sm text-muted leading-relaxed italic">
                  {t(key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-teal py-16 px-6 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("home.cta.title")}
          </h2>
          <p className="mt-4 text-lg text-white/80">
            {t("home.cta.subtitle")}
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
    </>
  );
}
