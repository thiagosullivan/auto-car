"use client";
import CarCards from "@/components/commons/carCards";
import FinancingAlert from "@/components/commons/financingAlert";
import { Skeleton } from "@/components/ui/skeleton";
import { brandTable, carTable } from "@/db/schema";
import { useFavorites } from "@/hook/useFavorites";
import { InferSelectModel } from "drizzle-orm";
import React, { useEffect, useState } from "react";

type Car = InferSelectModel<typeof carTable> & {
  brand: InferSelectModel<typeof brandTable>;
};

const FavoritePage = () => {
  const { favorites } = useFavorites();
  const [favoriteCars, setFavoriteCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  console.log(favoriteCars, "favorites FAV");

  useEffect(() => {
    const fetchFavoriteCars = async () => {
      if (favorites.length === 0) {
        setFavoriteCars([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // Você pode fazer uma requisição API ou usar outra abordagem
        const response = await fetch("/api/favorite-cars", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ slugs: favorites }),
        });

        const data = await response.json();
        setFavoriteCars(data);
      } catch (error) {
        console.error("Erro ao carregar favoritos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavoriteCars();
  }, [favorites]); // Recarrega quando os favoritos mudarem

  if (loading)
    return (
      <div className="w-full max-w-7xl mx-auto my-10  px-4">
        <h1 className="text-3xl font-bold mb-8">Meus favoritos</h1>
        <div className="mb-8">
          <Skeleton className="h-[185px] w-[210px]" />
        </div>
        <FinancingAlert />
      </div>
    );

  return (
    <div className="w-full max-w-7xl mx-auto my-10  px-4">
      <h1 className="text-3xl font-bold mb-8">Meus favoritos</h1>
      <div className="mb-8">
        {favoriteCars.length > 0 ? (
          <CarCards cars={favoriteCars} />
        ) : (
          <p>Você não possui nenhum carro favorito no momento.</p>
        )}
      </div>
      <FinancingAlert />
    </div>
  );
};

export default FavoritePage;
