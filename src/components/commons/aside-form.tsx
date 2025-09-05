// components/FiltersPanel.tsx
"use client";

import { useRouter } from "next/navigation";
import { Brand, CarFilters, FilterOptions } from "../../utils/types/filters";
import MaskedInput from "@/utils/masked-inputs";

interface FiltersPanelProps {
  brands: Brand[];
  filterOptions: FilterOptions;
  currentFilters: CarFilters;
}

export default function FiltersPanel({
  brands,
  filterOptions,
  currentFilters,
}: FiltersPanelProps) {
  const router = useRouter();

  const updateFilters = (newFilters: CarFilters) => {
    const params = new URLSearchParams();

    // Manter search se existir
    if (currentFilters.search) {
      params.set("search", currentFilters.search);
    }

    // Adicionar novos filtros
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          if (value.length > 0) {
            params.set(key, value.join(","));
          }
        } else {
          params.set(key, value.toString());
        }
      } else {
        params.delete(key);
      }
    });

    router.push(`/carros?${params.toString()}`);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFilterChange = (filterName: keyof CarFilters, value: any) => {
    updateFilters({ ...currentFilters, [filterName]: value });
  };

  const clearFilters = () => {
    updateFilters({});
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-h-screen overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Filtros</h2>
        <button
          onClick={clearFilters}
          className="text-sm text-red-one hover:text-red-800 cursor-pointer"
        >
          Limpar tudo
        </button>
      </div>

      {/* Filtros individuais */}
      <div className="space-y-6">
        {/* Marcas */}
        <div>
          <h3 className="font-medium mb-3">Marca</h3>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {brands.map((brand) => {
              // Verificar se a marca tem carros (você precisaria passar essa informação)
              const hasCars = true; // Você precisaria calcular isso baseado nos carros existentes

              return (
                <label key={brand.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={
                      currentFilters.marca?.includes(brand.slug) || false
                    }
                    onChange={(e) => {
                      const current = currentFilters.marca || [];
                      const newValue = e.target.checked
                        ? [...current, brand.slug]
                        : current.filter((m: string) => m !== brand.slug);
                      handleFilterChange("marca", newValue);
                    }}
                    disabled={!hasCars} // Desativa se não tiver carros
                    className="rounded text-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <span
                    className={`ml-2 text-sm ${
                      !hasCars ? "text-gray-400" : ""
                    }`}
                  >
                    {brand.name}
                    {!hasCars && " (sem carros)"}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Estado - ATUALIZADO com "seminovo" */}
        <div>
          <h3 className="font-medium mb-3">Estado</h3>
          <div className="space-y-2">
            {filterOptions.estados.map((estado) => (
              <label key={estado} className="flex items-center">
                <input
                  type="checkbox"
                  checked={currentFilters.estado?.includes(estado) || false}
                  onChange={(e) => {
                    const current = currentFilters.estado || [];
                    const newValue = e.target.checked
                      ? [...current, estado]
                      : current.filter((e: string) => e !== estado);
                    handleFilterChange("estado", newValue);
                  }}
                  className="rounded text-red-600"
                />
                <span className="ml-2 text-sm capitalize">{estado}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Preço */}
        <div>
          <h3 className="font-medium mb-3">Preço (R$)</h3>
          <div className="grid grid-cols-2 gap-2">
            <MaskedInput
              type="price"
              placeholder={`Min: ${filterOptions.precos.min.toLocaleString(
                "pt-BR"
              )}`}
              value={currentFilters.precoMin}
              onChange={(value) => handleFilterChange("precoMin", value)}
              className="border rounded px-2 py-1 text-sm"
            />
            <MaskedInput
              type="price"
              placeholder={`Max: ${filterOptions.precos.max.toLocaleString(
                "pt-BR"
              )}`}
              value={currentFilters.precoMax}
              onChange={(value) => handleFilterChange("precoMax", value)}
              className="border rounded px-2 py-1 text-sm"
            />
          </div>
        </div>

        {/* Quilometragem */}
        <div>
          <h3 className="font-medium mb-3">Quilometragem (km)</h3>
          <div className="grid grid-cols-2 gap-2">
            <MaskedInput
              type="km"
              placeholder={`Min: ${filterOptions.kms.min.toLocaleString(
                "pt-BR"
              )}`}
              value={currentFilters.kmMin}
              onChange={(value) => handleFilterChange("kmMin", value)}
              className="border rounded px-2 py-1 text-sm"
            />
            <MaskedInput
              type="km"
              placeholder={`Max: ${filterOptions.kms.max.toLocaleString(
                "pt-BR"
              )}`}
              value={currentFilters.kmMax}
              onChange={(value) => handleFilterChange("kmMax", value)}
              className="border rounded px-2 py-1 text-sm"
            />
          </div>
        </div>

        {/* Ano de Fabricação */}
        <div>
          <h3 className="font-medium mb-3">Ano de Fabricação</h3>
          <div className="grid grid-cols-2 gap-2">
            <MaskedInput
              type="year"
              placeholder={`Min: ${filterOptions.anosFab.min}`}
              value={currentFilters.anoFabMin}
              onChange={(value) => handleFilterChange("anoFabMin", value)}
              className="border rounded px-2 py-1 text-sm"
            />
            <MaskedInput
              type="year"
              placeholder={`Max: ${filterOptions.anosFab.max}`}
              value={currentFilters.anoFabMax}
              onChange={(value) => handleFilterChange("anoFabMax", value)}
              className="border rounded px-2 py-1 text-sm"
            />
          </div>
        </div>

        {/* Ano do Modelo */}
        <div>
          <h3 className="font-medium mb-3">Ano do Modelo</h3>
          <div className="grid grid-cols-2 gap-2">
            <MaskedInput
              type="year"
              placeholder={`Min: ${filterOptions.anosModelo.min}`}
              value={currentFilters.anoModeloMin}
              onChange={(value) => handleFilterChange("anoModeloMin", value)}
              className="border rounded px-2 py-1 text-sm"
            />
            <MaskedInput
              type="year"
              placeholder={`Max: ${filterOptions.anosModelo.max}`}
              value={currentFilters.anoModeloMax}
              onChange={(value) => handleFilterChange("anoModeloMax", value)}
              className="border rounded px-2 py-1 text-sm"
            />
          </div>
        </div>

        {/* Combustível */}
        <div>
          <h3 className="font-medium mb-3">Combustível</h3>
          <div className="space-y-2">
            {filterOptions.combustiveis.map((combustivel) => (
              <label key={combustivel} className="flex items-center">
                <input
                  type="checkbox"
                  checked={
                    currentFilters.combustivel?.includes(combustivel) || false
                  }
                  onChange={(e) => {
                    const current = currentFilters.combustivel || [];
                    const newValue = e.target.checked
                      ? [...current, combustivel]
                      : current.filter((c: string) => c !== combustivel);
                    handleFilterChange("combustivel", newValue);
                  }}
                  className="rounded text-red-600"
                />
                <span className="ml-2 text-sm capitalize">{combustivel}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Câmbio */}
        <div>
          <h3 className="font-medium mb-3">Câmbio</h3>
          <div className="space-y-2">
            {filterOptions.cambios.map((cambio) => (
              <label key={cambio} className="flex items-center">
                <input
                  type="checkbox"
                  checked={currentFilters.cambio?.includes(cambio) || false}
                  onChange={(e) => {
                    const current = currentFilters.cambio || [];
                    const newValue = e.target.checked
                      ? [...current, cambio]
                      : current.filter((c: string) => c !== cambio);
                    handleFilterChange("cambio", newValue);
                  }}
                  className="rounded text-red-600"
                />
                <span className="ml-2 text-sm capitalize">
                  {cambio.replace(/_/g, " ")}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Carroceria - NOVO */}
        <div>
          <h3 className="font-medium mb-3">Carroceria</h3>
          <div className="space-y-2">
            {filterOptions.carrocerias.map((carroceria) => (
              <label key={carroceria} className="flex items-center">
                <input
                  type="checkbox"
                  checked={
                    currentFilters.carroceria?.includes(carroceria) || false
                  }
                  onChange={(e) => {
                    const current = currentFilters.carroceria || [];
                    const newValue = e.target.checked
                      ? [...current, carroceria]
                      : current.filter((c: string) => c !== carroceria);
                    handleFilterChange("carroceria", newValue);
                  }}
                  className="rounded text-red-600"
                />
                <span className="ml-2 text-sm capitalize">{carroceria}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Cor */}
        <div>
          <h3 className="font-medium mb-3">Cor</h3>
          <div className="space-y-2">
            {filterOptions.cores.map((cor) => (
              <label key={cor} className="flex items-center">
                <input
                  type="checkbox"
                  checked={currentFilters.cor?.includes(cor) || false}
                  onChange={(e) => {
                    const current = currentFilters.cor || [];
                    const newValue = e.target.checked
                      ? [...current, cor]
                      : current.filter((c: string) => c !== cor);
                    handleFilterChange("cor", newValue);
                  }}
                  className="rounded text-red-600"
                />
                <span className="ml-2 text-sm capitalize">{cor}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
