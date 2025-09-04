import { db } from "@/db";
import { carTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { cache } from "react";

// Busca com cache para evitar múltiplas requests
export const getCars = cache(async () => {
  try {
    const cars = await db.query.carTable.findMany({
      with: {
        brand: true,
      },
    });
    return cars;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch cars.");
  }
});

// Busca específica com parâmetros
export const getCarBySlug = cache(async (slug: string) => {
  try {
    const car = await db.query.carTable.findFirst({
      where: eq(carTable.slug, slug),
      with: {
        brand: true,
      },
    });
    return car;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch car.");
  }
});
