/// <reference types="Cypress" />

describe('Xpath Functionality',function(){

    it('Login Test using Conduit by Xpath locators',function(){
        cy.visit('https://react-redux.realworld.io/')
        cy.xpath('//a[normalize-space()="conduit"]')
        .should('have.text','conduit')
      cy.xpath('//a[normalize-space()="Sign in"]').click()
      cy.xpath('//input[@placeholder="Email"]').type('priyanka.manaji.yadav.16@gmail.com')
      cy.xpath('//input[@placeholder="Password"]').type('test123')
      cy.xpath('//button[normalize-space()="Sign in"]').click()
      cy.xpath('//a[@href="#settings"]').click()
      cy.xpath('//button[normalize-space()="Or click here to logout."]').click()
    })
})