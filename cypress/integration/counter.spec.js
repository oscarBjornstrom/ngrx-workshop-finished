describe('Counter page', () => {
  it('should visit counter page', function () {
    cy.visit('counter');
    cy.get('mat-card').contains('Counter')
  });

  it('should increment the counter', () => {
    cy.get('[data-cy=add]').click();
    cy.get('[data-cy=counter]').contains(1)
  });
  it('should decrement the counter', () => {
    cy.get('[data-cy=remove]').click();
    cy.get('[data-cy=counter]').contains(0);
  });
  it('should reset the counter', function () {
    for (let i = 0; i < 10; i++) {
      cy.get('[data-cy=add').click()
    }
    cy.get('[data-cy=counter]').contains(10);
    cy.get('[data-cy=reset]').click();
    cy.get('[data-cy=counter]').contains(0);
    
  });

  it('should set a value based on the input', function () {
    cy.get('[data-cy=setInput]').clear();
    cy.get('[data-cy=setInput]').type('25');
    cy.get('[data-cy=setVal]').click();
    cy.get('[data-cy=counter]').contains(25);

  });

});
