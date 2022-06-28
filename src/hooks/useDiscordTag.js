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
				message: "Tag do Discord copiada para a area de transferência",
				autoClose: 4000,
				color: "green",
			});
		}
	}, [clipboard]);

	return {
		copyDiscordTag,
	};
}
