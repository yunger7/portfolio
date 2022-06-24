import {
	BrandJavascript as JavascriptIcon,
	BrandReactNative as ReactIcon,
	BrandNextjs as NextjsIcon,
	BrandVercel as VercelIcon,
	BrandVisualStudio as VscodeIcon,
} from "tabler-icons-react";

export const username = "Luís Galete";

export const location = "Nova Esperança - PR";

export const firstCommitDate = new Date(2020, 2, 3); // Mar 3, 2020
export const programmerAge =
	new Date().getFullYear() - firstCommitDate.getFullYear();

export const bio = `Sou um desenvolvedor Web localizado em ${location},
com ${programmerAge} ${programmerAge <= 1 ? "ano" : "anos"} de experiência. 
Guiado pela criatividade e movido a cafeína, encontrei na programação uma 
paixão ― A ferramenta perfeita para tirar minhas ideias do papel.`;

export const about =
	'Desde o primeiro "Hello world", eu contribui com mais de 2.8 mil commits, espalhados entre 18 repositórios diferentes. Meu foco, no entanto, não é apenas "programar por programar" ― Vejo a programação como uma ferramenta, capaz de solucionar problemas e dar vida a ideias.'; // temp

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
