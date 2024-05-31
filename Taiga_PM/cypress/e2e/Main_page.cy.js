describe('template spec', () => {
  it('project main page', () => {
    cy.visit('https://tree.taiga.io/projects/')
    cy.get(':nth-child(1) > input').clear('priyanka.manaji.yadav.16@gmail.com');
    cy.get(':nth-child(1) > input').type('priyanka.manaji.yadav.16@gmail.com');
    cy.get('.login-password > input').clear('Pyadav16#');
    cy.get('.login-password > input').type('Pyadav16#');
    cy.get('.end > .btn-small').click();
    cy.wait(3000)
    cy.get('.dropdown-project-list-projects > span').click()
    cy.wait(3000)
    cy.get('[class="list-itemtype-project tg-scope"]')
    .eq(1)

  })

  
})