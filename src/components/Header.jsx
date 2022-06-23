import Image from "next/image";

import {
	Header as MantineHeader,
	Container,
	Group,
	Burger,
	Menu,
	Text,
	ActionIcon,
	createStyles,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NextLink } from "@mantine/next";

import { useDiscordTag } from "@hooks";
import { SOCIAL } from "@utils";

import Logo from "public/logo.png";
import { social, username } from "website.config";

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

	menu: {
		[theme.fn.largerThan("xs")]: {
			display: "none",
		},
	},
}));

export function Header() {
	const [opened, handlers] = useDisclosure(false);
	const { copyDiscordTag } = useDiscordTag();
	const { classes } = useStyles();

	function renderSocialMedia(type = "ActionIcon") {
		const items = [];

		for (const [name, href] of Object.entries(social)) {
			let item;
			const Icon = SOCIAL[name].icon;

			switch (type) {
				case "ActionIcon":
					if (name === "discord") {
						item = (
							<ActionIcon
								size="lg"
								variant="hover"
								onClick={copyDiscordTag}
								aria-label={SOCIAL[name].name}
								key={name}
							>
								<Icon size={18} />
							</ActionIcon>
						);
					} else {
						item = (
							<ActionIcon
								component="a"
								target="_blank"
								size="lg"
								variant="hover"
								href={href}
								aria-label={SOCIAL[name].name}
								key={name}
							>
								<Icon size={18} />
							</ActionIcon>
						);
					}
					break;
				case "MenuItem":
					if (name === "discord") {
						item = (
							<Menu.Item
								icon={<Icon size={18} />}
								onClick={copyDiscordTag}
								key={name}
							>
								{SOCIAL[name].name}
							</Menu.Item>
						);
					} else {
						item = (
							<Menu.Item
								component="a"
								href={href}
								target="_blank"
								icon={<Icon size={18} />}
								key={name}
							>
								{SOCIAL[name].name}
							</Menu.Item>
						);
					}
					break;
			}

			if (item) items.push(item);
		}

		return items;
	}

	return (
		<MantineHeader className={classes.header} height={60}>
			<Container size="xl" className={classes.container}>
				<Group spacing="xs">
					<ActionIcon
						variant="transparent"
						component={NextLink}
						href="/"
						size="lg"
					>
						<Image priority src={Logo} alt="" width={32} height={32} />
					</ActionIcon>
					<Text
						component="span"
						size="lg"
						variant="gradient"
						weight={700}
						gradient={{ from: "blue", to: "cyan" }}
					>
						{username}
					</Text>
				</Group>

				<Group spacing={5} className={classes.links}>
					{renderSocialMedia("ActionIcon")}
				</Group>

				<Menu
					withArrow
					closeOnItemClick
					closeOnScroll
					className={classes.menu}
					menuButtonLabel="social links"
					opened={opened}
					onOpen={handlers.open}
					onClose={handlers.close}
					control={
						<Burger
							opened={opened}
							onClick={() => handlers.toggle()}
							size="sm"
							aria-label={opened ? "Close navigation" : "Open navigation"}
						/>
					}
				>
					{renderSocialMedia("MenuItem")}
				</Menu>
			</Container>
		</MantineHeader>
	);
}
