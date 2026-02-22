import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Services | Nerve and Joint Institute",
  description:
    "Learn about our practice, meet Dr. James Chen, and explore our comprehensive nerve and joint services.",
};

const services = [
  {
    title: "Nerve Conduction Studies",
    description:
      "Non-invasive diagnostic tests that measure how quickly electrical signals move through your nerves, helping identify nerve damage, compression, or disease.",
  },
  {
    title: "Joint Injections",
    description:
      "Targeted corticosteroid or hyaluronic acid injections to reduce joint inflammation, relieve pain, and improve mobility in affected areas.",
  },
  {
    title: "Electromyography (EMG)",
    description:
      "Advanced diagnostic testing that evaluates the electrical activity of muscles to detect neuromuscular abnormalities and guide treatment decisions.",
  },
  {
    title: "Pain Management",
    description:
      "Multidisciplinary approaches to chronic pain including medication management, interventional procedures, and lifestyle modifications.",
  },
  {
    title: "Physical Therapy",
    description:
      "Individualized rehabilitation programs designed to restore function, improve strength, and enhance mobility through targeted exercises and manual therapy.",
  },
  {
    title: "Ultrasound-Guided Procedures",
    description:
      "Real-time ultrasound imaging ensures precise needle placement for injections and aspirations, improving accuracy and patient safety.",
  },
];

const conditions = [
  "Carpal Tunnel Syndrome",
  "Peripheral Neuropathy",
  "Rheumatoid Arthritis",
  "Osteoarthritis",
  "Sciatica",
  "Herniated Disc",
  "Fibromyalgia",
  "Tennis Elbow",
  "Plantar Fasciitis",
  "Cubital Tunnel Syndrome",
  "Spinal Stenosis",
  "Chronic Pain Syndrome",
  "Radiculopathy",
  "Tendinitis",
  "Bursitis",
  "Myasthenia Gravis",
];

const education = [
  "MD, Johns Hopkins University School of Medicine",
  "Residency in Neurology, Massachusetts General Hospital",
  "Fellowship in Pain Medicine, Cleveland Clinic",
  "Board Certified in Neurology and Pain Medicine",
];

const affiliations = [
  "American Academy of Neurology",
  "American Association of Neuromuscular Medicine",
  "International Association for the Study of Pain",
  "Oregon Medical Association",
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
            Dedicated to excellence in nerve and joint care since 2010.
          </p>
        </div>
      </section>

      {/* Doctor Bio */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-5 items-start">
          <div className="lg:col-span-2">
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-teal-light to-teal/20 flex items-end justify-center overflow-hidden">
              <div className="w-40 h-56 bg-teal/20 rounded-t-full" />
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold text-gold uppercase tracking-wider">
              Lead Physician
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-800">
              Dr. James Chen, MD
            </h2>
            <p className="mt-1 text-muted font-medium">
              Board-Certified Neurologist &amp; Pain Management Specialist
            </p>
            <p className="mt-6 text-muted leading-relaxed">
              Dr. Chen brings over 15 years of specialized experience in
              diagnosing and treating complex nerve and joint conditions. His
              patient-centered approach combines thorough diagnostic evaluation
              with the latest evidence-based treatments to achieve optimal
              outcomes.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              He is committed to staying at the forefront of medical advances,
              regularly participating in research and continuing education to
              bring the most current treatment options to his patients.
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
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
              <div>
                <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider font-sans mb-3">
                  Professional Affiliations
                </h3>
                <ul className="space-y-2">
                  {affiliations.map((item) => (
                    <li key={item} className="text-sm text-muted flex gap-2">
                      <span className="text-teal mt-1 shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Philosophy */}
      <section className="bg-teal-light py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-800">
            Our Philosophy
          </h2>
          <p className="mt-6 text-muted leading-relaxed text-lg">
            At Nerve and Joint Institute, we believe that every patient
            deserves a thorough evaluation, a clear diagnosis, and a
            personalized treatment plan. We take the time to listen to your
            concerns, explain your options, and work together toward the best
            possible outcome. Our goal is not just to treat symptoms, but to
            address the root cause of your condition.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-20 px-6 scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Comprehensive diagnostic and treatment services tailored to your
              specific condition.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      <section id="conditions" className="bg-teal-light py-20 px-6 scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Conditions We Treat
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Our specialists have extensive experience treating a wide range
              of nerve and joint conditions.
            </p>
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
