import Head from "next/head";
import { useState } from "react";
import { getCookie, setCookies } from "cookies-next";

import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";

export default function App(props) {
	const { Component, pageProps } = props;
	const [colorScheme, setColorScheme] = useState(props.colorScheme);

	const toggleColorScheme = value => {
		const nextColorScheme =
			value || (colorScheme === "dark" ? "light" : "dark");
		setColorScheme(nextColorScheme);

		setCookies("color-scheme", nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
	};

	useHotkeys([["mod+j", () => toggleColorScheme()]]);

	return (
		<>
			<Head>
				<title>Luís Galete | Portfolio</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>

			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{
						colorScheme,
					}}
				>
					<Component {...pageProps} />
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
}

App.getInitialProps = ({ ctx }) => ({
	colorScheme: getCookie("color-scheme", ctx) || "light",
});
