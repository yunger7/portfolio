export function formatCommits(num) {
	return Math.abs(num) > 1099
		? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + " mil"
		: (Math.sign(num) * Math.abs(num)).toString();
}
