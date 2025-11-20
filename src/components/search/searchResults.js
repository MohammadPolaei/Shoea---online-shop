import { sessionToken } from "../../utils/cookieData";
import { El } from "../../utils/el";
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
		const searchResults = El({
			element: "div",
			classList: "grid grid-cols-2 gap-3 h-190 overflow-scroll no-scrollbar",
			children: data.map((prod) => {
				const { id, name, imageURL, price } = prod;
				console.log(prod);
				return El({
					element: "div",
					classList: "flex flex-col gap-2",
					children: [
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
									classList: "font-semibold text-md w-full h-6 overflow-hidden",
									innerText: name,
								}),
								El({
									element: "div",
									classList: "text-sm flex flex-row ",
									innerText: "sth...",
								}),
								El({
									element: "div",
									classList: "text-md font-semibold ",
									innerText: `$${price}.00`,
								}),
							],
						}),
					],
				});
			}),
		});
		document.getElementById("searchContainer").append(searchResults);
	});
}
