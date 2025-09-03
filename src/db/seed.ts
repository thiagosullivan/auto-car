// scripts/seed.ts

import { db } from ".";
import { brandTable, carTable } from "./schema";

async function main() {
  console.log("🌱 Iniciando seed...");

  // Limpar tabelas existentes (opcional - cuidado em produção!)
  console.log("🧹 Limpando tabelas...");
  await db.delete(carTable);
  await db.delete(brandTable);

  // Inserir marcas
  console.log("🚗 Inserindo marcas...");
  const brands = await db
    .insert(brandTable)
    .values([
      {
        name: "Aston Martin",
        imageUrl: "/brands/aston-martin-logo.png",
        slug: "aston-martin",
        createdArt: new Date(),
      },
      {
        name: "Audi",
        imageUrl: "/brands/audi-logo.png",
        slug: "audi",
        createdArt: new Date(),
      },
      {
        name: "Bentley",
        imageUrl: "/brands/bentley-logo.png",
        slug: "bentley",
        createdArt: new Date(),
      },
      {
        name: "BMW",
        imageUrl: "/brands/bmw-logo.png",
        slug: "bmw",
        createdArt: new Date(),
      },
      {
        name: "BYD",
        imageUrl: "/brands/byd-logo.png",
        slug: "byd",
        createdArt: new Date(),
      },
      {
        name: "Chery",
        imageUrl: "/brands/chery-logo.png",
        slug: "chery",
        createdArt: new Date(),
      },
      {
        name: "Chevrolet",
        imageUrl: "/brands/chevrolet-logo.png",
        slug: "chevrolet",
        createdArt: new Date(),
      },
      {
        name: "Chrysler",
        imageUrl: "/brands/chrysler-logo.png",
        slug: "chrysler",
        createdArt: new Date(),
      },
      {
        name: "Citroen",
        imageUrl: "/brands/citroen-logo.png",
        slug: "citroen",
        createdArt: new Date(),
      },
      {
        name: "Dodge",
        imageUrl: "/brands/dodge-logo.png",
        slug: "dodge",
        createdArt: new Date(),
      },
      {
        name: "Ferrari",
        imageUrl: "/brands/ferrari-logo.png",
        slug: "ferrari",
        createdArt: new Date(),
      },
      {
        name: "Fiat",
        imageUrl: "/brands/fiat-logo.png",
        slug: "fiat",
        createdArt: new Date(),
      },
      {
        name: "Ford",
        imageUrl: "/brands/ford-logo.png",
        slug: "ford",
        createdArt: new Date(),
      },
      {
        name: "GAC",
        imageUrl: "/brands/gac-logo.png",
        slug: "gac",
        createdArt: new Date(),
      },
      {
        name: "GWM",
        imageUrl: "/brands/gwm-logo.png",
        slug: "gwm",
        createdArt: new Date(),
      },
      {
        name: "Honda",
        imageUrl: "/brands/honda-logo.png",
        slug: "honda",
        createdArt: new Date(),
      },
      {
        name: "Hyundai",
        imageUrl: "/brands/hyundai-logo.png",
        slug: "hyundai",
        createdArt: new Date(),
      },
      {
        name: "Jaguar",
        imageUrl: "/brands/jaguar-logo.png",
        slug: "jaguar",
        createdArt: new Date(),
      },
      {
        name: "Jeep",
        imageUrl: "/brands/jeep-logo.png",
        slug: "jeep",
        createdArt: new Date(),
      },
      {
        name: "Kia",
        imageUrl: "/brands/kia-logo.png",
        slug: "kia",
        createdArt: new Date(),
      },
      {
        name: "Lamborghini",
        imageUrl: "/brands/lamborghini-logo.png",
        slug: "lamborghini",
        createdArt: new Date(),
      },
      {
        name: "Land-rover",
        imageUrl: "/brands/land-rover-logo.png",
        slug: "land-rover",
        createdArt: new Date(),
      },
      {
        name: "Lexus",
        imageUrl: "/brands/lexus-logo.png",
        slug: "lexus",
        createdArt: new Date(),
      },
      {
        name: "Maserati",
        imageUrl: "/brands/maserati-logo.png",
        slug: "maserati",
        createdArt: new Date(),
      },
      {
        name: "Mclaren",
        imageUrl: "/brands/mclaren-logo.png",
        slug: "mclaren",
        createdArt: new Date(),
      },
      {
        name: "Mercedes",
        imageUrl: "/brands/mercedes-logo.png",
        slug: "mercedes",
        createdArt: new Date(),
      },
      {
        name: "Mini",
        imageUrl: "/brands/mini-logo.png",
        slug: "mini",
        createdArt: new Date(),
      },
      {
        name: "Mitsubishi",
        imageUrl: "/brands/mitsubishi-logo.png",
        slug: "mitsubishi",
        createdArt: new Date(),
      },
      {
        name: "Nissan",
        imageUrl: "/brands/nissan-logo.png",
        slug: "nissan",
        createdArt: new Date(),
      },
      {
        name: "Omoda-Jaecoo",
        imageUrl: "/brands/omoda-jaecoo-logo.png",
        slug: "omoda-jaecoo",
        createdArt: new Date(),
      },
      {
        name: "Peugeot",
        imageUrl: "/brands/peugeot-logo.png",
        slug: "peugeot",
        createdArt: new Date(),
      },
      {
        name: "Porsche",
        imageUrl: "/brands/porsche-logo.png",
        slug: "porsche",
        createdArt: new Date(),
      },
      {
        name: "Ram",
        imageUrl: "/brands/ram-logo.png",
        slug: "ram",
        createdArt: new Date(),
      },
      {
        name: "Renault",
        imageUrl: "/brands/renault-logo.png",
        slug: "renault",
        createdArt: new Date(),
      },
      {
        name: "Smart",
        imageUrl: "/brands/smart-logo.png",
        slug: "smart",
        createdArt: new Date(),
      },
      {
        name: "Subaru",
        imageUrl: "/brands/subaru-logo.png",
        slug: "subaru",
        createdArt: new Date(),
      },
      {
        name: "Tesla",
        imageUrl: "/brands/tesla-logo.png",
        slug: "tesla",
        createdArt: new Date(),
      },
      {
        name: "Toyota",
        imageUrl: "/brands/toyota-logo.png",
        slug: "toyota",
        createdArt: new Date(),
      },
      {
        name: "Troller",
        imageUrl: "/brands/troller-logo.png",
        slug: "troller",
        createdArt: new Date(),
      },
      {
        name: "Volkswagen",
        imageUrl: "/brands/volkswagen-logo.png",
        slug: "volkswagen",
        createdArt: new Date(),
      },
      {
        name: "Volvo",
        imageUrl: "/brands/volvo-logo.png",
        slug: "volvo",
        createdArt: new Date(),
      },
    ])
    .returning();

  console.log(`✅ ${brands.length} marcas inseridas`);

  // Inserir carros
  console.log("🚙 Inserindo carros...");
  const cars = await db
    .insert(carTable)
    .values([
      {
        brandId: brands[0].id, // Volkswagen
        name: "Golf GTI",
        slug: "golf-gti",
        color: "vermelho",
        fuel: "gasolina",
        gearbox: "automático de dupla embreagem",
        description: "Carro esportivo alemão com ótimo desempenho",
        priceInCents: 18000000, // R$ 180.000,00
        imageUrl: "/images/golf-gti.jpg",
        createdArt: new Date(),
      },
      {
        brandId: brands[1].id, // Fiat
        name: "Argo Drive",
        slug: "argo-drive",
        color: "branco",
        fuel: "flex",
        gearbox: "manual",
        description: "Hatch compacto econômico e versátil",
        priceInCents: 6500000, // R$ 65.000,00
        imageUrl: "/images/argo.jpg",
        createdArt: new Date(),
      },
      {
        brandId: brands[2].id, // Chevrolet
        name: "Onix Premier",
        slug: "onix-premier",
        color: "prata",
        fuel: "flex",
        gearbox: "automático",
        description: "Hatch completo com tecnologia e conforto",
        priceInCents: 8500000, // R$ 85.000,00
        imageUrl: "/images/onix.jpg",
        createdArt: new Date(),
      },
      {
        brandId: brands[3].id, // Ford
        name: "Ranger Wildtrak",
        slug: "ranger-wildtrak",
        color: "preto",
        fuel: "diesel",
        gearbox: "automático",
        description: "Picape robusta para trabalho e aventura",
        priceInCents: 25000000, // R$ 250.000,00
        imageUrl: "/images/ranger.jpg",
        createdArt: new Date(),
      },
      {
        brandId: brands[4].id, // Toyota
        name: "Corolla Altis",
        slug: "corolla-altis",
        color: "cinza",
        fuel: "flex",
        gearbox: "CVT",
        description: "Sedan médio com conforto e confiabilidade",
        priceInCents: 14500000, // R$ 145.000,00
        imageUrl: "/images/corolla.jpg",
        createdArt: new Date(),
      },
      {
        brandId: brands[5].id, // Hyundai
        name: "Creta Ultimate",
        slug: "creta-ultimate",
        color: "azul",
        fuel: "flex",
        gearbox: "automático",
        description: "SUV compacto com design moderno",
        priceInCents: 12000000, // R$ 120.000,00
        imageUrl: "/images/creta.jpg",
        createdArt: new Date(),
      },
      {
        brandId: brands[6].id, // Honda
        name: "Civic Touring",
        slug: "civic-touring",
        color: "vermelho",
        fuel: "flex",
        gearbox: "CVT",
        description: "Sedan esportivo com tecnologia avançada",
        priceInCents: 16000000, // R$ 160.000,00
        imageUrl: "/images/civic.jpg",
        createdArt: new Date(),
      },
      {
        brandId: brands[7].id, // Renault
        name: "Kwid Intense",
        slug: "kwid-intense",
        color: "laranja",
        fuel: "flex",
        gearbox: "manual",
        description: "Compacto urbano com bom espaço interno",
        priceInCents: 5500000, // R$ 55.000,00
        imageUrl: "/images/kwid.jpg",
        createdArt: new Date(),
      },
      {
        brandId: brands[0].id, // Volkswagen
        name: "Polo Highline",
        slug: "polo-highline",
        color: "dourado",
        fuel: "flex",
        gearbox: "automático",
        description: "Hatch premium com acabamento refinado",
        priceInCents: 9500000, // R$ 95.000,00
        imageUrl: "/images/polo.jpg",
        createdArt: new Date(),
      },
      {
        brandId: brands[4].id, // Toyota
        name: "Hilux SRX",
        slug: "hilux-srx",
        color: "branco",
        fuel: "diesel",
        gearbox: "automático",
        description: "Picape de trabalho com resistência comprovada",
        priceInCents: 22000000, // R$ 220.000,00
        imageUrl: "/images/hilux.jpg",
        createdArt: new Date(),
      },
    ])
    .returning();

  console.log(`✅ ${cars.length} carros inseridos`);
  console.log("🎉 Seed concluído com sucesso!");
}

main()
  .catch((error) => {
    console.error("❌ Erro no seed:", error);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });
