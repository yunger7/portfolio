import {
	BrandJavascript as JavascriptIcon,
	BrandReactNative as ReactIcon,
	BrandNextjs as NextjsIcon,
	BrandVercel as VercelIcon,
	BrandVisualStudio as VscodeIcon,
	BrandHtml5 as HtmlIcon,
	BrandCss3 as CssIcon,
	BrandPhp as PhpIcon,
	Database as DatabaseIcon,
	Crane as UiIcon,
	BrandNotion as NotionIcon,
	BrandGithub as GithubIcon,
	BrandFirebase as FirebaseIcon,
	TestPipe as LaboratoryIcon,
	Car as CarIcon,
	Books as BooksIcon,
	CalendarEvent as CalendarIcon,
	BrandBootstrap as BootstrapIcon,
	Coin as CoinIcon,
	ChartDots as ChartIcon,
	Recycle as RecycleIcon,
	Headphones as HeadphonesIcon,
	Message as MessageIcon,
	Code as CodeIcon,
} from "tabler-icons-react";

export const username = "Luís Galete";
export const githubUsername = "yunger7";
export const location = "Nova Esperança - PR";

export const meta = {
	title: `${username} | Portfólio`,
	description: `O portfólio de ${username}, um programador Web focado em construir soluções elegantes para problemas complexos.`,
};

export const firstCommitDate = new Date(2020, 2, 3); // Mar 3, 2020

export const bio = `Sou um desenvolvedor Web localizado em {{ LOCATION }}, com {{ PROGRAMMING_AGE }} anos de experiência. Guiado pela criatividade e movido a cafeína, encontrei na programação uma paixão ― A ferramenta perfeita para tirar minhas ideias do papel.`;

export const about =
	'Desde o primeiro "Hello world", eu contribui com mais de {{ COMMITS }} commits, espalhados entre {{ REPOS }} repositórios diferentes. Meu foco, no entanto, não é apenas "programar por programar" ― Vejo a programação como uma ferramenta, capaz de solucionar problemas e dar vida a ideias.';

export const social = {
	github: "https://github.com/yunger7",
	reddit: "https://www.reddit.com/user/yunger_",
	steam: "https://steamcommunity.com/id/yunger/",
	discord: "yunger#3461",
};

export const technologies = [
	{ name: "JavaScript", icon: <JavascriptIcon /> },
	{ name: "React", icon: <ReactIcon /> },
	{ name: "Next.js", icon: <NextjsIcon /> },
	{ name: "Vercel", icon: <VercelIcon /> },
	{ name: "VSCode", icon: <VscodeIcon /> },
];

