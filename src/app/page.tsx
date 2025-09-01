import Image from "next/image";
import BrandsComponent from "./components/brands";
import VisitedCars from "./components/visitedCars";
import CarCards from "@/components/commons/carCards";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { featuredCars } from "@/data";
import FinancingAlert from "@/components/commons/financingAlert";

export default function Home() {
  return (
    <main className="mt-6 text-gray-one">
      {/* Hero */}
      <section className="w-full max-w-7xl mx-auto max-h-[485px] h-full relative  px-4 mb-12">
        <Image
          src="https://i.ibb.co/CKzPmz0B/auto-car-banner.jpg"
          alt="banner"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />
      </section>
      {/* Brands */}
      <section className="w-full max-w-7xl mx-auto px-4 mb-12">
        <h3 className="font-bold mb-4">Marcas</h3>
        <BrandsComponent />
      </section>
      {/* Visited */}
      <section className="w-full max-w-7xl mx-auto px-4 mb-12">
        <h3 className="font-bold mb-4">Últimos veículos visitados</h3>
        <VisitedCars />
      </section>
      {/* Featured */}
      <section className="w-full max-w-7xl mx-auto px-4 mb-12">
        <h3 className="font-bold mb-4">Veículos em destaque</h3>
        <CarCards />
        <div className="mt-12 flex justify-center">
          {/* {featuredCars.length > 6 && (
          <Button className="bg-red-one py-8 px-16" asChild>
            <Link href="/estoque">Ver Todos</Link>
          </Button>
        )} */}
        </div>
      </section>
      {/* Finance Alert */}
      <section className="mb-12">
        <FinancingAlert />
      </section>
    </main>
  );
}
