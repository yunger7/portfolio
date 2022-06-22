import Tilt from "react-parallax-tilt";
import { Box, useMantineTheme } from "@mantine/core";

export function GlassCard({ children }) {
	const theme = useMantineTheme();

	return (
		<Tilt
			gyroscope
			glareEnable
			tiltMaxAngleX={10}
			tiltMaxAngleY={10}
			glareColor={theme.white}
			glareMaxOpacity={theme.colorScheme === "light" ? 0.6 : 0.4}
			glarePosition="all"
			glareBorderRadius={`${theme.radius.sm}px`}
		>
			<Box
				p="xl"
				sx={theme => ({
					background: theme.fn.rgba(
						theme.colorScheme === "light"
							? theme.colors.gray["2"]
							: theme.colors.dark["9"],
						0.15
					),
					boxShadow: `0 8px 32px 0 ${theme.fn.rgba(
						theme.colors.dark["6"],
						0.5
					)}`,
					backdropFilter: "blur(5px)",
					borderRadius: theme.radius.md,
					border: `1px solid ${theme.fn.rgba(theme.white, 0.2)}`,
					maxWidth: theme.breakpoints.sm,
					textAlign: "center",
				})}
			>
				{children}
			</Box>
		</Tilt>
	);
}
