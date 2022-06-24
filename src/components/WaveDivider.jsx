import { Box, createStyles } from "@mantine/core";

const useStyles = createStyles(theme => ({
	root: {
		position: "absolute",
		bottom: -5,
		left: 0,
		width: "100%",
		overflow: "hidden",
		lineHeight: 0,

		"& svg": {
			position: "relative",
			display: "block",
		},

		"& path": {
			fill:
				theme.colorScheme === "light" ? theme.white : theme.colors.dark["7"],
		},
	},

	simple: {
		width: "calc(100% + 1.3px)",
		height: 90,
	},

	layered: {},
}));

export function WaveDivider({ variant = "simple" }) {
	const { classes } = useStyles();

	switch (variant) {
		case "simple":
			return (
				<Box className={classes.root}>
					<svg
						className={classes.simple}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
					</svg>
				</Box>
			);
		case "layered":
			return null; // temp
	}
}
