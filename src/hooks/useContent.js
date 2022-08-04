import { useContext } from "react";
import { ContentContext } from "@/contexts";

export function useContent() {
	const value = useContext(ContentContext);

	return value;
}
