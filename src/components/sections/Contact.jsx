import { z } from "zod";

import {
	Box,
	Container,
	Stack,
	Group,
	Title,
	Text,
	TextInput,
	Textarea,
	Button,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";

import { User as NameIcon, At as EmailIcon } from "tabler-icons-react";

const schema = z.object({
	name: z.string().min(2, { message: "Nome deve ter no mínimo 2 caracteres" }),
	email: z.string().email({ message: "Email inválido" }),
	message: z
		.string()
		.min(1, { message: "Este campo é obrigatório" })
		.max(2000, { message: "Mensagem deve conter no máximo 2000 caracteres" }),
});

export function Contact() {
	const form = useForm({
		schema: zodResolver(schema),
		initialValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	function handleSubmit(values) {
		console.log(values);
	}

	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
				height: "100%",
				minHeight: "60vh",
			}}
		>
			<Container size="sm" py="10vh" sx={{ width: "100%", height: "100%" }}>
				<Title order={2} align="center">
					Que tal construir algo?{" "}
					<Text
						inherit
						component="span"
						variant="gradient"
						gradient={{ from: "blue", to: "cyan" }}
					>
						Juntos
					</Text>
					.
				</Title>
				<Box my="xl">
					<form onSubmit={form.onSubmit(handleSubmit)}>
						<Stack>
							<TextInput
								required
								type="text"
								label="Nome"
								placeholder="Seu nome"
								icon={<NameIcon size={14} />}
								{...form.getInputProps("name")}
							/>

							<TextInput
								required
								type="email"
								label="Email"
								placeholder="nome@email.com"
								icon={<EmailIcon size={14} />}
								{...form.getInputProps("email")}
							/>

							<Textarea
								autosize
								required
								label="Mensagem"
								placeholder="Sua mensagem..."
								minRows={4}
								{...form.getInputProps("message")}
							/>

							<Group grow position="center" mt="lg">
								<Button type="submit" sx={{ maxWidth: 200 }}>
									Enviar
								</Button>
							</Group>
						</Stack>
					</form>
				</Box>
			</Container>
		</Box>
	);
}
