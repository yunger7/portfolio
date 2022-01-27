import { useState } from "react";
import { Stack, TextField, Button } from "@mui/material";

export function ContactForm() {
	const [name, setName] = useState({ value: "", error: false });
	const [email, setEmail] = useState({ value: "", error: false });
	const [message, setMessage] = useState({ value: "", error: false });

	function handleSubmit(event) {
		event.preventDefault();

		setName(name => ({ ...name, error: false }));
		setEmail(email => ({ ...email, error: false }));
		setMessage(message => ({ ...message, error: false }));

		if (!name.value) {
			setName(name => ({ ...name, error: "Esse campo é obrigatório" }));
			return;
		}

		if (!email.value) {
			setEmail(email => ({ ...email, error: "Esse campo é obrigatório" }));
			return;
		}

		const emailRegEx =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!emailRegEx.test(email.value)) {
			setEmail(email => ({ ...email, error: "Email inválido" }));
			return;
		}

		if (!message.value) {
			setMessage(message => ({
				...message,
				error: "Esse campo é obrigatório",
			}));
			return;
		}

		console.log("SUBMITTED");
	}

	return (
		<Stack
			noValidate
			component="form"
			autoComplete="off"
			alignItems="center"
			spacing={4}
			onSubmit={handleSubmit}
			sx={{
				maxWidth: theme => theme.breakpoints.values.md,
				width: "100%",
				mx: "auto",
				flex: 1,
			}}
		>
			<TextField
				required
				fullWidth
				id="name"
				label="Nome"
				variant="outlined"
				value={name.value}
				onChange={event =>
					setName(name => ({ ...name, value: event.target.value }))
				}
				error={!!name.error}
				helperText={name.error}
			/>
			<TextField
				required
				fullWidth
				type="email"
				id="email"
				label="Email"
				variant="outlined"
				value={email.value}
				onChange={event =>
					setEmail(email => ({ ...email, value: event.target.value }))
				}
				error={!!email.error}
				helperText={email.error}
			/>
			<TextField
				required
				multiline
				fullWidth
				id="message"
				label="Mensagem"
				variant="outlined"
				rows={4}
				value={message.value}
				onChange={event =>
					setMessage(message => ({ ...message, value: event.target.value }))
				}
				error={!!message.error}
				helperText={message.error}
			/>
			<Button
				fullWidth
				type="submit"
				variant="contained"
				color="primary"
				sx={{ maxWidth: 200 }}
			>
				Enviar
			</Button>
		</Stack>
	);
}
