"use client";

import { useState, type FormEvent } from "react";

const reasons = ["New Patient", "Follow-Up", "Second Opinion", "Other"];
const times = ["Morning (8am–12pm)", "Afternoon (12pm–5pm)", "No Preference"];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Request an appointment or get in touch with our team.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              Request an Appointment
            </h2>
            <p className="mt-2 text-muted text-sm">
              Fill out the form below and our team will contact you to confirm
              your appointment.
            </p>

            {status === "success" ? (
              <div className="mt-8 rounded-xl bg-teal-light border border-teal/20 p-8 text-center">
                <div className="text-teal text-4xl mb-3">&#10003;</div>
                <h3 className="text-xl font-semibold text-slate-800 font-sans">
                  Thank You!
                </h3>
                <p className="mt-2 text-muted text-sm">
                  Your appointment request has been submitted. Our team will
                  contact you within 1 business day to confirm your
                  appointment.
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
                      First Name <span className="text-red-500">*</span>
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
                      Last Name <span className="text-red-500">*</span>
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
                      Email <span className="text-red-500">*</span>
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
                      Phone
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
                    Reason for Visit
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors bg-white"
                  >
                    <option value="">Select a reason...</option>
                    {reasons.map((r) => (
                      <option key={r} value={r}>
                        {r}
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
                      Preferred Date
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
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors bg-white"
                    >
                      <option value="">Select a time...</option>
                      {times.map((t) => (
                        <option key={t} value={t}>
                          {t}
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
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Please describe your symptoms or concerns..."
                    className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                    Something went wrong. Please try again or call our office
                    directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-md bg-gold px-8 py-4 text-sm font-semibold text-white hover:bg-gold/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending"
                    ? "Submitting..."
                    : "Submit Appointment Request"}
                </button>
              </form>
            )}
          </div>

          {/* Office Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 font-sans mb-3">
                Office Location
              </h3>
              <div className="aspect-[4/3] rounded-xl bg-slate-100 flex items-center justify-center text-muted text-sm mb-4">
                <div className="text-center">
                  <svg
                    className="w-8 h-8 mx-auto mb-2 text-slate-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  Map Placeholder
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                123 Medical Center Drive, Suite 200
                <br />
                Portland, OR 97201
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-800 font-sans mb-3">
                Contact Information
              </h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <span className="font-medium text-slate-700">Phone:</span>{" "}
                  (503) 555-0100
                </li>
                <li>
                  <span className="font-medium text-slate-700">Fax:</span>{" "}
                  (503) 555-0101
                </li>
                <li>
                  <span className="font-medium text-slate-700">Email:</span>{" "}
                  info@nerveandjoint.com
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-800 font-sans mb-3">
                Office Hours
              </h3>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex justify-between">
                  <span>Monday &ndash; Friday</span>
                  <span className="font-medium text-slate-700">
                    8:00 AM &ndash; 5:00 PM
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-slate-700">
                    By Appointment
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-slate-700">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
