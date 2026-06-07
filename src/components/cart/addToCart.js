import { sessionToken } from "../../utils/cookieData";
import { cart } from "../../utils/URL";

export async function addToCart(theSneakerId, theQuantity) {
	const addToCart = await fetch(cart, {
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

	const res = await addToCart.json();
	return res;
}
