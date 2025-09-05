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
        createdAt: new Date(),
      },
      {
        name: "Audi",
        imageUrl: "/brands/audi-logo.png",
        slug: "audi",
        createdAt: new Date(),
      },
      {
        name: "Bentley",
        imageUrl: "/brands/bentley-logo.png",
        slug: "bentley",
        createdAt: new Date(),
      },
      {
        name: "BMW",
        imageUrl: "/brands/bmw-logo.png",
        slug: "bmw",
        createdAt: new Date(),
      },
      {
        name: "BYD",
        imageUrl: "/brands/byd-logo.png",
        slug: "byd",
        createdAt: new Date(),
      },
      {
        name: "Chery",
        imageUrl: "/brands/chery-logo.png",
        slug: "chery",
        createdAt: new Date(),
      },
      {
        name: "Chevrolet",
        imageUrl: "/brands/chevrolet-logo.png",
        slug: "chevrolet",
        createdAt: new Date(),
      },
      {
        name: "Chrysler",
        imageUrl: "/brands/chrysler-logo.png",
        slug: "chrysler",
        createdAt: new Date(),
      },
      {
        name: "Citroen",
        imageUrl: "/brands/citroen-logo.png",
        slug: "citroen",
        createdAt: new Date(),
      },
      {
        name: "Dodge",
        imageUrl: "/brands/dodge-logo.png",
        slug: "dodge",
        createdAt: new Date(),
      },
      {
        name: "Ferrari",
        imageUrl: "/brands/ferrari-logo.png",
        slug: "ferrari",
        createdAt: new Date(),
      },
      {
        name: "Fiat",
        imageUrl: "/brands/fiat-logo.png",
        slug: "fiat",
        createdAt: new Date(),
      },
      {
        name: "Ford",
        imageUrl: "/brands/ford-logo.png",
        slug: "ford",
        createdAt: new Date(),
      },
      {
        name: "GAC",
        imageUrl: "/brands/gac-logo.png",
        slug: "gac",
        createdAt: new Date(),
      },
      {
        name: "GWM",
        imageUrl: "/brands/gwm-logo.png",
        slug: "gwm",
        createdAt: new Date(),
      },
      {
        name: "Honda",
        imageUrl: "/brands/honda-logo.png",
        slug: "honda",
        createdAt: new Date(),
      },
      {
        name: "Hyundai",
        imageUrl: "/brands/hyundai-logo.png",
        slug: "hyundai",
        createdAt: new Date(),
      },
      {
        name: "Jaguar",
        imageUrl: "/brands/jaguar-logo.png",
        slug: "jaguar",
        createdAt: new Date(),
      },
      {
        name: "Jeep",
        imageUrl: "/brands/jeep-logo.png",
        slug: "jeep",
        createdAt: new Date(),
      },
      {
        name: "Kia",
        imageUrl: "/brands/kia-logo.png",
        slug: "kia",
        createdAt: new Date(),
      },
      {
        name: "Lamborghini",
        imageUrl: "/brands/lamborghini-logo.png",
        slug: "lamborghini",
        createdAt: new Date(),
      },
      {
        name: "Land Rover",
        imageUrl: "/brands/land-rover-logo.png",
        slug: "land-rover",
        createdAt: new Date(),
      },
      {
        name: "Lexus",
        imageUrl: "/brands/lexus-logo.png",
        slug: "lexus",
        createdAt: new Date(),
      },
      {
        name: "Maserati",
        imageUrl: "/brands/maserati-logo.png",
        slug: "maserati",
        createdAt: new Date(),
      },
      {
        name: "McLaren",
        imageUrl: "/brands/mclaren-logo.png",
        slug: "mclaren",
        createdAt: new Date(),
      },
      {
        name: "Mercedes",
        imageUrl: "/brands/mercedes-logo.png",
        slug: "mercedes",
        createdAt: new Date(),
      },
      {
        name: "Mini",
        imageUrl: "/brands/mini-logo.png",
        slug: "mini",
        createdAt: new Date(),
      },
      {
        name: "Mitsubishi",
        imageUrl: "/brands/mitsubishi-logo.png",
        slug: "mitsubishi",
        createdAt: new Date(),
      },
      {
        name: "Nissan",
        imageUrl: "/brands/nissan-logo.png",
        slug: "nissan",
        createdAt: new Date(),
      },
      {
        name: "Omoda Jaecoo",
        imageUrl: "/brands/omoda-jaecoo-logo.png",
        slug: "omoda-jaecoo",
        createdAt: new Date(),
      },
      {
        name: "Peugeot",
        imageUrl: "/brands/peugeot-logo.png",
        slug: "peugeot",
        createdAt: new Date(),
      },
      {
        name: "Porsche",
        imageUrl: "/brands/porsche-logo.png",
        slug: "porsche",
        createdAt: new Date(),
      },
      {
        name: "Ram",
        imageUrl: "/brands/ram-logo.png",
        slug: "ram",
        createdAt: new Date(),
      },
      {
        name: "Renault",
        imageUrl: "/brands/renault-logo.png",
        slug: "renault",
        createdAt: new Date(),
      },
      {
        name: "Smart",
        imageUrl: "/brands/smart-logo.png",
        slug: "smart",
        createdAt: new Date(),
      },
      {
        name: "Subaru",
        imageUrl: "/brands/subaru-logo.png",
        slug: "subaru",
        createdAt: new Date(),
      },
      {
        name: "Tesla",
        imageUrl: "/brands/tesla-logo.png",
        slug: "tesla",
        createdAt: new Date(),
      },
      {
        name: "Toyota",
        imageUrl: "/brands/toyota-logo.png",
        slug: "toyota",
        createdAt: new Date(),
      },
      {
        name: "Troller",
        imageUrl: "/brands/troller-logo.png",
        slug: "troller",
        createdAt: new Date(),
      },
      {
        name: "Volkswagen",
        imageUrl: "/brands/volkswagen-logo.png",
        slug: "volkswagen",
        createdAt: new Date(),
      },
      {
        name: "Volvo",
        imageUrl: "/brands/volvo-logo.png",
        slug: "volvo",
        createdAt: new Date(),
      },
    ])
    .returning();

  console.log(`✅ ${brands.length} marcas inseridas`);

  // Encontrar IDs específicos das marcas
  const volkswagen = brands.find((b) => b.slug === "volkswagen")!;
  const jeep = brands.find((b) => b.slug === "jeep")!;
  const hyundai = brands.find((b) => b.slug === "hyundai")!;

  // Inserir carros
  console.log("🚙 Inserindo carros...");
  const cars = await db
    .insert(carTable)
    .values([
      {
        brandId: volkswagen.id,
        name: "Golf",
        model: "GTI 2.0 TSI",
        slug: "volkswagen-golf-gti-tsi",
        color: "branco",
        fuel: "flex",
        gearbox: "automático",
        condition: "novo",
        km: "65.245",
        aditionalDetails:
          "CARRO EM ÓTIMO ESTADO DE CONSERVAÇÃO, VENHA CONFERIR. Financiamento facilitado, acesse nosso estoque: A melhor avaliação do seu veículo!!! Venha fazer uma visita! Veículos semi-novos de todas as marcas e modelos, revisados, com garantia e procedência. Caldarelli Veículos atua no mercado a mais de 10 anos, trazendo qualidade e um diferencial em veículos semi-novos. Disponibilizamos as melhores taxas e condições de financiamento nas principais operadoras do mercado. Aceitamos carta de crédito, seu veículo como forma de pagamento. Contamos com uma excelente equipe para melhor atende-lo, venha nos fazer uma visita, ou entre em contato pelos telefones: (43) 3324 6001 (43) 3329 9001. Embora a prática rigorosa na acuidade, precisão, exibição e atualização de dados gerais, informações e conteúdo dispostos no site, nos reservamos o direito a correções de possíveis erros de digitação, omissão de dados ou qualquer informação que venha a ser questionada por ser tratar de veiculo semi novo. IPVA 2025 PAGO",
        carOptions: [
          "Abs",
          "Airbag",
          "Ar-condicionado",
          "Ar Quente",
          "Câmbio Automático",
          "Direção Hidráulica",
          "Retrovisor Elétrico",
          "Rodas De Liga Leve",
          "Sensor De Estacionamento",
          "Som Multimídia",
          "Trava Elétrica",
          "Vidros Elétricos",
        ],
        priceInCents: 8390000,
        imageUrl:
          "https://s3.carro57.com.br/FC/3215/6791961_0_B_2c142048d1.jpeg",
        imageGallery: [
          "https://s3.carro57.com.br/FC/3215/6791961_0_B_2c142048d1.jpeg",
          "https://s3.carro57.com.br/FC/3215/6791961_0_B_cf9badb4c0.jpeg",
          "https://s3.carro57.com.br/FC/3215/6791961_0_B_b2832f1a39.jpeg",
          "https://s3.carro57.com.br/FC/3215/6791961_0_B_f411e988a7.jpeg",
          "https://s3.carro57.com.br/FC/3215/6791961_0_B_440ce488ad.jpeg",
          "https://s3.carro57.com.br/FC/3215/6791961_0_B_3ccad84744.jpeg",
          "https://s3.carro57.com.br/FC/3215/6791961_0_B_3bc63c103e.jpeg",
          "https://s3.carro57.com.br/FC/3215/6791961_0_B_3c984b89e6.jpeg",
          "https://s3.carro57.com.br/FC/3215/6791961_0_B_aa2f4a3107.jpeg",
          "https://s3.carro57.com.br/FC/3215/6791961_0_B_7b3266be47.jpeg",
        ],
        yearFab: "2023",
        yearModel: "2024",
        carPlate: "S**-***1",
        bodyType: "sedã",
        createdAt: new Date(),
      },
      {
        brandId: jeep.id,
        name: "Renegade",
        model: "1.8 AT",
        slug: "jeep-renegade-18-at",
        color: "branco",
        fuel: "flex",
        gearbox: "automático",
        condition: "seminovo",
        km: "36.000",
        aditionalDetails:
          "REPASSE........ PERÍCIA APROVADA C/ RESTRIÇÃO TABELA R$75.000,00",
        carOptions: [
          "Abs",
          "Airbag",
          "Ar-condicionado",
          "Ar Quente",
          "Câmbio Automático",
          "Rodas De Liga Leve",
          "Trava Elétrica",
          "Vidros Elétricos",
          "Som",
        ],
        priceInCents: 6990000,
        imageUrl:
          "https://s3.carro57.com.br/FC/3215/7201587_10_B_40358db79a.jpeg",
        imageGallery: [
          "https://s3.carro57.com.br/FC/3215/7201587_10_B_40358db79a.jpeg",
          "https://s3.carro57.com.br/FC/3215/7201587_1_B_5917723438.jpeg",
          "https://s3.carro57.com.br/FC/3215/7201587_2_B_4a66659cab.jpeg",
          "https://s3.carro57.com.br/FC/3215/7201587_3_B_09855eaf39.jpeg",
          "https://s3.carro57.com.br/FC/3215/7201587_4_B_f423030439.jpeg",
          "https://s3.carro57.com.br/FC/3215/7201587_5_B_7bf7938585.jpeg",
          "https://s3.carro57.com.br/FC/3215/7201587_6_B_5eb264639f.jpeg",
          "https://s3.carro57.com.br/FC/3215/7201587_7_B_0c0bf9c1fa.jpeg",
          "https://s3.carro57.com.br/FC/3215/7201587_8_B_f3d93ce7fe.jpeg",
          "https://s3.carro57.com.br/FC/3215/7201587_9_B_d9f236b397.jpeg",
        ],
        yearFab: "2023",
        yearModel: "2024",
        carPlate: "F**-***3",
        bodyType: "hatch",
        createdAt: new Date(),
      },
      {
        brandId: hyundai.id,
        name: "Veloster",
        model: "Turbo",
        slug: "hyundai-veloster-turbo",
        color: "preto",
        fuel: "gasolina",
        gearbox: "automático",
        condition: "usado",
        km: "114.197",
        aditionalDetails: "PERÍCIA APROVADA C/ RESTRIÇÃO REPASSE.............",
        carOptions: [
          "Abs",
          "Airbag",
          "Ar-condicionado",
          "Ar Quente",
          "Câmbio Automático",
          "Rodas De Liga Leve",
          "Freio A Disco Nas 2 Rodas",
          "Trava Elétrica",
          "Vidros Elétricos",
          "Retrovisor Elétrico",
          "Som",
        ],
        priceInCents: 6990000,
        imageUrl:
          "https://s3.carro57.com.br/FC/3215/7264806_0_B_25ddd5aa32.jpeg",
        imageGallery: [
          "https://s3.carro57.com.br/FC/3215/7264806_0_B_25ddd5aa32.jpeg",
          "https://s3.carro57.com.br/FC/3215/7264806_1_B_8103b99af3.jpeg",
          "https://s3.carro57.com.br/FC/3215/7264806_2_B_09fa27b88a.jpeg",
          "https://s3.carro57.com.br/FC/3215/7264806_3_B_95fbd9b37e.jpeg",
          "https://s3.carro57.com.br/FC/3215/7264806_4_B_70741dce81.jpeg",
          "https://s3.carro57.com.br/FC/3215/7264806_5_B_28ecc59e47.jpeg",
          "https://s3.carro57.com.br/FC/3215/7264806_6_B_c7c59b70b8.jpeg",
          "https://s3.carro57.com.br/FC/3215/7264806_7_B_dbed179c88.jpeg",
          "https://s3.carro57.com.br/FC/3215/7264806_8_B_45b2a37874.jpeg",
          "https://s3.carro57.com.br/FC/3215/7264806_9_B_363473e411.jpeg",
        ],
        yearFab: "2012",
        yearModel: "2013",
        carPlate: "F**-***3",
        bodyType: "hatch",
        createdAt: new Date(),
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
