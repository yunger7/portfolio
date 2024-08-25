import {
	BrandJavascript as JavascriptIcon,
    BrandTypescript as TypescriptIcon,
	BrandReactNative as ReactIcon,
	BrandNextjs as NextjsIcon,
	BrandVercel as VercelIcon,
	BrandHtml5 as HtmlIcon,
	BrandCss3 as CssIcon,
	BrandPhp as PhpIcon,
	Database as DatabaseIcon,
	Crane as UiIcon,
	BrandNotion as NotionIcon,
	BrandGithub as GithubIcon,
	BrandFirebase as FirebaseIcon,
	DeviceLaptop as LaptopIcon,
	LetterZ as ZicottIcon,
	Wand as ToolboxIcon,
	Car as CarIcon,
	Books as BooksIcon,
	CalendarEvent as CalendarIcon,
	BrandBootstrap as BootstrapIcon,
	Coin as CoinIcon,
	ChartDots as ChartIcon,
	Recycle as RecycleIcon,
	Headphones as HeadphonesIcon,
	Message as MessageIcon,
    BrandTailwind as TailwindIcon,
} from "tabler-icons-react";
import {
    SiArchlinux as ArchlinuxIcon,
    SiVim as VimIcon,
    SiRust as RustIcon,
    SiMintlify as MintlifyIcon,
} from "react-icons/si";

export const username = "Luís Galete";
export const githubUsername = "yunger7";
export const location = {
	pt: "Santa Helena - PR",
	en: "Brazil",
};

export const baseUrl = process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://${process.env.VERCEL_URL || "luisgalete.com.br"}`;

export const meta = {
	pt: {
		title: `${username} | Portfólio`,
		description: `O portfólio de ${username}, um programador Web focado em construir soluções elegantes para problemas complexos.`,
	},
	en: {
		title: `${username} | Portfolio`,
		description: `${username}'s portfolio, a Web developer focused in building elegant solutions to complex problems.`,
	},
};

export const firstCommitDate = new Date(2020, 2, 3); // Mar 3, 2020

export const bio = {
	pt: "Sou um desenvolvedor Web localizado em {{ LOCATION }}, com {{ PROGRAMMING_AGE }} anos de experiência. Guiado pela criatividade e movido a cafeína, encontrei na programação uma paixão ― A ferramenta perfeita para tirar minhas ideias do papel.",
	en: "I'm a web developer based in {{ LOCATION }}, with {{ PROGRAMMING_AGE }} years of experience. Driven by creativity and powered by caffeine, I found in programming a passion ― The perfect tool to get my ideas out off paper.",
};

export const about = {
	pt: 'Desde o primeiro "Hello world", contribui com mais de {{ COMMITS }} commits, espalhados entre {{ REPOS }} repositórios diferentes. Meu foco, no entanto, não é apenas "programar por programar" ― Vejo a programação como uma ferramenta, capaz de solucionar problemas e dar vida a ideias.',
	en: 'Since the first "Hello world", I\'ve contributed with over {{ COMMITS }} commits, scattered across {{ REPOS }} different repositories. My focus, however, is not just to "code for the sake of coding" ― I see programming as a tool, capable of solving problems and bringing ideas to life.',
};

export const social = {
	github: "https://github.com/yunger7",
	reddit: "https://www.reddit.com/user/yunger_",
	steam: "https://steamcommunity.com/id/yunger",
	discord: "yunger7",
};

export const technologies = [
	{ name: "TypeScript", icon: <TypescriptIcon /> },
	{ name: "Next.js", icon: <NextjsIcon /> },
    { name: "Rust", icon: <RustIcon size={24} /> },
	{ name: "Arch", icon: <ArchlinuxIcon size={24} /> },
	{ name: "Vim", icon: <VimIcon size={24} /> },
];

