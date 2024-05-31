/// <reference types="cypress" />
describe('Chanining and retrying', () => {
    it('chaining and retrying',{defaultCommandTimeout:6000}, () => {
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

  // chaining commands
     cy.contains('.card-subject','First Card')
  
     cy.get('.card-inner',{timeout:6000})
       .eq(3)
       .contains('.card-subject','Test 2')

    cy.get('.card-subject') // query
      .eq(1) // query
      .should('contains.text','second Card') // assertion
      .click() // action

      cy.get('.detail-subject')
        .should('have.text','second Card')
      
    })
  })