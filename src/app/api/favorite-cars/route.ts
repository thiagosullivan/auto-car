import { NextRequest, NextResponse } from "next/server";

import { eq, inArray } from "drizzle-orm";
import { db } from "@/db";
import { carTable } from "@/db/schema";

export async function POST(request: NextRequest) {
  try {
    const { slugs } = await request.json();

    if (!slugs || !Array.isArray(slugs)) {
      return NextResponse.json(
        { error: "Lista de slugs é necessária" },
        { status: 400 }
      );
    }

    if (slugs.length === 0) {
      return NextResponse.json([]);
    }

    const carsList = await db.query.carTable.findMany({
      where: inArray(carTable.slug, slugs),
      with: {
        brand: true,
      },
    });

    return NextResponse.json(carsList);
  } catch (error) {
    console.error("Erro ao buscar carros favoritos:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
