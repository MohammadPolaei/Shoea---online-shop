import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { logIn } from "../../utils/URL";
import { backButton } from "../shared/backButtonOnTop";
import { theButton } from "../shared/buttons";
import { ErrorModal } from "../shared/errorModal";
import { SuccessModal } from "../shared/successMessageModal";
import { theBlackLogo } from "./logo";

// back Button

const back = backButton;

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

const showHideButton = El({
	element: "img",
	src: "/images/Login/showHidePass.svg",
	classList: "w-5 absolute right-2 top-[25%]",
	eventListener: [
		{
			event: "click",
			callback: () => {
				if (passwordInput.type == "text") {
					passwordInput.type = "password";
				} else {
					passwordInput.type = "text";
				}
			},
		},
	],
});

const passwordInput = El({
	element: "input",
	type: "password",
	classList:
		"w-full bg-[#FAFAFA] px-5 py-2 rounded-[5px] outline-0 font-bold pl-8 focus:outline-2",
	placeholder: "Password",
});

// text

const logInText = El({
	element: "div",
	classList: "font-bold text-3xl",
	innerText: "Login to Your Account",
});

// login form

const logInForm = El({
	element: "form",
	classList: "w-[88%] flex flex-col gap-8 justify-center items-center",
	children: [
		logInText,
		El({
			element: "div",
			children: [usernameInputLogo, userNameInput],
			classList: "relative w-full",
		}),
		El({
			element: "div",
			children: [passwordInputLogo, passwordInput, showHideButton],
			classList: "relative w-full",
		}),
		El({
			element: "a",
			classList: "no-underline",
			eventListener: [
				{
					event: "click",
					callback: () => router.navigate("/signup"),
				},
			],
			children: [
				El({
					element: "div",
					innerText: "Signup",
					classList: "text-md",
				}),
			],
		}),
	],
});

// the Button

const subButton = theButton();
subButton.innerText = "Signin";
subButton.classList = subButton.classList + " absolute bottom-5";

// sign up fetch

export async function logInData(userName, passWord) {
	const logInDataVariable = await fetch(logIn, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ username: userName, password: passWord }),
	});

	if (logInDataVariable.ok) {
		const response = await logInDataVariable.json();
		SuccessModal("Your are logged in successfully !");

		// sorted by the last session ID

		const sortedResponse = response.user.sessions.sort(
			(smllest, biggst) => biggst.id - smllest.id
		);

		// T O K E N
		document.cookie = `sessionToken=${sortedResponse[0].token}; path=/;`;
		document.cookie = `authToken=${response.token}; path=/;`;
		console.log(document.cookie);
		setTimeout(() => {
			location.reload();
			router.navigate("/home");
		}, 1000);

		//
	} else {
		const response = await logInDataVariable.json();

		ErrorModal(String(response.message).replace(",", `\n`));

		return;
	}
}

// event listener sub button
subButton.addEventListener("click", () => {
	if (document.getElementById("errorModal")) {
		document.getElementById("errorModal").remove();
	}

	logInData(userNameInput.value, passwordInput.value);
});

//

export function Login() {
	const logIn = El({
		element: "div",
		classList:
			"h-screen w-full flex flex-col gap-10 items-center justify-start relative",
		children: [
			El({
				element: "div",
				classList: "absolute w-full py-9 px-5",
				children: [back],
			}),
			theBlackLogo,
			logInForm,
			subButton,
		],
	});

	return logIn;
}
