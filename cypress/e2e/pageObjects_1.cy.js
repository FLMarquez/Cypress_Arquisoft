import Proyecto1_PO from '../../cypress/support/pageObjects/proyecto1_PO'
/// <reference types='cypress' />
require('cypress-xpath')

describe('descripción', () => {

    const master=new Proyecto1_PO()

        Cypress.on('uncaugth:exception',(err, runnable) => {
        return false
        })
    
    it('test', () => {
    cy.log('hola')  
    });
});