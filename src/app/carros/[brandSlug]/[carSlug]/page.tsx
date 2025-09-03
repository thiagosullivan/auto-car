import FinancingAlert from "@/components/commons/financingAlert";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { formatCentsToBRL } from "@/helpers/formatCentToBRL";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { FiClock, FiMapPin } from "react-icons/fi";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { carTable } from "@/db/schema";
import { RecentlyViewedTracker } from "@/utils/RecentlyViewedTracker";
import LikeButton from "@/components/commons/likeButton";

interface CategoryPageProps {
  params: Promise<{ carSlug: string }>;
}

export const sellerData = [
  {
    id: "1",
    sellerName: "Vendedor 1",
    sellerPhone: "(43) 99898-9898",
  },
  {
    id: "2",
    sellerName: "Vendedor 2",
    sellerPhone: "(43) 88787-8787",
  },
];

const BrandPage = async ({ params }: CategoryPageProps) => {
  const { carSlug } = await params;

  const carsList = await db.query.carTable.findFirst({
    where: eq(carTable.slug, carSlug),
    with: {
      brand: true,
    },
  });

  console.log(carsList, "carsList");

  return (
    <div className="">
      <Carousel
        opts={{
          align: "start",
        }}
        // className="w-full max-w-11/12 mx-auto"
        className="w-full"
      >
        <CarouselContent>
          {carsList?.imageGallery.map((url, index) => (
            <CarouselItem
              key={index}
              className="basis-1/1 sm:basis-1/6 md:basis-1/7 lg:basis-1/10 xl:basis-1/3"
            >
              <div className="flex flex-col items-center gap-y-2">
                <div className="min-w-[700px] h-[575px] relative">
                  <Image
                    src={url}
                    alt="carro"
                    sizes="100vw"
                    objectFit="cover"
                    fill
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <div className="max-md:hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div> */}
      </Carousel>
      <div className="w-full max-w-7xl mx-auto relative top-3/12 flex justify-around gap-4">
        <div className="text-gray-one relative z-20 bg-white top-[-50px] p-8 rounded-2xl max-w-[850px] w-full shadow-md border border-gray-300">
          <div className="flex justify-between mb-8">
            <div>
              <h2 className="text-3xl uppercase font-bold mb-1">
                <span className="text-red-one">{carsList?.brand.name}</span>{" "}
                {carsList?.name}
              </h2>
              <p className="uppercase">{carsList?.model}</p>
            </div>
            <div className="">{carsList && <LikeButton car={carsList} />}</div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-4">
            <div>
              <p className="">Ano Fab.</p>
              <p className="font-bold">{carsList?.yearFab}</p>
            </div>
            <div>
              <p className="">Ano Mod.</p>
              <p className="font-bold">{carsList?.yearModel}</p>
            </div>
            <div>
              <p className="">Km</p>
              <p className="font-bold">{carsList?.km}</p>
            </div>
            <div>
              <p className="">Combustível</p>
              <p className="font-bold">{carsList?.fuel}</p>
            </div>
            <div>
              <p className="">Cor</p>
              <p className="font-bold">{carsList?.color}</p>
            </div>
            <div>
              <p className="">Placa</p>
              <p className="font-bold">{carsList?.carPlate}</p>
            </div>
          </div>

          <div className="border-b-1 border-gray-300 my-8" />

          <div className="mb-8">
            <h3 className="font-bold mb-4">Opcionais do Veículo</h3>
            <ul className="list-disc grid grid-cols-3 gap-2 pl-4">
              {carsList?.carOptions.map((details, index) => (
                <li key={index}>{details}</li>
              ))}
            </ul>
          </div>

          <div className="border-b-1 border-gray-300 my-8" />

          <div>
            <h3 className="font-bold mb-4">Descrição</h3>
            <p className="text-justify">{carsList?.aditionalDetails}</p>
          </div>
        </div>

        <div className="text-gray-one relative z-20 bg-white top-[-50px] p-8 rounded-2xl max-w-[325px] w-full h-fit shadow-md border border-gray-300 flex flex-col items-center gap-4">
          <p className="text-3xl font-bold">
            {carsList?.priceInCents !== undefined
              ? formatCentsToBRL(carsList.priceInCents)
              : "--"}
          </p>
          <div className="flex flex-col gap-y-2 mb-2">
            {sellerData.map((seller) => (
              <Button
                key={seller.id}
                className="bg-green-500 rounded-md px-2 py-4 text-center font-bold text-white flex items-center h-12"
                asChild
              >
                <Link href="/">
                  <FaWhatsapp />
                  <p className="text-base">Fale com o {seller.sellerName}</p>
                </Link>
              </Button>
            ))}
            <Link
              href="/contato"
              className="bg-red-one hover:bg-gray-one rounded-md px-2 py-4 text-center font-bold text-white h-12 flex items-center justify-center"
            >
              Envie sua proposta
            </Link>
          </div>
          <div className="border-b-1 border-gray-300 my-2 w-full" />
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center">
              <FiMapPin size={25} className="mr-2" />
              <p className="text-sm">
                Av. Higienópolis, 999, Centro, <br /> Londrina - PR, 86040-100
              </p>
            </div>
            <div className="flex items-center">
              <FiClock size={25} className="mr-2" />
              <p className="text-sm">
                Seg - Sex | 09h - 18h <br /> Sab | 09h - 12h
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <FinancingAlert />
      </div>
      <RecentlyViewedTracker slug={carsList?.slug} />
    </div>
  );
};

export default BrandPage;
