import { El } from "../../utils/el";
import { baseURL } from "../../utils/URL";

// category data

async function productsData() {
	const products = await fetch(`${baseURL}/sneaker?page=1&limit=100`);
	return products.json();
}

// UI design
const categoryTitle = El({
	element: "div",
	classList: "text-2xl font-semibold",
	children: [
		El({
			element: "div",
			innerText: "Most Popular",
		}),
	],
});

const categories = El({
	element: "div",
	classList: "rounded-3xl border-2 border-black py-2 px-4 text-xl w-fit",
	innerText: "All",
});

export function ProductList() {
	const wholeProductList = El({
		element: "div",
		classList: "flex flex-col gap-5 ",
		children: [categoryTitle, categories],
	});
	console.log(productsData());
	return wholeProductList;
}
