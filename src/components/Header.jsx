import {
	Header as MantineHeader,
	Container,
	Group,
	ActionIcon,
	createStyles,
	useMantineColorScheme,
} from "@mantine/core";

import {
	Command as CommandIcon,
	Sun as LightThemeIcon,
	Moon as DarkThemeIcon,
} from "tabler-icons-react";

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

	links: {
		[theme.fn.smallerThan("xs")]: {
			display: "none",
		},
	},
}));

export function Header() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const { classes } = useStyles();

	return (
		<MantineHeader className={classes.header} height={60}>
			<Container size="xl" className={classes.container}>
				<Logo />
				<Group spacing={5} className={classes.links}>
					<ActionIcon
						size="lg"
						aria-label="Trocar tema"
						onClick={() => toggleColorScheme()}
					>
						{colorScheme === "light" ? (
							<DarkThemeIcon size={20} />
						) : (
							<LightThemeIcon size={20} />
						)}
					</ActionIcon>
					<ActionIcon size="lg" aria-label="Comandos">
						<CommandIcon size={20} />
					</ActionIcon>
				</Group>
			</Container>
		</MantineHeader>
	);
}
