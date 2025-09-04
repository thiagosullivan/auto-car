"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  financingFormSchema,
  FinancingFormData,
} from "@/lib/validation/financingFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Terms from "./terms";
import { NumericFormat, PatternFormat } from "react-number-format";
import { brandTable, carTable } from "@/db/schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { formatCentsToBRL } from "@/helpers/formatCentToBRL";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface FinancingFormProps {
  cars: (typeof carTable.$inferSelect & {
    brand: typeof brandTable.$inferSelect;
  })[];
}

const FinancingForm = ({ cars }: FinancingFormProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<FinancingFormData>({
    resolver: zodResolver(financingFormSchema),
    defaultValues: {
      carInfos: "",
      entryValue: "",
      installmentPayment: "",
      name: "",
      cpf: "",
      birth: "",
      phone: "",
      email: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  async function onSubmit(data: FinancingFormData) {
    console.log(data);

    console.log("CLICKADO");

    try {
      setLoading(true);
      const response = await fetch("/api/finance-form", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Resposta da API:", result);

      if (response.ok) {
        // Limpa o formulário
        reset();

        toast.success("E-mail enviado com sucesso!", {
          style: { backgroundColor: "green", color: "white" },
        });
      } else {
        throw new Error(result.error || "Erro ao enviar e-mail");
      }
    } catch (error) {
      console.error("Erro:", error);
      toast.error("Houve uma falha no envio do e-mail!", {
        style: { backgroundColor: "red", color: "white" },
      });
    } finally {
      setLoading(false);
      console.log("FINALLY");
    }
  }

  return (
    <div>
      <Form {...form}>
        {loading && (
          <div className="bg-black flex w-full h-full absolute top-0 left-0 rounded-2xl opacity-20 justify-center items-center">
            <Loader2 className="animate-spin" />
          </div>
        )}
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`space-y-2  w-full ${loading && "pointer-events-none"}`}
        >
          <div className="mb-12">
            <h2 className="mb-4 text-xl font-bold">Dados do Veículo</h2>
            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="carInfos"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Carro</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="bg-white border-gray-300 !h-[50px] w-full">
                          <SelectTrigger>
                            <SelectValue
                              placeholder="Selecione um tipo de combustível"
                              className="h-[50px]"
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {cars.map((car) => (
                            <SelectItem
                              value={`${car.brand.name} ${
                                car.name
                              } - ${formatCentsToBRL(car.priceInCents)} - ${
                                car.carPlate
                              } `}
                              key={car.id}
                            >
                              <div className="flex gap-4">
                                <Image
                                  src={car.imageUrl}
                                  width={50}
                                  height={50}
                                  alt={car.name}
                                />
                                <div>
                                  <div className="flex items-center justify-start gap-x-2">
                                    <p className="font-bold">
                                      {car.brand.name}
                                    </p>
                                    <p>{car.name}</p>
                                  </div>
                                  <p>{car.model}</p>
                                </div>
                                <div>
                                  {formatCentsToBRL(car.priceInCents)}
                                  <p>{car.carPlate}</p>
                                </div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-x-6">
                <FormField
                  control={form.control}
                  name="entryValue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">
                        Valor de entrada
                      </FormLabel>
                      <FormControl>
                        <NumericFormat
                          type="text"
                          thousandsGroupStyle="thousand"
                          thousandSeparator="."
                          decimalSeparator=","
                          decimalScale={2}
                          fixedDecimalScale
                          customInput={Input}
                          placeholder="Ex: 1.000,00"
                          {...field}
                          className="bg-white border-gray-300 h-10"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="installmentPayment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">
                        Quantidade de parcelas
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Parcelas"
                          {...field}
                          className="bg-white border-gray-300 h-10"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-xl font-bold">Dados Pessoais</h2>
            <div className="grid grid-cols-2 gap-6 mb-12">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Nome</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Seu nome"
                        {...field}
                        className="bg-white border-gray-300 h-10"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">CPF</FormLabel>
                    <FormControl>
                      <PatternFormat
                        format="###.###.###-##"
                        mask="_"
                        placeholder="000.000.000-00"
                        customInput={Input}
                        {...field}
                        className="bg-white border-gray-300 h-10"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="birth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">
                      Data de Nascimento
                    </FormLabel>
                    <FormControl>
                      <PatternFormat
                        format="##/##/####"
                        mask="_"
                        placeholder="01/01/2000"
                        customInput={Input}
                        {...field}
                        className="bg-white border-gray-300 h-10"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Celular</FormLabel>
                    <FormControl>
                      <PatternFormat
                        format="(##) #####-####"
                        mask="_"
                        placeholder="(43) 99999-9999"
                        customInput={Input}
                        {...field}
                        className="bg-white border-gray-300 h-10"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="exemplo@email.com"
                        {...field}
                        className="bg-white border-gray-300 h-10"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center gap-x-2">
              <Checkbox
                id="terms"
                checked={isChecked}
                onCheckedChange={(checked) => setIsChecked(checked as boolean)}
                className="border-gray-500"
              />
              <div className="flex gap-1">
                Lí e concordo com a <Terms />.
              </div>
            </div>
          </div>

          <Button
            className="bg-red-one cursor-pointer py-6 px-14 text-white"
            type="submit"
            disabled={!isChecked}
          >
            Enviar
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FinancingForm;
