/// <reference types="cypress" />
require('cypress-xpath')


describe('PRUEBA DE LA FUNCIONALIDAD DE USUARIOS: HAPPY PATH', () => {
    it('passes', () => {
      //INGRESO A LA WEB DE ARQUISOFT
      cy.visit('https://localhost:7085/')   
     
      //CLIC EN INICIAR SESIÓN COMO USUARIO
      cy.get(':nth-child(1) > .card > .card-body > .card-title').should("be.visible").click()     
     //ESCRIBIR EL USUARIO Y CONTRASEÑA EN EL ACCESO A USUARIOS       
      cy.get('#Mail').should("be.visible").type("admin@admin.com")
      cy.get('#Password').should("be.visible").type("1234")
       //HACER CLIC EN EL BOTÓN INGRESAR
       cy.get('.btn-primary').should("be.visible").click()
      //INGRESAR A USUARIOS - CLIC USUARIOS
      cy.get(':nth-child(3) > .nav-link').should("be.visible").click()  
      //BUSCAR EL USUARIO
      cy.get('#dt-search-0').should("be.visible").type("Fulgenzi{enter}")
      cy.get('.btn-info').should("be.visible").click()  
             
      //VERIFICAR LA EXISTENCIA DE PREGUNTA AL CAMBIAR ROL
      cy.get('h1').should("be.visible").contains("¿Desea cambiar el rol de: Fulgenzi, Melissa ?")

      //SELECCIONAR EL ROL NUEVO
      cy.get('#UserRoleId').select('Soporte')
     
      
      //CLIC EN BOTÓN CAMBIAR
      cy.get('form > .btn-primary').should("be.visible").click()

      cy.get('#dt-search-0').should("be.visible").type("Fulgenzi{enter}")
      cy.get('.btn-info').should("be.visible").click();       
      cy.get('#UserRoleId').should("be.visible").contains("Soporte")    
     
//CERRAR  SESIÓN
cy.get(':nth-child(8) > .nav-link').should("be.visible").contains("Cerrar sesión").click()        
cy.get('.modal-body').should("be.visible").contains("¿Estás seguro de que deseas cerrar sesión?")  
cy.get('.modal-footer > .btn-primary').should("be.visible").click() 
    })
})
