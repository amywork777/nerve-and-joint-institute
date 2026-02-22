"use client";

import { LanguageProvider } from "@/lib/language-context";
import type { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
