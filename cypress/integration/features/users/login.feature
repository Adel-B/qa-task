Feature: Login
    Login Test Suite

    Background:
        Given I navigate to the webpage at url "/index.php?controller=authentication&back=my-account"

    Scenario: Greets
        Then I should see the text "Already registered?"

    Scenario Outline: Login not allowed with invalid cred
        When I login with <username> and <password>
        And I click on the button "SubmitLogin"
        Then I should see the text "<ExpectedError>"

        Examples:
            | username     | password | ExpectedError             |
            |              | pwd      | An email address required |
            | email@d.com  |          | Password is required      |
            | invalidemail | password | Invalid email address     |
            | email@d.com  | password | Authentication failed     |
            |              |          | An email address required |

    Scenario: Password Forgotten
        Then I should have a link to renew my password

    Scenario: Require Valid Username and Password to Login
        When I login with valid credentials
        And I click on the button "SubmitLogin"
        Then I am redirected to "my-account"
