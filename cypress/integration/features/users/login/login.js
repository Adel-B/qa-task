import { When, Then } from "cypress-cucumber-preprocessor/steps";

When("I login with valid credentials", () => {
  const username = Cypress.env("username");
  const password = Cypress.env("PASSWORD");
  cy.get("#email").type(username);
  cy.get("#passwd").type(password);
});

When(/^I login with ([^"]*) and ([^"]*)$/, (email, password) => {
  if (email) {
    cy.get("#email").type(email);
  }
  if (password) {
    cy.get("#passwd").type(password);
  }
});

Then("I should have a link to renew my password", () => {
  cy.contains("Forgot your password?").should(
    "have.attr",
    "href",
    "http://automationpractice.com/index.php?controller=password"
  );
});
