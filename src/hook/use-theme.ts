// src/hooks/use-theme.ts
"use client";

import { useContext } from "react";
import { ThemeContext } from "@/components/providers/theme-provider";

export function useTheme() {
  const context = useContext(ThemeContext);

  // Durante SSR ou se não estiver dentro do Provider, retorna valores padrão
  if (typeof window === "undefined" || context === undefined) {
    return {
      theme: "light" as const,
      setTheme: () => {},
      toggleTheme: () => {},
      isDefault: true, // Flag para identificar que são valores padrão
    };
  }

  return context;
}
