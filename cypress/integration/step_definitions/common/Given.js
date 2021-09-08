import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I navigate to the Home Page", () => {
  cy.visit("/index.php");
});

Given("I log in", () => {
  const name = Cypress.env("COOKIENAME");
  const value = Cypress.env("COOKIEVALUE");
  cy.setCookie(name, value, { expiry: 10000000000 });
  cy.getCookie(name).should("have.property", "value", value);
});

Given("I log out", () => {
  cy.clearCookies();
});

Given(/^I navigate to the webpage at url "(.*?)"$/, (url) => {
  cy.visit(url);
});
