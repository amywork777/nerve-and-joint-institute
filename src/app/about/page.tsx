import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Services | Nerve and Joint Institute",
  description:
    "Learn about Dr. Jianxun Zhou, MD PhD QME and explore our comprehensive nerve and musculoskeletal services.",
};

const services = [
  {
    title: "Regenerative Medicine",
    description:
      "Advanced regenerative therapies that harness the body's natural healing abilities to repair damaged tissues, reduce inflammation, and restore function.",
  },
  {
    title: "Electrodiagnostic Medicine (EMG)",
    description:
      "Precise diagnostic testing to evaluate nerve and muscle function, helping identify nerve damage, compression, or neuromuscular disease for accurate diagnosis.",
  },
  {
    title: "BOTOX Treatment",
    description:
      "Therapeutic BOTOX injections for chronic pain conditions, muscle spasticity, and other neuromuscular disorders to improve comfort and function.",
  },
  {
    title: "Rehabilitation",
    description:
      "Comprehensive rehabilitation programs designed to restore mobility, strength, and quality of life through personalized treatment plans.",
  },
];

const conditions = [
  "Nerve Compressions (Carpal Tunnel, Cubital Tunnel)",
  "Peripheral Neuropathy",
  "Radiculopathy",
  "Muscle Disorders & Myopathies",
  "Sports & Overuse Injuries",
  "Arthritis & Joint Pain",
  "Spinal Stenosis",
  "Disc Herniation",
  "Facet Joint Arthritis",
  "Chronic Pain",
];

const education = [
  "MD, Beijing Medical University",
  "PhD in Health and Rehabilitation Science, University of Pittsburgh",
  "Neuroscience Research, University of Michigan",
  "Residency in Physical Medicine and Rehabilitation, Albany Medical Center",
  "Fellowship in Electrodiagnostic and Spine Medicine, University of Massachusetts",
];

const credentials = [
  "Diplomate, American Board of Physical Medicine & Rehabilitation",
  "Diplomate, American Board of Electrodiagnostic Medicine",
  "Fellowship Trained in Electrodiagnostic Medicine and Interventional Pain",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-teal-dark to-teal py-20 px-6 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            About Our Practice
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Precision neuromuscular care with Dr. Jianxun Zhou.
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
              Lead Physician
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-800">
              Jianxun Zhou, M.D. PhD QME
            </h2>

            <div className="mt-3 space-y-1">
              {credentials.map((cred) => (
                <p key={cred} className="text-muted font-medium text-sm">
                  {cred}
                </p>
              ))}
            </div>

            <p className="mt-6 text-muted leading-relaxed">
              Looking for expert diagnosis and treatment of nerve and
              musculoskeletal issues? Dr. Jianxun Zhou specializes in EMG and
              musculoskeletal medicine, offering personalized care to help you
              move and feel better.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Dr. Zhou earned his MD from Beijing Medical University and a PhD
              in Health and Rehabilitation Science from the University of
              Pittsburgh. He conducted neuroscience research at the University
              of Michigan before completing his residency in Physical Medicine
              and Rehabilitation at Albany Medical Center and a fellowship in
              Electrodiagnostic and Spine Medicine at the University of
              Massachusetts. He later practiced at Illinois Neurological
              Institute and now serves patients in California, focusing on
              chronic pain and workers&apos; comp cases.
            </p>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider font-sans mb-3">
                Education &amp; Training
              </h3>
              <ul className="space-y-2">
                {education.map((item) => (
                  <li key={item} className="text-sm text-muted flex gap-2">
                    <span className="text-teal mt-1 shrink-0">&#10003;</span>
                    {item}
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
            Why Patients Trust Dr. Zhou
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 font-sans">
                Whole-Person Care
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Compassionate, patient-first approach — like treating family.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 font-sans">
                Deep Expertise
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Years of experience in EMG, interventional spine procedures,
                and musculoskeletal conditions.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 font-sans">
                Modern Methods
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Uses the latest tools and techniques for accurate diagnosis and
                effective treatment.
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
              Our Services
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
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
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {service.description}
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
              Conditions Treated
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {conditions.map((condition) => (
              <div
                key={condition}
                className="rounded-lg bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm hover:shadow-md transition-shadow"
              >
                {condition}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
