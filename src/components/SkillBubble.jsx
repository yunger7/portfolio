import { Box, alpha } from "@mui/material";
import { palette } from "../styles/theme";
import { floating } from "../styles/Floating.module.css";

export function SkillBubble({ icon, delay }) {
	return (
		<Box
			className={floating}
			sx={{
				width: 100,
				height: 100,
				margin: "auto",
				borderRadius: "50%",
				fontSize: "2.5rem",
				bgcolor: palette.nord6,
				color: alpha(palette.nord1, 0.75),
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				...(delay && { animationDelay: `${delay}ms !important` }),
			}}
		>
			{icon}
		</Box>
	);
}