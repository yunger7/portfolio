import { Typography, Container, Box } from "@mui/material";

export default function Home() {
	return (
		<Container maxWidth="lg" sx={{ pt: 5 }}>
			<Typography variant="h1" align="center">
				Hello, my{" "}
				<Box component="span" sx={{ color: "primary.main" }}>
					cool
				</Box>{" "}
				world!
			</Typography>
		</Container>
	);
}
