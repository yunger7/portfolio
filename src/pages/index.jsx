import Head from "next/head";
import Image from "next/image";
import { Typography, Container, Box, Grid, useTheme } from "@mui/material";
import {
	SiJavascript as JavascriptIcon,
	SiHtml5 as HtmlIcon,
	SiCss3 as CssIcon,
	SiFirebase as FirebaseIcon,
	SiNodedotjs as NodejsIcon,
	SiGithub as GithubIcon,
	SiNextdotjs as NextIcon,
	SiReact as ReactIcon,
} from "react-icons/si";

import { WaveDivider, Blob, SkillBubble } from "../components";
import { palette } from "../styles/theme";

import BackgroundImage from "../../public/background.jpg";

export default function Home() {
	const theme = useTheme();

	return (
		<Box>
			<Head>
				<title>Luís Galete | Home</title>
			</Head>
			<Box
				sx={{
					position: "relative",
					width: "100vw",
					maxWidth: "100%",
					height: "100vh",
					maxHeight: "100%",
					overflow: "hidden",
					zIndex: -1,

					"& img": {
						zIndex: -1,
						userSelect: "none",
					},

					"& > span": {
						backgroundColor: "rgba(0, 0, 0, 0.1) !important",
					},
				}}
			>
				<Image
					priority
					src={BackgroundImage}
					layout="fill"
					objectFit="cover"
					quality={100}
					placeholder="blur"
				/>
				<Box
					sx={{
						position: "absolute",
						left: "10%",
						top: "35%",
						color: palette.nord6,
					}}
				>
					<Typography
						variant="h1"
						sx={{ fontSize: "4rem !important", lineHeight: 1.1 }}
					>
						Luís Galete
					</Typography>
					<Typography component="p" variant="h2" sx={{ pl: 0.5 }}>
						Is building{" "}
						<Box component="span" sx={{ color: "primary.main" }}>
							cool
						</Box>{" "}
						things
					</Typography>
				</Box>
				<WaveDivider
					invert
					position="bottom"
					height={150}
					width={125}
					color={theme.palette.background.default}
				/>
			</Box>
			<Container component="main" maxWidth="xl" sx={{ pb: 10 }}>
				<Box
					sx={{
						width: "100vw",
						maxWidth: "100%",
						height: "100vh",
						maxHeight: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Grid container>
						<Grid
							item
							container
							direction="column"
							justifyContent="space-evenly"
							alignItems="center"
							xs={3}
						>
							<Grid item xs={3} alignSelf="flex-end">
								<SkillBubble icon={<JavascriptIcon />} delay={1000} />
							</Grid>
							<Grid item xs={3} alignSelf="center">
								<SkillBubble icon={<ReactIcon />} delay={500} />
							</Grid>
							<Grid item xs={3} alignSelf="center">
								<SkillBubble icon={<HtmlIcon />} delay={2000} />
							</Grid>
							<Grid item xs={3} alignSelf="flex-end">
								<SkillBubble icon={<GithubIcon />} delay={75} />
							</Grid>
						</Grid>
						<Grid item xs={6}>
							<Blob>
								<Typography variant="body1" align="center">
									Olá! Meu nome é Luís Galete. <br /> Guiado pela criatividade e
									motivado por ideias, encontrei na programação uma paixão, a
									ferramenta perfeita para dar vida a ideias, que ainda se
									encontram aprisionadas em uma folha de papel.
								</Typography>
							</Blob>
						</Grid>
						<Grid
							item
							container
							direction="column"
							justifyContent="space-evenly"
							alignItems="center"
							xs={3}
						>
							<Grid item xs={3} alignSelf="flex-start">
								<SkillBubble icon={<NodejsIcon />} delay={250} />
							</Grid>
							<Grid item xs={3} alignSelf="center">
								<SkillBubble icon={<CssIcon />} delay={2000} />
							</Grid>
							<Grid item xs={3} alignSelf="center">
								<SkillBubble icon={<NextIcon />} delay={750} />
							</Grid>
							<Grid item xs={3} alignSelf="flex-start">
								<SkillBubble icon={<FirebaseIcon />} delay={25} />
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
}
