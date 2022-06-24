import { useMantineColorScheme } from "@mantine/core";

import { Header } from "@components";
import { Home, About } from "@components/sections";

import { about } from "website.config"; // temp

export default function LandingPage() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<>
			<Header />
			<Home />
			<About content={about} />
		</>
	);
}
