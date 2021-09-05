const { Before } = require("cypress-cucumber-preprocessor/steps");

Before(() => {
  cy.clearCookies();
  cy.getCookies().should("be.empty");
});
