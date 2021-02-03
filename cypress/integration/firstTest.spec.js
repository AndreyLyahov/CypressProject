/// <reference types="Cypress" />

it('', () => {

    cy.visit('https://docs.cypress.io/guides/getting-started/installing-cypress.html#Opening-Cypress')
    cy.contains('Getting Started');
})

it('', () => {

    cy.visit('https://docs.cypress.io/guides/getting-started/installing-cypress.html#Opening-Cypress')
    cy.contains('strong','GETTING Started');
})

it.only('', () => {

    cy.visit('https://docs.cypress.io/guides/getting-started/installing-cypress.html#Opening-Cypress')
    cy.contains('GETTING Started', {matchCase: false});
}) ///test