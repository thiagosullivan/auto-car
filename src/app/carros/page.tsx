import FiltersPanel from "@/components/commons/aside-form";
import CarList from "@/components/commons/carCards";
import ClearFiltersButton from "@/components/commons/clear-filter-button";
import FinancingAlert from "@/components/commons/financingAlert";
import { getBrands, getCars, getFilterOptions } from "@/lib/data";
import React from "react";

interface PageProps {
  searchParams: {
    search?: string;
    marca?: string;
    estado?: string;
    anoFabMin?: string;
    anoFabMax?: string;
    anoModeloMin?: string;
    anoModeloMax?: string;
    precoMin?: string;
    precoMax?: string;
    kmMin?: string;
    kmMax?: string;
    combustivel?: string;
    cambio?: string;
    carroceria?: string;
    cor?: string;
    carType?: string; // Novo parâmetro
  };
}

const StockPage = async ({ searchParams }: PageProps) => {
  const filters = {
    search: searchParams.search,
    marca: searchParams.marca?.split(","),
    estado: searchParams.estado?.split(",") as (
      | "novo"
      | "seminovo"
      | "usado"
    )[],
    anoFabMin: searchParams.anoFabMin
      ? parseInt(searchParams.anoFabMin)
      : undefined,
    anoFabMax: searchParams.anoFabMax
      ? parseInt(searchParams.anoFabMax)
      : undefined,
    anoModeloMin: searchParams.anoModeloMin
      ? parseInt(searchParams.anoModeloMin)
      : undefined,
    anoModeloMax: searchParams.anoModeloMax
      ? parseInt(searchParams.anoModeloMax)
      : undefined,
    precoMin: searchParams.precoMin
      ? parseInt(searchParams.precoMin)
      : undefined,
    precoMax: searchParams.precoMax
      ? parseInt(searchParams.precoMax)
      : undefined,
    kmMin: searchParams.kmMin ? parseInt(searchParams.kmMin) : undefined,
    kmMax: searchParams.kmMax ? parseInt(searchParams.kmMax) : undefined,
    combustivel: searchParams.combustivel?.split(",") as Array<
      "gasolina" | "etanol" | "diesel" | "gnv" | "flex" | "elétrico" | "outro"
    >,
    cambio: searchParams.cambio?.split(",") as Array<
      | "manual"
      | "automático"
      | "automático_sequencial"
      | "cvt"
      | "auto_dupla_embreagem"
      | "semiautomático"
    >,
    carroceria: searchParams.carroceria?.split(",") as Array<
      | "sedã"
      | "hatch"
      | "coupe"
      | "pickup"
      | "conversivel"
      | "furgão"
      | "suv"
      | "utilitário"
    >,
    cor: searchParams.cor?.split(",") as Array<
      | "preto"
      | "cinza"
      | "branco"
      | "prata"
      | "vermelho"
      | "azul"
      | "verde"
      | "amarelo"
      | "laranja"
      | "marrom"
      | "bege"
      | "dourado"
      | "roxo"
      | "rosa"
    >,
    // NOVO FILTRO: Tipo de veículo
    carType: searchParams.carType?.split(",") as Array<
      "automóvel" | "moto" | "nautico"
    >,
  };

  const [cars, brands, filterOptions] = await Promise.all([
    getCars(filters),
    getBrands(),
    getFilterOptions(),
  ]);

  // Verificar se há filtros ativos
  const hasActiveFilters = Object.keys(filters).some((key) => {
    const value = filters[key as keyof typeof filters];
    return (
      value !== undefined &&
      value !== null &&
      (!Array.isArray(value) || value.length > 0) &&
      key !== "search"
    );
  });

  return (
    <div className="w-full mx-auto my-10 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Catálogo de Veículos</h1>{" "}
        {/* Atualizado título */}
        <p className="text-gray-600 text-lg">
          Encontre o veículo perfeito para você {/* Atualizado texto */}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Painel de Filtros */}
        <div className="lg:col-span-1">
          <FiltersPanel
            brands={brands}
            filterOptions={filterOptions}
            currentFilters={filters}
          />
        </div>

        {/* Lista de Carros */}
        <div className="lg:col-span-4">
          {cars.length > 0 ? (
            <CarList cars={cars} searchTerm={searchParams.search} />
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🚗</div>
              <p className="text-gray-600 text-lg">
                {hasActiveFilters || searchParams.search
                  ? "Nenhum veículo encontrado com os filtros selecionados."
                  : "Nenhum veículo foi cadastrado."}
              </p>

              {/* Botão Client Component */}
              <ClearFiltersButton
                hasFilters={hasActiveFilters || !!searchParams.search}
              />
            </div>
          )}
        </div>
      </div>

      <div className="mt-8">
        <FinancingAlert />
      </div>
    </div>
  );
};

export default StockPage;
