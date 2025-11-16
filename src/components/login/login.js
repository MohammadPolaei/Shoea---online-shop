import { El } from "../../utils/el";
import { backButton } from "../shared/backButtonOnTop";
import { theButton } from "../shared/buttons";
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

const loginText = El({
	element: "div",
	classList: "font-bold text-3xl",
	innerText: "Login to Your Account",
});

// login form

const logInForm = El({
	element: "form",
	classList: "w-[88%] flex flex-col gap-8 justify-center items-center",
	children: [
		loginText,
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
			innerText: "Signup",
			classList: "text-md",
		}),
	],
});

// the Button

const subButton = theButton();
subButton.innerText = "Signin";
subButton.classList = subButton.classList + " absolute bottom-5";

export function Login() {
	const logIn = El({
		element: "div",
		classList:
			"h-screen flex flex-col gap-10 items-center justify-start relative",
		children: [back, theBlackLogo, logInForm, subButton],
	});

	return logIn;
}
