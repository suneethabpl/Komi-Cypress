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