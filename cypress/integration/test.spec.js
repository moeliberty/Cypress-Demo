// test.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("Buy on Redpill", () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
    })

    it("adds a single todo", () => {
        cy.get(".new-todo").type("Buy Milk{enter}")
        cy.get(".todo-list li").should("have.length", 3)
    })
})
