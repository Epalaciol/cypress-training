/* eslint-disable require-jsdoc */
/**
 * Menu class.
 */
class LoginPage {
  private user: string;
  private password: string;
  private submitButton: string;

  constructor() {
    this.user = "#email";
    this.password = "#passwd";
    this.submitButton = "#SubmitLogin > span";
  }

  public signIn(email: string, password: string): void {
    cy.get(this.user).type(email);
    cy.get(this.password).type(password);
    cy.get(this.submitButton).click();
  }
}

export {LoginPage};
