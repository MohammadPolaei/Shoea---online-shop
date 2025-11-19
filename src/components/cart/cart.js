import { El } from "../../utils/el";
import { footerMenu } from "../shared/footerMenu";

export function Cart() {
	// console.log(CartItems);
	const logo = El({
		element: "img",
		classList: "w-8",
		src: "/images/cart/logo.svg",
	});

	const header = El({
		element: "div",
		classList: "flex flex-row justify-between py-5",
		children: [
			El({
				element: "div",
				classList: "flex flex-row gap-3 items-center",
				children: [
					logo,
					El({
						element: "div",
						classList: "text-xl font-semibold",
						innerText: "My Cart",
					}),
				],
			}),
			El({
				element: "img",
				classList: "w-16 h-16",
				src: "/images/cart/search.png",
			}),
		],
	});

	const cartProductList = El({
		element: "div",
		classList:
			"flex flex-col gap-5 overflow-y-scroll no-scrollbar border-1 h-2/3",
	});

	const checkoutButton = El({
		element: "button",
		classList: "bg-black py-5 rounded-[50px] shadow-2xl w-2/3 text-white",
		innerText: "Checkout",
		eventListener: [
			{
				event: "click",
				callback: () => {},
			},
		],
	});

	const totalPriceAndCheckout = El({
		element: "div",
		classList: "absolute mx-auto top-[78%] left-0 right-0 bottom-0",
		children: [
			El({
				element: "div",
				classList: "flex flex-row justify-between p-5",
				children: [
					El({
						element: "div",
						classList: "flex flex-col gap-2",
						children: [
							El({
								element: "div",
								classList: "text-[#33333388] text-sm",
								innerText: "Total price",
							}),
							El({
								element: "div",
								classList: "text-2xl font-semibold",
								innerText: `$150.22`,
							}),
						],
					}),
					checkoutButton,
				],
			}),
		],
	});

	const cartContainer = El({
		element: "div",
		classList: "relative h-screen ",
		children: [
			El({
				element: "div",
				classList: "flex flex-col mx-5 gap-5 ",
				children: [header],
			}),
			cartProductList,
			totalPriceAndCheckout,
			footerMenu(),
		],
	});

	return cartContainer;
}
