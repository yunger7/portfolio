import { Container, Text, useMantineColorScheme } from "@mantine/core";

import { Header } from "@components";
import { Home } from "@components/sections";

export default function LandingPage() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<>
			<Header />
			<Home />
			<Container size="xl" p="xl" sx={{ minHeight: "80vh" }}>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum
					consequatur, laudantium inventore deleniti sunt saepe eaque distinctio
					ad harum architecto eius consequuntur rem dicta aut, repudiandae illo.
					Excepturi, eius. Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Suscipit, ratione cum aperiam maxime laboriosam soluta eveniet
					cumque unde nostrum quam quia fuga eos assumenda quisquam sit
					similique, mollitia temporibus dignissimos?
				</Text>
			</Container>
		</>
	);
}
