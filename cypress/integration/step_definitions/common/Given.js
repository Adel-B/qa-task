import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I navigate to the Home Page", () => {
  cy.visit("/");
});

Given("I log in", () => {
  const name = Cypress.env("COOKIENAME");
  const value = Cypress.env("COOKIEVALUE");
  cy.setCookie(name.toString(), value.toString(), { expiry: 10000000000 });
  cy.getCookie(name).should("have.property", "value", value);
});

Given("I log out", () => {
  cy.clearCookies();
});
