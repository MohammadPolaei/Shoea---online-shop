import { El } from "../../utils/el";
import { router } from "../../utils/router";

export const homeIcon = El({
	element: "img",
	src: "/images/homePage/footer/home-unclicked.svg",
	classList: "w-8",
	eventListener: [
		{
			event: "click",
			callback: () => {
				router.navigate("/home");
				cartIcon.src = "/images/homePage/footer/cart-unclicked.svg";
			},
		},
	],
});
export const cartIcon = El({
	element: "img",
	src: "/images/homePage/footer/cart-unclicked.svg",
	classList: "w-8",
	eventListener: [
		{
			event: "click",
			callback: () => {
				homeIcon.src = "/images/homePage/footer/home-unclicked.svg";
				router.navigate("/cart");
			},
		},
	],
});
export const ordersIcon = El({
	element: "img",
	src: "/images/homePage/footer/orders-unclicked.svg",
	classList: "w-8",
});
export const walletIcon = El({
	element: "img",
	src: "/images/homePage/footer/wallet-unclicked.svg",
	classList: "w-8",
});
export const profileIcon = El({
	element: "img",
	src: "/images/homePage/footer/profile-unclicked.svg",
	classList: "w-8",
});

export function footerMenu() {
	const footer = El({
		element: "div",
		classList:
			"fixed w-screen left-0 bottom-0 py-8 flex flex-row items-center justify-evenly gap-1 bg-white rounded-3xl",
		children: [homeIcon, cartIcon, ordersIcon, walletIcon, profileIcon],
	});
	return footer;
}
