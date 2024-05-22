describe('template spec', () => {
  it('My First Test', () => {
    cy.visit('/project/py16-cypress_test/kanban')
    cy.get('.center > .close').click
    cy.contains('Test')
  })
})