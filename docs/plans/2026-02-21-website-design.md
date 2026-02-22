# Nerve and Joint Institute Website Design

## Overview

A multi-page medical practice website for **Nerve and Joint Institute**, a nerve & joint / pain management / neurology practice. Inspired by nerveandjoint.com but with its own distinct identity.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Email:** Resend (free tier — 100 emails/day, 3,000/month)
- **Hosting:** Vercel (recommended) or any Node.js host
- **No CMS, no database**

## Color Palette

| Role       | Color     | Hex       |
|------------|-----------|-----------|
| Primary    | Deep teal | `#0B6E6E` |
| Secondary  | Light teal| `#E0F4F4` |
| Accent     | Warm gold | `#C8A951` |
| Text       | Slate 800 | `#1E293B` |
| Muted text | Slate 500 | `#64748B` |
| Background | White     | `#FFFFFF` |

## Typography

- **Headings:** Playfair Display (serif) — premium, authoritative feel
- **Body:** Inter (sans-serif) — clean, modern readability

## Pages

### Home (`/`)
- Sticky header: logo + nav links + "Request Appointment" CTA button
- Hero: large background area, headline ("Advanced Care for Nerve & Joint Conditions"), subtext, two CTAs (Book Appointment, Learn More)
- "Why Choose Us": 3-4 icon cards (Board Certified, Advanced Technology, Patient-Centered Care, Comprehensive Treatment)
- Services overview: grid of 4-6 service cards linking to /services
- Doctor teaser: photo + brief intro linking to /about
- Testimonials section
- Footer: contact info, quick links, office hours, address

### About (`/about`)
- Doctor bio: photo, credentials, education, affiliations
- Practice philosophy
- Team member cards (if applicable)

### Services (`/services`)
- Grid of service cards with icon, title, short description
- Services: Nerve Conduction Studies, Joint Injections, EMG, Pain Management, Physical Therapy, Ultrasound-Guided Procedures

### Conditions Treated (`/conditions`)
- Categorized grid of conditions
- Examples: Carpal Tunnel Syndrome, Peripheral Neuropathy, Arthritis, Sciatica, Herniated Disc, Fibromyalgia, Tennis Elbow, Plantar Fasciitis

### Patient Resources (`/resources`)
- New patient info / what to expect
- Insurance accepted
- FAQs

### Contact (`/contact`)
- Professional appointment request form (see below)
- Office location with map placeholder
- Phone, fax, hours, address

## Contact Form Design

Fields:
- First Name, Last Name (side by side)
- Email, Phone (side by side)
- Reason for Visit (dropdown: New Patient, Follow-Up, Second Opinion, Other)
- Preferred Date (date picker)
- Preferred Time (dropdown: Morning, Afternoon, No Preference)
- Additional Notes (textarea)
- Submit button

Behavior:
- Client-side validation
- Submits to `/api/contact` (Next.js API route)
- API route sends formatted email to `info@nerveandjoint.com` via Resend
- User sees "Thank you" confirmation on screen
- No popup, no email client

## Responsive Design

- Mobile-first approach
- Hamburger menu on mobile
- All grids collapse to single column on small screens
- Form remains fully usable on all screen sizes

## Design Principles

- Clean, spacious layouts with generous whitespace
- Professional medical aesthetic — not generic, feels like a specialist institute
- Trustworthy: blues/teals convey calm and authority
- Gold accents for CTAs and highlights add warmth
- Serif headings + sans-serif body = premium but readable
