import Image from "next/image";
import {
	Title,
	Text,
	Box,
	Badge,
	ActionIcon,
	Kbd,
	MediaQuery,
} from "@mantine/core";
import { useOs } from "@mantine/hooks";

import { WaveBackground, GlassCard } from "@components";

import { username, technologies } from "website.config";

export function Home({ bio }) {
	const os = useOs();

	return (
		<WaveBackground>
			<GlassCard>
				<Image src="/logo.png" alt="" width={64} height={64} />
				<Title mb="sm" order={1}>
					Olá, eu sou{" "}
					<Text
						inherit
						component="span"
						variant="gradient"
						gradient={{ from: "blue", to: "cyan" }}
					>
						{username}
					</Text>
					.
				</Title>
				{technologies.map(({ name, icon }, i) => {
					const Icon = (
						<ActionIcon
							variant="transparent"
							color="blue"
							size="xs"
							radius="xl"
							sx={{ cursor: "default" }}
						>
							{icon}
						</ActionIcon>
					);

					return (
						<Badge mb="xs" mx={4} leftSection={Icon} key={i}>
							{name}
						</Badge>
					);
				})}
				<Text>{bio}</Text>
				<MediaQuery smallerThan="xs" styles={{ display: "none" }}>
					<Box>
						{(os === "macos" || os === "windows" || os === "linux") && (
							<Text my="xs" size="sm">
								Dica: Você também pode navegar neste site usando apenas o
								teclado.
								<br />
								Aperte <Kbd>{os === "macos" ? "⌘" : "Ctrl"}</Kbd> + <Kbd>K</Kbd>{" "}
								e confira {";)"}
							</Text>
						)}
					</Box>
				</MediaQuery>
			</GlassCard>
		</WaveBackground>
	);
}
