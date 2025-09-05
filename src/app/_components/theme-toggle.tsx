// src/components/ui/theme-toggle.tsx
"use client";

import { useTheme } from "@/hook/use-theme";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md transition-colors cursor-pointer hover:text-red-one"
      aria-label={`Mudar para modo ${theme === "light" ? "escuro" : "claro"}`}
    >
      {theme === "light" ? <Moon /> : <Sun />}
      <span className="sr-only">
        {theme === "light" ? "Modo escuro" : "Modo claro"}
      </span>
    </button>
  );
}
