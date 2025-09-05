"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { brandTable, carTable } from "@/db/schema";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

interface RecentlyViewedCar {
  slug: string;
  timestamp: string;
}
interface VisitedCarCardProps {
  cars: (typeof carTable.$inferSelect & {
    brand: typeof brandTable.$inferSelect;
  })[];
}

export const VisitedCarCard = ({ cars }: VisitedCarCardProps) => {
  const [recentlyViewed, setRecentlyViewed] = useState<RecentlyViewedCar[]>([]);
  const [loading, setLoading] = useState(false);

  const recentlyViewedCars = useMemo(() => {
    setLoading(true);
    if (recentlyViewed.length === 0) {
      setLoading(false);
      return [];
    }

    const recentlyViewedSlugs = recentlyViewed.map((item) => item.slug);
    const recentlyViewedSlugSet = new Set(recentlyViewedSlugs);
    setLoading(false);

    return cars
      .filter((car) => recentlyViewedSlugSet.has(car.slug))
      .map((car) => {
        const viewedItem = recentlyViewed.find(
          (item) => item.slug === car.slug
        );
        return {
          ...car,
          viewedAt: viewedItem?.timestamp,
        };
      })
      .sort(
        (a, b) =>
          new Date(b.viewedAt!).getTime() - new Date(a.viewedAt!).getTime()
      );
  }, [cars, recentlyViewed]);

  useEffect(() => {
    const stored = localStorage.getItem("recentlyViewedCars");
    if (stored) {
      setRecentlyViewed(JSON.parse(stored));
    }
  }, []);

  console.log(recentlyViewedCars, "carros visitados filtrados");

  return (
    <>
      {loading && <Skeleton className="h-[185px] w-[210px]" />}
      {recentlyViewedCars.length > 0 && (
        <div className="flex flex-col">
          <h3 className="font-bold mb-4">Últimos veículos visitados</h3>
          <div className="flex gap-x-3">
            {recentlyViewedCars.slice(0, 4).map((car, index) => (
              <Link href={`/carros/${car.brand.slug}/${car.slug}`} key={index}>
                <div className="border-1 border-gray-300">
                  <div className="w-[185px] h-[150px] relative">
                    <Image
                      src={car.imageUrl}
                      alt={car.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col bg-white p-2 text-sm uppercase">
                    <div className="flex gap-x-1">
                      <p className="font-bold text-primary">{car.brand.name}</p>
                      <p className="text-[#929292]">{car.name}</p>
                    </div>
                    <p className="min-h-5">{car.model}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const VisitedCars = ({ cars }: VisitedCarCardProps) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 mb-12">
      <div className="flex gap-4">
        <VisitedCarCard cars={cars} />
      </div>
    </section>
  );
};

export default VisitedCars;
