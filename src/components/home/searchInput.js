import { El } from "../../utils/el";
import { router } from "../../utils/router";

const searchIconInput = El({
	element: "img",
	classList: "w-5 absolute left-2 top-2",
	src: "/images/homePage/search/search.svg",
});

const searchInp = El({
	element: "input",
	classList:
		"w-full bg-[#FAFAFA] px-5 py-2 rounded-[5px] outline-0 font-bold pl-8 focus:outline-2 placeholder:text-[#BAB8BC] placeholder:font-normal",
	placeholder: "Search",
	eventListener: [
		{
			event: "click",
			callback: () => {
				router.navigate("/search");
			},
		},
	],
});

export function SearchInput() {
	const search = El({
		element: "div",
		classList: "relative",
		children: [searchInp, searchIconInput],
	});
	return search;
}
