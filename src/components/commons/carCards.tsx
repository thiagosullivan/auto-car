import {
  TbBrandSpeedtest,
  TbDropletFilled,
  TbManualGearbox,
} from "react-icons/tb";

import { formatCentsToBRL } from "@/helpers/formatCentToBRL";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";
import LikeButton from "./likeButton";

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

interface CarListProps {
  cars: Car[];
  searchTerm?: string;
}

export default function CarList({ cars, searchTerm }: CarListProps) {
  if (cars.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🚗</div>
        {searchTerm ? (
          <p className="text-gray-600 text-lg">
            Nenhum carro encontrado para{" "}
            <strong>&quot;{searchTerm}&quot;</strong>
          </p>
        ) : (
          <p className="text-gray-600 text-lg">
            Nenhum carro disponível no momento
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {searchTerm && (
        <div className="py-4 rounded-lg">
          <p className="">
            {cars.length} carro{cars.length !== 1 ? "s" : ""} encontrado
            {cars.length !== 1 ? "s" : ""} para:
            <span className="text-red-one font-bold">
              {" "}
              &quot;{searchTerm}&quot;
            </span>
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <Link
            href={
              car.brand && car.brand.slug
                ? `/carros/${car.brand.slug}/${car.slug}`
                : "#"
            }
            key={car.id}
          >
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
              <div className="p-4 ">
                <CardHeader className="flex justify-between p-0">
                  <div>
                    <div className="flex gap-1 font-bold text-2xl uppercase">
                      <p className="text-red-one">{car.brand?.name ?? ""}</p>
                      <p className="text-foreground">{car.name}</p>
                    </div>
                    <p className="uppercase text-sm text-gray-two min-h-5">
                      {car.model}
                    </p>
                  </div>
                  <LikeButton car={car} />
                </CardHeader>
                <CardContent className="px-0 py-4 text-foreground">
                  <p className="font-bold text-3xl mb-4 ">
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
    </div>
  );
}
