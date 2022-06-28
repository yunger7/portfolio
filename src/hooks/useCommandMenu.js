import { useContext } from "react";
import { CommandMenuContext } from "@/contexts";

export function useCommandMenu() {
	return useContext(CommandMenuContext);
}
