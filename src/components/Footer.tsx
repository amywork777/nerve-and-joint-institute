import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
        {/* Brand + contact */}
        <div>
          <h3 className="text-xl text-white mb-4">
            Nerve &amp; Joint Institute
          </h3>
          <p className="text-sm leading-relaxed">
            123 Medical Center Drive, Suite 200
            <br />
            Portland, OR 97201
          </p>
          <p className="mt-3 text-sm">
            Phone: (503) 555-0100
            <br />
            Fax: (503) 555-0101
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
