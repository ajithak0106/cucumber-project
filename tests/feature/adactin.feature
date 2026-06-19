Feature: Validate adactin hotel application

@adactin
Scenario:login with valid credentials
    Given navigate to adactin page
    When enter the username in username field
    And Enter the password in password field
    Then click on the login button navigateto the search hotel page
    When select the location
    When select the hotel
    When select the Room type
    When select the number of rooms
    When select the adults per rooms
    When select the childrens per rooms
    Then click the search button
    

    

















    