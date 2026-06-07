import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { containerDesign } from "../shared/divCardContainers";
import { cartIcon, footerMenu } from "../shared/footerMenu";
import { CartItems } from "./getCartItems";

export function Cart() {
	router.getCurrentRoute() == "/cart"
		? (cartIcon.src = "/images/homePage/footer/cart.svg")
		: (cartIcon.src = "/images/homePage/footer/cart-unclicked.svg");
	// cart
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
				eventListener: [
					{
						event: "click",
						callback: () => router.navigate("/search"),
					},
				],
			}),
		],
	});

	const cartProductList = El({
		element: "div",
		classList: "flex flex-col gap-5 overflow-y-scroll no-scrollbar h-[53vh]",
		children: CartItems.map((prod) => containerDesign(prod)),
	});

	const checkoutButton = El({
		element: "button",
		classList: "bg-black py-5 rounded-[50px] shadow-2xl w-1/2 text-white",
		innerText: "Checkout",
		eventListener: [
			{
				event: "click",
				callback: () => {
					router.navigate("/checkout");
				},
			},
		],
	});

	let totalPrice = 0;
	CartItems.forEach(
		(data) => (totalPrice += data.sneaker.price * data.quantity)
	);

	const totalPriceAndCheckout = El({
		element: "div",
		classList: "relative h-fit",
		children: [
			El({
				element: "div",
				classList:
					"flex flex-row justify-between p-5 bg-white w-full bg-white border-t-[1px] border-[#33333333] rounded-2xl fixed mx-auto left-0 right-0 bottom-22",
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
								innerText: `$${totalPrice}.00`,
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
		classList: "relative h-screen bg-[#33333305]",
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
