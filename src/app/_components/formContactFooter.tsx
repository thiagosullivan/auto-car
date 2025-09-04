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
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const FormContactFooter = () => {
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
      const response = await fetch("/api/contact-form", {
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
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2  w-full"
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
          <Button
            className="w-full bg-red-one cursor-pointer text-white"
            type="submit"
          >
            Enviar
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormContactFooter;
