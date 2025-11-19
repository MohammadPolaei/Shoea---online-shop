import { sessionToken } from "../../utils/cookieData";
import { baseURL } from "../../utils/URL";

async function categoryList() {
	const catList = await fetch(`${baseURL}/sneaker/brands`, {
		headers: {
			Authorization: `Bearer ${sessionToken}`,
		},
	});
	return catList.json();
}
export const catList = await categoryList();
