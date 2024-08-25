import Head from "next/head";
import { useState, useEffect } from "react";
import { fetchGithubInfo, getWebsiteInfo } from "@/lib";
import { useLanguage } from "@/hooks";

import { Header, Footer } from "@/components";
import { Home, About, Projects, Contact } from "@/components/sections";

import { baseUrl, meta } from "website.config";

export default function LandingPage({ content: defaultContent, githubInfo }) {
	const { language } = useLanguage();
	const [content, setContent] = useState(defaultContent);

	useEffect(() => {
		setContent(getWebsiteInfo(language, githubInfo));
	}, [language, githubInfo]);

	return (
		<>
			<Head>
				<title>{meta[language].title}</title>
				<meta name="description" content={meta[language].description} />
                <meta name="author" content="Luis Galete" />
                <meta property="og:title" content={meta[language].title} />
                <meta property="og:description" content={meta[language].description} />
                <meta property="og:image" content={`${baseUrl}/opengraph.png`} />
                <meta property="og:url" content={baseUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Luis Galete" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={meta[language].title} />
                <meta name="twitter:description" content={meta[language].description} />
                <meta name="twitter:image" content={`${baseUrl}/opengraph.png`} />
			</Head>
			<Header />
			<Home bio={content.bio} />
			<About content={content.about} />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export async function getStaticProps() {
	const GITHUB_ACCESS_TOKEN = process.env["GITHUB_ACCESS_TOKEN"];
	const githubInfo = await fetchGithubInfo(GITHUB_ACCESS_TOKEN);

	const websiteInfo = getWebsiteInfo("pt", githubInfo);

	return {
		props: {
			githubInfo,
			content: websiteInfo,
		},
		revalidate: 60 * 60 * 24,
	};
}
