import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Patient Resources | Nerve and Joint Institute",
  description:
    "Find insurance information and answers to frequently asked questions at Nerve and Joint Institute.",
};

const insurances = [
  "Anthem Blue Cross",
  "Blue Shield",
  "Hill Physician",
  "Medicare",
  "UnitedHealthcare",
  "Aetna",
  "Workers' Compensation",
  "Personal Injury Claims",
];

const steps = [
  {
    number: "01",
    title: "Schedule Your Visit",
    description:
      "Call us at (916) 741-0848 or use our online form to schedule your consultation with Dr. Zhou.",
  },
  {
    number: "02",
    title: "Arrive 15 Minutes Early",
    description:
      "Please arrive early to complete any remaining paperwork. Bring your ID, insurance card, and any relevant medical records.",
  },
  {
    number: "03",
    title: "Comprehensive Consultation",
    description:
      "Dr. Zhou will perform a thorough evaluation, review your medical history, and discuss your symptoms and concerns in detail.",
  },
  {
    number: "04",
    title: "Personalized Treatment Plan",
    description:
      "Based on the evaluation, you will receive a customized treatment plan with clear next steps and expected outcomes.",
  },
];

const faqs = [
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring a valid photo ID, your insurance card, a list of current medications, any relevant medical records or imaging studies, and a referral from your primary care physician if required by your insurance.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are located at 1001 Nut Tree Road, Suite 110, Vacaville, CA 95687.",
  },
  {
    question: "Do you accept workers' compensation cases?",
    answer:
      "Yes, Dr. Zhou has extensive experience with workers' compensation cases and personal injury claims. Contact our office to discuss your specific situation.",
  },
  {
    question: "What is an EMG test?",
    answer:
      "An EMG (electromyography) measures the electrical activity in your muscles and nerves. It helps diagnose conditions like nerve compressions, peripheral neuropathy, radiculopathy, and muscle disorders. Dr. Zhou is a Diplomate of the American Board of Electrodiagnostic Medicine.",
  },
  {
    question: "What conditions does Dr. Zhou treat?",
    answer:
      "Dr. Zhou treats a wide range of conditions including nerve compressions (carpal tunnel, cubital tunnel), peripheral neuropathy, radiculopathy, muscle disorders, sports and overuse injuries, arthritis, joint pain, spinal stenosis, disc herniation, facet joint arthritis, and chronic pain.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer regenerative medicine, electrodiagnostic medicine (EMG), BOTOX treatment, and rehabilitation services. Each treatment plan is personalized to your specific needs.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-teal-dark to-teal py-20 px-6 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            Patient Resources
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Everything you need to know before, during, and after your visit.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              What to Expect
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Your first visit is an important step. Here&apos;s what the
              process looks like.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-5xl font-bold text-teal-light font-sans">
                  {step.number}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-800 font-sans">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {step.description}
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
              Insurance Accepted
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              We currently accept the following plans.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {insurances.map((name) => (
              <div
                key={name}
                className="rounded-lg bg-white px-6 py-4 text-center text-sm font-medium text-slate-700 shadow-sm"
              >
                {name}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Don&apos;t see your insurance listed?{" "}
            <Link
              href="/contact"
              className="text-teal font-medium hover:underline"
            >
              Contact us
            </Link>{" "}
            to verify your coverage.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-medium text-slate-800 hover:bg-slate-50 transition-colors font-sans text-sm">
                  {faq.question}
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
                  {faq.answer}
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
            Start Your Journey to Better Living Today
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Call us at (916) 741-0848 or email info@nerveandjoint.com to
            schedule your consultation.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-white hover:bg-gold/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
