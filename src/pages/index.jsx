import Head from "next/head";
import Image from "next/image";
import {
	Typography,
	Container,
	Box,
	Grid,
	Link as MuiLink,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import {
	ChevronRight as ArrowRightIcon,
	Favorite as HeartIcon,
} from "@mui/icons-material";
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
import Snowfall from "react-snowfall";

import {
	WaveDivider,
	Blob,
	SkillBubble,
	ProjectPreview,
	ContactForm,
} from "../components";
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
				<Snowfall color={palette.nord6} />
				<Image
					priority
					src={BackgroundImage}
					alt="Winter background"
					layout="fill"
					objectFit="cover"
					quality={100}
					placeholder="blur"
				/>
				<Box
					sx={{
						position: "absolute",
						top: "35%",
						left: 0,
						width: 1,
						height: 1,
						pl: { xs: 0, md: "10%" },
						textAlign: { xs: "center", md: "left" },
						color: palette.nord6,
					}}
				>
					<Typography
						variant="h1"
						sx={{
							fontSize: { xs: "3rem !important", sm: "4rem !important" },
							lineHeight: 1.1,
						}}
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
			<Box
				sx={{
					pb: 10,
					width: "100vw",
					maxWidth: "100%",
					height: "100vh",
					maxHeight: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Container component="section" maxWidth="xl">
					<Grid container direction={{ xs: "column", md: "row" }}>
						<Grid
							item
							container
							direction={{ xs: "row", md: "column" }}
							justifyContent="space-evenly"
							alignItems="center"
							xs={12}
							md={2}
							lg={3}
						>
							<Grid item sm={3} alignSelf="flex-end">
								<SkillBubble icon={<JavascriptIcon />} delay={1000} />
							</Grid>
							<Grid item sm={3} alignSelf="center">
								<SkillBubble icon={<ReactIcon />} delay={500} />
							</Grid>
							<Grid item sm={3} alignSelf="center">
								<SkillBubble icon={<HtmlIcon />} delay={2000} />
							</Grid>
							<Grid item sm={3} alignSelf="flex-end">
								<SkillBubble icon={<GithubIcon />} delay={75} />
							</Grid>
						</Grid>
						<Grid item xs={12} md={8} lg={6}>
							<AboutMe>
								Olá! Meu nome é Luís Galete. <br /> Guiado pela criatividade e
								motivado por ideias, encontrei na programação uma paixão, a
								ferramenta perfeita para dar vida a ideias, que até então
								encontravam-se aprisionadas em uma folha de papel.
							</AboutMe>
						</Grid>
						<Grid
							item
							container
							direction={{ xs: "row", md: "column" }}
							justifyContent="space-evenly"
							alignItems="center"
							xs={12}
							md={2}
							lg={3}
						>
							<Grid item sm={3} alignSelf="flex-start">
								<SkillBubble icon={<NodejsIcon />} delay={250} />
							</Grid>
							<Grid item sm={3} alignSelf="center">
								<SkillBubble icon={<CssIcon />} delay={2000} />
							</Grid>
							<Grid item sm={3} alignSelf="center">
								<SkillBubble icon={<NextIcon />} delay={750} />
							</Grid>
							<Grid item sm={3} alignSelf="flex-start">
								<SkillBubble icon={<FirebaseIcon />} delay={25} />
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box
				sx={{
					position: "relative",
					pt: "200px", // removes overlap from WaveDivider
					width: "100vw",
					maxWidth: "100%",
					height: "100vh",
					maxHeight: "100%",
					bgcolor: palette.nord6,
				}}
			>
				<WaveDivider
					invert
					height={150}
					width={125}
					color={theme.palette.background.default}
				/>
				<Container
					component="section"
					maxWidth="xl"
					sx={{
						pb: 10,
						width: 1,
						height: 1,
						display: "flex",
						flexDirection: "column",
						alignItems: "stretch",
						justifyContent: "center",
						textAlign: { xs: "center", sm: "unset" },
					}}
				>
					<Typography variant="h2">Aqui estão alguns exemplos</Typography>
					<Grid container sx={{ my: 4 }}>
						<Grid item xs={6} sm={3}>
							<ProjectPreview
								name="yunger.dev"
								description="yunger.dev é website criado para compartilhar conhecimento, ideias e experiencias. Além de um local para hospedar projetos e criar networking."
								animationDelay={3}
								images={[
									"/projects/yunger-dev/home.jpg",
									"/projects/yunger-dev/blog.jpg",
									"/projects/yunger-dev/footer.jpg",
									"/projects/yunger-dev/contact.jpg",
								]}
								sourceCode="https://github.com/yunger7/yunger.dev"
								website="https://yunger.dev/"
								logo={
									<Image
										unselectable="on"
										src="/projects/yunger-dev/logo.png"
										alt="yunger.dev logo"
										width={75}
										height={75}
									/>
								}
							/>
						</Grid>
						<Grid item xs={6} sm={3}>
							<ProjectPreview
								name="Progretion"
								description="Progretion é um Software as a Service desenvolvido para medir o progresso de atividades no Notion, gerando gráficos que podem ser adicionados diretamente ao workspace. O projeto foi descontinuado devido a complicações na API oficial da plataforma."
								animationDelay={0.2}
								images={[
									"/projects/progretion/chart-creator.jpg",
									"/projects/progretion/embed.jpg",
									"/projects/progretion/dashboard.jpg",
									"/projects/progretion/history.jpg",
									"/projects/progretion/settings.jpg",
									"/projects/progretion/setup.jpg",
								]}
								website="https://progretion.com/"
								logo={
									<Image
										unselectable="on"
										src="/projects/progretion/logo.png"
										alt="progretion logo"
										width={75}
										height={75}
									/>
								}
							/>
						</Grid>
						<Grid item xs={6} sm={3}>
							<ProjectPreview
								name="Axew"
								description="Axew é um template HTML desenvolvido para profissionais que buscam divulgar seu trabalho. É o local ideal para expor habilidades e projetos realizados anteriormente."
								animationDelay={1.5}
								images={[
									"/projects/axew/cover.jpg",
									"/projects/axew/home.jpg",
									"/projects/axew/about.jpg",
									"/projects/axew/services.jpg",
									"/projects/axew/projects.jpg",
									"/projects/axew/contact.jpg",
								]}
								website="https://templates.yunger.dev/axew"
								logo={
									<Image
										src="/projects/axew/logo.png"
										alt="Axew logo"
										width={75}
										height={75}
									/>
								}
							/>
						</Grid>
						<Grid item xs={6} sm={3}>
							<ProjectPreview
								name="Ecoleta"
								description="Ecoleta é um projeto realizado durante a Next Level Week, um evento realizado pela Rocketseat com fins educacionais. A aplicação tem como objetivo permitir empresas a cadastrarem seus pontos de coleta, facilitando usuários a encontrar um local de descarte adequado em sua cidade"
								animationDelay={2.5}
								images={[
									"/projects/ecoleta/home.jpg",
									"/projects/ecoleta/pontos.jpg",
									"/projects/ecoleta/search.jpg",
									"/projects/ecoleta/cadastro.jpg",
								]}
								sourceCode="https://github.com/yunger7/podcastr"
								logo={
									<Image
										src="/projects/ecoleta/logo.png"
										alt="Ecoleta logo"
										width={142.25}
										height={34.5}
									/>
								}
							/>
						</Grid>
					</Grid>
					<Typography
						variant="h6"
						sx={{ textAlign: { xs: "center", sm: "right" } }}
					>
						Veja o restante no{" "}
						<MuiLink
							href="https://github.com/yunger7"
							target="_blank"
							sx={{
								display: "inline-flex",
								alignItems: "center",
							}}
						>
							GitHub
							<ArrowRightIcon />
						</MuiLink>
					</Typography>
				</Container>
			</Box>
			<Box
				sx={{
					position: "relative",
					pt: "235px", // removes overlap from WaveDivider
					width: "100vw",
					maxWidth: "100%",
					height: "100vh",
					maxHeight: "100%",
				}}
			>
				<WaveDivider invert height={135} width={115} color={palette.nord6} />
				<Container
					component="section"
					maxWidth="xl"
					sx={{
						width: 1,
						height: 1,
						pb: 4,
						display: "flex",
						flexDirection: "column",
						alignItems: "stretch",
					}}
				>
					<Typography variant="h2" align="center" sx={{ mb: 8 }}>
						Que tal dar vida a mais uma ideia?{" "}
						<Box component="span" sx={{ color: "primary.main" }}>
							Juntos
						</Box>
						.
					</Typography>
					<ContactForm />
					<Box>
						<Typography variant="body2" align="center">
							&copy; Luís Galete - {new Date().getFullYear()}
						</Typography>
						<Typography
							variant="body2"
							align="center"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							Made with{" "}
							<HeartIcon
								color="primary"
								sx={{ fontSize: "inherit", mx: 0.5 }}
							/>{" "}
							and Javascript
						</Typography>
					</Box>
				</Container>
			</Box>
		</Box>
	);
}

function AboutMe({ children }) {
	const smallScreen = useMediaQuery("(max-width: 450px)");

	if (smallScreen) {
		return (
			<Typography
				variant="body1"
				align="center"
				sx={{ color: "text.primary", my: 6 }}
			>
				{children}
			</Typography>
		);
	}

	return (
		<Blob>
			<Typography variant="body1" align="center">
				{children}
			</Typography>
		</Blob>
	);
}
