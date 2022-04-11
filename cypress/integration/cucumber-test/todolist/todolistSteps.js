import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'https://example.cypress.io/todo';

Given('I open ToDo list page', () => {
    cy.visit(url);
});

When('I type a new element', () => {
    cy.get('.new-todo').type('Buy Milk');
});

When('I press enter', () => {
    cy.get('.new-todo').type('{enter}');
});

Then('I should see the new element at the end of the list', () => {
    cy.get('.todo-list li:last').contains('Buy Milk');
});
