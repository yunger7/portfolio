import {
	Box,
	Title,
	Text,
	Group,
	Button,
	Card,
	Divider,
	Stack,
	useMantineTheme,
} from "@mantine/core";
import { useModals } from "@mantine/modals";

import {
	Archive as ArchivedIcon,
	Check as ActiveIcon,
	BrandGithub as GithubIcon,
	ExternalLink as ExternalLinkIcon,
	Scale as LicenseIcon,
} from "tabler-icons-react";

import { useLanguage } from "@/hooks";
import { GlassCard, IconBadge, ImageShowcase, SmoothImage } from "@/components";

export function ProjectCard({ project }) {
	const { language } = useLanguage();

	const { title, logo } = project;

	const theme = useMantineTheme();
	const modals = useModals();

	function renderLogo() {
		switch (logo.type) {
			case "image":
				return (
					<SmoothImage
						src={logo.image}
						alt={title[language]}
						width={64}
						height={64}
						quality={100}
					/>
				);
			case "icon":
				return (
					<Box
						sx={theme => ({
							"& svg": {
								width: 64,
								height: 64,
								color:
									theme.colorScheme === "light"
										? theme.colors.gray["0"]
										: theme.colors.gray["2"],
							},
						})}
					>
						{logo.icon}
					</Box>
				);
		}
	}

	function showDetails() {
		modals.openModal({
			size: "xl",
			withCloseButton: false,
			padding: 0,
			overlayColor:
				theme.colorScheme === "light"
					? theme.colors.gray[2]
					: theme.colors.dark[9],
			overlayOpacity: 0.25,
			overlayBlur: 3,
			centered: true,
			children: <Details project={project} language={language} />,
		});
	}

	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				minHeight: 200,

				"& > *": {
					width: "100%",
					height: "100%",
				},
			}}
		>
			<GlassCard
				title={title[language]}
				shadow="sm"
				backgroundOpacity={0.1}
				onClick={showDetails}
			>
				<Stack
					spacing={4}
					align="center"
					justify="center"
					sx={{ width: "100%", height: "100%" }}
				>
					{renderLogo()}
					<Text size="lg" weight={500} sx={theme => ({ color: theme.white })}>
						{title[language]}
					</Text>
				</Stack>
			</GlassCard>
		</Box>
	);
}

function Details({ project, language }) {
	const {
		title,
		description,
		status,
		source,
		href,
		license,
		images,
		technologies,
	} = project;

	return (
		<Card
			p="xl"
			sx={theme => ({
				[theme.fn.smallerThan("xs")]: { padding: theme.spacing.md },
			})}
		>
			{images.length > 0 && <ImageShowcase images={images} />}
			<Group mb="xs" mt="xl">
				<Status variant={status} language={language} />
				{license && (
					<IconBadge
						variant="outline"
						radius="sm"
						icon={<LicenseIcon />}
						ActionIconProps={{ color: "blue" }}
					>
						{license}
					</IconBadge>
				)}
			</Group>
			<Title order={3} mb="xs">
				{title[language]}
			</Title>
			<Text>{description[language]}</Text>
			{technologies.length > 0 && (
				<Group mt="sm">
					{technologies.map(({ name, icon }) => (
						<IconBadge
							icon={icon}
							ActionIconProps={{ color: "blue" }}
							key={name}
						>
							{name}
						</IconBadge>
					))}
				</Group>
			)}
			{(source || href) && (
				<>
					<Divider my="lg" />
					<Group>
						{source && (
							<Button
								component="a"
								href={source}
								target="_blank"
								variant={href ? "outline" : "filled"}
								leftIcon={<GithubIcon />}
							>
								{language == "en" ? "Source code" : "Código fonte"}
							</Button>
						)}
						{href && (
							<Button
								component="a"
								href={href}
								target="_blank"
								leftIcon={<ExternalLinkIcon />}
							>
								Website
							</Button>
						)}
					</Group>
				</>
			)}
		</Card>
	);
}

function Status({ variant, language }) {
	const variants = {
		active: {
			text: language == "en" ? "Active" : "Ativo",
			color: "green",
			icon: <ActiveIcon />,
		},
		archived: {
			text: language == "en" ? "Archived" : "Arquivado",
			color: "orange",
			icon: <ArchivedIcon />,
		},
	};

	return (
		<IconBadge
			color={variants[variant].color}
			radius="sm"
			icon={variants[variant].icon}
			ActionIconProps={{
				color: variants[variant].color,
			}}
		>
			{variants[variant].text}
		</IconBadge>
	);
}
