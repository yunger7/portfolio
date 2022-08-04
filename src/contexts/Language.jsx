import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext({
	language: "",
	toggleLanguage: () => {},
});

export function LanguageProvider({ children }) {
	const [language, setLanguage] = useState("pt");

	function toggleLanguage() {
		setLanguage(lang => (lang == "pt" ? "en" : "pt"));
	}

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}
