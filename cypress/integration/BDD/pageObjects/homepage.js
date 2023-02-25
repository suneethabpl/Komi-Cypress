class HomePage {

    visitToHome() {
        cy.visit(Cypress.env('baseUrl'));
    }
    verifyKomi(title) {
        cy.title().should('include', title)
    }

}

const homepage = new HomePage();

export default homepage;