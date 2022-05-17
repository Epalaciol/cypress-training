/* eslint-disable require-jsdoc */
/**
 * Menu class.
 */
class ShippingStepPage {
  private proceedButton: string;
  private termsCheck: string;

  constructor() {
    this.termsCheck = "#cgv";
    this.proceedButton = ".cart_navigation > .button > span";
  }

  public acceptTerms() : void {
    cy.get(this.termsCheck).click();
  }

  public proceedToCheckout() : void {
    cy.get(this.proceedButton).click();
  }
}

export {ShippingStepPage};
