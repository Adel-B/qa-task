import { When } from "cypress-cucumber-preprocessor/steps";

When(/^I click on the button "(.*?)"$/, (button) => {
  cy.get("#" + button).click();
});

When("I add an article to the cart", () => {
  cy.request(
    "POST",
    "http://automationpractice.com/index.php",
    "controller=cart&add=1&qty=5&id_product=2"
  ).then((response) => {
    expect(response.status).to.eq(200);
  });
});
