import { When } from "cypress-cucumber-preprocessor/steps";

When(
  /^I enter a ([^"]*) email address to create an account$/,
  (email_status) => {
    if (email_status == "used") {
      cy.get("#email_create").type("test@domain.com{enter}");
    }
    if (email_status == "new") {
      var faker = require("faker");
      cy.get("#email_create").type(faker.internet.email() + "{enter}");
    }
  }
);

When("I enter the required informations to register", () => {
  var faker = require("faker");
  cy.get("#customer_firstname").type(faker.name.firstName());
  cy.get("#customer_lastname").type(faker.name.lastName());
  cy.get("#passwd").type(faker.random.words());
  cy.get("#firstname").type(faker.name.firstName());
  cy.get("#lastname").type(faker.name.lastName());
  cy.get("#address1").type(faker.address.streetAddress());
  cy.get("#city").type(faker.address.city());
  cy.get("#id_state").select("California");
  cy.get("#postcode").type("00000");
  cy.get("#phone_mobile").type(faker.phone.phoneNumberFormat(1));
});
