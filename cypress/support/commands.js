// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// En cypress/support/commands.js

Cypress.Commands.add("plantillaCypress", (descripcion, url, titulo, tiempo) => {
    describe(descripcion, () => {
      it("test", () => {
        cy.visit(url);
        cy.title().should('eq', titulo);
        cy.wait(tiempo);
      });
    });
  });
  
  Cypress.Commands.add("elementoVisible", (selector, t) => {
    let tiempo=t
    cy.get(selector).should('be.visible');
    cy.wait(tiempo);
  });
  
  Cypress.Commands.add("elementoVisibleXpath", (xpath, t) => {
    let tiempo=t
    cy.xpath(xpath).should('be.visible');
    cy.wait(tiempo);
  });
  
  Cypress.Commands.add("typeCustom", (selector, texto, t) => {
    let tiempo=t
    cy.get(selector).should('be.visible').type(texto);
    cy.wait(tiempo);
  });
  
  Cypress.Commands.add("typeXpath", (xpath, texto, t) => {
    let tiempo=t
    cy.xpath(xpath).should('be.visible').type(texto);
    cy.wait(tiempo);
  });
  
  Cypress.Commands.add("clickForce", (selector, t) => {
    let tiempo=t
    cy.get(selector).should('be.visible').click({force: true});
    cy.wait(tiempo);
  });

  Cypress.Commands.overwrite("click", (selector, t) => {
    let tiempo=t
    cy.get(selector).should('be.visible').click();
    cy.wait(tiempo);
  });
  
  Cypress.Commands.add("clickForceXpath", (xpath, t) => {
    let tiempo=t
    cy.xpath(xpath).should('be.visible').click({force: true});
    cy.wait(tiempo);
  });

  Cypress.Commands.add("clickXpath", (xpath, t) => {
    let tiempo=t
    cy.xpath(xpath).should('be.visible').click();
    cy.wait(tiempo);
  });
  
  Cypress.Commands.add("waitCustom", (t) => {
    let tiempo=t
    cy.wait(tiempo);
  });
  
  Cypress.Commands.add("comboSelect", (selector, opcion, t) => {
    let tiempo=t
    cy.get(selector).select(opcion, {force: true});
    cy.wait(tiempo);
  });
  
  Cypress.Commands.add("comboSelectXpath", (xpath, opcion, t) => {
    let tiempo=t
    cy.xpath(xpath).select(opcion, {force: true});
    cy.wait(tiempo);
  });
  
  Cypress.Commands.add("checkCustom", (selector, t) => {
    let tiempo=t
    cy.get(selector).check().should('be.checked');
    cy.wait(tiempo);
  });
  
  Cypress.Commands.add("uncheckCustom", (selector, t) => {
    let tiempo=t
    cy.get(selector).uncheck().should('not.be.checked');
    cy.wait(tiempo);
  });
  
  Cypress.Commands.add("checkXpath", (xpath, t) => {
    let tiempo=t
    cy.xpath(xpath).check().should('be.checked');
    cy.wait(tiempo);
  });
  
  Cypress.Commands.add("uncheckXpath", (xpath, t) => {
    let tiempo=t
    cy.xpath(xpath).uncheck().should('not.be.checked');
    cy.wait(tiempo);
  });
  
  Cypress.Commands.add("verificarTextoContiene", (selector, texto, t) => {
    let tiempo=t
    cy.get(selector).should('be.visible').contains(texto);
    cy.wait(tiempo);
  });
  
  Cypress.Commands.add("verificarTextoContieneXpath", (xpath, texto, t) => {
    let tiempo=t
    cy.xpath(xpath).should('be.visible').contains(texto);
    cy.wait(tiempo);
  });
  
  Cypress.Commands.add("checkDosOpciones", (selector, opcion1, opcion2, t) => {
    let tiempo=t
    cy.get(selector).check(opcion1, opcion2);
    cy.wait(tiempo);
  });

  Cypress.Commands.add("checkDosOpcionesXpath", (selector, opcion1, opcion2, t) => {
    let tiempo=t
    cy.xpath(selector).check(opcion1, opcion2);
    cy.wait(tiempo);
  });
  
  Cypress.Commands.add("plantillaCypressBefore", (descripcion, url, titulo, nombreUsuario, contraseña, btnLogin, selector, t) => {
    describe(descripcion, () => {
        let tiempo=t
      before(() => {
        cy.visit(url);
        cy.title().should('eq', titulo);
        cy.wait(tiempo);
        cy.get(nombreUsuario).should('be.visible').clear().type('NombreUsuario');
        cy.get(contraseña).should('be.visible').clear().type('Contraseña');
        cy.wait(tiempo);
        cy.get(btnLogin).should('be.visible').click();
      });
  
      after(() => {
        cy.log('##############ULTIMO CICLO FINAL DE TODO###############');
        cy.wait(tiempo);
        cy.get(selector).should('be.visible').click({force: true});
      });
  
      it("test1", () => {
        cy.log('hola');
        cy.wait(tiempo);
      });
  
      it("test2", () => {
        cy.log('hola');
        cy.wait(tiempo);
      });
  
      it("test3", () => {
        cy.log('hola');
        cy.wait(tiempo);
      });
    });
  });
  
  Cypress.Commands.add("goBack", () => {
    cy.go('back');
  });
  
  Cypress.Commands.add("goForward", () => {
    cy.go('forward');
  });
  
  Cypress.Commands.add("reloadCustom", () => {
    cy.reload();
  });
  
  Cypress.Commands.add("itCustom", (test) => {
    it(test, () => {});
  });
  
  Cypress.Commands.add("plantillaHooks", () => {
    before(() => {
      cy.log('Esto inicia antes que todo, solo una vez');
    });
  
    beforeEach(() => {
      cy.log('Esto se repite en cada uno de los test, muy importante');
    });
  
    afterEach(() => {
      cy.log('Esto se hace al final de todos los test');
    });
  
    after(() => {
      cy.log('##############ULTIMO CICLO FINAL DE TODO###############');
    });
  });

  Cypress.Commands.add('Validar_Campo', (selector,men,nombre_campo,t) => {
    cy.xpath(selector).should('be.visible').should("contain", men).then((val)=>{
            cy.log("*************************")
            cy.log("El/La o Los/Las " + nombre_campo + " son Incorrectos")
            cy.log("*************************")       
    });
  
})

  