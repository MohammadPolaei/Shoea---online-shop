import { sessionToken } from "../../utils/cookieData";
import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { store } from "../../utils/store";
import { baseURL } from "../../utils/URL";

export function GetSearchResults(searchInput) {
	async function searchResultsFetch(searchInput) {
		const result = await fetch(
			`${baseURL + "/sneaker?page=1&limit=100&search=" + searchInput}`,
			{
				headers: {
					Authorization: `Bearer ${sessionToken}`,
				},
			}
		);

		const extractedResults = await result.json();
		return extractedResults;
	}

	// UI design
	searchResultsFetch(searchInput).then((res) => {
		const { total, data } = res;

		if (total > 0) {
			store.setState("isFound", true);
		} else {
			store.setState("isFound", false);
			return;
		}

		const searchResults = El({
			element: "div",
			classList: "flex flex-col",
			id: "searchResultContainer",
			children: [
				El({
					element: "div",
					classList: "flex flex-row justify-between w-full items-center pb-8",
					children: [
						El({
							element: "div",
							classList: "text-xl font-bold",
							innerText: `Results for "${
								document.getElementById("searchInput").value
							}"`,
						}),
						El({
							element: "div",
							classList: "text-md font-semibold",
							innerText: `${total} founds`,
						}),
					],
				}),
				El({
					element: "div",
					classList:
						"grid grid-cols-2 gap-3 h-183 overflow-scroll no-scrollbar",
					children: data.map((prod) => {
						const { id, name, imageURL, price } = prod;

						return El({
							element: "div",
							classList: "flex flex-col gap-2 relative",
							eventListener: [
								{
									event: "click",
									callback: () => {
										router.navigate(`/product/${id}`);
									},
								},
							],
							children: [
								El({
									element: "img",
									src: "/images/search/wishlist.svg",
									classList: "w-8 absolute m-auto left-[75%] bottom-[83%]",
								}),
								El({
									element: "img",
									src: imageURL,
									classList: "w-full rounded-2xl",
								}),
								El({
									element: "div",
									classList: "flex flex-col gap-2 justify-between",
									children: [
										El({
											element: "div",
											classList:
												"font-semibold text-md w-full h-6 overflow-hidden",
											innerText: name,
										}),
										El({
											element: "div",
											classList:
												"flex flex-row items-center justify-start gap-2",
											children: [
												El({
													element: "img",
													src: "/images/ProductDetails/ratingIcon.svg",
													classList: "w-5",
												}),
												El({
													element: "div",
													classList: "text-[#333333] text-[12px]",
													innerText: "4.3",
												}),
												El({
													element: "div",
													classList: "text-[#333333] text-[12px]",
													innerText: "|",
												}),
												El({
													element: "div",
													classList:
														"px-2 py-1 bg-[#ebebec] text-[10px] rounded-md",
													innerText: "5,371 sold",
												}),
											],
										}),
										El({
											element: "div",
											classList: "text-md font-semibold",
											innerText: `$${price}.00`,
										}),
									],
								}),
							],
						});
					}),
				}),
			],
		});
		if (document.getElementById("searchInput").value == "") {
			return;
		}
		document.getElementById("searchContainer").append(searchResults);
	});
}
