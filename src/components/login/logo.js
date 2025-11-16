import { El } from "../../utils/el";

const theBlackLogoImage = El({
	element: "img",
	classList: "w-12",
	src: "/images/shared/shoeaBlackLogo.svg",
});

export const theBlackLogo = El({
	element: "div",
	classList: "w-full flex justify-center items-center p-10 my-20",
	children: [theBlackLogoImage],
});
