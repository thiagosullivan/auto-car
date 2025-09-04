import CarCards from "@/components/commons/carCards";
import FinancingAlert from "@/components/commons/financingAlert";
import { db } from "@/db";
import { brandTable, carTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import React from "react";

interface CategoryPageProps {
  params: Promise<{ brandSlug: string }>;
}

const BrandPage = async ({ params }: CategoryPageProps) => {
  const { brandSlug } = await params;
  const brand = await db.query.brandTable.findFirst({
    where: eq(brandTable.slug, brandSlug),
    with: {
      cars: true,
    },
  });

  if (!brand) {
    return notFound();
  }

  const carsList = await db.query.carTable.findMany({
    where: eq(carTable.brandId, brand.id),
    with: {
      brand: true,
    },
  });

  console.log(carsList, "cars slug");

  return (
    <div className="w-full max-w-7xl mx-auto my-10  px-4">
      <h1 className="text-3xl font-bold mb-8 capitalize">{brand.name}</h1>
      <div className="mb-8">
        <div className="my-10">
          {carsList.length > 0 ? (
            <>
              {carsList.map((car) => (
                <CarCards key={car.id} cars={carsList} />
              ))}
            </>
          ) : (
            <p>Nenhum veículo dessa marca foi encontrado :(</p>
          )}
        </div>
      </div>
      <FinancingAlert />
    </div>
  );
};

export default BrandPage;
