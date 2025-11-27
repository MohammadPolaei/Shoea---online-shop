import { sessionToken } from "../../utils/cookieData";
import { removeUpdateCart } from "../../utils/URL";

export async function updateCartItemQuantity(id, quantity) {
	const updateData = fetch(`${removeUpdateCart}${id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${sessionToken}`,
		},
		body: JSON.stringify({
			quantity: Number(quantity),
		}),
	});
}
