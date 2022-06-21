import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Luís Galete | Portfolio</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>

			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					colorScheme: "light",
				}}
			>
				<Component {...pageProps} />
			</MantineProvider>
		</>
	);
}
