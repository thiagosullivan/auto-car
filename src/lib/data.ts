// app/lib/data.ts
import { db } from "@/db";
import {
  carTable,
  brandTable,
  fuelEnum,
  gearboxEnum,
  colorEnum,
  conditionEnum,
  bodyTypeEnum,
} from "../db/schema";
import { CarFilters, FilterOptions, Brand } from "../utils/types/filters";

export async function getCars(filters: CarFilters = {}) {
  try {
    const {
      search,
      marca,
      estado,
      anoFabMin,
      anoFabMax,
      anoModeloMin,
      anoModeloMax,
      precoMin,
      precoMax,
      kmMin,
      kmMax,
      combustivel,
      cambio,
      carroceria,
      cor,
    } = filters;

    // Buscar todos os carros primeiro
    const allCars = await db.query.carTable.findMany({
      with: {
        brand: true,
      },
      orderBy: (cars, { desc }) => [desc(cars.createdAt)],
    });

    // Aplicar filtros
    let filteredCars = allCars;

    // Filtro de busca textual
    if (search) {
      const searchTerm = search.toLowerCase();
      filteredCars = filteredCars.filter((car) => {
        return (
          car.name.toLowerCase().includes(searchTerm) ||
          car.model.toLowerCase().includes(searchTerm) ||
          car.fuel.toLowerCase().includes(searchTerm) ||
          car.brand?.name.toLowerCase().includes(searchTerm)
        );
      });
    }

    // Filtro por marcas
    if (marca && marca.length > 0) {
      filteredCars = filteredCars.filter((car) =>
        marca.includes(car.brand?.slug || "")
      );
    }

    // Filtro por estado (novo/seminovo/usado) - CORRIGIDO
    if (estado && estado.length > 0) {
      filteredCars = filteredCars.filter((car) => {
        return estado.includes(car.condition);
      });
    }

    // Filtro por ano de fabricação
    if (anoFabMin) {
      filteredCars = filteredCars.filter(
        (car) => parseInt(car.yearFab) >= anoFabMin
      );
    }
    if (anoFabMax) {
      filteredCars = filteredCars.filter(
        (car) => parseInt(car.yearFab) <= anoFabMax
      );
    }

    // Filtro por ano de modelo
    if (anoModeloMin) {
      filteredCars = filteredCars.filter(
        (car) => parseInt(car.yearModel) >= anoModeloMin
      );
    }
    if (anoModeloMax) {
      filteredCars = filteredCars.filter(
        (car) => parseInt(car.yearModel) <= anoModeloMax
      );
    }

    // Filtro por preço
    if (precoMin) {
      filteredCars = filteredCars.filter(
        (car) => car.priceInCents >= precoMin * 100
      );
    }
    if (precoMax) {
      filteredCars = filteredCars.filter(
        (car) => car.priceInCents <= precoMax * 100
      );
    }

    // Filtro por quilometragem
    if (kmMin) {
      filteredCars = filteredCars.filter(
        (car) => parseInt(car.km.replace(/\D/g, "")) >= kmMin
      );
    }
    if (kmMax) {
      filteredCars = filteredCars.filter(
        (car) => parseInt(car.km.replace(/\D/g, "")) <= kmMax
      );
    }

    // Filtro por combustível
    if (combustivel && combustivel.length > 0) {
      filteredCars = filteredCars.filter((car) =>
        combustivel.includes(car.fuel)
      );
    }

    // Filtro por câmbio
    if (cambio && cambio.length > 0) {
      filteredCars = filteredCars.filter((car) => cambio.includes(car.gearbox));
    }

    // Filtro por carroceria (NOVO - agora temos bodyType no schema)
    if (carroceria && carroceria.length > 0) {
      filteredCars = filteredCars.filter((car) =>
        carroceria.includes(car.bodyType)
      );
    }

    // Filtro por cor
    if (cor && cor.length > 0) {
      filteredCars = filteredCars.filter((car) => cor.includes(car.color));
    }

    return filteredCars;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch cars.");
  }
}

