import { ParallaxBanner } from "react-scroll-parallax";
import { Box, createStyles } from "@mantine/core";

import { gradientBackgroundAnimation } from "@/styles";

const backgroundColors = ["#5E81AC", "#81A1C1", "#88C0D0", "#8FBCBB"];

const useStyles = createStyles(theme => ({
	parallax: {
		minHeight: "90vh",
	},

	fullSize: {
		width: "100%",
		height: "100%",
	},

	content: theme.fn.cover(),
}));

export function GradientBackground({ children }) {
	const { classes, cx } = useStyles();

	return (
		<ParallaxBanner
			className={cx(classes.parallax, classes.fullSize)}
			layers={[
				{
					children: (
						<Box
							sx={theme => ({
								width: "100%",
								height: "100%",
								position: "absolute",
								top: 0,
								left: 0,
								background: theme.fn.linearGradient(-45, ...backgroundColors),
								backgroundSize: "400% 400%",
								animation: `${gradientBackgroundAnimation} 15s ease infinite`,
							})}
						/>
					),
					speed: -50,
				},
				{
					children: (
						<Box className={cx(classes.content, classes.fullSize)}>
							{children}
						</Box>
					),
					speed: -15,
				},
			]}
		/>
	);
}
