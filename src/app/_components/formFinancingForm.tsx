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

const FormFinancingForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const form = useForm<FinancingFormData>({
    resolver: zodResolver(financingFormSchema),
    defaultValues: {
      brand: "",
      model: "",
      entryValue: "",
      installmentPayment: "",
      name: "",
      cpf: "",
      birth: "",
      phone: "",
      email: "",
    },
  });

  async function onSubmit(data: FinancingFormData) {
    console.log(data);
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2  w-full"
        >
          <div className="mb-12">
            <h2 className="mb-4 text-xl font-bold">Dados do Veículo</h2>
            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Marca</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: Chevrolet"
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
                name="model"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Modelo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: Cruze"
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

export default FormFinancingForm;
