/// <reference types="cypress" />
require('cypress-xpath')


describe('PRUEBA DE LA FUNCIONALIDAD DE USUARIOS: HAPPY PATH', () => {
    it('passes', () => {
      //INGRESO A LA WEB DE ARQUISOFT
      cy.visit('https://localhost:7085/')  
     
      //CLIC EN INICIAR SESIÓN COMO USUARIO
      cy.get(':nth-child(1) > .card > .card-body > div.text-center > .btn').should("be.visible").click()     
     //ESCRIBIR EL USUARIO Y CONTRASEÑA EN EL ACCESO A USUARIOS       
      cy.get('#Mail').should("be.visible").type("admin@admin.com")
      cy.get('#Password').should("be.visible").type("1234")
      //HACER CLIC EN EL BOTÓN INGRESAR
      cy.get('.btn-primary').should("be.visible").click()
      //INGRESAR A USUARIOS - CLIC USUARIOS
      cy.get(':nth-child(3) > .nav-link').should("be.visible").click()   
      
      //VERIFICAR LA EXISTENCIA DEL BOTÓN CAMBIAR ROL
      cy.get(':nth-child(1) > :nth-child(6) > .btn-info').should("be.visible").contains("Cambiar Rol").click()

      //VERIFICAR LA EXISTENCIA DE PREGUNTA AL CAMBIAR ROL
      cy.get('h1').should("be.visible").contains("¿Desea cambiar el rol de: D´Gaudio, German ?")

      //SELECCIONAR EL ROL NUEVO
      cy.get('#UserRoleId').select('Soporte')

      //CLIC EN BOTÓN CAMBIAR
      cy.get('form > .btn-primary').should("be.visible").click()

     cy.get(':nth-child(3) > .nav-link').should("be.visible").click(); 
     cy.get(':nth-child(1) > :nth-child(6) > .btn-primary').should("be.visible").click();
     
     //VALIDAR EL CAMBIO DEL ROL DE USUARIO
     cy.get('#UserRoleId').should("be.visible").contains("Soporte")
     

    })
})