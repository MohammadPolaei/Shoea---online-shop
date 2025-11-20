import { El } from "../../utils/el";

export const searchNotFound = El({
	element: "div",
	classList: "flex flex-col justify-start items-center w-full h-[100%]",
	children: [
		El({
			element: "div",
			classList: "flex flex-row justify-between w-full items-center pb-8",
			children: [
				El({
					element: "div",
					classList: "text-xl font-bold",
					innerText: `Results for "afdgadgad"`,
				}),
				El({
					element: "div",
					classList: "text-md font-semibold",
					innerText: "0 Found",
				}),
			],
		}),
		El({
			element: "div",
			classList:
				"flex flex-col gap-5 justify-center items-center m-auto h-full py-20",
			children: [
				El({
					element: "img",
					classList: "w-2/3",
					src: "/images/search/notFound.png",
				}),
				El({
					element: "div",
					classList: "flex flex-col gap-3 items-center text-center",
					children: [
						El({
							element: "div",
							classList: "text-xl font-semibold",
							innerText: "Not Found",
						}),
						El({
							element: "div",
							classList: "text-md text-[#333333aa]",
							innerText:
								"Sorry, the keyword you entered cannot be found, please check again or search with another keyword.",
						}),
					],
				}),
			],
		}),
	],
});
