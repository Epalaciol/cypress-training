// / <reference types="cypress" />

describe("This is my first cypress test", () => {
  it("should have a title", () => {
    cy.visit("https://google.com");
    cy.title().should("eq", "Google");
    cy.get(".gLFyf").type("Instagram{enter}");
  });
});
