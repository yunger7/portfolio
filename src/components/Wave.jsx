import { Box, createStyles, useMantineColorScheme } from "@mantine/core";
import { ParallaxBanner } from "react-scroll-parallax";

const useStyles = createStyles({
	parallax: {
		minHeight: "80vh",
	},

	fullSize: {
		width: "100%",
		height: "100%",
	},

	content: {
		position: "absolute",
		top: 0,
		left: 0,

		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
});

export function Wave({ children }) {
	const { colorScheme } = useMantineColorScheme();
	const { classes, cx } = useStyles();

	return (
		<ParallaxBanner
			className={cx(classes.parallax, classes.fullSize)}
			layers={[
				{
					image: colorScheme === "light" ? "/wave-light.svg" : "/wave-dark.svg",
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