import { defineStep } from 'cypress-cucumber-preprocessor/steps';

defineStep('I can see the element with class {string}', (className) => {
    cy.get('#' + className).should('be.visible');
});

defineStep('I am connected in the front page', () => {
    cy.visit('https://241.preprod.rpstage.com').get('#account_menu').click();
    cy.url().should('include', '/login');
    cy.get('#username').should('be.visible').type('elibertytest@eliberty.fr');
    cy.get('#password').should('be.visible').type('elibertytest');
    cy.get('#_submit').click();
    cy.visit('https://241.preprod.rpstage.com');
});