// Função auxiliar para buscar marcas
export async function getBrands(): Promise<Brand[]> {
  return await db.query.brandTable.findMany({
    orderBy: (brands, { asc }) => [asc(brands.name)],
  });
}

// Função auxiliar para obter opções de filtro
export async function getFilterOptions(): Promise<FilterOptions> {
  const cars = await db.query.carTable.findMany({
    with: {
      brand: true,
    },
  });

  // Extrair valores únicos para os filtros
  const anosFab = [...new Set(cars.map((car) => parseInt(car.yearFab)))].sort(
    (a, b) => b - a
  );
  const anosModelo = [
    ...new Set(cars.map((car) => parseInt(car.yearModel))),
  ].sort((a, b) => b - a);
  const precos = cars
    .map((car) => car.priceInCents / 100)
    .sort((a, b) => a - b);
  const kms = cars
    .map((car) => parseInt(car.km.replace(/\D/g, "")))
    .sort((a, b) => a - b);

  return {
    anosFab: {
      min: Math.min(...anosFab),
      max: Math.max(...anosFab),
      values: anosFab,
    },
    anosModelo: {
      min: Math.min(...anosModelo),
      max: Math.max(...anosModelo),
      values: anosModelo,
    },
    precos: {
      min: Math.min(...precos),
      max: Math.max(...precos),
      values: precos,
    },
    kms: {
      min: Math.min(...kms),
      max: Math.max(...kms),
      values: kms,
    },
    combustiveis: [...new Set(cars.map((car) => car.fuel))] as Array<
      "gasolina" | "etanol" | "diesel" | "gnv" | "flex" | "elétrico" | "outro"
    >,
    cambios: [...new Set(cars.map((car) => car.gearbox))] as Array<
      | "manual"
      | "automático"
      | "automático_sequencial"
      | "cvt"
      | "auto_dupla_embreagem"
      | "semiautomático"
    >,
    carrocerias: [...new Set(cars.map((car) => car.bodyType))] as Array<
      "sedã" | "hatch" | "coupe" | "pickup"
    >,
    cores: [...new Set(cars.map((car) => car.color))] as Array<
      | "preto"
      | "cinza"
      | "branco"
      | "prata"
      | "vermelho"
      | "azul"
      | "verde"
      | "amarelo"
      | "laranja"
      | "marrom"
      | "bege"
      | "dourado"
      | "roxo"
      | "rosa"
    >,
    estados: [...new Set(cars.map((car) => car.condition))] as Array<
      "novo" | "seminovo" | "usado"
    >,
  };
}

// Nova função para buscar carro por slug
export async function getCarBySlug(slug: string) {
  try {
    const car = await db.query.carTable.findFirst({
      where: (car, { eq }) => eq(car.slug, slug),
      with: {
        brand: true,
      },
    });

    return car;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch car.");
  }
}

// Nova função para buscar carros por marca
export async function getCarsByBrand(slug: string) {
  try {
    const brand = await db.query.brandTable.findFirst({
      where: (brand, { eq }) => eq(brand.slug, slug),
    });

    if (!brand) {
      return [];
    }

    const cars = await db.query.carTable.findMany({
      where: (car, { eq }) => eq(car.brandId, brand.id),
      with: {
        brand: true,
      },
      orderBy: (cars, { desc }) => [desc(cars.createdAt)],
    });

    return cars;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch cars by brand.");
  }
}

// Nova função para buscar carros em destaque
export async function getFeaturedCars(limit: number = 6) {
  try {
    const cars = await db.query.carTable.findMany({
      with: {
        brand: true,
      },
      orderBy: (cars, { desc }) => [desc(cars.createdAt)],
      limit: limit,
    });

    return cars;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch featured cars.");
  }
}
