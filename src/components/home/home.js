import { El } from "../../utils/el";
import { footerMenu } from "./footerMenu";
import { Header } from "./header";
import { ProductList } from "./productsList";
import { SearchInput } from "./searchInput";

// just for keep in session

// logInData("M8ddUser120", "00950095#M8dd");

export function Home() {
	const home = El({
		element: "div",
		classList: "p-5 flex flex-col gap-5",
		children: [Header(), SearchInput(), ProductList(), footerMenu()],
	});
	return home;
}
