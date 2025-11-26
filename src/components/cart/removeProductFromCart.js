import { sessionToken } from "../../utils/cookieData";
import { removeUpdateCart } from "../../utils/URL";

export async function removeItemFromCart(id) {
	const remove = await fetch(`${removeUpdateCart}${id}`, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${sessionToken}`,
		},
	});
}
