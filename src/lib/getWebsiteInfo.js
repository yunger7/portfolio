import { formatCommits } from "./formatCommits";
import { about, firstCommitDate, location, bio } from "website.config";

export function getWebsiteInfo(language, payload) {
	const { totalCommits, totalRepos } = payload;

	let updatedBio = bio[language];
	const programmingAge =
		new Date().getFullYear() - firstCommitDate.getFullYear();
	updatedBio = updatedBio.replace("{{ LOCATION }}", location[language]);
	updatedBio = updatedBio.replace("{{ PROGRAMMING_AGE }}", programmingAge);

	let updatedAbout = about[language];
	updatedAbout = updatedAbout.replace(
		"{{ COMMITS }}",
		formatCommits(totalCommits, language)
	);
	updatedAbout = updatedAbout.replace("{{ REPOS }}", totalRepos);

	return {
		bio: updatedBio,
		about: updatedAbout,
	};
}
