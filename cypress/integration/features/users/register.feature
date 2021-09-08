Feature: Register
    Register Test Suite

    Background: Before each
        Given I navigate to the webpage at url "/index.php?controller=authentication&back=my-account"

    Scenario: Greets
        Then I should see the text "Create an account"
        And I should see the text "Please enter your email address to create an account."

    Scenario: Redirect to #account-creation
        When I enter a new email address to create an account
        Then I am redirected to "#account-creation"

    Scenario: Error - Require Email
        When I click on the button "SubmitCreate"
        Then I should see the text "Invalid email address."

    Scenario: Error - Email alredy used
        When I enter a used email address to create an account
        Then I should see the text "An account using this email address has already been registered"

    Scenario: Redirect to My-Account if no articles in Cart
        When I enter a new email address to create an account
        And I navigate to the webpage at url "/index.php?controller=authentication&back=my-account#account-creation"
        And I enter the required informations to register
        And I click on the button "submitAccount"
        Then I am redirected to "my-account"

    Scenario: Redirect to Order if articles in Cart
        When I enter a new email address to create an account
        And I navigate to the webpage at url "/index.php?controller=authentication&back=my-account#account-creation"
        And I add an article to the cart
        And I enter the required informations to register
        And I click on the button "submitAccount"
        Then I am redirected to "order"

    Scenario: Require Mandatory Info
        When I enter a new email address to create an account
        And I navigate to the webpage at url "/index.php?controller=authentication&back=my-account#account-creation"
        And I click on the button "submitAccount"
        Then I should see the text "There are 8 errors"
