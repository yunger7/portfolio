import {
	Container,
	Center,
	Text,
	Title,
	Box,
	Grid,
	Card,
	createStyles,
	useMantineTheme,
} from "@mantine/core";
import {
	Code as CodeIcon,
	BrandReactNative as ReactIcon,
	BrandHtml5 as HtmlIcon,
	BrandCss3 as CssIcon,
	BrandJavascript as JavascriptIcon,
	BrandNextjs as NextjsIcon,
	BrandVercel as VercelIcon,
	BrandFirebase as FirebaseIcon,
	BrandVisualStudio as VscodeIcon,
} from "tabler-icons-react";

import { Skill } from "@/components";

const useStyles = createStyles(theme => ({
	react: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",

		[theme.fn.smallerThan("md")]: {
			justifyContent: "flex-start",
			alignItems: "flex-end",
		},

		[theme.fn.smallerThan("xs")]: {
			alignItems: "flex-start",
			justifyContent: "flex-end",
		},
	},

	javascript: {
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-start",

		[theme.fn.smallerThan("xs")]: {
			justifyContent: "flex-start",
		},
	},

	html: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",

		[theme.fn.smallerThan("md")]: {
			justifyContent: "center",
		},

		[theme.fn.smallerThan("xs")]: {
			alignItems: "flex-start",
			justifyContent: "flex-end",
		},
	},

	css: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",

		[theme.fn.smallerThan("md")]: {
			justifyContent: "flex-end",
			alignItems: "flex-end",
		},

		[theme.fn.smallerThan("xs")]: {
			alignItems: "flex-start",
			justifyContent: "flex-start",
		},
	},

	firebase: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",

		[theme.fn.smallerThan("md")]: {
			justifyContent: "center",
		},

		[theme.fn.smallerThan("xs")]: {
			alignItems: "flex-end",
			justifyContent: "flex-start",
		},
	},

	vercel: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",

		[theme.fn.smallerThan("md")]: {
			justifyContent: "flex-start",
			alignItems: "flex-start",
		},

		[theme.fn.smallerThan("xs")]: {
			alignItems: "flex-end",
			justifyContent: "flex-end",
		},
	},

	nextjs: {
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-end",

		[theme.fn.smallerThan("xs")]: {
			justifyContent: "flex-end",
		},
	},

	vscode: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",

		[theme.fn.smallerThan("md")]: {
			alignItems: "flex-start",
		},

		[theme.fn.smallerThan("xs")]: {
			alignItems: "flex-end",
			justifyContent: "flex-start",
		},
	},
}));

export function About({ content }) {
	const theme = useMantineTheme();
	const { classes } = useStyles();

	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
				height: "100%",
				minHeight: "90vh",
			}}
		>
			<Container size="xl" py="10vh" sx={{ width: "100%", height: "100%" }}>
				<Grid justify="space-between" sx={{ width: "100%", height: "100%" }}>
					<Grid.Col className={classes.react} sm={3} md={4}>
						<Skill size="medium" icon={ReactIcon} animationDelay={1000} />
					</Grid.Col>
					<Grid.Col className={classes.javascript} sm={4} md={4}>
						<Skill
							size="large"
							icon={JavascriptIcon}
							animationVariant="2"
							sx={{
								[theme.fn.smallerThan("sm")]: { marginLeft: "40%" },
								[theme.fn.smallerThan("xs")]: { marginLeft: "unset" },
							}}
						/>
					</Grid.Col>
					<Grid.Col className={classes.html} sm={3} md={4}>
						<Skill
							size="medium"
							icon={HtmlIcon}
							animationDelay={1500}
							animationVariant="3"
							sx={{
								[theme.fn.smallerThan("sm")]: { marginRight: "40%" },
								[theme.fn.smallerThan("xs")]: { marginRight: "unset" },
							}}
						/>
					</Grid.Col>
					<Grid.Col className={classes.css} sm={2}>
						<Skill
							size="small"
							icon={CssIcon}
							animationDelay={500}
							animationVariant="2"
						/>
					</Grid.Col>
					<Grid.Col md={6} my="lg">
						<Center sx={{ width: "100%", height: "100%" }}>
							<Card
								radius="lg"
								shadow="xl"
								p="xl"
								sx={theme => ({
									maxWidth: theme.breakpoints.xs,
									margin: "auto",
									textAlign: "center",
								})}
							>
								<CodeIcon size={42} />
								<Title order={2} weight="bold" mb="lg">
									Programação é uma{" "}
									<Text
										inherit
										component="span"
										variant="gradient"
										gradient={{ from: "blue", to: "cyan" }}
									>
										ferramenta
									</Text>
									.
								</Title>
								<Text>{content}</Text>
							</Card>
						</Center>
					</Grid.Col>
					<Grid.Col className={classes.vercel} sm={2}>
						<Skill size="small" icon={VercelIcon} animationDelay={1500} />
					</Grid.Col>
					<Grid.Col className={classes.firebase} sm={3} md={4}>
						<Skill
							size="medium"
							icon={FirebaseIcon}
							animationVariant="2"
							sx={{
								[theme.fn.smallerThan("sm")]: { marginLeft: "40%" },
								[theme.fn.smallerThan("xs")]: { marginLeft: "unset" },
							}}
						/>
					</Grid.Col>
					<Grid.Col className={classes.nextjs} sm={4} md={4}>
						<Skill
							size="large"
							icon={NextjsIcon}
							animationDelay={1000}
							sx={{
								[theme.fn.smallerThan("sm")]: { marginRight: "40%" },
								[theme.fn.smallerThan("xs")]: { marginRight: "unset" },
							}}
						/>
					</Grid.Col>
					<Grid.Col className={classes.vscode} sm={3} md={4}>
						<Skill
							size="medium"
							icon={VscodeIcon}
							animationDelay={500}
							animationVariant="3"
						/>
					</Grid.Col>
				</Grid>
			</Container>
		</Box>
	);
}
