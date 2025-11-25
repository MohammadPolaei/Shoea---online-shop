import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { footerMenu, homeIcon } from "../shared/footerMenu";
import { Header } from "./header";
import { ProductList } from "./productsList";
import { SearchInput } from "./searchInput";

export function Home() {
	router.getCurrentRoute() == "/home"
		? (homeIcon.src = "/images/homePage/footer/home.svg")
		: (homeIcon.src = "/images/homePage/footer/home-unclicked.svg");
	const home = El({
		element: "div",
		classList: "p-5 flex flex-col gap-5",
		children: [Header(), SearchInput(), ProductList(), footerMenu()],
	});
	return home;
}
