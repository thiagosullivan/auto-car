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
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Terms from "./terms";
import { PatternFormat } from "react-number-format";
import { SaleFormData, saleSchema } from "@/lib/validation/saleFormSchema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const FormSale = () => {
  const [isChecked, setIsChecked] = useState(false);

  const form = useForm<SaleFormData>({
    resolver: zodResolver(saleSchema),
    defaultValues: {
      brand: "",
      model: "",
      yearFab: "",
      yearModel: "",
      fuel: "",
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: SaleFormData) {
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
              <div className="flex gap-x-2">
                <FormField
                  control={form.control}
                  name="yearFab"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Ano de Fab</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex: 2020"
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
                  name="yearModel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Ano de Mod</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex: 2021"
                          {...field}
                          className="bg-white border-gray-300 h-10"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="fuel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Combustível</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="bg-white border-gray-300 h-10 w-full">
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um tipo de combustível" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Gasolina">Gasolina</SelectItem>
                          <SelectItem value="Etanol">Etanol</SelectItem>
                          <SelectItem value="Flex">Flex</SelectItem>
                          <SelectItem value="Diesel">Diesel</SelectItem>
                          <SelectItem value="GNV">GNV</SelectItem>
                          <SelectItem value="Outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-xl font-bold">Dados Pessoais</h2>
            <div className="mb-12">
              <div className="grid grid-cols-2 gap-6 mb-6">
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
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="text-base">
                      Informações Adicionais
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Escreva sua mensagem"
                        {...field}
                        className="resize-none bg-white border-gray-300 h-28"
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
                className="bg-white border-gray-300"
              />
              <div className="flex gap-1">
                Lí e concordo com a <Terms />.
              </div>
            </div>
          </div>

          <Button
            className="bg-red-one cursor-pointer py-6 px-14"
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

export default FormSale;
