import { Home } from "../../components/home/home";
import { Login } from "../../components/login/login";
import { sessionToken } from "../../utils/cookieData";

export function Login_page() {
	if (sessionToken == "expired") {
		return Login();
	}
	return Home();
}
