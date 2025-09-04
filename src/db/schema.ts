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
  "automático sequencial",
  "CVT",
  "auto/dupla embreagem",
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

export const carTable = pgTable("car", {
  id: uuid().primaryKey().defaultRandom(),
  brandId: uuid("brand_id")
    .notNull()
    .references(() => brandTable.id),
  name: text().notNull(),
  model: text().notNull(),
  slug: text().notNull().unique(),
  color: colorEnum().notNull(),
  fuel: fuelEnum().notNull(),
  gearbox: gearboxEnum().notNull(),
  km: text().notNull(),
  aditionalDetails: text("aditional_details").notNull(),
  carOptions: text("car_options").array().notNull().default([]),
  priceInCents: integer("prince_in_cents").notNull(),
  imageUrl: text("image_url").notNull(),
  imageGallery: text("image_gallery").array().notNull().default([]),
  yearFab: text("year_fab").notNull(),
  yearModel: text("year_model").notNull(),
  carPlate: text("car_plate").notNull(),
  createdAt: timestamp("created_at").notNull(),
});

export const brandTable = pgTable("brand", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  slug: text().notNull().unique(),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").notNull(),
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
