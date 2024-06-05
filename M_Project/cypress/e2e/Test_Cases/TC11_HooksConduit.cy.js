/// <reference types= "Cypress"/>
describe('Hooks Implemetation',function(){

    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        
    })

    it('Search in admin tab with username',function(){
        cy.contains('Admin').click()
        cy.get('.oxd-input.oxd-input--active').eq(1).type('Admin')
        cy.get('button[type="submit"]').click()
    })

    it('Search in admin tab with Employee name',function(){
        cy.contains('Admin').click()
        cy.get('.oxd-autocomplete-text-input').type('Ravi M B')
        cy.get('button[type="submit"]').click()
    })

    afterEach(function(){
        cy.get('.oxd-userdropdown-tab').click()
        cy.contains('Logout').click()
    })
})