import { useMantineColorScheme } from "@mantine/core";

import { fetchGithubInfo, formatCommits } from "@/lib";

import { Header, Footer } from "@/components";
import { Home, About, Projects, Contact } from "@/components/sections";

import { about, firstCommitDate, location, bio } from "website.config";

export default function LandingPage({ bio, about }) {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<>
			<Header />
			<Home bio={bio} />
			<About content={about} />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export async function getStaticProps() {
	const GITHUB_ACCESS_TOKEN = process.env["GITHUB_ACCESS_TOKEN"];
	const { totalCommits, totalRepos } = await fetchGithubInfo(
		GITHUB_ACCESS_TOKEN
	);

	let updatedBio = bio;
	const programmingAge =
		new Date().getFullYear() - firstCommitDate.getFullYear();
	updatedBio = updatedBio.replace("{{ LOCATION }}", location);
	updatedBio = updatedBio.replace("{{ PROGRAMMING_AGE }}", programmingAge);

	let updatedAbout = about;
	updatedAbout = updatedAbout.replace(
		"{{ COMMITS }}",
		formatCommits(totalCommits)
	);
	updatedAbout = updatedAbout.replace("{{ REPOS }}", totalRepos);

	return {
		props: {
			about: updatedAbout,
			bio: updatedBio,
		},
		revalidate: 60 * 60 * 24,
	};
}
