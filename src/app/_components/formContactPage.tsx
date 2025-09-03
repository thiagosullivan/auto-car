"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ContactFormData,
  contactSchema,
} from "@/lib/validation/footerContactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormContactPage = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  async function onSubmit(data: ContactFormData) {
    console.log(data);

    console.log("CLICKADO");

    try {
      setLoading(true);
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Resposta da API:", result);

      if (response.ok) {
        // Limpa o formulário
        reset();

        // toast.success(
        //   "E-mail enviado com sucesso!"
        // );
      } else {
        throw new Error(result.error || "Erro ao enviar e-mail");
      }
    } catch (error) {
      console.error("Erro:", error);
      // toast.error(
      //   "Houve uma falha no envio do e-mail!"
      // );
    } finally {
      setLoading(false);
      console.log("FINALLY");
    }
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md relative">
      <Form {...form}>
        {loading && (
          <div className="bg-black flex w-full h-full absolute top-0 left-0 rounded-2xl opacity-60 justify-center items-center">
            <Loader2 className="animate-spin" />
          </div>
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`space-y-4 w-full ${loading && "pointer-events-none"}`}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Nome" {...field} />
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
                <FormControl>
                  <Input placeholder="Email (opcional)" {...field} />
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
                <FormControl>
                  <Input placeholder="Telefone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="">
                <FormControl>
                  <Textarea
                    placeholder="Mensagem"
                    {...field}
                    className="resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full bg-red-one cursor-pointer" type="submit">
            Enviar
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormContactPage;
