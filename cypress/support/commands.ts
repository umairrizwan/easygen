/// <reference types="cypress" />

import { selectors } from "../../pageobjects/homepage/selectors";

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

//Writing this custom command to handle both alerts using alertType
Cypress.Commands.add("verifyAlerts", (alertText, alertType?) => {
  if (alertType == "Confirm") {
    cy.get(selectors.alertNameTxtBox).type(alertText);
    cy.get(selectors.confirmBttn).click();
    return cy.on("window:confirm", (string) => {
      expect(string).to.be.eql(
        `Hello ${alertText}, Are you sure you want to confirm?`
      );
    });
  } else {
    cy.get(selectors.alertNameTxtBox).type(alertText);
    cy.get(selectors.alertBttn).click();
    return cy.on("window:alert", (string) => {
      expect(string).to.be.eql(
        `Hello ${alertText}, share this practice page and share your knowledge`
      );
    });
  }
});

Cypress.Commands.add("ReadFile", (filePath) => {
  cy.task("readFileMaybe", filePath).then((response) => {
    return response;
  });
});
