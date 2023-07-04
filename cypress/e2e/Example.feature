Feature: Example feature

  @desktop
  Scenario: I am able to run cypress tests
    Given I am on desktop
    When I navigate to the "Page"
    Then The "header" is visible
    And The "footer" exists

  @mobile
  Scenario: I am able to see Hero and Blog Post Utilities on BlogPost page
    Given I am on mobile
    When I navigate to the "Page"
    Then The "header" is visible
    And The "footer" exists
