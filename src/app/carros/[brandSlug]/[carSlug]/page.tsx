import FinancingAlert from "@/components/commons/financingAlert";
import React from "react";

interface CategoryPageProps {
  params: Promise<{ carSlug: string }>;
}

const BrandPage = async ({ params }: CategoryPageProps) => {
  const { carSlug } = await params;

  console.log(carSlug, "SLUG");
  return (
    <div className="w-full max-w-7xl mx-auto my-10 text-gray-one px-4">
      <h1 className="text-3xl font-bold mb-8 capitalize">{carSlug}</h1>
      <div className="mb-8"></div>
      <FinancingAlert />
    </div>
  );
};

export default BrandPage;
