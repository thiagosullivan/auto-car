import { z } from "zod";

export const saleSchema = z.object({
  brand: z.string().min(2, "A marca é obrigatória"),
  model: z.string().min(2, "O modelo é obrigatório"),
  yearFab: z
    .string()
    .min(1, "O ano é obrigatório")
    .regex(/^\d{4}$/, "Deve conter 4 números")
    .refine((year) => {
      const yearNum = parseInt(year);
      return yearNum >= 1900 && yearNum <= new Date().getFullYear() + 1;
    }, "Ano inválido"),
  yearModel: z
    .string()
    .min(1, "O ano é obrigatório")
    .regex(/^\d{4}$/, "Deve conter 4 números")
    .refine((year) => {
      const yearNum = parseInt(year);
      return yearNum >= 1900 && yearNum <= new Date().getFullYear() + 1;
    }, "Ano inválido"),
  fuel: z.string(),
  name: z.string().min(2, "Nome muito curto"),
  cpf: z.string().min(9, "CPF inválido"),
  birth: z.string().min(6, "A data de nascimento é obrigatória"),
  phone: z.string().min(8, "Telefone inválido"),
  email: z.email("Email inválido").optional(),
  message: z.string().min(5, "Mensagem muito curta"),
});

export type SaleFormData = z.infer<typeof saleSchema>;
