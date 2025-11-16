import { El } from "../../utils/el";
import { Header } from "./header";

export function Home() {
	const home = El({
		element: "div",
		classList: "",
		children: [Header()],
	});
	return home;
}
