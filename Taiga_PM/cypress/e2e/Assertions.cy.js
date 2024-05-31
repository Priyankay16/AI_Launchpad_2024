/// <reference types="cypress" />
describe('Interaction', () => {
    it('Adding assertions', () => {
     cy.visit('https://tree.taiga.io/project/py16-extra/kanban')
     cy.get(':nth-child(1) > input')
       .clear('priyanka.manaji.yadav.16@gmail.com');
     cy.get(':nth-child(1) > input')
       .type('priyanka.manaji.yadav.16@gmail.com');
     cy.get('.login-password > input')
       .clear('Pyadav16#');
     cy.get('.login-password > input')
       .type('Pyadav16#');
     cy.get('.end > .btn-small')
       .click();
     cy.wait(3000)
  //Adding 1st card 
     cy.get('.add-action').eq(0)
       .click({force: true})
     cy.get('.main > :nth-child(1) > .ng-pristine')
       .type('First Card{enter}')
     cy.get('#submitButton')
       .click({force: true})
     cy.wait(3000)
   // Adding 2nd card    
     cy.get('.add-action').eq(0)
       .click({force: true})
     cy.get('.main > :nth-child(1) > .ng-pristine')
       .type('second Card{enter}')
     cy.get('#submitButton')
       .click({force: true})

    // Added card should be visible    
     cy.get('.card-inner')
       .should('be.visible')
    // check if 2 cards are visible 
    cy.get('.card-inner')
      .should('have.length',2)
    // check title of the list 
    cy.get('div.title > div')
      .first()
      .should('have.text','New')
    })
  })