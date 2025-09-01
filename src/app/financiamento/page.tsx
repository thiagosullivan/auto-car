import React from "react";
import FormFinancingForm from "../_components/formFinancingForm";

const FinancingPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto my-10 text-gray-one px-4">
      <h1 className="text-3xl font-bold mb-8">
        Aprove o seu financiamento online
      </h1>
      <FormFinancingForm />
    </div>
  );
};

export default FinancingPage;
