describe('Home page', () => {
  it('should visit home page', function () {
    cy.visit('');
    cy.get('.mat-toolbar > h1').contains('NGRX');
  });
  it('should open sideNav', function () {
    cy.get('.mat-icon-button').click();
    cy.get('.mat-list-item-content').should('have.length', 5)
  });
});


