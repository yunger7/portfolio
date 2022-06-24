import {
	BrandJavascript as JavascriptIcon,
	BrandReactNative as ReactIcon,
	BrandNextjs as NextjsIcon,
	BrandVercel as VercelIcon,
	BrandVisualStudio as VscodeIcon,
} from "tabler-icons-react";

export const username = "Luís Galete";
export const githubUsername = "yunger7";
export const location = "Nova Esperança - PR";

export const firstCommitDate = new Date(2020, 2, 3); // Mar 3, 2020

export const bio = `Sou um desenvolvedor Web localizado em {{ LOCATION }}, com {{ PROGRAMMING_AGE }} de experiência. Guiado pela criatividade e movido a cafeína, encontrei na programação uma paixão ― A ferramenta perfeita para tirar minhas ideias do papel.`;

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
