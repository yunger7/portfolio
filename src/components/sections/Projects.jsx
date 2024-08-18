import { Box, Container, SimpleGrid, Title, Text } from "@mantine/core";

import { WaveDivider, GradientBackground, ProjectCard } from "@/components";
import { useCommandMenu, useLanguage } from "@/hooks";

import { projects } from "website.config";

export function Projects() {
	const { language } = useLanguage();
	const { projectsRef } = useCommandMenu();

	return (
		<Box
            id="projects"
			ref={projectsRef}
			sx={{
				position: "relative",
				width: "100%",
				height: "100%",
				minHeight: "90vh",
			}}
		>
			<WaveDivider invert variant="simple" position="top" />
			<GradientBackground>
				<Container
					size="xl"
					sx={{
						paddingTop: "calc(5vh + 90px)",
						paddingBottom: "25vh",
					}}
				>
					<Title
						order={2}
						align="center"
						sx={theme => ({
							color: theme.colors.gray["0"],
							margin: `${theme.spacing.xl * 2}px 0`,
						})}
					>
						{language == "en" ? "Tools are for " : "Ferramentas são para "}
						<Text
							inherit
							component="span"
							sx={theme => ({
								background: theme.fn.linearGradient(
									-45,
									theme.colors.cyan["6"],
									theme.colors.blue["6"]
								),
								paddingLeft: theme.spacing.xs,
								paddingRight: theme.spacing.xs,
								borderRadius: theme.radius.sm,
							})}
						>
							{language == "en" ? "building" : "construir"}
						</Text>
						.
					</Title>
					<SimpleGrid
						cols={4}
						breakpoints={[
							{ cols: 3, maxWidth: "lg" },
							{ cols: 2, maxWidth: "md" },
							{ cols: 1, maxWidth: "sm" },
						]}
						sx={{ width: "100%", height: "50%" }}
					>
						{projects.map((project, i) => (
							<ProjectCard project={project} key={i} />
						))}
					</SimpleGrid>
				</Container>
			</GradientBackground>
			<WaveDivider variant="simple" />
		</Box>
	);
}
