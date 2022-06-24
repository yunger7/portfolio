import { Octokit } from "@octokit/rest";
import { githubUsername } from "website.config";

export async function fetchGithubInfo(auth) {
	const octokit = new Octokit({ auth });
	const githubInfo = {};

	const totalCommitsPromise = octokit.search
		.commits({
			q: `author:${githubUsername}`,
		})
		.then(({ data: { total_count } }) => {
			githubInfo.totalCommits = total_count;
		});

	const totalReposPromise = octokit.users
		.getByUsername({ username: githubUsername })
		.then(({ data: { public_repos, total_private_repos } }) => {
			githubInfo.totalRepos = public_repos + total_private_repos;
		});

	try {
		await Promise.all([totalCommitsPromise, totalReposPromise]);
	} catch (error) {
		throw new Error("Failed to fetch GitHub data");
	}

	return githubInfo;
}
