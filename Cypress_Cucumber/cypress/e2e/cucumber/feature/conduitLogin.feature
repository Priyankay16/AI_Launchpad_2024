Feature: Conduit Login Functionality

  Scenario: Login and Logout with valid Credentials
    Given User is on the login page
    When User login with valid credentials
    |username                          |password|
    |priyanka.manaji.yadav.16@gmail.com|test123 |
    And User click on the settings button
    And User click on the logout button
    Then User should be routed back to login page
