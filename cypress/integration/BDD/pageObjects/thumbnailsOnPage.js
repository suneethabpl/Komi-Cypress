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

    youtubeVideo(komi) {
        cy.get('.youtube-player__overlay').scrollIntoView().find('button').should('be.visible').click();
        cy.intercept("https://www.youtube.com/youtubei/v1/player?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false", (req) => {
            req.continue((res) => {
                res.send();
            });
        });
        cy.url().should('include', komi)

    }

    verifyVideoOnYoutubeSite(youtubevideo) {
        cy.visit('https://www.youtube.com/embed/c0-hvjV2A5Y?autoplay=1&mute=1&controls=1&origin=https%3A%2F%2Ftestdummy.komi.io&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1')
        cy.contains(youtubevideo).invoke("removeAttr", "target").click({ timeout: 5000 });
        cy.get('.eom-button-row').contains('Accept all').scrollIntoView().should('exist').click();
    }

    music(music) {
        cy.contains(music).scrollIntoView().should('have.text', 'Single Music')
    }

    moreBtn(btn) {
        cy.contains(btn).click();
    }

    links(play) {
        cy.get('[data-testid="music-item"]').should('have.length', '4');
        cy.get('[aria-label="spotify-play-button"]').find('span').contains(play).click().should('exist');
        cy.get('[aria-label="apple_music-play-button"]').find('span').contains(play).click().should('exist');
        cy.get('[aria-label="youtube_music-play-button"]').find('span').contains(play).click().should('exist');
        cy.get('.accept-cookies-button').contains('ACCEPT').click();
        cy.get('[aria-label="deezer-play-button"]').find('span').contains(play).click().should('exist');
        cy.get('[data-testid="music-item"]').find('span').contains(play).click().should('exist');
    }

    subscription(Subscribe, signupfornews, submit) {
        cy.get(':nth-child(4) > .ant-btn > .ant-typography').scrollIntoView().contains(Subscribe).click();
        cy.get('.flex--1 > .text--semibold24').contains(signupfornews).click();
        cy.fixture("signupLoginForSpotify.json").then((user) => {
            cy.get('#INPUT').type(user.name);
            cy.get('#EMAIL_ADDRESS').type(user.email);
        })
        cy.get('.ant-form-item-control-input-content > .ant-btn').contains(submit).click();
    }

    submitFormMessage() {
        cy.get('.ant-message').should('be.visible').should('have.text', 'The form was submitted successfully. Thank you!')
    }

}
const thumbnails = new Thumbnail();

export default thumbnails;