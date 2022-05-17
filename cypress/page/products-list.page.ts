/* eslint-disable require-jsdoc */
/**
 * Menu class.
 */
class ProductListPage {
  private product : string;
  private proceedButton: string;

  constructor() {
    this.product = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
    this.proceedButton = ".button-container > .button-medium > span";
  }

  public addShirtToCart(): void {
    cy.get(this.product).click({force: true});
  }

  public proceedToCheckout(): void {
    cy.get(this.proceedButton).click();
  }
}

export {ProductListPage};
