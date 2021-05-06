Feature: Navigation

    Scenario: Navigate to Landing Page
        Given   I am on "Landing" page
        When    I click on the "UI Testing" button in header
        Then    The the url path is "/"
        And     The active navbar item is "Home"
        And     The window title is "UI Testing Site"
        And     The Company Logo is visible


    Scenario: Navigate to Home Page
        Given   I am on "Landing" page
        When    I click on the "Home" button in navbar
        Then    The the url path is "/"
        And     The active navbar item is "Home"
        And     The window title is "UI Testing Site"
        And     The Company Logo is visible

    Scenario: Navigate to Form Page
        Given   I am on "Landing" page
        When    I click on the "Form" button in navbar
        Then    The the url path is "/form.html"
        And     The active navbar item is "Form"
        And     The window title is "UI Testing Site"
        And     The Company Logo is visible
