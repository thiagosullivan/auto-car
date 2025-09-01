import { z } from "zod";

export const financingFormSchema = z.object({
  brand: z.string().min(2, "A marca é obrigatória"),
  model: z.string().min(2, "O modelo é obrigatório"),
  entryValue: z.string().min(1, "É obrigatório enviar um valor"),
  installmentPayment: z
    .string()
    .regex(/^\d+$/, "É obrigatório ao menos 1 parcela"),
  // entryValue: z
  //   .string()
  //   .min(1, "É obrigatório enviar um valor")
  //   .regex(/^\d+$/, "Apenas números"),
  // yearFab: z
  //   .string()
  //   .min(1, "O ano é obrigatório")
  //   .regex(/^\d{4}$/, "Deve conter 4 números")
  //   .refine((year) => {
  //     const yearNum = parseInt(year);
  //     return yearNum >= 1900 && yearNum <= new Date().getFullYear() + 1;
  //   }, "Ano inválido"),
  // yearModel: z
  //   .string()
  //   .min(1, "O ano é obrigatório")
  //   .regex(/^\d{4}$/, "Deve conter 4 números")
  //   .refine((year) => {
  //     const yearNum = parseInt(year);
  //     return yearNum >= 1900 && yearNum <= new Date().getFullYear() + 1;
  //   }, "Ano inválido"),
  name: z.string().min(2, "Nome muito curto"),
  cpf: z.string().min(9, "CPF inválido"),
  birth: z.string().min(6, "A data de nascimento é obrigatória"),
  phone: z.string().min(8, "Telefone inválido"),
  email: z.email("Email inválido").optional(),
});

export type FinancingFormData = z.infer<typeof financingFormSchema>;
