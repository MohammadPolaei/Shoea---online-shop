import { sessionToken } from "../../utils/cookieData";
import { cart } from "../../utils/URL";

async function getCartItems() {
	const getCartItems = fetch(cart, {
		headers: {
			Authorization: `Bearer ${sessionToken}`,
		},
	});
	const res = (await getCartItems).json();

	return res;
}

export const CartItems = await getCartItems();
