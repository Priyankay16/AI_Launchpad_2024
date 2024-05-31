/// <reference types= "Cypress"/>

describe('Login funntionality',function(){

    it('Login test using conduit', function() {
        cy.visit('https://react-redux.realworld.io/')

        cy.get('.navbar-brand')
          .should('have.text','conduit')
        cy.get('a[href="#login"]').click()
        cy.get('input[type="email"]').type('priyanka.manaji.yadav.16@gmail.com')
        cy.get('input[type="password"]').type('test123')
        cy.get('button[type="submit"]').click()
        cy.get('a[href="#settings"]').click()
        cy.get('.btn.btn-outline-danger').click()
    } )

})

