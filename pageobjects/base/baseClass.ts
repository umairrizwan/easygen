class BasePage {
  visitHomePage() {
    cy.visit(Cypress.env("indexUrl"));
    return this;
  }
}
export { BasePage };
