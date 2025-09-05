// types/filters.ts
export interface CarFilters {
  search?: string;
  marca?: string[];
  estado?: ("novo" | "seminovo" | "usado")[]; // Atualizado com "seminovo"
  anoFabMin?: number;
  anoFabMax?: number;
  anoModeloMin?: number;
  anoModeloMax?: number;
  precoMin?: number;
  precoMax?: number;
  kmMin?: number;
  kmMax?: number;
  combustivel?: (
    | "gasolina"
    | "etanol"
    | "diesel"
    | "gnv"
    | "flex"
    | "elétrico"
    | "outro"
  )[]; // Valores específicos do enum
  cambio?: (
    | "manual"
    | "automático"
    | "automático_sequencial"
    | "cvt"
    | "auto_dupla_embreagem"
    | "semiautomático"
  )[]; // Valores específicos do enum
  carroceria?: ("sedã" | "hatch" | "coupe" | "pickup")[]; // Valores específicos do enum
  cor?: (
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
  )[]; // Valores específicos do enum
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  createdAt: Date;
}

export interface FilterOptions {
  anosFab: {
    min: number;
    max: number;
    values: number[];
  };
  anosModelo: {
    min: number;
    max: number;
    values: number[];
  };
  precos: {
    min: number;
    max: number;
    values: number[];
  };
  kms: {
    min: number;
    max: number;
    values: number[];
  };
  combustiveis: (
    | "gasolina"
    | "etanol"
    | "diesel"
    | "gnv"
    | "flex"
    | "elétrico"
    | "outro"
  )[];
  cambios: (
    | "manual"
    | "automático"
    | "automático_sequencial"
    | "cvt"
    | "auto_dupla_embreagem"
    | "semiautomático"
  )[];
  carrocerias: ("sedã" | "hatch" | "coupe" | "pickup")[]; // Renomeado para carrocerias (plural)
  cores: (
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
  )[];
  estados: ("novo" | "seminovo" | "usado")[]; // Adicionado estados
}

// Novo tipo para o carro completo
export interface Car {
  id: string;
  brandId: string;
  name: string;
  model: string;
  slug: string;
  color:
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
    | "rosa";
  fuel:
    | "gasolina"
    | "etanol"
    | "diesel"
    | "gnv"
    | "flex"
    | "elétrico"
    | "outro";
  gearbox:
    | "manual"
    | "automático"
    | "automático_sequencial"
    | "cvt"
    | "auto_dupla_embreagem"
    | "semiautomático";
  condition: "novo" | "seminovo" | "usado";
  km: string;
  aditionalDetails: string;
  carOptions: string[];
  priceInCents: number;
  imageUrl: string;
  imageGallery: string[];
  yearFab: string;
  yearModel: string;
  carPlate: string;
  bodyType: "sedã" | "hatch" | "coupe" | "pickup";
  createdAt: Date;
  brand: Brand | null;
}

// Tipo para o carro com brand obrigatória (para uso em componentes)
export interface CarWithBrand extends Omit<Car, "brand"> {
  brand: Brand;
}

// Tipo para criar/editar carro (sem campos automáticos)
export interface CreateCarInput {
  brandId: string;
  name: string;
  model: string;
  slug: string;
  color: Car["color"];
  fuel: Car["fuel"];
  gearbox: Car["gearbox"];
  condition: Car["condition"];
  km: string;
  aditionalDetails: string;
  carOptions: string[];
  priceInCents: number;
  imageUrl: string;
  imageGallery: string[];
  yearFab: string;
  yearModel: string;
  carPlate: string;
  bodyType: Car["bodyType"];
}

// Tipo para resposta de API
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Tipo para paginação
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}
