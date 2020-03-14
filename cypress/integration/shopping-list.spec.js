describe('shopping list', () => {
  it('should visit the shopping list page', () => {
    cy.visit('shopping-list');
  });
  it('should add a shopping list item ', function () {
    cy.get('[data-cy=itemNameInput]').type('apples');
    cy.get('[data-cy=itemQuantityInput]').type('5');
    cy.get('[data-cy=submitButton]').click();

    cy.get('[data-cy=itemNameInput]').should('have.value', '');
    cy.get('[data-cy=itemQuantityInput]').should('have.value', '');

    cy.get('[data-cy="listItem"]').should('have.length', 1);
  });

  it('should dash a list item', function () {
    cy.get('[data-cy=toggleAcquired]').click();
    cy.get('[data-cy=toggleAcquired]').should('have.css', 'text-decoration' )
  });

  it('should delete a list item', function () {
    cy.get('[data-cy=removeItem]').click()
    cy.get('[data-cy="listItem"]').should('have.length', 0);
  });
});
