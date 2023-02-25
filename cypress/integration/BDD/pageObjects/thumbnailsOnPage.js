class Thumbnail {

    visibleThumbnails() {
        cy.get(".original").should('exist').scrollIntoView({ offset: { top: -600, left: 0 } })
        cy.get(".ant-row").contains('sangria', { timeout: 3000 }).should('be.visible');
    }

    musicTracksSection(tracks) {
        cy.contains(tracks).click();
        cy.url().should('include', '/#0a4b6f76-79a3-4f01-8505-2671d340d17a');
    }

    sideNavigationArrow() {
        cy.get('.btn-swiper__wrapper > :nth-child(2) > svg').click();
    }

    validatepagination() {
        const goToNextPage = () => {
            const slidearrow = cy.get('.btn-swiper__wrapper > :nth-child(2) > svg')
                .invoke('attr', 'disabled').then(disabled => {
                    if (disabled === 'disabled') {
                        slidearrow.should('have.attr', 'disabled')
                    } else {
                        slidearrow.click().then(goToNextPage)
                    }
                })
        }
        cy.log(goToNextPage)
    }

    preSaveBtn(presave) {
        cy.get('.music-item--single').find('span').should('be.visible').should('not.be.disabled').contains(presave).click();
        cy.get('[data-testid="signup-btn-link"]').click();
        cy.contains('Accept Cookies').click();
        cy.fixture("signupLoginForSpotify.json").then((user) => {
            cy.get('#email').focus().type(user.email);
            cy.get('[id="confirm"]').type(user.confirm);
            cy.get('[id="password"]').type(user.password);
            cy.get('#displayname').type(user.displayName);
            cy.get('[id="day"]').type(user.day);
            cy.get('#month').select('February');
            cy.get('[id="year"]').type(user.year);
            cy.get(':nth-child(2) > .Label-sc-17gd8mo-0 > .Indicator-sc-hjfusp-0').click();
            cy.get(':nth-child(8) > .Checkbox-sc-svpvf6-0 > .Label-sc-cpoq-0 > .Indicator-sc-1airx73-0').click();
        })
    }

    preSavedBtn(presaved) {
        cy.get('.SignupButton__ButtonContainerSignup-cjcq5h-0').contains('Sign up').click({ timeout: 3000 });
        cy.contains('Log in').click();
        cy.fixture("signupLoginForSpotify.json").then((user) => {
            cy.get('[data-testid="login-username"]').focus().type(user.email);
            cy.get('[data-testid="login-password"]').focus().type(user.password);
            cy.get('[data-testid="login-button"]').click({ timeout: 3000 });
            cy.contains('Agree').click();
            cy.get('.ant-tag').should('be.visible').should('not.be.disabled').contains(presaved)
            cy.get('.ant-modal-close-x').click();
            cy.contains('Save successfully').should('have.text', 'Save successfully');
        })
    }

    postSavedBtn(postsaved) {
        cy.get('.music-item--single').scrollIntoView().find('span').should('be.visible').contains(postsaved);
    }

}
const thumbnails = new Thumbnail();

export default thumbnails;