//your JS code here. If required.
it('types and checks the input value in uppercase', () => {
  cy.visit(baseUrl); // Visit your URL where this HTML is hosted
  cy.get('#fname').type('jOhN dOe');
  cy.get('body').click(); // Blur the input field
  cy.get('#fname').should('have.value', 'JOHN DOE'); // Ensure the value is uppercase
});
