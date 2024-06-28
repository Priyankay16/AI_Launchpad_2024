import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

beforeEach(function () {
    cy.fixture('conduitLoginData').as('data')
})

Given('User is on the login page', function () {
    cy.visit('https://react-redux.realworld.io/')
    cy.get('.navbar-brand')
        .should('have.text', 'conduit')
    cy.get('a[href="#login"]').click()

})

When('User login with valid credentials', function (dataTable) {
    cy.get('input[type="email"]').type(dataTable.rawTable[1][0])
    cy.get('input[type="password"]').type(dataTable.rawTable[1][1])
    cy.get('button[type="submit"]').click()

})

When('User click on the settings button', function () {
    cy.get('a[href="#settings"]').click()

})

When('User click on the logout button', function () {
    cy.get('.btn.btn-outline-danger').click()

})

Then('User should be routed back to login page', function () {
    cy.title().should('eq', 'Conduit')

})