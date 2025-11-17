import { El } from "../../utils/el";
import { signUp } from "../../utils/URL";
import { backButton } from "../shared/backButtonOnTop";
import { theButton } from "../shared/buttons";
import { ErrorModal } from "../shared/errorModal";
import { SuccessModal } from "../shared/successMessageModal";
import { theBlackLogo } from "./logo";

// back Button

const back = backButton;
back.classList = back.classList + "absolute left-6 top-4";

// inputs

const usernameInputLogo = El({
	element: "img",
	src: "/images/Login/usernameLogo.svg",
	classList: "w-5 absolute left-2 top-[25%]",
});

const userNameInput = El({
	element: "input",
	classList:
		"w-full bg-[#FAFAFA] px-5 py-2 rounded-[5px] outline-0 font-bold pl-8 focus:outline-2",
	placeholder: "Username",
});

const passwordInputLogo = El({
	element: "img",
	src: "/images/Login/passwordLogo.svg",
	classList: "w-5 absolute left-2 top-[25%]",
});

const passwordInput = El({
	element: "input",
	classList:
		"w-full bg-[#FAFAFA] px-5 py-2 rounded-[5px] outline-0 font-bold pl-8 focus:outline-2",
	placeholder: "Password",
});

// text

const signupText = El({
	element: "div",
	classList: "font-bold text-3xl",
	innerText: "Signup to Your Account",
});

// login form

const signUpForm = El({
	element: "form",
	classList: "w-[88%] flex flex-col gap-8 justify-center items-center",
	children: [
		signupText,
		El({
			element: "div",
			children: [usernameInputLogo, userNameInput],
			classList: "relative w-full",
		}),
		El({
			element: "div",
			children: [passwordInputLogo, passwordInput],
			classList: "relative w-full",
		}),
		El({
			element: "div",
			innerText: "Login",
			classList: "text-md",
		}),
	],
});

// the Button

const subButton = theButton();
subButton.innerText = "Signup";
subButton.classList = subButton.classList + " absolute bottom-5";

// sign up fetch

async function signUpData(userName, passWord) {
	const signUpDataVariable = await fetch(signUp, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ username: userName, password: passWord }),
	});

	if (signUpDataVariable.ok) {
		const response = await signUpDataVariable.json();
		SuccessModal("Your are signed up successfully !");

		// T O K E N
		console.log(response);
		document.cookie = `authToken=${response.token}; path=/;`;
		console.log(document.cookie);

		//
	} else {
		const response = await signUpDataVariable.json();

		ErrorModal(String(response.message).replace(",", `\n`));

		return;
	}
}

// event listener sub button
subButton.addEventListener("click", () => {
	if (document.getElementById("errorModal")) {
		document.getElementById("errorModal").remove();
	}

	signUpData(userNameInput.value, passwordInput.value);
});

//

export function Signup() {
	const signUp = El({
		element: "div",
		classList:
			"h-screen w-screen flex flex-col gap-10 items-center justify-start relative",
		children: [back, theBlackLogo, signUpForm, subButton],
	});

	return signUp;
}
