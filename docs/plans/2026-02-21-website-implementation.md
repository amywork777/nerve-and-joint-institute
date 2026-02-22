# Nerve and Joint Institute Website — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a 4-page medical practice website for Nerve and Joint Institute with a professional contact form that emails submissions via Resend.

**Architecture:** Next.js 14 App Router with Tailwind CSS. All pages are server-rendered static content except one API route (`/api/contact`) that sends form data as email via Resend. Shared layout with sticky header and footer wraps all pages.

**Tech Stack:** Next.js 14, React 18, Tailwind CSS, Resend, Google Fonts (Playfair Display + Inter)

**Design doc:** `docs/plans/2026-02-21-website-design.md`

---

### Task 1: Scaffold Next.js project

**Files:**
- Create: project root via `create-next-app`
- Modify: `tailwind.config.ts` (add custom colors/fonts)
- Modify: `app/layout.tsx` (add fonts, metadata)
- Modify: `app/globals.css` (add base styles)

**Step 1: Create Next.js app**

Run from `/Users/amy/code/nerve-and-joint-institute`:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-import-alias --use-npm
```
When prompted, accept defaults. If it asks about existing files, allow overwrite.

Expected: Next.js project scaffolded with `src/app/` directory.

**Step 2: Install Resend**

```bash
npm install resend
```

**Step 3: Configure Tailwind with custom theme**

Edit `tailwind.config.ts`:
```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#0B6E6E",
          light: "#E0F4F4",
          dark: "#094F4F",
        },
        gold: {
          DEFAULT: "#C8A951",
          light: "#F5EFD6",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

**Step 4: Configure root layout with fonts and metadata**

Replace `src/app/layout.tsx`:
```tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Nerve and Joint Institute | Advanced Nerve & Joint Care",
  description:
    "Nerve and Joint Institute offers expert diagnosis and treatment for nerve and joint conditions including neuropathy, carpal tunnel, arthritis, and chronic pain.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans text-slate-800 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

**Step 5: Replace `src/app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1, h2, h3, h4 {
    @apply font-serif;
  }
}
```

**Step 6: Create placeholder Header and Footer components**

Create `src/components/Header.tsx`:
```tsx
export default function Header() {
  return <header className="h-16 bg-white shadow">Header placeholder</header>;
}
```

Create `src/components/Footer.tsx`:
```tsx
export default function Footer() {
  return <footer className="h-32 bg-slate-900 text-white">Footer placeholder</footer>;
}
```

**Step 7: Replace `src/app/page.tsx` with placeholder**

```tsx
export default function Home() {
  return <div className="p-8"><h1 className="text-4xl">Nerve and Joint Institute</h1></div>;
}
```

**Step 8: Verify dev server starts**

```bash
npm run dev
```
Expected: Server starts on localhost:3000, shows heading with serif font.

**Step 9: Commit**

```bash
git add -A && git commit -m "feat: scaffold Next.js project with Tailwind, fonts, and Resend"
```

---

### Task 2: Build Header component

**Files:**
- Create: `src/components/Header.tsx`

**Step 1: Implement full Header with responsive nav**

Replace `src/components/Header.tsx`:
```tsx
"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "About & Services" },
  { href: "/resources", label: "Patient Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-serif font-bold text-teal">
          Nerve &amp; Joint Institute
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-teal transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-white hover:bg-gold/90 transition-colors"
          >
            Request Appointment
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-slate-700 transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-slate-700 transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-slate-700 transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t bg-white px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-slate-600 hover:text-teal"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 block rounded-md bg-gold px-5 py-2.5 text-center text-sm font-semibold text-white"
            onClick={() => setMobileOpen(false)}
          >
            Request Appointment
          </Link>
        </nav>
      )}
    </header>
  );
}
```

**Step 2: Verify header renders on localhost:3000**

Check: logo on left, nav links on right, gold CTA button. Resize to mobile — hamburger appears, menu toggles.

**Step 3: Commit**

```bash
git add src/components/Header.tsx && git commit -m "feat: build responsive header with navigation"
```

---

### Task 3: Build Footer component

**Files:**
- Modify: `src/components/Footer.tsx`

**Step 1: Implement Footer**

Replace `src/components/Footer.tsx`:
```tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
        {/* Brand + contact */}
        <div>
          <h3 className="text-xl text-white mb-4">Nerve &amp; Joint Institute</h3>
          <p className="text-sm leading-relaxed">
            123 Medical Center Drive, Suite 200<br />
            Portland, OR 97201
          </p>
          <p className="mt-3 text-sm">
            Phone: (503) 555-0100<br />
            Fax: (503) 555-0101
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-teal-light transition-colors">About & Services</Link></li>
            <li><Link href="/about#conditions" className="hover:text-teal-light transition-colors">Conditions Treated</Link></li>
            <li><Link href="/resources" className="hover:text-teal-light transition-colors">Patient Resources</Link></li>
            <li><Link href="/contact" className="hover:text-teal-light transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Office Hours</h4>
          <ul className="space-y-2 text-sm">
            <li>Monday – Friday: 8:00 AM – 5:00 PM</li>
            <li>Saturday: By Appointment</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Nerve and Joint Institute. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Verify footer renders at bottom of page**

