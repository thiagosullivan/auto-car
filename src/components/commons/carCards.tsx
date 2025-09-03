import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { formatCentsToBRL } from "@/helpers/formatCentToBRL";
import {
  TbBrandSpeedtest,
  TbDropletFilled,
  TbManualGearbox,
} from "react-icons/tb";
import { brandTable, carTable } from "@/db/schema";
import Link from "next/link";
import LikeButton from "./likeButton";

interface CarCardsPorps {
  cars: (typeof carTable.$inferSelect & {
    brand: typeof brandTable.$inferSelect;
  })[];
}

const CarCards = ({ cars }: CarCardsPorps) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {cars.map((car) => (
        <Link href={`/carros/${car.brand.slug}/${car.slug}`} key={car.id}>
          <Card className="max-w-[380px] p-0 gap-0 rounded-2xl overflow-hidden">
            <div className="w-[380px] h-[315px] relative">
              <Image
                src={car.imageUrl}
                alt={car.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                fill
              />
            </div>
            <div className="p-4 text-gray-one">
              <CardHeader className="flex justify-between p-0">
                <div>
                  <div className="flex gap-1 font-bold text-gray-one text-2xl uppercase">
                    <p className="text-red-one">{car.brand.name}</p>
                    <p>{car.name}</p>
                  </div>
                  <p className="uppercase text-sm text-gray-two min-h-5">
                    {car.model}
                  </p>
                </div>
                <LikeButton car={car} />
              </CardHeader>
              <CardContent className="px-0 py-4">
                <p className="font-bold text-3xl mb-4">
                  {formatCentsToBRL(car.priceInCents)}
                </p>
                <div className="flex gap-2 justify-between items-center">
                  <div className="flex items-center justify-center gap-1">
                    <TbBrandSpeedtest size={20} />
                    <p className="text-sm">{car.km} km</p>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <TbDropletFilled size={20} />
                    <p className="text-sm">{car.fuel}</p>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <TbManualGearbox size={20} />
                    <p className="text-sm">{car.gearbox}</p>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CarCards;
