/* eslint-disable require-jsdoc */
/**
 * Menu class.
 */
class AddressStepPage {
  private proceedButton: string;

  constructor() {
    this.proceedButton = ".cart_navigation > .button > span";
  }

  public proceedToCheckout(): void {
    cy.get(this.proceedButton).click();
  }
}

export {AddressStepPage};
