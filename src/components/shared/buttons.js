import { El } from "../../utils/el";

export function theButton() {
	const theButt = El({
		element: "button",
		classList: "w-100 bg-black text-white text-md py-2 rounded-3xl",
		innerText: "",
	});
	return theButt;
}
