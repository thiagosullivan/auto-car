import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { brandsList } from "../../data";
import Image from "next/image";

const BrandsComponent = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-11/12 mx-auto"
    >
      <CarouselContent>
        {brandsList.map((brand) => (
          <CarouselItem
            key={brand.slug}
            className="basis-1/4 sm:basis-1/6 md:basis-1/7 lg:basis-1/10 xl:basis-1/12"
          >
            <div className="flex flex-col items-center gap-y-2">
              <Card className="p-0 rounded-full">
                <CardContent className="p-0 w-20 h-20 flex items-center justify-center">
                  <Image
                    src={brand.imageUrl}
                    width={55}
                    height={55}
                    alt={brand.name}
                  />
                </CardContent>
              </Card>
              <p className="text-xs text-center font-semibold">{brand.name}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="max-md:hidden">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default BrandsComponent;
