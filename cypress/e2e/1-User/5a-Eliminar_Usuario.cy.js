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
      
      //BUSCAR A ROBERTO PERFUMO
      cy.get('#dt-search-0').should("be.visible").type("Riquelme{enter}")  
      
      //VERIFICAR LA EXISTENCIA DEL BOTÓN ELIMINAR
      cy.get('.btn-danger').should("be.visible").contains("Eliminar").click()

      //VERIFICAR LA EXISTENCIA DE PREGUNTA AL ELIMINAR
      cy.get('h3.mb-3').should("be.visible").contains("¿Está seguro que desea borrar al Usuario Riquelme, Juan?")

            
      //CLIC EN BOTÓN BORRAR
      cy.get('.btn-danger').should("be.visible").click()

      //CERRAR  SESIÓN
      cy.xpath("//button[@class='nav-link btn btn-link'][contains(.,'Cerrar sesión')]").should("be.visible").contains("Cerrar sesión").click()        
      cy.get('.modal-body').should("be.visible").contains("¿Estás seguro de que deseas cerrar sesión?")  
      cy.get('.modal-footer > .btn-primary').should("be.visible").click() 

    })
})
