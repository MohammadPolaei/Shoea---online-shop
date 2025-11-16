import { El } from "../../utils/el";
import { Header } from "./header";
import { ProductList } from "./productsList";
import { SearchInput } from "./searchInput";

export function Home() {
	const home = El({
		element: "div",
		classList: "p-5 flex flex-col gap-5",
		children: [Header(), SearchInput(), ProductList()],
	});
	return home;
}
