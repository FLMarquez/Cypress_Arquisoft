class Proyecto1_PO{
    InicioSistema(){
        let tiempo = 1000;
        before(() => {
    cy.visit('url');
            cy.title().should('eq', 'titulo');
            cy.wait(tiempo);
        });
    }
}//FINAL

export default Proyecto1_PO;