"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { brandTable, carTable } from "@/db/schema";
import { useFavorites } from "@/hook/useFavorites";

interface LikeButtonProps {
  car: typeof carTable.$inferSelect & {
    brand: typeof brandTable.$inferSelect;
  };
}

const LikeButton = ({ car }: LikeButtonProps) => {
  //   const [isFavorited, setIsFavorited] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(car.slug);

  //   useEffect(() => {
  //     const currentFavorites = JSON.parse(
  //       localStorage.getItem("likedCars") || "[]"
  //     );
  //     setIsFavorited(currentFavorites.includes(car.slug));
  //   }, [car.slug]);

  //   const handleFavorite = () => {
  //     const currentFavorites = JSON.parse(
  //       localStorage.getItem("likedCars") || "[]"
  //     );

  //     let updatedFavorites: string[];

  //     if (currentFavorites.includes(car.slug)) {
  //       updatedFavorites = currentFavorites.filter(
  //         (slug: string) => slug !== car.slug
  //       );
  //       setIsFavorited(false);
  //     } else {
  //       updatedFavorites = [car.slug, ...currentFavorites];
  //       setIsFavorited(true);
  //     }

  //     localStorage.setItem("likedCars", JSON.stringify(updatedFavorites));
  //   };

  return (
    <>
      <Button
        variant="ghost"
        size="default"
        className="h-[45px] w-[45px] min-w-0 p-0 hover:bg-transparent"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          //   handleFavorite();
          toggleFavorite(car.slug);
        }}
      >
        {isFavorite ? (
          <Heart stroke="#ee212b" fill="#ee212b" style={{ scale: 2 }} />
        ) : (
          <Heart stroke="#494949" style={{ scale: 2 }} className="" />
        )}
      </Button>
    </>
  );
};

export default LikeButton;
