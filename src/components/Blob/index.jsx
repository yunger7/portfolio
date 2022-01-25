import { Box } from "@mui/material";
import { palette } from "../../styles/theme";

import { LargeSize } from "./LargeSize";
import { MediumSize } from "./MediumSize";
import { SmallSize } from "./SmallSize";

export function Blob({ children, size = "large", color = palette.nord9 }) {
	function renderBlob(size) {
		switch (size) {
			case "large":
				return <LargeSize color={color} />;
			case "medium":
				return <MediumSize color={color} />;
			case "small":
				return <SmallSize color={color} />;
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
