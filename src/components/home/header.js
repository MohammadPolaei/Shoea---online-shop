import { sessionToken } from "../../utils/cookieData";
import { El } from "../../utils/el";
import { user } from "../../utils/URL";

const grettingTime = El({
	element: "div",
	classList: "text-[#757475] text-md",
	innerText: "Good Morning 🤚",
});

// username fetch
// logInData("M8ddUser120", "00950095#M8dd");

async function getUserName() {
	const userData = await fetch(user, {
		headers: {
			Authorization: `Bearer ${sessionToken}`,
		},
	});
	const username = await userData.json();

	return username.username;
}

const greetingUserName = El({
	element: "div",
	classList: "text-black text-md font-bold",
	innerText: await getUserName(),
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
		classList: "flex flex-row justify-between",
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
