///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import thumbnails from "../pageObjects/thumbnailsOnPage"

Given("the User visibles all {string}", (thumbnail) => {
    thumbnails.visibleThumbnails(thumbnail);
})
When('the User navigates to {string} section', (tracks) => {
    thumbnails.musicTracksSection(tracks);
})
When("the User clicks on the side navigation arrow on the Music Tracks", () => {
    thumbnails.sideNavigationArrow();
    thumbnails.validatepagination();
})
When("the User clicks on the {string} button to validate {string}", (presave, presaved) => {
    thumbnails.preSaveBtn(presave)
    thumbnails.preSavedBtn(presaved);
})
Then("the User should see {string} button", (postsaved) => {
    thumbnails.postSavedBtn(postsaved);
})
When("the User clicks on Youtube video to asserts it redirects successfully with {string} site", (komi) => {
    thumbnails.youtubeVideo(komi);
})
Then("the User clicks on Youtube video to {string}", (youtubevideo) => {
    thumbnails.verifyVideoOnYoutubeSite(youtubevideo)
})
When("the User on the {string} module to click on {string} button to validate all relevant {string} links", (music, btn, play) => {
    thumbnails.music(music)
    thumbnails.moreBtn(btn)
    thumbnails.links(play)
})
When("the User clicks on a {string} module to go to {string} to {string} the form successfully", (Subscribe, signupfornews, submit) => {
    thumbnails.subscription(Subscribe, signupfornews, submit);
})
Then("the User should see {string}", (message) => {
    thumbnails.submitFormMessage(message)
})