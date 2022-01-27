import { useState } from "react";
import {
	Stack,
	TextField,
	Button,
	Snackbar,
	Alert,
	Slide,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

export function ContactForm() {
	const [name, setName] = useState({ value: "", error: false });
	const [email, setEmail] = useState({ value: "", error: false });
	const [message, setMessage] = useState({ value: "", error: false });
	const [loading, setLoading] = useState(false);
	const [snackbar, setSnackbar] = useState({
		open: false,
		message: undefined,
		severity: undefined,
	});

	async function handleSubmit(event) {
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

		setLoading(true);

		try {
			console.log("[INFO]: Sending message");

			const responseRaw = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: name.value,
					email: email.value,
					message: message.value,
				}),
			});

			const data = await responseRaw.json();

			if (!data.success) {
				throw new Error("Failed to send message");
			}

			setSnackbar({
				open: true,
				message: "Mensagem enviada!",
				severity: "success",
			});
			setName({ value: "", error: false });
			setEmail({ value: "", error: false });
			setMessage({ value: "", error: false });
		} catch (error) {
			setSnackbar({
				open: true,
				message: "Houve um problema ao enviar a mensagem!",
				severity: "error",
			});
		}

		setLoading(false);
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
			<LoadingButton
				fullWidth
				type="submit"
				variant="contained"
				color="primary"
				loading={loading}
				sx={{ maxWidth: 200 }}
			>
				Enviar
			</LoadingButton>
			<Snackbar
				open={snackbar.open}
				autoHideDuration={3000}
				onClose={() => setSnackbar(snackbar => ({ ...snackbar, open: false }))}
				TransitionComponent={Slide}
			>
				<Alert severity={snackbar.severity} variant="filled">
					{snackbar.message}
				</Alert>
			</Snackbar>
		</Stack>
	);
}