**Step 3: Commit**

```bash
git add src/components/Footer.tsx && git commit -m "feat: build footer with contact info, links, and hours"
```

---

### Task 4: Build Home page

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Implement full Home page with all sections**

Replace `src/app/page.tsx` with the full Home page containing:
- Hero section: teal gradient background, headline, subtext, two CTA buttons
- "Why Choose Us": 4 icon cards in a grid (use inline SVG or emoji placeholders for icons)
- Services overview: 6 cards in a 2x3 grid, each links to `/about#services`
- Doctor teaser: split layout with image placeholder + bio text + link to `/about`
- Testimonials: 3 testimonial cards with quotes

Use `@/components/frontend-design` skill principles: generous whitespace, section padding `py-20 px-6`, max-w-7xl centering, alternating white/teal-light backgrounds for sections.

Key design tokens:
- Section backgrounds alternate: white, teal-light, white, teal-light
- Headings: `text-3xl md:text-4xl font-serif text-slate-800`
- Section subheadings: `text-lg text-slate-500 max-w-2xl mx-auto`
- Cards: `bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow`
- CTA buttons: primary = `bg-gold text-white`, secondary = `border-2 border-white text-white`

**Step 2: Verify all sections render correctly on desktop and mobile**

**Step 3: Commit**

```bash
git add src/app/page.tsx && git commit -m "feat: build home page with hero, features, services, doctor teaser, testimonials"
```

---

### Task 5: Build About & Services page

**Files:**
- Create: `src/app/about/page.tsx`

**Step 1: Implement About & Services page**

Create `src/app/about/page.tsx` with sections:
- Page hero banner: smaller than home hero, teal background, title "About Our Practice"
- Doctor bio section: image placeholder (gray div) + name, credentials, education list, affiliations
- Practice philosophy: short paragraph
- Services section with `id="services"`: grid of 6 service cards (Nerve Conduction Studies, Joint Injections, EMG, Pain Management, Physical Therapy, Ultrasound-Guided Procedures) — each with an icon placeholder, title, 2-sentence description
- Conditions Treated section with `id="conditions"`: grid of condition tags/cards (Carpal Tunnel Syndrome, Peripheral Neuropathy, Arthritis, Sciatica, Herniated Disc, Fibromyalgia, Tennis Elbow, Plantar Fasciitis)

**Step 2: Verify anchor links work (`/about#services`, `/about#conditions`)**

**Step 3: Commit**

```bash
git add src/app/about/page.tsx && git commit -m "feat: build about & services page with doctor bio, services, conditions"
```

---

### Task 6: Build Patient Resources page

**Files:**
- Create: `src/app/resources/page.tsx`

**Step 1: Implement Patient Resources page**

Create `src/app/resources/page.tsx` with sections:
- Page hero banner: "Patient Resources"
- "What to Expect" section: numbered steps (1. Schedule, 2. Arrive 15 min early, 3. Consultation, 4. Treatment plan)
- Insurance section: grid of accepted insurance logos/names (placeholder names: Blue Cross, Aetna, UnitedHealthcare, Cigna, Medicare, Medicaid, etc.)
- FAQ section: accordion-style Q&A (use `<details>/<summary>` for zero-JS accordion). Questions: What should I bring? How long is a first visit? Do you accept walk-ins? What is EMG? etc.

