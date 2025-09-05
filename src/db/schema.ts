import { relations } from "drizzle-orm";
import {
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
});

export const colorEnum = pgEnum("color", [
  "preto",
  "cinza",
  "branco",
  "prata",
  "vermelho",
  "azul",
  "verde",
  "amarelo",
  "laranja",
  "marrom",
  "bege",
  "dourado",
  "roxo",
  "rosa",
]);

export const gearboxEnum = pgEnum("gearbox", [
  "manual",
  "automático",
  "automático_sequencial",
  "cvt",
  "auto_dupla_embreagem",
  "semiautomático",
]);

export const fuelEnum = pgEnum("fuel", [
  "gasolina",
  "etanol",
  "diesel",
  "gnv",
  "flex",
  "elétrico",
  "outro",
]);

export const bodyTypeEnum = pgEnum("body_type", [
  "sedã",
  "hatch",
  "coupe",
  "pickup",
  "conversivel",
  "furgão",
  "suv",
  "utilitário",
  "moto",
  "nautico",
]);

export const conditionEnum = pgEnum("condition", ["novo", "seminovo", "usado"]);
export const carTypeEnum = pgEnum("cart_type", [
  "automóvel",
  "moto",
  "nautico",
]);

export const carTable = pgTable("car", {
  id: uuid().primaryKey().defaultRandom(),
  carType: carTypeEnum("car_type").notNull(),
  brandId: uuid("brand_id")
    .notNull()
    .references(() => brandTable.id),
  name: text().notNull(),
  model: text().notNull(),
  slug: text().notNull().unique(),
  color: colorEnum().notNull(),
  fuel: fuelEnum().notNull(),
  gearbox: gearboxEnum().notNull(),
  condition: conditionEnum().notNull(),
  km: text().notNull(),
  aditionalDetails: text("aditional_details").notNull(),
  carOptions: text("car_options").array().notNull().default([]),
  priceInCents: integer("price_in_cents").notNull(),
  imageUrl: text("image_url").notNull(),
  imageGallery: text("image_gallery").array().notNull().default([]),
  yearFab: text("year_fab").notNull(),
  yearModel: text("year_model").notNull(),
  carPlate: text("car_plate").notNull(),
  bodyType: bodyTypeEnum().notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const brandTable = pgTable("brand", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  slug: text().notNull().unique(),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const brandRelations = relations(brandTable, (params) => {
  return {
    cars: params.many(carTable),
  };
});

export const carRelations = relations(carTable, (params) => {
  return {
    brand: params.one(brandTable, {
      fields: [carTable.brandId],
      references: [brandTable.id],
    }),
  };
});
