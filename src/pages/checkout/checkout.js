import { CheckOut } from "../../components/checkout/checkout";
import { PaymentMethods } from "../../components/checkout/paymentMethods";
import { ShippingAddresPage } from "../../components/checkout/shippingAddressPage";
import { ShippingType } from "../../components/checkout/shippingType";

export function Checkout_Page(param) {
	switch (param.type) {
		case "payment":
			return PaymentMethods();
		case "shippingaddress":
			return ShippingAddresPage();
		case "shippingtype":
			return ShippingType();

		default:
			break;
	}

	return CheckOut();
}
