import { El } from "../../utils/el";
import { store } from "../../utils/store";
import { backButton } from "../shared/backButtonOnTop";
import { SuccessModal } from "../shared/successMessageModal";

export function ShippingAddresPage() {
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
						innerText: "Shipping Address",
					}),
				],
			}),
		],
	});

	// address container
	const addressContainer = El({
		element: "div",
		classList: "flex flex-col justify-between gap-8 items-center",
		children: [
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
								children: [
									El({
										element: "div",
										classList: "font-semibold text-xl",
										innerText: "Home",
									}),
									El({
										element: "div",
										classList: "text-md text-[#33333388]",
										innerText: "Description of Address",
									}),
								],
							}),
						],
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

	const addressTitleInput = El({
		element: "input",
		classList: "bg-[#33333322] p-3 w-full placeholder:text-[#33333388]",
		placeholder: "Address title",
	});
	const addressDescriptionInput = El({
		element: "input",
		classList: "bg-[#33333322] p-3 w-full placeholder:text-[#33333388]",
		placeholder: "Address description",
	});

	const addressTitleOfNewItem = El({
		element: "div",
		classList: "font-semibold text-xl",
		innerText: "Home",
	});

	const addressDescriptionOfNewTitle = El({
		element: "div",
		classList: "text-md text-[#33333388]",
		innerText: "addres of the target",
	});

	// container

	const shippingAddressContainer = El({
		element: "div",
		classList: "mx-7 h-screen relative overflow-scroll no-scrollbar",
		children: [
			titlePart,
			addressContainer,
			El({
				element: "div",
				classList: "py-8 absolute mx-auto w-full bottom-20",
				children: [
					El({
						element: "button",
						classList:
							"w-full bg-[#33333322] py-4 rounded-[50px] font-semibold",
						innerText: "Add New Address",
						eventListener: [
							{
								event: "click",
								callback: () => {
									const modal = El({
										element: "div",
										classList:
											"w-full p-10 flex flex-col justify-between gap-5 items-center absolute mx-auto top-[50%] border-1 border-[#33333322] rounded-2xl",
										children: [
											addressTitleInput,
											addressDescriptionInput,
											El({
												element: "button",
												classList: "bg-black p-3 rounded-2xl text-white",
												innerText: "Add to Address List",
												eventListener: [
													{
														event: "click",
														callback: () => {
															store.setState("address", {
																title: addressTitleInput.value,
																description: addressDescriptionInput.value,
															});
															SuccessModal("Address added !");
															modal.remove();

															addressTitleOfNewItem.innerText =
																addressTitleInput.value;
															addressDescriptionOfNewTitle.innerText =
																addressDescriptionInput.value;
															// new item
															const newItem = El({
																element: "div",
																classList:
																	"flex flex-col justify-between gap-8 items-center",
																children: [
																	El({
																		element: "div",
																		classList:
																			"px-2 flex flex-row w-full justify-between items-center shadow-2xl shadow-[#00000010] p-2 rounded-[25px]",
																		children: [
																			El({
																				element: "div",
																				classList:
																					"flex flex-row justify-between gap-1 items-center",
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
																							addressTitleOfNewItem,
																							addressDescriptionOfNewTitle,
																						],
																					}),
																				],
																			}),
																			El({
																				element: "input",
																				type: "radio",
																				name: "chooseShipping",
																				classList:
																					"scale-[2] bg-black accent-black mx-5",
																			}),
																		],
																	}),
																],
															});
															shippingAddressContainer.appendChild(newItem);
														},
													},
												],
											}),
										],
									});
									shippingAddressContainer.append(modal);
								},
							},
						],
					}),
				],
			}),
			El({
				element: "button",
				classList:
					"absolute top-[90%] bg-black text-white py-4 rounded-[50px] font-semibold w-full shadow-2xl",
				innerText: "Apply",
			}),
		],
	});

	return shippingAddressContainer;
}
