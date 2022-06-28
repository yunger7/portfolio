import Head from "next/head";
import { getCookie, setCookies } from "cookies-next";
import { ParallaxProvider } from "react-scroll-parallax";

import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

import { CommandMenuProvider } from "@/contexts";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App(props) {
	const { Component, pageProps } = props;
	const [colorScheme, setColorScheme] = useLocalStorage({
		key: "color-scheme",
		defaultValue: props.colorScheme || "light",
		getInitialValueInEffect: true,
	});

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
					<ModalsProvider>
						<NotificationsProvider autoClose={5000}>
							<CommandMenuProvider>
								<ParallaxProvider>
									<Component {...pageProps} />
								</ParallaxProvider>
							</CommandMenuProvider>
						</NotificationsProvider>
					</ModalsProvider>
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
}

App.getInitialProps = ({ ctx }) => ({
	colorScheme: getCookie("color-scheme", ctx) || "light",
});
