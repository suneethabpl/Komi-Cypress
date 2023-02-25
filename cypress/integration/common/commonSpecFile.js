///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import homepage from '../BDD/pageObjects/homepage'

Given("the User visits to {string} page", (title) => {
    homepage.visitToHome(title);
})