// src/components/ui/theme-toggle.tsx
"use client";

import { useTheme } from "@/hook/use-theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 transition-colors"
      aria-label={`Mudar para modo ${theme === "light" ? "escuro" : "claro"}`}
    >
      {theme === "light" ? "🌙" : "☀️"}
      <span className="sr-only">
        {theme === "light" ? "Modo escuro" : "Modo claro"}
      </span>
    </button>
  );
}
