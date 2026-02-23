export interface Condition {
  slug: string;
  titleKey: string;
  shortDescKey: string;
  overviewKey: string;
  diagnosisKey: string;
  treatmentKey: string;
  icon: string;
  heroImage: string;
}

export const conditions: Condition[] = [
  {
    slug: "carpal-tunnel-syndrome",
    titleKey: "cond.carpalTunnel.title",
    shortDescKey: "cond.carpalTunnel.short",
    overviewKey: "cond.carpalTunnel.overview",
    diagnosisKey: "cond.carpalTunnel.diagnosis",
    treatmentKey: "cond.carpalTunnel.treatment",
    icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.341 4.024A2.25 2.25 0 0115.5 20.25H8.5a2.25 2.25 0 01-2.159-1.726L5 14.5m14 0H5",
    heroImage: "https://images.unsplash.com/photo-1564725075388-cc8338732289?auto=format&fit=crop&w=1920&q=80",
  },
  {
    slug: "radiculopathy",
    titleKey: "cond.radiculopathy.title",
    shortDescKey: "cond.radiculopathy.short",
    overviewKey: "cond.radiculopathy.overview",
    diagnosisKey: "cond.radiculopathy.diagnosis",
    treatmentKey: "cond.radiculopathy.treatment",
    icon: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
    heroImage: "https://images.unsplash.com/photo-1539815208687-a0f05e15d601?auto=format&fit=crop&w=1920&q=80",
  },
  {
    slug: "peripheral-neuropathy",
    titleKey: "cond.neuropathy.title",
    shortDescKey: "cond.neuropathy.short",
    overviewKey: "cond.neuropathy.overview",
    diagnosisKey: "cond.neuropathy.diagnosis",
    treatmentKey: "cond.neuropathy.treatment",
    icon: "M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z",
    heroImage: "https://images.unsplash.com/photo-1716833322956-576ed48439ac?auto=format&fit=crop&w=1920&q=80",
  },
  {
    slug: "shoulder-pain",
    titleKey: "cond.shoulder.title",
    shortDescKey: "cond.shoulder.short",
    overviewKey: "cond.shoulder.overview",
    diagnosisKey: "cond.shoulder.diagnosis",
    treatmentKey: "cond.shoulder.treatment",
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
    heroImage: "https://images.unsplash.com/photo-1715532176260-78302f560fa6?auto=format&fit=crop&w=1920&q=80",
  },
  {
    slug: "osteoarthritis",
    titleKey: "cond.osteoarthritis.title",
    shortDescKey: "cond.osteoarthritis.short",
    overviewKey: "cond.osteoarthritis.overview",
    diagnosisKey: "cond.osteoarthritis.diagnosis",
    treatmentKey: "cond.osteoarthritis.treatment",
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
    heroImage: "https://images.unsplash.com/photo-1715531785980-ce9b3bf1c38d?auto=format&fit=crop&w=1920&q=80",
  },
  {
    slug: "low-back-pain",
    titleKey: "cond.lowBack.title",
    shortDescKey: "cond.lowBack.short",
    overviewKey: "cond.lowBack.overview",
    diagnosisKey: "cond.lowBack.diagnosis",
    treatmentKey: "cond.lowBack.treatment",
    icon: "M9 12.75L11.25 15 15 9.75M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z",
    heroImage: "https://images.unsplash.com/photo-1714929818299-914d3114bcec?auto=format&fit=crop&w=1920&q=80",
  },
  {
    slug: "neck-pain",
    titleKey: "cond.neck.title",
    shortDescKey: "cond.neck.short",
    overviewKey: "cond.neck.overview",
    diagnosisKey: "cond.neck.diagnosis",
    treatmentKey: "cond.neck.treatment",
    icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
    heroImage: "https://images.unsplash.com/photo-1585917138424-61cf3ee524d9?auto=format&fit=crop&w=1920&q=80",
  },
];

export function getConditionBySlug(slug: string): Condition | undefined {
  return conditions.find((c) => c.slug === slug);
}
