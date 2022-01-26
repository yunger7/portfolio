import { useState } from "react";

import { Box, alpha } from "@mui/material";
import { palette } from "../../styles/theme";

import { LargeSize } from "./LargeSize";
import { MediumSize } from "./MediumSize";
import { SmallSize } from "./SmallSize";

export function Blob({
	clickable,
	delay = 0,
	size = "large",
	color = palette.nord9,
	children,
	...props
}) {
	const [hover, setHover] = useState(false);

	function renderBlob(size) {
		switch (size) {
			case "large":
				return <LargeSize color={color} delay={delay} setHover={setHover} />;
			case "medium":
				return <MediumSize color={color} delay={delay} setHover={setHover} />;
			case "small":
				return <SmallSize color={color} delay={delay} setHover={setHover} />;
		}
	}

	function getFillColor() {
		if (!clickable) {
			return color;
		}

		return hover ? color : alpha(color, 0.65);
	}

	return (
		<Box
			{...props}
			sx={{
				position: "relative",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: "#ffffff",
				"& svg": {
					width: 1,
					height: 1,
				},
				"& path": {
					transition: theme =>
						theme.transitions.create("fill", {
							duration: theme.transitions.duration.shorter,
						}),
					fill: getFillColor(),
					...(clickable && { cursor: "pointer" }),
				},
			}}
		>
			{renderBlob(size)}
			<Box
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					...(clickable && { cursor: "pointer" }),
				}}
			>
				{children}
			</Box>
		</Box>
	);
}
