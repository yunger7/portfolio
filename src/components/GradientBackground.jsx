import { ParallaxBanner } from "react-scroll-parallax";
import { Box, createStyles } from "@mantine/core";

import { gradientBackgroundAnimation } from "@/styles";

const backgroundColors = ["#5E81AC", "#81A1C1", "#88C0D0", "#8FBCBB"];

const useStyles = createStyles({
	parallax: {
		width: "100%",
		height: "100%",
		minHeight: "90vh",
	},
});

export function GradientBackground({ children }) {
	const { classes } = useStyles();

	return (
		<ParallaxBanner
			className={classes.parallax}
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
					children,
					speed: -15,
				},
			]}
		/>
	);
}
