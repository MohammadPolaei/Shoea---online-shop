import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { blackFaderEffect, onBoardingContainer } from "./onboarding";

const descriptionText = El({
	element: "div",
	innerText: "Let’s fulfill your fashion needs with shoearight now!",
	classList: "text-center text-3xl font-bold",
});

const carousel = El({
	element: "img",
	src: "/images/onboardingPage5/_carousel-indicators.svg",
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
				onBoardingContainer.append(blackFaderEffect);
				router.navigate("/signup");
			},
		},
	],
});

const descriptionPartPage5 = El({
	element: "div",
	classList:
		"bg-white w-full flex flex-col gap-15 justify-between items-center p-10 relative",
	children: [
		descriptionText,
		El({
			element: "div",
			classList:
				"flex flex-col gap-5 justify-between items-center absolute bottom-[-70px]",
			children: [carousel, nextButton],
		}),
	],
});

const headingImg = El({
	element: "img",
	classList: "h-[642px]",
	src: "/images/onboardingPage5/WallpaperDog.png",
});

export function OnboardingPage5() {
	const OnboardingPage5 = El({
		element: "div",
		classList: "h-screen",
		children: [headingImg, descriptionPartPage5],
	});
	return OnboardingPage5;
}
