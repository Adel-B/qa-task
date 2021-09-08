import { Then } from "cypress-cucumber-preprocessor/steps";

Then(/^I should see the text "(.*?)"$/, (text) => {
  cy.contains(text);
});

Then(/^I am redirected to "(.*?)"$/, (url) => {
  cy.url().should("include", url);
});
