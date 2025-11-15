import { El } from "../../utils/el";

const shoeaLogo = El({
	element: "img",
	src: "/images/ShoeaLogo.svg",
	classList: "w-12",
});
const shoeaText = El({
	element: "div",
	classList: "font-bold text-4xl",
	innerText: "Shoea",
});
const loadingLogo = El({
	element: "img",
	classList: "w-10",
	src: "/images/spinner-atom.svg",
});

export function OnboardingPage1() {
	const onBoarding1 = El({
		element: "div",
		classList: "relative flex flex-col h-screen w-screen",
		children: [
			El({
				element: "div",
				classList:
					"bg-white flex flex-row gap-2 items-center justify-center h-screen",
				children: [shoeaLogo, shoeaText],
			}),
			El({
				element: "div",
				classList:
					"z-10 absolute bottom-30 flex flex-row justify-center items-center w-screen animate-spin",
				children: [loadingLogo],
			}),
		],
	});
	return onBoarding1;
}
