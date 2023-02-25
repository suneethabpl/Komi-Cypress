class Thumbnail {

    visibleThumbnails() {
        cy.get(".original").should('exist').scrollIntoView({ offset: { top: -600, left: 0 } })
        cy.get(".ant-row").contains('sangria', { timeout: 3000 }).should('be.visible');
    }

    musicTracksSection(tracks) {
        cy.contains(tracks).click();
        cy.url().should('include', '/#0a4b6f76-79a3-4f01-8505-2671d340d17a');
    }

}
const thumbnails = new Thumbnail();

export default thumbnails;