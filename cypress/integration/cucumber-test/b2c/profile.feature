Feature: Consulting profile pages

    Check profile pages on website

    Scenario: I can browse between profile pages
        Given I am connected in the front page
        When I click on the profile icon
        Then I go in the profile homepage
        When I click on command menu
        Then I go in the profile command page
