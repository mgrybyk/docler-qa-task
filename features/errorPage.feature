Feature: Error Page

    Background:
        Given   I am on "Landing" page
        And     HTTP interceptor "navError" spies on "GET" "**/error"

    Scenario: Error page
        When    I click on the "Error" button in navbar
        Then    HTTP interceptor "navError" response code is "404"
        And     404 page is shown
