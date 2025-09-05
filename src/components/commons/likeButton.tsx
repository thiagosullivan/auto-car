"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { brandTable, carTable } from "@/db/schema";
import { useFavorites } from "@/hook/useFavorites";

interface Car {
  id: string;
  name: string;
  model: string;
  slug: string;
  color: string;
  fuel: string;
  gearbox: string;
  km: string;
  priceInCents: number;
  imageUrl: string;
  yearFab: string;
  yearModel: string;
  brand: {
    id: string;
    name: string;
    slug: string;
    imageUrl: string;
  } | null;
}

interface LikeButtonProps {
  car: Car;
}

const LikeButton = ({ car }: LikeButtonProps) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(car.slug);

  return (
    <>
      <Button
        variant="ghost"
        size="default"
        className="h-[45px] w-[45px] min-w-0 p-0 hover:bg-transparent absolute top-0 right-0"
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
          <Heart
            stroke="#494949"
            fill="#494949"
            style={{ scale: 2 }}
            className=""
          />
        )}
      </Button>
    </>
  );
};

export default LikeButton;
