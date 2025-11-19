import { El } from "../../utils/el";
import { backButton } from "../shared/backButtonOnTop";
import { getProductDetails } from "./productDetails";

// getting data

function productPageCreator(productKeys) {
	const { name, imageURL, colors, sizes, price } = productKeys;

	const backButt = backButton;

	const imageSection = El({
		element: "img",
		classList: "w-full h-full",
		src: imageURL,
	});
	const titleAndName = El({
		element: "div",
		classList: "flex flex-col gap-3 border-b-[1px] border-[#33333322] pb-5",
		children: [
			El({
				element: "div",
				classList: "text-2xl font-bold overflow-hidden h-10 ",
				innerText: name,
			}),
			El({
				element: "div",
				classList: "flex flex-row items-center justify-start gap-3",
				children: [
					El({
						element: "div",
						classList: "px-3 py-2 bg-[#ebebec] text-[12px] rounded-md",
						innerText: "5,371 sold",
					}),
					El({
						element: "img",
						src: "/images/ProductDetails/ratingIcon.svg",
						classList: "w-5",
					}),
					El({
						element: "div",
						classList: "text-[#333333]",
						innerText: "4.3 (5,389 reviews)",
					}),
				],
			}),
		],
	});

	const descriptionPart = El({
		element: "div",
		classList: "flex flex-col gap-2",
		children: [
			El({
				element: "div",
				classList: "text-md font-semibold",
				innerText: "Description",
			}),
			El({
				element: "div",
				classList: "h-12 overflow-scroll no-scrollbar text-[#333333cc]",
				innerText:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sed quas natus voluptatum ipsa doloremque reprehenderit assumenda commodi earum deserunt",
			}),
		],
	});
	const colorData = colors.split("|");

	const sizeData = sizes.split("|");

	const sizeAndColorOptions = El({
		element: "div",
		classList: "flex flex-row gap-3 justify-start items-center w-full",
		children: [
			El({
				element: "div",
				classList: "flex flex-col w-1/2 justify-start gap-3 items-left",
				children: [
					El({
						element: "div",
						classList: "font-bold text-md",
						innerText: "Size",
					}),
					El({
						element: "div",
						classList:
							"flex flex-row gap-3 w-full overflow-scroll no-scrollbar",
						children: sizeData.map((size) => {
							return El({
								element: "div",
								classList: `rounded-[100%] text-sm w-3 h-3 flex items-center justify-center border-2 border-[#333333cc] p-4 text-center`,
								innerText: size,
							});
						}),
					}),
				],
			}),
			El({
				element: "div",
				classList: "flex flex-col justify-start gap-3 items-left w-1/2",
				children: [
					El({
						element: "div",
						classList: "font-bold text-md",
						innerText: "Color",
					}),
					El({
						element: "div",
						classList: "flex flex-row gap-3 overflow-scroll no-scrollbar",
						children: colorData.map((col) => {
							let colo;
							switch (col) {
								case "black":
									colo = "#000000";
									break;
								case "brown":
									colo = "#964B00";
									break;
								case "white":
									colo = "#ffffff";
									break;
								case "blue":
									colo = "#0000FF";
									break;
								case "red":
									colo = "#ff0000";
									break;

								default:
									colo = "#00000000";
									break;
							}
							return El({
								element: "div",
								classList: `rounded-[100%] bg-[${colo}] p-5`,
							});
						}),
					}),
				],
			}),
		],
	});

	const quantity = El({
		element: "div",
		classList: "flex flex-row justify-start items-center gap-3",
		children: [
			El({
				element: "div",
				classList: "text-md font-semibold",
				innerText: "Quantity",
			}),
			El({
				element: "div",
				classList:
					"flex flex-row items-center gap-5 bg-[#ebebec99] px-4 py-2 rounded-3xl",
				children: [
					El({
						element: "button",
						classList: "text-2xl",
						innerText: "-",
					}),
					El({
						element: "div",
						classList: "text-md font-semibold",
						innerText: "num",
					}),
					El({
						element: "button",
						classList: "text-2xl",
						innerText: "+",
					}),
				],
			}),
		],
	});

	const footer = El({
		element: "div",
		classList:
			"flex flex-row h-full border-t-1 border-[#33333322] items-center justify-start gap-8",
		children: [
			El({
				element: "div",
				classList: "flex flex-col w-1/3 justify-start",
				children: [
					El({
						element: "div",
						classList: "text-sm text-[#33333388]",
						innerText: "Total price",
					}),
					El({
						element: "div",
						classList: "text-2xl font-semibold",
						innerText: `$${price}.00`,
					}),
				],
			}),
			El({
				element: "button",
				classList:
					"w-full px-4 py-4 text-center text-white shadow-xl bg-black rounded-[80px]",
				innerText: "Add to Cart",
				eventListener: [
					{
						event: "click",
						callback: () => {},
					},
				],
			}),
		],
	});

	const productSection = El({
		element: "div",
		classList: "flex flex-col gap-3 h-screen",
		children: [
			El({
				element: "div",
				classList: "relative h-1/2",
				children: [backButt, imageSection],
			}),
			El({
				element: "div",
				classList: "h-1/2 flex flex-col gap-2 mx-6",
				children: [
					titleAndName,
					descriptionPart,
					sizeAndColorOptions,
					quantity,
					footer,
				],
			}),
		],
	});
	return productSection;
}
const containerOfProduct = El({
	element: "div",
});
export function ProductPage(prodID) {
	getProductDetails(prodID).then((res) =>
		containerOfProduct.append(productPageCreator(res))
	);
	return containerOfProduct;
}
