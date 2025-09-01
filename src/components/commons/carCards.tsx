import { featuredCars } from "@/data";
import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Heart } from "lucide-react";
import Image from "next/image";
import { formatCentsToBRL } from "@/helpers/formatCentToBRL";
import {
  TbBrandSpeedtest,
  TbDropletFilled,
  TbManualGearbox,
} from "react-icons/tb";

const CarCards = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {featuredCars.map((car) => (
        <div key={car.id}>
          <Card className="max-w-[380px] p-0 gap-0 rounded-2xl overflow-hidden">
            <div className="w-[380px] h-[315px] relative">
              <Image
                src={car.carImgUrl}
                alt={car.carName}
                sizes="100vw"
                objectFit="cover"
                fill
              />
            </div>
            <div className="p-4 text-gray-one">
              <CardHeader className="flex justify-between p-0">
                <div>
                  <div className="flex gap-1 font-bold text-gray-one text-2xl uppercase">
                    <p className="text-red-one">{car.carBrand}</p>
                    <p>{car.carName}</p>
                  </div>
                  <p className="uppercase text-sm text-gray-two">
                    {car.carModel}
                  </p>
                </div>
                {car.liked === "true" ? (
                  <Heart fill="red" stroke="red-one" />
                ) : (
                  <Heart />
                )}
              </CardHeader>
              <CardContent className="px-0 py-4">
                <p className="font-bold text-3xl mb-4">
                  {formatCentsToBRL(car.carPrice)}
                </p>
                <div className="flex gap-2 justify-between items-center">
                  <div className="flex items-center gap-1">
                    <TbBrandSpeedtest size={20} />
                    <p className="text-sm">{car.km} km</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <TbDropletFilled size={20} />
                    <p className="text-sm">{car.fuel}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <TbManualGearbox size={20} />
                    <p className="text-sm">{car.shift}</p>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CarCards;
