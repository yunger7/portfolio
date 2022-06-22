import Image from "next/image";
import { useEffect } from "react";
import {
	BrandGithub as GithubIcon,
	BrandReddit as RedditIcon,
	BrandSteam as SteamIcon,
	BrandDiscord as DiscordIcon,
	BrandTwitter as TwitterIcon,
} from "tabler-icons-react";

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
import { useDisclosure, useClipboard } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";
import { NextLink } from "@mantine/next";

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
	const { classes } = useStyles();
	const clipboard = useClipboard();

	useEffect(() => {
		if (clipboard.copied) {
			showNotification({
				message: "Discord tag copied to clipboard!",
				autoClose: 4000,
				color: "green",
			});
		}

		if (clipboard.error) {
			showNotification({
				message: "Wops, failed to copy Discord tag :(",
				autoClose: 4000,
				color: "red",
			});
		}
	}, [clipboard]);

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
					{social.github && (
						<ActionIcon
							component="a"
							target="_blank"
							size="lg"
							variant="hover"
							href={social.github}
							aria-label="GitHub"
						>
							<GithubIcon size={18} />
						</ActionIcon>
					)}
					{social.reddit && (
						<ActionIcon
							component="a"
							target="_blank"
							size="lg"
							variant="hover"
							href={social.reddit}
							aria-label="Reddit"
						>
							<RedditIcon size={18} />
						</ActionIcon>
					)}
					{social.steam && (
						<ActionIcon
							component="a"
							target="_blank"
							size="lg"
							variant="hover"
							href={social.steam}
							aria-label="Steam"
						>
							<SteamIcon size={18} />
						</ActionIcon>
					)}
					{social.discord && (
						<ActionIcon
							size="lg"
							variant="hover"
							disabled={!Boolean(social.discord)}
							onClick={() => clipboard.copy(social.discord)}
							aria-label="Discord"
						>
							<DiscordIcon size={18} />
						</ActionIcon>
					)}
					{social.twitter && (
						<ActionIcon
							component="a"
							target="_blank"
							size="lg"
							variant="hover"
							href={social.twitter}
							aria-label="Twitter"
						>
							<TwitterIcon size={18} />
						</ActionIcon>
					)}
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
					{social.github && (
						<Menu.Item
							component="a"
							href={social.github}
							target="_blank"
							icon={<GithubIcon size={18} />}
						>
							GitHub
						</Menu.Item>
					)}
					{social.reddit && (
						<Menu.Item
							component="a"
							href={social.reddit}
							target="_blank"
							icon={<RedditIcon size={18} />}
						>
							Reddit
						</Menu.Item>
					)}
					{social.steam && (
						<Menu.Item
							component="a"
							href={social.steam}
							target="_blank"
							icon={<SteamIcon size={18} />}
						>
							Steam
						</Menu.Item>
					)}
					{social.discord && (
						<Menu.Item
							icon={<DiscordIcon size={18} />}
							onClick={() => clipboard.copy(social.discord)}
						>
							Discord
						</Menu.Item>
					)}
					{social.twitter && (
						<Menu.Item
							component="a"
							href={social.twitter}
							target="_blank"
							icon={<TwitterIcon size={18} />}
						>
							Twitter
						</Menu.Item>
					)}
				</Menu>
			</Container>
		</MantineHeader>
	);
}
