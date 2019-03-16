describe('counter', () => {
  it('can increment the count', () => {
    cy.visit('/')
      .getByText(/increment/i)
      .click()
      .getByTestId('total')
      .should('have.text', 'Count: 1');
  });
});
