import Head from "next/head";
import { getCookie, setCookies } from "cookies-next";
import { ParallaxProvider } from "react-scroll-parallax";

import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

import { CommandMenuProvider, LanguageProvider } from "@/contexts";

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
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<link rel="icon" href="/favicon.ico" />
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
                        globalStyles: (theme) => ({
                            '::-webkit-scrollbar': {
                                width: theme.spacing.xs,
                            },
                            '::-webkit-scrollbar-track': {
                                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
                            },
                            '::-webkit-scrollbar-thumb': {
                                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[5],
                                borderRadius: theme.radius.xl,
                            },
                            '::-webkit-scrollbar-thumb:hover': {
                                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[6],
                            },
                        }),
					}}
				>
					<ModalsProvider>
						<NotificationsProvider autoClose={5000}>
							<LanguageProvider>
								<CommandMenuProvider>
									<ParallaxProvider>
										<Component {...pageProps} />
									</ParallaxProvider>
								</CommandMenuProvider>
							</LanguageProvider>
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
