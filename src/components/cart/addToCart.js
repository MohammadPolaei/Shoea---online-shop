import { sessionToken } from "../../utils/cookieData";
import { cart } from "../../utils/URL";

export function addToCart(theSneakerId, theQuantity) {
	const addToCart = fetch(cart, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${sessionToken}`,
		},
		body: JSON.stringify({
			sneakerId: theSneakerId,
			quantity: theQuantity,
		}),
	});
	return addToCart;
}
