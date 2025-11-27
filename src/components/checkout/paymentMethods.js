import { El } from "../../utils/el";
import { backButton } from "../shared/backButtonOnTop";

export function PaymentMethods() {
	const backbutt = backButton;
	backButton.classList = "relative";

	// title part

	const titlePart = El({
		element: "div",
		classList: "flex flex-row justify-between w-full items-center py-8",
		children: [
			El({
				element: "div",
				classList: "flex flex-row justify-between gap-3 items-center",
				children: [
					backbutt,
					El({
						element: "Div",
						classList: "text-2xl font-semibold",
						innerText: "Payment Methods",
					}),
				],
			}),
		],
	});

	// items
	const myWallet = El({
		element: "div",
		classList:
			"px-2 flex flex-row w-full justify-between items-center shadow-2xl shadow-[#00000010] p-2 rounded-[25px]",
		children: [
			El({
				element: "div",
				classList: "flex flex-row justify-between gap-1 items-center",
				children: [
					El({
						element: "img",
						classList: "w-20",
						src: "/images/checkout/locationIcon.png",
					}),
					El({
						element: "div",
						classList: "flex flex-col gap-1",
						children: [
							El({
								element: "div",
								classList: "font-semibold text-xl",
								innerText: "My Wallet",
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				classList: "flex flex-row items-center",
				children: [
					El({
						element: "div",
						classList: "text-md",
						innerText: "$10",
					}),
					El({
						element: "input",
						type: "radio",
						name: "chooseShipping",
						classList: "scale-[2] bg-black accent-black mx-5",
					}),
				],
			}),
		],
	});

	// container
	const paymentContainer = El({
		element: "div",
		classList: "flex flex-col justify-between gap-8 items-center",
		children: [
			El({
				element: "div",
				classList: "",
				innerText: "Select the payment method you want to use",
			}),
			myWallet,
		],
	});

	// payment container

	const shippingAddressContainer = El({
		element: "div",
		classList: "mx-7 h-screen relative",
		children: [
			titlePart,
			paymentContainer,
			El({
				element: "button",
				classList:
					"absolute top-[90%] bg-black text-white py-4 rounded-[50px] font-semibold w-full shadow-2xl",
				innerText: "Confirm Payment",
				eventListener: [
					{
						event: "click",
						callback: () => {
							const successPayment = El({
								element: "div",
								classList:
									"absolute mx-auto top-20 p-10 flex flex-col justify-between gap-5 items-center backdrop-blur-xs bg-[#33333322] rounded-[50px]",
								children: [
									El({
										element: "img",
										classList: "w-full",
										src: "/images/paymentDone.png",
									}),
									El({
										element: "div",
										classList: "text-2xl font-bold",
										innerText: "Order Successful !",
									}),
									El({
										element: "div",
										classList: "text-md text-[#33333388]",
										innerText: "You have successfully made order !",
									}),
									El({
										element: "button",
										classList:
											"w-full rounded-[50px] bg-black text-white text-xl p-5",
										innerText: "View Order",
									}),
									El({
										element: "button",
										classList:
											"w-full rounded-[50px] bg-[#33333377] text-white text-xl p-5",
										innerText: "OK",
										eventListener: [
											{
												event: "click",
												callback: () => {
													successPayment.remove();
												},
											},
										],
									}),
								],
							});
							shippingAddressContainer.append(successPayment);
						},
					},
				],
			}),
		],
	});

	return shippingAddressContainer;
}
