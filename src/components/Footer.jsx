import { Box, Container, Group, ActionIcon } from "@mantine/core";

import { Logo } from "@/components";
import { useDiscordTag } from "@/hooks";
import { SOCIAL } from "@/utils";

import { social } from "website.config";

export function Footer() {
	const { copyDiscordTag } = useDiscordTag();

	function renderSocialMediaIcons() {
		const items = [];

		for (const [name, href] of Object.entries(social)) {
			let item;
			const Icon = SOCIAL[name].icon;

			if (name === "discord") {
				item = (
					<ActionIcon
						size="lg"
						variant="transparent"
						onClick={copyDiscordTag}
						aria-label={SOCIAL[name].name}
                        mx={4}
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
						variant="transparent"
						href={href}
						aria-label={SOCIAL[name].name}
                        mx={4}
						key={name}
					>
						<Icon size={18} />
					</ActionIcon>
				);
			}

			if (item) items.push(item);
		}

		return items;
	}

	return (
		<Box
			sx={theme => ({
				marginTop: 120,
				borderTop: `1px solid ${
					theme.colorScheme === "dark"
						? theme.colors.dark[5]
						: theme.colors.gray[2]
				}`,
			})}
		>
			<Container
				sx={theme => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					paddingTop: theme.spacing.xl,
					paddingBottom: theme.spacing.xl,

					[theme.fn.smallerThan("xs")]: {
						flexDirection: "column",
					},
				})}
			>
				<Logo />

				<Group
					noWrap
					spacing={0}
					position="right"
					sx={theme => ({
						[theme.fn.smallerThan("xs")]: {
							marginTop: theme.spacing.md,
						},
					})}
				>
					{renderSocialMediaIcons()}
				</Group>
			</Container>
		</Box>
	);
}
