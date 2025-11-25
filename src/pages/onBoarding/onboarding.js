import { Onboarding } from "../../components/onBoarding/onboarding";
import { router } from "../../utils/router";

export function OnBoarding_page() {
	if (localStorage.getItem("onBoardingShow") == "true") {
		router.navigate("/login");

		return;
	} else {
		console.log(localStorage.getItem("onBoardingShow"));
		localStorage.setItem("onBoardingShow", "true");
		return Onboarding();
	}
}
