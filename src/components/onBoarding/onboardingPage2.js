import { El } from "../../utils/el";

const onBoardingPage2Greeting = El({
	element: "div",
	classList: "text-4xl text-white font-medium",
	innerText: "Welcome to 🤚",
});
const onBoardingPage2Title = El({
	element: "div",
	classList: "text-7xl font-extrabold text-white",
	innerText: "Shoea",
});

const onBoardingPage2TextDescrption = El({
	element: "div",
	classList: "text-md text-white font-medium",
	innerText:
		"The best sneakers & shoes e-commerse app of the century for your fashion needs!",
});
const onBoardingPage2TextContainer = El({
	element: "div",
	classList:
		"h-screen bg-gradient-to-t from-[#000000bb] to-[#00000000] flex flex-col justify-end px-8 py-15 gap-5",
	children: [
		onBoardingPage2Greeting,
		onBoardingPage2Title,
		onBoardingPage2TextDescrption,
	],
});

export function OnboardingPage2() {
	const onBoardingPage2 = El({
		element: "div",
		classList:
			"bg-[url('/images/onboardingPage2/WallpaperDog.png')] bg-cover bg-center bg-no-repeat h-screen",
		children: [onBoardingPage2TextContainer],
	});
	return onBoardingPage2;
}
