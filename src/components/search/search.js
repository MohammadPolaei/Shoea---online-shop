import { El } from "../../utils/el";
import { searchNotFound } from "./searchNotFound";
import { GetSearchResults, isFound } from "./searchResults";

export function Search() {
	//search input

	const searchInput = El({
		element: "div",
		classList: "py-8 w-full flex flex-col justify-center items-center relative",
		children: [
			El({
				element: "img",
				src: "/images/search/search.png",
				classList:
					"absolute top-0 right-[82%] bottom-0 left-0 m-auto w-10 opacity-100",
			}),
			El({
				element: "input",
				placeholder: "Search",
				id: "searchInput",
				classList:
					"bg-[#33333306] w-full py-5 px-16 active:outline-1 rounded-xl font-semibold placeholder:text-[#00000060] placeholder:font-normal",
				eventListener: [
					{
						event: "input",
						callback: () => {
							setTimeout(() => {
								// result of input
								console.log(isFound);

								if (document.getElementById("searchResultContainer")) {
									document.getElementById("searchResultContainer").remove();
								}
								if (
									!isFound &&
									document.getElementById("searchInput").value.length > 0
								) {
									document
										.getElementById("searchContainer")
										.append(searchNotFound);
									console.log("notFoundPage");
									return;
								}
								if (document.getElementById("searchInput").value.length < 1) {
									return;
								}
								GetSearchResults(document.getElementById("searchInput").value);
							}, 2000);
						},
					},
				],
			}),
			El({
				element: "img",
				src: "/images/search/options.svg",
				classList:
					"absolute top-0 right-0 bottom-0 left-[82%] m-auto w-8 opacity-100",
			}),
		],
	});

	// data container
	let container;

	// assignment to container - result based on user action

	const dataContainer = El({
		element: "div",
		classList: "w-full h-full",
		id: "searchContainer",
		children: [],
	});

	const search = El({
		element: "div",
		classList: "px-5 flex flex-col items-center justify-start",
		children: [searchInput, dataContainer],
	});

	return search;
}
