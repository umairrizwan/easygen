/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    verifyAlerts(alertName, alertType?): void;
    ReadFile(filePath): Chainable<any>;
  }
}
