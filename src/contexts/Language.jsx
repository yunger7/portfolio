import { useLocalStorage } from "@mantine/hooks";
import { createContext, useEffect } from "react";

export const LanguageContext = createContext({
	language: "",
	toggleLanguage: () => {},
});

export function LanguageProvider({ children }) {
	const [language, setLanguage] = useLocalStorage({
        key: "language",
        defaultValue: "pt",
    });

    useEffect(() => {
        const isLanguageInitialized = localStorage.getItem("isLanguageInitialized");

        if (typeof window !== "undefined" && isLanguageInitialized !== "true") {
            const language = navigator.language || navigator.userLanguage;
            setLanguage(language.includes("en") ? "en" : "pt");

            localStorage.setItem("isLanguageInitialized", "true");
        }
    }, []);

	function toggleLanguage() {
		setLanguage(lang => (lang == "pt" ? "en" : "pt"));
	}

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}
