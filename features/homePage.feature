Feature: Home Page

    Background:
        Given I am on "Landing" page

    Scenario: Home page
        Then    The following text is visible on the Home page in <h1> tag:
                """
                Welcome to the Docler Holding QA Department
                """
        And     The following text is visible on the Home page in <p> tag:
                """
                This site is dedicated to perform some exercises and demonstrate automated web testing.
                """
