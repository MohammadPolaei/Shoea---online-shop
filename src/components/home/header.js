import { El } from "../../utils/el";

const grettingTime = El({
	element: "div",
	classList: "text-[#757475] text-md",
	innerText: "Good Morning 🤚",
});

const greetingUserName = El({
	element: "div",
	classList: "text-black text-md font-bold",
	innerText: "User Name",
});

const notifications = El({
	element: "div",
	classList: "flex flex-row gap-3 items-center justify-between",
	children: [
		El({
			element: "img",
			src: "/images/homePage/header/bell.svg",
		}),
		El({
			element: "img",
			src: "/images/homePage/header/heart.svg",
		}),
	],
});

export function Header() {
	const header = El({
		element: "div",
		classList: "flex flex-row justify-between p-5",
		children: [
			El({
				element: "div",
				classList: "",
				children: [grettingTime, greetingUserName],
			}),
			notifications,
		],
	});
	return header;
}
