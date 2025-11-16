import { El } from "../../utils/el";

const homeIcon = El({
	element: "img",
	src: "/images/homePage/footer/home.svg",
	classList: "w-8",
});
const cartIcon = El({
	element: "img",
	src: "/images/homePage/footer/cart.svg",
	classList: "w-8",
});
const ordersIcon = El({
	element: "img",
	src: "/images/homePage/footer/orders.svg",
	classList: "w-8",
});
const walletIcon = El({
	element: "img",
	src: "/images/homePage/footer/wallet.svg",
	classList: "w-8",
});
const profileIcon = El({
	element: "img",
	src: "/images/homePage/footer/profile.svg",
	classList: "w-8",
});

export function footerMenu() {
	const footer = El({
		element: "div",
		classList:
			"fixed w-screen left-0 bottom-0 py-8 flex flex-row items-center justify-evenly gap-1",
		children: [homeIcon, cartIcon, ordersIcon, walletIcon, profileIcon],
	});
	return footer;
}
