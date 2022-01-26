import Image from "next/image";
import { useState } from "react";

import Carousel from "react-material-ui-carousel";
import {
	Box,
	Dialog,
	DialogContent,
	DialogActions,
	Typography,
	Button,
} from "@mui/material";
import { Code as CodeIcon, Link as WebsiteIcon } from "@mui/icons-material";

import { Blob } from "./Blob";
import { palette } from "../styles/theme";

export function ProjectPreview({
	name: projectName,
	logo,
	description,
	images,
	sourceCode,
	website,
	animationDelay,
}) {
	const [dialogOpen, setDialogOpen] = useState(false);

	return (
		<>
			<Blob
				clickable
				size="small"
				color={palette.nord4}
				delay={animationDelay}
				onClick={() => setDialogOpen(true)}
			>
				{logo}
			</Blob>
			<Dialog
				open={dialogOpen}
				aria-labelledby={projectName}
				aria-describedby={`${projectName}-description`}
				onClose={() => setDialogOpen(false)}
			>
				{images && (
					<Box sx={{ p: 2 }}>
						<Carousel>
							{images.map((src, index) => (
								<Box
									key={src}
									sx={{
										width: 1,
										height: 300,
										position: "relative",
										"& img": {
											borderRadius: 1,
										},
									}}
								>
									<Image
										src={src}
										alt={`${projectName} showcase ${index}`}
										layout="fill"
									/>
								</Box>
							))}
						</Carousel>
					</Box>
				)}
				<DialogContent sx={{ pt: 0 }}>
					<Typography gutterBottom variant="h3" id={projectName}>
						{projectName}
					</Typography>
					<Typography variant="body1" id={`${projectName}-description`}>
						{description}
					</Typography>
				</DialogContent>
				<DialogActions>
					{sourceCode && (
						<Button
							variant="outlined"
							color="primary"
							href={sourceCode}
							target="_blank"
							startIcon={<CodeIcon />}
						>
							Código fonte
						</Button>
					)}
					{website && (
						<Button
							variant="contained"
							color="primary"
							href={website}
							target="_blank"
							startIcon={<WebsiteIcon />}
						>
							Website
						</Button>
					)}
				</DialogActions>
			</Dialog>
		</>
	);
}
