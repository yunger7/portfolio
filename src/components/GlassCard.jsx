import Tilt from "react-parallax-tilt";
import { UnstyledButton, MediaQuery, useMantineTheme } from "@mantine/core";

const shadowValues = {
	xs: 0.05,
	sm: 0.15,
	md: 0.25,
	lg: 0.35,
	xl: 0.5,
};

export function GlassCard({
	children,
	onClick,
	shadow = "md",
	backgroundOpacity = 0.15,
	sx,
	...props
}) {
	return (
		<ConditionalTilt>
			<UnstyledButton
				{...props}
				p="xl"
				onClick={onClick}
				sx={theme => [
					{
						width: "100%",
						height: "100%",
						background: theme.fn.rgba(
							theme.colorScheme === "light"
								? theme.colors.gray["2"]
								: theme.colors.dark["9"],
							backgroundOpacity
						),
						boxShadow: `0 8px 32px 0 ${theme.fn.rgba(
							theme.colors.dark["6"],
							shadowValues[shadow]
						)}`,
						backdropFilter: "blur(5px)",
						borderRadius: theme.radius.md,
						border: `1px solid ${theme.fn.rgba(theme.white, 0.2)}`,
						maxWidth: theme.breakpoints.sm,
						textAlign: "center",
					},
					sx,
				]}
			>
				{children}
			</UnstyledButton>
		</ConditionalTilt>
	);
}

function ConditionalTilt({ children }) {
	const theme = useMantineTheme();

	return (
		<>
			<MediaQuery smallerThan="sm" styles={{ display: "none" }}>
				<Tilt
					glareEnable
					tiltMaxAngleX={10}
					tiltMaxAngleY={10}
					glareColor={theme.white}
					glareMaxOpacity={theme.colorScheme === "light" ? 0.6 : 0.4}
					glarePosition="all"
					glareBorderRadius={`${theme.radius.sm}px`}
				>
					{children}
				</Tilt>
			</MediaQuery>
			<MediaQuery largerThan="sm" styles={{ display: "none" }}>
				{children}
			</MediaQuery>
		</>
	);
}
