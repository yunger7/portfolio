import { z } from "zod";

export const contactSchema = z.object({
	name: z.string().min(2, { message: "Nome deve ter no mínimo 2 caracteres" }),
	email: z.string().email({ message: "Email inválido" }),
	message: z
		.string()
		.min(1, { message: "Este campo é obrigatório" })
		.max(2000, { message: "Mensagem deve conter no máximo 2000 caracteres" }),
});
