import { Box } from "@mui/material";
import { palette } from "../../styles/theme";

import { LargeSize } from "./LargeSize";
import { MediumSize } from "./MediumSize";
import { SmallSize } from "./SmallSize";

export function Blob({
	children,
	delay = 0,
	size = "large",
	color = palette.nord9,
}) {
	function renderBlob(size) {
		switch (size) {
			case "large":
				return <LargeSize color={color} delay={delay} />;
			case "medium":
				return <MediumSize color={color} delay={delay} />;
			case "small":
				return <SmallSize color={color} delay={delay} />;
		}
	}

	return (
		<Box
			sx={{
				position: "relative",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: "#ffffff",
			}}
		>
			{renderBlob(size)}
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
			>
				{children}
			</Box>
		</Box>
	);
}
