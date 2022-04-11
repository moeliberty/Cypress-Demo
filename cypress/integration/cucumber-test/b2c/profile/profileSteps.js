import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('I click on the profile icon', () => {
    cy.get('#account_menu').click();
    cy.get('#account_menu').contains('Mon Compte').click();
});

Then('I go in the profile homepage', () => {
    cy.url().should('include', '/profil');
    cy.get('#profil_menu')
        .should('be.visible')
        .find('li')
        .first()
        .should('have.class', 'active');
});

When('I click on command menu', () => {
    cy.get('#profil_menu').contains('Mes Commandes').click();
});

Then('I go in the profile command page', () => {
    cy.url().should('include', '/profil/orders');
});
