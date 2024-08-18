import { useEffect, useCallback } from "react";
import { useClipboard } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";
import { useLanguage } from "./useLanguage";

import { social } from "website.config";

const discordTag = social.discord;

export function useDiscordTag() {
    const { language } = useLanguage();
	const clipboard = useClipboard();

	function copyDiscordTag() {
		clipboard.copy(discordTag);
	}

    const sendNotification = useCallback(() => {
        showNotification({
            message: language === "en"
                ? "Discord username copied to clipboard"
                : "Nome de usuário do discord copiado para a área de transferência",
            autoClose: 4000,
            color: "green",
        });
    }, [language]);

	useEffect(() => {
		if (clipboard.copied) {
            sendNotification();
		}
    }, [clipboard.copied, sendNotification]);

	return {
		copyDiscordTag,
	};
}