**Step 2: Verify page renders, FAQ accordion works**

**Step 3: Commit**

```bash
git add src/app/resources/page.tsx && git commit -m "feat: build patient resources page with what-to-expect, insurance, FAQ"
```

---

### Task 7: Build Contact page with professional form

**Files:**
- Create: `src/app/contact/page.tsx`

**Step 1: Implement Contact page with form**

Create `src/app/contact/page.tsx`:
- Page hero banner: "Contact Us"
- Two-column layout: form on left (wider), office info on right
- Form fields (all with labels, proper types, required validation):
  - Row 1: First Name (text) | Last Name (text)
  - Row 2: Email (email) | Phone (tel)
  - Row 3: Reason for Visit (select: New Patient, Follow-Up, Second Opinion, Other)
  - Row 4: Preferred Date (date input) | Preferred Time (select: Morning, Afternoon, No Preference)
  - Row 5: Additional Notes (textarea, 4 rows)
  - Submit button: gold, full-width, "Submit Appointment Request"
- Form state: `"use client"`, useState for form data + submission status
- On submit: POST to `/api/contact`, show loading state, then success or error message
- Right column: address, phone/fax, hours, map placeholder (gray box with "Map" text)

Form styling: inputs get `rounded-md border border-slate-300 px-4 py-3 focus:border-teal focus:ring-1 focus:ring-teal outline-none`, labels get `text-sm font-medium text-slate-700 mb-1 block`.

**Step 2: Verify form renders, client-side validation works (try submitting empty)**

**Step 3: Commit**

```bash
git add src/app/contact/page.tsx && git commit -m "feat: build contact page with professional appointment request form"
```

---

### Task 8: Build contact API route with Resend

**Files:**
- Create: `src/app/api/contact/route.ts`
- Create: `.env.local` (with placeholder)

**Step 1: Create `.env.local`**

```
RESEND_API_KEY=re_placeholder_replace_with_real_key
CONTACT_EMAIL=info@nerveandjoint.com
```

**Step 2: Implement API route**

Create `src/app/api/contact/route.ts`:
```ts
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, reason, date, time, notes } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Nerve and Joint Institute <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "info@nerveandjoint.com",
      subject: `New Appointment Request: ${firstName} ${lastName} — ${reason || "General"}`,
      html: `
        <h2>New Appointment Request</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold">Name</td><td style="padding:8px">${firstName} ${lastName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px">${phone || "Not provided"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Reason</td><td style="padding:8px">${reason || "Not specified"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Preferred Date</td><td style="padding:8px">${date || "No preference"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Preferred Time</td><td style="padding:8px">${time || "No preference"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Notes</td><td style="padding:8px">${notes || "None"}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
```

**Step 3: Add `.env.local` to `.gitignore`**

Verify `.gitignore` already includes `.env*.local` (create-next-app should have added this). If not, add it.

**Step 4: Verify API route works**

Start dev server, submit the contact form. Without a real Resend key it will return 500, but verify the route responds (not 404).

**Step 5: Commit**

```bash
git add src/app/api/contact/route.ts .env.local.example && git commit -m "feat: add contact form API route with Resend email"
```

Note: Create `.env.local.example` (without the real key) to commit as a template.

---

### Task 9: Polish and responsive QA

**Files:**
- Modify: any components needing responsive fixes

**Step 1: Review all pages at mobile (375px), tablet (768px), desktop (1280px) widths**

Check:
- Header hamburger works, menu closes on link click
- Hero text doesn't overflow on mobile
- Card grids collapse to 1 column on mobile, 2 on tablet
- Contact form is usable on mobile (fields stack vertically)
- Footer columns stack on mobile
- No horizontal scrollbar at any width

**Step 2: Fix any responsive issues found**

**Step 3: Run `npm run build` to verify production build succeeds**

```bash
npm run build
```
Expected: Build completes without errors.

**Step 4: Commit**

```bash
git add -A && git commit -m "fix: responsive polish and build verification"
```

---

### Task 10: Add `.env.local.example` and README

**Files:**
- Create: `.env.local.example`

**Step 1: Create env example file**

Create `.env.local.example`:
```
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=info@nerveandjoint.com
```

**Step 2: Commit**

```bash
git add .env.local.example && git commit -m "docs: add env example file"
```
