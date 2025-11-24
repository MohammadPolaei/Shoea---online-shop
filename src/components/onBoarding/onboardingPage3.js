import { El } from "../../utils/el";
import { blackFaderEffect, onBoardingContainer } from "./onboarding";
import { OnboardingPage4 } from "./onboardingPage4";

const descriptionText = El({
	element: "div",
	innerText: "We provide high quality products just for you",
	classList: "text-center text-3xl font-bold",
});

const carousel = El({
	element: "img",
	src: "/images/onBoardingPage3/_carousel-indicators.svg",
	classList: "w-20",
});

const nextButton = El({
	element: "button",
	classList: "w-100 bg-black text-white text-md py-2 rounded-3xl",
	innerText: "Next",
	eventListener: [
		{
			event: "click",
			callback: () => {
				onBoardingContainer.innerHTML = "";
				onBoardingContainer.append(OnboardingPage4());
				onBoardingContainer.append(blackFaderEffect);
				setTimeout(() => onBoardingContainer.children[1].remove(), 900);
			},
		},
	],
});

const descriptionPartPage3 = El({
	element: "div",
	classList:
		"bg-white w-full flex flex-col gap-15 justify-between items-center p-10 relative",
	children: [
		descriptionText,
		El({
			element: "div",
			classList:
				"flex flex-col gap-5 justify-between items-center absolute bottom-[-105px]",
			children: [carousel, nextButton],
		}),
	],
});

const headingImg = El({
	element: "img",
	classList: "",
	src: "/images/onBoardingPage3/wallpaper3.jpg",
});

export function OnboardingPage3() {
	const OnboardingPage3 = El({
		element: "div",
		classList: "h-screen",
		children: [headingImg, descriptionPartPage3],
	});
	return OnboardingPage3;
}
