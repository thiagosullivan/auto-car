import FinancingAlert from "@/components/commons/financingAlert";
import React from "react";

interface CategoryPageProps {
  params: Promise<{ brandSlug: string }>;
}

const BrandPage = async ({ params }: CategoryPageProps) => {
  const { brandSlug } = await params;

  console.log(brandSlug, "SLUG");
  return (
    <div className="w-full max-w-7xl mx-auto my-10 text-gray-one px-4">
      <h1 className="text-3xl font-bold mb-8 capitalize">{brandSlug}</h1>
      <div className="mb-8">
        <div className="my-10">
          <p>Nenhum veículo dessa marca foi encontrado :(</p>
        </div>
      </div>
      <FinancingAlert />
    </div>
  );
};

export default BrandPage;
