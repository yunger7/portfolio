import { useContext } from "react";
import { LanguageContext } from "@/contexts";

export function useLanguage() {
	return useContext(LanguageContext);
}
