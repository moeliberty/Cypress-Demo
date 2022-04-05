// test.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("Buy on Redpill", () => {
    beforeEach(() => {
        cy.visit('http://241.redpill.localhost/fr/')
    })

    it("adds a single todo", () => {
        cy.task('redis')
        // cy.get(".todo-list li").should("have.length", 3)
        // cy.visit()
        // cy.exec('yarn run redis', { failOnNonZeroExit: false }).then((result) => {
        //     cy.log(result)
        // })
    })
})
