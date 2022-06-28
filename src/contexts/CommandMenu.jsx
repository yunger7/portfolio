import { createContext } from "react";

import { useMantineColorScheme } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import { SpotlightProvider } from "@mantine/spotlight";

import {
	Search as SearchIcon,
	Home as HomeIcon,
	User as AboutIcon,
	Crane as ProjectsIcon,
	Phone as ContactIcon,
	Sun as LightThemeIcon,
	Moon as DarkThemeIcon,
	Code as CodeIcon,
} from "tabler-icons-react";

import { useDiscordTag } from "@/hooks";
import { SOCIAL } from "@/utils";
import { social } from "website.config";

export const CommandMenuContext = createContext({
	homeRef: null,
	aboutRef: null,
	projectsRef: null,
	contactRef: null,
});

export function CommandMenuProvider({ children }) {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const { copyDiscordTag } = useDiscordTag();

	const { targetRef: homeRef, scrollIntoView: scrollToHome } =
		useScrollIntoView();

	const { targetRef: aboutRef, scrollIntoView: scrollToAbout } =
		useScrollIntoView();

	const { targetRef: projectsRef, scrollIntoView: scrollToProjects } =
		useScrollIntoView();

	const { targetRef: contactRef, scrollIntoView: scrollToContact } =
		useScrollIntoView();

	function getSocialActions() {
		const actions = [];

		for (const key of Object.keys(social)) {
			const Icon = SOCIAL[key].icon;
			const handleTrigger =
				key === "discord"
					? copyDiscordTag
					: () => window.open(social[key], "_blank").focus();

			actions.push({
				title: SOCIAL[key].name,
				icon: <Icon size={18} />,
				onTrigger: handleTrigger,
				keywords: ["social"],
				group: "Social",
			});
		}

		return actions;
	}

	return (
		<SpotlightProvider
			highlightQuery
			highlightColor="blue"
			searchIcon={<SearchIcon size={18} />}
			shortcut={["mod + P", "mod + K", "/"]}
			searchPlaceholder="Pesquisar..."
			nothingFoundMessage="Nenhum resultado encontrado"
			actions={[
				{
					title: "Home",
					description: "Voltar para o início",
					onTrigger: () => scrollToHome(),
					icon: <HomeIcon size={18} />,
					keywords: ["geral", "general"],
					group: "Geral",
				},
				{
					title: "Sobre",
					description: "Mais informações sobre mim",
					onTrigger: () => scrollToAbout(),
					icon: <AboutIcon size={18} />,
					keywords: ["geral", "general", "about", "info"],
					group: "Geral",
				},
				{
					title: "Projetos",
					description: "Veja alguns de meus projetos",
					onTrigger: () => scrollToProjects(),
					icon: <ProjectsIcon size={18} />,
					keywords: ["geral", "general", "projects"],
					group: "Geral",
				},
				{
					title: "Contato",
					description: "Entre em contato comigo",
					onTrigger: () => scrollToContact(),
					icon: <ContactIcon size={18} />,
					keywords: ["geral", "general", "contact"],
					group: "Geral",
				},
				{
					title: "Trocar tema",
					description: `Mudar para o tema ${
						colorScheme === "light" ? "escuro" : "claro"
					}`,
					onTrigger: () => toggleColorScheme(),
					icon:
						colorScheme === "light" ? (
							<DarkThemeIcon size={18} />
						) : (
							<LightThemeIcon size={18} />
						),
					keywords: [
						"sistema",
						"system",
						"theme",
						"claro",
						"escuro",
						"light",
						"dark",
						"toggle",
						"color",
						"cor",
						"mode",
						"modo",
					],
					group: "Sistema",
				},
				{
					title: "Ver código fonte",
					description: "Não se esqueça de dar uma estrelinha :)",
					onTrigger: () =>
						window
							.open("https://github.com/yunger7/portfolio", "_blank")
							.focus(),
					icon: <CodeIcon size={18} />,
					keywords: ["sistema", "system", "code", "codigo", "source"],
					group: "Sistema",
				},
				...getSocialActions(),
			]}
		>
			<CommandMenuContext.Provider
				value={{
					homeRef,
					aboutRef,
					projectsRef,
					contactRef,
				}}
			>
				{children}
			</CommandMenuContext.Provider>
		</SpotlightProvider>
	);
}
