import { BackgroundImage } from "@mantine/core";

import { gradientBackgroundAnimation } from "@/styles";

const backgroundColors = ["#5E81AC", "#81A1C1", "#88C0D0", "#8FBCBB"];

export function GradientBackground({ children }) {
	return (
		<BackgroundImage
			radius={0}
			sx={theme => ({
				background: theme.fn.linearGradient(-45, ...backgroundColors),
				backgroundSize: "400% 400%",
				animation: `${gradientBackgroundAnimation} 15s ease infinite`,
			})}
		>
			{children}
		</BackgroundImage>
	);
}
