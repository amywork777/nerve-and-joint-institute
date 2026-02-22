import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Resources | Nerve and Joint Institute",
  description:
    "Find insurance information and answers to frequently asked questions at Nerve and Joint Institute.",
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
