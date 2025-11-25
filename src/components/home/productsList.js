import { El } from "../../utils/el";
import { catList } from "../products/categoryList";
import { productDataList } from "../products/productsData";
import { ProductCard } from "../shared/ProductCard";

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
				classList:
					"flex flex-row overflow-x-scroll overflow-y-hidden gap-3 no-scrollbar",
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
