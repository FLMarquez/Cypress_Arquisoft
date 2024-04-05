/// <reference types="cypress" />
require('cypress-xpath')


describe('PRUEBA DE LA FUNCIONALIDAD DE USUARIOS: HAPPY PATH', () => {
    it('passes', () => {
       //INGRESO A LA WEB DE ARQUISOFT
      cy.visit('https://localhost:7085/')  
      //VERIFICAR NOMBRE ARQUISOFT AL INGRESAR A LA PÁGINA
      cy.get('.display-1').should("be.visible") 
      //VERIFICAR LAS IMAGENES DEL LOGIN, EL TÍTULO DE LOGIN USUARIO Y DESCRIPCIÓN
      cy.get(':nth-child(1) > .card > .card-img-top').should("be.visible")
      cy.get(':nth-child(2) > .card > .card-img-top').should("be.visible")
      cy.get(':nth-child(1) > .card > .card-body > .card-title').should("be.visible")
      cy.get(':nth-child(2) > .card > .card-body > .card-title').should("be.visible")
      cy.get(':nth-child(1) > .card > .card-body > .card-text').should("be.visible")
      cy.get(':nth-child(2) > .card > .card-body > .card-text').should("be.visible")
      //CLIC EN INICIAR SESIÓN COMO USUARIO
      cy.get(':nth-child(1) > .card > .card-body > .card-title').should("be.visible").click()     
     //ESCRIBIR EL USUARIO Y CONTRASEÑA EN EL ACCESO A USUARIOS       
      cy.get('#Mail').should("be.visible").type("admin@admin.com")
      cy.get('#Password').should("be.visible").type("1234")
      //HACER CLIC EN EL BOTÓN INGRESAR
      cy.get('.btn-primary').should("be.visible").click()
      //INGRESAR A CLIENTES - CLIC CLIENTES
      cy.get(':nth-child(2) > .nav-link').should("be.visible").click()   
      
      //BUSCAR Y ELIMINAR EL CLIENTE CON DNI 31355352
      cy.get('#dt-search-0').should("be.visible").type("31355352{enter}")
      
      cy.get('.btn-danger').should("be.visible").click()
      cy.get('h3.mb-3').should("be.visible").contains("¿Está seguro que desea borrar al cliente Marquez, José Matías?")
      cy.get('form > .btn-primary').should("be.visible").click()
      
      cy.get('#dt-search-0').should("be.visible").type("31355352{enter}")
      cy.get('.dt-empty').should("be.visible").contains("No se encontraron resultados")

     //INGRESAR A PROYECTO, BUSCAR PROYECTO CASA DE 2 HABITACIONES CON HALL Y ELIMINARLO
     cy.get(':nth-child(5) > .nav-link').should("be.visible").click()
     cy.get('#dt-search-0').should("be.visible").type("Casa de 2 habitaciones con hall{enter}")
     cy.get('.btn-danger').should("be.visible").click()
    cy.get('h3.mb-3').should("be.visible").contains("¿Está seguro que desea borrar el proyecto Casa de 2 habitaciones con hall")
    cy.get('.btn-danger').should("be.visible").click()
    cy.get('#dt-search-0').should("be.visible").type("Casa de 2 habitaciones con hall{enter}")
    cy.get('.dt-empty').should("be.visible").contains("No se encontraron resultados")



     //INGRESAR A USUARIOS - CLIC USUARIOS
     cy.get(':nth-child(3) > .nav-link').should("be.visible").click()   
      
     //BUSCAR Y ELIMINAR EL CLIENTE CON DNI 32785541
     cy.get('#dt-search-0').should("be.visible").type("32785541{enter}")
     
     cy.get('.btn-danger').should("be.visible").click()
     cy.get('h3.mb-3').should("be.visible").contains("¿Está seguro que desea borrar al Usuario Marquez, Federico Lucas?")
     cy.get('.btn-danger').should("be.visible").click()
     
     cy.get('#dt-search-0').should("be.visible").type("32785541{enter}")
     cy.get('.dt-empty').should("be.visible").contains("No se encontraron resultados")

     //BUSCAR Y ELIMINAR TIPLOGÍA
     cy.get(':nth-child(4) > .nav-link').should("be.visible").click()
     cy.get('#dt-search-0').should("be.visible").type("Vivienda Clásica con 2 habitaciones y hall{enter}")
     cy.get('.btn-danger').should("be.visible").click()
     cy.get('h3.mb-3').should("be.visible").contains("¿Está seguro que desea borrar el tipo Vivienda Clásica con 2 habitaciones y hall?")
     cy.get('.btn-danger').should("be.visible").click()
     
     cy.get('#dt-search-0').should("be.visible").type("Vivienda Clásica con 2 habitaciones y hall{enter}")
     cy.get('.dt-empty').should("be.visible").contains("No se encontraron resultados")


     //BUSCAR Y ELIMINAR SERVICIO
     cy.get(':nth-child(6) > .nav-link').should("be.visible").click()
     //cy.get('#dt-search-0').should("be.visible").type("Construcción de Vivienda{enter}")
     cy.get(':nth-child(3) > .card > .card-body > .btn-group > .btn-danger').should("be.visible").click()
     cy.get('h3.mb-3').should("be.visible").contains("¿Está seguro que desea borrar el servicio Construcción de Vivienda")
     cy.get('.btn-danger').should("be.visible").click()
     
     
      //CERRAR SESIÓN  
      cy.get(':nth-child(8) > .nav-link').should("be.visible").click()   
      cy.get('.modal-body').should("be.visible").contains("¿Estás seguro de que deseas cerrar sesión?")  
      cy.get('#confirmLogoutModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should("be.visible").click()                          
      

    })
})
