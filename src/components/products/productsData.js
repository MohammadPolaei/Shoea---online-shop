import { sessionToken } from "../../utils/cookieData";
import { baseURL } from "../../utils/URL";

export async function productsData(brandName = "") {
	const products = await fetch(
		`${baseURL}/sneaker?page=1${brandName}&limit=100`,
		{
			headers: {
				Authorization: `Bearer ${sessionToken}`,
			},
		}
	);
	return products.json();
}

export const productDataList = await productsData();
