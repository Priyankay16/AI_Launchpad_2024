/// <reference types= "Cypress"/>
describe('custom commands',function(){

    beforeEach(function(){
        cy.fixture('Conduit_Testdata').as('data')
    })

    it('Conduit - Valid Credentials',function(){
        cy.conduitlogin(this.data.validEmailid, this.data.ValidPassword)
        cy.contains('Setting').click()
        cy.contains('Or click here to logout.').click()
    })

    it('Conduit - Invalid Credentials',function(){
        cy.conduitlogin(this.data.InvalidEmailid, this.data.InValidPassword)
        cy.get('.error-messages').should('contain','email or password is invalid')
    })
})