import Image from "next/image";
import { Center, Box } from "@mantine/core";

import { GlassCard } from "@/components";

export function ProjectCard({ project }) {
	const { title, logo } = project;

	function renderLogo() {
		switch (logo.type) {
			case "image":
				return <Image src={logo.image} alt={title} width={64} height={64} />;
			case "icon":
				return (
					<Box
						sx={theme => ({
							"& svg": {
								width: 64,
								height: 64,
								color:
									theme.colorScheme === "light"
										? theme.colors.gray["0"]
										: theme.colors.gray["2"],
							},
						})}
					>
						{logo.icon}
					</Box>
				);
		}
	}

	return (
		<GlassCard shadow="sm" backgroundOpacity={0.1}>
			<Center sx={{ width: "100%", height: "100%" }}>{renderLogo()}</Center>
		</GlassCard>
	);
}
