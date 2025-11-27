import { El } from "../../utils/el";
import { store } from "../../utils/store";

const theText = El({
	element: "div",
	innerText: `${store.getState("recentSearch") || "Recent Search Here"}`,
});

const userInputSearchForRecents = El({
	element: "div",
	classList: "flex flex-row justify-between items-center w-full",
	children: [
		theText,
		El({
			element: "img",
			classList: "w-8",
			src: "/images/search/delete.png",
		}),
	],
});
export const recentSearchContainer = El({
	element: "div",
	classList: "w-full flex flex-col gap-8 text-[#33333388] text-xl pt-8",
	children: [userInputSearchForRecents],
});

export const recentSearch = El({
	element: "div",
	classList: "flex flex-col w-full",
	children: [
		El({
			element: "div",
			classList:
				"flex flex-row justify-between w-full items-center pb-8 border-b-1 border-[#33333322]",
			children: [
				El({
					element: "div",
					classList: "text-xl font-bold",
					innerText: "Recent",
				}),
				El({
					element: "button",
					classList: "text-md font-semibold",
					innerText: "Clear All",
				}),
			],
		}),
		recentSearchContainer,
	],
});

store.subscribe("recentSearch", (value) => {
	theText.innerText = value;
});
