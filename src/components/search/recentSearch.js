import { El } from "../../utils/el";

const mockText = El({
	element: "div",
	classList: "flex flex-row justify-between items-center w-full",
	children: [
		El({
			element: "div",
			innerText: "Nike Somebrand model 123",
		}),
		El({
			element: "img",
			classList: "w-8",
			src: "/images/search/delete.png",
		}),
	],
});
const mockText2 = El({
	element: "div",
	classList: "flex flex-row justify-between items-center w-full",
	children: [
		El({
			element: "div",
			innerText: "Puma Somebrand model 345",
		}),
		El({
			element: "img",
			classList: "w-8",
			src: "/images/search/delete.png",
		}),
	],
});
const mockText3 = El({
	element: "div",
	classList: "flex flex-row justify-between items-center w-full",
	children: [
		El({
			element: "div",
			innerText: "Nike Somebrand model 789",
		}),
		El({
			element: "img",
			classList: "w-8",
			src: "/images/search/delete.png",
		}),
	],
});

export const recentSearch = El({
	element: "div",
	classList: "flex flex-col",
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
		El({
			element: "div",
			classList: "flex flex-col gap-8 text-[#33333388] text-xl pt-8",
			children: [mockText, mockText2, mockText3],
		}),
	],
});
