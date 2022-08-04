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
	LanguageHiragana as LanguageIcon,
} from "tabler-icons-react";

import { useDiscordTag, useLanguage } from "@/hooks";
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
	const { language, toggleLanguage } = useLanguage();
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
			searchPlaceholder={language == "en" ? "Search..." : "Pesquisar..."}
			nothingFoundMessage={
				language == "en" ? "No results found" : "Nenhum resultado encontrado"
			}
			actions={[
				{
					title: "Home",
					description:
						language == "en" ? "Go back to the top" : "Voltar para o início",
					onTrigger: () => scrollToHome(),
					icon: <HomeIcon size={18} />,
					keywords: ["geral", "general"],
					group: language == "en" ? "General" : "Geral",
				},
				{
					title: language == "en" ? "About" : "Sobre",
					description:
						language == "en"
							? "More information about me"
							: "Mais informações sobre mim",
					onTrigger: () => scrollToAbout(),
					icon: <AboutIcon size={18} />,
					keywords: ["geral", "general", "about me", "sobre mim", "info"],
					group: language == "en" ? "General" : "Geral",
				},
				{
					title: language == "en" ? "Projects" : "Projetos",
					description:
						language == "en"
							? "See some of my projects"
							: "Veja alguns de meus projetos",
					onTrigger: () => scrollToProjects(),
					icon: <ProjectsIcon size={18} />,
					keywords: ["geral", "general", "projects", "projetos", "apps"],
					group: language == "en" ? "General" : "Geral",
				},
				{
					title: language == "en" ? "Contact" : "Contato",
					description:
						language == "en"
							? "Get in touch with me"
							: "Entre em contato comigo",
					onTrigger: () => scrollToContact(),
					icon: <ContactIcon size={18} />,
					keywords: ["geral", "general", "contact", "contato"],
					group: language == "en" ? "General" : "Geral",
				},
				{
					title: language == "en" ? "Change theme" : "Trocar tema",
					description:
						language == "en"
							? `Change theme to ${
									colorScheme === "light" ? "dark" : "light"
							  } mode`
							: `Mudar tema para o modo ${
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
						"system",
						"sistema",
						"theme",
						"tema",
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
					group: language == "en" ? "System" : "Sistema",
				},
				{
					title: language == "en" ? "Change language" : "Mudar idioma",
					description:
						language == "en"
							? "Change the website language to Portuguese"
							: "Mude o idioma do website para Inglês",
					onTrigger: () => toggleLanguage(),
					icon: <LanguageIcon size={18} />,
					keywords: [
						"system",
						"sistema",
						"language",
						"idioma",
						"english",
						"portuguese",
						"inglês",
						"português",
					],
					group: language == "en" ? "System" : "Sistema",
				},
				{
					title: language == "en" ? "View source code" : "Ver código fonte",
					description:
						language == "en"
							? "Don't forget to leave a star :)"
							: "Não se esqueça de dar uma estrelinha :)",
					onTrigger: () =>
						window
							.open("https://github.com/yunger7/portfolio", "_blank")
							.focus(),
					icon: <CodeIcon size={18} />,
					keywords: [
						"system",
						"sistema",
						"code",
						"codigo",
						"source",
						"fonte",
						"github",
					],
					group: language == "en" ? "System" : "Sistema",
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
