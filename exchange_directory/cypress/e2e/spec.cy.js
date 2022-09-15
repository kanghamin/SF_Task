describe('rendering test', () => {
  it('rendering home', () => {
    cy.visit('/'); // checking home page rendering
    cy.get('tbody tr').should('have.length', 10); // checking if ten lists are loaded
    cy.get('tbody tr').first().should('be.visible'); // checking first list is visible
    cy.get('tbody tr').first().click(); // checking first list is clickable
    cy.visit('/').get('button').first().click(); // checking next button is working
    cy.get('.previous_button').click(); // checking previous button is visible and clickable
  });

  it('rendering detail page', () => {
    cy.visit('http://localhost:3000/exchanges/binance'); // checking binance detail page is working
    cy.get('.exchange_detail_name').should('be.visible'); // checking exchange detail is visible
    cy.get('.exchange_info_box').should('have.length', 5); // checking exchange info shows five boxes
    cy.get('.exchange_link').should('have.length', 1); // checking if any of the exchange's social media lists are visible
    cy.get('.exchange_detail_back').click(); // chceking back button is working
  });
});
