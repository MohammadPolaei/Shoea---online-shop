import { El } from "../../utils/el";
import { OnboardingPage1 } from "./onboardingPage1";
import { OnboardingPage2 } from "./onboardingPage2";
import { OnboardingPage3 } from "./onboardingPage3";

export const onBoardingContainer = document.createElement("div");
export const blackFaderEffect = El({
	element: "div",
	classList: "bg-black absolute z-10 h-full top-0 left-0 right-0 animate-ping",
});
export function Onboarding() {
	onBoardingContainer.classList.add("relative");
	onBoardingContainer.append(OnboardingPage1());

	// after 3 seconds , page 2 appears

	setTimeout(() => {
		onBoardingContainer.innerHTML = "";
		onBoardingContainer.append(OnboardingPage2());
		onBoardingContainer.append(blackFaderEffect);
		setTimeout(() => onBoardingContainer.children[1].remove(), 900);

		setTimeout(() => {
			onBoardingContainer.innerHTML = "";
			onBoardingContainer.append(OnboardingPage3());
			onBoardingContainer.append(blackFaderEffect);
			setTimeout(() => onBoardingContainer.children[1].remove(), 900);
		}, 3000);
	}, 3000);

	return onBoardingContainer;
}
