import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
        {/* Brand + contact */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-wide.svg"
            alt="Nerve and Joint Institute"
            width={220}
            height={98}
            className="mb-4 invert"
          />
          <p className="text-sm leading-relaxed">
            1001 Nut Tree Road, Suite 110
            <br />
            Vacaville, CA 95687
          </p>
          <p className="mt-3 text-sm">
            Phone: (916) 741-0848
            <br />
            Fax: 800-268-8044
            <br />
            Email: info@nerveandjoint.com
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about"
                className="hover:text-teal-light transition-colors"
              >
                About &amp; Services
              </Link>
            </li>
            <li>
              <Link
                href="/about#conditions"
                className="hover:text-teal-light transition-colors"
              >
                Conditions Treated
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="hover:text-teal-light transition-colors"
              >
                Patient Resources
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-teal-light transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Office Hours
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Monday &ndash; Friday: 8:00 AM &ndash; 5:00 PM</li>
            <li>Saturday: By Appointment</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Nerve and Joint Institute. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
