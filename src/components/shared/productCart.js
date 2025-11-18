import { El } from "../../utils/el";

export function ProductCart(prodData) {
	const { imageURL, name, price } = prodData;
	const prodImg = El({
		element: "img",
		src: imageURL,
		classList: "w-full rounded-3xl max-h-47",
	});

	const prodName = El({
		element: "div",
		classList: "font-bold text-xl overflow-hidden h-6",
		innerText: name,
	});
	const prodPrice = El({
		element: "div",
		classList: "text-md",
		innerText: `$ ${price}.00`,
	});
	return El({
		element: "div",
		classList: "w-full flex flex-col gap-2 justify-between",
		children: [prodImg, prodName, prodPrice],
	});
}
