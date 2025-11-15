import { El } from "../../utils/el";

const descriptionText = El({
	element: "div",
	innerText: "Your satisfaction is our number one periority",
	classList: "text-center text-3xl font-bold",
});

const carousel = El({
	element: "img",
	src: "/images/onboardingPage4/_carousel-indicators.svg",
	classList: "w-20",
});

const nextButton = El({
	element: "button",
	classList: "w-100 bg-black text-white text-md py-2 rounded-3xl",
	innerText: "Next",
});

const descriptionPartPage4 = El({
	element: "div",
	classList:
		"bg-white w-full flex flex-col gap-15 justify-between items-center p-10 relative",
	children: [
		descriptionText,
		El({
			element: "div",
			classList:
				"absolute flex flex-col gap-5 justify-between items-center  bottom-[-105px]",
			children: [carousel, nextButton],
		}),
	],
});

const headingImg = El({
	element: "img",
	classList: "h-[642px]",
	src: "/images/onboardingPage4/WallpaperDog.png",
});

export function OnboardingPage4() {
	const OnboardingPage4 = El({
		element: "div",
		classList: "h-screen",
		children: [headingImg, descriptionPartPage4],
	});
	return OnboardingPage4;
}
