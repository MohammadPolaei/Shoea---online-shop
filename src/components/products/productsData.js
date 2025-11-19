import { sessionToken } from "../../utils/cookieData";
import { baseURL } from "../../utils/URL";

async function productsData() {
	const products = await fetch(`${baseURL}/sneaker?page=1&limit=100`, {
		headers: {
			Authorization: `Bearer ${sessionToken}`,
		},
	});
	return products.json();
}

export const productDataList = await productsData();
