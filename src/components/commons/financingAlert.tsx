import Link from "next/link";
import { Button } from "../ui/button";

const FinancingAlert = () => {
  return (
    <div className="bg-red-one w-full max-w-7xl mx-auto flex justify-between items-center p-8">
      <p className="text-white font-bold text-4xl max-w-[400px]">
        Faça uma simulação de financiamento com a agente
      </p>
      <Button
        className="bg-white text-red-one font-bold py-6 px-10 hover:bg-gray-one hover:text-white"
        asChild
      >
        <Link href="/financiamento">Aqui</Link>
      </Button>
    </div>
  );
};

export default FinancingAlert;
