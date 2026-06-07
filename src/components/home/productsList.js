import { El } from "../../utils/el";
import { catList } from "../products/categoryList";
import { productDataList, productsData } from "../products/productsData";
import { ProductCard } from "../shared/ProductCard";

try {
	catList.unshift("All");
} catch (err) {
	console.log(err);
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

// category part

function categoryListCreate(catName) {
	return El({
		element: "div",
		classList:
			catName == "All"
				? "rounded-[100px] border-2 border-black py-2 px-4 text-xl w-fit h-fit max-h-[47px] capitalize bg-black text-white"
				: "rounded-[100px] border-2 border-black py-2 px-4 text-xl w-fit h-fit max-h-[47px] capitalize",
		innerText: String(catName).toLowerCase(),
		id: `brand_${String(catName)}`,
		eventListener: [
			{
				event: "click",
				callback: () => {
					const catlistContainer = document.getElementById(
						"categoryListContainer"
					).children;

					Array.from(catlistContainer).forEach(
						(item) =>
							(item.classList =
								"rounded-[100px] border-2 border-black py-2 px-4 text-xl w-fit h-fit max-h-[47px] capitalize")
					);

					document.getElementById(`brand_${String(catName)}`).classList =
						"rounded-[100px] border-2 border-black py-2 px-4 text-xl w-fit h-fit max-h-[47px] capitalize bg-black text-white";

					if (String(catName) == "All") {
						Array.from(
							document.getElementById("cartListContainer").children
						).forEach((item) => item.remove());

						productsData().then((res) => {
							res.data.forEach((prod) => {
								document
									.getElementById("cartListContainer")
									.appendChild(ProductCard(prod));
							});
						});
						return;
					}
					Array.from(
						document.getElementById("cartListContainer").children
					).forEach((item) => item.remove());

					productsData("&brands=" + String(catName)).then((res) => {
						res.data.forEach((prod) => {
							document
								.getElementById("cartListContainer")
								.appendChild(ProductCard(prod));
						});
					});
				},
			},
		],
	});
}

export function ProductList() {
	const wholeProductList = El({
		element: "div",
		classList: "flex flex-col gap-5 h-[70vh]",
		children: [
			categoryTitle,
			El({
				element: "div",
				classList:
					"flex flex-row overflow-x-scroll overflow-y-hidden gap-3 no-scrollbar",
				id: "categoryListContainer",
				children: catList.error
					? []
					: catList.map((brand) => categoryListCreate(brand)),
			}),
			El({
				element: "div",
				id: "cartListContainer",
				classList:
					"w-full h-2/3 grid grid-cols-2 gap-3 overflow-scroll no-scrollbar",
				children: productDataList.error
					? []
					: productDataList.data.map((prod) => ProductCard(prod)),
			}),
		],
	});

	return wholeProductList;
}
