import {
	Container,
	Paper,
	Title,
	Text,
	Button,
	Divider,
	useMantineColorScheme,
} from "@mantine/core";

export default function Home() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<Container size="xl" p="xl">
			<Paper withBorder shadow="lg" p="lg">
				<Title order={1} sx={theme => ({ marginBottom: theme.spacing.sm })}>
					Hello World!
				</Title>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut possimus
					libero, aliquam soluta labore adipisci totam explicabo voluptatibus
					nostrum aut harum omnis maxime magni quos saepe sunt animi porro nam!
				</Text>
				<Divider my="sm" />
				<Button
					variant="gradient"
					gradient={{ from: "indigo", to: "blue" }}
					onClick={() => toggleColorScheme()}
				>
					Toggle theme
				</Button>
			</Paper>
		</Container>
	);
}
