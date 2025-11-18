import { sessionToken } from "../../utils/cookieData";
import { El } from "../../utils/el";
import { baseURL } from "../../utils/URL";
import { ProductCart } from "../shared/productCart";

// category data
async function categoryList() {
	const catList = await fetch(`${baseURL}/sneaker/brands`, {
		headers: {
			Authorization: `Bearer ${sessionToken}`,
		},
	});
	return catList.json();
}
const catList = await categoryList();

// products data

async function productsData() {
	const products = await fetch(`${baseURL}/sneaker?page=1&limit=100`, {
		headers: {
			Authorization: `Bearer ${sessionToken}`,
		},
	});
	return products.json();
}

const productDataList = await productsData();
console.log(productDataList.data);

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

// category part

function categoryListCreate(catName) {
	return El({
		element: "div",
		classList:
			"rounded-[100px] border-2 border-black py-2 px-4 text-xl w-fit h-fit max-h-[47px] capitalize",
		innerText: String(catName).toLowerCase(),
	});
}

export function ProductList() {
	const wholeProductList = El({
		element: "div",
		classList: "flex flex-col gap-5 h-screen",
		children: [
			categoryTitle,
			El({
				element: "div",
				classList: "flex flex-row overflow-scroll gap-3",
				children: catList.map((brand) => categoryListCreate(brand)),
			}),
			El({
				element: "div",
				id: "cartListContainer",
				classList: "w-full h-2/3 grid grid-cols-2 gap-3 overflow-scroll",
				children: productDataList.data.map((prod) => ProductCart(prod)),
			}),
		],
	});

	return wholeProductList;
}
