import { catList } from "./components/products/categoryList";
import { productDataList } from "./components/products/productsData";
import { Cart_Page } from "./pages/cart/cart";
import { Checkout_Page } from "./pages/checkout/checkout";
import { Home_Page } from "./pages/home/home";
import { Login_page } from "./pages/login/login";
import { Signup_Page } from "./pages/login/signup";
import { OnBoarding_page } from "./pages/onBoarding/onboarding";
import "./style/style.css";
import { router } from "./utils/router";

// document.getElementById("app").append(Login());

const mainContainer = document.createElement("div");

document.getElementById("app").append(mainContainer);

// mainContainer.append(OnBoarding_page());

// routing

router.addRoute("/", OnBoarding_page);
router.addRoute("/login", Login_page);
router.addRoute("/signup", Signup_Page());
router.addRoute("/home", Home_Page);
router.addRoute("/cart", Cart_Page);
router.addRoute("/checkout", Checkout_Page);

// router.addRoute("/products", ProductsPage);
// router.addRoute("/product/:id", ProductDetailPage);
// router.addRoute("/my-name/:name", MyNamePage);
if (productDataList.error || catList.error) {
	router.navigate("/login");
}
router.init(mainContainer);
