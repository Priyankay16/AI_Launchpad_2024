describe('template spec', () => {
  it('Project', () => {
    cy.visit('/project/py16-cypress_test/kanban')
    cy.get('.center > .close').click
    cy.contains('.card-inner','Test')
    cy.get('[data-id="6321467"]')
  })
})