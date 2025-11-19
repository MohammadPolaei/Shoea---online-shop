import { sessionToken } from "../../utils/cookieData";
import { productID } from "../../utils/URL";

export async function getProductDetails(theProductID) {
	// get data
	const productDetails = await fetch(`${productID + theProductID}`, {
		headers: {
			Authorization: `Bearer ${sessionToken}`,
		},
	});

	const productDetailsResult = await productDetails.json();

	return productDetailsResult;
}
