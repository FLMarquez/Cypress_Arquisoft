/// <reference types='cypress' />
require('cypress-xpath')


describe('Ingresar a la Web como Cliente', () => {
let tiempo = 1000;
  before(() => {
    cy.visit('https://localhost:7085/');
    //cy.title().should('eq', 'Título');
    cy.wait(tiempo);
});
  it('Ingreso Web', () => {
    cy.get('.display-1').should('be.visible');
    cy.wait(tiempo) 
    cy.get(':nth-child(1) > .card > .card-body > .card-title').should('be.visible');
    cy.wait(tiempo)
    cy.get(':nth-child(2) > .card > .card-body > .card-title').should('be.visible');
    cy.wait(tiempo)
    cy.get(':nth-child(1) > .card > .card-body > .card-text').should('be.visible');
    cy.wait(tiempo)
    cy.get(':nth-child(2) > .card > .card-body > .card-text').should('be.visible');
    cy.wait(tiempo)
});
});

  


  