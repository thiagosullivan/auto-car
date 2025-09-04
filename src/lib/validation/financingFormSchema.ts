import { z } from "zod";

export const financingFormSchema = z.object({
  carInfos: z.string().min(2, "A marca é obrigatória"),
  entryValue: z.string().min(1, "É obrigatório enviar um valor"),
  installmentPayment: z
    .string()
    .regex(/^\d+$/, "É obrigatório ao menos 1 parcela"),
  name: z.string().min(2, "Nome muito curto"),
  cpf: z.string().min(9, "CPF inválido"),
  birth: z.string().min(6, "A data de nascimento é obrigatória"),
  phone: z.string().min(8, "Telefone inválido"),
  email: z.email("Email inválido").optional(),
});

export type FinancingFormData = z.infer<typeof financingFormSchema>;
