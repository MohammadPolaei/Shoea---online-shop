import { El } from "../../utils/el";

// must get infos from selected product and its data which saved in LOCALSTORAGE
// then put it in this function to show as a card in cart

export function containerDesign(selectedProductData) {
	// const { imageURL, name, colors, sizes, price } = selectedProductData;
	// img part
	const image = El({
		element: "img",
		classList: "w-20",
		src: "/images/ProductContainer/removeIcon.png",
	});
	// colors and size
	// const sizeData = sizes.split("|");
	// const colorsData = colors.split("|");
	// remove icon
	const removeIcon = El({
		element: "img",
		classList: "w-8 absolute right-10 top-10",
		src: "/images/ProductContainer/removeIcon.png",
	});

	const container = El({
		element: "div",
		classList: "p-10 rounded-3xl shadow-xl box-border mx-7",
		children: [
			El({
				element: "div",
				classList: "flex flex-row gap-3",
				children: [
					image,
					El({
						element: "div",
						classList: "flex flex-col gap-3 justify-between items-left",
						children: [
							El({
								element: "div",
								classList: "relative",
								children: [
									El({
										element: "div",
										classList: "font-bold text-md",
										innerText: "Product Name",
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
										innerText: `Black | Size = 42`,
									}),
								],
							}),
							El({
								element: "div",
								classList: "flex flex-row justify-between gap-5 items-center",
								children: [
									El({
										element: "div",
										classList: "font-bold",
										innerText: "$140.00",
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
													}),
													El({
														element: "div",
														classList: "text-md font-semibold",
														innerText: "1",
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
									removeIcon,
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
