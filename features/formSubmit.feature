Feature: Submit Form

    Background:
        Given I am on "Form" page

    Scenario Outline: Form Page
        When    I type "<value>" in the input field on the Form page
        And     Submit the form on the Form page
        Then    The the url path is "/hello.html?myName=<value>"
        And     The "<result>" is visible on the Hello page in header
        And     The window title is "UI Testing Site"
        And     The Company Logo is visible

        Examples:
            | value   | result          |
            | Jon     | Hello John!     |
            | Sophia  | Hello Sophia    |
            | Charlie | Hello Charlie!  |
            | Emily   | Hello Emily!    |
