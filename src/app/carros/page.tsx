import CarCards from "@/components/commons/carCards";
import FinancingAlert from "@/components/commons/financingAlert";
import { db } from "@/db";
import React from "react";

const StockPage = async () => {
  const cars = await db.query.carTable.findMany({
    with: {
      brand: true,
    },
  });

  return (
    <div className="w-full max-w-7xl mx-auto my-10 text-gray-one px-4">
      <h1 className="text-3xl font-bold mb-8">Veículos em destaque</h1>
      <div className="mb-8">
        <CarCards cars={cars} />
      </div>
      <FinancingAlert />
    </div>
  );
};

export default StockPage;
