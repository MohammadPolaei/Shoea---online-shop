import { Cart } from "./components/cart/cart";
import { CartItems } from "./components/cart/getCartItems";
import { Login } from "./components/login/login";
import { getProductDetails } from "./components/products/productDetails";
import { containerDesign } from "./components/shared/divCardContainers";
import "./style/style.css";
console.log(CartItems);

// document.getElementById("app").append(Login());
// document.getElementById("app").append(containerDesign());

document.getElementById("app").append(Cart());
