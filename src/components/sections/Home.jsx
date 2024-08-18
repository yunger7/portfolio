import { Title, Text, Box, Kbd, MediaQuery } from "@mantine/core";
import { useOs } from "@mantine/hooks";

import {
	WaveBackground,
	GlassCard,
	WaveDivider,
	IconBadge,
	SmoothImage,
} from "@/components";
import { useCommandMenu, useLanguage } from "@/hooks";

import { username, technologies } from "website.config";

export function Home({ bio }) {
	const os = useOs();
	const { language } = useLanguage();
	const { homeRef } = useCommandMenu();

	return (
		<Box
            id="home"
			ref={homeRef}
			sx={{
				position: "relative",
				width: "100%",
				height: "100%",
				minHeight: "90vh",
			}}
		>
			<WaveBackground>
				<GlassCard shadow="xl" sx={{ cursor: "default" }}>
					<SmoothImage
						src="/logo.png"
						alt=""
						width={64}
						height={64}
						quality={100}
					/>
					<Title mb="sm" order={1}>
						{language == "en" ? "Hey, I'm " : "Olá, eu sou "}
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
					{technologies.map(({ name, icon }, i) => (
						<IconBadge
							mb="xs"
							mx={4}
							icon={icon}
							ActionIconProps={{ color: "blue" }}
							key={i}
						>
							{name}
						</IconBadge>
					))}
					<Text>{bio}</Text>
					<MediaQuery smallerThan="xs" styles={{ display: "none" }}>
						<Box>
							{(os === "macos" || os === "windows" || os === "linux") && (
								<>
									{language == "en" ? (
										<Text my="xs" size="sm">
											Tip: You can also navigate through this website using only
											your keyboard.
											<br />
											Press <Kbd>{os === "macos" ? "⌘" : "Ctrl"}</Kbd> +{" "}
											<Kbd>K</Kbd> and check it out {";)"}
										</Text>
									) : (
										<Text my="xs" size="sm">
											Dica: Você também pode navegar neste site usando apenas o
											teclado.
											<br />
											Aperte <Kbd>{os === "macos" ? "⌘" : "Ctrl"}</Kbd> +{" "}
											<Kbd>K</Kbd> e confira {";)"}
										</Text>
									)}
								</>
							)}
						</Box>
					</MediaQuery>
				</GlassCard>
			</WaveBackground>
			<WaveDivider variant="simple" />
		</Box>
	);
}
