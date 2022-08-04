export function formatCommits(num, language) {
	return Math.abs(num) > 1099
		? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + getSuffix(language)
		: (Math.sign(num) * Math.abs(num)).toString();
}

function getSuffix(language) {
	return language == "pt" ? " mil" : "k";
}
