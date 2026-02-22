import Link from "next/link";

const features = [
  {
    title: "Board Certified",
    description:
      "Our physicians are board-certified specialists with extensive training in nerve and joint disorders.",
    icon: (
      <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
      </svg>
    ),
  },
  {
    title: "Advanced Technology",
    description:
      "State-of-the-art diagnostic equipment and minimally invasive treatment options for optimal outcomes.",
    icon: (
      <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.341 4.024A2.25 2.25 0 0115.5 20.25H8.5a2.25 2.25 0 01-2.159-1.726L5 14.5m14 0H5" />
      </svg>
    ),
  },
  {
    title: "Patient-Centered Care",
    description:
      "We take the time to listen, educate, and develop personalized treatment plans for every patient.",
    icon: (
      <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Comprehensive Treatment",
    description:
      "From diagnosis to recovery, we offer a full spectrum of services under one roof.",
    icon: (
      <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
];

const services = [
  {
    title: "Nerve Conduction Studies",
    description: "Precise diagnostic testing to evaluate nerve function and identify the source of pain or weakness.",
  },
  {
    title: "Joint Injections",
    description: "Targeted injections to reduce inflammation and relieve pain in affected joints.",
  },
  {
    title: "Electromyography (EMG)",
    description: "Advanced muscle and nerve testing to diagnose conditions affecting the neuromuscular system.",
  },
  {
    title: "Pain Management",
    description: "Comprehensive approaches to chronic pain including medication, therapy, and interventional procedures.",
  },
  {
    title: "Physical Therapy",
    description: "Guided rehabilitation programs to restore mobility, strength, and function.",
  },
  {
    title: "Ultrasound-Guided Procedures",
    description: "Real-time imaging for precise needle placement during injections and diagnostic procedures.",
  },
];

const testimonials = [
  {
    quote:
      "The team at Nerve and Joint Institute changed my life. After years of chronic pain, I finally found relief through their comprehensive treatment approach.",
    name: "Sarah M.",
    detail: "Neuropathy Patient",
  },
  {
    quote:
      "Dr. Chen took the time to explain my condition thoroughly and developed a treatment plan that actually worked. I couldn't be more grateful.",
    name: "Robert K.",
    detail: "Joint Pain Patient",
  },
  {
    quote:
      "From my first visit, I felt heard and cared for. The staff is professional, knowledgeable, and genuinely compassionate.",
    name: "Maria L.",
    detail: "Carpal Tunnel Patient",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-dark via-teal to-teal/90 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Advanced Care for Nerve &amp; Joint Conditions
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            Expert diagnosis and personalized treatment plans to help you
            regain mobility, reduce pain, and improve your quality of life.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-white hover:bg-gold/90 transition-colors"
            >
              Book an Appointment
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            We combine medical expertise with compassionate care to deliver
            outstanding results for our patients.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl bg-slate-50 p-8 text-left hover:shadow-md transition-shadow"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-teal-light p-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 font-sans">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {feature.description}
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
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Comprehensive diagnostic and treatment services for a wide range
            of nerve and joint conditions.
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href="/about#services"
                className="rounded-xl bg-white p-8 text-left shadow-sm hover:shadow-md transition-shadow group"
              >
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-teal transition-colors font-sans">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Teaser */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2 items-center">
          <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-teal-light to-teal/20 flex items-end justify-center overflow-hidden">
            <div className="w-48 h-64 bg-teal/20 rounded-t-full" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gold uppercase tracking-wider">
              Meet Your Specialist
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-800">
              Dr. James Chen, MD
            </h2>
            <p className="mt-2 text-muted font-medium">
              Board-Certified Neurologist &amp; Pain Management Specialist
            </p>
            <p className="mt-6 text-muted leading-relaxed">
              With over 15 years of experience in diagnosing and treating
              complex nerve and joint conditions, Dr. Chen is dedicated to
              providing the highest standard of care. His approach combines
              cutting-edge diagnostic techniques with personalized treatment
              plans tailored to each patient&apos;s unique needs.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-teal font-semibold hover:text-teal-dark transition-colors"
            >
              Learn more about Dr. Chen
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-teal-light py-20 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            What Our Patients Say
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl bg-white p-8 text-left shadow-sm"
              >
                <div className="text-gold text-3xl leading-none mb-3">&ldquo;</div>
                <p className="text-sm text-muted leading-relaxed italic">
                  {t.quote}
                </p>
                <div className="mt-6 border-t pt-4">
                  <p className="font-semibold text-slate-800 text-sm font-sans">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-teal py-16 px-6 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Take the First Step?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Schedule your consultation today and start your journey to better
            health.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-white hover:bg-gold/90 transition-colors"
          >
            Request an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
