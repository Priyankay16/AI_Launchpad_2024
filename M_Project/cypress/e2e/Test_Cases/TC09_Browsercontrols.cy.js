/// <reference types="Cypress" />
describe('Advanced UI Elements',function(){

    it('Browser Controls',function(){
        cy.visit('https://react-redux.realworld.io/')
        cy.contains('Sign in').click()
        cy.go('back')
        cy.go('forward')
        cy.go(-1) // it will click back button on the browser 
        cy.go(1) // click forward button 
        cy.get('input[type="email"]').type('cypress')
        cy.reload()

    })
})