import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I navigate to the Home Page", () => {
  cy.visit("/");
});

Given("I log in", () => {
  cy.fixture("cookie").then((cookie) => {
    cy.setCookie(cookie.name, cookie.value, { expiry: 10000000000 });
  });
});

Given("I log out", () => {
  cy.clearCookies();
});
