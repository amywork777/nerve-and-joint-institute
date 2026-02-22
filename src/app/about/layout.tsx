import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Services | Nerve and Joint Institute",
  description:
    "Learn about Dr. Jianxun Zhou, MD PhD QME and explore our comprehensive nerve and musculoskeletal services.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
