describe('Login tests', () => {
  before(() => {
    cy.visit(Cypress.env('default_server'));
  });

  it('displays two todo items by default', () => {
    cy.get('.login').click();
    cy.get('#email').type(Cypress.env('username'));
    cy.get('#passwd').type(Cypress.env('password'));
    cy.get('#SubmitLogin').click();
  })
})
