import {
	Header as MantineHeader,
	Container,
	Group,
	ActionIcon,
	Tooltip,
	Text,
	createStyles,
	useMantineColorScheme,
} from "@mantine/core";
import { useSpotlight } from "@mantine/spotlight";

import {
	Command as CommandIcon,
	Sun as LightThemeIcon,
	Moon as DarkThemeIcon,
	LanguageHiragana as LanguageIcon,
} from "tabler-icons-react";

import { useLanguage } from "@/hooks";
import { Logo } from "@/components";

const useStyles = createStyles(theme => ({
	header: {
		width: "100%",
		position: "sticky",
		top: 0,
		left: 0,
		backfaceVisibility: "hidden",
		backdropFilter: "saturate(180%) blur(5px)",
		backgroundColor: theme.fn.rgba(
			theme.colorScheme === "light" ? theme.white : theme.black,
			theme.colorScheme === "light" ? 0.8 : 0.5
		),
	},

	container: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		height: "100%",
	},
}));

export function Header() {
	const spotlight = useSpotlight();
	const { language, toggleLanguage } = useLanguage();
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const { classes } = useStyles();

	return (
		<MantineHeader className={classes.header} height={60}>
			<Container size="xl" className={classes.container}>
				<Logo />
				<Group spacing={5}>
					<Tooltip
						label={language == "en" ? "Change language" : "Mudar idioma"}
						position="bottom"
					>
						<ActionIcon
							size="lg"
							aria-label={language == "en" ? "Change language" : "Mudar idioma"}
							onClick={toggleLanguage}
						>
							<LanguageIcon size={20} />
						</ActionIcon>
					</Tooltip>
					<Tooltip
						label={
							language == "en"
								? colorScheme === "dark"
									? "Light mode"
									: "Dark mode"
								: colorScheme === "dark"
								? "Modo claro"
								: "Modo escuro"
						}
						position="bottom"
					>
						<ActionIcon
							size="lg"
							aria-label={
								language == "en"
									? colorScheme === "dark"
										? "Light mode"
										: "Dark mode"
									: colorScheme === "dark"
									? "Modo claro"
									: "Modo escuro"
							}
							onClick={() => toggleColorScheme()}
						>
							{colorScheme === "light" ? (
								<DarkThemeIcon size={20} />
							) : (
								<LightThemeIcon size={20} />
							)}
						</ActionIcon>
					</Tooltip>
					<Tooltip
						label={language == "en" ? "Commands" : "Comandos"}
						position="bottom"
					>
						<ActionIcon
							size="lg"
							aria-label={language == "en" ? "Commands" : "Comandos"}
							onClick={() => spotlight.toggleSpotlight()}
						>
							<CommandIcon size={20} />
						</ActionIcon>
					</Tooltip>
				</Group>
			</Container>
		</MantineHeader>
	);
}
