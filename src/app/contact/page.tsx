"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/language-context";

export default function ContactPage() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    date: "",
    time: "",
    notes: "",
  });

  const reasons = [
    { key: "reason.newPatient" as const, value: "New Patient" },
    { key: "reason.followUp" as const, value: "Follow-Up" },
    { key: "reason.secondOpinion" as const, value: "Second Opinion" },
    { key: "reason.workersComp" as const, value: "Workers' Compensation" },
    { key: "reason.personalInjury" as const, value: "Personal Injury" },
    { key: "reason.other" as const, value: "Other" },
  ];

  const times = [
    { key: "time.morning" as const, value: "Morning (8am–12pm)" },
    { key: "time.afternoon" as const, value: "Afternoon (12pm–5pm)" },
    { key: "time.noPref" as const, value: "No Preference" },
  ];

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

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
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              {t("contact.form.title")}
            </h2>
            <p className="mt-2 text-muted text-sm">
              {t("contact.form.subtitle")}
            </p>

            {status === "success" ? (
              <div className="mt-8 rounded-xl bg-teal-light border border-teal/20 p-8 text-center">
                <div className="text-teal text-4xl mb-3">&#10003;</div>
                <h3 className="text-xl font-semibold text-slate-800 font-sans">
                  {t("contact.form.thankYou")}
                </h3>
                <p className="mt-2 text-muted text-sm">
                  {t("contact.form.successMsg")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {/* Name row */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      {t("contact.form.firstName")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      {t("contact.form.lastName")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Contact row */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      {t("contact.form.email")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      {t("contact.form.phone")}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Reason */}
                <div>
                  <label
                    htmlFor="reason"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    {t("contact.form.reason")}
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors bg-white"
                  >
                    <option value="">{t("contact.form.reasonPlaceholder")}</option>
                    {reasons.map((r) => (
                      <option key={r.value} value={r.value}>
                        {t(r.key)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date/Time row */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      {t("contact.form.date")}
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      {t("contact.form.time")}
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors bg-white"
                    >
                      <option value="">{t("contact.form.timePlaceholder")}</option>
                      {times.map((ti) => (
                        <option key={ti.value} value={ti.value}>
                          {t(ti.key)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    {t("contact.form.notes")}
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder={t("contact.form.notesPlaceholder")}
                    className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                    {t("contact.form.errorMsg")}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-md bg-gold px-8 py-4 text-sm font-semibold text-white hover:bg-gold/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending"
                    ? t("contact.form.submitting")
                    : t("contact.form.submit")}
                </button>
              </form>
            )}
          </div>

          {/* Office Info */}
          <div className="space-y-8">
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