export const projects = [
    {
		title: {
			pt: "API ENEM",
			en: "API ENEM",
		},
		description: {
			pt: "Este projeto é uma API pública e open-source, criado para facilitar o acesso aos dados de provas e questões do Exame Nacional do Ensino Médio (ENEM) de forma programática.",
			en: "This project is a public and open-source API, created to facilitate access to questions and exam data from the National High School Exam.",
		},
		status: "active",
		tags: ["API"],
		source: "https://github.com/yunger7/enem-api",
		href: "https://enem.dev",
		license: "GNU GPL-2.0",
		logo: {
			type: "image",
			image: "/projects/enem-api/logo.svg",
		},
		images: [
            "/projects/enem-api/home.png",
            "/projects/enem-api/docs.png",
        ],
		technologies: [
            { name: "TypeScript", icon: <TypescriptIcon /> },
            { name: "Next.js", icon: <NextjsIcon /> },
            { name: "Tailwind", icon: <TailwindIcon /> },
            { name: "Neon", icon: <DatabaseIcon /> },
            { name: "Mintlify", icon: <MintlifyIcon size={24} /> },
        ],
	},
	{
		title: {
			pt: "yunger.dev",
			en: "yunger.dev",
		},
		description: {
			pt: "Esta é minha oficina, o local onde mantenho meus projetos, ferramentas, compartilho ideias, faço networking e escrevo sobre assuntos de meu interesse.",
			en: "This is my workshop, the place where I keep my projects, tools, share ideas, do networking and write about things that I'm interested in.",
		},
		status: "archived",
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
		title: {
			pt: "Portfólio",
			en: "Portfolio",
		},
		description: {
			pt: "Este é o website que você está acessando no momento. É um local feito para me apresentar e expor alguns projetos.",
			en: "This is the website you're currently seeing. It's a place made to tell a little bit about myself and showcase a few projects.",
		},
		status: "active",
		tags: ["Projeto pessoal"],
		source: "https://github.com/yunger7/portfolio",
		href: null,
		license: "Apache License 2.0",
		logo: {
			type: "image",
			image: "/logo.png",
		},
		images: [
            "/projects/portfolio/home.png",
            "/projects/portfolio/about.png",
            "/projects/portfolio/projects.png",
            "/projects/portfolio/contact.png",
        ],
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
		title: {
			pt: "Axew",
			en: "Axew",
		},
		description: {
			pt: "Axew é um template HTML desenvolvido para profissionais que buscam divulgar seu trabalho. É um ótimo local para expor habilidades e projetos realizados anteriormente.",
			en: "Axew is a HTML template made for professionals looking to promote their work. It's a great place to showcase skills and previous projects.",
		},
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
		title: {
			pt: "Zicott",
			en: "Zicott",
		},
		description: {
			pt: "Zicott é uma ferramenta CLI feita para baixar videos do YouTube como MP3.",
			en: "Zicott is a CLI tool for quickly downloading YouTube videos as MP3.",
		},
		status: "active",
		tags: ["Projeto pessoal"],
		source: "https://github.com/yunger7/zicott",
		href: null,
		license: "MIT License",
		logo: {
			type: "icon",
			icon: <ZicottIcon />,
		},
		images: [
            "/projects/zicott/cli.png",
        ],
		technologies: [
			{ name: "TypeScript", icon: <TypescriptIcon /> },
			{ name: "CLI", icon: <LaptopIcon /> },
		],
	},
	{
		title: {
			pt: "Toolbox",
			en: "Toolbox",
		},
		description: {
			pt: 'Uma coleção de ferramentas para uso cotidiano, como "Convertor de Caracteres", "Gerador de Lorem Ipsum", etc.',
			en: 'A collection of tools for everyday usage, such as "Case Converter", "Lorem Ipsum Generator", etc.',
		},
		status: "active",
		tags: ["Projeto pessoal"],
		source: "https://github.com/yunger7/toolbox",
		href: "https://tools.yunger.dev/",
		license: "Apache License 2.0",
		logo: {
			type: "icon",
			icon: <ToolboxIcon />,
		},
		images: ["/projects/toolbox/home.jpg", "/projects/toolbox/tool.jpg"],
		technologies: [
			{ name: "TypeScript", icon: <TypescriptIcon /> },
			{ name: "React", icon: <ReactIcon /> },
			{ name: "Next.js", icon: <NextjsIcon /> },
			{ name: "Mantine", icon: <UiIcon /> },
			{ name: "Vercel", icon: <VercelIcon /> },
		],
	},
	{
		title: {
			pt: "Ecoleta",
			en: "Ecoleta",
		},
		description: {
			pt: 'Um projeto realizado durante a "Next Level Week #1". A aplicação tem o objetivo de facilitar a busca por pontos de coleta de lixo próximos ao usuário.',
			en: 'A project made during the "Next Level Week #1". The app aims to facilitate the search for trash collection points near the user.',
		},
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
		title: {
			pt: "Podcastr",
			en: "Podcastr",
		},
		description: {
			pt: 'Um projeto realizado durante a "Next Level Week #5". Trata-se um player web para escutar podcasts.',
			en: 'A project made during the "Next Level Week #5". It is a web player for listening to podcasts.',
		},
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
			{ name: "TypeScript", icon: <TypescriptIcon /> },
			{ name: "React", icon: <ReactIcon /> },
			{ name: "Next.js", icon: <NextjsIcon /> },
		],
	},
	{
		title: {
			pt: "Letmeask",
			en: "Letmeask",
		},
		description: {
			pt: 'Um projeto realizado durante a "Next Level Week #6". A aplicação tem o objetivo de ajudar streamers a selecionar perguntas de ouvintes para responder durante uma livestream.',
			en: 'A project made during the "Next Level Week #6". The app aims to help streamers select questions from the audience to answer during a livestream.',
		},
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
			{ name: "TypeScript", icon: <TypescriptIcon /> },
			{ name: "React", icon: <ReactIcon /> },
			{ name: "Firebase", icon: <FirebaseIcon /> },
		],
	},
	{
		title: {
			pt: "TCC SENAI",
			en: "TCC SENAI",
		},
		description: {
			pt: "Meu trabalho de conclusão de curso no SENAI. Trata-se de um sistema para gerenciar reservas de veículos empresariais.",
			en: "A project that I worked on during my Systems's Development course at SENAI. It aims to help companies manage their business vehicle reservations.",
		},
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
		title: {
			pt: "Agenda",
			en: "Phone book",
		},
		description: {
			pt: "Uma agenda feita em PHP para treinar a construção de UIs e as 4 operações CRUD.",
			en: "A phone book made in PHP to practice UI development and the 4 CRUD operations.",
		},
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
		title: {
			pt: "Sistema de Vendas",
			en: "Sales system",
		},
		description: {
			pt: "Um sistema feito em PHP para treinar alguns conceitos básicos como conexão com banco de dados e consumo de bibliotecas.",
			en: "An project made in PHP to practice a few basic concepts, such as interacting with databases and using third party libraries.",
		},
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
