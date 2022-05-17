import {
  MenuContentPage, LoginPage,
  AddressStepPage, ShippingStepPage,
  PaymentStepPage, ProductListPage,
  ShoppingCartPage} from "../page/index";

const EMAIL = "aperdomobo@gmail.com";
const PASSWORD = "WorkshopProtractor";

const addressStepPage = new AddressStepPage();
const loginPage = new LoginPage();
const menuContentPage = new MenuContentPage();
const paymentStepPage = new PaymentStepPage();
const productListPage = new ProductListPage();
const shippingStepPage = new ShippingStepPage();
const shoppingCartPage = new ShoppingCartPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.addShirtToCart();
    productListPage.proceedToCheckout();
    shoppingCartPage.proceedToCheckout();
    // Debes completar la prueba ...
    loginPage.signIn(EMAIL, PASSWORD);
    addressStepPage.proceedToCheckout();
    shippingStepPage.acceptTerms();
    shippingStepPage.proceedToCheckout();
    paymentStepPage.selectWirePaymentMethod();
    paymentStepPage.proceedToCheckout();
    // Assert
    paymentStepPage.getConfirmationMessage()
        .should("have.text", "Your order on My Store is complete.");
  });
});
