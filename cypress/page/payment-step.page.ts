/* eslint-disable require-jsdoc */
/**
 * Menu class.
 */

class PaymentStepPage {
  private confirmationMesssage: string;
  private paymentMethod: string;
  private proceedButton: string;

  constructor() {
    this.confirmationMesssage ="#center_column > div > p > strong";
    this.paymentMethod = ".bankwire";
    this.proceedButton = ".cart_navigation > .button > span";
  }

  public selectWirePaymentMethod(): void {
    cy.get(this.paymentMethod).click();
  }

  public proceedToCheckout(): void {
    cy.get(this.proceedButton).click();
  }

  public getConfirmationMessage(): any {
    return cy.get(this.confirmationMesssage);
  }
}

export {PaymentStepPage};
