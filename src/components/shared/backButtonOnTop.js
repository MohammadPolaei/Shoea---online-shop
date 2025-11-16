import { El } from "../../utils/el";

export const backButton = El({
	element: "button",
	classList: "",
	children: [
		El({
			element: "img",
			classList: "w-8",
			src: "/images/shared/arrow-left-short.svg",
		}),
	],
});
