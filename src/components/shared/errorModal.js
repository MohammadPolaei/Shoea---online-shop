import { El } from "../../utils/el";

export function ErrorModal(message) {
	const messageBox = El({
		element: "div",
		id: "errorModal",
		classList:
			"p-5 left-0 top-[60%] bottom-0 right-0 m-auto bottom-0 absolute w-[90%] h-min bg-[#eeeeee] text-[#aa0000] shadow-sm border-1 border-[#aa0000] rounded-md text-center",
		innerText: message,
	});
	document.getElementById("app").append(messageBox);
}
