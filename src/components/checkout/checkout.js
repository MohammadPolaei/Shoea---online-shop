import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { store } from "../../utils/store";
import { CartItems } from "../cart/getCartItems";
import { backButton } from "../shared/backButtonOnTop";

const backbutt = backButton;
backButton.classList = "relative";

// title
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
					innerText: "Checkout",
				}),
			],
		}),
		El({
			element: "img",
			classList: "w-10",
			src: "/images/checkout/moreOptions.png",
		}),
	],
});

// address part

const titleOfAddress = El({
	element: "div",
	classList: "font-semibold text-xl",
	innerText: "Home",
});
const descriptionOfAddress = El({
	element: "div",
	classList: "text-md text-[#33333388]",
	innerText: "addres of the target",
});

const shippingAddress = El({
	element: "div",
	classList: "flex flex-col gap-5 border-b-1 border-[#00000020] pb-8",
	eventListener: [
		{
			event: "click",
			callback: () => {
				router.navigate("/checkout/shippingaddress");
			},
		},
	],
	children: [
		El({
			element: "div",
			classList: "text-xl font-bold",
			innerText: "Shipping Address",
		}),
		El({
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
							children: [titleOfAddress, descriptionOfAddress],
						}),
					],
				}),
				El({
					element: "img",
					classList: "w-6",
					src: "/images/checkout/editIcon.png",
				}),
			],
		}),
	],
});
store.subscribe("address", (data) => {
	titleOfAddress.innerText = data.title;
	descriptionOfAddress.innerText = data.description;
});
// order list
let totalPrice;
const orderListContainer = El({
	element: "div",
	classList:
		"flex flex-col gap-5 justify-between border-b-1 border-[#00000020] pb-8",
	children: [
		El({
			element: "div",
			classList: "text-xl font-bold pt-5",
			innerText: "Order List",
		}),
		El({
			element: "div",
			classList: "flex flex-col justify-between gap-3",
			children: CartItems.error
				? []
				: CartItems.map((item) => {
						const { quantity, sneaker } = item;
						const { imageURL, name, colors, sizes, price } = sneaker;
						totalPrice = price * quantity;

						const image = El({
							element: "img",
							classList: "w-30 h-30 rounded-2xl",
							src: imageURL,
						});
						const quantityPart = El({
							element: "div",
							classList: "text-md font-semibold",
							innerText: `${quantity}`,
						});

						return El({
							element: "div",
							classList:
								"p-5 rounded-3xl bg-white box-border shadow-2xl shadow-[#00000010] active:shadow-xl",
							children: [
								El({
									element: "div",
									classList: "flex flex-row gap-3 items-center",
									children: [
										image,
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
														"flex flex-row justify-between w-50 items-center",
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
																		"bg-[#ebebec99] px-4 py-2 rounded-[100%]",
																	children: [quantityPart],
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
				  }),
		}),
	],
});

// choose shipping
const chooseShippingTitle = El({
	element: "div",
	classList: "text-md font-bold",
	innerText: "Choose Shipping Type",
});

const chooseShipping = El({
	element: "div",
	classList: "flex flex-col gap-3 pt-8 pb-8 border-b-1 border-[#00000020]",
	children: [
		El({
			element: "div",
			classList: "text-xl font-bold",
			innerText: "Choose Shipping",
		}),
		El({
			element: "div",
			eventListener: [
				{
					event: "click",
					callback: () => {
						router.navigate("/checkout/shippingtype");
					},
				},
			],
			classList:
				"flex flex-row justify-between items-center w-full p-5 rounded-2xl shadow-2xl shadow-[#00000010] ",
			children: [
				El({
					element: "div",
					classList: "flex flex-row justify-between items-center gap-3",
					children: [
						El({
							element: "img",
							classList: "w-8",
							src: "/images/checkout/shippingIcon.png",
						}),
						chooseShippingTitle,
					],
				}),
				El({
					element: "img",
					classList: "w-2 h-4",
					src: "/images/checkout/toGo.png",
				}),
			],
		}),
	],
});

// promo code
const amountPrice = El({
	element: "div",
	classList: "",
	innerText: "Price",
});

const promoCode = El({
	element: "div",
	classList: "flex flex-col justify-between gap-3 py-8",
	children: [
		El({
			element: "div",
			classList: "text-xl font-bold ",
			innerText: "Promo Code",
		}),
		El({
			element: "div",
			classList: "flex flex-row gap-5 items-center justify-between w-full",
			children: [
				El({
					element: "div",
					classList: "w-full",
					id: "discountContainer",
					children: [
						El({
							element: "input",
							classList:
								"bg-[#fafafb] w-full p-5 placeholder:text-[#33333388] rounded-2xl",
							placeholder: "Enter Promo Code",
						}),
					],
				}),
				El({
					element: "button",
					classList:
						"bg-black p-5 rounded-[100%] w-15 h-15 flex flex-row justify-center items-center text-white text-2xl",
					innerText: "+",
				}),
			],
		}),
		El({
			element: "div",
			classList: "p-8 flex flex-col w-full shadow-2xl shadow-[#00000010]",
			children: [
				El({
					element: "div",
					classList:
						"flex flex-col justify-between gap-5 border-b-1 border-[#00000020] pb-8",
					children: [
						El({
							element: "div",
							classList: "flex flex-row justify-between w-full items-center",
							children: [
								El({
									element: "div",
									classList: "text-[#33333388]",
									innerText: "Amount",
								}),
								amountPrice,
							],
						}),
						El({
							element: "div",
							classList: "flex flex-row justify-between w-full items-center",
							children: [
								El({
									element: "div",
									classList: "text-[#33333388]",
									innerText: "Shipping",
								}),
								El({
									element: "div",
									classList: "",
									innerText: "-",
								}),
							],
						}),
					],
				}),
				El({
					element: "div",
					classList: "flex flex-row justify-between w-full items-center pt-8",
					children: [
						El({
							element: "div",
							classList: "text-[#33333388]",
							innerText: "Total",
						}),
						El({
							element: "div",
							classList: "",
							innerText: `$${totalPrice}.00`,
						}),
					],
				}),
			],
		}),
	],
});

// submit button

const submitButton = El({
	element: "div",
	classList: "py-8",
	children: [
		El({
			element: "button",
			classList: "w-full bg-black rounded-[50px] py-5 text-white  text-md",
			innerText: "Continue to Payment",
		}),
	],
	eventListener: [
		{
			event: "click",
			callback: () => {
				router.navigate("/checkout/payment");
			},
		},
	],
});

export function CheckOut() {
	const checkOutContainer = El({
		element: "div",
		classList: "mx-5",
		children: [
			titlePart,
			shippingAddress,
			orderListContainer,
			chooseShipping,
			promoCode,
			submitButton,
		],
	});
	store.subscribe("shippingType", (value) => {
		console.log(value[0]);

		chooseShippingTitle.innerText = value[0];
	});
	return checkOutContainer;
}
