// components/commons/clear-filter-button.tsx
"use client";

interface ClearFiltersButtonProps {
  hasFilters: boolean;
}

export default function ClearFiltersButton({
  hasFilters,
}: ClearFiltersButtonProps) {
  if (!hasFilters) return null;

  const handleClear = () => {
    // Remove todos os parâmetros incluindo carType
    window.location.href = "/estoque";
  };

  return (
    <button
      onClick={handleClear}
      className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
    >
      Limpar Filtros
    </button>
  );
}
