import { Center, createStyles, useMantineTheme } from "@mantine/core";

import { floatingAnimation } from "@styles";

const useStyles = createStyles({
	small: {
		width: 100,
		height: 100,
		borderRadius: 25,
	},

	medium: {
		width: 150,
		height: 150,
		borderRadius: 37.5,
	},

	large: {
		width: 200,
		height: 200,
		borderRadius: 50,
	},
});

const iconSize = {
	small: 32,
	medium: 64,
	large: 96,
};

export function Skill(props) {
	const {
		size = "medium",
		icon: Icon,
		animationDelay = 0,
		animationVariant = 1,
	} = props;

	const { classes } = useStyles();
	const theme = useMantineTheme();

	return (
		<Center
			className={classes[size]}
			sx={{
				position: "relative",
				background:
					theme.colorScheme === "light" ? theme.white : theme.colors.dark["6"],
				boxShadow: `8px 8px 28px ${
					theme.colorScheme === "light" ? "#bfbfbf" : "#141417"
				}, -8px -8px 28px ${
					theme.colorScheme === "light" ? "#ffffff" : "#212226"
				}`,
				animation: `${floatingAnimation[animationVariant]} ease 15s infinite`,
				animationDelay: `${animationDelay}ms`,
			}}
		>
			<Icon
				size={iconSize[size]}
				color={theme.colorScheme === "light" ? "#88C0D0" : "#5E81AC"}
			/>
		</Center>
	);
}
