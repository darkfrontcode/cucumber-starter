Feature: Example feature
    As a user of Cucumber.js
    I want to have documentation on Cucumber
    So that I can concentrate on building awesome applications

    Scenario: Reading documentation
        Given I am on the Cucumber.js GitHub repository
        When I go to the README file
        Then I should see "AngularJS — Superheroic JavaScript MVW Framework" as the page title
