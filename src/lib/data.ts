import { db } from "@/db";
import { ilike, or, inArray, sql } from "drizzle-orm";

export async function getCars(search?: string) {
  console.log(search, "SEARCH DATA");
  try {
    if (!search) {
      // Busca todos os carros (sem filtro)
      return await db.query.carTable.findMany({
        with: {
          brand: true,
        },
        orderBy: (cars, { desc }) => [desc(cars.createdAt)],
      });
    }

    // Busca simplificada - primeiro busca os carros, depois filtra no código se necessário
    // Isso evita os problemas complexos de JOIN do Drizzle
    const allCars = await db.query.carTable.findMany({
      with: {
        brand: true,
      },
      orderBy: (cars, { desc }) => [desc(cars.createdAt)],
    });

    console.log(allCars, "ALL CARS DATA");

    // Filtro no código JavaScript (simples e eficiente para quantidades normais de carros)
    const searchTerm = search.toLowerCase();

    const filteredCars = allCars.filter((car) => {
      return (
        car.name.toLowerCase().includes(searchTerm) ||
        car.model.toLowerCase().includes(searchTerm) ||
        car.fuel.toLowerCase().includes(searchTerm) ||
        car.brand?.name.toLowerCase().includes(searchTerm)
      );
    });
    console.log(filteredCars, "FILTERED CARS DATA");

    return filteredCars;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch cars.");
  }
}
