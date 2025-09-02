import React from "react";
import FormSale from "../_components/formSale";

const SalesPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto my-10 text-gray-one px-4">
      <h1 className="text-3xl font-bold mb-8">Avalie o seu veículo</h1>
      <FormSale />
    </div>
  );
};

export default SalesPage;