export const projects = [
	{
		title: "yunger.dev",
		description: `Esta é minha oficina, o local onde mantenho meus projetos, ferramentas, compartilho ideias, faço networking e escrevo sobre assuntos de meu interesse.`,
		status: "active",
		tags: ["Projeto pessoal"],
		source: "https://github.com/yunger7/yunger.dev",
		href: "https://yunger.dev/",
		license: "Apache License 2.0",
		logo: {
			type: "image",
			image: "/projects/yunger.dev/logo.png",
		},
		images: [
			"/projects/yunger.dev/home.jpg",
			"/projects/yunger.dev/papers.jpg",
			"/projects/yunger.dev/footer.jpg",
		],
		technologies: [
			{ name: "JavaScript", icon: <JavascriptIcon /> },
			{ name: "React", icon: <ReactIcon /> },
			{ name: "Next.js", icon: <NextjsIcon /> },
			{ name: "MUI", icon: <UiIcon /> },
			{ name: "Notion API", icon: <NotionIcon /> },
			{ name: "Vercel", icon: <VercelIcon /> },
		],
	},
	{
		title: "Portfolio",
		description: `Este é o site que você está acessando no momento. É um local feito para me apresentar e expor alguns projetos.`,
		status: "active",
		tags: ["Projeto pessoal"],
		source: "https://github.com/yunger7/portfolio",
		href: null,
		license: "Apache License 2.0",
		logo: {
			type: "image",
			image: "/logo.png",
		},
		images: [],
		technologies: [
			{ name: "JavaScript", icon: <JavascriptIcon /> },
			{ name: "React", icon: <ReactIcon /> },
			{ name: "Next.js", icon: <NextjsIcon /> },
			{ name: "Mantine", icon: <UiIcon /> },
			{ name: "Notion API", icon: <NotionIcon /> },
			{ name: "GitHub API", icon: <GithubIcon /> },
			{ name: "Vercel", icon: <VercelIcon /> },
		],
	},
	{
		title: "Blueprints",
		description: `Este repositório contém vários projetos ilustrativos, usados para auxiliar na explicação de algum post publicado na minha oficina.`,
		status: "active",
		tags: ["Projeto pessoal", "Monorepo"],
		source: "https://github.com/yunger7/blueprints",
		href: null,
		license: "MIT License",
		logo: {
			type: "image",
			image: "/projects/blueprints/logo.png",
		},
		images: [],
		technologies: [],
	},
	{
		title: "Axew",
		description: `Axew é um template HTML desenvolvido para profissionais que buscam divulgar seu trabalho. É o local ideal para expor habilidades e projetos realizados anteriormente.`,
		status: "active",
		tags: ["Projeto pessoal", "Template"],
		source: null,
		href: "https://templates.yunger.dev/axew",
		license: null,
		logo: {
			type: "image",
			image: "/projects/axew/logo.png",
		},
		images: [
			"/projects/axew/home.jpg",
			"/projects/axew/about.jpg",
			"/projects/axew/services.jpg",
			"/projects/axew/projects.jpg",
			"/projects/axew/contact.jpg",
		],
		technologies: [
			{ name: "HTML5", icon: <HtmlIcon /> },
			{ name: "CSS3", icon: <CssIcon /> },
			{ name: "JavaScript", icon: <JavascriptIcon /> },
		],
	},
	{
		title: "Laboratory",
		description: `Este repositório contém testes, projetos pequenos, arquivos de cursos e experimentos. É onde eu coloco a mão na massa para praticar assuntos que eu ainda não domino.`,
		status: "active",
		tags: ["Projeto pessoal", "Monorepo"],
		source: "https://github.com/yunger7/laboratory",
		href: null,
		license: "MIT License",
		logo: {
			type: "icon",
			icon: <LaboratoryIcon />,
		},
		images: [],
		technologies: [],
	},
	{
		title: "Ecoleta",
		description: `Projeto realizado durante a Next Level Week #1. A aplicação tem o objetivo de facilitar a busca por pontos de coleta próximos ao usuário.`,
		status: "archived",
		tags: ["Rocketseat", "Next Level Week"],
		source: "https://github.com/yunger7/Ecoleta",
		href: null,
		license: "MIT License",
		logo: {
			type: "icon",
			icon: <RecycleIcon />,
		},
		images: [
			"/projects/ecoleta/home.png",
			"/projects/ecoleta/register.gif",
			"/projects/ecoleta/search.gif",
		],
		technologies: [
			{ name: "HTML5", icon: <HtmlIcon /> },
			{ name: "CSS3", icon: <CssIcon /> },
			{ name: "JavaScript", icon: <JavascriptIcon /> },
			{ name: "Express.js", icon: <BooksIcon /> },
			{ name: "Nunjucks", icon: <BooksIcon /> },
			{ name: "SQLite3", icon: <DatabaseIcon /> },
		],
	},
	{
		title: "Podcastr",
		description: `Projeto realizado durante a Next Level Week #5. Trata-se um player web para escutar podcasts.`,
		status: "archived",
		tags: ["Rocketseat", "Next Level Week"],
		source: "https://github.com/yunger7/podcastr",
		href: null,
		license: "MIT License",
		logo: {
			type: "icon",
			icon: <HeadphonesIcon />,
		},
		images: ["/projects/podcastr/home.jpg", "/projects/podcastr/details.jpg"],
		technologies: [
			{ name: "TypeScript", icon: <CodeIcon /> },
			{ name: "React", icon: <ReactIcon /> },
			{ name: "Next.js", icon: <NextjsIcon /> },
		],
	},
	{
		title: "Letmeask",
		description: `Projeto realizado durante a Next Level Week #6. A aplicação tem o objetivo de ajudar streamers a selecionarem perguntas de ouvintes para responder durante uma livestream.`,
		status: "archived",
		tags: ["Rocketseat", "Next Level Week"],
		source: "https://github.com/yunger7/letmeask",
		href: null,
		license: "MIT License",
		logo: {
			type: "icon",
			icon: <MessageIcon />,
		},
		images: ["/projects/letmeask/home.jpg", "/projects/letmeask/room.jpg"],
		technologies: [
			{ name: "TypeScript", icon: <CodeIcon /> },
			{ name: "React", icon: <ReactIcon /> },
			{ name: "Firebase", icon: <FirebaseIcon /> },
		],
	},
	{
		title: "TCC SENAI",
		description: `Meu trabalho de conclusão de curso no SENAI. Trata-se de um sistema para gerenciar reservas de veículos empresariais.`,
		status: "archived",
		tags: ["SENAI"],
		source: "https://github.com/yunger7/tcc-senai",
		href: null,
		license: "MIT License",
		logo: {
			type: "icon",
			icon: <CarIcon />,
		},
		images: [
			"/projects/tcc-senai/login.gif",
			"/projects/tcc-senai/usuarios.jpg",
			"/projects/tcc-senai/reserva.gif",
		],
		technologies: [
			{ name: "PHP", icon: <PhpIcon /> },
			{ name: "MySQL", icon: <DatabaseIcon /> },
			{ name: "JavaScript", icon: <JavascriptIcon /> },
			{ name: "Materialize CSS", icon: <UiIcon /> },
		],
	},
	{
		title: "SENAI",
		description: `Este repositório contém projetos, avaliações e exercícios realizados no curso de Desenvolvimento de Sistemas do SENAI CTM.`,
		status: "archived",
		tags: ["SENAI", "Monorepo"],
		source: "https://github.com/yunger7/SENAI",
		href: null,
		license: "MIT License",
		logo: {
			type: "icon",
			icon: <BooksIcon />,
		},
		images: [],
		technologies: [],
	},
	{
		title: "Agenda",
		description: `Uma agenda feita em PHP para treinar a construção de UIs e as 4 operações CRUD.`,
		status: "archived",
		tags: ["SENAI"],
		source: "https://github.com/yunger7/Agenda",
		href: null,
		license: "MIT License",
		logo: {
			type: "icon",
			icon: <CalendarIcon />,
		},
		images: [
			"/projects/agenda/home.jpg",
			"/projects/agenda/login.gif",
			"/projects/agenda/register.jpg",
			"/projects/agenda/search.jpg",
			"/projects/agenda/trash-can.jpg",
			"/projects/agenda/map.jpg",
		],
		technologies: [
			{ name: "PHP", icon: <PhpIcon /> },
			{ name: "MySQL", icon: <DatabaseIcon /> },
			{ name: "Bootstrap", icon: <BootstrapIcon /> },
		],
	},
	{
		title: "Sistema de Vendas",
		description: `Um sistema feito em PHP para treinar alguns conceitos básicos como conexão com banco de dados e consumo de bibliotecas.`,
		status: "archived",
		tags: ["SENAI"],
		source: "https://github.com/yunger7/Sistema-de-vendas",
		href: null,
		license: "MIT License",
		logo: {
			type: "icon",
			icon: <CoinIcon />,
		},
		images: [
			"/projects/sistema-de-vendas/home.jpg",
			"/projects/sistema-de-vendas/login.gif",
			"/projects/sistema-de-vendas/register-client.jpg",
			"/projects/sistema-de-vendas/register-product.gif",
			"/projects/sistema-de-vendas/search.jpg",
			"/projects/sistema-de-vendas/charts.jpg",
		],
		technologies: [
			{ name: "PHP", icon: <PhpIcon /> },
			{ name: "MySQL", icon: <DatabaseIcon /> },
			{ name: "Bootstrap", icon: <BootstrapIcon /> },
			{ name: "PHPlot", icon: <ChartIcon /> },
		],
	},
];
