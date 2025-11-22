import { El } from "../../utils/el";
import { backButton } from "../shared/backButtonOnTop";
export function ShippingType() {
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
						innerText: "Choose Shipping",
					}),
				],
			}),
		],
	});

	// items
	const economy = El({
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
								innerText: "Economy",
							}),
							El({
								element: "div",
								classList: "text-sm text-[#33333388]",
								innerText: "Estimated Arrival ,Dec 20-23",
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
						classList: "font-semibold text-xl",
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
	const regular = El({
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
								innerText: "Regular",
							}),
							El({
								element: "div",
								classList: "text-sm text-[#33333388]",
								innerText: "Estimated Arrival ,Dec 20-22",
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
						classList: "font-semibold text-xl",
						innerText: "$15",
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
	const cargo = El({
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
								innerText: "Cargo",
							}),
							El({
								element: "div",
								classList: "text-sm text-[#33333388]",
								innerText: "Estimated Arrival ,Dec 19-20",
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
						classList: "font-semibold text-xl",
						innerText: "$20",
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
	const express = El({
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
								innerText: "Express",
							}),
							El({
								element: "div",
								classList: "text-sm text-[#33333388]",
								innerText: "Estimated Arrival ,Dec 18-19",
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
						classList: "font-semibold text-xl",
						innerText: "$30",
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

	// address container

	const shippingContainer = El({
		element: "div",
		classList: "flex flex-col justify-between gap-8 items-center",
		children: [economy, regular, cargo, express],
	});

	// container

	const shippingTypeContainer = El({
		element: "div",
		classList: "mx-7 h-screen relative",
		children: [
			titlePart,
			shippingContainer,
			El({
				element: "button",
				classList:
					"absolute top-[90%] bg-black text-white py-4 rounded-[50px] font-semibold w-full shadow-2xl",
				innerText: "Apply",
			}),
		],
	});

	return shippingTypeContainer;
}
