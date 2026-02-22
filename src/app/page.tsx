import Image from "next/image";
import Link from "next/link";

const whyTrust = [
  {
    title: "Whole-Person Care",
    description:
      "Compassionate, patient-first approach — like treating family.",
    icon: (
      <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Deep Expertise",
    description:
      "Years of experience in EMG, interventional spine procedures, and musculoskeletal conditions.",
    icon: (
      <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
      </svg>
    ),
  },
  {
    title: "Modern Methods",
    description:
      "Uses the latest tools and techniques for accurate diagnosis and effective treatment.",
    icon: (
      <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.341 4.024A2.25 2.25 0 0115.5 20.25H8.5a2.25 2.25 0 01-2.159-1.726L5 14.5m14 0H5" />
      </svg>
    ),
  },
];

const services = [
  {
    title: "Regenerative Medicine",
    description: "Advanced regenerative therapies to promote natural healing and restore function to damaged tissues.",
  },
  {
    title: "Electrodiagnostic Medicine (EMG)",
    description: "Precise diagnostic testing to evaluate nerve and muscle function, identifying the source of pain or weakness.",
  },
  {
    title: "BOTOX Treatment",
    description: "Therapeutic BOTOX injections for chronic pain conditions and muscle-related disorders.",
  },
  {
    title: "Rehabilitation",
    description: "Comprehensive rehabilitation programs to restore mobility, strength, and quality of life.",
  },
];

const testimonials = [
  {
    quote:
      "Dr. Jianxun Zhou is awesome; very professional, respectful, and honest. He listens to your needs. He took my workers' comp case and did a great job. I highly recommend him.",
  },
  {
    quote:
      "Finally, someone who listened to me and diagnosed my condition. I wish I had come to him five years ago.",
  },
  {
    quote:
      "I had been in pain for 18 months, and Dr. Zhou pinpointed the cause. He showed me on the X-rays and an old CT scan, then gave me options for treatment. What a relief to finally get help.",
  },
  {
    quote:
      "Dr. Zhou seemed genuinely concerned about my problem and was eager to help. I have confidence in him. Very professional. I also loved the staff; everyone was so kind.",
  },
  {
    quote:
      "I can't say enough great things about my care. I'm forever grateful for the opportunity to meet Dr. Zhou and his wonderful staff — no bad experiences at all.",
  },
  {
    quote:
      "Dr. Zhou is a very considerate and dedicated doctor. He's polite and truly makes you feel that he cares about getting you better. I highly recommend him.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-dark via-teal to-teal/90 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
            Jianxun Zhou, M.D. PhD QME
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Where Expertise Meets Compassion
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            Your Health, Our Priority. Expert diagnosis and personalized
            treatment for nerve and musculoskeletal conditions.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-white hover:bg-gold/90 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Learn More
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
            Why Patients Trust Dr. Zhou
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Precision neuromuscular care with a compassionate, patient-first
            approach.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {whyTrust.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-slate-50 p-8 text-left hover:shadow-md transition-shadow"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-teal-light p-3">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 font-sans">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {item.description}
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
            Comprehensive diagnostic and treatment services for nerve and
            musculoskeletal conditions.
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
              Meet Your Specialist
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-800">
              Jianxun Zhou, M.D. PhD QME
            </h2>
            <p className="mt-2 text-muted font-medium">
              Diplomate, American Board of Physical Medicine &amp;
              Rehabilitation
            </p>
            <p className="text-muted font-medium">
              Diplomate, American Board of Electrodiagnostic Medicine
            </p>
            <p className="text-muted font-medium">
              Fellowship Trained in Electrodiagnostic Medicine &amp;
              Interventional Pain
            </p>
            <p className="mt-6 text-muted leading-relaxed">
              Looking for expert diagnosis and treatment of nerve and
              musculoskeletal issues? Dr. Zhou specializes in EMG and
              musculoskeletal medicine, offering personalized care to help you
              move and feel better.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-teal font-semibold hover:text-teal-dark transition-colors"
            >
              Learn more about Dr. Zhou
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
            Patient Stories
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-xl bg-white p-8 text-left shadow-sm"
              >
                <div className="text-gold text-3xl leading-none mb-3">
                  &ldquo;
                </div>
                <p className="text-sm text-muted leading-relaxed italic">
                  {t.quote}
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
            Start Your Recovery Today
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Don&apos;t let pain limit your life. Book a consultation with Dr.
            Zhou and experience expert care tailored to your needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-white hover:bg-gold/90 transition-colors"
            >
              Schedule Consultation
            </Link>
            <a
              href="tel:9167410848"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Call (916) 741-0848
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
