import { El } from "../../utils/el";
import { removeItemFromCart } from "../cart/removeProductFromCart";

export function containerDesign(selectedProductData) {
	const { id, quantity, sneaker } = selectedProductData;
	const { imageURL, name, colors, sizes, price } = sneaker;

	// img part
	const image = El({
		element: "img",
		classList: "w-30 h-30 rounded-2xl",
		src: imageURL,
	});
	// colors and size
	// const sizeData = sizes.split("|");
	// const colorsData = colors.split("|");
	// remove icon
	const removeIcon = El({
		element: "img",
		classList: "w-8",
		src: "/images/ProductContainer/removeIcon.png",
		eventListener: [
			{
				event: "click",
				callback: () => {
					container.append(removeModal);
				},
			},
		],
	});
	// remove module - from cart
	const removeModal = El({
		element: "div",
		id: "removeModal",
		classList:
			"w-screen h-screen fixed inset-0 z-50 bg-[#00000055] backdrop-blur-xs ",
		children: [
			El({
				element: "div",
				classList:
					"fixed flex flex-col items-center h-2/5 top-[60%] z-50 bg-[#fbfbfb] rounded-t-[10%] w-full",
				children: [
					El({
						element: "div",
						classList: "py-5 text-xl font-semibold",
						innerText: "Remove From Cart ?",
					}),
					El({
						element: "div",
						classList: "border-y-1 border-[#33333320] py-5",
						children: [
							El({
								element: "div",
								classList: "p-5 rounded-3xl bg-white box-border mx-7 ",
								children: [
									El({
										element: "div",
										classList: "flex flex-row gap-3 items-center",
										children: [
											El({
												element: "img",
												classList: "w-30 h-30 rounded-2xl ",
												src: imageURL,
											}),
											El({
												element: "div",
												classList:
													"flex flex-col gap-3 justify-between items-left",
												children: [
													El({
														element: "div",
														classList:
															"flex flex-row justify-between items-center",
														children: [
															El({
																element: "div",
																classList:
																	"font-bold text-md h-5 overflow-hidden",
																innerText: name,
															}),
															removeIcon,
														],
													}),
													El({
														element: "div",
														classList: "flex flex-row gap-2 items-center",
														children: [
															El({
																element: "div",
																classList: "rounded-[100%] w-5 h-5 bg-black",
															}),
															El({
																element: "div",
																classList: "text-sm text-[#333333cc]",
																// set color and size [index] for just default show
																innerText: `${colors[0]} | Size = ${sizes[0]}`,
															}),
														],
													}),
													El({
														element: "div",
														classList:
															"flex flex-row justify-between gap-5 items-center",
														children: [
															El({
																element: "div",
																classList: "font-bold",
																innerText: `$${price}.00`,
															}),
															El({
																element: "div",
																classList:
																	"flex flex-row justify-start items-center gap-3",
																children: [
																	El({
																		element: "div",
																		classList:
																			"flex flex-row items-center gap-5 bg-[#ebebec99] px-4 py-2 rounded-3xl",
																		children: [
																			El({
																				element: "button",
																				classList: "text-xl",
																				innerText: "-",
																			}),
																			El({
																				element: "div",
																				classList: "text-md font-semibold",
																				innerText: `${quantity}`,
																			}),
																			El({
																				element: "button",
																				classList: "text-xl",
																				innerText: "+",
																			}),
																		],
																	}),
																],
															}),
														],
													}),
												],
											}),
										],
									}),
								],
							}),
						],
					}),

					El({
						element: "div",
						classList: "flex flex-row justify-between gap-3 py-5",
						children: [
							El({
								element: "button",
								classList: "bg-[#33333333] w-50 rounded-[50px] py-5 text-sm",
								innerText: "Cancel",
								eventListener: [
									{
										event: "click",
										callback: () => {
											document.getElementById("removeModal").remove();
										},
									},
								],
							}),
							El({
								element: "button",
								classList:
									"bg-[#000000] w-50 shadow-xl text-white rounded-[50px] py-5 text-sm",
								innerText: "Yes, Remove",
								eventListener: [
									{
										event: "click",
										callback: () => {
											removeItemFromCart(id);
											document.getElementById("removeModal").remove();
											location.reload();
										},
									},
								],
							}),
						],
					}),
				],
			}),
		],
	});

	// container

	let quantityValueOfCart = El({
		element: "div",
		classList: "text-md font-semibold",
		innerText: `${quantity}`,
	});

	const container = El({
		element: "div",
		classList: "p-5 rounded-3xl bg-white box-border mx-7 active:shadow-xl",
		children: [
			El({
				element: "div",
				classList: "flex flex-row gap-3 items-center",
				children: [
					image,
					El({
						element: "div",
						classList: "flex flex-col gap-3 justify-between items-left",
						children: [
							El({
								element: "div",
								classList: "flex flex-row justify-between items-center",
								children: [
									El({
										element: "div",
										classList: "font-bold text-md h-5 overflow-hidden",
										innerText: name,
									}),
									removeIcon,
								],
							}),
							El({
								element: "div",
								classList: "flex flex-row gap-2 items-center",
								children: [
									El({
										element: "div",
										classList: "rounded-[100%] w-5 h-5 bg-black",
									}),
									El({
										element: "div",
										classList: "text-sm text-[#333333cc]",
										// set color and size [index] for just default show
										innerText: `${colors[0]} | Size = ${sizes[0]}`,
									}),
								],
							}),
							El({
								element: "div",
								classList: "flex flex-row justify-between w-50 items-center",
								children: [
									El({
										element: "div",
										classList: "font-bold",
										innerText: `$${price}.00`,
									}),
									El({
										element: "div",
										classList: "flex flex-row justify-start items-center gap-3",
										children: [
											El({
												element: "div",
												classList:
													"flex flex-row items-center gap-5 bg-[#ebebec99] px-4 py-2 rounded-3xl",
												children: [
													El({
														element: "button",
														classList: "text-xl",
														innerText: "-",
														eventListener: [
															{
																event: "click",
																callback: () => {
																	if (quantityValueOfCart.innerText <= 1) {
																		return;
																	}
																	quantityValueOfCart.innerText--;
																},
															},
														],
													}),
													quantityValueOfCart,
													El({
														element: "button",
														classList: "text-xl",
														innerText: "+",
														eventListener: [
															{
																event: "click",
																callback: () => {
																	quantityValueOfCart.innerText++;
																},
															},
														],
													}),
												],
											}),
										],
									}),
								],
							}),
						],
					}),
				],
			}),
		],
	});
	return container;
}
