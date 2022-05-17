/* eslint-disable require-jsdoc */
/**
 * Menu class.
 */
class ShoppingCartPage {
  private proceedButton: string;

  constructor() {
    this.proceedButton = ".cart_navigation span";
  }

  public proceedToCheckout(): void {
    cy.get(this.proceedButton).click();
  }
}

export {ShoppingCartPage};
