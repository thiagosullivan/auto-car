import CarList from "@/components/commons/carCards";
import CarCards from "@/components/commons/carCards";
import FinancingAlert from "@/components/commons/financingAlert";
import SearchForm from "@/components/commons/search-form";
import { db } from "@/db";
import { brandTable, carTable } from "@/db/schema";
import { getCars } from "@/lib/data";
import React from "react";

interface PageProps {
  searchParams: {
    search?: string;
  };
}

const StockPage = async ({ searchParams }: PageProps) => {
  const cars = await getCars(searchParams.search);

  return (
    <div className="w-full max-w-7xl mx-auto my-10  px-4">
      <h1 className="text-3xl font-bold mb-4">Catálogo de Carros</h1>
      <p className="text-gray-600 text-lg mb-4">
        Encontre o carro perfeito para você
      </p>
      <div className="mb-8">
        {cars.length > 0 ? (
          // <CarCards cars={cars} />
          <CarList cars={cars} searchTerm={searchParams.search} />
        ) : (
          <p>Nenhum carro foi cadastrado.</p>
        )}
      </div>
      <FinancingAlert />
    </div>
  );
};

export default StockPage;
