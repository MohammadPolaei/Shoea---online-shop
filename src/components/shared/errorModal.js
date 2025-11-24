import { El } from "../../utils/el";

export function ErrorModal(message) {
	const messageBox = El({
		element: "div",
		id: "errorModal",
		classList:
			"p-5 left-0 top-[60%] bottom-0 right-0 m-auto bottom-0 absolute w-[90%] h-min bg-[#eeeeee] text-[#aa0000] shadow-sm  rounded-md text-center flex flex-col gap-5 justify-between",
		innerText: message,
		children: [
			El({
				element: "button",
				classList: "text-black py-1 w-full rounded-[50px] bg-[#00000022]",
				innerText: "Close",
				eventListener: [
					{
						event: "click",
						callback: () => messageBox.remove(),
					},
				],
			}),
		],
	});
	if (messageBox) {
		setTimeout(() => messageBox.remove(), 3000);
	}
	document.getElementById("app").append(messageBox);
}
