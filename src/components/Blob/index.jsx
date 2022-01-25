import { Box } from "@mui/material";

import { LargeSize } from "./LargeSize";
import { MediumSize } from "./MediumSize";
import { SmallSize } from "./SmallSize";

export function Blob({ children, size = "large" }) {
	function renderBlob(size) {
		switch (size) {
			case "large":
				return <LargeSize />;
			case "medium":
				return <MediumSize />;
			case "small":
				return <SmallSize />;
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
