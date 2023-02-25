Feature: Komi apllication

    test Komi application

Background:
Given the User visits to 'Home' page
And the User visibles all 'thumbnails'

Scenario: test Music Tracks section
When the User navigates to 'Music Tracks' section

Scenario: test side navigation arrow
When the User clicks on the side navigation arrow on the Music Tracks

Scenario: test pre save button
When the User clicks on the 'Pre-save' button to validate 'PRE-SAVED'
Then the User should see 'Pre-saved' button

Scenario: test Youtube video 
When the User clicks on Youtube video to asserts it redirects successfully with 'komi' site

Scenario: test Youtube video on youtube site
When the User clicks on Youtube video to 'Watch on YouTube'

Scenario: test Single Music module
When the User on the 'Single Music' module to click on 'More' button to validate all relevant 'Play' links

Scenario: test Subscription module
When the User clicks on a 'Subscribe' module to go to 'Sign up for my newsletter' to 'Submit' the form successfully
Then the User should see 'The form was submitted successfully. Thank you!'