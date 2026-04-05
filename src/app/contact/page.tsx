"use client";

import { useLanguage } from "@/lib/language-context";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-teal-dark to-teal py-20 px-6 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold">{t("contact.hero.title")}</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            {t("contact.hero.subtitle")}
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-4xl grid gap-12 md:grid-cols-2">
          {/* Map + Address */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 font-sans mb-3">
              {t("contact.office.location")}
            </h3>
            <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
              <iframe
                title="Nerve and Joint Institute Location"
                src="https://maps.google.com/maps?q=1001+Nut+Tree+Rd+Suite+110,+Vacaville,+CA+95687&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-sm text-muted leading-relaxed">
              1001 Nut Tree Road, Suite 110
              <br />
              Vacaville, CA 95687
            </p>
          </div>

          {/* Contact Info + Hours */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 font-sans mb-3">
                {t("contact.office.info")}
              </h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <span className="font-medium text-slate-700">Phone:</span>{" "}
                  <a href="tel:9167410848" className="hover:text-teal">(916) 741-0848</a>
                </li>
                <li>
                  <span className="font-medium text-slate-700">Fax:</span>{" "}
                  800-268-8044
                </li>
                <li>
                  <span className="font-medium text-slate-700">Email:</span>{" "}
                  <a href="mailto:info@nerveandjoint.com" className="hover:text-teal">info@nerveandjoint.com</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-800 font-sans mb-3">
                {t("contact.office.hours")}
              </h3>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex justify-between">
                  <span>{t("contact.office.monFri")}</span>
                  <span className="font-medium text-slate-700">
                    8:00 AM &ndash; 5:00 PM
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>{t("contact.office.sat")}</span>
                  <span className="font-medium text-slate-700">
                    {t("contact.office.byAppt")}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>{t("contact.office.sun")}</span>
                  <span className="font-medium text-slate-700">{t("contact.office.closed")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
