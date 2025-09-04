import React from "react";
import FormFinancingForm from "../_components/formFinancing";
import { getCars } from "@/lib/data";

const FinancingPage = async () => {
  const cars = await getCars();

  return (
    <div className="w-full max-w-7xl mx-auto my-10  px-4">
      <h1 className="text-3xl font-bold mb-8">
        Aprove o seu financiamento online
      </h1>
      <FormFinancingForm cars={cars} />
    </div>
  );
};

export default FinancingPage;
