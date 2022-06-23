import { useEffect } from "react";
import { useClipboard } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";

import { social } from "website.config";

const discordTag = social.discord;

export function useDiscordTag() {
	const clipboard = useClipboard();

	function copyDiscordTag() {
		clipboard.copy(discordTag);
	}

	useEffect(() => {
		if (clipboard.copied) {
			showNotification({
				message: "Discord tag copied to clipboard!",
				autoClose: 4000,
				color: "green",
			});
		}

		if (clipboard.error) {
			showNotification({
				message: "Wops, failed to copy Discord tag :(",
				autoClose: 4000,
				color: "red",
			});
		}
	}, [clipboard]);

	return {
		copyDiscordTag,
	};
}
